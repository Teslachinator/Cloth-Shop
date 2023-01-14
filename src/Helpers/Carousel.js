import React, { Children, cloneElement, useEffect, useState } from "react";
import styled from "styled-components";
import left from "./../img/svg/IconL.svg";
import right from "./../img/svg/IconR.svg";

export const MainContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: space-between;
  width: 1400px;

  margin: 36px 0;
`;
export const MainWindow = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const MainPages = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;
export const MainBtn = styled.div`
  height: 30px;
  margin: 10px;
  margin-top: 60px;
`;

const PAGE_WIDTH = 1300;

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(1300);

  const handleLeftArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrow = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: "100%",
          },
        });
      })
    );
  }, []);
  return (
    <MainContainer>
      <MainBtn onClick={handleLeftArrow}>
        <img src={left} alt="#" />
      </MainBtn>
      <MainWindow>
        <MainPages
          style={{
            transform: `translateX(${offset}px)`,
            // transitionDuration: `${transitionDuration}ms`,
          }}
        >
          {pages}
        </MainPages>
      </MainWindow>
      <MainBtn onClick={handleRightArrow}>
        <img src={right} alt="#" />
      </MainBtn>
    </MainContainer>
  );
};

export default Carousel;
