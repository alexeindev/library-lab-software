import React from "react";
import Navbar from "../components/Navbar";
import image from "../images/mi-perfil-img.png";
import {
  Container,
  ContentContainer,
  InfoContainer,
  Title,
  Links,
  PerfilImage,
} from "./Mi_perfil.styles";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function Mi_perfil() {
    const {currentUser} = useAuth()
    return (
        <div>
            <Container>
                <Navbar />
                <ContentContainer>
                    <InfoContainer>
                        <Title>Mi Perfil</Title>
                        {currentUser.email === 'g.anduquia@utp.edu.co' &&
                            <Link style={{ textDecoration: "none" }} to='/admi-libros'>
                                <Links>Administrar libros</Links>
                            </Link>
                        }
                        {currentUser.email === 'g.anduquia@utp.edu.co' &&
                            <Link style={{ textDecoration: "none" }} to='/ingre-libros'>
                                <Links>Ingresar libros</Links>
                            </Link>
                        }
                        {currentUser.email === 'g.anduquia@utp.edu.co' &&
                            <Link style={{ textDecoration: "none" }} to='/crear-noticia'>
                                <Links>Crear noticas</Links>
                            </Link>
                        }
                        {currentUser.email === 'g.anduquia@utp.edu.co' &&
                            <Link style={{ textDecoration: "none" }} to='/gestionar-noticias'>
                                <Links>Gestionar noticas</Links>
                            </Link>
                        }
                        <Link style={{ textDecoration: "none" }} to='/edit-perfil'>
                            <Links>Editar Perfil</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/pedidos'>
                            <Links>Pedidos</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/info-financiera'>
                            <Links>Informacion financiera</Links>
                        </Link>
                        
                    </InfoContainer>
                    <PerfilImage src={image}></PerfilImage>
                    
                    

                </ContentContainer>
                
            </Container>
        </div>
    )
}

export default Mi_perfil
