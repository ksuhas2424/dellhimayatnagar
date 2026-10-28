import { useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1601976413337-29d1d9416374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800";
const repairImage =
  "https://images.unsplash.com/photo-1580090919269-12b0c103ba26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1800";

const services = [
  ["Hardware Repair", "Motherboard, screen, keyboard, battery, and component-level repairs by certified Dell technicians."],
  ["Software Support", "OS installation, driver updates, antivirus setup, data backup, and performance optimization."],
  ["AMC Plans", "Annual Maintenance Contracts for businesses — scheduled servicing, priority support, on-site visits."],
  ["Data Recovery", "Professional recovery of lost data from crashed drives, deleted files, or corrupted storage media."],
  ["Warranty Claims", "Authorized service center for Dell warranty claims and out-of-warranty repairs across all product lines."],
  ["Corporate Sales", "Bulk procurement, special pricing, and dedicated account management for businesses and institutions."],
];

const products = [
  ["Dell Laptops", "Inspiron, XPS, Vostro & Latitude series for every need — students, creators, and business professionals.", "Starting ₹32,000"],
  ["Dell Desktops", "OptiPlex, Vostro Desktop & Precision Tower workstations built for performance and reliability.", "Starting ₹28,000"],
  ["Dell Monitors", "Full HD, 4K, UHD, and curved displays from 19.5\" to 34\" for home, office, and professional use.", "Starting ₹8,500"],
  ["Accessories", "Genuine Dell keyboards, mice, bags, docking stations, chargers, and extended warranty plans.", "Starting ₹499"],
];

const reviews = [
  ["Rajesh Kumar", "IT Manager, Himayatnagar", "Excellent service and genuine Dell products. Got our office's 20 laptops configured within 2 days. Highly recommend for corporate procurement.", "RK"],
  ["Priya Sharma", "Student, Osmania University", "Bought my Inspiron 15 from here. The staff explained every model clearly, helped me pick what's best for my budget. Very professional experience.", "PS"],
  ["Mohammed Asif", "Graphic Designer", "Had my Dell XPS screen replaced. Quick turnaround, original parts used, fair pricing. Will only come here for any Dell service needs.", "MA"],
];

function Icon({ name }: { name: "pin" | "phone" | "mail" | "menu" | "close" }) {
  const paths = {
    pin: <><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    phone: <path d="M7.5 3.8 10 8 7.9 9.5c1.1 2.3 2.8 4 5.1 5.1l1.5-2.1 4.2 2.5-.9 3.8c-.2.8-.9 1.3-1.7 1.2C9.4 19.3 4.2 14.1 3.5 7.4c-.1-.8.4-1.5 1.2-1.7l2.8-.9Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{paths[name]}</svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const goTo = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span><Icon name="pin" />3-6-369/1, Street Number 1, Gagan Mahal, G1&101, Himayatnagar, Hyderabad — 500029</span>
          <span><Icon name="phone" />+91 8143917450&nbsp;&nbsp;|&nbsp;&nbsp;Mon–Sat: 11AM – 8PM</span>
        </div>
      </div>

      <header className="header">
        <div className="shell nav-wrap">
          <button className="brand" onClick={() => goTo("home")} aria-label="Dell Authorised Service Himayatnagar home">
            <span className="brand-logo">
              <img src="/dell-logo.png" alt="Dell Logo" className="brand-logo-img" />
            </span>
            <span><b>Dell Authorised Service</b><small>Himayatnagar · Since 2008 · Sales &amp; Service</small></span>
          </button>
          <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
            {["home", "products", "services", "about", "contact"].map((item) => (
              <button className={active === item ? "active" : ""} onClick={() => goTo(item)} key={item}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
          <a className="call-button" href="tel:8143917450"><Icon name="phone" />Call Now</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 48%, rgba(255,255,255,0.65) 100%), url("${heroImage}")` }}>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow pill">AUTHORIZED DELL CENTER · SINCE 2008 · HIMAYATNAGAR</span>
            <h1>Your Trusted<br /><em>Dell Partner</em><br />in Hyderabad</h1>
            <p>Genuine Dell products, expert repairs, and dedicated support — all under one roof at Himayatnagar since 2008.</p>
            <div className="actions">
              <button className="button primary" onClick={() => goTo("products")}>Explore Products</button>
              <button className="button outline" onClick={() => goTo("services")}>Our Services <span>→</span></button>
            </div>
          </div>
          <div className="stats">
            {[["16+", "YEARS IN BUSINESS"], ["15,000+", "CUSTOMERS SERVED"], ["500+", "CORPORATE CLIENTS"], ["98%", "SATISFACTION RATE"]].map(([value, label]) => (
              <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="shell">
          {["Authorized Dell Sales Center", "Certified Service Technicians", "Genuine Dell Parts & Warranty", "EMI Available on All Products"].map((item) => <span key={item}><b>✓</b>{item}</span>)}
        </div>
      </div>

      <section id="products" className="section products-section">
        <div className="shell">
          <span className="eyebrow">WHAT WE SELL</span>
          <h2>Dell Products We Carry</h2>
          <p className="section-lead">From entry-level to enterprise-grade — we stock the full Dell lineup with competitive pricing and genuine warranty.</p>
          <div className="product-grid">
            {products.map(([title, text, price]) => (
              <article className="product-card" key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <div>
                  <div className="price">{price}</div>
                  <button onClick={() => goTo("contact")}>Enquire now <span>→</span></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-banner" style={{ backgroundImage: `linear-gradient(rgba(240,247,252,0.92), rgba(240,247,252,0.92)), url("${repairImage}")` }}>
        <div><h2>Certified. Trusted. Local.</h2><p>Our trained technicians handle every Dell product with<br />manufacturer-grade care using genuine spare parts.</p></div>
      </section>

      <section id="services" className="section services-section">
        <div className="shell">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Services We Offer</h2>
          <p className="section-lead">Comprehensive Dell support from warranty repairs to annual maintenance<br />contracts for businesses.</p>
          <div className="service-grid">
            {services.map(([title, text], index) => <article className={index % 2 === 0 ? "service-card tinted" : "service-card"} key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="shell">
          <span className="eyebrow">CUSTOMER REVIEWS</span><h2>What Our Customers Say</h2>
          <div className="review-grid">
            {reviews.map(([name, role, quote, initials]) => (
              <article className="review-card" key={name}>
                <div className="stars">★★★★★</div><p>“{quote}”</p>
                <div className="reviewer"><span>{initials}</span><div><b>{name}</b><small>{role}</small></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div>
            <span className="eyebrow">ABOUT US</span><h2>Himayatnagar’s Go-To Dell<br />Service Since 2008</h2>
            <p>DELL Himayatnagar was established in 2008 with a mission to make genuine Dell technology accessible to individuals, students, and businesses in Hyderabad&apos;s heart. Over 16 years, we have grown into the region&apos;s most trusted Dell-authorized partner.</p>
            <p>Our team of Dell-certified engineers handles everything from simple accessories to complex motherboard repairs. We serve walk-in customers, corporate accounts, educational institutions, and government organizations alike.</p>
            <div className="about-stats">
              {[["16+", "YEARS IN BUSINESS"], ["15,000+", "CUSTOMERS SERVED"], ["500+", "CORPORATE CLIENTS"], ["98%", "SATISFACTION RATE"]].map(([value, label]) => <div key={label}><b>{value}</b><span>{label}</span></div>)}
            </div>
          </div>
          <div className="about-photo"><img src={heroImage} alt="Modern Dell laptop workspace" /><span><b>Dell</b><small>Authorized Partner</small></span></div>
        </div>
      </section>

      <section className="cta">
        <h2>Need a Dell Product or Repair?</h2><p>Walk in today or call us — we&apos;ll help you find the right solution at the right price.</p>
        <div className="actions centered"><a className="button primary" href="tel:8143917450"><Icon name="phone" />+91 8143917450</a><a className="button outline" href="https://wa.me/918143917450">WhatsApp Us</a></div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="shell">
          <span className="eyebrow">FIND US</span><h2>Visit Dell Authorised Service</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div><h3>Store Address</h3><p>3-6-369/1, Street Number 1, Gagan Mahal, G1&amp;101<br />Himayatnagar, Hyderabad<br />Telangana — 500029</p></div>
              <div><h3>Business Hours</h3><p className="hours"><span>Monday – Friday</span><b>11:00 AM – 8:00 PM</b><span>Saturday</span><b>11:00 AM – 7:00 PM</b><span>Sunday</span><b className="closed">Closed</b></p></div>
              <div><h3>Phone & Email</h3><p><a href="tel:8143917450">+91 8143917450</a><br /><a href="mailto:dellexclusivestore7@gmail.com">dellexclusivestore7@gmail.com</a></p></div>

            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-top"><div><b>Dell Authorised Service Himayatnagar</b><span>Authorized Dell Sales & Service Center · Since 2008</span></div><nav>{["Home", "Products", "Services", "About", "Contact"].map((item) => <button key={item} onClick={() => goTo(item.toLowerCase())}>{item}</button>)}</nav></div>
        <div className="shell footer-bottom"><span>© 2024 Dell Authorised Service Himayatnagar. All rights reserved.</span><span>Authorized Dell Reseller & Service Partner · Hyderabad, Telangana</span></div>
      </footer>
    </main>
  );
}
