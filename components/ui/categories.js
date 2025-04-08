import { useState, useEffect } from "react";
import Link from "next/link";
import { useFetch } from "hooks";
import { endpoints, paths } from "config";
import { Prompt } from "components/modal";
import { ImSpinner8 } from "react-icons/im";
import s from "./styles/categories.module.scss";
import Image from "next/image";

export default function Shelves() {
  const [categories, setCategories] = useState([]);
  const { get: getCategories, loading } = useFetch(
    endpoints.landingPageCategories
  );
  useEffect(() => {
    getCategories()
      .then(({ data }) => {
        if (data?.success) {
          setCategories(data.data);
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
    <div className={s.categories}>
      {categories?.length > 0 &&
        categories?.map((cat, i) => (
          <Link
            key={cat._id}
            href={{
              pathname: paths.browse,
              query: { category: cat.name },
            }}
          >
            <div key={i} className={s.category}>
              <Image
                height={70}
                width={70}
                src={process.env.NEXT_PUBLIC_R2_URL + cat.image}
              />
              <div>{cat.name}</div>
            </div>
          </Link>
        ))}
    </div>
  );
}
