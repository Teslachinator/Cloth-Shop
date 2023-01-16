import { useContext } from "react";
import styled from "styled-components";
import { CarouselContext } from "./carousel-context";

const PageContainer = styled.div`
  height: 100%;
`;

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext);
  return (
    <PageContainer
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </PageContainer>
  );
};
