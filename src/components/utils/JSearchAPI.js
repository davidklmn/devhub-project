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
