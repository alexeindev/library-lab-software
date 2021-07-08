import React,{useEffect, useState} from 'react'
import {db} from "../firebase"
import Navbar from "../components/Navbar";
import "./LibrosPages.css"
function LibrosPage(params) {
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

    const[books,setBooks]=useState(initialStateValues);
    //const[id,setId]=useState('');
    const getBooks = () => {
        db.collection("libros").onSnapshot((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                
                if (doc.data().issn === params.match.params.keyword) {
                    //setId(doc.id)
                    setBooks(doc.data());    
                    return
            }
            });
            console.log(books)
        });
    };

    useEffect(()=>{
        getBooks(); // eslint-disable-next-line
     },[]);
    return (
        <div className="container">
            <Navbar/>
            <div className="container-content">
                <div className="row">
                    <div className="col-6 text-center">
                        <h2>{books.titulo}</h2>
                    </div>
                    <div className="col-6 text-center">
                        <button type="button" className="btn btn-outline-warning">Comprar</button>
                        <button type="button" className="btn btn-outline-warning">Agregar al carrito</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 justify-content-center" >
                        <img className="rounded mx-auto d-block" height="550" width="350" src={books.portada} alt={books.titulo}/>
                    </div>
                    <div className="col-6">
                        <div className="card" >
                            <div className="card-body">
                                <label><b>Precio:</b></label>
                                <p>${books.precio}</p>
                                <label><b>Autor(a):</b></label>
                                <p>{books.autor}</p>
                                <label><b>Descripcion:</b></label>
                                <p>{books.descripcion}</p>
                                <label><b>Numero de paginas:</b></label>
                                <p>{books.paginas}</p>
                                <label><b>Fecha de publicacion:</b></label>
                                <p>{books.fecha}</p>
                                <label><b>Numero de libros disponibles:</b></label>
                                <p>{books.existencias}</p>
                                <label><b>Estado:</b></label>
                                <p>{books.estado}</p>
                                <label><b>Genero:</b></label>
                                <p>{books.genero}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibrosPage
