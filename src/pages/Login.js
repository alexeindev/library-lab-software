import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import image from "../images/register-img.png";
import { useHistory } from "react-router-dom";
import { FormLabel, FormInput, FormGroup } from "../components/Form";
import {
  Container,
  ContentContainer,
  FormContainer,
  InfoContainer,
  Title,
  InfoImage,
  Text,
  ButtonContainer,
} from "./Singup.styles";
import { Link } from "react-router-dom";
import { useAuth  } from "../contexts/AuthContext";

function Login() {

    const [email,setEmail] = useState('');
    const [clave,setClave] = useState('');
    const [loading,setLoading] = useState(false);
    const {login} = useAuth()
    const history = useHistory();
    
    const sign_in = async () =>{
        setLoading(true)
        await login(email,clave);
        setLoading(false)
        history.push("/")
        }

    return (
        <div>
        <Container>
        <Navbar />
        <ContentContainer>
          <InfoContainer>
            <Title>Iniciar Sesion</Title>
            <InfoImage src={image}></InfoImage>
          </InfoContainer>
          <form onSubmit={sign_in}>
            <FormContainer>
              
              
              <FormGroup id='email'>
                <FormLabel>Correo</FormLabel>
                <FormInput
                  name='email'
                  onChange={(ev)=> setEmail(ev.target.value)}
                  value={email.email}
                ></FormInput>
              </FormGroup>
              <FormGroup id='clave'>
                <FormLabel>Contraseña</FormLabel>
                <FormInput
                  type='password'
                  name='clave'
                  onChange={(ev)=> setClave(ev.target.value)}
                  value={clave.clave}
                ></FormInput>
              </FormGroup>
             
              <Link to='/'>
                <Text>¿Olvidaste tu contraseña?</Text>
              </Link>
              <ButtonContainer>
                <Button disabled={loading} light>Iniciar sesión</Button>
                
              </ButtonContainer>
            </FormContainer>
          </form>
        </ContentContainer>
        </Container>
        </div>
    )
}

export default Login
