import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <About />
      <Services />
    </div>
  );
}
