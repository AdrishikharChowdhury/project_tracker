"use client"

import { Star } from "lucide-react"

import type { Review } from "@/lib/constants"

interface ReviewListProps {
  reviews: Review[]
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-72 shrink-0 p-4 mr-4">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={review.avatar}
          alt={review.name}
          className="size-9 rounded-full border border-skeuo-border"
        />
        <span className="font-bold text-lg">{review.name}</span>
        <div className="flex gap-0.5 ml-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-4 ${
                i < review.rating
                  ? "fill-amber-500 text-amber-500"
                  : "fill-none text-skeuo-border"
              }`}
            />
          ))}
        </div>
      </div>
      <h3 className="font-semibold text-base mb-1">{review.title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        {review.description}
      </p>
    </article>
  )
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const doubled = [...reviews, ...reviews]

  return (
    <section className="flex flex-col gap-6 justify-center items-center h-fit mt-20 p-6 overflow-hidden self-center">
      <h2 className="text-2xl font-bold">What People Say</h2>

      <div className="flex flex-col gap-6">
        <div
        className="animate-scroll-left flex"
        style={{ "--scroll-speed": "60s" } as React.CSSProperties}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>

      <div
        className="animate-scroll-right flex"
        style={{ "--scroll-speed": "60s" } as React.CSSProperties}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-b-${i}`} review={review} />
        ))}
      </div>
      </div>
    </section>
  )
}
