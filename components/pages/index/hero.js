import React, { useContext } from "react";
import { SiteContext } from "SiteContext";
import Carousel from "react-multi-carousel";
import s from "./styles/hero.module.scss";

export default function Hero() {
  const { siteConfig } = useContext(SiteContext);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  if (
    siteConfig.siteConfig?.landingPage?.hero?.viewHeroSection &&
    siteConfig.siteConfig?.landingPage?.hero?.slides?.length > 0
  ) {
    return (
      <div className={`${s.hero} heroGlobal`}>
        <Carousel
          containerClass={s.wrapper}
          responsive={responsive}
          dotListClass={s.dot}
          autoPlaySpeed={1000}
          infinite={true}
          showDots={true}
          draggable={false}
        >
          {siteConfig.siteConfig?.landingPage?.hero?.slides.map((url) => (
            <img key={url} src={url} />
          ))}
        </Carousel>
      </div>
    );
  }
  return null;
}
