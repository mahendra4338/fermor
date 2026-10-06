import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy – Fermor" };

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy"
      paragraphs={[
        "We collect only the information you give us, such as your email address when you join the waitlist.",
        "We use it to contact you about Fermor. We do not sell your personal information.",
        "You can ask us to delete your information at any time.",
      ]}
    />
  );
}
