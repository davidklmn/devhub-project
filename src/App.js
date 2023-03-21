import "./App.css";
import Navigation from "../src/components/Navigation";
import JobSearch from "./components/JobSearch.js";
import Home from "./components/Home";
import Articles from "../src/components/ArticleSearch";
import ArticleSearch from "./components/ArticleSearch";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Navigation />
          </Col>
          <Switch>
            <Route path="/jobSearch">
              <Col xs={8} id="page-content-wrapper">
                <JobSearch></JobSearch>
              </Col>
            </Route>
            <Route path="/articleSearch">
              <Col xs={8} id="page-content-wrapper">
                <ArticleSearch></ArticleSearch>
              </Col>
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
