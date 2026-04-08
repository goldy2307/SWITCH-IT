import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="switch-it-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <Workflow />
          <About />
          <Services />
          <Stats />
          <Clients />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
