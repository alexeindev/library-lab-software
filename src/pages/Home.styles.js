import styled from "styled-components";

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
