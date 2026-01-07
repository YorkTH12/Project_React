import React from 'react';
import { motion } from 'framer-motion'; // พระเอกของเรา
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      
      {/* Background Gradient แบบฟุ้งๆ (สไตล์ Modern) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* 1. Animation: ชื่อลอยขึ้นมา */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-[#FF4500]">Itthisak Sasirot</span>
        </motion.h1>

        {/* 2. Animation: คำอธิบายค่อยๆ ปรากฏ */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8 leading-relaxed"
        >
          A Computer Electronic Technology at <span className="font-semibold">King Mongkut's University of Technology North Bangkok</span>. <br/>
          Passionate about problem-solving and delivering excellent service.
        </motion.p>

        {/* 3. Animation: ปุ่มกด */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-3 bg-[#FF4500] text-white rounded-full font-medium hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30">
            View My Work
          </a>
          <a href="https://github.com" target="_blank" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a href="https://linkedin.com" target="_blank" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <Linkedin className="w-6 h-6 text-gray-700" />
          </a>
        </motion.div>
      </div>

      {/* ลูกศรชี้ลง เด้งดึ๋งๆ */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-gray-400" />
      </motion.div>
    </div>
  );
};

export default Hero;