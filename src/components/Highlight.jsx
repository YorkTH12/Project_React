import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronRight, X, Code, Smartphone, Database, Terminal, Cpu } from 'lucide-react';

const Highlight = () => {
  const [selectedId, setSelectedId] = useState(null);

  // ข้อมูลดึงมาจาก Transcript จริง (เน้นวิชาเกรด A/B+)
  const courses = [
    {
      id: 1,
      code: "030523503",
      name: "Mobile App Development",
      grade: "A",
      icon: <Smartphone className="text-[#FF4500]" />,
      description: "เรียนรู้การพัฒนาแอปพลิเคชันบนมือถือแบบ Cross-platform",
      keyHighlightType: "Key Project", // <-- ระบุประเภทหัวข้อ
      keyHighlightValue: "แอปดูอัตราแลกเปลี่ยนเงินตราต่างประเทศแบบเรียลไทม์", // <-- ใส่ชื่อโปรเจคที่ทำ
      stack: ["React Native", "Firebase"]
    },
    // วิชาที่ไม่มี Project แต่เน้น Skill/Lab (เช่น Linux)
    {
      id: 2,
      code: "030523126",
      name: "Linux OS & Admin",
      grade: "B+",
      icon: <Terminal className="text-[#FF4500]" />,
      description: "การบริหารจัดการระบบปฏิบัติการ Linux, Shell Scripting...",
      keyHighlightType: "Practical Focus", // <-- เปลี่ยนชื่อหัวข้อตรงนี้
      keyHighlightValue: "การเขียน Shell Script เพื่อ Automate งาน Backup ข้อมูล", // <-- ใส่สิ่งที่ทำเป็น
      stack: ["Ubuntu", "Bash Script", "Cron Job"]
    },
    // วิชา Electronics (A) เน้น Lab
    {
      id: 3,
      code: "030523106",
      name: "Electronics Technology",
      grade: "A",
      icon: <Cpu className="text-[#FF4500]" />,
      description: "ทฤษฎีวงจรอิเล็กทรอนิกส์พื้นฐาน การวิเคราะห์วงจรและการใช้งานอุปกรณ์วัด",
      keyHighlightType: "Lab Highlight", // <-- เน้นงาน Lab
      keyHighlightValue: "การออกแบบและต่อวงจร",
      stack: ["Multimeter", "Oscilloscope", "PCB Design"]
    },
    {
      id: 4,
      code: "030523500", // แก้รหัสให้ตรงกับ Transcript (Database)
      name: "Database & Data Technology",
      grade: "A",
      icon: <Database className="text-[#FF4500]" />,
      description: "เรียนรู้หลักการออกแบบฐานข้อมูล (Database Design), การเขียน ER-Diagram, Normalization และการใช้ SQL Query เพื่อจัดการข้อมูลอย่างมีประสิทธิภาพ",
      keyHighlightType: "System Design", // <-- เน้นการออกแบบระบบ
      keyHighlightValue: "ออกแบบโครงสร้างฐานข้อมูลสำหรับระบบจัดการคลังสินค้า (Inventory System)",
      stack: ["MySQL", "SQL", "Workbench", "ER Diagram"]
    },
  ];

  return (
    <section id="highlight" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-[#FF4500] w-10 h-10" />
          <h2 className="text-4xl font-bold text-gray-900">Academic <span className="text-[#FF4500]">Highlights</span></h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              layoutId={`card-${course.id}`}
              onClick={() => setSelectedId(course.id)}
              className="group p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#FF4500] cursor-pointer transition-all hover:shadow-lg relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm group-hover:bg-orange-50 transition-colors">
                  {course.icon}
                </div>
                <span className="text-2xl font-bold text-[#FF4500]">{course.grade}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{course.name}</h3>
              <p className="text-sm text-gray-500 font-mono mb-4">{course.code}</p>
              
              <div className="flex items-center text-sm text-gray-600 group-hover:text-[#FF4500] font-medium">
                View Detail <ChevronRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`card-${selectedId}`}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg z-10 relative overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <X size={20} />
                </button>

                {courses.map((course) => {
                  if (course.id !== selectedId) return null;
                  return (
                    <div key={course.id}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-orange-100 rounded-lg text-[#FF4500]">
                          {course.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>
                          <span className="text-sm text-gray-500 font-mono">{course.code}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          {course.description}
                        </p>
                        
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-2">
                            {/* ใช้ไอคอน Code เป็นค่า Default */}
                            <Code size={18} className="text-[#FF4500]" />
                            {course.keyHighlightType} {/* <-- แสดงชื่อหัวข้อตามข้อมูล */}
                          </h4>
                          <p className="text-gray-700 font-medium">
                            {course.keyHighlightValue} {/* <-- แสดงเนื้อหา */}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.stack.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-orange-50 text-[#FF4500] text-sm rounded-full font-medium border border-orange-100">
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

export default Highlight;