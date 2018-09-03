
##parametro da conexão e passa onde o baco de addos es esta; no nosso caso vai usar o postgree, assim tendo a string do endereço
import os.path

basedir = os.path.abspath(os.path.dirname(__file__))
DEBUG = True 
SQLALCHEMY_DATABASE_URI =  'sqlite:///' + os.path.join(basedir,'storage.db')
SQLALCHEMY_TRACK_MODIFICATIONS = True
SECRET_KEY = 'celsoernani'