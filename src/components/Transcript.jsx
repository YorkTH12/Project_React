import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, X, ChevronRight, Code } from 'lucide-react';

const Transcript = () => {
  const [selectedId, setSelectedId] = useState(null);

  // ข้อมูลรายวิชา (ใส่เฉพาะวิชาเทพๆ ที่อยากอวด)
  const courses = [
    {
      id: 1,
      code: "040xxxx",
      name: "Web Programming",
      grade: "A",
      description: "เรียนรู้การสร้าง Web Application ตั้งแต่พื้นฐาน HTML/CSS จนถึง JavaScript Framework",
      project: "ระบบร้านขายขวด (Bottle Shop) แถววงศ์สว่าง",
      stack: ["React", "Firebase", "Tailwind CSS"]
    },
    {
      id: 2,
      code: "040xxxx",
      name: "Data Structures & Algo",
      grade: "B+",
      description: "ศึกษาโครงสร้างข้อมูลรูปแบบต่างๆ และวิเคราะห์ความซับซ้อนของอัลกอริทึม",
      project: "ระบบจัดเส้นทางเดินรถเมล์ด้วย Graph Theory",
      stack: ["Python", "C++"]
    },
    {
      id: 3,
      code: "040xxxx",
      name: "Database Systems",
      grade: "A",
      description: "การออกแบบ ER-Diagram, Normalization และการเขียน SQL Query",
      project: "ฐานข้อมูลระบบลงทะเบียนนักศึกษา",
      stack: ["MySQL", "Workbench"]
    }
  ];

  return (
    <section id="transcript" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* หัวข้อ */}
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-[#FF4500] w-10 h-10" />
          <h2 className="text-4xl font-bold text-gray-900">Academic <span className="text-[#FF4500]">Highlights</span></h2>
        </div>

        {/* ตารางรายวิชา (List) */}
        <div className="grid gap-4">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layoutId={`card-${course.id}`} // หัวใจสำคัญของ Animation ขยายร่าง
              onClick={() => setSelectedId(course.id)}
              className="group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#FF4500] cursor-pointer transition-colors flex justify-between items-center shadow-sm hover:shadow-md"
            >
              <div>
                <span className="text-sm text-gray-500 font-mono">{course.code}</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF4500] transition-colors">{course.name}</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#FF4500]">{course.grade}</span>
                <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ส่วน Popup (Modal) เมื่อกดคลิก */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              {/* พื้นหลังสีดำจางๆ */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              {/* ตัวการ์ดที่ขยายออกมา */}
              <motion.div 
                layoutId={`card-${selectedId}`}
                className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg z-10 relative overflow-hidden"
              >
                {/* ปุ่มปิด */}
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <X size={20} />
                </button>

                {/* เนื้อหาข้างใน */}
                {courses.map((course) => {
                  if (course.id !== selectedId) return null;
                  return (
                    <div key={course.id}>
                      <span className="text-sm text-[#FF4500] font-bold tracking-wider uppercase">Course Detail</span>
                      <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{course.name}</h3>
                      
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                          {course.description}
                        </p>
                        
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                          <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                            <Code size={18} className="text-[#FF4500]" />
                            Key Project
                          </h4>
                          <p className="text-gray-700 font-medium">{course.project}</p>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Tech Stack Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.stack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Transcript;