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
    print(playlistIds, flush=True)
    return jsonify(
        recommendations=["rec 1", "rec 2", "rec 3"]
    )


