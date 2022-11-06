from flask import Flask
from  flask_mysqldb import MySQL


#The database is hosted on aiven
app=Flask(__name__)

app.config['MYSQL_HOST']='mysql-3a7e821f-alaa-fe76.aivencloud.com'
app.config['MYSQL_USER'] = 'avnadmin'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'PhDapp'

my_sql=MySQL(app)