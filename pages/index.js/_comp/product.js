import { ETH } from "components/svg";
import { Countdown } from "components/elements";
import { HiOutlineHeart, HiOutlineVideoCamera } from "react-icons/hi";
import s from "./styles/product.module.scss";

export const ProductThumb = ({ product }) => {
  return (
    <div className={`${s.productThumb} ${product.multiple ? s.multiple : ""}`}>
      <img src={product.img} className={s.thumbnail} />
      {product.animated && (
        <span className={s.animated}>
          <HiOutlineVideoCamera />
        </span>
      )}
      <div className={s.productDetail}>
        <h4>{product.name}</h4>
        <div className={s.productSeller}>
          <img src={product.seller.profileImg} />
          <span className={s.productSeller}>{product.seller.name}</span>
          <span className={s.productFavorite}>
            <HiOutlineHeart />
            {product.favorite}
          </span>
        </div>
        <span className={s.devider} />
        {product.bid ? (
          <div className={s.bidDetail}>
            <span>
              <span className={s.label}>Current bid</span>
              <span className={s.price}>
                <ETH /> {product.price} {product.currency}
              </span>
            </span>
            <span className={s.timer}>
              <span className={s.label}>Starts in</span>
              <Countdown time={product.bid.startsAt} className={s.countdown} />
            </span>
          </div>
        ) : (
          <span className={s.price}>
            <ETH /> {product.price} {product.currency}
          </span>
        )}
      </div>
    </div>
  );
};
