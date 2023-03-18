// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://medium2.p.rapidapi.com/',
//   headers: {
//     'X-RapidAPI-Key': '1ee82bea07msh2ba14bbeab2c312p121c84jsna205407ae952',
//     'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// export default {
//     search: function (query) {
//       return axios.request(options);
//     },
//   };
  
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://medium2.p.rapidapi.com/search/articles',
  params: {query: 'web developer'},
  headers: {
    'X-RapidAPI-Key': '1ee82bea07msh2ba14bbeab2c312p121c84jsna205407ae952',
    'X-RapidAPI-Host': 'medium2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default {
    search: function (query) {
      return axios.request(options);
    },
  };