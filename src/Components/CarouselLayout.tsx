import React, { useState } from "react";
import { Button, Carousel, Radio } from "antd";
type Props = {};

const CarouselLayout = (props: Props) => {
  const contentStyle: {} = {
    height: "480px",
    color: "black",
    lineHeight: "30px",
    textAlign: "center",
    backgroundImage:
      "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/d003d968607413.5b62c6562ad2f.jpg')",
    margin: "10px 0px",
    opacity: "75%",
    position: "relative",
  };
  const buttonStyle: {} = {
    textAlign: "center",
    position: "relative",
    bottom: "100px",
  };
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          Discover all the new arrivals of the women's ready-to-wear collection
          Spring-Summer 2022. Browse items that you need for your store
        </h3>
        <div style={buttonStyle}>
          <Button type="primary" size="large" danger>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>
          Discover all the new arrivals of the women's ready-to-wear collection
          Spring-Summer 2022. Browse items that you need for your store
        </h3>
        <div style={buttonStyle}>
          <Button type="primary" size="large" danger>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>
          Discover all the new arrivals of the women's ready-to-wear collection
          Spring-Summer 2022. Browse items that you need for your store
        </h3>
        <div style={buttonStyle}>
          <Button type="primary" size="large" danger>
            SHOP NOW
          </Button>
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>
          Discover all the new arrivals of the women's ready-to-wear collection
          Spring-Summer 2022. Browse items that you need for your store
        </h3>
        <div style={buttonStyle}>
          <Button type="primary" size="large" danger>
            SHOP NOW
          </Button>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselLayout;
