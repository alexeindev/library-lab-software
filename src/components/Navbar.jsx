import React from "react";
import { Link ,useHistory } from "react-router-dom";
import Button from "./Button";
import {
  CartLink,
  RegisterLink,
  ButtonsContainer,
  Logo,
  NavContainer,
} from "./Navbar.styles";
import cartIcon from "../images/cart.png";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  
  const {currentUser} = useAuth()
  const {logout} = useAuth()
  const history = useHistory();
  
  const logout_f = async () =>{
    await logout();
    history.push("/");
  };
    return (
      <div>
        <NavContainer>
          <ButtonsContainer>
            <Link style={{ textDecoration: "none" }} to='/'>
              <Logo>Librería</Logo>
            </Link>
            <Link style={{ textDecoration: "none" }} to='/ver-noticias'>
                <RegisterLink>Ver noticias</RegisterLink>
            </Link>
          </ButtonsContainer>
          <ButtonsContainer>
            {currentUser &&
            <Link style={{ textDecoration: "none" }} to='/mi-perfil'>
              <Button light>{currentUser.email}</Button>
            </Link>
            }
            {!currentUser &&
              <Link style={{ textDecoration: "none" }} to='/sing-up'>
              <RegisterLink>Registrarse</RegisterLink>
              </Link>
            }
            {!currentUser &&
            <Link style={{ textDecoration: "none" }} to='/login'>
              <Button light>Iniciar Sesión</Button>
            </Link>
            }
            {currentUser &&
              <form onSubmit={logout_f}>
              <Button  light>Cerrar Sesion</Button>
              </form>
            }           
            <Link style={{ textDecoration: "none" }} to='/'>
              <CartLink>
                Mi carrito <img src={cartIcon} alt='shopping cart' />{" "}
              </CartLink>
            </Link>
          </ButtonsContainer>
        </NavContainer>
      </div>
    );
  
}

export default Navbar;
