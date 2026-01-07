import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ส่วนรูปภาพ (เลื่อนมาจากซ้าย) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* กรอบรูปตกแต่ง */}
          <div className="absolute top-4 left-4 w-full h-full border-4 border-[#FF4500] rounded-xl z-0"></div>
          {/* รูปจริง (ใส่รูปตัวเองแทน src ตรงนี้ได้เลย) */}
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" 
            alt="Profile" 
            className="relative z-10 rounded-xl shadow-xl w-full object-cover"
          />
        </motion.div>

        {/* ส่วนเนื้อหา (เลื่อนมาจากขวา) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About <span className="text-[#FF4500]">Me</span></h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            ผมเป็นนักศึกษาชั้นปีที่ 2 ภาควิชาเทคโนโลยีอิเล็กทรอนิกส์ **มจพ.** ที่หลงใหลในการแก้ไขปัญหาและมุ่งมั่นที่จะให้บริการที่ยอดเยี่ยม
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            ปัจจุบันกำลังมุ่งเน้นศึกษาเรื่อง **React** และ **Modern Web Technologies** เพื่อพัฒนาตัวเองสู่การเป็น Full-stack Developer มืออาชีพ
          </p>
          
          {/* ข้อมูลสั้นๆ */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div>
              <h4 className="font-bold text-gray-900">Education</h4>
              <p className="text-gray-600">KMUTNB (2023 - Present)</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Location</h4>
              <p className="text-gray-600">Bangkok, Thailand</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;