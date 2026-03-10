import { useState, useEffect, useRef } from 'react'
import kuadranLogo from './assets/kuadran.jpg'
import nutechLogo from './assets/nutech.png'
import paragonLogo from './assets/paragon.png'
import selleriLogo from './assets/selleri.png'
import udcLogo from './assets/udc.png'
import './App.css'

const uiText = {
  en: {
    navAbout: 'About',
    navExperience: 'Experience',
    navEducation: 'Education',
    navContact: 'Contact',
    role: 'Backend Developer',
    heroTitle: 'Building reliable backend systems for real business operations.',
    heroDescription:
      'Backend Developer with 5 years of experience in JavaScript and Node.js. I focus on solving complex system issues efficiently and delivering stable, high-quality solutions across enterprise and product environments.',
    location: 'Jakarta Selatan, Indonesia',
    viewExperience: 'View Experience',
    emailMe: 'Email Me',
    whatsappMe: 'WhatsApp',
    downloadCv: 'Download CV',
    linkedin: 'LinkedIn',
    summaryTitle: 'About Me',
    summaryText:
      'Disciplined and solution-oriented backend engineer with strong ownership in debugging, system analysis, and API development. Proven ability to work independently and collaboratively to deliver scalable features and smooth system integrations.',
    skillsTitle: 'Skills',
    skillGroups: {
      backend: 'Backend',
      database: 'Database',
      frontend: 'Frontend',
      tools: 'Tools & Architecture',
    },
    experienceTitle: 'Work Experience',
    educationTitle: 'Education & Courses',
    course: 'Course',
    gpaLabel: 'GPA',
    contactTitle: 'Contact',
    contactLead: 'Interested in collaboration or backend opportunities? Let us connect.',
  },
  id: {
    navAbout: 'Tentang',
    navExperience: 'Pengalaman',
    navEducation: 'Pendidikan',
    navContact: 'Kontak',
    role: 'Backend Developer',
    heroTitle: 'Membangun sistem backend yang andal untuk kebutuhan bisnis nyata.',
    heroDescription:
      'Backend Developer dengan pengalaman 5 tahun menggunakan JavaScript dan Node.js. Saya fokus menyelesaikan masalah sistem yang kompleks secara efisien dan menghadirkan solusi yang stabil serta berkualitas tinggi untuk lingkungan enterprise maupun product.',
    location: 'Jakarta Selatan, Indonesia',
    viewExperience: 'Lihat Pengalaman',
    emailMe: 'Kirim Email',
    whatsappMe: 'WhatsApp',
    downloadCv: 'Unduh CV',
    linkedin: 'LinkedIn',
    summaryTitle: 'Tentang Saya',
    summaryText:
      'Backend engineer yang disiplin dan berorientasi solusi, dengan kepemilikan kerja yang kuat dalam debugging, analisis sistem, dan pengembangan API. Terbukti mampu bekerja mandiri maupun kolaboratif untuk menghadirkan fitur yang scalable dan integrasi sistem yang mulus.',
    skillsTitle: 'Kemampuan',
    skillGroups: {
      backend: 'Backend',
      database: 'Database',
      frontend: 'Frontend',
      tools: 'Tools & Arsitektur',
    },
    experienceTitle: 'Pengalaman Kerja',
    educationTitle: 'Pendidikan & Kursus',
    course: 'Kursus',
    gpaLabel: 'IPK',
    contactTitle: 'Kontak',
    contactLead: 'Tertarik untuk kolaborasi atau peluang backend? Mari terhubung.',
  },
}

const skillGroups = [
  {
    key: 'backend',
    skills: ['Node.js', 'Express.js', 'JavaScript', 'gRPC', 'GraphQL', 'REST API'],
  },
  {
    key: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    key: 'frontend',
    skills: ['Angular'],
  },
  {
    key: 'tools',
    skills: ['Microservices', 'Debugging'],
  },
]

const experiences = [
  {
    role: 'Backend Developer',
    company: 'PT. Paragon Technology and Innovation',
    logo: paragonLogo,
    logoAlt: 'Paragon Technology and Innovation logo',
    period: { en: 'Jan 2025 - Present', id: 'Jan 2025 - Sekarang' },
    points: {
      en: [
        'Led a revamp of the weighing module in the MES (Manufacturing Execution System).',
        'Integrated the Batch Record system with a new ERP, migrating from legacy to SAP.',
      ],
      id: [
        'Melakukan revamp modul penimbangan pada sistem MES (Manufacturing Execution System).',
        'Mengintegrasikan sistem Batch Record dengan ERP baru dalam proses migrasi ke SAP.',
      ],
    },
  },
  {
    role: 'Web Developer',
    company: 'PT. United Dico Citas',
    logo: udcLogo,
    logoAlt: 'United Dico Citas logo',
    period: { en: 'Mar 2023 - Dec 2024', id: 'Mar 2023 - Des 2024' },
    points: {
      en: [
        'Migrated and improved key modules in the HRIS platform.',
        'Resolved production issues in HRIS and supported root-cause debugging.',
        'Developed features for the company online recruitment platform.',
      ],
      id: [
        'Melakukan migrasi dan pengembangan fitur utama pada sistem HRIS.',
        'Menyelesaikan masalah teknis HRIS serta membantu root-cause analysis dan debugging.',
        'Mengembangkan fitur untuk platform Online Recruitment perusahaan.',
      ],
    },
  },
  {
    role: 'Backend Engineer',
    company: 'Selleri',
    logo: selleriLogo,
    logoAlt: 'Selleri logo',
    period: { en: 'Feb 2022 - Feb 2023', id: 'Feb 2022 - Feb 2023' },
    points: {
      en: [
        'Migrated APIs from monolith architecture to microservices.',
        'Implemented services using gRPC, Express.js, PostgreSQL, and MongoDB.',
        'Fixed bugs and improved reliability in existing backend systems.',
      ],
      id: [
        'Melakukan migrasi API dari arsitektur monolith ke microservices.',
        'Mengembangkan service menggunakan gRPC, Express.js, PostgreSQL, dan MongoDB.',
        'Memperbaiki bug dan meningkatkan keandalan sistem backend yang berjalan.',
      ],
    },
  },
  {
    role: 'Node.js Programmer',
    company: 'PT. Nutech Integrasi',
    logo: nutechLogo,
    logoAlt: 'Nutech Integrasi logo',
    period: { en: 'Feb 2020 - Feb 2022', id: 'Feb 2020 - Feb 2022' },
    points: {
      en: [
        'Delivered Less Container Load (LCL) and spoke-hub route features for SITOLAUT.',
        'Integrated SITOLAUT with BRISTORE and implemented BRIVA payment method.',
        'Supported user onboarding and product socialization across multiple regions in Indonesia.',
      ],
      id: [
        'Menambahkan fitur Less Container Load (LCL) dan trayek spoke-hub pada aplikasi SITOLAUT.',
        'Mengintegrasikan SITOLAUT dengan BRISTORE serta menambahkan metode pembayaran BRIVA.',
        'Melakukan sosialisasi aplikasi SITOLAUT di beberapa wilayah Indonesia.',
      ],
    },
  },
  {
    role: 'Programmer Intern',
    company: 'PT. Kuadran Teknologi Indonesia',
    logo: kuadranLogo,
    logoAlt: 'Kuadran Teknologi logo',
    period: { en: 'Feb 2019 - Apr 2019', id: 'Feb 2019 - Apr 2019' },
    points: {
      en: ['Built features for a payroll management system using C# and PostgreSQL.'],
      id: ['Mengembangkan aplikasi payroll management system menggunakan C# dan PostgreSQL.'],
    },
  },
]

const education = [
  {
    type: 'degree',
    school: 'Universitas Bina Nusantara',
    degree: { en: 'Bachelor in Informatics Engineering', id: 'Sarjana Teknik Informatika' },
    year: '2022 - 2024',
    gpa: '3.87',
  },
  {
    type: 'degree',
    school: 'Politeknik Negeri Padang',
    degree: { en: 'Diploma in Informatics Management', id: 'Diploma Manajemen Informatika' },
    year: '2016 - 2019',
    gpa: '3.71',
  },
  {
    type: 'degree',
    school: 'SMK Kartika 1-2 Padang',
    degree: { en: 'Computer and Network Engineering', id: 'Teknik Komputer dan Jaringan' },
    year: '2013 - 2016',
    gpa: '-',
  },
  {
    type: 'course',
    school: 'Arkademy',
    degree: { en: 'Fullstack Developer Bootcamp', id: 'Bootcamp Fullstack Developer' },
    year: { en: 'Dec 2019 - Jan 2020', id: 'Des 2019 - Jan 2020' },
    gpa: '-',
  },
]

const linkedinUrl = 'https://linkedin.com/in/deny-kurniawan-229342197/'

function useTyping(words, { typeSpeed = 80, deleteSpeed = 50, pause = 1800 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    if (!isDeleting && displayed === current) {
      timeout.current = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      const next = isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      timeout.current = setTimeout(
        () => setDisplayed(next),
        isDeleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timeout.current)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return displayed
}

function App() {
  const [lang, setLang] = useState('en')
  const t = uiText[lang]
  const whatsappUrl =
    'https://wa.me/6285186854237?text=Hello%20Deny%2C%20I%20want%20to%20discuss%20a%20backend%20opportunity.'

  const typedRole = useTyping([
    'Backend Developer',
    'Node.js Engineer',
    'API Specialist',
    'Problem Solver',
  ])

  return (
    <div className="portfolio">
      <header className="hero" id="home">
        <nav className="nav">
          <p className="brand">Deny Kurniawan</p>
          <div className="nav-right">
            <div className="nav-links">
              <a href="#about">{t.navAbout}</a>
              <a href="#experience">{t.navExperience}</a>
              <a href="#education">{t.navEducation}</a>
              <a href="#contact">{t.navContact}</a>
            </div>
            <div className="lang-toggle">
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
                onClick={() => setLang('id')}
              >
                ID
              </button>
            </div>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">
            {typedRole}<span className="cursor">|</span>
          </p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-description">{t.heroDescription}</p>
          <p className="hero-meta">📍 {t.location}</p>
          <div className="hero-actions">
            <a className="cta" href="#experience">{t.viewExperience}</a>
            <a className="cta secondary" href="mailto:denykurniawan146@gmail.com">{t.emailMe}</a>
            <a className="cta whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">{t.whatsappMe}</a>
            <a className="cta linkedin" href={linkedinUrl} target="_blank" rel="noreferrer">{t.linkedin}</a>
            <a className="cta outline" href="/CVDenyKurniawan.pdf" download>{t.downloadCv}</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <h2>{t.summaryTitle}</h2>
          <p>{t.summaryText}</p>

          <h3 className="skills-title">{t.skillsTitle}</h3>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.key} className="skill-group">
                <p className="skill-group-label">{t.skillGroups[group.key]}</p>
                <div className="skills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <h2>{t.experienceTitle}</h2>
          <div className="timeline">
            {experiences.map((item, index) => (
              <div
                key={`${item.role}-${item.company}`}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <article className="experience-card">
                  <div className="experience-heading">
                    <h3>{item.role}</h3>
                    <p className="period">{item.period[lang]}</p>
                  </div>
                  <div className="company-row">
                    {item.logo && (
                      <img className="company-logo" src={item.logo} alt={item.logoAlt} loading="lazy" />
                    )}
                    <p className="company">{item.company}</p>
                  </div>
                  <ul>
                    {item.points[lang].map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <h2>{t.educationTitle}</h2>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school} className="education-card">
                <div className="edu-icon">
                  {item.type === 'course' ? '📖' : '🎓'}
                </div>
                {item.type === 'course' && (
                  <span className="edu-badge">{t.course}</span>
                )}
                <h3>{item.school}</h3>
                <p>{item.degree[lang]}</p>
                <p className="muted">
                  {typeof item.year === 'string' ? item.year : item.year[lang]}
                  {item.gpa !== '-' ? ` | ${t.gpaLabel}: ${item.gpa}` : ''}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>{t.contactTitle}</h2>
          <p>{t.contactLead}</p>
          <div className="contact-list">
            <a href="mailto:denykurniawan146@gmail.com">
              <span className="contact-icon">✉</span> denykurniawan146@gmail.com
            </a>
            <a href="tel:+6285186854237">
              <span className="contact-icon">📞</span> +62 851-8685-4237
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon">💬</span> WhatsApp
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <span className="contact-icon">🔗</span> linkedin.com/in/deny-kurniawan-229342197
            </a>
            <span>
              <span className="contact-icon">📍</span> Jakarta Selatan, Indonesia
            </span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Deny Kurniawan</p>
      </footer>
    </div>
  )
}

export default App
