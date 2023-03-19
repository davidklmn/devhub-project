import "./App.css";
import Navigation from "./components/pages/Navigation";
import Articles from "./components/pages/Articles";
import Home from "./components/pages/Home";
import Jobs from "./components/pages/Jobs";
import Saved from "./components/pages/Saved";

//import JSearchAPI from "./components/utils/JSearchAPI";
//import JobSearch from "./components/JobSearch.js";
import ".././node_modules/uikit/dist/css/uikit.min.css";
import ".././node_modules/uikit/dist/js/uikit.min.js";
import ".././node_modules/uikit/dist/js/uikit-icons.min.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/jobs">
              <Jobs />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
