import React, { type PropsWithChildren } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ContainerSkeleton } from "./styles";
import { CardsStyle, ICustomSkeleton } from "./types";

const CustomSkeleton: React.FC<ICustomSkeleton> = ({ types }) => {
  const customSkeletonType: CardsStyle = {
    cards: {
      container: { width: "218px", height: "276px", background: "#fff" },
      image: { width: "111px", height: "138px", borderRadius: "4px" },
      contentTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      },
      title: { width: "120px", height: "20px" },
      price: { width: "60px", height: "26px" },
      description: { width: "140px", height: "8px" },
      button: { width: "218px", height: "32px" },
    },
  };

  return (
    <ContainerSkeleton $customStyle={customSkeletonType[types].container}>
      <Skeleton style={customSkeletonType[types].image} baseColor="#e6e6e6" />
      <div>
        <div style={customSkeletonType[types].contentTitle}>
          <div>
            <Skeleton
              style={customSkeletonType[types].title}
              baseColor="#e6e6e6"
            />
          </div>
          <Skeleton
            style={customSkeletonType[types].price}
            baseColor="#e6e6e6"
          />
        </div>
        <div>
          <Skeleton
            style={customSkeletonType[types].description}
            baseColor="#e6e6e6"
          />
          <Skeleton
            style={customSkeletonType[types].description}
            baseColor="#e6e6e6"
          />
          <Skeleton
            style={customSkeletonType[types].description}
            baseColor="#e6e6e6"
          />
        </div>
      </div>
      <Skeleton style={customSkeletonType[types].button} baseColor="#e6e6e6" />
    </ContainerSkeleton>
  );
};

export default CustomSkeleton;
