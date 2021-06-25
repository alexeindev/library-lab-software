import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles.style";
//Pages
import Home from "./pages/Home.jsx";
import Singup from "./pages/Singup";
import {AuthProvider} from "./contexts/AuthContext"
import Login from "./pages/Login";
import Mi_perfil from "./pages/Mi_perfil";
import Editar_perfil from "./pages/Editar_perfil";
import PrivateRoute from "./components/PrivateRoute"
import Admin_libros from "./pages/Admin_libros";
import Ingresar_Libros from "./pages/Ingresar_Libros";

function App() {
  return (
    <Router>
      <AuthProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sing-up' component={Singup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <PrivateRoute exact path='/mi-perfil' component={Mi_perfil}></PrivateRoute>
        <PrivateRoute exact path='/edit-perfil' component={Editar_perfil}></PrivateRoute>
        <PrivateRoute exact path='/admi-libros' component={Admin_libros}></PrivateRoute>
        <PrivateRoute exact path='/ingre-libros' component={Ingresar_Libros}></PrivateRoute>
        {/* <Route component={PageNotFound}/> */}
        <div className='App'></div>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
