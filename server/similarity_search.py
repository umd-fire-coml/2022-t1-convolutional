from embeddings import load_model
from sp import get_songs_by_ids

import ast
import numpy as np
import faiss

def build_faiss(tracks):
    data = [i[1] for i in tracks]
    data = np.asarray(data).astype("float32")

    index = faiss.IndexFlatL2(11)
    index.add(data)

    return index

def load_vectors():
    data = []

    with open('./transformed.txt', 'r') as file:
        for line in file:
            arr = line.split(" ")
            if len(arr) == 2:
                data.append((arr[0], ast.literal_eval(arr[1])))

    return data

def recommend(embedding_model, faiss_model, feature_vec):
    k = 3 # num songs to recommend (k nearest)
    result = embedding_model.predict([feature_vec])
    # D -> squared loss
    # I -> recommendations (represented as indices)
    D, I = faiss_model.search(result, k)

    return I

def similarity_search(feature_vec):
    tracks = load_vectors()
    embeddings_model = load_model()
    faiss_model = build_faiss(tracks)

    rec_idxs = recommend(embeddings_model, faiss_model, feature_vec)

    ids_arr = [tracks[rec][0] for rec in rec_idxs[0]]
    songs = get_songs_by_ids(ids_arr)

    return songs