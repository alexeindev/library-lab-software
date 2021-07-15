import React, { useState } from "react";
import { Container, Title, FormLabel, FormGroup } from "./Editar_perfil.styles";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { FormRow, FormInput} from "./Ingresar_Libros.styles";
import { useHistory } from "react-router-dom";


function CrearNoticias() {
    const initialStateValues = {
        titulo: "",
        fecha: "",
        descripcion: "",
    };
    
    const { createCollection } = useAuth();
    const [values, setValues] = useState(initialStateValues);
    const history = useHistory();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const cancelarsubmit = async () => {
        history.push("/mi-perfil");
    };
    const handlesubmit = async () => {
        console.log(values);
        await createCollection(values,'noticias');
        setValues({ ...initialStateValues });
        history.push("/mi-perfil");
    };

    return (
        <div>
            <Container>
                <Navbar />
                <Title>Crear Noticia</Title>
                <div className="row">
                    <div className="col-6 text-center">
                        <FormGroup id='autor'>
                            <FormLabel>Titulo</FormLabel>
                            <FormInput
                                name='titulo'
                                onChange={handleInputChange}
                                value={values.titulo}
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
                                value={values.fecha}
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
                            value={values.descripcion}
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

export default CrearNoticias
