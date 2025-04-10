import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import RSVP from './pages/RSVP';
import Gallery from './pages/Gallery';
import Registry from './pages/Registry';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<EventDetails />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;