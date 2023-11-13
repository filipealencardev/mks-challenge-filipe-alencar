import { Interpolation } from "styled-components/dist/types";

interface ICustomSkeleton {
  types: "cards";
}

export type CardsStyle = {
  cards: {
    container?: React.CSSProperties;
    image?: React.CSSProperties;
    contentTitle?: React.CSSProperties;
    title?: React.CSSProperties;
    price?: React.CSSProperties;
    description?: React.CSSProperties;
    button?: React.CSSProperties;
  };
};

interface IContainerSkeletonStyle {
  $customStyle: Interpolation;
}
