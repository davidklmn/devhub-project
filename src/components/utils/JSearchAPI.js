import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2b73a28341msh69ddf5b6abdc80bp19c0c6jsncd4e0aa41526',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
};

export default {
  search: function (query) {
    return fetch(
      'https://jsearch.p.rapidapi.com/search?query=' +
        query +
        '&page=1&num_pages=1',
      options
    );
  },
};

// const options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {
//     query: userInput,
//     page: '1',
//     num_pages: '1',
//   },
//   headers: {
//     'X-RapidAPI-Key': '6f175f5836msh6771f828ea2bcb2p1413ccjsnb64b7039b13d',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
//   },
// };

// export default {
//   search: function (query) {
//     return axios.request(options);
//   },
// };
