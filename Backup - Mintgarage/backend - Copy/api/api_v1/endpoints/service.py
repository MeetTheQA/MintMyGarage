from typing import Any, List

from api import deps
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import models
import schemas

router = APIRouter()


@router.get("/services", response_model=List[schemas.ServiceResponse])
def get_service_types(
        *,
        db: Session = Depends(deps.get_db),
        current_user: models.User = Depends(deps.get_current_user)
) -> Any:
    service_types = crud.service_crud.get_all_services(db)
    return service_types


@router.post("/services", response_model=schemas.ServiceResponse)
def get_service_types(
        *,
        db: Session = Depends(deps.get_db),
        current_user: models.User = Depends(deps.get_current_user),
        service_in: schemas.Service
) -> Any:
    service_types = crud.service_crud.add(db, current_user.id, service_in)
    return service_types
