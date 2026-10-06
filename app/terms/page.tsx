import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms – Fermor" };

export default function Terms() {
  return (
    <LegalPage
      title="Terms"
      paragraphs={[
        "Fermor is in early access. Features can change as we learn from our first users.",
        "The content on this site is for general information. It is not personal financial advice.",
        "By joining the waitlist you agree that we may email you about Fermor.",
      ]}
    />
  );
}
