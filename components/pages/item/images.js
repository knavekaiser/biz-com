import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import s from "./styles/products.module.scss";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import {
  PiMagnifyingGlassMinusBold,
  PiMagnifyingGlassPlusBold,
} from "react-icons/pi";

export default function Images({ product, variant }) {
  const [viewImage, setViewImage] = useState(0);
  const [zoom, setZoom] = useState(false);
  const carouselRef = useRef(null);
  return (
    <div className={s.images}>
      <div className={s.thumbnails}>
        {(variant?.images || product.images).map((src, i) => (
          <Image
            key={i}
            src={src}
            height={48}
            width={48}
            alt={product.title}
            className={viewImage === i ? s.inView : ""}
            onClick={() => {
              setViewImage(i);
              setZoom(false);
              carouselRef.current.goToSlide(i);
            }}
          />
        ))}
      </div>
      <div className={s.mainImgWrapper}>
        <ImageSliderWithRef
          title={product.title}
          images={variant?.images || product.images}
          ref={carouselRef}
          setView={setViewImage}
        />
        {zoom && (
          <ZoomImg
            src={
              (variant?.images || product.images)[viewImage] ||
              (variant?.images || product.images)[0]
            }
            alt={product.title}
          />
        )}
        <button className={s.zoomBtn} onClick={() => setZoom(!zoom)}>
          {zoom ? (
            <PiMagnifyingGlassMinusBold />
          ) : (
            <PiMagnifyingGlassPlusBold />
          )}
        </button>
      </div>
    </div>
  );
}

const ImageSlider = ({ images, setView, title }, carouselRef) => {
  return (
    <div className={`${s.slider}`}>
      <Carousel
        ref={(el) => (carouselRef.current = el)}
        swipeable
        draggable
        containerClass={s.sliderWrapper}
        itemClass={s.slide}
        ssr
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 0 },
            items: 1,
          },
        }}
        showDots={false}
        showArrows={false}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        afterChange={(previousSlide, { currentSlide, onMove }) => {
          setView(currentSlide);
        }}
      >
        {images.map((url) => (
          <Image
            alt={title}
            height={400}
            width={400}
            draggable={false}
            key={url}
            src={url}
          />
        ))}
      </Carousel>
    </div>
  );
};
const ImageSliderWithRef = forwardRef(ImageSlider);

const ZoomImg = ({ src, alt }) => {
  const mainImgRef = useRef();
  const imgRef = useRef();
  const [mouseDown, setMouseDown] = useState(false);
  const [imgStyle, setImgStyle] = useState({ left: "0", top: "0" });
  const moveHandler = useCallback(
    (e) => {
      if (!mouseDown) return;
      if (e.type === "mousemove") {
        e.preventDefault();
      }
      if (mainImgRef.current && imgRef.current) {
        const travel = {
          x: mouseDown.x - (e.touches?.[0]?.clientX || e.clientX),
          y: mouseDown.y - (e.touches?.[0]?.clientY || e.clientY),
        };

        setImgStyle({
          left: `${Math.max(
            Math.min(mouseDown.startX - travel.x, 0),
            -(mainImgRef.current.clientWidth * 1.5)
          )}px`,
          top: `${Math.max(
            Math.min(mouseDown.startY - travel.y, 0),
            -(mainImgRef.current.clientHeight * 1.5)
          )}px`,
        });
      }
    },
    [mouseDown, imgStyle]
  );
  useEffect(() => {
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("touchmove", moveHandler);
    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("touchmove", moveHandler);
    };
  }, [moveHandler]);
  useEffect(() => {
    document.addEventListener("mouseup", () => setMouseDown(false));
    document.addEventListener("touchend", () => setMouseDown(false));
    return () => {
      document.removeEventListener("mouseup", () => setMouseDown(false));
      document.removeEventListener("touchend", () => setMouseDown(false));
    };
  }, []);
  return (
    <div
      className={s.mainImg}
      ref={mainImgRef}
      onMouseDown={(e) =>
        setMouseDown({
          x: e.clientX,
          y: e.clientY,
          startX: parseFloat(imgStyle.left),
          startY: parseFloat(imgStyle.top),
        })
      }
      onTouchStart={(e) => {
        document.body.style.overflow = "hidden";
        setMouseDown({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          startX: parseFloat(imgStyle.left),
          startY: parseFloat(imgStyle.top),
        });
      }}
      onTouchEnd={() => {
        document.body.style.overflow = "unset";
      }}
    >
      <Image
        ref={imgRef}
        draggable={false}
        src={src}
        height={800}
        width={800}
        alt={alt}
        style={imgStyle}
      />
    </div>
  );
};
