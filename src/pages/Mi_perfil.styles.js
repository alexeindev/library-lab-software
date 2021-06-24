import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 768px) {
    padding: 0 120px;
  }
`;
export const ContentContainer = styled.div`
  margin: 15px 0;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  line-height: 84px;
  color: #34325e;
  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

export const PerfilImage = styled.img`
  
  @media (min-width: 1024px) {
    display: block;
    padding-top: 25px;
    max-width: 500px;
  }
`;

export const Links = styled.div`
  padding:20px;
  color: #F39B34;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-decoration-line: underline;
`;