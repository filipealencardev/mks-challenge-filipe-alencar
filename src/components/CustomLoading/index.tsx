import { ContainerLoading, ContentLoading } from "./styles";

export const CustomLoading: React.FC = ({}) => {
  const loadQuantity: { seconds: number; left: number }[] = [
    { seconds: 24, left: 8 },
    { seconds: 12, left: 32 },
    { seconds: 0, left: 56 },
  ];

  return (
    <ContainerLoading>
      {loadQuantity.map((load, index) => (
        <ContentLoading
          key={index}
          $item={index + 1}
          $left={load.left}
          $seconds={load.seconds}
        />
      ))}
    </ContainerLoading>
  );
};
