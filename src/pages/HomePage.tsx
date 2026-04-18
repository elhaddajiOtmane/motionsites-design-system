import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Pricing } from "../components/Pricing";
import { MoviesRow } from "../components/MoviesRow";
import { WhyChoose } from "../components/WhyChoose";
import { FAQ } from "../components/FAQ";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pricing />
      <MoviesRow />
      <WhyChoose />
      <FAQ />
      <Reviews />
    </>
  );
}
