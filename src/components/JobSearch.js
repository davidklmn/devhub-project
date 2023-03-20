import React, { useState, useEffect, Component } from 'react';
import JSearchAPI from './utils/JSearchAPI';
import JobCard from './Jobcard';

function JobSearch() {
  // * useState variables
  const [query, setQuery] = useState('Web Developer, UK');
  const [data, setData] = useState();

  //*useEffect initialise the page on load
  useEffect(searchJobs, []);

  //* Job search function using api call
  function searchJobs() {
    JSearchAPI.search(query)
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
    searchJobs();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      {data ? (
        Object.keys(data.data).map((i) => (
          <JobCard
            title={data.data[i].job_title}
            company={data.data[i].employer_name}
            location={data.data[i].job_city}
            jobType={data.data[i].job_employment_type}
            pageLink={data.data[i].job_apply_link}
          ></JobCard>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default JobSearch;
