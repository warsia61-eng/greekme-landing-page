import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Check,
  Plus,
} from "lucide-react";

const menu = [
  "GYROS",
  "SOULAKI",
  "TZATZIKI",
  "PIZZA + DIPS",
  "SALAD & BOWLS",
  "SIDES",
  "HALLOUMI",
];

const products = [
  ["GYROS!", "GREEK STREET ENERGY.", "left", "#2b9b64"],
  ["SOULAKI!", "CHARGRILLED. BIG FLAVOUR.", "right", "#29448b"],
  ["TZATZIKI!", "COOL. CREAMY. CLASSIC.", "left", "#29448b"],
  ["PIZZA + DIPS", "A GREEK TWIST ON COMFORT.", "right", "#f0b33f"],
  ["SALAD & BOWLS", "FRESH. BRIGHT. LOADED.", "left", "#ef7e35"],
  ["SIDES", "SMALL PLATES. BIG ATTITUDE.", "right", "#18aeb7"],
  ["HALLOUMI!", "GRILLED. GOLDEN. GREEK.", "left", "#e65a58"],
];

const navItems = [
  ["Food", "#food"],
  ["Menu", "#menu"],
  ["Our Story", "#our-story"],
  ["Franchise", "#franchise"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function Button({ children, dark = false, outline = false }) {
  return (
    <button
      className={[
        "brand-button",
        dark ? "brand-button-dark" : "",
        outline ? "brand-button-outline" : "",
      ].join(" ")}
    >
      <span>{children}</span>
      <ArrowRight size={14} strokeWidth={2.5} />
    </button>
  );
}

function Img({ className = "", light = false }) {
  return (
    <div
      className={`image-placeholder ${light ? "image-placeholder-light" : ""} ${className}`}
      aria-label="Image placeholder"
    >
      <span>IMAGE PLACEHOLDER</span>
    </div>
  );
}

function Ticker({ light = false }) {
  return (
    <div className={`ticker ${light ? "ticker-light" : ""}`}>
      <div className="ticker-track">
        {[...menu, ...menu].map((item, index) => (
          <span key={`${item}-${index}`}>
            {item}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="top-strip">
        <div className="site-container top-strip-inner">
          <span>GREEK FOOD. GREEK BUSINESS.</span>
          <span>ONE BRAND. ONE KITCHEN.</span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="logo" aria-label="Greek home">
            GREEK<span>.</span>
          </a>

          <nav className="desktop-nav">
            {navItems.map(([label, href]) => (
              <a href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="#contact">
            PARTNER WITH US
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="hero noise">
      <div className="hero-visual">
        <Img />
        <div className="hero-visual-shade" />
      </div>

      <div className="site-container hero-content">
        <div className="hero-copy">
          <p className="eyebrow cyan">THE GREEK FOOD BUSINESS.</p>
          <h1>
            GREEK FOOD.
            <br />
            <span>GREEK BUSINESS.</span>
          </h1>
          <p className="hero-description">
            A bold Greek food brand built for hungry people, ambitious
            operators and the next generation of Greek hospitality.
          </p>

          <div className="button-row">
            <Button>EXPLORE THE BRAND</Button>
            <Button dark>PARTNER WITH US</Button>
          </div>

          <div className="hero-modes">
            {["DINE IN", "DELIVERY", "TAKEAWAY", "FRANCHISE"].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-tabs">
        <span>FOOD</span>
        <span>MENU</span>
        <span>OUR STORY</span>
        <span>FRANCHISE</span>
        <span>FAQ</span>
        <span>CONTACT</span>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <>
      <Ticker />
      <section className="delivery section-dark">
        <div className="site-container split-section">
          <div className="split-copy">
            <p className="eyebrow cyan">GREEK FOOD. MADE FOR DELIVERY.</p>
            <h2>
              BUILT TO
              <br />
              TRAVEL.
              <br />
              <span>MADE TO CRAVE.</span>
            </h2>
            <p>
              The same punchy Greek flavours, packaged for busy city life.
              Fast, fresh and designed to arrive looking as good as it tastes.
            </p>
            <Button>SEE THE MENU</Button>
          </div>
          <Img className="delivery-image" />
        </div>
      </section>
    </>
  );
}

function OneBrand() {
  return (
    <section className="one-brand noise">
      <div className="one-brand-bg">GREEK</div>
      <div className="one-brand-copy">
        <p className="eyebrow cyan">ONE IDEA, MANY FORMATS</p>
        <h2>
          ONE BRAND. ONE KITCHEN.
          <br />
          ONE BIG GREEK IDEA.
        </h2>
        <p>
          A single visual and food language that can move from street food to
          delivery, from neighbourhood sites to a scalable franchise network.
        </p>
      </div>
    </section>
  );
}

function MealPromise() {
  const cards = [
    ["01", "A REAL MEAL", "Built around generous Greek portions."],
    ["02", "A READY SYSTEM", "Simple formats designed to scale."],
    ["03", "A STRONG BRAND", "Recognisable from street to screen."],
  ];

  return (
    <section className="meal-promise">
      <div className="site-container meal-grid">
        <div>
          <p className="eyebrow white">NOT JUST A MEAL.</p>
          <h2>
            A READY-TO-RUN
            <br />
            FOOD BRAND.
          </h2>
        </div>
        <Img className="meal-image" />
        <div className="promise-cards">
          {cards.map(([number, title, body]) => (
            <div className="promise-card" key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="menu" className="menu-section">
      <div className="site-container">
        <p className="eyebrow blue">GREEK / MENU</p>
        <h2 className="section-title">
          GREEK. FRESH.
          <br />
          FULL GREEK ENERGY.
        </h2>
        <p className="section-intro">
          A modular menu system built around the dishes people know, the
          flavours they love and the formats that scale.
        </p>

        <div className="product-list">
          {products.map(([name, tag, side, color], index) => (
            <article className="product-row" key={name}>
              {side === "left" ? (
                <>
                  <div className="product-copy">
                    <div className="product-rule" style={{ background: color }} />
                    <span className="product-number">0{index + 1}</span>
                    <h3>{name}</h3>
                    <h4>{tag}</h4>
                    <p>
                      A menu family with bold Greek personality, simple
                      operations and a visual system made to work across
                      packaging, menus, counters and digital channels.
                    </p>
                    <div className="tag-row">
                      <span>SIGNATURE</span>
                      <span>FRESH</span>
                    </div>
                  </div>
                  <Img className="product-image" light />
                </>
              ) : (
                <>
                  <Img className="product-image" light />
                  <div className="product-copy">
                    <div className="product-rule" style={{ background: color }} />
                    <span className="product-number">0{index + 1}</span>
                    <h3>{name}</h3>
                    <h4>{tag}</h4>
                    <p>
                      A menu family with bold Greek personality, simple
                      operations and a visual system made to work across
                      packaging, menus, counters and digital channels.
                    </p>
                    <div className="tag-row">
                      <span>SIGNATURE</span>
                      <span>GREEK</span>
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="center-button">
          <Button dark>MORE GREEK. MORE TO LOVE.</Button>
        </div>
      </div>
    </section>
  );
}

function Kitchen() {
  return (
    <section id="food" className="kitchen section-dark">
      <div className="site-container">
        <p className="eyebrow cyan">THE OPERATION</p>
        <h2 className="section-title dark-title">
          YOUR KITCHEN.
          <br />
          <span>GREEKIE READY.</span>
        </h2>

        <div className="kitchen-grid">
          <div className="benefits-card">
            <p className="micro-label">WHAT YOU GET</p>
            <ul>
              {[
                "A proven Greek menu system",
                "Prep and service standards",
                "Brand assets & templates",
                "Training and launch support",
                "Digital-first customer journey",
              ].map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Img className="kitchen-image" />
        </div>
      </div>
    </section>
  );
}

function Growth() {
  const stages = [
    ["01", "START STRONG", "Launch with a clear system."],
    ["02", "BUILD CONFIDENCE", "Learn the operation."],
    ["03", "MAKE NOISE", "Build a local following."],
    ["04", "GO BIGGER", "Scale with support."],
  ];

  return (
    <section id="franchise" className="growth">
      <div className="site-container">
        <p className="eyebrow orange">GROWTH</p>
        <h2 className="section-title">
          WE GROW
          <br />
          WHEN YOU GROW.
        </h2>

        <div className="growth-grid">
          {stages.map(([number, title, body]) => (
            <article key={number}>
              <small>{number}</small>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="partnership-bar">
          <div>
            <p className="eyebrow cyan">READY WHEN YOU ARE</p>
            <h3>LET&apos;S TALK PARTNERSHIP.</h3>
          </div>
          <Button>START A CONVERSATION</Button>
        </div>
      </div>
    </section>
  );
}

function Brand() {
  const items = [
    "BRAND IDENTITY",
    "MENU SYSTEM",
    "SITE DESIGN",
    "LAUNCH KIT",
    "PACKAGING",
    "SOCIAL TEMPLATES",
    "TRAINING",
    "SUPPORT",
  ];

  return (
    <section id="our-story" className="brand-system noise section-dark">
      <div className="site-container">
        <p className="eyebrow yellow">THE BRAND</p>
        <h2 className="section-title dark-title">
          WE BUILD THE BRAND.
          <br />
          <span>YOU RUN THE KITCHEN.</span>
        </h2>

        <div className="brand-grid">
          {items.map((item, index) => (
            <div key={item}>
              <small>0{index + 1}</small>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Powered() {
  return (
    <section className="powered">
      <div className="site-container split-section">
        <div className="powered-copy">
          <p className="eyebrow black">POWERED BY</p>
          <h2>FOOD-VERSE.</h2>
          <p>
            The operating layer behind modern food brands — bringing design,
            digital and growth together.
          </p>
          <Button dark>FIND OUT MORE</Button>
        </div>
        <Img className="powered-image" light />
      </div>
    </section>
  );
}

function FAQ() {
  const questions = [
    "What does a Greek franchise include?",
    "How much does it cost to launch?",
    "Do you provide training?",
    "Can I use my existing kitchen?",
    "Where are you looking to grow?",
    "How quickly can we launch?",
  ];

  return (
    <section id="faq" className="faq">
      <div className="site-container faq-inner">
        <p className="eyebrow blue">GOT QUESTIONS?</p>
        <h2 className="section-title">
          WE&apos;VE GOT
          <br />
          ANSWERS.
        </h2>

        <Accordion.Root type="single" collapsible className="faq-list">
          {questions.map((question, index) => (
            <Accordion.Item
              key={question}
              value={`question-${index}`}
              className="faq-item"
            >
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger">
                  <span>{question}</span>
                  <Plus className="faq-plus" size={17} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                We&apos;ll add the final business answer here once the content
                and functionality are connected.
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-dark">
      <div className="site-container contact-grid">
        <div>
          <p className="eyebrow cyan">READY TO GO GREEK?</p>
          <h2 className="section-title dark-title">
            LET&apos;S MAKE
            <br />
            <span>IT HAPPEN.</span>
          </h2>
          <p className="contact-copy">
            Tell us a little about your idea and we&apos;ll take it from there.
          </p>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="YOUR NAME" />
          <input placeholder="YOUR EMAIL" type="email" />
          <input placeholder="PHONE" />
          <textarea placeholder="TELL US ABOUT YOUR IDEA" />
          <Button>SEND ENQUIRY</Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <Ticker light />
      <footer className="footer">
        <div className="site-container footer-grid">
          <div>
            <a href="#top" className="logo footer-logo">
              GREEK<span>.</span>
            </a>
            <p>
              Greek food. Greek business.
              <br />
              One brand, one kitchen, one big Greek idea.
            </p>
          </div>

          <div className="footer-links">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>

          <div className="footer-meta">
            <span>© 2026 GREEK.</span>
            <span>BUILT FOR THE NEXT BIG GREEK IDEA.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Delivery />
        <OneBrand />
        <MealPromise />
        <Products />
        <Kitchen />
        <Growth />
        <Brand />
        <Powered />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
