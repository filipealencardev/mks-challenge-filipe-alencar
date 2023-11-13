import styled from "styled-components";
import { IContainerSkeletonStyle } from "./types";

export const ContainerSkeleton = styled.div<IContainerSkeletonStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  justify-content: space-between;
  padding: 24px 0 0;
  border-radius: 10px;

  ${({ $customStyle }) => $customStyle}
`;
