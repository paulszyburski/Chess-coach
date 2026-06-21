from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

from services.fetch_rating import fetch_chesscom_stats, fetch_lichess_stats
from services.fetch_pfp import fetch_chesscom_pfp, fetch_lichess_pfp

app = FastAPI()


@app.get('/stats/{username}')
def fetch_stats(username: str, platform: str):
  stats = None
  if platform == "chess.com": 
    stats = fetch_chesscom_stats(username)
  elif platform == "lichess": 
    stats = fetch_lichess_stats(username)
  return stats


@app.get('/profile-picture/{username}')
def fetch_profile(username: str, platform: str):
  pfp_url = None
  if platform == "chess.com":
    pfp_url = fetch_chesscom_pfp(username)
  elif platform == "lichess":
    pfp_url = fetch_lichess_pfp(username)
  return pfp_url

