import React, { useState, useEffect, Component } from 'react';
import JSearchAPI from './utils/JSearchAPI';
import JobCard from './Jobcard';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
    <Container className="mt-5">
      {/* <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form> */}
      <Form id="form" className="w-75" onSubmit={handleSubmit}>
        <InputGroup id="input" className="mb-3">
          <Form.Control
            type="search"
            value={query}
            onChange={handleInputChange}
            placeholder={query}
            aria-describedby="basic-addon2"
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Form>

      {data ? (
        Object.keys(data.data).map((i) => (
          <JobCard
            image={data.data[i].employer_logo}
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
    </Container>
  );
}

export default JobSearch;
