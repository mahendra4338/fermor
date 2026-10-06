"use client";
import { useState } from "react";

export default function JoinForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setState(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()) ? "done" : "error");
  }

  if (state === "done") {
    return <p role="status" className="text-lg font-semibold">Thank you. We will write to {email.trim()} when your spot is ready.</p>;
  }
  return (
    <form onSubmit={submit} noValidate className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setState("idle"); }} placeholder="you@example.com" aria-invalid={state === "error"} aria-describedby="email-error" className="h-12 flex-1 rounded-full border border-white/30 bg-white px-5 text-ink placeholder:text-slate" />
        <button type="submit" className="h-12 rounded-full bg-sun px-6 font-semibold text-ink hover:brightness-95">Join the waitlist</button>
      </div>
      <p id="email-error" className="mt-2 min-h-5 text-sm text-sun">{state === "error" ? "Enter a valid email, like name@example.com." : ""}</p>
    </form>
  );
}
