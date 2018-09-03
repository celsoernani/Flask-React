from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from sqlalchemy.sql import select
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config.from_object('config')
db = SQLAlchemy(app)
##cuidando das migrações, ta recebendo o bd e a aplicação
migrate = Migrate(app, db)

##vai cuidar dos comando
manager = Manager(app)
manager.add_command('db', MigrateCommand)

from app.models import tables
from app.controllers import default
