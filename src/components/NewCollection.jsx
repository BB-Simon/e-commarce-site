import React, { Component } from "react";
import Slider from "react-slick";
import MyCard from "./partials/MyCard";
import styled from "styled-components";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class NewCollection extends Component {
  state = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  render() {
    const imgs = [
      {
        img: "./images/collection1.png",
      },
      {
        img: "./images/collection2.jpg",
      },
      {
        img: "./images/collection3.jpg",
      },
      {
        img: "./images/collection4.jpg",
      },
      {
        img: "./images/collection5.png",
      },
      {
        img: "./images/collection6.png",
      },
      {
        img: "./images/collection7.png",
      },
      {
        img: "./images/collection8.png",
      },
    ];
    return (
      <Wrapper>
        <div className="m-5">
          <h1 className="text-center my-5">Our New Collectoins</h1>
        </div>

        <Slider {...this.state}>
          {imgs.map((item) => {
            return (
              <MyCard
                headerToggle={false}
                img={item.img}
                imgTitle="King Bed"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores beatae ducimus?"
                moreIcon={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />
            );
          })}
        </Slider>
      </Wrapper>
    );
  }
}

export default NewCollection;

const Wrapper = styled.div`
  overflow: hidden;
`;
