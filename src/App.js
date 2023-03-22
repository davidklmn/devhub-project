import './App.css';
import Navigation from '../src/components/Navigation';
import JobSearch from './components/JobSearch.js';
import Home from './components/Home';
import ArticleSearch from './components/ArticleSearch';
import { Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Row>
        <Col xs={3} id="sidebar-wrapper">
          <Navigation />
        </Col>
        <Redirect to="/home" />
        <Switch>
          <Route exact path="/home">
            <Col xs={9}>
              <Home />
            </Col>
          </Route>
          <Route path="/jobSearch">
            <Col xs={9}>
              <JobSearch />
            </Col>
          </Route>
          <Route path="/articleSearch">
            <Col xs={9}>
              <ArticleSearch />
            </Col>
          </Route>
        </Switch>
      </Row>
    </Router>
  );
}

export default App;
