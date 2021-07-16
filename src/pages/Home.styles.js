import styled from "styled-components";
import icon from '../images/search.png'

export const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const HeroImg = styled.img`
  width: 300px;
  padding-top: 50px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const HeroText = styled.p`
  font-weight: bold;
  font-size: 3em;
  color: #34325e;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 64px;
  }
`;

export const HeroInformationContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const LibrosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const LibrosTitulo = styled.h4`
  color: #34325E;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  width: 300px;
`;

export const LibrosPrecio = styled.h6`
  color: #34325E;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;

export const SearchInput = styled.input`
  height: 50px;
  width: 300px;
  background: url(${icon}) no-repeat right ;
  border: 2px solid #F39B34;
  box-sizing: border-box;
  border-radius: 36px;
`;
  
export const ImgLibro = styled.img`
  width: 265.31px;
  high: 400px;
  border-radius: 10px;
`;
