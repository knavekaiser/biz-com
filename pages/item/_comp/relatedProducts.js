import React, { useState, useEffect } from "react";
import { RankBadge } from "components/svg";
import { Combobox } from "components/elements";
import { ProductThumb } from "components/ui/productThumbnail";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import s from "./styles/products.module.scss";

export default function Explore() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { get: getProducts } = useFetch(
    endpoints.relatedItems + `/${router.query.id}`
  );
  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        if (data?.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [router.query.id]);
  return (
    <div className={s.relatedProducts}>
      <div className={s.head}>
        <svg
          width="30"
          height="39"
          viewBox="0 0 30 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.11201 12.2287C5.93388 14.1287 5.80888 17.4912 6.93076 18.9225C6.93076 18.9225 6.40263 15.2287 11.137 10.5943C13.0433 8.7287 13.4839 6.1912 12.8183 4.28808C12.4401 3.20995 11.7495 2.31933 11.1495 1.69745C10.7995 1.33183 11.0683 0.728704 11.5776 0.750579C14.6589 0.888079 19.6526 1.74433 21.7745 7.06933C22.7058 9.40683 22.7745 11.8225 22.3308 14.2787C22.0495 15.8475 21.0495 19.335 23.3308 19.7631C24.9589 20.0693 25.7464 18.7756 26.0995 17.8443C26.2464 17.4568 26.7558 17.36 27.0308 17.6693C29.7808 20.7975 30.0151 24.4818 29.4464 27.6537C28.3464 33.785 22.137 38.2475 15.9683 38.2475C8.262 38.2475 2.12763 33.8381 0.537005 25.8568C-0.10362 22.635 0.221381 16.26 5.19013 11.76C5.55888 11.4225 6.16201 11.7225 6.11201 12.2287Z"
            fill="url(#paint0_radial_3202_682)"
          />
          <path
            d="M18.7846 23.6912C15.944 20.0349 17.2158 15.863 17.9127 14.2005C18.0065 13.9818 17.7565 13.7755 17.5596 13.9099C16.3377 14.7412 13.8346 16.6974 12.669 19.4505C11.0908 23.1724 11.2033 24.9943 12.1377 27.2193C12.7002 28.5599 12.0471 28.8443 11.719 28.8943C11.4002 28.9443 11.1065 28.7318 10.8721 28.5099C10.1978 27.8626 9.71735 27.0402 9.48459 26.1349C9.43459 25.9412 9.18146 25.888 9.06584 26.0474C8.19084 27.2568 7.73771 29.1974 7.71584 30.5693C7.64709 34.8099 11.1502 38.2474 15.3877 38.2474C20.7283 38.2474 24.619 32.3412 21.5502 27.4037C20.6596 25.9662 19.8221 25.0255 18.7846 23.6912Z"
            fill="url(#paint1_radial_3202_682)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_3202_682"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(14.4419 38.3446) rotate(-179.751) scale(22.0586 36.1938)"
            >
              <stop offset="0.314" stopColor="#FF9800" />
              <stop offset="0.662" stopColor="#FF6D00" />
              <stop offset="0.972" stopColor="#F44336" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_3202_682"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.6815 16.3907) rotate(90.5787) scale(23.0801 17.3695)"
            >
              <stop offset="0.214" stopColor="#FFF176" />
              <stop offset="0.328" stopColor="#FFF27D" />
              <stop offset="0.487" stopColor="#FFF48F" />
              <stop offset="0.672" stopColor="#FFF7AD" />
              <stop offset="0.793" stopColor="#FFF9C4" />
              <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
              <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
              <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
              <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <h2>Related Products</h2>
      </div>
      <div className={s.products}>
        {products.map((product, i) => (
          <Link href={paths.itemView.replace(":id", product._id)} key={i}>
            <a>
              <ProductThumb product={product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
