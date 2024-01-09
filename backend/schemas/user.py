from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, EmailStr



# Shared properties
class UserBase(BaseModel):
    firstname: str
    lastname: str
    address: str
    email: str

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

# Properties to receive via API on update
class UserUpdate(UserBase):
    password: Optional[str] = None


class UserInDBBase(UserBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


# Additional properties to return via API
class User(UserInDBBase):
    pass

