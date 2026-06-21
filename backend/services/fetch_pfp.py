import requests

def fetch_chesscom_pfp(username):
  url = f"https://api.chess.com/pub/player/{username}"
  response = requests.get(
    url,
    headers={"User-Agent": "ChessCoachApp/1.0 contact-you@example.com"},
    timeout=10,
  )
  response.raise_for_status()
  return response.json().get("avatar")

def fetch_lichess_pfp(username):
  return None
