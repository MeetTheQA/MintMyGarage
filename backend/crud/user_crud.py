from typing import Any, Dict, Optional, Union
import datetime
from sqlalchemy.orm import Session

from core.security import get_password_hash, verify_password
from crud.base import CRUDBase
from models.user import User
from schemas.user import UserCreate, UserUpdate


class CRUDUser(CRUDBase[User, UserCreate, UserUpdate]):
    def get_by_email(self, db: Session, *, email: str) -> Optional[User]:
        return db.query(User).filter(User.email == email).first()

    def get_by_id(self, db: Session, *, user_id: int) -> Optional[User]:
        return db.query(User).filter(User.id == user_id).first()

    def create(self, db: Session, *, obj_in: UserCreate) -> User:
        db_obj = User(
            firstname=obj_in.firstname,
            lastname=obj_in.lastname,
            email=obj_in.email,
            password=get_password_hash(obj_in.password),
            address=obj_in.address
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

   
    def authenticate(self, db: Session, *, email: str, password: str) -> Optional[User]:
        user = self.get_by_email(db, email=email)
        if not user:
            return None
        if not verify_password(password, user.password):
            return None
        return user


    def get_all_users(self,  db: Session):
        return db.query(User).all()


user = CRUDUser(User)
