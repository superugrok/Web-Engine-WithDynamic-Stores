import React from "react";
import Slider from "react-slick";
import classes from "@Styles/components/appComponents/footer/Footer.module.scss";
import PartnerIcon from "@Components/appComponents/footer/PartnerIcon";
import SliderArrow from "@Components/appComponents/footer/SliderArrow";
import { PartnersArrowsTypes } from "@Models/components/appComponents/footer/enums";

const partnersList = [
  {
    title: "OVH",
    link: "https://ovh.com"
  },
  {
    title: "WebMoney",
    link: "https://webmoney.com"
  },
  {
    title: "Unitpay",
    link: "https://unitpay.com"
  }
];


export const Partners: React.FC = () => {

  const sliderSettings = {
    adaptiveHeight: true,
    centerMode: true,
    infinite: true,
    useCSS: true,
    speed: 500,
    slidesToShow: window.matchMedia("(max-width: 420px)").matches
      ? 1
      : 2,// 2 if width > 400px, else 1
    slidesToScroll: 1,
    className: classes.PartnersSlider,
    prevArrow: <SliderArrow arrowType={PartnersArrowsTypes.PREV} />,
    nextArrow: <SliderArrow arrowType={PartnersArrowsTypes.NEXT} />
  };


  const getPartners = () =>
    partnersList.map((partner, index) => (
      <PartnerIcon key={index + partner.title} iconType={partner.title} link={partner.link} />
    ));

  return (
    <div className={classes.Partners}>

      {/* visible if resolution > 1280px */}
      <div className={classes.HighResolution}>
        <div className={classes.PartnersContainer}>
          {getPartners()}
        </div>
      </div>

      {/* visible if resolution < 1280px */}
      <div className={classes.LowResolution}>
        <Slider {...sliderSettings} >
          {getPartners()}
        </Slider>
      </div>
    </div>
  );
};
