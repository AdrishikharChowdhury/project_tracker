"use client";

import { useState } from "react";

import { reviews as initialReviews, type Review } from "@/lib/constants";

import ReviewForm, { type ReviewFormValues } from "./ReviewForm";
import ReviewList from "./ReviewList";
import SectionHeader from "../SectionHeader";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);

  function handleReviewAdded(data: ReviewFormValues) {
    setReviews((prev) => [
      { ...data, id: Date.now(), avatar: `https://api.dicebear.com/10.x/stripes/svg?seed=${encodeURIComponent(data.name)}` },
      ...prev,
    ]);
  }

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center py-20 px-4 justify-center"
      id="reviews"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full justify-center max-w-7xl items-center">
        <div className="flex flex-col gap-8">
          <SectionHeader text="The" accent="Reviews" />
          <ReviewForm onReviewAdded={handleReviewAdded} />
        </div>
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
}
