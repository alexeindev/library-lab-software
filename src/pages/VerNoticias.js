import React, {useState,useEffect} from 'react'
import Navbar from "../components/Navbar";
import {Title} from "./Editar_perfil.styles";
import {db} from "../firebase"
import '../App.css'

function VerNoticias() {
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

    useEffect(()=>{
        getNoticias();
     },[]);
    return (
        <div className="container">
            
                <Navbar />
                <Title>Noticias</Title>
                {noticias.map(noticia =>(
                    <div className="card" key={noticia.id} >
                        
                        <div className="card-body ">
                            <h5 className="card-title text-center"><b>{noticia.titulo}</b></h5>
                            <div className="row">
                                <p><b>Fecha:   </b>{noticia.fecha}</p>
                                <p>{noticia.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
    )
}

export default VerNoticias
