import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LegalPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-slate">Sample text for a demo project. Replace it with real legal text before launch.</p>
        <div className="mt-8 space-y-5 text-slate">
          {paragraphs.map((text) => (<p key={text}>{text}</p>))}
        </div>
      </main>
      <Footer />
    </>
  );
}
