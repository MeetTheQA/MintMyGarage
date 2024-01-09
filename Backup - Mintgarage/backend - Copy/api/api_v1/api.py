from fastapi import APIRouter

from api.api_v1.endpoints import login, users, service_type, service

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, tags=["users"])
api_router.include_router(service_type.router, tags=["service type"])
api_router.include_router(service.router, tags=["service booking"])