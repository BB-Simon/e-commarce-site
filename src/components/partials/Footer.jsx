import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="up py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>
                  <h4>Our Products</h4>
                </li>
                <li>New Collections</li>
                <li>All Products</li>
                <li>Populer Products</li>
                <li>Free Shipping</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <h4>My Account</h4>
                </li>
                <li>Log In / Register</li>
                <li>My Shipping Cart</li>
                <li>My Orders</li>
                <li>My Address</li>
                <li>My Wish List</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>
                  <div className="d-flex card text-dark p-3">
                    <h4 className="text-info">
                      <i class="far fa-question-circle"></i> Help Center
                    </h4>
                    <p className="text-muted">
                      Have a question or an issue? We are here to help you!
                    </p>
                  </div>
                </li>
                <li>
                  <h5>Flow Un On: </h5>
                  <ul className="d-flex">
                    <li>
                      <Link href="#">
                        <i class="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-instagram-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-pinterest-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i class="fab fa-google-plus-square"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <h5>DOWNLOAD OUR APPs</h5>
                  <ul className="d-flex">
                    <li>
                      <i class="fab fa-google-play"></i>
                    </li>
                    <li>
                      <i class="fab fa-apple"></i>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="down py-3">
        <div className="container text-center">
          <p className="text-muted">&copy; 2020, All Rights Are Reserved</p>
          <ul className="d-flex flex-wrap justify-content-between my-2">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Media Center</Link>
            </li>
            <li>
              <Link to="#">Privecy&Policy</Link>
            </li>
            <li>
              <Link to="#">Terms&Conditions</Link>
            </li>
            <li>
              <Link to="#">My Account</Link>
            </li>
            <li>
              <Link to="#">Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  .up {
    background: #ffe0f7;
  }
  .down {
    background: var(--primary-color);
  }
  p {
    margin-bottom: 0;
  }
  ul li {
    margin: 5px 5px;
  }
`;
