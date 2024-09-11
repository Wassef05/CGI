import Apropos from "./components/Apropos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeHead from "./components/HomeHead";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <section id="accueil">
        <HomeHead />
      </section>
      <section id="a-propos">
        <Apropos />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
