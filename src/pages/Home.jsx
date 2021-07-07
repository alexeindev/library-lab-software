import React,{useState,useEffect} from "react";
import {
  Container,
  HeroContainer,
  HeroImg,
  HeroInformationContainer,
  HeroText,
  LibrosContainer,
  ImgLibro,
  LibrosTitulo,
  LibrosPrecio
} from "./Home.styles";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import landigHero from "../images/landingHero.png";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
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

    useEffect(()=>{
      getLibros();
   },[]);
  return (
    <div>
      <Container>
        <Navbar />
        <HeroContainer>
          <HeroInformationContainer>
            <HeroText>Encuentra aquí tus libros favoritos</HeroText>
            <SearchBar />
          </HeroInformationContainer>
          <HeroImg src={landigHero} />
        </HeroContainer>
        <LibrosContainer>
        {libros.map(libro =>(
          <div className="">
            <Link to="/"><ImgLibro  src={libro.portada} alt={libro.titulo}/></Link>
            <LibrosTitulo className="text-center">{libro.titulo}</LibrosTitulo>
            <LibrosPrecio className="text-center">${libro.precio}</LibrosPrecio>
          </div>
        ))}
        </LibrosContainer>
      </Container>
    </div>
  );
};

export default Home;
