import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Services";
import WhoWeAre from "./components/WhoWeAre";
import Stats from "./components/Stats";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";
import ContactCta from "./components/ContactCta";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre">
          <AboutUs />
        </section>

        <section id="servicos">
          <Service />
        </section>

        <section id="quem-somos">
          <WhoWeAre />
        </section>

        <section id="estatisticas">
          <Stats />
        </section>

        <section id="projetos">
          <RecentProjects />
        </section>

        <section id="depoimentos">
          <Testimonials />
        </section>

        <section id="contato">
          <ContactCta />
        </section>
      </main>

      <Footer />
    </>
  );
}
