"use client";

import { Send } from "lucide-react";

import ContactForm from "./ContactForm";
import ContactProfile from "./ContactProfile";
import SectionHeader from "../SectionHeader";

const ContactUs = () => {
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

            <ContactForm />
          </div>

          <ContactProfile />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
