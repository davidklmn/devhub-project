import "./App.css";
import Navigation from "../src/components/Navigation";
import JobSearch from "./components/JobSearch.js";
import Home from "./components/Home";
// import Articles from "../src/components/ArticleSearch";
import ArticleSearch from "./components/ArticleSearch";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
      <Route exact path="/home">
          <Home/>
        </Route>
        <Route path="/jobSearch">
          <JobSearch/>
        </Route>
        <Route path="/articleSearch">
          <ArticleSearch/>
        </Route>
      </Switch>
    </Router>
 
  );
}

export default App;
