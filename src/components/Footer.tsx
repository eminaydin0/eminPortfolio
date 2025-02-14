import { Mail, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 pt-12 px-4">
      {/* Dalga (Wave) Efekti — Üst kısım */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[50px] dark:text-gray-800 text-white"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,83.31C862.64,101,739.63,119.1,616.61,110.6S370.58,68.29,247.57,64.14C124.55,60,1.53,84.1-62,96.16H1200V0H0V32.31C0,32.31,108.56,55,249.84,63.28S526.08,81.61,685.14,79.23C840.05,76.97,1009.33,63.31,1082.91,52.95,1082.91,52.95,985.66,83.31,985.66,83.31Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto pb-12">
        <div className="text-center">
          {/* Başlık */}
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Bize Ulaşın
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Her türlü soru, öneri ve iletişim için bizimle bağlantıya geçebilirsiniz.
          </p>

          {/* İletişim Satırları */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-6">
            {/* Telefon */}
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a
                href="tel:+905538827646"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                +90 553 882 7646
              </a>
            </div>
            
            {/* E-posta */}
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <a
                href="mailto:eminaydinyazilim@gmail.com"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                eminaydinyazilim@gmail.com
              </a>
            </div>
          </div>

          {/* Telif vs. */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            © 2025 <span className="font-semibold">Emin Aydın</span>. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
