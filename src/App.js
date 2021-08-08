import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateNew from './components/CreateNew';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Page from './components/Page';



function App() {
  
  return (
      <Router>
        <NavBar />
        <switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route path="/create">
            <CreateNew/>
          </Route>

          <Route path="/posts/:id">
            <Page />
          </Route>
        </switch>
      </Router>
  );
}

export default App;
