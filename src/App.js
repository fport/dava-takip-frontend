import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./screens/PrivateScreen";
import LoginScreen from "./screens/LoginScreen";
import AddHırkız from "./screens/AddHırkız";
import UpdateInfo from "./components/UpdateInfo";
import Main from "./screens/Main";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <PrivateRoute path="/add" component={AddHırkız} />
          <PrivateRoute path="/main" component={Main} />
          <PrivateRoute path="/edit" component={UpdateInfo} />
          <Route exact path="/login" component={LoginScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
