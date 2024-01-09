from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, EmailStr



class Service(BaseModel):
    service_type_id: int
    description: str

    class Config:
        orm_mode = True

class ServiceResponse(Service):
    user_id: int