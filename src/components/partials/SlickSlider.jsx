import React, { Component } from "react";
import Slider from "react-slick";

class SlickSlider extends Component {
  state = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  render() {
    return (
      <Slider {...this.state}>
        <div>
          <img src="./images/01.jpg" alt="" width="100%" height="100%" />
        </div>
        <div>
          <img src="./images/02.jpg" alt="" width="100%" height="100%" />
        </div>
        <div>
          <img src="./images/03.jpg" alt="" width="100%" height="100%" />
        </div>
      </Slider>
    );
  }
}

export default SlickSlider;
