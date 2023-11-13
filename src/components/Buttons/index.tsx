import { ButtonContent, ContainerButton } from "./styles";

export const Button: React.FC<{ onClick?: () => void; textButton: string }> = ({
  onClick,
  textButton,
}) => {
  return (
    <ContainerButton onClick={onClick}>
      <ButtonContent>{textButton}</ButtonContent>
    </ContainerButton>
  );
};
