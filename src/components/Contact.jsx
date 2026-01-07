import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-12 text-lg">
            สนใจร่วมงาน พูดคุย หรือแลกเปลี่ยนความรู้ ยินดีเสมอครับ
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-[#FF4500]" />
              <span>your.email@kmutnb.ac.th</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-[#FF4500]" />
              <span>08x-xxx-xxxx</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="text-[#FF4500]" />
              <span>KMUTNB, Bangkok</span>
            </div>
          </div>

          <a 
            href="mailto:your.email@kmutnb.ac.th"
            className="inline-block px-10 py-4 bg-[#FF4500] hover:bg-orange-600 rounded-full font-bold text-lg transition-colors shadow-lg shadow-orange-500/20"
          >
            Send Message
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;