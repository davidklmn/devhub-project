import './App.css';
import Navigation from './components/Navigation';
import JSearchAPI from './components/utils/JSearchAPI';
import JobSearch from './components/JobSearch.js';
import '.././node_modules/uikit/dist/css/uikit.min.css';
import '.././node_modules/uikit/dist/js/uikit.min.js';
import '.././node_modules/uikit/dist/js/uikit-icons.min.js';
import Home from './components/pages/Home';
import { Article } from 'uikit-react';
import ArticleSearch from './components/ArticleSearch';

function App() {
  return (
    // <div>
    //   <Navigation />
    //   <div>
    //     <Home />
    //   </div>
    // </div>
    <div>
      <ArticleSearch></ArticleSearch>
    </div>
  );
}

export default App;
