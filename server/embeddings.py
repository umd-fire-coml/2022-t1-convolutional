import os
# suppress useless tensorflow logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras import layers
from tensorflow.keras.layers import Input
from tensorflow.keras import backend as K
from tensorflow.keras.layers import Layer

class TripletLossLayer(Layer):
  def __init__(self, alpha, **kwargs):
    self.alpha=alpha
    super(TripletLossLayer, self).__init__(**kwargs)

  def get_config(self):
    config = super().get_config().copy()
    config.update({
        'aplha':self.alpha
    })
    return config
  
  def triplet_loss(self, inputs):
    a, p, n, = inputs
    p_dist = K.sum(K.square(a-p), axis=-1)
    n_dist = K.sum(K.square(a-n), axis=1)
    return K.sum(K.maximum(p_dist-n_dist+self.alpha,0),axis=0)

  def call(self, inputs):
    loss = self.triplet_loss(inputs)
    self.add_loss(loss)
    return loss

def load_model():
    # Input for anchor, positive, and negative images
    in_a = Input(shape=(11, 1), name="song_a")
    in_p = Input(shape=(11, 1), name="song_p")
    in_n = Input(shape=(11, 1), name="song_n")

    # create the base model
    base = layers.Dense(11)(in_a)
    flatten = layers.Flatten()(base)
    dense = layers.Dense(11, activation="relu")(flatten) 
    dense = layers.BatchNormalization()(dense)
    output = layers.Dense(11)(dense)

    embedding = Model(in_a, output, name="Embedding")

    # Custom vector representation of each song
    emb_a, emb_p, emb_n = embedding(in_a), embedding(in_p), embedding(in_n)

    # Layer that computes the triplet loss from anchor, positive and negative embedding vectors
    triplet_loss_layer = TripletLossLayer(alpha=0.2, name='triplet_loss_layer')([emb_a, emb_p, emb_n])

    model = Model([in_a, in_p, in_n], triplet_loss_layer) 
    model.load_weights("./weights.hdf5")

    base_model = model.get_layer("Embedding")
    # base_model.summary()

    return base_model