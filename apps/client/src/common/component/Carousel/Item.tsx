import { CarouselContext } from "@/common/component/Carousel";
import { itemStyle } from "@/common/component/Carousel/index.css";
import { type PropsWithChildren, useContext } from "react";

type CarouselItemProps = PropsWithChildren<{
  index: number;
}>;

const CarouselItem = ({ index, children }: CarouselItemProps) => {
  const { currentIndex, itemRef } = useContext(CarouselContext);

  return (
    <div
      className={itemStyle}
      ref={(node) => {
        if (currentIndex === index) {
          itemRef.current = node as HTMLDivElement;
        }
      }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
