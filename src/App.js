import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import bgVideo from "./assets/videos/-9e7d-436d-8c86-9a177e4a782d.mp4";

function App() {
  return (
    <main className="relative flex flex-col h-screen   min-h-fit -10  ">
      <video
        src={bgVideo}
        type="video/mp4"
        controls={false}
        muted
        loop
        autoPlay
        height={"100vh"}
        className="object-cover h-screen w-full  -z-10"
      />

      <section className="absolute h-fit top-0 bottom-0 left-0 right-0">
        <Nav />
        <Hero />
       
      </section>
    </main>
  );
}

export default App;
