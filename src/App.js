import './App.css';
import Navigation from './components/Navigation';
import JobSearch from './components/JobSearch.js';
import Home from './components/pages/Home';
import Articles from './components/pages/Articles';
import ArticleSearch from './components/ArticleSearch';
import { Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Navigation />
        </Col>
        <Col xs={8} id="page-content-wrapper">
          <JobSearch></JobSearch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
