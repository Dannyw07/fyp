import React from "react";
import "./featured.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  //568: { items: 2 },
  // 1024: { items: 3 },
};

const items = [
  <div className="item1" data-value="1"></div>,
  <div className="item2" data-value="2"></div>,
  <div className="item3" data-value="3"></div>,
];
const Featured = () => {
  return (
    <div className="featured">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        //autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
      />
    </div>
  );
};

export default Featured;
