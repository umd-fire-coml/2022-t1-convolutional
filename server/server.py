from similarity_search import similarity_search
from sp import get_vec_from_playlist

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "use the /recommend route"

@app.route("/recommend", methods=['GET'])
def recommend():
    args = request.args
    playlistIds = args.get("playlistIds").split(",")
    avg_vec = get_vec_from_playlist(playlistIds[0])

    # result = similarity_search((0.781,0.721,5,-9.133,0,0.0514,0.0945,0.391,0.104,0.849,123.011))
    result = similarity_search(avg_vec)

    print(playlistIds, flush=True)
    print(result, flush=True)

    return jsonify(
        recommendations=result
    )

