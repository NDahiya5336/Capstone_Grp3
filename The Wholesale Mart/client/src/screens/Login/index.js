import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import "./style.css";

function Login() {
  const [loginData, setLoginData] = useState([]);
  const [validationMessages, setValidationMessages] = useState([]);

  const handleChange = (target) => {
    setLoginData({ ...loginData, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    validateForm();
    if (validationMessages.length > 0) {
      e.preventDefault();
    }
    console.log(validationMessages.length);
    console.log({
      Email: loginData.email,
      Password: loginData.password,
    });
  };

  const validateForm = () => {
    const { email, password } = loginData;
    setValidationMessages([]);
    let messages = [];

    if (!email) {
      messages.push("Email is required.");
    }
    if (!password) {
      messages.push("Password is required.");
    }

    setValidationMessages(messages);
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-1 mb-5 pb-1">We are The WholeSale Mart</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="email"
              name="email"
              value={loginData.email || ""}
              onChange={(e) => handleChange(e.target)}
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              name="password"
              value={loginData.password || ""}
              onChange={(e) => handleChange(e.target)}
              type="password"
            />
            <div>
              {validationMessages.length > 0 && (
                <span>
                  <br />
                  Validation Summary
                </span>
              )}
              <ul>
                {validationMessages.map((vm) => (
                  <li key={vm}>{vm}</li>
                ))}
              </ul>
            </div>

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                type="submit"
                onClick={handleSubmit}
              >
                Sign in
              </MDBBtn>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className="mx-2" color="danger">
                Sign Up
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">We are more than just a company</h4>
              <p class="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
