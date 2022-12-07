# 2022-t1-convolutional

### to run server:

installation:
```
pip install flask==2.2.2
pip install tensorflow
pip install numpy
pip install spotipy
pip install python-dotenv

conda install -c conda-forge faiss
```

start the server:
```
cd server
flask --app server.py run
```

environment variables:
create .env file in the root dir
```
SPOTIFY_CLIENT_ID=[your client id]
SPOTIFY_CLIENT_SECRET=[your client secret]
```


### to run the frontend
(install Node.js)

```
cd react-app
npm i
npm start
```