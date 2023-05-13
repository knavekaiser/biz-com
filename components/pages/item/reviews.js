import React, { useState, useEffect, useCallback, useContext } from "react";
import { SiteContext } from "SiteContext";
import { HiStar, HiOutlineUserCircle } from "react-icons/hi";
import { useRouter } from "next/router";
import { useFetch } from "hooks";
import { endpoints } from "config";
import { useForm } from "react-hook-form";
import { Moment } from "components/elements";
import { Prompt } from "components/modal";
import { CustomRadio, Textarea } from "components/elements";
import s from "./styles/products.module.scss";
import Image from "next/image";

export default function Reviews({ product }) {
  const { user } = useContext(SiteContext);
  const [reviews, setReviews] = useState([]);
  const router = useRouter();
  const { get: getReviews } = useFetch(
    endpoints.reviews + `/${router.query.id}`
  );
  const fetchReviews = useCallback(() => {
    getReviews()
      .then(({ data }) => {
        if (data?.success) {
          setReviews(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchReviews();
  }, [router.query.id]);
  return (
    <div className={s.reviews}>
      <div className={s.head}>
        <h2>Customer Reviews</h2>
      </div>
      {user && <ReviewForm product_id={router.query.id} />}
      <div className={s.allReviews}>
        {reviews.length > 0 ? (
          <>
            <div className={s.summary}>
              <span className={s.stars}>
                <HiStar className={product.rating >= 1 ? s.lit : ""} />
                <HiStar className={product.rating >= 2 ? s.lit : ""} />
                <HiStar className={product.rating >= 3 ? s.lit : ""} />
                <HiStar className={product.rating >= 4 ? s.lit : ""} />
                <HiStar className={product.rating >= 5 ? s.lit : ""} />
              </span>
              <span>·</span> <span>{product.totalReview || 0} reviews</span>
            </div>
            {reviews.map((review) => (
              <Review review={review} key={review._id} />
            ))}
          </>
        ) : (
          <p className={`${s.placeholder} subtitle1`}>No reviews yet</p>
        )}
      </div>
    </div>
  );
}

const ReviewForm = ({ product_id }) => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      rating: "5",
      review: "",
    },
  });
  const { post: addReview, loading } = useFetch(endpoints.reviews);
  return (
    <form
      className={s.reviewForm}
      onSubmit={handleSubmit((values) => {
        addReview({
          rating: +values.rating,
          review: values.review || "",
          product: product_id,
        })
          .then(({ data }) => {
            if (data.success) {
              reset({
                rating: "5",
                review: "",
              });
              Prompt({
                type: "success",
                message: "Review has been added successfully.",
              });
            } else if (data.success === false) {
              Prompt({ type: "error", message: data.message });
            }
          })
          .catch((err) => Prompt({ type: "error", message: err.message }));
      })}
    >
      <CustomRadio
        control={control}
        name="rating"
        className={s.ratingStars}
        selectedClassName={s.selected}
        formOptions={{
          required: "Please select a rating",
        }}
        options={[
          { label: <HiStar />, value: 1 },
          { label: <HiStar />, value: 2 },
          { label: <HiStar />, value: 3 },
          { label: <HiStar />, value: 4 },
          { label: <HiStar />, value: 5 },
        ]}
      />
      <Textarea control={control} name="review" placeholder="Write a review." />
      <div className={s.btns}>
        <button
          className={`btn primary ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          Add Review
        </button>
      </div>
    </form>
  );
};

const Review = ({ review }) => {
  const [showFull, setShowFull] = useState(false);
  return (
    <div className={s.reviewWrapper}>
      <div className={s.customer}>
        <div className={s.profilePic}>
          {review.customer?.image ? (
            <Image
              src={review.customer.image}
              height={48}
              width={48}
              alt={review.customer.name}
            />
          ) : (
            <HiOutlineUserCircle className={s.profilePicPlaceholder} />
          )}
        </div>
        <div className={s.detail}>
          <h6>{review.customer.name}</h6>
          <Moment format={"MMM YYYY"}>{review.createdAt}</Moment>
        </div>
      </div>
      <div className={`${s.review} ${!showFull ? s.trim : ""}`}>
        {review.review}
      </div>
    </div>
  );
};
