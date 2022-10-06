import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import s from "./styles/hero.module.scss";

const popularItems = [
  {
    label: "Top items",
    title: "Jordan Immortal #3 Rare Limited Edition",
    images: [
      "https://d1iczm3wxxz9zd.cloudfront.net/55d57c6d-0986-4ea3-ae31-76f61f5d7519/000000-0000000002/13217307497841280502913285800380124840902678847690935389542581177216891648005/ITEM_PREVIEW1.gif",
      "https://d1iczm3wxxz9zd.cloudfront.net/d014b825-5d57-4b9f-a280-b6137541c412/000000-0000000002/10127432022877634189365778124244719449024239341522417111769156633193654536487/ITEM_PREVIEW1.gif",
      "https://d1iczm3wxxz9zd.cloudfront.net/80adf45d-c5a9-42dc-874b-3b962b038feb/000000-0000000000/60972941801828568119289275729780257962306693057622454507545479710310788509792/ITEM_PREVIEW1.jpg",
    ],
  },
  {
    label: "Just dropped",
    title: "4 Abstract painting from Marek Okon",
    images: [
      "https://images.unsplash.com/photo-1633702879143-acd134698722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1638064867432-8d3e00905d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1629627262826-7e2e7c4db12e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1632211198451-1e1b70c15b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    label: "Just dropped",
    title: "Images of some gold coins",
    images: [
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3J5cHRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=60",
      "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&h=500&q=60",
      "https://images.unsplash.com/photo-1621504450188-702fdbbfc9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&h=500&q=60",
    ],
  },
];

export default function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={`${s.hero} heroGlobal`}>
      <img src="/assets/hero_background.jpg" className={s.background} />
      <div className={s.wrapper}>
        <Carousel
          containerClass={s.wrapper}
          responsive={responsive}
          dotListClass="dot"
          autoPlaySpeed={1000}
          infinite={true}
          showDots={true}
          draggable={false}
        >
          {popularItems.map((item, i) => (
            <HeroItem key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
const HeroItem = ({ item }) => {
  const img_ref = useRef();
  const [img, setImg] = useState(item.images[0]);
  const [style, setStyle] = useState({
    transform: "translateY(0)",
  });
  useEffect(() => {
    if (item.images.indexOf(img) !== item.images.length - 1) {
      const { height } = img_ref.current.getBoundingClientRect();
      setStyle({
        transform: `translateY(-${
          (height + 8) * item.images.indexOf(img) - (height + 8)
        }px)`,
      });
    }
  }, [img]);
  return (
    <div className={s.heroItem}>
      <div className={s.heroTitle}>
        <h3>{item.label}</h3>
        <h1>{item.title}</h1>
      </div>
      <div className={s.image}>{img && <img src={img} />}</div>
      {item.images.length > 1 && (
        <div className={s.heroThumbnail}>
          <div className={s.thumbnailWrapper} style={style}>
            {item.images.map((_img) => (
              <img
                ref={img_ref}
                className={img === _img ? "selected" : ""}
                src={_img}
                key={_img}
                onClick={() => setImg(_img)}
                draggable={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
