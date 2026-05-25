import { useScrollReveal } from './hooks/useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductGrid from './components/ProductGrid';
import ProblemSection from './components/ProblemSection';
import ProductSelector from './components/ProductSelector';
import ResultsCards from './components/ResultsCards';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();
  return (
    <>
      <div className="grain-fixed" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <ProblemSection />
        <ProductSelector />
        <ResultsCards />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
