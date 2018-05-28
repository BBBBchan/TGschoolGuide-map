from flask import Flask, render_template, request, redirect

app = Flask(__name__)
app.debug = True

MapData = {
	'EAT':{
			1:{'name':'', 'location':'', 'detail':'', 'comment':''},
	},
	'TRANS':{
			1:{'name':'', 'location':'', 'detail':'', 'comment':''},
	},
	'STUDY':{
			1:{'name':'', 'location':'', 'detail':'', 'comment':''},
	},
	'SERVICE':{
			1:{'name':'', 'location':'', 'detail':'', 'comment':''},
	},
}
#@app.route('/', method=['GET'])
#def info(specie,nid):
	# information = MapData.get(specie).get(nid)
	# return render_template('info.html', information = information)

print(MapData.get('EAT').get(1))
