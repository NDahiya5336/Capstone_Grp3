import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

import TodaysOffer from "../../components/TodaysOffer";
import BestSellingProducts from "../../components/BestSellingProducts";

export default function Home() {
  return (
    <>
      <MDBCarousel className="container w-70 h-30 mb-3" showControls>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="..."
        />
      </MDBCarousel>
      <TodaysOffer />
      <BestSellingProducts />
    </>
  );
}
