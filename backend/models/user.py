from typing import TYPE_CHECKING

from sqlalchemy import Boolean, Column, Integer, String, Table, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from db.base_class import Base


class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String(255), nullable=False)
    lastname = Column(String(255), nullable=False)
    address = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True)
    password = Column(String(255), nullable=False)

class ServiceType(Base):
    __tablename__ = "service_type"
    id = Column(Integer, primary_key=True, index=True)
    service_type = Column(String(255), nullable=False)

class BookService(Base):
    __tablename__ = "book_service"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    service_type_id = Column(Integer, ForeignKey('service_type.id'))
    description = Column(String(255), nullable=False)    
