import { ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Planner from "@/components/Planner";
import TrustStrip from "@/components/TrustStrip";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import JoinForm from "@/components/JoinForm";
import { steps, audiences, security } from "@/data/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:py-24">
          <div className="rise">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Know where your money stands. Know what to do next.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate">
              Fermor turns income, spending and goals into a clear picture and a simple next step, so growing your money stops feeling like guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="inline-flex h-12 items-center rounded-full bg-brand px-7 font-semibold text-white hover:bg-deep">Join the waitlist</a>
              <a href="#how" className="inline-flex h-12 items-center rounded-full border border-line px-7 font-semibold hover:bg-mist">See how it works</a>
            </div>
          </div>
          <div className="rise rise-2"><Planner /></div>
        </section>

        <TrustStrip />
        <Pillars />

        <section id="how" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Three steps, a few minutes</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand font-display font-semibold text-white">{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="who" className="bg-mist py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Built for people who are not finance experts</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.title} className="border-t-2 border-ink pt-5">
                  <h3 className="font-display text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-slate">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="bg-ink py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div>
              <ShieldCheck className="h-10 w-10 text-sun" aria-hidden />
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Your money, your data, your call</h2>
            </div>
            <ul className="space-y-5 text-lg text-white/80">
              {security.map((s) => (<li key={s} className="border-b border-white/15 pb-5">{s}</li>))}
            </ul>
          </div>
        </section>

        <Testimonials />

        <section id="faq" className="mx-auto max-w-3xl px-5 pb-16 lg:pb-24">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">Questions, answered</h2>
          <Faq />
        </section>

        <section id="join" className="bg-brand py-16 text-white lg:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Start with a clearer picture</h2>
              <p className="mt-3 text-white/85">Leave your email and we will write when your spot is ready.</p>
            </div>
            <JoinForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
