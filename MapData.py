from flask import Flask, render_template, request, redirect,g,jsonify
from contextlib import closing
import sqlite3

app = Flask(__name__)
app.debug = True

def dict_factory(cursor, row):  					#转换元组为字典类型
    d = {}  
    for idx, col in enumerate(cursor.description):  
        d[col[0]] = row[idx]  
    return d
 
def connect_db():
    return sqlite3.connect('MapData.db')

@app.before_request
def before_request():
    g.db = connect_db()
    g.db.row_factory = dict_factory

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()
    g.db.close()

# conn = sqlite3.connect('/MapData.db')
# conn.row_factory = dict_factory
# curs = conn.cursor()
# curs.execute('''CREATE TABLE MapData (specie varchar(20), nid varchar(5), location_x int, location_y int, rank FLOAT, comment_num int)''')
# curs.execute('''CREATE TABLE comments (specie varchar(20), nid int, comment_num int, comment varchar[100])''')

@app.route('/<specie>/<nid>/', methods=['GET','POST'])				
def info(specie,nid):					
	if request.method == 'GET':				#用户获取商家信息
		g.db.cursor().execute('''INSERT INTO MapData VALUES('a','1',1,1,1.0,1)''')
		g.db.commit()
		print('Done')
		g.db.cursor().execute('''SELECT * FROM MapData ''')
		g.db.commit()
		info = g.db.cursor().fetchall()
		print(info)
		if info == True:			
			return jsonify(info[0])
		else:
			return '没有信息'

	elif request.method == 'POST':			#用户添加评论
		g.db.cursor().execute('''SELECT rank comment_num from MapData where specie = ? and nid = ?''',[specie,nid])
		get_rank = g.db.cursor().fetchall()
		current_rank = get_rank[0]['rank']
		current_num = get_rank[0]['comment_num']
		current_rank = (current_rank*current_num + request.form.get('rank'))/(current_num+1)
		current_num += 1		
		g.db.cursor().execute('''UPDATE MapData  SET rank = ? , comment_num = ? where specie = ? and nid = ?''',[current_rank,current_num,specie,nid])	#修改评级
		g.db.commit()
		g.db.cursor().execute('''INSERT into comments VALUES(?,?,?,?)''', [specie, nid,current_num,request.form.get('commit')])		#添加一条评论
		g.db.commit()
		return '添加评论成功'

if __name__ == '__main__':
	app.run()



