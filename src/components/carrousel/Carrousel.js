import React, { Component } from "react";
import { ImageWrapper, SliderImage, ImageTitle } from "./style";
import { Link } from "../link/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categoryImages = [
  {
    name: "Dagelijks",
    alt: "Dagelijks",
    url: "https://i.imgur.com/Iw4XgOZ.jpg",
    categoryUrl: " ",
  },
  {
    name: "Sport",
    alt: "Sport",
    url: "https://i.imgur.com/YOSr0Mn.jpg",
    categoryUrl: " ",
  },
  {
    name: "Reizen",
    alt: "Reizen",
    url: "https://i.imgur.com/YCJlPYU.jpg",
    categoryUrl: " ",
  },
  {
    name: "Medisch",
    alt: "Medisch",
    url: "https://i.imgur.com/ynuu0vV.jpg",
    categoryUrl: " ",
  },
];

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      className: "slides",
    };

    return (
      <Slider {...settings}>
        {categoryImages.map((categoryImage) => {
          return (
            <ImageWrapper>
              <Link to={categoryImage.categoryUrl}>
                <SliderImage
                  className="img"
                  src={categoryImage.url}
                  alt={categoryImage.alt}
                />
                <ImageTitle>{categoryImage.name}</ImageTitle>
              </Link>
            </ImageWrapper>
          );
        })}
      </Slider>
    );
  }
}
