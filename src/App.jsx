import React from 'react';
import Navbar from './components/Navbar'; // 1. นำเข้า Navbar
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hightlight from './components/Hightlight';
import Transcript from './components/Transcript';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* ใส่ Navbar ไว้บนสุด */}
      <Navbar />

      {/* ใส่ ID ให้ตรงกับ Link ใน Navbar (#home, #about, etc.) */}
      <section id="home">
        <Hero />
      </section>

      {/* Component พวกนี้มี id="..." อยู่ข้างในตัวเองแล้ว (ตามโค้ดก่อนหน้า) */}
      <About />
      <Skills />
      <Hightlight />
      <Transcript />
      <Contact />
      
      
    </div>
  );
}

export default App;