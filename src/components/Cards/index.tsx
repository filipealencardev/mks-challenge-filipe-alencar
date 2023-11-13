import { PurchaseIcon } from "@/icons";
import {
  CardPrice,
  ContentButton,
  ContentCard,
  ContentDescription,
  ContentTitle,
  DescriptionCard,
  ContainerImg,
  ImageCard,
  MainCards,
  TextButton,
  TitleCard,
} from "./style";
import { ICard } from "./type";
import CustomSkeleton from "../CustomSkeleton";

export const Cards: React.FC<ICard> = ({
  options,
  isLoading,
  position,
  quantityItens,
}) => {
  const currencyFormat = (value: number) => {
    const currencyPTBR = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return currencyPTBR.format(value);
  };
  return isLoading && position > quantityItens ? (
    <CustomSkeleton types={"cards"} />
  ) : (
    <MainCards>
      <ContentCard>
        <ContainerImg>
          <ImageCard $imgPath={options.photo} />
        </ContainerImg>
        <ContentDescription>
          <ContentTitle>
            <TitleCard>{options.name}</TitleCard>
            <CardPrice>{currencyFormat(Number(options.price))}</CardPrice>
          </ContentTitle>
          <DescriptionCard>{options.description}</DescriptionCard>
        </ContentDescription>
      </ContentCard>
      <ContentButton>
        <PurchaseIcon />
        <TextButton>Comprar</TextButton>
      </ContentButton>
    </MainCards>
  );
};
