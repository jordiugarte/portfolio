import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";

const styles = {
  root: {},
  scroll: {
    position: "relative",
    display: "flex",
    overflow: "auto",
    scrollSnapType: "x mandatory"
  },
  item: {
    width: "auto",
    height: "auto",
    flexShrink: 0,
    marginRight: "16px"
  },
  itemSnapPoint: {
    scrollSnapAlign: "start"
  },
  pageIndicator: {
    display: "flex",
    justifyContent: "center"
  }
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: CarouselRenderItemProps<T>
  ) => React.ReactElement<CarouselItemProps>;
}

interface CarouselRenderItemProps<T> {
  readonly item: T;
  readonly isSnapPoint: boolean;
}

export const Carousel = <T,>({
  items,
  renderItem
}: CarouselProps<T>) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    snapPointIndexes
  } = useSnapCarousel();
  return (
    <div style={styles.root}>
      <ul style={styles.scroll} ref={scrollRef}>
        {items.map((item, i) =>
          renderItem({
            item,
            isSnapPoint: snapPointIndexes.has(i)
          })
        )}
      </ul>
      <div style={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  readonly isSnapPoint: boolean;
  readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
  <li
    style={{
      ...styles.item,
      ...(isSnapPoint ? styles.itemSnapPoint : {})
    }}
  >
    {children}
  </li>
);
