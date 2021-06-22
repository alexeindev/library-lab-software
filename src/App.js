import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles.style";
//Pages
import Home from "./pages/Home.jsx";
import Singup from "./pages/Singup";
import {AuthProvider} from "./contexts/AuthContext"
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <AuthProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sing-up' component={Singup}></Route>
        <Route exact path='/login' component={Login}></Route>
        {/* <Route component={PageNotFound}/> */}
        <div className='App'></div>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
