import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import left from "./../../img/svg/IconL.svg";
import right from "./../../img/svg/IconR.svg";
import { CarouselContext } from "./carousel-context";
import { Page } from "./Page";

export const MainContainer = styled.div`
  height: max-content;
  display: flex;
  justify-content: space-between;
  width: 87.5em;
  /* width: 100%; */
  margin: 36px 0;
`;
export const MainWindow = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const MainPages = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: translate;
  transition-property: transform;
  /* transition-duration: 300ms; */
  transition-timing-function: ease-in-out;
`;
export const MainBtn = styled.div`
  height: 30px;
  margin: 10px;
  margin-top: 60px;
`;
/* ------------*/
const Carousel = ({ children, infinite }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(children[1]);
  const [width, setWidth] = useState();
  const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 });
  const [transitionDuration, setTransitionDuration] = useState(300);

  const windowElRef = useRef();

  useEffect(() => {
    if (infinite) {
      setPages([
        cloneElement(children[Children.count(children) - 1]),
        ...children,
        cloneElement(children[0]),
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }
    setPages(children);
  }, [children, infinite]);

  useEffect(() => {
    const resizeHandler = () => {
      const windowWidth = windowElRef.current.offsetWidth;
      setWidth(windowWidth);
      setOffset(-(clonesCount.head * width));
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [clonesCount, width]);

  useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(300);
      }, 300);
    }
  }, [transitionDuration]);

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

  // useEffect(() => {}, [offset]);

  const LAST_OFFSET = -(width * (pages.length - 1));
  useEffect(() => {
    if (!infinite) return;
    if (offset === LAST_OFFSET) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(clonesCount.head * width));
      }, 300);
      return;
    } else if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)));
      }, 300);
      return;
    }
    let slider = setInterval(() => handleRightArrow(), 15000);
    return () => {
      clearInterval(slider);
    };
  }, [offset, infinite, pages, clonesCount, width]);

  return (
    <CarouselContext.Provider value={{ width }}>
      <MainContainer>
        <MainBtn onClick={handleLeftArrow}>
          <img src={left} alt="#" />
        </MainBtn>
        <MainWindow ref={windowElRef}>
          <MainPages
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }}
          >
            {pages}
          </MainPages>
        </MainWindow>
        <MainBtn onClick={handleRightArrow}>
          <img src={right} alt="#" />
        </MainBtn>
      </MainContainer>
    </CarouselContext.Provider>
  );
};

Carousel.Page = Page;

export default Carousel;
