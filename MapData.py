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
# curs.execute('''CREATE TABLE MapData (specie varchar(20), nid varchar(5), name varchar(20), location_x int, location_y int, rank FLOAT, comment_num int)''')
# curs.execute('''CREATE TABLE comments (specie varchar(20), nid int, comment_num int, comment varchar[100])''')

@app.route('/all',methods=['GET'])			#获取所有商家信息
def all_info():
	if request.method == 'GET':
		curs = g.db.cursor()
		curs.execute('''SELECT name, location_x, location_y, rank, comment_num FROM MapData''')
		all_of_info = curs.fetchall()
		if all_of_info :
			return jsonify(all_of_info)
		else:
			return '没有信息'

@app.route('/<specie>',methods = ['GET'])	#获取某种类型的所有信息
def get_specie_info(specie):
	if request.method == 'GET':
		curs = g.db.cursor()
		curs.execute('''SELECT name, location_x, location_y, rank, comment_num FROM MapData WHERE specie = ?''',[specie])
		all_specie_info = curs.fetchall()
		if all_specie_info :
			return jsonify(all_specie_info)
		else:
			return '没有信息'

@app.route('/<specie>/<nid>/', methods=['GET','POST'])				
def info(specie,nid):					
	if request.method == 'GET':				#用户获取某个商家信息和评论，格式为先是商家信息，之后对应若干条评论
		curs = g.db.cursor()
		curs.execute('''SELECT * FROM MapData where specie = ? and nid = ?''', [specie,nid])
		g.db.commit()
		info = curs.fetchall()
		curs.execute('''SELECT comment FROM comments where specie = ? and nid = ?''', [specie,nid])
		info += curs.fetchall()
		if info:			
			return jsonify(info)
		else:
			return '没有信息'

	elif request.method == 'POST':			#用户添加评论并评级
		curs = g.db.cursor()
		curs.execute('''SELECT rank comment_num from MapData where specie = ? and nid = ?''',[specie,nid])
		get_rank = curs.fetchall()
		current_rank = get_rank[0]['rank']
		current_num = get_rank[0]['comment_num']
		if request.form.get('rank') :		#验证用户是否评级
			current_rank = (current_rank*current_num + request.form.get('rank'))/(current_num+1)
			current_num += 1		
			curs.execute('''UPDATE MapData  SET rank = ? , comment_num = ? where specie = ? and nid = ?''',[current_rank,current_num,specie,nid])	#修改评级
			g.db.commit()
			
			if request.form.get('commit'):	#验证用户是否评论
				curs.execute('''INSERT into comments VALUES(?,?,?,?)''', [specie, nid,current_num,request.form.get('commit')])		#添加一条评论
				g.db.commit()
				return '评论成功'
			else:
				return '请输入评论'
		
		else:
			return '请输入等级'

if __name__ == '__main__':
	app.run()



