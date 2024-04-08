import { SectionBenefits } from "@/components/section-beneficios";
import Header from "@/components/section-header";
import { Hero } from "@/components/section-hero";


export default function Home() {
  return (
    <main className="max-w-full">
      <Header />
      <Hero />
      <SectionBenefits />
    </main>
  );
}
