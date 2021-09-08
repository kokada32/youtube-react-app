import axios from 'axios';

const KEY = 'AIzaSyBNAWD-tg7ga7inKDMwQxY9gIEl3X6D0FE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});