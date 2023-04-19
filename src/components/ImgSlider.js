import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

const ImgSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src='/images/slider-scale.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-scales.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-badag.jpg' alt='' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-badging.jpg' alt='' />
        </a>
      </Wrap>
     </Carousel> 
  )
}

const Carousel =styled(Slider)`
margin: 1rem 1rem;
& > button{
  opacity: 0;
  &:hover{
    opacity: 1;
  }
} 
ul li button {
  &:before{
    font-size: 10px;
    color: rgb(150, 158, 171);
    z-index: 1;
  }
}
.slick-list{
  overflow: initial;
}
.slick-prev{
  left:-75px;
}
.slick-right{
  right:-75px;
}
`

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249,249,249,0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
  margin: 1rem;
  @media (max-width:768px){
    height:7rem;
  }
  img{
    width: 100%;
    height: 100%;
  }
  &:hover{
    padding: 0;
    border: 5px solid rgba(249,249,249, 0.8);
    transition-duration: 300ms;
  }
`

export default ImgSlider
