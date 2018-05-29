import sqlite3

conn = sqlite3.connect('MapData.db')

def dict_factory(cursor, row):  					#转换元组为字典类型
    d = {}  
    for idx, col in enumerate(cursor.description):  
        d[col[0]] = row[idx]  
    return d

conn.row_factory = dict_factory
curs = conn.cursor()
curs.execute('''INSERT INTO comments values(?,?,?,?)''',['eat','1','2','好吃'])
conn.commit()
conn.close()