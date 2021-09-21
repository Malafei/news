import LoginPage from "./components/auth/Login/LoginPage";
import RegisterPage from "./components/auth/Register/RegisterPage";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/login"> 
            <LoginPage/>
          </Route>
          <Route exact path= "/register">
            <RegisterPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
