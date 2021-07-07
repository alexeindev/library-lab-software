import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {Container,Title,FormLabel, FormInput, FormGroup} from "./Editar_perfil.styles";
//import { Link } from "react-router-dom";
import {db} from "../firebase"
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";


function Editar_libro(props) {

    const initialStateValues = {

        titulo: '',
        autor: '', 
        issn: '',
        paginas: '', 
        editorial: '',
        fecha: '',
        genero: '', 
        estado: '',
        precio: '', 
        existencias: '', 
        portada: '', 
        descripcion: '',
      };

     
    const {editcollection} = useAuth()
    const[books,setBooks]=useState(initialStateValues);
    const[issn,setId]=useState('');
    const history = useHistory();
    

    const getBooks = () => {
        db.collection("books").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                if (doc.data().issn === props) {
                    setId(doc.id)
                    setBooks(doc.data());    
                    return
            }
            });
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBooks({ ...books, [name]: value });
        console.log(currentBook)
    };
    
    const cancelarsubmit = () => {
        history.push("/admin-libro")
    }
    const handlesubmit  =  async(e) => {
        e.preventDefault();
        await editcollection(books,issn)
        console.log(books)
        history.push("/admin-libros")

    };
    useEffect(()=>{
        getBooks();
     },[]);
    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Editar libro</Title>
                <form onSubmit={handlesubmit}>
                    <FormGroup id='titulo'>
                        <FormLabel>Titulo</FormLabel>
                        <FormInput
                        name='titulo'
                        onChange={handleInputChange}
                        value={books.titulo}//preguntar user
                        />
                    </FormGroup>
                    <FormGroup id='autor'>
                        <FormLabel>Autor</FormLabel>
                        <FormInput
                        name='autor'
                        onChange={handleInputChange}
                        value={books.autor}
                        />
                    </FormGroup>
                    <FormGroup id='issn'>
                        <FormLabel>ISSN</FormLabel>
                        <FormInput
                        name='issn'
                        onChange={handleInputChange}
                        value={books.issn}
                        disabled={true}
                        />
                    </FormGroup>
                    <FormGroup id='paginas'>
                        <FormLabel>Páginas</FormLabel>
                        <FormInput
                        name='paginas'
                        type="number"
                        onChange={handleInputChange}
                        value={books.paginas}
                        />
                    </FormGroup>
                    <FormGroup id='editorial'>
                        <FormLabel>Editorial</FormLabel>
                        <FormInput
                        name='editorial'
                        onChange={handleInputChange}
                        value={books.editorial}
                        />
                    </FormGroup>
                    <FormGroup id='fecha'>
                        <FormLabel>Fecha</FormLabel>
                        <FormInput
                        name='fecha'
                        type="date"
                        value={books.fecha}
                        onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup id='genero'>
                        <FormLabel>Genero</FormLabel>
                        <FormInput
                        name='genero'
                        value={books.genero}
                        onChange={handleInputChange}
                        />
                    </FormGroup>

                    <FormGroup id='estado'>
                        <FormLabel>Estado</FormLabel>
                        <FormInput
                        name='estado'
                        value={books.estado}
                        onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup id='precio'>
                        <FormLabel>Precio</FormLabel>
                        <FormInput
                        name='precio'
                        type="number"
                        value={books.precio}
                        onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup id='existencias'>
                        <FormLabel>Existencias</FormLabel>
                        <FormInput
                        name='existencias'
                        type="number"
                        value={books.existencias}
                        onChange={handleInputChange}
                        />
                    </FormGroup>
                    <FormGroup id='portada'>
                        <FormLabel>Portada</FormLabel>
                        <FormInput
                        name='portada'
                        value={books.portada}
                        onChange={handleInputChange}//importar
                        />
                    </FormGroup>
                    <FormGroup id='descripcion'>
                        <FormLabel>Descripción</FormLabel>
                        <FormInput
                        name='portada'
                        type="textarea"
                        value={books.portada}
                        onChange={handleInputChange}
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

export default Editar_libro
