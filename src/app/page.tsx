
import Header from "@/components/section-header";
import { Hero } from "@/components/section-hero";
import Contact from "../components/section-contact";
import About from "@/components/section-about";
import Plans from "@/components/section-plans";



export default function Home() {
  return (
    <main className="max-w-full">
      <Header />
      <Hero />
      <About />
      <Plans />
      <Contact />
    </main>
  );
}
