import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { Container, Title, FormLabel, FormGroup } from "./Editar_perfil.styles";
import { FormRow, FormInput, MainWrapper } from "./Ingresar_Libros.styles";
//import { Link } from "react-router-dom";
import {db,storage} from "../firebase"
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";


function EditarLibros(params) {

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
    const[libro,setLibro]=useState(initialStateValues);
    const history = useHistory();
    

    const getBooks = () => {
        db.collection("libros").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                if (doc.id === params.match.params.keyword) {
                    setLibro(doc.data());    
                    return
            }
            });
        });
    };

    const deleteImg = async (storageRef) => {
        storageRef
          .delete()
          .then(function () {
            // File deleted successfully
          })
          .catch(function (error) {
            // Uh-oh, an error occurred!
          });
      };

    const updateStorage = async (imgfile) => {
        if (imgfile !== "") {
          var storageRef = storage.ref("/librosImgs/" + libro.titulo);
          //guardar en fire storage
          await storageRef.put(imgfile).then(function (snapshot) {
            console.log("Uploaded a blob or file!");
          });
          //obtener el URL
          var result = "";
          await storageRef.getDownloadURL().then(function (url) {
            result = url;
          });
          return result;
        } else {
          return "";
        }
    };

    const urlImage = async (e) => {
        const file = e.target.files[0];
        //setImgfile(file);
        if (file !== "") {
          var storageRef = storage.ref("/librosImgs/" + libro.titulo);
          await deleteImg(storageRef);
        }
        setLibro({ ...libro, portada: await updateStorage(file) });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLibro({ ...libro, [name]: value });
    };
    
    const cancelarsubmit = () => {
        history.push("/admi-libros")
    }

    const handlesubmit  =  async(e) => {
        await editcollection(libro,params.match.params.keyword,'libros')
        console.log(libro)
        history.push("/admi-libros")

    };
    useEffect(()=>{
        getBooks(); // eslint-disable-next-line
     },[]);
    return (
        <div>
            <Container>
                <Navbar />
                <MainWrapper>
                    <div>
                        <img width="250" height="500" src={libro.portada} alt='portada' />
                        <FormGroup id='portada'>
                        <FormLabel>Añadir Portada</FormLabel>
                        <FormInput name='portada' type='file' onChange={urlImage} />
                        </FormGroup>
                    </div>
                    <div>
                        <Title>Editar Libro</Title>
                        
                        <FormRow>
                            <FormGroup id='titulo'>
                            <FormLabel>Titulo</FormLabel>
                            <FormInput
                                name='titulo'
                                disabled={true}
                                onChange={handleInputChange}
                                value={libro.titulo}
                            />
                            </FormGroup>
                            <FormGroup id='autor'>
                            <FormLabel>Autor(a)</FormLabel>
                            <FormInput
                                name='autor'
                                onChange={handleInputChange}
                                value={libro.autor}
                            />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup id='issn'>
                            <FormLabel>ISSN</FormLabel>
                            <FormInput
                                name='issn'
                                onChange={handleInputChange}
                                value={libro.issn}
                            />
                            </FormGroup>
                            <FormGroup id='paginas'>
                            <FormLabel>N° de Paginas</FormLabel>
                            <FormInput
                                name='paginas'
                                onChange={handleInputChange}
                                value={libro.paginas}
                            />
                            </FormGroup>
                            <FormGroup id='editorial'>
                            <FormLabel>Editorial</FormLabel>
                            <FormInput
                                name='editorial'
                                onChange={handleInputChange}
                                value={libro.editorial}
                            />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup id='fecha'>
                            <FormLabel>Fecha de Publicacion</FormLabel>
                            <FormInput
                                name='fecha'
                                type='date'
                                value={libro.fecha}
                                onChange={handleInputChange}
                            />
                            </FormGroup>
                            <FormGroup id='genero'>
                            <FormLabel>Genero</FormLabel>
                            <FormInput
                                name='genero'
                                value={libro.genero}
                                onChange={handleInputChange}
                            />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup id='estado'>
                            <FormLabel>Estado</FormLabel>
                            <FormInput
                                name='estado'
                                value={libro.estado}
                                onChange={handleInputChange}
                            />
                            </FormGroup>
                            <FormGroup id='precio'>
                            <FormLabel>Precio</FormLabel>
                            <FormInput
                                name='precio'
                                value={libro.precio}
                                onChange={handleInputChange}
                                placeholder='$'
                            />
                            </FormGroup>
                            <FormGroup id='existencias'>
                            <FormLabel>Existencias</FormLabel>
                            <FormInput
                                name='existencias'
                                value={libro.existencias}
                                onChange={handleInputChange}
                            />
                            </FormGroup>
                        </FormRow>
                        <FormRow>
                            <FormGroup id='descripcion'>
                                <FormLabel>Descripcion</FormLabel>
                                <textarea 
                                onChange={handleInputChange}
                                name='descripcion' 
                                rows="10"
                                cols="50" 
                                value={libro.descripcion}>
                                </textarea>
                            </FormGroup>
                        </FormRow>
                    
                        <FormRow>
                        <i onClick={()=>{handlesubmit()}}><Button type='submit'>Guardar</Button></i>
                        <i onClick={()=>{cancelarsubmit()}}><Button type='submit' light>Cancelar</Button></i>
                        </FormRow>
                    </div>
                </MainWrapper>
            </Container>
        </div>
    )
}

export default EditarLibros
