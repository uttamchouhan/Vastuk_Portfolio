import About from "../components/About";
import AnimationHeader from "../components/AnimationHeader";
import Contact from "../components/Contact";
import FeatureSections from "../components/FeatureSections";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import ProcessShowcase from "../components/ProcessShowcase";
import Services from "../components/Services";

function Home() {
  return (
    <main>
      <Hero />
      <AnimationHeader />
      <About />
      <ProcessShowcase />
      <FeatureSections />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
