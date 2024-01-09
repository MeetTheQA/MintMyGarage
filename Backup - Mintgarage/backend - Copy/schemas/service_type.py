from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, EmailStr



class ServiceType(BaseModel):
    id: int
    service_type: str

    class Config:
        orm_mode = True