import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, GraduationCap, Download, ExternalLink } from 'lucide-react';

const DocumentHub = () => {
  // สร้าง State สำหรับเก็บว่าตอนนี้ผู้ใช้กำลังเลือกดู Tab ไหนอยู่ (ค่าเริ่มต้นคือ resume)
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <section id="documents" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* หัวข้อ Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Official <span className="text-[#FF4500]">Documents</span></h2>
          <p className="text-gray-600">เอกสารสำคัญที่ใช้ประกอบการพิจารณา</p>
        </div>

        {/* ส่วนปุ่มกดสลับ Tab (Toggle Buttons) */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1.5 rounded-xl inline-flex shadow-inner">
            <button
              onClick={() => setActiveTab('resume')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'resume' 
                  ? 'bg-white text-[#FF4500] shadow-md' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText size={18} />
              Resume
            </button>
            <button
              onClick={() => setActiveTab('transcript')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === 'transcript' 
                  ? 'bg-white text-[#FF4500] shadow-md' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <GraduationCap size={18} />
              Transcript
            </button>
          </div>
        </div>

        {/* ส่วนแสดงเนื้อหา (เปลี่ยนไปตาม Tab ที่เลือก) */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm min-h-[500px] flex items-center">
          
          {/* AnimatePresence mode="wait" ช่วยให้ของเก่าหายไปก่อนของใหม่จะเฟดเข้ามา */}
          <AnimatePresence mode="wait">
            
            {/* ----------------- เนื้อหา Tab: Resume ----------------- */}
            {activeTab === 'resume' && (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col md:flex-row items-center gap-10"
              >
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Curriculum Vitae</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    ดูข้อมูลสรุปเกี่ยวกับประวัติการศึกษา ทักษะความสามารถ (Skills) 
                    และเป้าหมายในการทำงานของผมแบบฉบับเต็มได้ใน Resume นี้ครับ
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href="/resume.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-md"
                    >
                      <ExternalLink size={18} /> Open in New Tab
                    </a>
                    <a 
                      href="/resume.pdf" 
                      download="Resume_Itthisak.pdf"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF4500] text-[#FF4500] font-bold rounded-lg hover:bg-orange-50 transition"
                    >
                      <Download size={18} /> Download PDF
                    </a>
                  </div>
                </div>

                {/* กรอบพรีวิว Resume (ใช้ iframe) */}
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[1/1.4] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group">
                    <iframe 
                      src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                      className="w-full h-full pointer-events-none"
                      title="Resume Preview"
                    ></iframe>
                    <div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer flex items-center justify-center" 
                      onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                      <div className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                        <ExternalLink size={16} /> Click to expand
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ----------------- เนื้อหา Tab: Transcript ----------------- */}
            {activeTab === 'transcript' && (
              <motion.div
                key="transcript"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col md:flex-row-reverse items-center gap-10"
              >
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Official Transcript</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    เอกสารแสดงผลการเรียนฉบับทางการจาก มจพ. (KMUTNB) ยืนยันผลการเรียนในรายวิชาที่เกี่ยวข้องกับโครงสร้างพื้นฐานด้านระบบและการพัฒนาซอฟต์แวร์
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a 
                      href="/transcript.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-md"
                    >
                      <ExternalLink size={18} /> Open in New Tab
                    </a>
                    <a 
                      href="/transcript.pdf" 
                      download="Transcript_KMUTNB.pdf"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FF4500] text-[#FF4500] font-bold rounded-lg hover:bg-orange-50 transition"
                    >
                      <Download size={18} /> Download PDF
                    </a>
                  </div>
                </div>

                {/* กรอบพรีวิว Transcript (ใช้รูปภาพ) */}
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[1/1.4] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group">
                    <img 
                      src="/images/transcript_page-0001.jpg" 
                      alt="Official Transcript" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer flex items-center justify-center" 
                      onClick={() => window.open('/transcript.pdf', '_blank')}
                    >
                      <div className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-4 py-2 rounded-full font-bold shadow-xl transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                        <ExternalLink size={16} /> Click to expand
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default DocumentHub;