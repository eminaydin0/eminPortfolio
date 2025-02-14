import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mustafa Çaçan',
      title: 'Backend Geliştirici',
      feedback:
        'Emin ile çalışmak son derece profesyoneldi. Hem proje yönetiminde hem de tasarım tarafında bizi sürekli bilgilendirdi ve zamanında teslim etti.'
    },
    {
      name: 'Oğuzhan Aydın',
      title: 'Girişimci & Senior Yazılım Mühendisi',
      feedback:
        'Modern teknolojilere hâkimiyeti harika. E-ticaret projemizi hayalimizdeki gibi hayata geçirdi ve muhteşem bir performans sergiledi.'
    },
    {
      name: 'Ömer Faruk Cenikli',
      title: 'VR & AR Developer',
      feedback:
        'Projeye ilk günden itibaren hızlıca uyum sağlayıp büyük katkı sundu. Ekibin tamamıyla uyumlu bir şekilde çalışarak işleri ileri taşıdı.'
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Dalga (Wave) Efekti — Üst Kısım */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] text-white dark:text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,83.31C862.64,101,739.63,119.1,616.61,110.6S370.58,68.29,247.57,64.14C124.55,60,1.53,84.1-62,96.16H1200V0H0V32.31C0,32.31,108.56,55,249.84,63.28S526.08,81.61,685.14,79.23C840.05,76.97,1009.33,63.31,1082.91,52.95,1082.91,52.95,985.66,83.31,985.66,83.31Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Gradient Arka Plan */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 pointer-events-none" />

      {/* Hafif Parlaklık / Hareketli Arka Plan Katmanı (isteğe bağlı) */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 50%)'
        }}
      />

      <div className="relative max-w-5xl mx-auto z-10 text-center">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Mutlu Müşteriler
        </motion.h2>

        {/* Alt Başlık / Açıklama */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        >
          Projelerimde birlikte çalıştığım iş ortaklarım, deneyimlerini sizinle paylaşıyor.
        </motion.p>

        {/* Testimonial Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Avatar / İkon */}
              <div className="mb-3 text-blue-500 dark:text-blue-400">
                <UserCircle2 size={48} />
              </div>

              {/* Yıldız Değerlendirme (Statik Örnek) */}
              

              {/* Yorum Metni */}
              <p className="text-gray-600 dark:text-gray-200 mb-4 italic">
                “{item.feedback}”
              </p>

              {/* Kullanıcı Bilgileri */}
              <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </span>

              {/* Dekoratif Efekt (Arka Plan Glow) */}
              <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dalga (Wave) Efekti — Alt Kısım */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] text-white dark:text-gray-900"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,83.31C862.64,101,739.63,119.1,616.61,110.6S370.58,68.29,247.57,64.14C124.55,60,1.53,84.1-62,96.16H1200V0H0V32.31C0,32.31,108.56,55,249.84,63.28S526.08,81.61,685.14,79.23C840.05,76.97,1009.33,63.31,1082.91,52.95,1082.91,52.95,985.66,83.31,985.66,83.31Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

export default TestimonialsSection;
