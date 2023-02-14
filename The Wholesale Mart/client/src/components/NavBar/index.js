import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";

function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <MDBNavbar className="p-3" expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">The Wholesale Mart</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/products">Product</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className="d-flex input-group ">
              <input
                type="search"
                className="form-control"
                placeholder="Search for products"
                aria-label="Search"
              />
              <MDBBtn color="primary">Search</MDBBtn>
            </form>

            <MDBContainer className="d-flex" id="navbar-button-container">
              <MDBBtn outline color="success" className="me-2" type="button">
                Main button
              </MDBBtn>
              <MDBBtn outline color="secondary" size="sm" type="button">
                Smaller button
              </MDBBtn>
            </MDBContainer>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavBar;
