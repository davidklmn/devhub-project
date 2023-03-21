import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import './Home.css';
import appImage from './group.svg';

function Home() {
  return (
    <Container id="main-container" className="md-lg-10">
      <Row>
        <Col className="col-md-6">
          <Container id="content">
            <Container id="hero">
              <h1>You finished the Bootcamp, huh?</h1>
              <p>
                Let's start with finding jobs, or checkout the latest WebDev
                news.
              </p>
              <Button id="job-button">Search Jobs</Button>
              <Button id="article-button">Articles</Button>
            </Container>
          </Container>
        </Col>
        <Col className="col-md-6">
          <Image fluid src={appImage}></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
