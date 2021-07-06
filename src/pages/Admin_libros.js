import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {Container,Title} from "./Editar_perfil.styles";
import { Link } from "react-router-dom";
import {db,storage} from "../firebase"
function Admin_libros() {
    const[libros,setLibros]=useState([]);
    

    const getLibros = () => {
        
        db.collection("libros").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            setLibros(docs);
        });
    };
    
    const deleteLibro = async( id, name)=>{
       if (window.confirm('Estas seguro que desear eliminar este libro ?')){
            await db.collection('libros').doc(id).delete();
            var desertRef = storage.ref('/librosImgs/'+name);
            // Delete the file
            await desertRef.delete().then(function() {
            // File deleted successfully
            }).catch(function(error) {
            // Uh-oh, an error occurred!
            });
            console.log('Task eliminada')
       }
    }
    useEffect(()=>{
        getLibros();
     },[]);

    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Administracion de Libros</Title>
                {libros.map(libro =>(
                <div className="table-responsive" key={libro.id}>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            
                            <tr>
                                <th>&nbsp;</th>
                                <th>ID</th>
                                <th>Portada</th>
                                <th>Titulo</th>
                                <th>Autor(a)</th>
                                <th>Genero</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>&nbsp;</th>
                                <th>{libro.issn}</th>
                                <th><img width="50" high="50" src={libro.portada} alt={libro.titulo} /></th>
                                <th>{libro.titulo}</th>
                                <th>{libro.autor}</th>
                                <th>{libro.genero}</th>
                                <th>{libro.estado}</th>
                                <th><Link to='/'>Editar</Link><th>
                                    <Link to='/'>Administrar Existencias</Link><th>
                                    <i onClick={()=>{deleteLibro(libro.id,libro.titulo)}}>Eliminar</i></th></th>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ))}
            </Container>
        </div>
    )
}

export default Admin_libros
