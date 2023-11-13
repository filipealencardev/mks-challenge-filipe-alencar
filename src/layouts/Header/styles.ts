import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
export const ContainerHeader = styled.div`
  width: 100%;
  padding: 28px 65px;
  background-color: #0f52ba;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCart = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;

  svg > path {
    fill: ${({ $disabled }) => $disabled && "#b7b7b7"};
  }
`;

export const NumberItemCart = styled.div<{ $disabled: boolean }>`
  color: ${({ $disabled }) => ($disabled ? "#b7b7b7" : "#000")};

  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
