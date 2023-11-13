import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
  cursor: pointer;
`;

export const ButtonContent = styled.div`
  background: #0f52ba;

  -moz-border-radius: 10;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;

  &:hover {
    background: #276bd1;
    text-decoration: none;
  }
`;
