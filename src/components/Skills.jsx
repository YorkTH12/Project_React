import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layout, GitBranch, Terminal } from 'lucide-react';

const Skills = () => {
  // ข้อมูล Skills แบ่งตามหมวดหมู่
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["React", "Tailwind CSS", "HTML5/CSS3", "JavaScript (ES6+)", "Framer Motion"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Firebase", "MySQL", "RESTful APIs", "Python"]
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Git / GitHub", "VS Code", "Figma", "Postman", "Vercel"]
    }
  ];

  // Animation Variant: พ่อสั่งให้ลูกๆ เด้งทีละคน
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // แต่ละอันห่างกัน 0.2 วินาที
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical <span className="text-[#FF4500]">Arsenal</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            เครื่องมือและเทคโนโลยีที่ผมเลือกใช้เพื่อสร้างสรรค์ผลงานที่มีคุณภาพ
          </p>
        </div>

        {/* Grid แสดงหมวดหมู่ */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} // ให้เริ่มเล่นเมื่อเลื่อนมาถึงนิดนึง
              variants={containerVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-colors"
            >
              {/* หัวข้อหมวดหมู่ */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 text-[#FF4500] rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* รายการ Skills */}
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-[#FF4500] transition-colors"></div>
                    <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">{skill}</span>
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