import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* ส่วนรูปภาพ (ซ้าย) - ดีไซน์แบบ Stack Layer */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* กรอบหลังสีส้ม (KMUTNB Orange) */}
            <div className="absolute top-4 left-4 w-full h-full bg-orange-100 rounded-2xl -z-10 transform rotate-3 transition-transform hover:rotate-6"></div>
            
            {/* กรอบรูปจริง */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                // อย่าลืมเปลี่ยนรูปตรงนี้นะครับ
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="My Profile" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* ส่วนเนื้อหา (ขวา) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[#FF4500] font-bold tracking-wider uppercase mb-2">About Me</h4>
            
            {/* ปรับหัวข้อให้เข้ากับ Cybersecurity */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Committed to Service, <br/> <span className="text-[#FF4500]">Focused on Security.</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hello! I'm a sophomore student at <span className="font-semibold text-gray-900">KMUTNB</span> majoring in <span className="font-semibold text-gray-900">Computer Electronic Technology</span>. 
              I am driven by a strong <span className="text-[#FF4500] font-medium">passion for service</span> and dedication to helping others through technology.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My ultimate goal is to become a <span className="font-semibold text-gray-900">Cybersecurity Specialist</span>, ensuring safety, integrity, and trust in the digital world.
            </p>

            {/* ข้อมูลสรุปสั้นๆ (Info Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <GraduationCap className="text-[#FF4500]" />
                <div>
                  <p className="text-sm text-gray-500">Major</p>
                  <p className="font-semibold text-gray-900">Comp. Electronic Tech.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <MapPin className="text-[#FF4500]" />
                <div>
                  <p className="text-sm text-gray-500">Focus</p>
                  <p className="font-semibold text-gray-900">Cybersecurity</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;