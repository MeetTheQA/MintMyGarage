from sqlalchemy.orm import Session

from crud.base import CRUDBase
from models.user import ServiceType


class CRUDUser(CRUDBase[ServiceType, ServiceType, ServiceType]):
    def get_all_service_types(self,  db: Session):
        return db.query(ServiceType).all()


type_crud = CRUDUser(ServiceType)
