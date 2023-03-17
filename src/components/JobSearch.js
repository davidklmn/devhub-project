import React, { useState, useEffect, Component } from 'react';
import JSearchAPI from './utils/JSearchAPI';
import JobDetail from './JobDetail';
import useDebounce from './utils/debounceHook';

function JobSearch() {
  const [query, setQuery] = useState('Web Developer, UK');
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(
    () => {
      JSearchAPI.search(query)
        .then((res) => {
          setTitle(res.data.data[0].job_title);
          console.log(res);
          setDescription(res.data.data[0].job_description);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [debouncedSearchTerm],
    console.log(title)
  );

  return (
    <div>
      <h1> jobtitle: {title}</h1>
      <p>Description: {description}</p>
    </div>
  );
}

export default JobSearch;
