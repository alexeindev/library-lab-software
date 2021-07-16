import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import {Container,Title} from "./Editar_perfil.styles";
import { Link } from "react-router-dom";
import {db} from "../firebase"
import '../App.css'

function GestionarNoticias() {
    
    const[noticias,setNoticias]=useState([]);
    

    const getNoticias = () => {
        
        db.collection("noticias").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            docs.sort(function(a,b){
                return a.fecha - b.fecha;
            })
            setNoticias(docs);
        });
    };
    
    const onRedirect = (keyword) => {
        const valor = '/edit-noticias/'+ keyword
        return valor
    }

    const deleteNoticia = async( id)=>{
       if (window.confirm('Estas seguro que deseas eliminar esta noticia ?')){
            await db.collection('noticias').doc(id).delete();
       }
    }
    useEffect(()=>{
        getNoticias();
     },[]);
    return (
        <div>
            <Container>
                <Navbar/>
                <Title>Gestionar Noticias</Title>
                {noticias.map(noticia =>(
                <div className="table-responsive" key={noticia.id}>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            
                            <tr>
                                <th>&nbsp;</th>
                                <th>Titulo</th>
                                <th>Fecha</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>&nbsp;</th>
                                <th>{noticia.titulo}</th>
                                <th>{noticia.fecha}</th>
                                <th><Link to={onRedirect(noticia.id)}>Editar</Link><th>
                                    <Link onClick={()=>{deleteNoticia(noticia.id)}}>Eliminar</Link></th>
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

export default GestionarNoticias
