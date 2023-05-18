import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import bgVideo from "./assets/videos/-9e7d-436d-8c86-9a177e4a782d.mp4";

function App() {
  return (
    <main className="relative flex flex-col h-screen   min-h-screen  ">
      <video
        src={bgVideo}
        type="video/mp4"
        controls={false}
        muted
        loop
        autoPlay
        className="object-cover h-full w-full  -z-10"
      />

      <section className="absolute h-fit top-0 bottom-0 left-0 right-0">
        <Nav />
        <Hero />
        <Footer />
      </section>
    </main>
  );
}

export default App;
