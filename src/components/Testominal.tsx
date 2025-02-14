import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Mustafa Çaçan',
      title: 'Backend Geliştirici',
      feedback:
        'Emin ile çalışmak gerçekten çok keyifliydi. Projemizde harika bir arayüz tasarladı ve bizi sürekli güncel tuttu.'
    },
    {
      name: 'Oğuzhan Aydın',
      title: 'Girişimci ve Senior Yazılım Mühendisi',
      feedback:
        'Kendisi modern teknolojileri çok iyi biliyor. İhtiyaçlarımızı fazlasıyla karşıladı ve mükemmel bir e-ticaret platformu inşa etti.'
    },
    {
      name: 'Ömer Faruk Cenikli',
      title: 'Vr & Ar Developer',
      feedback:
        'Ekibimize hızlı bir şekilde uyum sağladı ve React projemizi ileriye taşımamıza büyük katkıda bulundu.'
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 md:px-8">
      {/* Dalga (Wave) Efekti — Üst kısım */}
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

      <div className="relative max-w-5xl mx-auto z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Referanslar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-16"
        >
          Projelerimde birlikte çalıştığım iş ortaklarımın bana dair yorumları.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Avatar / İkon */}
              <div className="mb-3 text-blue-500 dark:text-blue-400">
                <UserCircle2 size={48} />
              </div>
              
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
    </section>
  );
}

export default TestimonialsSection;
