import styled from "styled-components";
import { MainFlyoutStyle } from "./types";

export const MainFlyout = styled.div<MainFlyoutStyle>`
  position: fixed;
  width: 486px;
  height: 100%;

  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  z-index: 999;
  top: 0;
  right: 0;
  transition: transform 0.5s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0%)" : "translateX(106%)"};

  ${({ theme }) => theme.media.max.tabletL`
    width: 330px;
  
  `}
`;

export const ContainerFlyout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 38px 47px;
  justify-content: space-between;

  ${({ theme }) => theme.media.max.tabletL`
    padding: 38px;
  
  `}
`;

export const ContentFlyout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 70px;
`;

export const HeaderFlyout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContentButtonCloseFlyout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const TitleFlyout = styled.span`
  color: #fff;
  font-family: "Montserrat";
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 180px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  overflow: hidden auto;
  max-height: 40vh;
  width: 100%;
  padding: 20px;
`;

export const NotItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  color: #fff;
  font-family: "Montserrat";
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${({ theme }) => theme.media.max.tabletL`
   text-align: center;
  
  `}
`;
export const ContentItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 14px 23px;
  position: relative;

  ${({ theme }) => theme.media.max.tabletL`
    flex-direction: column;
    gap: 8px;
  `}
`;

export const ButtonRemoveItem = styled.div`
  position: absolute;
  top: -25%;
  left: 97%;
  cursor: pointer;
  svg {
    width: 22px;
  }

  ${({ theme }) => theme.media.max.tabletL`
  top: -5%;
  left: 81%;
    svg {
        width: 60px;
        height: 60px;
    circle{
        display: none;
    }
    path{
        fill: #000;
    }
  }
  `}
`;

export const ContentProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 130px;

  ${({ theme }) => theme.media.max.tabletL`
    flex-direction: column;
    gap: 10px;
  
  `}
`;

export const ImageCardFlayout = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 46px;
  min-height: 57px;

  ${({ theme }) => theme.media.max.tabletL`
  max-width:max-content;
  
  `}
`;

export const TitleCardFlyout = styled.span`
  color: #2c2c2c;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;

  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  width: 113px;

  ${({ theme }) => theme.media.max.tabletL`
    white-space: nowrap;
    width: max-content;
  `}
`;

export const ContainerCount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TextCount = styled.span`
  color: #000;
  font-family: "Montserrat";
  font-size: 0.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${({ theme }) => theme.media.max.tabletL`
    display: none
  `}
`;

export const ContentPrice = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: end;
  width: 50%;

  ${({ theme }) => theme.media.max.tabletL`
  width: 100%;
  
  `}
`;
export const ContentCount = styled.div`
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.max.tabletL`
  height: 35px;
  
  `}
`;

export const TextPrice = styled.span`
  color: #000;
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;

  ${({ theme }) => theme.media.max.tabletL`
  border-radius: 5px;
  background: #373737;
  padding: 5px;

  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  `}
`;

export const CountSeparator = styled.div`
  color: #bfbfbf;
  font-size: 12px;
  user-select: none;

  ${({ theme }) => theme.media.max.tabletL`
  font-size: 26px;
    user-select: none;
    font-weight: 400;
    font-family: none;

    max-height: 50vh;

    `}
`;

export const CountAction = styled.div`
  color: #000;
  padding: 2px 5px;
  font-family: "Montserrat";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  user-select: none;

  ${({ theme }) => theme.media.max.tabletL`
    font-weight: 200;
    font-size: 24px;
  `}
`;
export const CountValue = styled.div`
  color: #000;
  padding: 5px;
  font-family: "Montserrat";
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  user-select: none;
`;

export const FooterFlayout = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 97px;
  background: #000;
  color: white;
  text-align: center;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #161616;
  }
`;
export const ButtonEndCheckout = styled.span`
  color: #fff;

  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const ContainerTotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -40%;
  width: 80%;
`;

export const TextTotalValue = styled.span`
  color: #fff;

  font-family: "Montserrat";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;

  ${({ theme }) => theme.media.max.tabletL`
  font-size: 22px;


    `}
`;
