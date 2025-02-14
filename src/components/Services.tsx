import { motion } from 'framer-motion';
import { Code, Monitor, Smartphone } from 'lucide-react';

function ServicesSection() {
  const services = [
    {
      icon: <Code size={32} className="text-blue-600 dark:text-blue-400" />,
      title: 'Web Geliştirme',
      description:
        'React, Next.js ve Node.js kullanarak modern, hızlı ve ölçeklenebilir web uygulamaları oluştururum.'
    },
    {
      icon: <Monitor size={32} className="text-purple-600 dark:text-purple-400" />,
      title: 'UI/UX Tasarım',
      description:
        'Kullanıcı dostu arayüzler ve etkileyici deneyimler için tasarım odaklı çözümler sunarım.'
    },
    {
      icon: <Smartphone size={32} className="text-green-600 dark:text-green-400" />,
      title: 'Mobil Uygulamalar',
      description:
        'React Native ile iOS ve Android platformları için performanslı ve estetik mobil uygulamalar geliştiririm.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Hizmetler
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
