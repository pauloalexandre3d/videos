import axios from 'axios';

const KEY = 'AIzaSyDgN9N1m5eekTmT30FGiHW0VC24tKNnn5U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
