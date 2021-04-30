import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyles.style'
//Pages
import Home from './pages/Home.jsx'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path="/" component={Home} exacts></Route>
        <div className="App">
        </div>
      </Switch>
    </Router>
  );
}

export default App;
