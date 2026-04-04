"use client";

import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: typeof errors = {};

    if (!name.trim()) validationErrors.name = "Name is required.";
    if (!email.trim()) validationErrors.email = "Email is required.";
    else if (!emailRegex.test(email.trim())) validationErrors.email = "Enter a valid email address.";
    if (!message.trim()) validationErrors.message = "Message is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Message sent successfully. We'll be in touch soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-6">
      <div>
        <label className="block text-sm font-medium text-neutral-800 mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Your name"
        />
        {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-800 mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="you@example.com"
        />
        {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-800 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 shadow-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Tell us about your project"
        />
        {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {status === "success" && <p className="text-sm text-green-700">{feedback}</p>}
          {status === "error" && <p className="text-sm text-red-700">{feedback}</p>}
        </div>
        <PrimaryButton className="px-8 py-4 text-lg" type="submit">
          {status === "sending" ? "Sending..." : "Send Message"}
        </PrimaryButton>
      </div>
    </form>
  );
}
