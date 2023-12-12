import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./component/login/Login";
import Info from './component/info/Info';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/info" exact component={Info} />
      </Switch>
    </Router>
  );
}

export default App;
