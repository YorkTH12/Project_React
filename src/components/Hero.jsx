import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        
        {/* ⭐ ส่วนรูปโปรไฟล์วงกลม (เพิ่มใหม่ตรงนี้) ⭐ */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="w-48 h-48 mx-auto mb-8 relative"
        >
          {/* วงกลมตกแต่งด้านหลัง (Optional: ให้ดูมีมิติ) */}
          <div className="absolute inset-0 bg-orange-100 rounded-full transform rotate-6 scale-105 -z-10"></div>
          
          {/* ตัวรูปจริง */}
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/images/me.jpg"  // ⚠️ อย่าลืมเอารูปไปวางใน public/images/profile.jpg นะครับ
              alt="My Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* ชื่อลอยขึ้นมา */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Hi, I'm <span className="text-[#FF4500]">Your Name</span>
        </motion.h1>

        {/* คำอธิบาย */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          Computer Electronic Technology Student at <span className="font-semibold">KMUTNB</span>. <br/>
          Driven by a strong <span className="text-[#FF4500] font-medium">passion for service</span>. <br/>
          Aiming to be a <span className="font-semibold">Cybersecurity Specialist</span>.
        </motion.p>

        {/* ส่วนปุ่มกด (Action Buttons) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* ปุ่มที่ 1: Download Resume */}
          <a 
            href="/resume.pdf" 
            download="Resume_Itthisak.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-[#FF4500] text-white rounded-full font-bold hover:bg-orange-700 transition shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
          >
            <Download size={20} />
            Download Resume
          </a>

          {/* ปุ่มที่ 2: View My Work */}
          <a 
            href="#about" 
            className="flex items-center gap-2 px-8 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-bold hover:border-[#FF4500] hover:text-[#FF4500] transition transform hover:-translate-y-1"
          >
            <FileText size={20} />
            About Me
          </a>
        </motion.div>
      </div>

      {/* ลูกศรชี้ลง */}
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