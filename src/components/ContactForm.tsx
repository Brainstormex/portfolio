"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Input from "./utility/Input";
import Textarea from "./utility/Textarea";

import Toast from "@/components/utility/Toast";
import Loader from "@/components/utility/Loader";
import { FaPaperPlane } from "react-icons/fa";

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setToast({ message: "All fields are required", type: "error" });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setToast({ message: "Invalid email format", type: "error" });
      return false;
    }

    return true;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({ message: "Your message has been sent!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setToast({ message: errorData.message, type: "error" });
      }
    } catch (error) {
      setToast({
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const text = "Get In Touch";

  return (
    <section className="px-6 py-28 sm:px-14 md:px-20">
      <div className="relative mx-auto lg:max-w-7xl">
        <SectionHeading>contact me</SectionHeading>
        <motion.div
          className="py-6 h-full flex flex-col lg:flex-row items-center"
          initial={{ y: -"200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
          <div className="h-1/2 lg:h-full lg:w-1/2 pb-16 flex items-center justify-center text-4xl">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="h-1/2 w-full lg:h-full md:w-3/4 lg:w-1/2 flex flex-col gap-2 mx-auto"
          >
            <div className="flex gap-2">
              <Input
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <motion.button
              className="w-32 py-2 group text-lg text-white bg-[#3cacd7] rounded-lg hover:bg-[#1b81ae] outline-none disabled:bg-[#e4f2fa] disabled:text-[#51b9df] disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {isSubmitting ? (
                <div className="inline-flex items-center gap-1">
                  Sending
                  <Loader />
                </div>
              ) : (
                <div className="inline-flex items-center gap-1">
                  Submit{" "}
                  <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              )}
            </motion.button>
          </form>
        </motion.div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      </div>
    </section>
  );
}
