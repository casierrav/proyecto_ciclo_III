from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
import datetime

from db.db_connection import Base, engine

class TransactionInDB(Base):
    __tablename__ = "transactions"

    id              = Column(Integer, primary_key=True, autoincrement=True)
    username        = Column(String, ForeignKey("users.username"))
    date            = Column(DateTime, default=datetime.datetime.utcnow)
    value           = Column(Integer)
    actual_balance  = Column(Integer)

Base.metadata.create_all(bind=engine)

'''
from datetime import datetime
from pydantic import BaseModel


class TransactionInDB(BaseModel):
    id_transaction: int = 0
    username: str
    date: datetime = datetime.now()
    value: int
    actual_balance: int

    
database_transactions = []
generator = {"id":0}


def save_transaction(transaction_in_db: TransactionInDB):
    generator["id"] = generator["id"] + 1
    transaction_in_db.id_transaction = generator["id"]
    database_transactions.append(transaction_in_db)
    return transaction_in_db
'''