from typing import Any, Dict, Optional, Union
import datetime
from sqlalchemy.orm import Session
from schemas.service import Service
from crud.base import CRUDBase
from models.user import BookService


class CRUDUser(CRUDBase[BookService, Service, Service]):
    
    def add(self, db:Session, user_id: int, obj_in: Service):
        db_obj = BookService(
            user_id=user_id,
            service_type_id=obj_in.service_type_id,
            description=obj_in.description
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_all_services(self,  db: Session):
        return db.query(BookService).all()


service_crud = CRUDUser(Service)
