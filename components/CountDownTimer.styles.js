import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(227, 172, 249);
  height: 400px;
  width: 400px;
  margin: auto;
  gap: 5px;
  border-radius: 20px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const InputWarraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;
`;
export const Input = styled.input`
  padding: 7px;
  width: 40px;
  border: none;
  border-radius: 7px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
    transform: scale(0.95);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
export const Message = styled.p`
  font-size: 25px;
  font-weight: 700;
`;
