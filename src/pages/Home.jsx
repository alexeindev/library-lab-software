import React from 'react'
import {Container, HeroContainer, HeroImg , HeroInformationContainer, HeroText } from './Home.styles'
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar'
import landigHero from '../images/landingHero.png'
const Home = () => {
    return (
        <div>
            <Container>    
                <Navbar/>
                <HeroContainer>
                    <HeroInformationContainer>
                        <HeroText>
                        Encuentra aquí tus libros favoritos
                        </HeroText>
                    <SearchBar/>
                    </HeroInformationContainer>
                    <HeroImg src={landigHero}/>
                </HeroContainer>
            </Container>
        </div>
                 
    );
}

export default Home