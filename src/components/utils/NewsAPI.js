export default {
  search: function (query) {
    return fetch(
      'https://newsapi.org/v2/everything?q=' +
        query +
        '&apiKey=541e976da3274cf7adc538b405895dd9'
    );
  },
};
