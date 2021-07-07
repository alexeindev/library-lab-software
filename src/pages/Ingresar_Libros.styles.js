import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FormInput = styled.input`
  border: 1px solid #c4c4c4;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;
