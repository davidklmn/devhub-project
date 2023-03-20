import React, { useState, useEffect } from 'react';
import NewsAPI from './utils/NewsAPI';
import ArticleCard from './ArticleCard';

function ArticleSearch() {
  // * useState variables
  const [query, setQuery] = useState('React web development');
  const [data, setData] = useState();

  //*useEffect initialise the page on load
  useEffect(searchArticles, []);

  //* Job search function using api call
  function searchArticles() {
    NewsAPI.search(query)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchArticles();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {data ? (
        Object.keys(data.articles).map((i) => (
          <ArticleCard
            title={data.articles[i].title}
            source={data.articles[i].source.Name}
            pageLink={data.articles[i].url}
          ></ArticleCard>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default ArticleSearch;
