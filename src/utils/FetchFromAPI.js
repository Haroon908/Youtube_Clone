const axios = require('axios');
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '0e6c2da4fbmshe339b4349dc8171p16874bjsne3d46fd0e3ff',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };  

export const FetchFromAPI= async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}