import React, { useState } from "react";

import Navbar from "../components/Navbar";
import {
    Title,
    FormLabel,
    FormInput,
    FormGroup,
    FormRow,
  } from "./Editar_perfil.styles";


function CrearAdmin() {

    
    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    function create_admin  (email, password,values) {
        await auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
        await db.collection('users').doc().set(values);
        //await auth.user(values)
      }

    const handlesubmit  =  () => {
    
        if (values.clave === values.clave2 && values.clave !== '' && values.email !==''&& values.clave.length >= 6) {
          //create_admin(values.email,values.clave,values);
          console.log(values);
          history.push("/mi-perfil");
        } else {
          alert("Las contraseñas no son iguales / campos sin rellenar/ la constraseña debe ser mayor o igual a 6 caracteres");
        }
        setValues({ ...initialStateValues });
      };
    return (
        <div className="container">
            
            <Navbar />
            <Title>Crear Admin</Title>
            <FormGroup id='email'>
                <FormLabel>Correo electronico</FormLabel>
                <FormInput
                name='email'
                value={values.email}
                onChange={handleInputChange}
                disabled={true}
                />
            </FormGroup>
            <FormGroup id='password1'>
                <FormLabel>Correo electronico</FormLabel>
                <FormInput
                name='clave'
                value={values.clave}
                onChange={handleInputChange}
                disabled={true}
                />
            </FormGroup>
            <FormGroup id='password2'>
                <FormLabel>Correo electronico</FormLabel>
                <FormInput
                name='clave2'
                value={values.clave2}
                onChange={handleInputChange}
                disabled={true}
                />
            </FormGroup>
            <FormRow>
              <i onClick={()=>{handlesubmit()}}><Button type='submit'>Guardar</Button></i>
              <i onClick={()=>{cancelarsubmit()}}><Button type='submit' light>Cancelar</Button></i>
          </FormRow>
        </div>
    )
}

export default CrearAdmin
