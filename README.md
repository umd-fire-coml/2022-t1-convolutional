<h1 align="center">Music Recommendation System </h1>
<p align="center">By: Andrew Lee, Krisha Gandhi, Pranav Dulepet, Rishiraj Ghosh, Vikas Reddy </p>
<div align="center"><h3><a href="https://fire-song-recommendation.vercel.app/">Live App Demo</a></h3></div>

## Description:
We have created a song recommendation system based on user history. Our product takes in a user’s playlist(s) and recommends songs based on the playlist(s). 
The product uses the Spotify API to extract the features of a song (11 features in total), these range from danceability to tempo to instrumentalness. Using an aggregation function, the feature vector of all songs from the user-inputted playlist(s) is converted to one aggregated feature vector. The model is made of multiple layers; the two main layers are the embedding layer and the triplet loss layer. The triplet loss function helps optimize the model as it reduces the distance between positive pairs and increases the distance between negative pairs. The model outputs an   11 x 1 feature vector. This vector is run through the nearest neighbor function that finds songs with similar features. These are the songs that are recommended by the model for the user. 

## Product Demo Video:
[App Demo.webm](https://user-images.githubusercontent.com/33373459/206632999-5031e9bb-31bc-4b87-9a0a-5d0ffeafbf15.webm)

## System Architecture:
![system_design](https://user-images.githubusercontent.com/33373459/206633139-7736d26e-130d-458b-975f-105b61907924.jpg)

## Model Architecture:
![model_design](https://user-images.githubusercontent.com/33373459/206633546-d2fc8dd2-7ae5-4ccb-9df5-d1a2d3970a8f.png)

## Directory Guide:
* ```react-app/src/components```: react frontend to display recommendations to the user
* ```react-app/src/recommend.js```: flask backend call to fetch recommendations from the python server
* ```server/embeddings.py```: Builds the base model for our recommendation system
* ```server/server.py```: Backend server to print the recommended songs 
* ```server/sp.py```: Load the feature vectors of the inputted songs
* ```server/similarity_search.py```: Predicts similar songs based on using the k-nearest neighbor algorithm on the feature vectors of the inputted songs.
* ```server/weights.hdf5```: The most accurate saved weights from training the model. 
* ```training/training.ipynb```: colab notebook to train the model using a triplet loss function.

## Running the Project Locally:
### Training the Model:
1) Run the “training.ipynb” notebook
2) After running .fit() on the embeddings model, save the best weights file (.hdf5)
3) Save the “transformed.txt” file (contains the embeddings for each song in the dataset)

### Testing the Model:
#### Running the Flask Server:
1) Create a Spotify ```client_id``` & ```client_secret``` ([Instructions](https://developer.spotify.com/documentation/web-api/quick-start/))
```
SPOTIFY_CLIENT_ID=[your_client_id]
SPOTIFY_CLIENT_SECRET=[your_client_secret]
```

2) Create a ```.env``` file in the server folder
3) Install Python packages
```
pip install flask==2.2.2
pip install tensorflow
pip install numpy
pip install spotipy
pip install python-dotenv
pip install faiss-cpu	
```
4) Starting the server on locahost
```
flask --app application.py run
```
#### Running the client:
1) Install Node.js & npm (if needed)
2) Start client on localhost:
```
npm i
npm start
```

## Citations & References:
[1] Xingping Dong, Jianbing Shen; Proceedings of the European Conference on Computer Vision (ECCV), 2018, pp. 459-474 <br><br>
[2]  D. Wettschereck and D. Thomas G., “Locally adaptive nearest neighbor algorithms,” Adv. Neural Inf. Process. Syst., pg. 184–186, 1994. <br><br>
[3] Han EH.., Karypis G., Kumar V. (2001) “Text Categorization Using Weight Adjusted k-Nearest Neighbour Classification”. In: Cheung D., Williams G.J., Li Q. (eds) Advances in Knowledge Discovery and Data Mining. PAKDD 2001. Lecture Notes in Computer Science, vol 2035. Springer, Berlin, Heidelberg
