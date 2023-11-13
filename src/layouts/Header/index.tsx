import { CartIcon, LogoIcon } from "@/icons";
import {
  ContainerCart,
  ContainerHeader,
  MainHeader,
  NumberItemCart,
} from "./styles";
import { useContext, useState } from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

export const Header: React.FC<IHeader> = ({}) => {
  const { productsCheckout, setOpeChekout } = useContext(GlobalContext);
  const totalCount = productsCheckout.reduce(
    (acc, item) => acc + item.count,
    0
  );

  return (
    <MainHeader>
      <ContainerHeader>
        <LogoIcon />
        <ContainerCart
          $disabled={totalCount === 0}
          onClick={() => setOpeChekout(true)}
        >
          <CartIcon />
          <NumberItemCart $disabled={totalCount === 0}>
            {totalCount}
          </NumberItemCart>
        </ContainerCart>
      </ContainerHeader>
    </MainHeader>
  );
};
