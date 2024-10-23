"use client";

import Arrow from "@/common/component/Carousel/Arrow";
import CarouselItem from "@/common/component/Carousel/Item";
import {
  carouselStyle,
  sliderWrapperStyle,
} from "@/common/component/Carousel/index.css";
import { useMediaQuery } from "@/common/hook/useMediaQuery";
import {
  type HTMLAttributes,
  type MutableRefObject,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { flushSync } from "react-dom";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  length: number;
}

type CarouselContextType = {
  length: number;
  currentIndex: number;
  itemRef: MutableRefObject<HTMLDivElement | null>;
};

export const CarouselContext = createContext<CarouselContextType>(
  {} as CarouselContextType,
);

const Carousel = ({ length, children }: CarouselProps) => {
  /** 인덱스: 0 ~ length - 1 */
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [slideCount, setSlideCount] = useState(4);

  useEffect(() => {
    setSlideCount(
      window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4,
    );
  }, []);

  const hasLeft = currentIndex > 0;
  const hasRight = currentIndex < length - slideCount;

  useMediaQuery(
    {
      mobile: () => setSlideCount(2),
      tablet: () => setSlideCount(3),
      desktop: () => setSlideCount(4),
    },
    [slideCount],
  );

  const handleNext = () => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) =>
          prev + slideCount < length ? prev + slideCount : length - 1,
        );
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handlePrev = () => {
    if (itemRef.current) {
      flushSync(() => {
        setCurrentIndex((prev) =>
          prev - slideCount >= 0 ? prev - slideCount : 0,
        );
      });

      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ length, currentIndex, itemRef }}>
      <div
        className={carouselStyle({
          hasLeft,
          hasRight,
        })}
      >
        {hasLeft && <Arrow position="left" onClick={handlePrev} />}

        <div className={sliderWrapperStyle}>{children}</div>

        {hasRight && <Arrow position="right" onClick={handleNext} />}
      </div>
    </CarouselContext.Provider>
  );
};

Carousel.Item = CarouselItem;

export default Carousel;
