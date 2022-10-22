import { useState, useEffect } from "react";
import { Fire } from "components/svg";
import Link from "next/link";
import { Select } from "components/elements";
import { ProductThumb } from "components/ui/productThumbnail";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import { Prompt } from "components/modal";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ImSpinner8 } from "react-icons/im";
import s from "./styles/landingPage.module.scss";

export default function LiveAuction() {
  const [shelves, setShelves] = useState([]);
  const { get: getShelves, loading } = useFetch(endpoints.landingPageShelves);
  useEffect(() => {
    getShelves()
      .then(({ data }) => {
        if (data?.success) {
          setShelves(data.data);
        }
      })
      .catch((err) => Prompt({ type: "error", message: err.message }));
  }, []);
  if (loading) {
    return (
      <div className={`${s.loading}`}>
        <ImSpinner8 className="spinner" />
      </div>
    );
  }
  return (
    <>
      {shelves?.length > 0 ? (
        shelves?.map((shelf) => (
          <div key={shelf.title || i} className={`${s.shelf} ${s.products}`}>
            <div className={s.shelfHead}>
              <span className={s.shelfTitle}>
                <Fire />
                <h2>{shelf.title}</h2>
              </span>
              {
                <Link
                  href={{
                    pathname: paths.browse,
                    query: shelf.query,
                  }}
                >
                  <a>
                    <div className={s.more}>
                      See more <HiOutlineArrowNarrowRight />
                    </div>
                  </a>
                </Link>
              }
            </div>
            <div
              className={`${s.content} ${
                shelf.horizontalSlide ? s.horizontal : ""
              }`}
            >
              {shelf.products?.map((product, i) => (
                <ProductThumb product={product} key={product._id} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={s.shelfPlaceholder}>
          <Link href={paths.browse}>
            <a>
              <button className="btn primary">
                Browse all of our products <HiOutlineArrowNarrowRight />
              </button>
            </a>
          </Link>
        </div>
      )}
    </>
  );
}
