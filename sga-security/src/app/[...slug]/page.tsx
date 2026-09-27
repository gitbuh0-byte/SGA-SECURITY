import Link from "next/link";
import { notFound } from "next/navigation";

type PageEntry = {
  kicker: string;
  title: string;
  summary: string;
  highlights: string[];
  narrative?: string;
  detailCards?: { title: string; text: string }[];
  metrics?: { value: string; label: string }[];
  sections?: { heading: string; items: string[] }[];
  cta?: { label: string; href: string };
};

const pageCatalog: Record<string, PageEntry> = {
  "about-us/about-sga-security": {
    kicker: "About us",
    title: "About SGA Security",
    summary:
      "SGA Security delivers dependable, people-first security management across East Africa for commercial, residential, and institutional clients.",
    highlights: [
      "55+ years of regional service experience across complex operating environments",
      "Over 20,000 trained personnel supporting site security, guard operations, and rapid response",
      "Integrated protection programmes for guarding, response, technical systems, and operational supervision",
    ],
  },
  "about-us/certification": {
    kicker: "Standards",
    title: "Certification & Compliance",
    summary:
      "Our operating model is built around quality assurance, disciplined procedures, and a clear commitment to compliant, accountable service delivery.",
    highlights: [
      "Structured compliance routines aligned to client expectations and operational requirements",
      "Preparedness-led supervision and quality control across all field deployments",
      "Consistent training standards that keep every site aligned to service quality expectations",
    ],
  },
  "about-us/company-profile": {
    kicker: "Profile",
    title: "Company Profile",
    summary:
      "From local guarding to large-scale security management, SGA Security safeguards people, property, and critical operations with practical field discipline.",
    highlights: [
      "Regional expertise across East Africa for urban, residential, commercial, and institutional environments",
      "Strong operational partnerships across private, public, and sector-specific programmes",
      "Flexible staffing models that scale with business risk, site complexity, and service demand",
    ],
  },
  "services/overview": {
    kicker: "Services",
    title: "Security Solutions Overview",
    summary:
      "We design and deliver integrated security programmes that protect people, property, and business continuity through trained personnel and responsive operations.",
    narrative:
      "Our service model combines guard presence, response capability, technical support, and field leadership to address real-world risk across homes, sites, and commercial operations.",
    detailCards: [
      {
        title: "Access control",
        text: "We secure entrances, checkpoints, and high-traffic touchpoints with disciplined procedures and visible protection.",
      },
      {
        title: "Rapid intervention",
        text: "Alarm response and field support are designed to reduce incident impact and restore control quickly.",
      },
      {
        title: "Site oversight",
        text: "Every deployment is supported by supervision, reporting, and operational accountability from day one.",
      },
    ],
    highlights: [
      "Risk-led security planning for homes, estates, commercial spaces, and mission-critical facilities",
      "Specialist teams handling guarding, response, transport, technical support, and site supervision",
      "Multi-layered capability designed around site risk, client expectations, and operational continuity",
    ],
  },
  "services/home-security": {
    kicker: "Home security",
    title: "Home Security",
    summary:
      "We help homeowners, estates, and residential communities secure access points, public-facing spaces, and daily movement with professional guarding and active oversight.",
    narrative:
      "Home security works best when it feels calm, visible, and reliable. We build a residential protection model around resident confidence, access discipline, and fast incident handling.",
    detailCards: [
      {
        title: "Entry control",
        text: "We manage visitor access, gate control, and compound movement to reduce security risk without disrupting daily life.",
      },
      {
        title: "Resident confidence",
        text: "Visible presence, clear routines, and regular reporting help families and communities feel secure and informed.",
      },
      {
        title: "Alarm support",
        text: "When alarms or unusual activity occur, our teams respond quickly to verify the event and restore calm.",
      },
    ],
    highlights: [
      "Access control and perimeter monitoring for residential compounds and private estates",
      "Rapid incident response for alarms, suspicious activity, and resident security concerns",
      "Clear day-to-day coordination with property owners and management teams",
    ],
  },
  "services/courier": {
    kicker: "Courier security",
    title: "Courier Services",
    summary:
      "Secure movement of cash, documents, and other valuables demands careful planning, trained personnel, and strict reporting discipline throughout the route.",
    narrative:
      "We protect sensitive movements with route discipline, escort readiness, and clear handover procedures designed around confidentiality and risk control.",
    detailCards: [
      {
        title: "Movement planning",
        text: "We map journeys, assess risk points, and prepare the right escort model before the transfer begins.",
      },
      {
        title: "Controlled handover",
        text: "Every movement is monitored and documented to keep accountability strong at each handoff point.",
      },
      {
        title: "Confidential handling",
        text: "High-value transfers are supported with professionalism, discretion, and procedural control from start to finish.",
      },
    ],
    highlights: [
      "Escort support and movement planning for sensitive, time-critical deliveries",
      "Trained personnel for cash and document movement in controlled, risk-aware conditions",
      "Structured handover, incident logging, and client communication on every assignment",
    ],
  },
  "services/guarding": {
    kicker: "Guarding",
    title: "Guarding Services",
    summary:
      "Our guarding teams provide visible, professional protection for offices, residential developments, and public-facing facilities where access control and deterrence matter.",
    narrative:
      "Guarding remains the foundation of a strong security programme, combining presence, site discipline, and real-time reporting to protect continuous operations.",
    detailCards: [
      {
        title: "Visible deterrence",
        text: "Uniformed guards provide a strong first line of defence while maintaining professionalism and public trust.",
      },
      {
        title: "Visitor discipline",
        text: "We regulate site flow, control access points, and maintain clear accountability for all movement on site.",
      },
      {
        title: "Operational reporting",
        text: "Daily site logs and supervision help clients maintain visibility into service quality and security activity.",
      },
    ],
    highlights: [
      "Uniformed guarding for entrances, checkpoints, property perimeters, and visitor areas",
      "Visitor control, gate management, and strict accountability across site operations",
      "Daily supervision and incident reporting that strengthen site compliance and confidence",
    ],
  },
  "services/alarm-response": {
    kicker: "Rapid response",
    title: "Alarm Response",
    summary:
      "Our response teams act quickly to verify alarms, manage suspicious activity, and restore control before a security event escalates into a larger risk.",
    narrative:
      "When a breach or trigger occurs, speed matters. We focus on fast verification, calm intervention, and secure restoration of the site to normal operations.",
    detailCards: [
      {
        title: "Fast verification",
        text: "We check the alarm, confirm the circumstances, and act before the event becomes a larger operational disruption.",
      },
      {
        title: "Field intervention",
        text: "Our teams secure weak points, check suspicious movement, and prevent escalation until normal control is restored.",
      },
      {
        title: "After-action review",
        text: "Each incident is documented clearly so the client has both accountability and a better basis for future planning.",
      },
    ],
    highlights: [
      "Immediate alarm verification and escalation across operationally sensitive sites",
      "On-site intervention for breaches, suspicious intrusions, and abnormal movement",
      "Clear incident documentation and client communication after every intervention",
    ],
  },
  "services/tracking": {
    kicker: "Tracking",
    title: "Tracking Services",
    summary:
      "Tracking and movement visibility support safer operations for teams, vehicles, and sensitive assets across dynamic or high-risk environments.",
    highlights: [
      "Movement visibility for vehicles, staff, and priority assets during routine and high-risk tasks",
      "Escorted movement planning for sensitive field operations and controlled transfers",
      "Operational reporting that gives managers clearer awareness of activity and risk exposure",
    ],
  },
  "services/technical-services": {
    kicker: "Technical",
    title: "Technical Services",
    summary:
      "Our technical security solutions strengthen site protection through surveillance support, monitoring coordination, and system reliability planning.",
    highlights: [
      "Support for surveillance systems, access monitoring, and site-wide visibility tools",
      "Monitoring coordination for high-risk or high-traffic environments requiring active oversight",
      "Maintenance planning that keeps technical protection aligned with daily site operations",
    ],
  },
  "services/security-dogs": {
    kicker: "K9 support",
    title: "Security Dogs",
    summary:
      "K9 units add a strong layer of detection, deterrence, and perimeter awareness for sensitive or elevated-risk environments.",
    highlights: [
      "Detection and perimeter awareness for high-risk, restricted, or sensitive sites",
      "Rapid response capability that complements guarding and access control operations",
      "Targeted deployment that strengthens security posture where site risk requires added visibility",
    ],
  },
  "services/special-services": {
    kicker: "Specialized support",
    title: "Special Services",
    summary:
      "We provide tailored security services for high-profile, sensitive, or operationally complex sites where a standard deployment model is not enough.",
    highlights: [
      "Risk-tailored protection plans for premium, restricted, or highly sensitive assignments",
      "Flexible staffing and response frameworks for complex site expectations and unique conditions",
      "Professional handling of elevated-security environments with discretion and operational control",
    ],
  },
  "services/workshop": {
    kicker: "Operations",
    title: "Workshop Services",
    summary:
      "Workshop and operational support services keep equipment, staffing readiness, and deployment quality aligned to client needs and field demands.",
    highlights: [
      "Equipment checks and readiness support for active security deployments",
      "Operational preparation and training alignment for stronger field performance",
      "Quality control measures that sustain reliability and continuity across service delivery",
    ],
  },
  "our-clients/multinationals": {
    kicker: "Clients",
    title: "Multinationals",
    summary:
      "We support multinational operations with secure environments, disciplined staff, and service models designed for continuity across complex business settings.",
    narrative:
      "Corporate environments need protection that supports business continuity without disrupting staff movement, access control, or operational flow.",
    detailCards: [
      {
        title: "Business continuity",
        text: "We protect staff, entrances, and operational zones so business activity keeps moving without avoidable disruptions.",
      },
      {
        title: "Site professionalism",
        text: "Our teams operate with structured reporting, disciplined response, and a clear understanding of corporate standards.",
      },
      {
        title: "Operational visibility",
        text: "Clients receive clear oversight over site activity, risk exposure, and service quality through consistent reporting.",
      },
    ],
    highlights: [
      "Corporate access control and perimeter protection for high-traffic operational sites",
      "Security programmes aligned to business continuity, site risk, and staff safety objectives",
      "Professional reporting and escalation systems that support enterprise-level oversight",
    ],
  },
  "our-clients/government-institutions": {
    kicker: "Public sector",
    title: "Government Institutions",
    summary:
      "We support government and public institutions with security frameworks that protect buildings, staff, and public-facing operations through discipline and accountability.",
    narrative:
      "Government and public-sector sites require security that is highly visible, professionally managed, and built around trust, procedure, and calm operational control.",
    detailCards: [
      {
        title: "Public confidence",
        text: "Security helps maintain order and reassurance in spaces that serve the public and require strong operational discipline.",
      },
      {
        title: "Controlled access",
        text: "We manage entrances, secure checkpoints, and movement patterns to support steady and accountable site operations.",
      },
      {
        title: "Institutional trust",
        text: "Professional conduct and structured reporting are essential in environments where public confidence and accountability matter most.",
      },
    ],
    highlights: [
      "Access management and visitor control for institutional facilities and public service environments",
      "Security operations designed to maintain order, confidence, and operational continuity",
      "High standards of professionalism, reporting, and situational awareness around sensitive spaces",
    ],
  },
  "our-clients/hospitals": {
    kicker: "Healthcare",
    title: "Hospitals",
    summary:
      "Healthcare facilities need calm, professional security that protects patients, staff, visitors, and sensitive service areas without disrupting care delivery.",
    narrative:
      "Hospital security must balance safety, accessibility, and patient comfort while remaining highly responsive to alarms, movement risk, and sensitive environments.",
    detailCards: [
      {
        title: "Calm presence",
        text: "Our teams maintain a low-friction presence that protects people without adding tension to healthcare settings.",
      },
      {
        title: "Sensitive access control",
        text: "We manage visitor movement and restricted zones while supporting clinical workflows and patient wellbeing.",
      },
      {
        title: "Emergency readiness",
        text: "Security support is aligned to incident response, escalation procedures, and the operational demands of a live clinical environment.",
      },
    ],
    highlights: [
      "Controlled access and visitor management for clinical and public-facing areas",
      "Support for staff safety and patient wellbeing in sensitive operational environments",
      "Improved response to incidents, alarms, and emergency coordination requirements",
    ],
  },
  "our-clients/schools-and-institutions": {
    kicker: "Education",
    title: "Schools & Institutions",
    summary:
      "We support educational institutions with security systems and personnel that strengthen grounds safety, access control, and a stable learning environment.",
    narrative:
      "Safe campuses depend on a predictable, calm security presence that protects students, staff, and visitors without disrupting learning or institutional routines.",
    detailCards: [
      {
        title: "Campus safety",
        text: "We secure access points, manage visitor flow, and reinforce a visible, reassuring presence around the learning environment.",
      },
      {
        title: "Orderly movement",
        text: "Movement discipline helps reduce disruption while strengthening protection across classrooms, gates, and community spaces.",
      },
      {
        title: "Community trust",
        text: "Parents, staff, and students are more confident when a site has clear routines, visible oversight, and professional response capability.",
      },
    ],
    highlights: [
      "Security coverage for entrances, learning spaces, and shared community areas",
      "Visitor discipline and movement management to support calmer, safer operational routines",
      "Visible assurance that helps create a safer, more confident environment for students and staff",
    ],
  },
  "our-clients/diplomatic-missions": {
    kicker: "Protected environments",
    title: "Diplomatic Missions",
    summary:
      "Sensitive, high-profile sites require discreet, highly disciplined security operations with strong access control and carefully managed situational awareness.",
    narrative:
      "Diplomatic and protected environments require a careful balance of discretion, access control, and operational awareness without creating unnecessary friction or public visibility.",
    detailCards: [
      {
        title: "Discreet protection",
        text: "We provide professional security that is visible where needed and restrained where confidentiality and diplomacy are paramount.",
      },
      {
        title: "Controlled access",
        text: "Entry procedures, movement control, and site awareness are built around strict security discipline and trust-based operational habits.",
      },
      {
        title: "Situation awareness",
        text: "Our teams maintain clear reporting and response readiness to manage risk while reducing disruption to normal institutional activity.",
      },
    ],
    highlights: [
      "Discreet protection and controlled movement for diplomatic and sensitive public-facing environments",
      "Professional conduct and reporting systems designed around confidentiality and trust",
      "Operational discipline that maintains confidence without creating unnecessary visibility or disruption",
    ],
  },
  "our-clients/hotels": {
    kicker: "Hospitality",
    title: "Hotels",
    summary:
      "Hotels need security that protects guests, staff, and property while preserving a calm, welcoming, and professional guest experience.",
    narrative:
      "Hospitality security must protect the guest experience while staying alert to access control, suspicious movement, and property risks across lobby, service, and back-of-house areas.",
    detailCards: [
      {
        title: "Guest assurance",
        text: "A clear and professional security presence helps guests feel safe while reinforcing the brand experience from arrival to departure.",
      },
      {
        title: "Front-of-house control",
        text: "We manage entrances, visitor access, and operational touchpoints to keep the property secure without compromising service quality.",
      },
      {
        title: "Protected operations",
        text: "Back-of-house and staff movement are supported with trained oversight, reporting, and rapid response to operational risk.",
      },
    ],
    highlights: [
      "Front-of-house access control and guest-facing service standards",
      "Support for incidents, security escalations, and property safety across the site",
      "Back-of-house protection for staff movement, risk areas, and key operational spaces",
    ],
  },
  "our-clients/financial-institutions": {
    kicker: "Finance",
    title: "Financial Institutions",
    summary:
      "Financial operations require layered security, disciplined access control, and careful attention to cash handling, risk exposure, and service continuity.",
    narrative:
      "Where trust, cash flow, and operational continuity matter most, security must be precise, controlled, and highly responsive to both access and incident risk.",
    detailCards: [
      {
        title: "Access discipline",
        text: "We secure entrances, employee movement, and visitor access to reduce exposure across the property and transactional areas.",
      },
      {
        title: "Asset protection",
        text: "Risk-prioritized protocols help safeguard cash, documents, staff, and operational environments where disruption has financial consequences.",
      },
      {
        title: "Incident control",
        text: "Our teams support escalation procedures and rapid response to suspicious activity, breaches, or access-related incidents.",
      },
    ],
    highlights: [
      "Security coverage for entrances, cash handling, and controlled employee movement",
      "Structured monitoring for visitors, high-risk zones, and escalation procedures",
      "Professional response capability for suspicious movement, breach events, and access issues",
    ],
  },
  "our-clients/ngos": {
    kicker: "Partners",
    title: "NGO's",
    summary:
      "We support NGOs and mission-driven organizations with practical field security designed for mobility, access risk, and staff protection in dynamic environments.",
    narrative:
      "NGO teams often operate in changeable environments where staff safety, movement planning, and practical protection are as important as field efficiency.",
    detailCards: [
      {
        title: "Field mobility",
        text: "We support teams operating between locations with practical protection measures built around movement risk and ongoing field demands.",
      },
      {
        title: "Staff assurance",
        text: "Security planning helps safeguard personnel without slowing down operational delivery, community engagement, or mission-critical work.",
      },
      {
        title: "Adaptive protection",
        text: "Our service models adapt to changing conditions so organisations stay secure while remaining flexible and responsive.",
      },
    ],
    highlights: [
      "Security planning for field teams, remote assignments, and evolving operating conditions",
      "Support for staff continuity, movement coordination, and practical risk management",
      "Mission-aligned protection that stays operational without imposing unnecessary friction",
    ],
  },
  "our-clients/other-industries": {
    kicker: "Industrial support",
    title: "Other Industries",
    summary:
      "We work with diverse industrial and private-sector clients whose operations depend on safe movement, access control, and dependable site protection.",
    narrative:
      "Every industrial environment has its own risk profile and operational rhythm, which is why flexible guarding, access control, and site supervision remain essential.",
    detailCards: [
      {
        title: "Flexible coverage",
        text: "We build staffing and response plans around the realities of each site, from workforce movement to perimeter risk and visitor access.",
      },
      {
        title: "Perimeter assurance",
        text: "Guarding and control measures help manage safe access, reduce external risk, and strengthen everyday site discipline.",
      },
      {
        title: "Operational continuity",
        text: "Clear reporting and structured site leadership support client confidence and reduce operational disruption across day-to-day activity.",
      },
    ],
    highlights: [
      "Flexible staffing models that adapt to varied site risks and operational tempo",
      "Support for workforce safety, perimeter control, and disciplined visitor movement",
      "Strong site leadership and clear reporting that protect continuity in everyday operations",
    ],
  },
  "csr/community-projects": {
    kicker: "CSR",
    title: "Community Projects",
    summary:
      "SGA Security supports local initiatives that improve community wellbeing, strengthen resilience, and create safer public spaces.",
    narrative:
      "Responsible security is about more than guarding a site. It is also about showing up in the communities that rely on those sites every day.",
    detailCards: [
      {
        title: "Local impact",
        text: "Our community work is focused on practical benefits that strengthen safety, wellbeing, and public confidence in everyday spaces.",
      },
      {
        title: "Shared resilience",
        text: "We support initiatives that help communities become safer, more connected, and better prepared for real-world risks.",
      },
      {
        title: "Public trust",
        text: "Active community participation reinforces the broader social value of a security company operating with integrity and responsibility.",
      },
    ],
    highlights: [
      "Community partnership programmes designed around tangible local impact",
      "Support for education, wellbeing, and broader public resilience initiatives",
      "Practical outreach that extends beyond the perimeter of a site and into everyday community life",
    ],
  },
  "csr/sustainability": {
    kicker: "Impact",
    title: "Sustainability",
    summary:
      "Our sustainability focus reinforces responsible operations, stronger communities, and more thoughtful long-term value across the business.",
    narrative:
      "Sustainability in security means reducing unnecessary risk, improving resilience, and making sure operational decisions support lasting value for people and communities.",
    detailCards: [
      {
        title: "Responsible delivery",
        text: "We create operational systems and programmes that balance performance, risk control, and longer-term community benefit.",
      },
      {
        title: "Resilience planning",
        text: "Our approach supports safer, more resilient operations that can adapt to change without losing continuity or standards.",
      },
      {
        title: "Long-term value",
        text: "By operating with discipline and accountability, we help protect not just a site but the relationships and communities around it.",
      },
    ],
    highlights: [
      "Operational practices that reduce unnecessary risk and improve continuity",
      "Community-facing initiatives designed around resilience and lasting local benefit",
      "A practical approach to environmental and social stewardship across service operations",
    ],
  },
  "csr/school-support": {
    kicker: "Education",
    title: "School Support",
    summary:
      "SGA Security supports educational environments and community initiatives that improve safety, wellbeing, and access for learners and families.",
    narrative:
      "Schools function best when families, staff, and students feel safe, supported, and confident in the routines that keep the campus secure and calm.",
    detailCards: [
      {
        title: "Campus assurance",
        text: "We support safer access, calmer movement, and visible operational confidence around learning environments.",
      },
      {
        title: "Family confidence",
        text: "Parents and guardians are more at ease when a school has disciplined access control and professional, predictable security routines.",
      },
      {
        title: "Community wellbeing",
        text: "Safety initiatives around education create better conditions for learning, participation, and long-term local trust.",
      },
    ],
    highlights: [
      "Support that strengthens school safety, access, and public confidence",
      "Practical contributions that help communities feel more secure and better connected",
      "Programmes that reinforce safety, participation, and local wellbeing in education settings",
    ],
  },
  "contacts/contact-details": {
    kicker: "Contact",
    title: "Contact Details",
    summary:
      "Speak with our team to discuss your security requirements, site conditions, and the protection plan best suited to your property or organisation.",
    narrative:
      "The first conversation is where we understand the environment, the risks, and the type of protection needed for your site or organisation.",
    detailCards: [
      {
        title: "Site assessment",
        text: "We review the property, access points, and risk profile to recommend the right mix of guarding, response, and technical support.",
      },
      {
        title: "Security planning",
        text: "Every conversation is shaped around the real-world conditions of the site, your operating schedule, and your service expectations.",
      },
      {
        title: "Client guidance",
        text: "We help identify the most practical solution for your budget, operational style, and site priorities.",
      },
    ],
    highlights: [
      "Discuss your site risk profile and operational security requirements with specialists",
      "Speak to experts about guarding, access control, technical systems, and rapid response support",
      "Request a general assessment or a detailed security proposal for your property or site",
    ],
  },
  "contacts/customer-service": {
    kicker: "Support",
    title: "Customer Service",
    summary:
      "Our customer service team helps coordinate requests, answer operational questions, and keep the client experience clear, responsive, and accountable.",
    narrative:
      "Strong service delivery depends on clarity, speed, and continuity. We make the process easier for clients who need changes, updates, or operational support.",
    detailCards: [
      {
        title: "Operational coordination",
        text: "We connect site teams, management, and clients to resolve issues quickly and keep programmes running smoothly.",
      },
      {
        title: "Clear communication",
        text: "Every request is managed with practical follow-through and the type of responsiveness clients expect from a security partner.",
      },
      {
        title: "Service continuity",
        text: "We help maintain confidence by ensuring updates, concerns, and operational needs are tracked and actioned properly.",
      },
    ],
    highlights: [
      "Fast, practical communication for service requests, scheduling, and operational queries",
      "Coordination support for programme updates, adjustments, and long-term service follow-up",
      "A client-first approach focused on responsiveness, accountability, and clear issue management",
    ],
  },
  "contacts/whistleblowing": {
    kicker: "Ethics",
    title: "Whistleblowing",
    summary:
      "We maintain clear, confidential reporting channels so concerns can be raised safely and addressed responsibly without fear of retaliation.",
    narrative:
      "A strong security culture depends on trust and accountability. We make sure concerns can be raised safely, professionally, and without fear of retaliation.",
    detailCards: [
      {
        title: "Safe reporting",
        text: "Our reporting channels are designed to allow concerns to be raised privately and handled with respect for confidentiality.",
      },
      {
        title: "Fair review",
        text: "Reports are reviewed through accountable procedures that support evidence-led action and clear follow-up.",
      },
      {
        title: "Ethical culture",
        text: "We believe ethical conduct is essential to strong service, trust, and responsible operational standards across the business.",
      },
    ],
    highlights: [
      "Confidential channels for concerns related to conduct, standards, or operational integrity",
      "Protection for people who raise issues in good faith and in line with reporting procedures",
      "Clear escalation pathways and respect for fair, evidence-led responses to concerns",
    ],
  },
  "privacy-policy": {
    kicker: "Privacy",
    title: "Privacy Policy",
    summary:
      "We are committed to handling personal data responsibly, only for legitimate business purposes, and in line with privacy obligations and trust expectations.",
    narrative:
      "Trust is built not only through security service quality but also through responsible handling of personal data, client information, and communication records.",
    detailCards: [
      {
        title: "Responsible handling",
        text: "We limit collection and processing to information that is necessary, legitimate, and aligned with the purpose of our work.",
      },
      {
        title: "Confidentiality",
        text: "Client and employee information is protected through disciplined storage, access controls, and clear operational standards.",
      },
      {
        title: "Transparency",
        text: "We aim to be clear about how data is managed and how privacy obligations are met across client and business interactions.",
      },
    ],
    highlights: [
      "Responsible collection and use of personal data only where needed for legitimate operational reasons",
      "Clear standards for confidentiality, data handling, and secure processing across client interactions",
      "Commitment to transparency around how information is managed and protected",
    ],
  },
  "site-search": {
    kicker: "Search",
    title: "Site Search",
    summary:
      "Use the site search to quickly locate services, client sectors, company information, and contact points across the SGA website.",
    narrative:
      "A good website should help visitors move quickly from interest to action. Search supports simple access to the information people need most.",
    detailCards: [
      {
        title: "Fast access",
        text: "Search allows visitors to move quickly to the exact service, sector, or contact page they need without navigating the whole site manually.",
      },
      {
        title: "Business clarity",
        text: "People can find the most relevant information for their use case, whether they are exploring services or contacting the team.",
      },
      {
        title: "Visitor convenience",
        text: "Straightforward navigation reduces friction and makes it easier for potential clients to evaluate the business quickly.",
      },
    ],
    highlights: [
      "Fast access to service pages, company information, and primary contact routes",
      "Quick navigation for client sectors, news content, and operational support resources",
      "A simpler way for visitors to move between key business and support information",
    ],
  },
  "site-map": {
    kicker: "Explore",
    title: "Site Map",
    summary:
      "The site map gives a quick overview of the organisation’s main service lines, client sectors, and support pages across the website.",
    narrative:
      "The site map gives visitors a strong overview of how the business fits together and where to go for the right information fast.",
    detailCards: [
      {
        title: "Structured overview",
        text: "Visitors can quickly understand the company’s core service areas, client sectors, and support functions without confusion.",
      },
      {
        title: "Clear pathways",
        text: "The map makes it easy to move between company information, solutions, and contact routes with fewer dead ends.",
      },
      {
        title: "Better orientation",
        text: "A structured layout gives first-time visitors confidence and helps them navigate the business more clearly.",
      },
    ],
    highlights: [
      "A structured overview of the main service and company sections",
      "Clear paths to key business pages, client sectors, and support information",
      "Simple navigation for visitors who want a quick understanding of the site structure",
    ],
  },
  "careers/open-positions": {
    kicker: "Careers",
    title: "Open Positions",
    summary:
      "Explore current opportunities to join SGA Security and help deliver dependable protection across critical sites and public-facing operations.",
    narrative:
      "Our teams depend on disciplined professionals who can operate under pressure, protect people and property, and uphold high service standards in the field.",
    detailCards: [
      {
        title: "Operational roles",
        text: "We recruit for people-focused roles across site operations, supervision, client service, and response support.",
      },
      {
        title: "Professional standards",
        text: "Our work environment rewards accountability, sound judgement, and the ability to protect people with confidence and calm.",
      },
      {
        title: "Career growth",
        text: "We support employees with structured expectations, skill development, and the discipline needed for long-term professional growth.",
      },
    ],
    highlights: [
      "Roles across operations, supervision, client support, and site management",
      "Career opportunities in a standards-led, security-first environment",
      "A culture built on professionalism, accountability, and disciplined field operations",
    ],
  },
  "careers/recruitment": {
    kicker: "Talent",
    title: "Recruitment",
    summary:
      "We recruit professionals who demonstrate integrity, professionalism, and the ability to lead or support safe, reliable operations in the field.",
    narrative:
      "Good security professionals combine discipline, situational awareness, and professionalism. Our recruitment process looks for those strengths from day one.",
    detailCards: [
      {
        title: "Targeted hiring",
        text: "We assess people on the practical capabilities that matter most in the field: judgement, communication, reliability, and professionalism.",
      },
      {
        title: "Operational readiness",
        text: "Candidates are evaluated for role fit, readiness, and capability to work in high-responsibility, client-facing security environments.",
      },
      {
        title: "Long-term value",
        text: "We want people who are not only effective in the moment, but also invested in standards, learning, and client trust over time.",
      },
    ],
    highlights: [
      "Skills-based hiring aligned to security operations, site support, and client service needs",
      "Structured assessment and onboarding for role readiness and operational quality",
      "Focus on professionalism, accountability, and long-term capability building",
    ],
  },
  "careers/training": {
    kicker: "Development",
    title: "Training",
    summary:
      "Training is essential to maintaining disciplined operations, professional standards, and the response capability required in modern security work.",
    narrative:
      "Security effectiveness depends on continuous improvement. We invest in training so every staff member can perform with confidence, discipline, and sound judgement.",
    detailCards: [
      {
        title: "Operational capability",
        text: "Training strengthens field readiness, response quality, and the ability to handle risk with professionalism under pressure.",
      },
      {
        title: "Supervision standards",
        text: "We focus on the behaviours and routines that build consistency, accountability, and service quality across the team.",
      },
      {
        title: "Continuous learning",
        text: "Ongoing development keeps our personnel aligned with emerging risks, client expectations, and evolving best practice in security operations.",
      },
    ],
    highlights: [
      "Operational and emergency response training for field and site staff",
      "Professional development designed around service quality, supervision, and accountability",
      "Continuous learning to strengthen confidence, readiness, and performance across the organisation",
    ],
  },
  "news/advisory": {
    kicker: "News",
    title: "Advisory",
    summary:
      "Practical guidance and updates that help clients, partners, and stakeholders understand emerging security risks and operational best practice.",
    narrative:
      "Security decisions are stronger when they are informed by current risk realities, practical experience, and clear access to operational guidance.",
    detailCards: [
      {
        title: "Risk awareness",
        text: "We share relevant, practical insights that help clients, stakeholders, and teams understand emerging operational concerns and security challenges.",
      },
      {
        title: "Operational guidance",
        text: "Our advisory content is shaped around real site requirements, service quality, and the kinds of decisions businesses need to make quickly.",
      },
      {
        title: "Better planning",
        text: "Clear advice supports stronger protection planning, better resource allocation, and improved resilience across daily operations.",
      },
    ],
    highlights: [
      "Security insights relevant to current operational risk and site safety issues",
      "Practical updates for property, community, and business protection planning",
      "Information designed to support better decisions and stronger awareness of risk",
    ],
  },
  "news/blog": {
    kicker: "Insights",
    title: "Blog",
    summary:
      "Read commentaries and practical insights from the SGA team on safety, professional security practice, and operational resilience.",
    narrative:
      "The best security insight is practical. We write to help decision-makers understand what protects people, property, and operations in the real world.",
    detailCards: [
      {
        title: "Field perspective",
        text: "Our writing draws from operational experience and reflects the realities of protecting busy, complex, and high-risk environments.",
      },
      {
        title: "Actionable advice",
        text: "The focus is on useful takeaways that help teams make better security decisions without excess complexity or jargon.",
      },
      {
        title: "Trusted insight",
        text: "We translate practical security knowledge into clear thinking for clients, organisations, and stakeholders who need usable guidance.",
      },
    ],
    highlights: [
      "Thought leadership on security operations, response planning, and service quality",
      "Education around creating safer and more resilient operational environments",
      "Insights written to be clear, relevant, and immediately useful to real decision-makers",
    ],
  },
  "news/media": {
    kicker: "Media",
    title: "Media",
    summary:
      "Media updates and company stories highlight our work, service impact, and the ways SGA Security supports communities and clients across the region.",
    narrative:
      "The media section highlights the work behind the service: the teams, the projects, and the business impact of disciplined security operations.",
    detailCards: [
      {
        title: "Company stories",
        text: "We share updates that show how responsible, professional security protects people and supports communities in tangible ways.",
      },
      {
        title: "Operational impact",
        text: "Our stories focus on the results of good security planning, response capability, and a consistent service mindset.",
      },
      {
        title: "Public visibility",
        text: "We communicate clearly to build trust with clients, partners, and the wider public around the value of our operational work.",
      },
    ],
    highlights: [
      "Public updates on company activity, partnerships, and community-facing work",
      "Stories that highlight the real impact of operational security and professional service delivery",
      "Clear communication that supports trust with clients, partners, and the wider public",
    ],
  },
};

const defaultMetrics = [
  { value: "55+", label: "Years of regional experience" },
  { value: "20K+", label: "Personnel deployed across operations" },
  { value: "24/7", label: "Support mindset for critical sites" },
];

const getPageVariant = (slug: string) => {
  if (slug.startsWith("about-us")) return "about";
  if (slug.startsWith("services")) return "services";
  if (slug.startsWith("our-clients")) return "clients";
  if (slug.startsWith("csr")) return "csr";
  if (slug.startsWith("contacts")) return "contacts";
  if (slug.startsWith("careers")) return "careers";
  if (slug.startsWith("news")) return "news";
  if (slug === "privacy-policy") return "legal";
  return "utility";
};

const buildCardTitles = (variant: string, index: number) => {
  const library: Record<string, string[]> = {
    about: ["Operational leadership", "Field coverage", "Client assurance"],
    services: ["Service delivery", "Incident response", "Operational support"],
    clients: ["Risk profile", "Environment fit", "Continuity support"],
    csr: ["Community value", "Responsible operations", "Long-term impact"],
    contacts: ["Consultation", "Coordination", "Ongoing support"],
    careers: ["Role fit", "Skill development", "Professional standards"],
    news: ["Market insight", "Operational guidance", "Public visibility"],
    legal: ["Privacy framework", "Information handling", "Governance standards"],
    utility: ["Fast access", "Site clarity", "Visitor convenience"],
  };

  return library[variant]?.[index] ?? "Key detail";
};

function renderVariantBlocks(page: PageEntry, variant: string) {
  const cards = page.detailCards?.length
    ? page.detailCards
    : page.highlights.map((item, index) => ({
        title: buildCardTitles(variant, index),
        text: item,
      }));

  switch (variant) {
    case "about":
      return (
        <>
          <div className="about-layout">
            <div className="about-hero-panel section-page-card">
              <div>
                <span className="detail-tag">Our foundation</span>
                <h2>Built on trust, discipline, and local expertise.</h2>
              </div>
              <p>
                We deliver security leadership grounded in regional knowledge, trained personnel, and
                practical field execution across complex operating environments.
              </p>
            </div>

            <div className="detail-grid">
              {cards.map((card, index) => (
                <div key={`${card.title}-${card.text}`} className="detail-card emphasis-card about-card">
                  <span className="detail-tag">0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="split-story">
              <div className="section-page-card">
                <h2>Operating model</h2>
                <p>
                  Our approach combines disciplined field management, trained personnel, and accountable
                  supervision to protect high-value environments without creating unnecessary disruption.
                </p>
              </div>
              <div className="section-page-card">
                <h2>What defines us</h2>
                <ul>
                  {page.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      );

    case "services":
      return (
        <>
          <div className="service-layout">
            <div className="service-banner section-page-card">
              <div>
                <span className="detail-tag">Service framework</span>
                <h2>Protection plans shaped around your environment.</h2>
              </div>
              <p>
                Every service is structured to match the site, the risk level, and the operational pace
                of the environment it protects.
              </p>
            </div>

            <div className="service-journey">
              {cards.map((card, index) => (
                <div key={`${card.title}-${card.text}`} className="step-card service-step">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="section-page-card compact-list-panel">
              <h2>Service value</h2>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    case "clients":
      return (
        <>
          <div className="client-layout">
            <div className="client-spotlight section-page-card">
              <div>
                <span className="detail-tag">Sector fit</span>
                <h2>Security tailored to the realities of each operating environment.</h2>
              </div>
              <p>
                We match security design to the context, risks, and service expectations of each client
                category to keep operations protected without slowing them down.
              </p>
            </div>

            <div className="audience-grid">
              {cards.map((card) => (
                <div key={`${card.title}-${card.text}`} className="audience-card client-card">
                  <span className="detail-tag">Client fit</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="section-page-card tag-panel">
              <h2>Sector priorities</h2>
              <div className="tag-list">
                {page.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      );

    case "contacts":
      return (
        <>
          <div className="contact-layout">
            <div className="contact-callout section-page-card">
              <span className="detail-tag">Speak with us</span>
              <h2>Let’s plan the right protection for your site.</h2>
              <p>
                Start with a practical conversation about your environment, your risk profile, and the
                support model that will work best for your property or organisation.
              </p>
            </div>

            <div className="contact-stack">
              {cards.map((card) => (
                <div key={`${card.title}-${card.text}`} className="contact-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="section-page-card contact-panel">
              <h2>Need immediate support?</h2>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    case "csr":
      return (
        <>
          <div className="csr-layout">
            <div className="csr-hero section-page-card">
              <div>
                <span className="detail-tag">Community impact</span>
                <h2>Security that supports people beyond the perimeter.</h2>
              </div>
              <p>
                Responsible security means creating calmer, safer, more resilient spaces for the people
                who rely on them every day.
              </p>
            </div>

            <div className="impact-grid">
              {cards.map((card) => (
                <div key={`${card.title}-${card.text}`} className="impact-card">
                  <span className="detail-tag">Impact</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="section-page-card quote-panel">
              <h2>Community value</h2>
              <p>
                We aim to make the spaces around our operations safer, more resilient, and more trusted
                by the people who depend on them every day.
              </p>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    case "careers":
      return (
        <>
          <div className="career-layout">
            <div className="career-banner section-page-card">
              <div>
                <span className="detail-tag">Join the team</span>
                <h2>Professional growth in a security-first environment.</h2>
              </div>
              <p>
                We value people who bring judgement, discipline, and professionalism to demanding,
                client-facing operational roles.
              </p>
            </div>

            <div className="timeline-grid">
              {cards.map((card, index) => (
                <div key={`${card.title}-${card.text}`} className="timeline-card">
                  <span className="step-number">0{index + 1}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="section-page-card role-panel">
              <h2>Why join us</h2>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    case "news":
      return (
        <>
          <div className="news-layout">
            <div className="news-spotlight section-page-card">
              <div>
                <span className="detail-tag">Latest thinking</span>
                <h2>Insights shaped by operational reality and sector awareness.</h2>
              </div>
              <p>
                Our commentary translates field knowledge into actionable guidance for organisations and
                stakeholders who need practical security insight.
              </p>
            </div>

            <div className="news-grid">
              {cards.map((card) => (
                <article key={`${card.title}-${card.text}`} className="news-card">
                  <span className="detail-tag">Insight</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>

            <div className="section-page-card insight-panel">
              <h2>Latest thinking</h2>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );

    default:
      return (
        <>
          <div className="detail-grid">
            {cards.map((card) => (
              <div key={`${card.title}-${card.text}`} className="detail-card">
                <span className="detail-tag">{variant.toUpperCase()}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>

          {page.sections?.length ? (
            <div className="detail-grid section-split-grid">
              {page.sections.map((section) => (
                <div key={section.heading} className="section-page-card variant-panel">
                  <h2>{section.heading}</h2>
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="section-page-card variant-panel">
              <h2>Operational focus</h2>
              <ul>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      );
  }
}

export default async function DynamicMenuPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const currentSlug = slug.join("/");
  const page = pageCatalog[currentSlug];

  if (!page) {
    notFound();
  }

  const metrics: { value: string; label: string }[] = page.metrics ?? defaultMetrics;
  const variant = getPageVariant(currentSlug);
  const narrative =
    page.narrative ??
    "SGA Security helps organisations safeguard people, property, and daily operations with dependable field leadership, trained personnel, and structured response planning.";

  return (
    <main className="section-page-shell">
      <div className="section-page-header">
        <span className="section-page-kicker">{page.kicker}</span>
        <h1>{page.title}</h1>
        <p>{page.summary}</p>
      </div>

      {variant === "about" && (
        <div className="stat-grid" aria-label="Key business metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat-card">
              <span>{metric.value}</span>
              <small>{metric.label}</small>
            </div>
          ))}
        </div>
      )}

      <div className="section-page-content">
        <div className="section-page-card feature-story-card">
          <div>
            <h2>Why this matters</h2>
            <p>{narrative}</p>
          </div>
          <div className="mini-list">
            {page.highlights.map((item) => (
              <div key={item} className="mini-list-item">
                <span className="mini-bullet" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {renderVariantBlocks(page, variant)}
      </div>

      <div className="page-cta-banner">
        <div>
          <span className="page-cta-kicker">Ready to discuss your needs?</span>
          <h3>Let our specialists design a security solution that fits your environment.</h3>
        </div>
        <div className="page-cta-actions">
          <Link href="/contacts/contact-details" className="primary-btn section-link-btn">
            Request a site assessment
          </Link>
          <Link href="/" className="secondary-link-btn">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
