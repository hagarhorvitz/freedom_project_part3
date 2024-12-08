from dotenv import load_dotenv
from os import environ

load_dotenv()
class FreedomAppConfig:
    mysql_host = environ.get("MYSQL_HOST")
    mysql_port = environ.get("MYSQL_PORT")
    mysql_user = environ.get("MYSQL_USER")
    mysql_password = environ.get("MYSQL_PASSWORD")
    mysql_database = environ.get("MYSQL_DATABASE")
    secret_key = environ.get("SECRET_KEY")