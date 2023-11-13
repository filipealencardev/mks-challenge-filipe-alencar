import { IconClose } from "@/icons";
import {
  ContainerFlyout,
  ContentFlyout,
  HeaderFlyout,
  MainFlyout,
  ContentButtonCloseFlyout,
  ContentProduct,
  TitleFlyout,
  ContainerItens,
  ContentItens,
  ImageCardFlayout,
  TitleCardFlyout,
  ContainerCount,
  ContentCount,
  TextCount,
  TextPrice,
  CountSeparator,
  CountAction,
  CountValue,
  FooterFlayout,
  NotItens,
  ButtonEndCheckout,
  ContainerTotalValue,
  TextTotalValue,
  ButtonRemoveItem,
} from "./styles";
import { useContext, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { GlobalContext } from "@/contexts/GlobalContext";
import { IFlayout } from "./types";
import { Product } from "@/types/Productstype";

export const CustomFlyout: React.FC<IFlayout> = ({
  isOpen,
  closedFlyout,

  options,
}) => {
  const refFlyout = useRef<HTMLDivElement>(null);
  const {
    insertProductsCheckout,
    setInsertProductCheckout,
    productsCheckout,
    setProductCheckout,
    setOpeChekout,
  } = useContext(GlobalContext);

  useOutsideClick({
    ref: refFlyout,
    callback: () => setOpeChekout(false),
  });

  const removeAllItens = (id: number): void => {
    const updatedValue = insertProductsCheckout.filter(
      (product) => product.id !== id
    );
    setInsertProductCheckout(updatedValue);
  };

  const removeUniqueItem = (item: Product): void => {
    const itensPosition = insertProductsCheckout.findIndex(
      (product) => product.id === item.id
    );

    if (itensPosition !== -1) {
      const updatedTest = [...insertProductsCheckout];
      updatedTest.splice(itensPosition, 1);

      setInsertProductCheckout(updatedTest);
    }
  };

  const currencyFormat = (value: number) => {
    const currencyPTBR = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return currencyPTBR.format(value);
  };

  const totalCost = productsCheckout.reduce((accumulator, item) => {
    const count = item.count;
    const price = parseFloat(item.product.price.replace(",", ".")); // Converte para número, removendo possíveis vírgulas

    if (!isNaN(price)) {
      accumulator += count * price;
    }

    return accumulator;
  }, 0);

  return (
    <MainFlyout ref={refFlyout} $isOpen={isOpen}>
      <ContainerFlyout>
        <ContentFlyout>
          <HeaderFlyout>
            <TitleFlyout>Carrinho de compras</TitleFlyout>
            <ContentButtonCloseFlyout onClick={() => closedFlyout(!isOpen)}>
              <IconClose />
            </ContentButtonCloseFlyout>
          </HeaderFlyout>
          <ContainerItens>
            {productsCheckout.length === 0 ? (
              <NotItens>Seu Carrinho Está Vazio</NotItens>
            ) : (
              productsCheckout.map((item, index) => (
                <ContentItens key={index}>
                  <ContentProduct>
                    <ImageCardFlayout src={item.product.photo} />
                    <TitleCardFlyout>{item.product.name}</TitleCardFlyout>
                  </ContentProduct>
                  <ContainerCount>
                    <TextCount>Qtd:</TextCount>
                    <ContentCount>
                      <CountAction
                        onClick={() => {
                          removeUniqueItem(item.product);
                          setProductCheckout((prevArray) => {
                            const updatedArray = prevArray.map((item, i) =>
                              i === index
                                ? {
                                    ...item,
                                    count:
                                      item.count === 0
                                        ? item.count
                                        : item.count - 1,
                                  }
                                : item
                            );

                            return updatedArray.filter(
                              (item) => item.count !== 0
                            );
                          });
                        }}
                      >
                        -
                      </CountAction>
                      <CountSeparator>|</CountSeparator>
                      <CountValue>{item.count}</CountValue>
                      <CountSeparator>|</CountSeparator>
                      <CountAction
                        onClick={() =>
                          setProductCheckout((prevArray) =>
                            prevArray.map((item, i) =>
                              i === index
                                ? { ...item, count: item.count + 1 }
                                : item
                            )
                          )
                        }
                      >
                        +
                      </CountAction>
                    </ContentCount>
                  </ContainerCount>
                  <TextPrice>
                    {currencyFormat(
                      Number(
                        item.product.price
                          ? Number(item.product.price) * item.count
                          : 0
                      )
                    )}
                  </TextPrice>
                  <ButtonRemoveItem
                    onClick={() => removeAllItens(item.product.id)}
                  >
                    <IconClose />
                  </ButtonRemoveItem>
                </ContentItens>
              ))
            )}
          </ContainerItens>
        </ContentFlyout>
      </ContainerFlyout>
      <FooterFlayout>
        <ContainerTotalValue>
          <TextTotalValue>Total:</TextTotalValue>
          <TextTotalValue>{currencyFormat(totalCost)}</TextTotalValue>
        </ContainerTotalValue>
        <ButtonEndCheckout>Finalizar Compra</ButtonEndCheckout>
      </FooterFlayout>
    </MainFlyout>
  );
};
