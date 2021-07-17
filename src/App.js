
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Error404 from './pages/Error404'

function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
