import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;