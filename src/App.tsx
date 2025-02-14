import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ProjectCarousel from "./components/ProjectCarousel";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import ServicesSection from "./components/Services";
import TestimonialsSection from "./components/Testominal";
import AboutSection from "./components/About";
import { ReactTyped } from "react-typed";
import Rsm1 from "./img/emin.jpg";
import Rsm2 from "./img/kare.png";
import Rsm3 from "./img/dreaxm.png";
import Rsm4 from "./img/carincard.png";
import Rsm5 from "./img/vizyon.png";
import Rsm6 from "./img/masa.png";
import Rsm7 from "./img/babil.png";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

/* 
    ─────────────────────────────
    • VERİLER (Data) ve SABİTLER •
    ─────────────────────────────
  */
const HERO_STRINGS = [
  "Merhaba, Ben Emin Aydın",
  "Frontend Developer",
  "React.js Uzmanı",
];

const PROJECTS_DATA = [
  {
    title: "Masa",
    description:
      "Masa, sosyalleşme odaklı etkinlik ve topluluk yönetimi platformudur.",
    image: Rsm6,
    tech: ["React js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://web.masaupp.com/",
  },
  {
    title: "Babil",
    description:
      "İnternet üzerinden kitap satışı yapan Babil.com web sitesi ve mobil uygulama.",
    image: Rsm7,
    tech: ["React js", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://www.babil.com/",
  },
  {
    title: "Kare İnşaat",
    description: "Kare File İnşaat Güvenliği Web Sitesi",
    image: Rsm2,
    tech: ["Html", "Css", "JavaScript"],
    link: "https://www.kareisguvenligi.com/",
  },
  {
    title: "dreaXm",
    description:
      "Aktif olarak kullanılan yapay zeka destekli chat bot, 7/24 hizmet vererek kullanıcıların sorularına anında yanıt sunmaktadır.",
    image: Rsm3,
    tech: ["React js", "Node.js"],
    link: "https://dreaxm.com/",
  },
  {
    title: "CarinCard",
    description:
      "Park yerinden çıkamayanlar için anında kurtuluş: Car in Card Qr kodu ile araç sahibi ile iletişime geçin.",
    image: Rsm4,
    tech: ["React js", "Node.js", "MongoDB"],
    link: "https://www.carincard.com/",
  },
  {
    title: "Vizyon Gsm",
    description:
      "Tasarımlarımız, hem cihazınızı korumak hem de stilinizi yansıtmak için özenle seçildi. Müşteri memnuniyeti odaklı hizmet anlayışımızla, en son trendleri ve yenilikleri takip ediyor, sizin için en iyisini yapan bir firma.",
    image: Rsm5,
    tech: ["React js", "Node.js", "MongoDB"],
    link: "https://vizyongsm.com/",
  },
];

const SKILLS_DATA = [
  { name: "React", level: 90, color: "#61DAFB" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
  { name: "Node.js", level: 80, color: "#339933" },
  { name: "Redux", level: 85, color: "#764ABC" },
  { name: "Next.js", level: 75, color: "#000000" },
  { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
];

const STATS_DATA = [
  {
    icon: "💼",
    value: 10,
    label: "Tamamlanan Proje",
    suffix: "+",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "👥",
    value: 15,
    label: "Mutlu Müşteri",
    suffix: "+",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: "⭐",
    value: 3,
    label: "Yıl Deneyim",
    suffix: "+",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: "❤️",
    value: 100,
    label: "Başarı Oranı",
    suffix: "%",
    color: "from-red-400 to-red-600",
  },
];

const SOCIAL_LINKS = [
  { Icon: Github, href: "https://github.com/eminaydin0", label: "GitHub" },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/emin-ayd%C4%B1n-991139224/",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:eminaydinyazilim@gmail.com", label: "Email" },
];

/* 
    ───────────────────────────
    • ANİMASYON VARIANT'LARI  •
    ───────────────────────────
  */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* 
    ─────────────────────────
    • BÖLÜMSEL BİLEŞENLER  •
    ─────────────────────────
  */

/**
 * Hero Section
 */
function HeroSection({ scrollYProgress, heroStrings }) {
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    // Navbar sabitse fotoğrafın çakışmaması için pt-24 ekledik
    <section className="pt-24 min-h-screen flex items-center justify-center px-6 relative">
      {/* Arka Plan Efektleri */}
      <motion.div
        style={{ opacity, scale }}
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20"
      />
      <div className="absolute inset-0 bg-[url('/path-to-your-pattern.svg')] bg-fixed bg-cover bg-center opacity-5 animate-pulse" />

      {/* İçerik */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Profil Görseli */}
        <div className="mb-8 relative">
          <motion.div
            className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-xl relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={Rsm1}
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Pro Rozeti */}
          <motion.div
            className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            Developer
          </motion.div>
        </div>

        {/* İsim + React Typed */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 tracking-tight">
          <ReactTyped
            strings={heroStrings}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </h1>

        {/* Ek Açıklama */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-light"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <span className="font-semibold">Frontend Geliştirici</span> &{" "}
          <span className="font-semibold">React.js Uzmanı</span>
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          23 yaşında, tutkulu bir yazılım geliştiricisiyim. Modern web
          teknolojileri ve
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {" "}
            React{" "}
          </span>
          ekosistemi üzerinde uzmanlaşırken, kullanıcı deneyimini ön planda
          tutan
          <span className="text-purple-600 dark:text-purple-400 font-medium">
            {" "}
            yenilikçi{" "}
          </span>
          projeler geliştirmeye odaklanıyorum.
        </motion.p>

        {/* Sosyal Medya Linkleri */}
        <div className="flex gap-6 justify-center mb-12">
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Aşağı Kaydırma Göstergesi */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * İstatistikler Bölümü
 */
function StatsSection({ stats }) {
  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg text-gray-600 dark:text-gray-400">
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Projeler Bölümü
 */
function ProjectsSection({ projects }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent dark:via-blue-500/10" />
      <motion.div
        ref={ref}
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Projelerim
        </h2>
        <ProjectCarousel projects={projects} />
      </motion.div>
    </section>
  );
}

/**
 * Yetenekler Bölümü
 */
function SkillsSection({ skills }) {
  return (
    <section
      id="skills"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Yeteneklerim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/**
 * İletişim Bölümü
 */
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          İletişime Geç
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}

/**
 * Footer
 */
<Footer />;

/**
 * ANA UYGULAMA (App)
 */
function App() {
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = React.useState(false);

  // <-- Yüklenme (Splash) Ekranı için state ve efekt
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // <-- Uygulama Ekranı
  const MainContent = (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Hero */}
      <HeroSection
        scrollYProgress={scrollYProgress}
        heroStrings={HERO_STRINGS}
      />

      {/* İstatistikler */}
      <StatsSection stats={STATS_DATA} />

      {/* Hakkımda */}
      <AboutSection />

      {/* Hizmetler */}
      <ServicesSection />

      {/* Projeler */}
      <ProjectsSection projects={PROJECTS_DATA} />

      {/* Referanslar / Yorumlar */}
      <TestimonialsSection />

      {/* Yetenekler */}
      <SkillsSection skills={SKILLS_DATA} />

      {/* İletişim */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      <ScrollToTopButton/>
    </div>
  );

  return (
    <ThemeProvider>
      {/* isLoading true ise SplashScreen göster, false ise asıl içerik */}
      {isLoading ? <SplashScreen /> : MainContent}
    </ThemeProvider>
  );
}

export default App;
