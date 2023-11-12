import { CartIcon, LogoIcon } from "@/icons";
import { ContainerCart, MainHeader, NumberItemCart } from "./styles";

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <MainHeader>
      <LogoIcon />
      <ContainerCart>
        <CartIcon />
        <NumberItemCart>0</NumberItemCart>
      </ContainerCart>
    </MainHeader>
  );
};
