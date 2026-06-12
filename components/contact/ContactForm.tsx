"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(64, "Subject must be at most 64 characters."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(500, "Message must be at most 500 characters."),
})

type ContactFormValues = z.infer<typeof contactSchema>

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    console.log("Contact form data:", data)
    toast("Message sent!", {
      description: "We'll get back to you as soon as possible.",
      position: "bottom-right",
    })
    form.reset()
  }

  return (
    <form
      id="contact-form"
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <User className="size-3.5" />
              Name
            </span>
            <input
              {...field}
              aria-invalid={fieldState.invalid}
              placeholder="Your name"
              autoComplete="name"
              className="px-4 py-2.5"
            />
            {fieldState.invalid && (
              <span className="text-xs text-red-600 font-medium">
                {fieldState.error?.message}
              </span>
            )}
          </label>
        )}
      />

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Mail className="size-3.5" />
              Email
            </span>
            <input
              {...field}
              aria-invalid={fieldState.invalid}
              placeholder="your@email.com"
              autoComplete="email"
              className="px-4 py-2.5"
            />
            {fieldState.invalid && (
              <span className="text-xs text-red-600 font-medium">
                {fieldState.error?.message}
              </span>
            )}
          </label>
        )}
      />

      <Controller
        name="subject"
        control={form.control}
        render={({ field, fieldState }) => (
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <MessageSquare className="size-3.5" />
              Subject
            </span>
            <input
              {...field}
              aria-invalid={fieldState.invalid}
              placeholder="What is this about?"
              autoComplete="off"
              className="px-4 py-2.5"
            />
            {fieldState.invalid && (
              <span className="text-xs text-red-600 font-medium">
                {fieldState.error?.message}
              </span>
            )}
          </label>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Send className="size-3.5" />
              Message
            </span>
            <textarea
              {...field}
              aria-invalid={fieldState.invalid}
              placeholder="Tell us what's on your mind..."
              rows={5}
              className="px-4 py-2.5 resize-none min-h-28"
            />
            <div className="flex justify-between text-xs">
              {fieldState.invalid ? (
                <span className="text-red-600 font-medium">
                  {fieldState.error?.message}
                </span>
              ) : (
                <span />
              )}
              <span className="tabular-nums text-gray-500">
                {field.value.length}/500
              </span>
            </div>
          </label>
        )}
      />

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => form.reset()}
          className="flex-1 px-5 py-2.5 text-sm"
        >
          Reset
        </button>
        <button
          type="submit"
          form="contact-form"
          className="flex-1 px-5 py-2.5 text-sm flex items-center justify-center gap-2"
        >
          <Send className="size-4" />
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
