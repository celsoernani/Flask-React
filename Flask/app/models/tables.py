from app import db



class Time(db.Model):
	__tablename__ = "Times"
	id = db.Column(db.Integer, primary_key = True)
	nomeTime = db.Column(db.String(100), unique = True)

	def __init__(self, name):
		self.nomeTime = name

class Partida(db.Model):
	__tablename__ = "Patidas"
	id = db.Column(db.Integer, primary_key= True)
	estadio = db.Column(db.String(100))
	data = db.Column(db.DateTime)
	gols_casa = db.Column(db.Integer)
	gols_visitante = db.Column(db.Integer)
	id_visitante = db.Column(db.Integer, db.ForeignKey('Times.id'))
	id_casa = db.Column(db.Integer, db.ForeignKey('Times.id'))

	def __init__(self, estadio, data, gols_casa, gols_visitante):
		self.estadio = estadio
		self.data = data
		self.gols_casa = gols_casa
		self.gols_visitante = gols_visitante 



		






