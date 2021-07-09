import React, { useState } from "react";
import { Container, Title, FormLabel, FormGroup } from "./Editar_perfil.styles";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { FormRow, FormInput, MainWrapper } from "./Ingresar_Libros.styles";
import { useHistory } from "react-router-dom";
import { storage } from "../firebase";

function Ingresar_Libros(props) {
  const initialStateValues = {
    titulo: "",
    autor: "",
    issn: "",
    paginas: "",
    editorial: "",
    fecha: "",
    genero: "",
    estado: "",
    precio: "",
    existencias: "",
    portada: "",
    descripcion: "",
  };

  //const {currentUser} = useAuth()
  const { createCollection } = useAuth();
  const [values, setValues] = useState(initialStateValues);
  //const[imgfile, setImgfile]=useState({});
  const [url, setUrl] = useState([]);
  //const[file,setFile]=useState([]);
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
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
  const urlImage = async (e) => {
    const file = e.target.files[0];
    //setImgfile(file);
    if (file !== "") {
      setUrl(URL.createObjectURL(file));
      var storageRef = storage.ref("/librosImgs/" + values.titulo);
      await deleteImg(storageRef);
    }
    setValues({ ...values, portada: await updateStorage(file) });
  };
  const updateStorage = async (imgfile) => {
    if (imgfile !== "") {
      var storageRef = storage.ref("/librosImgs/" + values.titulo);
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
  const cancelarsubmit = async () => {
    var storageRef = storage.ref("/librosImgs/" + values.titulo);
    await deleteImg(storageRef);
    history.push("/mi-perfil");
  };
  const handlesubmit = async () => {
    console.log(values);
    await createCollection(values,'libros');

    setValues({ ...initialStateValues });
    history.push("/mi-perfil");
  };

  return (
    <div>
      <Container>
        <Navbar />
        <MainWrapper>
          <div>
            <img src={url} alt='portada' />
            <FormGroup id='portada'>
              <FormLabel>Añadir Portada</FormLabel>
              <FormInput name='portada' type='file' onChange={urlImage} />
            </FormGroup>
          </div>
          <div>
            <Title>Añadir Libro</Title>
            
              <FormRow>
                <FormGroup id='titulo'>
                  <FormLabel>Titulo</FormLabel>
                  <FormInput
                    name='titulo'
                    onChange={handleInputChange}
                    value={values.titulo}
                  />
                </FormGroup>
                <FormGroup id='autor'>
                  <FormLabel>Autor(a)</FormLabel>
                  <FormInput
                    name='autor'
                    onChange={handleInputChange}
                    value={values.autor}
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup id='issn'>
                  <FormLabel>ISSN</FormLabel>
                  <FormInput
                    name='issn'
                    onChange={handleInputChange}
                    value={values.issn}
                  />
                </FormGroup>
                <FormGroup id='paginas'>
                  <FormLabel>N° de Paginas</FormLabel>
                  <FormInput
                    name='paginas'
                    onChange={handleInputChange}
                    value={values.paginas}
                  />
                </FormGroup>
                <FormGroup id='editorial'>
                  <FormLabel>Editorial</FormLabel>
                  <FormInput
                    name='editorial'
                    onChange={handleInputChange}
                    value={values.editorial}
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup id='fecha'>
                  <FormLabel>Fecha de Publicacion</FormLabel>
                  <FormInput
                    name='fecha'
                    type='date'
                    value={values.fecha}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup id='genero'>
                  <FormLabel>Genero</FormLabel>
                  <FormInput
                    name='genero'
                    value={values.genero}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup id='estado'>
                  <FormLabel>Estado</FormLabel>
                  <FormInput
                    name='estado'
                    value={values.estado}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup id='precio'>
                  <FormLabel>Precio</FormLabel>
                  <FormInput
                    name='precio'
                    value={values.precio}
                    onChange={handleInputChange}
                    placeholder='$'
                  />
                </FormGroup>
                <FormGroup id='existencias'>
                  <FormLabel>Existencias</FormLabel>
                  <FormInput
                    name='existencias'
                    value={values.existencias}
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
                    value={values.descripcion}>
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
  );
}

export default Ingresar_Libros;
