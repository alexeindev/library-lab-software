import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import image from "../images/register-img.png";
import { db, auth} from "../firebase";

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

const Singup = () => {
  const initialStateValues = {
    codigo: '',
    nombre: '',
    apellido: '',
    email: '',
    direccion: '',
    genero: '',
    nacimiento: '',
    clave: '',
    clave2: ''
  };

  const [values, setValues] = useState(initialStateValues);
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (name === "email") {
      setEmail(value);
    }
    if (name === "clave") {
      setClave(value);
    }
    if (name === "clave2") {
      setClave2(value);
    }
  };


  const create_user = async () => {
    await auth.createUserWithEmailAndPassword(email, clave);
    await db.collection('users').doc().set(values);
  };


  const handlesubmit  =  (e) => {
    e.preventDefault();

    if (clave === clave2) {
      create_user();
      console.log(values);
      history.push("/");
    } else {
      alert("Las contraseñas no son iguales");
    }
    setValues({ ...initialStateValues });
  };

  return (
    <div>
      <Container>
        <Navbar />
        <ContentContainer>
          <InfoContainer>
            <Title>Regístrate</Title>
            <InfoImage src={image}></InfoImage>
          </InfoContainer>
          <form onSubmit={handlesubmit}>
            <FormContainer>
              <FormGroup id='nombre'>
                <FormLabel>Nombre</FormLabel>
                <FormInput
                  name='nombre'
                  type='text'
                  onChange={handleInputChange}
                  value={values.nombre}
                ></FormInput>
              </FormGroup>
              <FormGroup id='apellido'>
                <FormLabel>Apellido</FormLabel>
                <FormInput
                  name='apellido'
                  type='text'
                  onChange={handleInputChange}
                  value={values.apellido}
                ></FormInput>
              </FormGroup>
              <FormGroup id='email'>
                <FormLabel>Correo</FormLabel>
                <FormInput
                  name='email'
                  onChange={handleInputChange}
                  value={values.email}
                ></FormInput>
              </FormGroup>
              <FormGroup id='clave'>
                <FormLabel>Contraseña</FormLabel>
                <FormInput
                  type='password'
                  name='clave'
                  onChange={handleInputChange}
                  value={values.clave}
                ></FormInput>
              </FormGroup>
              <FormGroup id='clave2'>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <FormInput
                  type='password'
                  name='clave2'
                  onChange={handleInputChange}
                  value={values.clave2}
                ></FormInput>
              </FormGroup>
              <Link to='/'>
                <Text>¿Olvidaste tu contraseña?</Text>
              </Link>
              <ButtonContainer>
                <Button light>Iniciar sesión</Button>
                <Button type='submit'>Registrarse</Button>
              </ButtonContainer>
            </FormContainer>
          </form>
        </ContentContainer>
      </Container>
    </div>
  );
};

export default Singup;
