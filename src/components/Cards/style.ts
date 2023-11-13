import styled from "styled-components";
import { ImageCardStyle } from "./type";

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 12px 14px;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 72.632%;
`;
export const ImageCard = styled.div<ImageCardStyle>`
  width: 100%;
  object-fit: cover;
  max-width: 218px;
  min-height: 138px;

  background-image: url(${({ $imgPath }) => $imgPath});
  background-size: cover;
  background-position: center;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: relative;
  z-index: 1;
`;

export const TitleCard = styled.span`
  color: #2c2c2c;

  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

export const CardPrice = styled.span`
  border-radius: 5px;
  background: #373737;
  padding: 5px;

  color: #fff;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;

export const DescriptionCard = styled.span`
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: #2c2c2c;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
`;

export const TextButton = styled.div`
  color: #fff;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  padding: 0 32px;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  padding: 6px;
  transition: background-color 0.3s ease;
  &:hover {
    background: #ff0;
    svg > path {
      stroke: #000;
    }

    ${TextButton} {
      color: #000;
    }
  }
`;

export const MainCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 13.625rem;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  &:hover {
    transform: scale(1.1);
  }
`;
