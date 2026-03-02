import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* หัวข้อ Section */}
        <div className="flex items-center gap-3 mb-10">
          <FileText className="text-[#FF4500] w-10 h-10" />
          <h2 className="text-4xl font-bold text-gray-900">My <span className="text-[#FF4500]">Resume</span></h2>
        </div>

        {/* กล่องเนื้อหาหลัก */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          
          {/* ฝั่งซ้าย: ข้อความและปุ่มกด */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Curriculum Vitae</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              ดูข้อมูลสรุปเกี่ยวกับประวัติการศึกษา ทักษะความสามารถ (Skills) 
              และเป้าหมายในการทำงานด้าน Cybersecurity ของผมแบบฉบับเต็มได้ใน Resume นี้ครับ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* ปุ่มดูเต็มจอ (เปิดแท็บใหม่) */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-md hover:shadow-lg"
              >
                <ExternalLink size={18} />
                Open in New Tab
              </a>

              {/* ปุ่มดาวน์โหลด */}
              <a 
                href="/resume.pdf" 
                download="Resume_Itthisak.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF4500] text-[#FF4500] font-bold rounded-lg hover:bg-[#FF4500] hover:text-white transition shadow-sm"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>

          {/* ฝั่งขวา: กรอบโชว์พรีวิว PDF (Interactive) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex justify-center"
          >
            {/* กล่องใส่ PDF ให้ออกมาเป็นสัดส่วนกระดาษ A4 */}
            <div className="relative w-full max-w-sm aspect-[1/1.4] bg-gray-100 rounded-xl shadow-inner border-2 border-gray-200 overflow-hidden group hover:border-[#FF4500] transition-colors">
               
               {/* ใช้ iframe ฝัง PDF ลงไปให้เห็นของจริงเลย */}
               <iframe 
                 src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                 className="w-full h-full pointer-events-none"
                 title="Resume Preview"
               ></iframe>
               
               {/* แผ่นใสครอบทับ เพื่อให้กดแล้วเปิดแท็บใหม่แทนที่จะเลื่อน PDF ในกรอบเล็กๆ */}
               <div 
                 className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center" 
                 onClick={() => window.open('/resume.pdf', '_blank')}
               >
                 <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium shadow-md transition-opacity duration-300 flex items-center gap-2">
                   <ExternalLink size={16} /> Click to expand
                 </div>
               </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resume;