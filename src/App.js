
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Teste from './pages/Teste';
import Error404 from './pages/Error404'

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/teste" component={Teste} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
