from flask import Flask,g
import sqlite3
import json

app = Flask(_name_)

DATABASE = '/var/www/html/guide.db'

def connect_db():
		return sqlite3.connect(DATABASE)

@app.before_request
def before_request():
	g.db = connect_db()

@app.teardown_request
def teardon_request(exception):
	if hasattr(g,'db'):
		g.db.close()

@app.route('/guide/')
def returndb():
	return json.dumps(DATABASE)

if __name__ == '__main__':
	app.debug = True
	app.run(host='0,0,0,0',port=80)
