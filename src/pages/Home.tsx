import Hero from "../components/Hero";
import Workflow from "../components/Workflow";
import About from "../components/About";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Clients from "../components/Clients";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflow />
      <About />
      <Services />
      <Stats />
      <Clients />
    </>
  );
}
