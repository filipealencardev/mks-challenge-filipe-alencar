import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 200px;
`;

export const ContentLoading = styled.div<IContentLoadingStyle>`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #0f52ba;
  animation: loadingAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(${({ $item }) => $item}) {
    left: ${({ $left }) => $left}px;
    animation-delay: ${({ $seconds }) => `-0.${$seconds}s`};
  }

  @keyframes loadingAnimation {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
