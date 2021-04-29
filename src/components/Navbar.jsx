import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button' 
import Styles, { CartLink, RegisterLink , ButtonsContainer, Logo, NavContainer } from './Navbar.styles'
import cartIcon from '../images/cart.png'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                    <Logo>Librería</Logo>
                    <ButtonsContainer>
                    <Link style={{ textDecoration: 'none' }} to="/">
                    <RegisterLink>
                        Registrarse
                    </RegisterLink>
                    </Link>
                    <Button light>Iniciar Sesión</Button>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <CartLink>Mi carrito <img src={cartIcon} alt="shopping cart"/> </CartLink>
                    </Link>
                    </ButtonsContainer>
                </NavContainer>
                
            </div>
        )
    }
}

export default Navbar
