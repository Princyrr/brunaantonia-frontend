import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Questionnaire from './pages/Questionnaire';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-sou" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/questionario" element={<Questionnaire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;