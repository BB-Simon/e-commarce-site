import React from "react";
import { Row, Col } from "reactstrap";
import MyCard from "./partials/MyCard";

import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Products = () => {
  const imgs = [
    {
      img: "./images/product-1.jpeg",
    },
    {
      img: "./images/product-2.jpeg",
    },
    {
      img: "./images/product-3.jpeg",
    },
    {
      img: "./images/product-4.jpeg",
    },
    {
      img: "./images/product-5.jpeg",
    },
    {
      img: "./images/product-6.jpeg",
    },
    {
      img: "./images/product-7.jpeg",
    },
    {
      img: "./images/product-8.jpeg",
    },
    {
      img: "./images/product-9.webp",
    },
    {
      img: "./images/product10.jpg",
    },
    {
      img: "./images/product11.jpg",
    },
    {
      img: "./images/product12.jpg",
    },
  ];
  return (
    <Wrapper className="my-5 mx-5">
      <h1 className="text-center my-5">Our Products</h1>
      <Row xs="1" sm="2" md="4">
        {imgs.map((item) => {
          return (
            <Col className="mb-3">
              <MyCard
                img={item.img}
                headerToggle={true}
                title="New Collection"
                date={new Date().toLocaleDateString()}
                moreIcon={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel eaque eveniet id."
              />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  overflow: hidden;
`;
