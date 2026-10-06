import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Disclosures – Fermor" };

export default function Disclosures() {
  return (
    <LegalPage
      title="Disclosures"
      paragraphs={[
        "Projections on this site, including the growth planner, are illustrations. They are not a promise of returns.",
        "Investments carry risk, and you can lose money. Past performance does not guarantee future results.",
        "Talk to a licensed adviser before you make financial decisions.",
      ]}
    />
  );
}
