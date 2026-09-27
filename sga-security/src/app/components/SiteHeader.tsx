"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaBuilding,
  FaGlobeAfrica,
  FaHome,
  FaPhoneAlt,
  FaShieldAlt,
  FaTimes,
  FaUserShield,
  FaUsers,
} from "react-icons/fa";

const navItems = [
  { label: "Home", icon: FaHome, href: "/" },
  {
    label: "About Us",
    icon: FaUserShield,
    href: "/about-us/about-sga-security",
    items: [
      { label: "About SGA Security", href: "/about-us/about-sga-security" },
      { label: "Certification", href: "/about-us/certification" },
      { label: "Company Profile", href: "/about-us/company-profile" },
    ],
  },
  {
    label: "Services",
    icon: FaShieldAlt,
    href: "/services/overview",
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
    href: "/our-clients/multinationals",
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
    href: "/csr/community-projects",
    items: [
      { label: "Community Projects", href: "/csr/community-projects" },
      { label: "Sustainability", href: "/csr/sustainability" },
      { label: "School Support", href: "/csr/school-support" },
    ],
  },
  {
    label: "Contacts",
    icon: FaPhoneAlt,
    href: "/contacts/contact-details",
    items: [
      { label: "Contact Details", href: "/contacts/contact-details" },
      { label: "Customer Service", href: "/contacts/customer-service" },
      { label: "Whistleblowing", href: "/contacts/whistleblowing" },
    ],
  },
  {
    label: "Careers",
    icon: FaBriefcase,
    href: "/careers/open-positions",
    items: [
      { label: "Open Positions", href: "/careers/open-positions" },
      { label: "Recruitment", href: "/careers/recruitment" },
      { label: "Training", href: "/careers/training" },
    ],
  },
  {
    label: "News",
    icon: FaGlobeAfrica,
    href: "/news/advisory",
    items: [
      { label: "Advisory", href: "/news/advisory" },
      { label: "Blog", href: "/news/blog" },
      { label: "Media", href: "/news/media" },
    ],
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`top-shell ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="topbar">
        <div className="brand" aria-label="SGA Security logo">
          <span className="brand-text">SGA</span>
          <span className="brand-sub">SECURITY</span>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-list ${mobileOpen ? "is-open" : ""}`} aria-label="Main menu">
          {navItems.map(({ label, icon: Icon, href, items }) => {
            const parentHref = items?.[0]?.href ?? href ?? "/";

            return (
              <div key={label} className={`nav-item ${items ? "has-dropdown" : ""}`}>
                <Link href={parentHref} className="nav-btn" onClick={() => setMobileOpen(false)}>
                  <Icon className="nav-icon" />
                  <span>{label.toUpperCase()}</span>
                </Link>

                {items && (
                  <div className="nav-dropdown" aria-label={`${label} submenu`}>
                    <ul>
                      {items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="dropdown-link" onClick={() => setMobileOpen(false)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="utility-actions" aria-label="Header actions" />
      </div>
    </header>
  );
}
