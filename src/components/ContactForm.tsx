import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User, Tag, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // JSON Server’a POST isteği atıyoruz
      await axios.post('http://localhost:3001/forms', formData);

      console.log('Form submitted:', formData);

      // Başarı mesajını göster
      setSuccess(true);

      // Bir süre sonra başarı mesajını kapatmak istersen:
      setTimeout(() => setSuccess(false), 5000);

      // Formu sıfırla
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
      // Hata durumunda bir uyarı ya da farklı bir işlem yapabilirsiniz.
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative"
    >
      {/* Başarı Mesajı */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-green-500 text-white py-3 px-4 rounded-t-xl flex justify-between items-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4 }}
          >
            <span>Mesajınız başarıyla gönderildi!</span>
            <button
              onClick={() => setSuccess(false)}
              className="text-white font-bold"
            >
              X
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="pt-6 space-y-6">
        {/* İsim */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            İsim
          </label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Adınızı girin"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              required
            />
          </div>
        </div>

        {/* E-posta */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            E-posta
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="E-posta adresinizi girin"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              required
            />
          </div>
        </div>

        {/* Telefon (Opsiyonel) */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Telefon (Opsiyonel)
          </label>
          <div className="relative">
            <Phone
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Telefon numaranızı girin"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Konu */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Konu
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              required
            >
              <option value="" disabled>
                Bir konu seçin
              </option>
              <option value="Proje Teklifi">Proje Teklifi</option>
              <option value="Danışmanlık">Danışmanlık</option>
              <option value="Genel Soru">Genel Soru</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
        </div>

        {/* Mesaj */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mesaj
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            placeholder="Mesajınızı buraya yazın..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-colors resize-none"
            required
          />
        </div>

        {/* Gönder Butonu */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Send size={20} />
          Gönder
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
