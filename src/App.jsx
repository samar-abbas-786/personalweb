import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Lenis from "@studio-freight/lenis";
import { ScrollProvider } from "./context/ScrollContext";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <ScrollProvider>
        <Helmet>
          <title>Samar Abbas — Software Engineer</title>
        </Helmet>

        {loading && <Loader onDone={() => setLoading(false)} />}

        {!loading && (
          <>
            <CustomCursor />
            <Navbar />
            <main className="bg-ink min-h-screen">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </ScrollProvider>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;
