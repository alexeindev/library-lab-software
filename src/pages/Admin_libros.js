import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {Container,Title} from "./Editar_perfil.styles";
import { Link } from "react-router-dom";
import {db} from "../firebase"
function Admin_libros() {
    const[libros,setLibros]=useState([]);
    

    const getLibros = async () => {
        const docs =[];
        db.collection("libros").onSnapshot((querySnapshot) =>{
           querySnapshot.forEach(async (doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            setLibros(docs);
        });

        
    };

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
                                    <Link to='/'>Eliminar</Link></th></th>
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
