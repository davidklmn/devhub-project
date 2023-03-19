import React, { useState, useEffect, Component } from 'react';
import ArticlesApi from './ArticlesApi';
import ArticlesDetails from './ArticlesDetails';
import useDebounce from '../../utils/debounceHook';

function ArticlesSearch() {
  const [query, setQuery] = useState('webdev');
  const [articles, setArticles] = useState([]);
 

  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(
    () => {
      ArticlesApi.search(query)
        .then((res) => {
          setArticles(res.data.articles[0]);
          console.log(res);
          setQuery(res.data.articles.search_query)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [debouncedSearchTerm],
    console.log(articles)
  );

  return (
    <div>
      <h1> query {query}</h1>
      <h1> Articles: {articles}</h1>
     
    </div>
  );
}

export default ArticlesSearch;