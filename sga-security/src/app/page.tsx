import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaBriefcase,
  FaBuilding,
  FaChevronRight,
  FaClipboardList,
  FaEnvelope,
  FaFacebookF,
  FaGlobeAfrica,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaUserShield,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

const navItems: {
  label: string;
  icon: IconType;
  href?: string;
  items?: { label: string; href: string }[];
}[] = [
  { label: "Home", icon: FaHome, href: "/" },
  {
    label: "About Us",
    icon: FaUserShield,
    items: [
      { label: "About SGA Security", href: "/about-us/about-sga-security" },
      { label: "Certification", href: "/about-us/certification" },
      { label: "Company Profile", href: "/about-us/company-profile" },
    ],
  },
  {
    label: "Services",
    icon: FaShieldAlt,
    items: [
      { label: "Overview", href: "/services/overview" },
      { label: "Home Security", href: "/services/home-security" },
      { label: "Courier", href: "/services/courier" },
      { label: "Guarding", href: "/services/guarding" },
      { label: "Alarm Response", href: "/services/alarm-response" },
      { label: "Tracking", href: "/services/tracking" },
      { label: "Technical Services", href: "/services/technical-services" },
      { label: "Security Dogs", href: "/services/security-dogs" },
      { label: "Special Services", href: "/services/special-services" },
      { label: "Workshop", href: "/services/workshop" },
    ],
  },
  {
    label: "Our Clients",
    icon: FaUsers,
    items: [
      { label: "Multinationals", href: "/our-clients/multinationals" },
      { label: "Government Institutions", href: "/our-clients/government-institutions" },
      { label: "Hospitals", href: "/our-clients/hospitals" },
      { label: "Schools & Institutions", href: "/our-clients/schools-and-institutions" },
      { label: "Diplomatic Missions", href: "/our-clients/diplomatic-missions" },
      { label: "Hotels", href: "/our-clients/hotels" },
      { label: "Financial Institutions", href: "/our-clients/financial-institutions" },
      { label: "NGO's", href: "/our-clients/ngos" },
      { label: "Other Industries", href: "/our-clients/other-industries" },
    ],
  },
  {
    label: "CSR",
    icon: FaBuilding,
    items: [
      { label: "Community Projects", href: "/csr/community-projects" },
      { label: "Sustainability", href: "/csr/sustainability" },
      { label: "School Support", href: "/csr/school-support" },
    ],
  },
  {
    label: "Contacts",
    icon: FaPhoneAlt,
    items: [
      { label: "Contact Details", href: "/contacts/contact-details" },
      { label: "Customer Service", href: "/contacts/customer-service" },
      { label: "Whistleblowing", href: "/contacts/whistleblowing" },
    ],
  },
  {
    label: "Careers",
    icon: FaBriefcase,
    items: [
      { label: "Open Positions", href: "/careers/open-positions" },
      { label: "Recruitment", href: "/careers/recruitment" },
      { label: "Training", href: "/careers/training" },
    ],
  },
  {
    label: "News",
    icon: FaGlobeAfrica,
    items: [
      { label: "Advisory", href: "/news/advisory" },
      { label: "Blog", href: "/news/blog" },
      { label: "Media", href: "/news/media" },
    ],
  },
];

const clients = ["RABAI", "BARCLAYS", "TUSKYS", "MTC", "INTL SCHOOL OF UGANDA"];

const steps = [
  {
    icon: FaPhoneAlt,
    title: "1. Let us call you",
    description: "Send us a request and we will call you and help you assess your security needs.",
  },
  {
    icon: FaClipboardList,
    title: "2. Free survey & quote",
    description: "Receive a free security quotation on the phone or at your location from one of our security experts.",
  },
  {
    icon: FaShieldAlt,
    title: "3. Installation",
    description: "With our professional installation team you will be set up with our world-class security services within minutes.",
  },
];

const locationPoints = [
  { left: "14%", top: "42%" },
  { left: "20%", top: "36%" },
  { left: "26%", top: "28%" },
  { left: "33%", top: "46%" },
  { left: "39%", top: "30%" },
  { left: "46%", top: "56%" },
  { left: "58%", top: "37%" },
  { left: "67%", top: "49%" },
  { left: "74%", top: "62%" },
  { left: "82%", top: "45%" },
  { left: "52%", top: "74%" },
  { left: "62%", top: "82%" },
  { left: "68%", top: "72%" },
  { left: "36%", top: "73%" },
  { left: "42%", top: "82%" },
  { left: "18%", top: "60%" },
];

const footerLinks = [
  { label: "Emergency Contacts", href: "/contacts/contact-details" },
  { label: "Careers", href: "/careers/open-positions" },
  { label: "Whistleblowing", href: "/contacts/whistleblowing" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Site Search", href: "/site-search" },
  { label: "Site Map", href: "/site-map" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-banner">
        <Image
          src="/heroo.jpg"
          alt="Security personnel guarding a modern property"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>PROTECT YOUR HOME, SECURE YOUR FUTURE</h1>
          <p>
            PROTECT WHAT MATTERS MOST WITH ADVANCED HOME SECURITY SOLUTIONS TO GIVE YOU, YOUR FAMILY,
            AND YOUR GUESTS THE ASSURANCE OF SAFETY.
          </p>
          <button type="button" className="primary-btn">
            LEARN MORE AND SIGN UP
          </button>
        </div>
        <div className="float-label left">HOME SECURITY SOLUTION</div>
        <div className="float-label right">ENQUIRE NOW</div>
      </section>

      <section className="welcome-band">
        <div className="welcome-content">
          <div className="welcome-kicker">WELCOME TO SGA SECURITY</div>
          <div className="welcome-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p>
            Welcome to SGA Security. We are a multinational security solutions provider in East Africa with
            over 55 years of operating experience and over 20,000 personnel in the region.
          </p>
          <button type="button" className="welcome-btn">LEARN MORE</button>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-inner">
          <Link href="/about-us/about-sga-security" className="feature-card feature-card-image left-card" aria-label="About SGA Security image card">
            <Image
              src="/about.jpg"
              alt="About SGA Security"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 50vw"
              className="feature-image image-one"
            />
            <div className="feature-label">ABOUT SGA SECURITY</div>
          </Link>

          <Link href="/services/overview" className="feature-card feature-card-image right-card" aria-label="Our Services image card">
            <Image
              src="/serve.jpg"
              alt="Our services"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 50vw"
              className="feature-image image-two"
            />
            <div className="feature-label">OUR SERVICES</div>
          </Link>
        </div>
      </section>

      <section className="steps-section">
        <div className="section-heading compact">GET SECURED IN 3 EASY STEPS</div>
        <div className="step-grid">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="step-item">
              <div className="step-circle">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="section-heading compact">OUR FOOTPRINT</div>
        <div className="map-panel" role="img" aria-label="Map of East Africa showing SGA footprint">
          {locationPoints.map((point, index) => (
            <span key={`${point.left}-${point.top}-${index}`} className="map-dot" style={point} />
          ))}
        </div>
      </section>

      <div className="cta-bar">
        <div className="cta-inner">
          <div className="cta-text">
            <span className="cta-icon">
              <FaEnvelope />
            </span>
            <span>INTERESTED IN OUR SERVICES? GET A QUOTE TODAY!</span>
          </div>
          <button type="button" className="cta-button">
            GET A QUOTE
          </button>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-column">
            <h4>ABOUT SGA SECURITY</h4>
            <p>
              SGA Security is dedicated to understanding and meeting our clients&apos; precise requirements and
              fulfilling these with a cost effective interior and efficient service, day-in-day-out.
            </p>
          </div>

          <div className="footer-column">
            <h4>USEFUL LINKS</h4>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <FaChevronRight className="footer-arrow" />
                  <Link href={link.href} className="footer-link">
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column social-column">
            <h4>FIND US ON SOCIAL MEDIA</h4>
            <div className="social-stack">
              <button type="button" aria-label="Facebook" className="social-pill">
                <FaFacebookF />
              </button>
              <button type="button" aria-label="Instagram" className="social-pill">
                <FaInstagram />
              </button>
              <button type="button" aria-label="YouTube" className="social-pill">
                <FaYoutube />
              </button>
              <button type="button" aria-label="LinkedIn" className="social-pill">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <span>SGA Security Ltd | Copyright 2026 All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}
