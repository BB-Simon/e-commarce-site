import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  shoppingCart: {
    color: "#e79cc2",
    marginBottom: "3px",
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavWrapper>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavbarBrand href="/">Home</NavbarBrand>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Collections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <InputGroup>
                <Input type="search" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i class="fas fa-search"></i>
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </NavItem>
          </Nav>
        </Collapse>
        <Nav>
          <CartWrapper>
            <NavItem>
              <ShoppingBasketIcon className={classes.shoppingCart} />
            </NavItem>
            <CartItem>0</CartItem>
          </CartWrapper>
        </Nav>
      </Navbar>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.div`
  background: #ffe0f7;
  padding: 0 50px;
`;

const CartWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin: 0 8px;
  border: 1px solid #900d0d;
  border-radius: 50%;
  padding: 3px 2px;
  color: #900d0d;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
`;

const CartItem = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #f09d51;
  padding: 0 5px;
  border-radius: 30%;
  color: #fff;
`;
