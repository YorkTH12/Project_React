import React, { useState } from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Transcript = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="transcript" className="py-20 bg-white">
    <div className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FileText className="text-[#FF4500]" />
        Official Transcript
      </h3>

      <div className="bg-gray-50 p-6 rounded-xl border-dashed border-2 border-gray-300 text-center">
        <p className="text-gray-600 mb-4">
          ดูเอกสารแสดงผลการเรียนฉบับทางการ (Official Document)
        </p>
        
        <div className="flex justify-center gap-4">
          {/* ปุ่มกดเพื่อเปิดดูในหน้านี้เลย */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <Eye size={18} />
            {isOpen ? "Hide Transcript" : "View Transcript"}
          </button>

          {/* ปุ่มดาวน์โหลด PDF */}
          <a 
            href="/transcript.pdf" 
            download
            className="flex items-center gap-2 px-6 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* ส่วนแสดงรูปใบเกรด (จะโชว์ก็ต่อเมื่อกดปุ่ม) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-6"
            >
              <div className="max-w-3xl mx-auto shadow-2xl rounded-lg overflow-hidden">
                {/* แนะนำให้แปลง PDF เป็นรูปภาพ (JPG/PNG) เพื่อความไวในการโหลด */}
                <img 
                  src="/public/images/transcript_page-0001.jpg" 
                  alt="Official Transcript" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </section>
  );
};

export default Transcript;