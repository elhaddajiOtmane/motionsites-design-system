import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Pricing } from "../components/Pricing";
import { MoviesRow } from "../components/MoviesRow";
import { WhyChoose } from "../components/WhyChoose";
import { FeaturesDetailed } from "../components/FeaturesDetailed";
import { FAQ } from "../components/FAQ";
import { Reviews } from "../components/Reviews";

export function HomePage() {
  return (
    <>
      <Hero />
      <MoviesRow />
      <WhyChoose />
      <HowItWorks />
      <Pricing />
      <FeaturesDetailed />
      <Reviews />
      <FAQ />
    </>
  );
}
