import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal, Cpu, Shield, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Software & Web Dev",
      icon: <Layout className="w-6 h-6" />,
      // จากวิชา Mobile App (A) และ Web App (B)
      skills: ["React / React Native", "HTML/CSS/JS", "Mobile App Dev", "Web Application"]
    },
    {
      title: "System & Security Basics",
      icon: <Shield className="w-6 h-6" />,
      // จากวิชา Linux (B+) และ Networks (B)
      skills: ["Linux Command Line", "System Administration", "Network Configuration", "Bash Scripting"]
    },
    {
      title: "Data & Cloud",
      icon: <Database className="w-6 h-6" />,
      // จากวิชา Database (A) และ Cloud (B)
      skills: ["MySQL / SQL", "Database Design", "Cloud Computing"]
    },
    {
      title: "Hardware & IoT",
      icon: <Cpu className="w-6 h-6" />,
      // จากวิชา Electronics (A) และ Microcontroller
      skills: ["Microcontrollers", "Raspberry Pi" ]
    }
  ];

  // ... (ส่วน Animation โค้ดเดิมใช้ได้เลยครับ) ...
  
  // (Copy ส่วน return ของไฟล์ Skills.jsx เดิมมาแปะ แล้วเปลี่ยนแค่ตัวแปร skillCategories ข้างบนครับ)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical <span className="text-[#FF4500]">Skills</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ความเชี่ยวชาญที่ได้จากการเรียนรู้และลงมือทำจริง ทั้งด้าน Software, Hardware และ System
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 text-[#FF4500] rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"></div>
                    <span className="text-gray-600 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;