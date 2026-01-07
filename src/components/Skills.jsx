import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

const Skills = () => {
  // ข้อมูล Skill (แก้เพิ่มได้ตามใจชอบ)
  const skills = [
    { name: "React", icon: <Code />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <Layout />, level: "Advanced" },
    { name: "Node.js", icon: <Server />, level: "Intermediate" },
    { name: "Python", icon: <Code />, level: "Intermediate" },
    { name: "SQL/Firebase", icon: <Database />, level: "Intermediate" },
    { name: "Git/Github", icon: <Code />, level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-[#FF4500]">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay ทีละนิดให้ดูไล่ระดับ
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-[#FF4500] mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-500">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;