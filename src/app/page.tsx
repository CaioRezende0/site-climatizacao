import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecentProjects from "./components/RecentProjects";
import Service from "./components/Services";
import Stats from "./components/Stats";
import WhoWeAre from "./components/WhoWeAre";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Service />
      <WhoWeAre />
      <Stats />
      <RecentProjects />
    </>
  );
}
