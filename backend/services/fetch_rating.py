import requests

def fetch_chesscom_stats(username):
  url = f"https://api.chess.com/pub/player/{username}/stats"
  response = requests.get(
    url,
    headers={"User-Agent": "ChessCoachApp/1.0 contact-you@example.com"},
    timeout=10,
  )
  response.raise_for_status()
  return response.json()
  
def fetch_lichess_stats(username):
    url = f"https://lichess.org/api/user/{username}"
    response = requests.get(
        url,
        headers={"Accept": "application/json"},
        timeout=10,
    )
    response.raise_for_status()
    return response.json()
