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


function Mi_perfil() {
    return (
        <div>
            <Container>
                <Navbar />
                <ContentContainer>
                    <InfoContainer>
                        <Title>Mi Perfil</Title>
                        <Link style={{ textDecoration: "none" }} to='/edit-perfil'>
                            <Links>Editar Perfil</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <Links>Pedidos</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <Links>Informacion financiera</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <Links>Editorial</Links>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to='/'>
                            <Links>Idiomas</Links>
                        </Link>
                        
                    </InfoContainer>
                    <PerfilImage src={image}></PerfilImage>
                    
                    

                </ContentContainer>
                
            </Container>
        </div>
    )
}

export default Mi_perfil
