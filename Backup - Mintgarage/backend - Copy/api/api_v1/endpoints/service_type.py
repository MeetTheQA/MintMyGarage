from typing import Any, List

from api import deps
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import models
import schemas

router = APIRouter()


@router.get("/service_types", response_model=List[schemas.ServiceType])
def get_service_types(
        *,
        db: Session = Depends(deps.get_db),
        
) -> Any:
    service_types = crud.type_crud.get_all_service_types(db)
    print(service_types)
    return service_types
