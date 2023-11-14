import { Button } from "@/components/Buttons";
import { Cards } from "@/components/Cards";
import { CustomFlyout } from "@/components/CustomFlyout";
import { CustomLoading } from "@/components/CustomLoading";
import CustomSkeleton from "@/components/CustomSkeleton";
import GridResponsive from "@/components/GridResponsive";
import { GlobalContext } from "@/contexts/GlobalContext";
import { Footer } from "@/layouts/Footer";
import ProductApi from "@/services/apis/Products";
import { Product } from "@/types/Productstype";
import { countProducts } from "@/utils/helpers";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Home: React.FC = ({}) => {
  const product = new ProductApi();
  const {
    openChekout,
    insertProductsCheckout,
    setOpeChekout,
    setInsertProductCheckout,
    sizeScreen,
  } = useContext(GlobalContext);
  const [loadMore, setLoadMore] = useState(false);
  const [pageAndCount, setPageAndCount] = useState({ page: 1, count: 8 });
  const [totalItens, setTotalItens] = useState(0);
  const { data, isLoading } = product.getListProduct(
    pageAndCount.page,
    pageAndCount.count
  );
  const [productItem, setProductItem] = useState<Product[] | undefined>(
    data?.products
  );
  const [isMobile, setIsMobile] = useState(sizeScreen.width < 1080);
  const [loadingItens, setLoadingItens] = useState(true);

  useEffect(() => {
    setProductItem((state) => [...(state ?? []), ...(data?.products ?? [])]);
    if (isLoading) {
      setLoadingItens(true);
    } else {
      setTimeout(() => {
        setLoadMore(false);
        setLoadingItens(false);
      }, 3000);
    }
  }, [isLoading]);

  useEffect(() => {
    if (loadMore) {
      setPageAndCount((state) => {
        return { page: state.page + 1, count: 5 };
      });

      setTimeout(() => {
        setTotalItens(productItem?.length ?? 0);
      }, 1000);
    }
  }, [loadMore]);

  const countTimeout = setTimeout(() => {
    setTotalItens(productItem?.length ?? 0);
  }, 1000);

  useEffect(() => {
    return () => {
      clearTimeout(countTimeout);
    };
  }, []);

  const scrollToBottom = () => {
    const fullHeight = document.documentElement.scrollHeight;

    setTimeout(() => {
      window.scrollTo({
        top: fullHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <>
      <ContainerHome>
        <GridResponsive
          padding={"8vw 0 2vw"}
          columns={{
            count: 4,
            height: isMobile ? [1] : [1, 1, 1, 1],
          }}
          rows={{
            count: 2,
            height: [1],
          }}
          spaceColumns={22}
          spaceRows={31}
        >
          {productItem?.map((product, index, arr) => (
            <Cards
              isLoading={loadingItens}
              key={index}
              options={{
                id: product.id,
                name: product.name,
                brand: product.brand,
                description: product.description,
                photo: product.photo,
                price: product.price,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
              }}
              position={index}
              quantityItens={totalItens - 1}
              insertChekoutItem={() =>
                setInsertProductCheckout((state) => [...state, product])
              }
            />
          ))}
        </GridResponsive>
        {loadMore ? (
          <CustomLoading />
        ) : (data?.products.length ?? 0) > 0 ? (
          <Button
            textButton={"Carregar mais"}
            onClick={() => {
              setLoadMore(true);
              scrollToBottom();
            }}
          />
        ) : null}
      </ContainerHome>
      <CustomFlyout
        closedFlyout={(closed) => setOpeChekout(closed)}
        isOpen={openChekout}
        options={insertProductsCheckout}
      />
    </>
  );
};

export default Home;
