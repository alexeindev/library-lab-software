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
import AdminRoute from "./components/AdminRoute"
import Admin_libros from "./pages/Admin_libros";
import Ingresar_Libros from "./pages/Ingresar_Libros";
import LibrosPage from "./pages/LibrosPage";
import ComprarLibros from "./pages/ComprarLibros";
import PedidosUser from "./pages/PedidosUser";
import EditarLibros from "./pages/EditarLibros";
import InfoFinanciera from "./pages/InfoFinanciera";
import CrearNoticias from "./pages/CrearNoticias";
import GestionarNoticias from "./pages/GestionarNoticias";
import EditarNoticias from "./pages/EditarNoticias";
import VerNoticias from "./pages/VerNoticias";


function App() {
  return (
    <Router>
      <AuthProvider>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/sing-up' component={Singup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/libros/:keyword' component={LibrosPage}></Route>
        <Route path='/ver-noticias' component={VerNoticias}></Route>
        <PrivateRoute exact path='/info-financiera' component={InfoFinanciera}></PrivateRoute>
        <PrivateRoute exact path='/pedidos' component={PedidosUser}></PrivateRoute>
        <PrivateRoute exact path='/comprar-libros/:keyword' component={ComprarLibros}></PrivateRoute>
        <PrivateRoute exact path='/mi-perfil' component={Mi_perfil}></PrivateRoute>
        <PrivateRoute exact path='/edit-perfil' component={Editar_perfil}></PrivateRoute>
        <AdminRoute exact path='/crear-noticia' component={CrearNoticias}></AdminRoute>
        <AdminRoute exact path='/gestionar-noticias' component={GestionarNoticias}></AdminRoute>
        <AdminRoute exact path='/edit-noticias/:keyword' component={EditarNoticias}></AdminRoute> 
        <AdminRoute exact path='/admi-libros' component={Admin_libros}></AdminRoute>
        <AdminRoute exact path='/ingre-libros' component={Ingresar_Libros}></AdminRoute>
        <AdminRoute exact path='/edit-libros/:keyword' component={EditarLibros}></AdminRoute> 
        {/* <Route component={PageNotFound}/> */}
        <div className='App'></div>
      </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
