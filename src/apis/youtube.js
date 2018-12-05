import axios from 'axios';

const KEY = 'AIzaSyCXpyacNzgAW3RTG5I6-VYPLWQFJr3czXM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});