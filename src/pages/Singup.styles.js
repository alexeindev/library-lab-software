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

export const InfoImage = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    padding-top: 25px;

    max-width: 500px;
  }
`;

export const FormContainer = styled.div`
  margin: 0 20px;
  padding: 30px 40px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 22px;
  @media (min-width: 1024px) {
    display: block;
    width: 300px;
    max-width: 500px;
  }
`;

export const Text = styled.p`
  margin: 15px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
