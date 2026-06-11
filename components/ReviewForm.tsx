"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Star } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const reviewSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  rating: z
    .number()
    .min(1, "Please select a rating.")
    .max(5),
  title: z
    .string()
    .min(5, "Review title must be at least 5 characters.")
    .max(48, "Review title must be at most 48 characters."),
  description: z
    .string()
    .min(20, "Review must be at least 20 characters.")
    .max(200, "Review must be at most 200 characters."),
})

export type ReviewFormValues = z.infer<typeof reviewSchema>

function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="p-0.5 border-none bg-transparent shadow-none cursor-pointer hover:scale-110 transition-transform"
        >
          <Star
            className={`size-6 ${
              star <= value
                ? "fill-amber-500 text-amber-500"
                : "fill-none text-skeuo-border"
            }`}
          />
        </button>
      ))}
    </div>
  )
}

interface ReviewFormProps {
  onReviewAdded: (data: ReviewFormValues) => void
}

export default function ReviewForm({ onReviewAdded }: ReviewFormProps) {
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      rating: 0,
      title: "",
      description: "",
    },
  })

  function onSubmit(data: ReviewFormValues) {
    onReviewAdded(data)
    toast("Review submitted", {
      description: "Thank you for your feedback!",
      position: "bottom-right",
    })
    form.reset()
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6">Leave a Review</h2>
      <form id="review-form" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <label className="flex flex-col gap-1.5">
              <span>Name</span>
              <input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Your name"
                autoComplete="name"
                className="px-3 py-2"
              />
              {fieldState.invalid && (
                <span className="text-sm text-red-600">
                  {fieldState.error?.message}
                </span>
              )}
            </label>
          )}
        />

        <Controller
          name="rating"
          control={form.control}
          render={({ field, fieldState }) => (
            <label className="flex flex-col gap-1.5">
              <span>Rating</span>
              <StarRating value={field.value} onChange={field.onChange} />
              {fieldState.invalid && (
                <span className="text-sm text-red-600">
                  {fieldState.error?.message}
                </span>
              )}
            </label>
          )}
        />

        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <label className="flex flex-col gap-1.5">
              <span>Review Title</span>
              <input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Summarize your experience"
                autoComplete="off"
                className="px-3 py-2"
              />
              {fieldState.invalid && (
                <span className="text-sm text-red-600">
                  {fieldState.error?.message}
                </span>
              )}
            </label>
          )}
        />

        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <label className="flex flex-col gap-1.5">
              <span>Review</span>
              <textarea
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Tell us what you think..."
                rows={5}
                className="px-3 py-2 resize-none min-h-24"
              />
              <div className="flex justify-between text-sm text-gray-600">
                {fieldState.invalid ? (
                  <span className="text-red-600">
                    {fieldState.error?.message}
                  </span>
                ) : (
                  <span />
                )}
                <span className="tabular-nums">
                  {field.value.length}/200
                </span>
              </div>
            </label>
          )}
        />

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => form.reset()}
            className="px-5 py-2"
          >
            Reset
          </button>
          <button type="submit" form="review-form" className="px-5 py-2">
            Submit Review
          </button>
        </div>
      </form>
    </section>
  )
}
