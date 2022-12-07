import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from dotenv import load_dotenv
import numpy as np

load_dotenv()
CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")

def init_sp():
    client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
    sp = spotipy.Spotify(client_credentials_manager = client_credentials_manager)
    return sp

def get_songs_by_ids(ids_arr):
    sp = init_sp()
    result = sp.tracks(ids_arr)
    songs = []
    for t in result["tracks"]:
        songs.append(t["name"] + ", " + t["artists"][0]["name"])
    return songs

def get_features_by_ids(ids_arr):
    sp = init_sp()
    result = sp.audio_features(ids_arr)
    vecs = []

    for v in result:
        vecs.append(tuple(list(v.values())[:11]))


    avg = tuple(np.average(np.array(vecs), axis=0))

    return avg

def get_vec_from_playlist(playlist_id):
    sp = init_sp()
    result = sp.playlist_items(playlist_id)
    song_ids = []
    for s in result["items"]:
        song_ids.append(s["track"]["id"])

    avg_vec = get_features_by_ids(song_ids)
    return avg_vec
