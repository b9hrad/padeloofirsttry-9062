import { useState } from "react";
import { ArrowUpRight, ArrowDown, Plus, Menu, X } from "lucide-react";
import { CourtMark } from "../components/court-mark";
import { BookingDialog } from "../components/booking-dialog";

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  function book() { setMenuOpen(false); setBookingOpen(true); }
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="top" className="header shell">
        <a className="wordmark" href="#top" aria-label="Padeloo home">padeloo<span className="wordmark-period">.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#courts">Courts</a><a href="#academy">Academy</a><a href="#club">Club</a>
          <button className="nav-book" onClick={book}>Book a court <ArrowUpRight size={15} /></button>
        </nav>
        <button className="mobile-menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {[['Courts', '#courts'], ['Academy', '#academy'], ['Club', '#club']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={18} /></a>)}
          <button onClick={book}>Book a court <ArrowUpRight size={18} /></button>
        </nav>}
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow hero-label">A place for padel.</p>
            <h1 id="hero-heading">Good games.<br />Good people.</h1>
            <p className="hero-description">A place to play, improve,<br className="mobile-break" /> and spend time well.</p>
            <div className="hero-actions"><a className="button light-button" href="#club">Explore the club <ArrowDown size={15} /></a><button className="text-action" onClick={book}>Book a court <ArrowUpRight size={15} /></button></div>
          </div>
          <figure className="hero-graphic"><CourtMark /><figcaption><span>A simple game.</span><span>Endless possibilities.</span></figcaption></figure>
          <div className="hero-bottom"><span>Play. Find your rhythm. Come back.</span><a href="#courts" aria-label="Discover the courts"><ArrowDown size={16} /></a></div>
        </section>
        <section id="courts" className="courts shell section-grid" aria-labelledby="courts-heading">
          <p className="eyebrow section-label"><span className="section-number">01</span> The courts</p>
          <div className="section-content">
            <h2 id="courts-heading">Room for a good game.</h2>
            <div className="courts-bottom"><p>Four players. One court. A little friendly competition.<br className="desktop-break" /> Make time for the game.</p><button className="text-action" onClick={book}>Book a court <ArrowUpRight size={16} /></button></div>
            <div className="availability-note"><span className="small-square" /><p>Court details and live availability will be added here.</p></div>
          </div>
        </section>
        <section id="club" className="club" aria-labelledby="club-heading">
          <div className="shell section-grid">
            <p className="eyebrow section-label"><span className="section-number">02</span> The club</p>
            <div className="section-content"><h2 id="club-heading">More than the match.</h2><div className="club-bottom"><p>We like the game. We like what comes with it, too.<br className="desktop-break" /> The familiar faces. The unexpected rally.<br className="desktop-break" /> The conversation that carries on after the score.<br /><br />That’s the idea behind Padeloo.</p><div className="club-mark"><CourtMark small /><span>On court. And beyond.</span></div></div></div>
          </div>
        </section>
        <section id="academy" className="programs shell section-grid" aria-labelledby="programs-heading">
          <h2 id="programs-heading" className="eyebrow section-label"><span className="section-number">03</span> Find your game</h2>
          <div className="section-content">
            <details className="program-row"><summary><span className="program-title">Academy</span><span className="program-description">A little guidance. A better game.</span><Plus size={19} /></summary><div className="program-expanded"><p>Coaching and player development, with room to learn at your own pace.</p><p className="muted">Coaching formats, schedules and registration details are not yet published.</p></div></details>
            <details className="program-row"><summary><span className="program-title">Events</span><span className="program-description">Meet on the court.</span><Plus size={19} /></summary><div className="program-expanded"><p>Tournaments, social games and club activities. Another reason to play together.</p><p className="muted">The event calendar and sign-up details will be added here.</p></div></details>
          </div>
        </section>
        <footer id="visit" className="footer shell">
          <div className="footer-main"><div><a className="wordmark footer-wordmark" href="#top" aria-label="Padeloo home">padeloo<span className="wordmark-period">.</span></a><p>See you on court.</p></div><div className="footer-location"><span className="eyebrow">Find us</span><p>Location & contact details<br />to be announced.</p></div><button className="text-action" onClick={book}>Book a court <ArrowUpRight size={16} /></button></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Padeloo</span><span>A game worth making time for.</span><span className="preview-note">Website preview</span></div>
        </footer>
      </main>
      <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
export default Index;
