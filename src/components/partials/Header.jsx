import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import SlickSlider from "./SlickSlider";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-up">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="btn-group">
            <button
              className="btn border dropdown-toggle my-md-3 my-1 text-white"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              USD
            </button>
            <div className="dropdown-menu">
              <Link to="#" className="dropdown-item">
                ERU - Euro
              </Link>
              <Link to="#" className="dropdown-item">
                EGP - Egyptian Pound
              </Link>
            </div>
          </div>
          <h2>Comfy House</h2>
          <ul className="d-flex mb-0">
            <li className="btn border text-light my-3 mr-2">
              <span>Sign In</span>
            </li>
            <li className="btn border my-3 text-light">
              <span>Sing Up</span>
            </li>
          </ul>
        </div>
      </div>
      <Navigation />
      <SlickSlider />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  overflow: hidden;
  .header-up {
    background: var(--primary-color);
  }
`;
