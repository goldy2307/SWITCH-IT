import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./pages/Products";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Stats from "./components/Stats";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import Home from "./pages/Home";


export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="switch-it-theme">
      <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </ThemeProvider>
  );
}
