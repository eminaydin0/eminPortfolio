import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8"
        >
          Hakkımda
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Ben <strong>Emin Aydın</strong>,23 yaşında, React.js konusunda uzmanlaşmış bir Frontend geliştiricisiyim. Yaklaşık 3-4 yıldır web teknolojileri üzerine çeşitli projeler üretiyor, her geçen gün yeni teknolojiler ve yöntemler keşfetmeyi keyifle sürdürüyorum. Kullanıcı deneyimini odak noktam olarak belirleyerek modern, ölçeklenebilir ve performanslı arayüzler geliştirmeyi hedefliyorum. React ekosistemini (Redux, Next.js, TypeScript gibi araçlar dahil) aktif biçimde kullanıyor ve tasarım trendlerini yakından takip ederek UI/UX prensiplerine önem veriyorum. Hem kendimi geliştirmek hem de bilgi paylaşımında bulunmak amacıyla topluluklara katkıda bulunmaktan ve edindiğim deneyimleri dokümante ederek paylaşmaktan büyük heyecan duyuyorum. Sürekli öğrenmeye ve yeniliklere açık bir yaklaşım benimsiyor, teknolojinin ilerleyişine paralel olarak projelerimi güncel tutmaya özen gösteriyorum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left"
        >
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Eğitim</h3>
            <p className="text-gray-600 dark:text-gray-300">
              - Bilgisayar Programcılığı (Amasya Merzifon Üniversitesi)<br/>
              - Web Geliştirme Kursları (Udemy)<br/>
              - Sürekli olarak çeşitli online kurslar
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">İlgi Alanları</h3>
            <p className="text-gray-600 dark:text-gray-300">
              - UI/UX Tasarımı<br/>
              - React Ekosistemi (Next.js, Redux, vs.)<br/>
              - Bulut Teknolojileri (AWS, Firebase) <br/>
              - Sosyal Media Yöneticisi
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Hobilerim</h3>
            <p className="text-gray-600 dark:text-gray-300">
              - Açık kaynak projelere katkı sağlamak<br/>
              - Teknoloji bloglarını ve makaleleri okumak<br/>
              - Fotoğrafçılık ve video düzenleme
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
