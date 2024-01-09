from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from core.config import settings

SQL_ALCHEMY_DATABASE_URI = 'mysql+pymysql://root:MyNewPass@localhost/mintgarage'

engine = create_engine(SQL_ALCHEMY_DATABASE_URI, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
