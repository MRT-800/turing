import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import ContactPage from "./components/Contact";
// import Footer from "./components/Footer";
import Animation from "./components/Animation"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <section id="home" className="min-h-screen relative pt-16">
        <Animation/>
        <LandingPage />
      </section>

      <section id="product" className="min-h-screen relative">
        <Projects />
      </section>

      <section id="contact" className="min-h-screen relative">
        <ContactPage />
      </section>

      {/* <Footer /> */}
    </main>
  );
}
