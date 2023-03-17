import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1',
  },
  headers: {
    'X-RapidAPI-Key': '6f175f5836msh6771f828ea2bcb2p1413ccjsnb64b7039b13d',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
};

export default {
  search: function (query) {
    return axios.request(options);
  },
};
