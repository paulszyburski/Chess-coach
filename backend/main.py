from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from services.fetch_rating import fetch_chesscom_stats, fetch_lichess_stats

app = FastAPI()


@app.get('/stats/{username}')
def fetch_stats(username: str, platform: str):
  stats = None
  if platform == "chess.com": 
    stats = fetch_chesscom_stats(username)
  elif platform == "lichess": 
    stats = fetch_lichess_stats(username)
  return stats


