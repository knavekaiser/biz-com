import React from "react";
import { RankBadge } from "components/svg";
import Link from "next/link";
import { Select } from "components/elements";
// import { ProductThumb } from "./product";
import { ProductThumb } from "components/ui/productThumbnail";
import s from "./styles/landingPage.module.scss";

const products = [
  {
    _id: "a243rrfsafsdfsadf",
    animated: true,
    favorite: 50,
    img: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    bid: {
      currentBid: 0.0669,
      startsAt: "2021-11-30T14:30:00.000Z",
    },
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "as2323rdfsadf",
    animated: true,
    favorite: 50,
    img: "https://images.unsplash.com/photo-1526389157-6a5cc2bb4afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    bid: {
      currentBid: 0.0669,
      startsAt: "2021-11-30T14:30:00.000Z",
    },
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "asd23fdfsadf",
    favorite: 50,
    img: "https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    bid: {
      currentBid: 0.0669,
      startsAt: "2021-11-29T11:30:00.000Z",
    },
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "asdfsasdfsdfadf",
    favorite: 50,
    img: "https://images.unsplash.com/photo-1535673774336-ef95d2851cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    bid: {
      currentBid: 0.0669,
      startsAt: "2021-11-30T14:30:00.000Z",
    },
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "asdfsadf",
    animated: true,
    favorite: 50,
    img: "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    bid: {
      currentBid: 0.0669,
      startsAt: "2021-11-30T14:30:00.000Z",
    },
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function LiveAuction() {
  return (
    <div className={`${s.shelf} ${s.products}`}>
      <div className={s.shelfHead}>
        <span className={s.shelfTitle}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3202_36270)">
              <path
                d="M24.6423 34.6406H3.67418C2.15465 34.6406 0.922852 35.8724 0.922852 37.392V39.5279C0.922852 39.7887 1.13434 40.0002 1.3952 40.0002H26.9214C27.1822 40.0002 27.3937 39.7887 27.3937 39.5279V37.392C27.3936 35.8724 26.1618 34.6406 24.6423 34.6406Z"
                fill="#2D5872"
              />
              <path
                d="M24.6424 34.6406H23.7366V35.9028C23.7366 36.9945 22.8516 37.8795 21.7599 37.8795H1.3952C1.13434 37.8795 0.922852 37.668 0.922852 37.4072V39.5278C0.922852 39.7887 1.13434 40.0002 1.3952 40.0002H23.7365H26.9214C27.1822 40.0002 27.3937 39.7887 27.3937 39.5278V37.4073V37.392C27.3937 35.8724 26.1619 34.6406 24.6424 34.6406Z"
                fill="#1D4859"
              />
              <path
                d="M26.8195 27.5657L28.9795 25.4058L17.297 13.7233L15.137 15.8832L26.8195 27.5657Z"
                fill="#998675"
              />
              <path
                d="M27.8996 26.4847L28.9795 25.4048L17.297 13.7223L16.2171 14.8022L27.8996 26.4847Z"
                fill="#927266"
              />
              <path
                d="M38.7553 35.1209L36.5339 37.3422C36.1057 37.7704 35.4114 37.7704 34.9831 37.3422L25.4432 27.8022C25.015 27.374 25.015 26.6797 25.4432 26.2515L27.6646 24.0301C28.0928 23.6019 28.7871 23.6019 29.2153 24.0301L38.7553 33.5701C39.1835 33.9983 39.1835 34.6927 38.7553 35.1209Z"
                fill="#775146"
              />
              <path
                d="M11.5547 22.4755L23.8896 10.1406L16.7629 3.01389L4.42799 15.3488L11.5547 22.4755Z"
                fill="#FF6D3A"
              />
              <path
                d="M11.5538 22.476L23.8887 10.1411L22.3833 8.63576L10.0484 20.9707L11.5538 22.476Z"
                fill="#ED5729"
              />
              <path
                d="M12.9843 23.7052L11.5578 25.1317C11.0801 25.6094 10.3056 25.6094 9.82793 25.1317L1.7723 17.0762C1.29465 16.5985 1.29465 15.824 1.7723 15.3463L3.19887 13.9198C3.67652 13.4421 4.45105 13.4421 4.92871 13.9198L12.9843 21.9754C13.4621 22.453 13.4621 23.2275 12.9843 23.7052Z"
                fill="#FFB125"
              />
              <path
                d="M26.5459 10.1438L25.1193 11.5704C24.6417 12.048 23.8671 12.048 23.3895 11.5704L15.3338 3.51465C14.8562 3.03699 14.8562 2.26246 15.3338 1.7848L16.7604 0.358242C17.238 -0.119414 18.0126 -0.119414 18.4902 0.358242L26.5459 8.41387C27.0235 8.89168 27.0235 9.66621 26.5459 10.1438Z"
                fill="#FF901D"
              />
              <path
                d="M21.5646 14.6273L16.0405 20.1514C15.6214 20.5705 14.942 20.5705 14.5229 20.1514L6.75277 12.3813C6.33371 11.9623 6.33371 11.2828 6.75277 10.8637L12.2768 5.33969C12.6959 4.92062 13.3753 4.92062 13.7944 5.33969L21.5645 13.1098C21.9837 13.5288 21.9837 14.2083 21.5646 14.6273Z"
                fill="#FFB125"
              />
              <path
                d="M27.6653 24.0297L26.5547 25.1403L37.6454 36.231L38.756 35.1204C39.1842 34.6922 39.1842 33.9979 38.756 33.5696L29.2161 24.0297C28.7878 23.6014 28.0935 23.6014 27.6653 24.0297Z"
                fill="#6A463D"
              />
              <path
                d="M12.2769 5.33917L10.4385 7.17761C10.505 7.21956 10.5682 7.26862 10.6262 7.32659L16.1154 12.8158C16.6921 13.3925 16.6921 14.3274 16.1154 14.9041L12.6957 18.3238L14.5229 20.1509L14.5229 20.151C14.5517 20.1797 14.5818 20.2063 14.613 20.231C14.6142 20.2319 14.6155 20.2328 14.6167 20.2337C14.6472 20.2575 14.6785 20.2797 14.7107 20.3C14.7107 20.3001 14.7108 20.3001 14.7109 20.3002C14.7478 20.3234 14.7859 20.3438 14.8247 20.3621C14.8287 20.364 14.8328 20.366 14.8368 20.3678C14.8758 20.3856 14.9155 20.4013 14.9559 20.4141C14.9561 20.4142 14.9563 20.4142 14.9565 20.4142C14.9804 20.4218 15.0046 20.4282 15.029 20.434C15.0357 20.4357 15.0424 20.4374 15.0492 20.4389C15.0714 20.4439 15.0936 20.4478 15.1161 20.4514C15.1198 20.452 15.1236 20.4525 15.1273 20.453C15.1327 20.4538 15.1381 20.4546 15.1435 20.4553C15.1647 20.4581 15.186 20.4603 15.2074 20.4618C15.2178 20.4625 15.2282 20.4629 15.2386 20.4633C15.2593 20.4642 15.2799 20.4648 15.3006 20.4645C15.3118 20.4643 15.323 20.4634 15.3343 20.4628C15.3543 20.4619 15.3745 20.4611 15.3945 20.459C15.4022 20.4582 15.4097 20.4567 15.4174 20.4557C15.4526 20.4501 15.5027 20.441 15.5406 20.4326C15.5525 20.4296 15.5646 20.4272 15.5765 20.4239C15.5765 20.4239 15.5766 20.4239 15.5766 20.4238C15.5907 20.4198 15.6046 20.4149 15.6186 20.4103C15.6357 20.4046 15.6529 20.3989 15.6699 20.3923C15.6832 20.3871 15.6965 20.3814 15.7097 20.3757C15.7161 20.3729 15.7223 20.3698 15.7286 20.3668C15.7394 20.3619 15.7503 20.3571 15.761 20.3518C15.7735 20.3456 15.7858 20.3392 15.7982 20.3324C15.8156 20.3228 15.8328 20.3125 15.8498 20.3019C15.8611 20.2949 15.8722 20.288 15.8832 20.2806C15.9017 20.2681 15.9197 20.2545 15.9375 20.2407C15.9464 20.2339 15.9555 20.2274 15.9643 20.2202C15.9905 20.1985 16.0161 20.1757 16.0406 20.1512L21.5647 14.6271C21.886 14.3058 21.96 13.8317 21.7886 13.439C21.7364 13.3196 21.6624 13.2073 21.5647 13.1096L18.9786 10.5235L13.7945 5.3394C13.3754 4.92011 12.696 4.92011 12.2769 5.33917Z"
                fill="#FF901D"
              />
            </g>
            <defs>
              <clipPath id="clip0_3202_36270">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h2>Live Auction</h2>
        </span>
        <div className={s.more}>
          <Link href="/browse">
            See more{" "}
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 5L10.2071 5.70711L10.9142 5L10.2071 4.29289L9.5 5ZM6.45711 9.45711L10.2071 5.70711L8.79289 4.29289L5.04289 8.04289L6.45711 9.45711ZM10.2071 4.29289L6.45711 0.542892L5.04289 1.95711L8.79289 5.70711L10.2071 4.29289Z"
                fill="#242424"
              />
              <path
                d="M9.5 5L0.5 5"
                stroke="#242424"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={`${s.content} ${s.products}`}>
        {products.map((product, i) => (
          <ProductThumb product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
