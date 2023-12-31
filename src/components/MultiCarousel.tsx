'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 730 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 730, min: 0 },
    items: 1,
  },
};

type Props = {
  children: React.ReactNode;
};

export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel
      infinite
      autoPlay
      responsive={responsive}
      itemClass="m-1"
    >
      {children}
    </Carousel>
  );
}
