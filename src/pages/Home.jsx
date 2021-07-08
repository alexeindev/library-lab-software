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
  LibrosPrecio,
  SearchInput
} from "./Home.styles";
import Navbar from "../components/Navbar";
import landigHero from "../images/landingHero.png";
import { db } from "../firebase";
import { Link } from "react-router-dom";


const Home = () => {
  const[libros,setLibros]=useState([]);
  const[copylibros,setCopyLibros]=useState([]);
  const[search,setSeacrh]=useState('');
  
  
    
    const onRedirect = (keyword) => {
      const valor = '/libros/'+ keyword
      return valor
    }
    const handleInputChange = async (e) => {
      const { value } = e.target;
      setSeacrh(value);
      filtrarLibros()
    };

    const filtrarLibros = () => {
      var result = copylibros.filter(item=>{
        if (item.titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(search)||
            item.autor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(search) ||
            item.fecha.includes(search)){ 
          return item
        } else{ return false }
      })
      setLibros(result)
    }
    const getLibros = () => {
        
        db.collection("libros").onSnapshot((querySnapshot) =>{
            const docs =[];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            setLibros(docs);
            setCopyLibros(docs)
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
            <SearchInput 
              type="search"
              value={search}
              onChange={handleInputChange} 
            ></SearchInput>
          </HeroInformationContainer>
          <HeroImg src={landigHero} />
        </HeroContainer>
        <LibrosContainer>
        {libros.map(libro =>(
          <div key={libro.id}>
            <Link to={onRedirect(libro.issn)}  ><ImgLibro src={libro.portada} alt={libro.titulo}/></Link>
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
