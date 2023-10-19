"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const initState = { values: initValues, isLoading: false, isSent: false };

  const [state, setState] = useState(initState);
  const { values, isLoading, isSent } = state;
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const validate = ({
    name,
    email,
    subject,
    message,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const errors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};
    if (!name || name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!email || email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!subject || subject.trim() === "") {
      errors.subject = "Subject is required";
    }
    if (!message || message.trim() === "") {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleChange = ({
    target,
  }:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    console.log("Contact form values changing");
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const errors = validate(values);
    const isError = Object.keys(errors).length;
    if (isError && isError > 0) {
      setErrors(errors);
      console.log("(ContactForm.tsx) errors:", errors);
      return;
    } else {
      setErrors({});
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
    }

    try {
      const res = await fetch("/api/contact-handler", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            values: initValues,
            isLoading: false,
            isSent: true,
          }));
        }, 2000);

        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            isSent: false,
          }));
        }, 3000);
      }
      const result = await res.json();
      console.log("result", result);
    } catch (err: any) {
      console.log("Err", err);
    }

    console.log("(ContactForm.tsx) values submitted:", values);
  };

  return (
    <div className=" flex justify-center ">
      <form
        onSubmit={handleOnSubmit}
        className="h-full w-full max-w-xl flex-col space-y-2 p-2"
      >
        {errors.name ? (
          <p className=" text-xs text-red-500">*{errors.name}</p>
        ) : null}
        <input
          name="name"
          value={values.name}
          //hack: delete function name from below and type () to get a pop up with the type for the function input above
          onChange={handleChange}
          type="text"
          placeholder="Nameee"
          className="w-full border-b-2 border-offblack bg-gray-100/20 px-4 py-2 text-offblack placeholder-offblack/20 outline-none"
        />
        {errors.email ? (
          <p className=" text-xs text-red-500">*{errors.email}</p>
        ) : null}
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full border-b-2 border-offblack bg-gray-100/20 px-4 py-2 text-offblack placeholder-offblack/20 outline-none"
        />
        {errors.subject ? (
          <p className=" text-xs text-red-500">*{errors.subject}</p>
        ) : null}
        <input
          name="subject"
          value={values.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          className="w-full border-b-2 border-offblack bg-gray-100/20 px-4 py-2 text-offblack placeholder-offblack/20 outline-none"
        />
        {errors.message ? (
          <p className=" text-xs text-red-500">*{errors.message}</p>
        ) : null}
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full border-b-2 border-offblack bg-gray-100/20 px-4 py-2 text-offblack placeholder-offblack/20 outline-none"
        />

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md border-2  border-white py-2 text-white"
        >
          <AnimatePresence mode="wait">
            {!isLoading && !isSent && (
              <motion.div
                key="send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <span className="">Send</span>
              </motion.div>
            )}
            {isLoading && !isSent && (
              <motion.div
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <span className="text-red-400animate-pulse animate-pulse text-red-400">
                  Sending
                </span>
              </motion.div>
            )}
            {!isLoading && isSent && (
              <motion.div
                key="sent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <span className="animate-pulse text-green-400">Sent!!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
