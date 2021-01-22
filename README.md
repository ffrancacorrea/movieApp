# Movie Application

## Requirements

To be able to run this app, you will need to:

- Install the dependencies located at the **package.json** file.
- Request an **API KEY** to access the Movie DB API. You can learn more about that [here](https://developers.themoviedb.org/3/getting-started/introduction).
- Add the **API KEY** as an environment variable named **MOVIE_DB_API_KEY**. You can see the key being referenced in the server.js file as follows:

```javascript
const API_KEY = process.env.MOVIE_DB_API_KEY;
```

## Start Application

In the project directory, run the command:

### `npm run dev`

This will start the server at [http://localhost:5000](http://localhost:5000) and the react web app at [http://localhost:3000](http://localhost:3000) simultaneously.

## Info

The App will retrieve at max the first 7 pages of each search; and the API returns a total of 20 pages per page.

### Have fun!
