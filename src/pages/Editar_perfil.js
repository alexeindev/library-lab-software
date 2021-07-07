import React, {useState,  useEffect} from 'react'
import Navbar from "../components/Navbar";
import {Container,Title,FormLabel, FormInput, FormGroup} from "./Editar_perfil.styles";
import { useAuth } from "../contexts/AuthContext";
import {db} from "../firebase"
import Button from '../components/Button';
import { useHistory } from "react-router-dom";



function Editar_perfil() {

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

    const {currentUser} = useAuth()
    const {editcollection} = useAuth()
    const[user,setUser]=useState(initialStateValues);
    const[id,setId]=useState('');
    const history = useHistory();
    

    const getUser = () => {
        db.collection("users").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                
                if (doc.data().email === currentUser.email) {
                    setId(doc.id)
                    setUser(doc.data());    
                    return
            }
            });
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(currentUser)
    };
    
    const cancelarsubmit = () => {
        history.push("/mi-perfil")
    }
    const handlesubmit  =  async(e) => {
        e.preventDefault();
        await editcollection(user,id)
        console.log(user)
        history.push("/mi-perfil")

    };
    useEffect(()=>{
        getUser();
     },[]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Editar perfil</Title>
                <form onSubmit={handlesubmit}>
                    <FormGroup id='nombre'>
                        <FormLabel>Nombre</FormLabel>
                        <FormInput
                        name='nombre'
                        onChange={handleInputChange}
                        value={user.nombre}
                        />
                    </FormGroup>
                    <FormGroup id='apellido'>
                        <FormLabel>Apellidos</FormLabel>
                        <FormInput
                        name='apellido'
                        onChange={handleInputChange}
                        value={user.apellido}
                        />
                    </FormGroup>
                    <FormGroup id='codigo'>
                        <FormLabel>DNI</FormLabel>
                        <FormInput
                        name='codigo'
                        onChange={handleInputChange}
                        value={user.codigo}
                        />
                    </FormGroup>
                    <FormGroup id='nacimiento'>
                        <FormLabel>Fecha de nacimiento</FormLabel>
                        <FormInput
                        name='nacimiento'
                        type="date"
                        onChange={handleInputChange}
                        value={user.nacimiento}
                        />
                    </FormGroup>
                    <FormGroup id='direccion'>
                        <FormLabel>Direccion de Envio</FormLabel>
                        <FormInput
                        name='direccion'
                        onChange={handleInputChange}
                        value={user.direccion}
                        />
                    </FormGroup>
                    <FormGroup id='email'>
                        <FormLabel>Correo electronico</FormLabel>
                        <FormInput
                        name='email'
                        value={user.email}
                        onChange={handleInputChange}
                        disabled={true}
                        />
                    </FormGroup>
                    <FormGroup id='genero'>
                        <FormLabel>Genero</FormLabel>
                        <FormInput
                        name='genero'
                        value={user.genero}
                        onChange={handleInputChange}
                        disabled={true}
                        />
                    </FormGroup>
                    
                    <Button  type="submit" >Guardar</Button>
                </form>
                <form onSubmit={cancelarsubmit}>
                    <Button type="submit" light>Cancelar</Button>
                </form>
                
                        
                    
                
            </Container>
        </div>
    )
}

export default Editar_perfil
