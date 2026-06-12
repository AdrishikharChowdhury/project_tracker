"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MessageSquare, Send, User } from "lucide-react";
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import ProfileCard from "./ProfileCard";
import SectionHeader from "./SectionHeader";

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

const ContactUs = () => {
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
    <section className="w-full min-h-screen py-20 px-4" id="contact-us">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <SectionHeader text="Contact" accent="Us" />

        <p className="mt-6 max-w-2xl text-center text-base text-gray-600 leading-relaxed">
          Have a question, suggestion, or just want to collaborate?
          I&apos;m always open to discussing new projects and opportunities.
        </p>

        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          <div className="w-full p-8 rounded-2xl bg-linear-to-br from-skeuo-surface to-skeuo-bg border border-skeuo-border shadow-[3px_3px_8px_#b8b2a4,-3px_-3px_8px_#ffffff]">
            <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center gap-2">
              <Send className="size-5" />
              Send a Message
            </h3>

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
          </div>

          <div className="flex flex-col mt-12 items-center lg:items-end gap-8">
            <ProfileCard
              name="Adrishikhar Chowdhury"
              title="Full Stack Dev"
              handle="AdrishikharChowdhury"
              status="Available"
              contactText="Contact"
              avatarUrl="/ac.png"
              miniAvatarUrl="/logo.png"
              showUserInfo
              enableTilt
              onContactClick={() => window.open("mailto:adrishikharc@gmail.com")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
