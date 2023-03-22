import React from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Home.css';
import appImage from './group.svg';
import { Nav } from 'react-bootstrap';

function Home() {
  return (
    <Container id="main-container" className="md-lg-10">
      <Row>
        <Col className="col-lg-6 col-md-12">
          <Container id="content">
            <Container id="hero">
              <h1>You finished the Bootcamp, huh?</h1>
              <p>
                Let's start with finding jobs or checkout the latest WebDev
                news.
              </p>
              <Nav>
                <Nav.Link as={Link} to="/jobSearch">
                  <Button id="job-button">Search Jobs</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/articleSearch">
                  <Button id="article-button">Articles</Button>
                </Nav.Link>
              </Nav>
            </Container>
          </Container>
        </Col>
        <Col className="col-lg-6 d-lg-block d-none">
          <Image fluid src={appImage} className="d-none d-lg-block"></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
