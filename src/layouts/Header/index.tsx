import { CartIcon, LogoIcon } from "@/icons";
import {
  ContainerCart,
  ContainerHeader,
  MainHeader,
  NumberItemCart,
} from "./styles";

export const Header: React.FC<IHeader> = ({}) => {
  return (
    <MainHeader>
      <ContainerHeader>
        <LogoIcon />
        <ContainerCart>
          <CartIcon />
          <NumberItemCart>0</NumberItemCart>
        </ContainerCart>
      </ContainerHeader>
    </MainHeader>
  );
};
