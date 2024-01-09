from sqlalchemy.orm import Session
from db import base
from db.session import engine


def init_db() -> None:
    base.Base.metadata.create_all(bind=engine)


init_db()
