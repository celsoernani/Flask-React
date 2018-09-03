import os.path
import app.controllers.metodos as metodos
from app import app,db
from app.controllers.metodos import marcarGols
from flask import render_template, request, jsonify
from app.models.tables import Time, Partida
from sqlalchemy import text
from sqlalchemy import create_engine
from sqlalchemy.sql import select





@app.route("/study",methods = ['POST'])	
def study():
	var = request.get_json(silent= True)
	return jsonify({"teste":"testeFlask"})



@app.route("/dados",methods = ['POST'])	
def dados():
	var = request.get_json(silent= True)
	jsonDados = metodos.getComponents(var)
	return jsonDados


@app.route("/marcarGol",methods = ['POST'])
def marcarGol():
	jsonGol = request.get_json(silent = True)
	print(jsonGol)

	jsonGols = metodos.marcarGols(jsonGol)
	return jsonGols