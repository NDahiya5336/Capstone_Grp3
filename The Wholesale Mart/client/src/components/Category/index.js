import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";

function Category() {
  return (
    <div className="container-bg py-5">
      <MDBContainer fluid className="text-center w-75">
        <h4 className="mt-4 mb-5">
          <strong>Shop by Category</strong>
        </h4>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>{" "}
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>{" "}
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>{" "}
          <MDBCol md="12" lg="4" className="mb-4 ">
            <MDBRipple
              rippleColor="dark"
              rippleTag="div"
              className="bg-image rounded hover-zoom shadow-1-strong rounded-circle"
            >
              <a href="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                  fluid
                  className="w-100 "
                  alt=""
                />
              </a>
            </MDBRipple>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Category;
