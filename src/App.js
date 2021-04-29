import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles.style'
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exacts></Route>
        <div className="App">
        </div>
      </Switch>
    </Router>
  );
}

export default App;
