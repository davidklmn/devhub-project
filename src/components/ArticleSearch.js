import React, { useState, useEffect } from 'react';
import NewsAPI from './utils/NewsAPI';
import ArticleCard from './ArticleCard';
import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
    <Container className="mt-5">
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
    </Container>
  );
}

export default ArticleSearch;
