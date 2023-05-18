
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
   <main>
    <section className='background '>
    <Nav/>
    <Hero/>
    </section>
   <section className='w-full flex items-end  min-h-screen bg-[#fff]'>
     <Footer/>
     
   </section>
   </main>
  );
}

export default App;
