import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles.style";
//Pages
import Home from "./pages/Home.jsx";
import Singup from "./pages/Singup";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sing-up' component={Singup}></Route>
        {/* <Route component={PageNotFound}/> */}
        <div className='App'></div>
      </Switch>
    </Router>
  );
}

export default App;
