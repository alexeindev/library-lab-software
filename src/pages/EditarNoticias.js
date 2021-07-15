import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Container, Title, FormLabel, FormGroup } from "./Editar_perfil.styles";
import { FormRow, FormInput} from "./Ingresar_Libros.styles";
import {db} from "../firebase"
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function EditarNoticias(params) {
    const {editcollection} = useAuth()
    const[noticia,setNoticia]=useState({});
    const history = useHistory();
    

    const getNoticias = () => {
        db.collection("noticias").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                if (doc.id === params.match.params.keyword) {
                    setNoticia(doc.data());    
                    return
            }
            });
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNoticia({ ...noticia, [name]: value });
    };
    
    const cancelarsubmit = () => {
        history.push("/gestionar-noticias")
    }

    const handlesubmit  =  async(e) => {
        await editcollection(noticia,params.match.params.keyword,'noticias')
        console.log(noticia)
        history.push("/gestionar-noticias")

    };
    useEffect(()=>{
        getNoticias(); // eslint-disable-next-line
     },[]);

    return (
        <div>
            <Container>
                <Navbar />
                <Title>Editar Noticia</Title>
                <div className="row">
                    <div className="col-6 text-center">
                        <FormGroup id='autor'>
                            <FormLabel>Titulo</FormLabel>
                            <FormInput
                                name='titulo'
                                onChange={handleInputChange}
                                value={noticia.titulo}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-6 text-center">
                        <FormGroup id='fecha'>
                            <FormLabel>Fecha actual</FormLabel>
                            <FormInput
                                type='date'
                                name='fecha'
                                onChange={handleInputChange}
                                value={noticia.fecha}
                            />
                        </FormGroup>
                    </div>
                </div>
                <div className="row text-center">
                    <FormGroup id='descripcion'>
                        <FormLabel>Descripcion</FormLabel>
                        <textarea  
                            cols="30" rows="10"
                            name='descripcion'
                            onChange={handleInputChange}
                            value={noticia.descripcion}
                        ></textarea>
                    </FormGroup>
                </div>
                <FormRow>
                    <i onClick={()=>{handlesubmit()}}><Button type='submit'>Guardar</Button></i>
                    <i onClick={()=>{cancelarsubmit()}}><Button type='submit' light>Cancelar</Button></i>
                </FormRow>
            </Container>
        </div>
    )
}

export default EditarNoticias
