import os.path
from flask import jsonify
from app.models.tables import Partida, Time
from app import *
from sqlalchemy import update
from sqlalchemy.sql import select


def getComponents(var):
    p = Partida.query.filter_by(id=var["id"]).first()
    tc = Time.query.filter_by(id=p.id_casa).first()
    tv = Time.query.filter_by(id=p.id_visitante).first()
    return jsonify({"id": p.id,
					"estadio": p.estadio,
					"data": str(p.data),
					"gols_casa": p.gols_casa,
					"gols_visitante" : p.gols_visitante,
					"time_casa": tc.nomeTime,
					"time_visitante": tv.nomeTime
					})



def marcarGols(var):
	if(var['gol'] == '0'):
		p = Partida.query.filter_by(id=var["id"]).first()
		golsatual = p.gols_casa
		golsatualiza = Partida.query.filter_by(id=var["id"]).update(dict(gols_casa= golsatual + 1))
		db.session.commit()
	else:
		p = Partida.query.filter_by(id=var["id"]).first()
		golsatual = p.gols_visitante
		golsatualiza = Partida.query.filter_by(id=var["id"]).update(dict(gols_visitante= golsatual + 1))
		db.session.commit()

	return jsonify({
					"gol": golsatual + 1,
					})