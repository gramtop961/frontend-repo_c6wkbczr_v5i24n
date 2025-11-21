import { useEffect, useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

const NAV = [
  { to: '/#leistungen', label: 'Leistungen' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])
  return null
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <img src="https://i.postimg.cc/8crDjzm8/Logo-Quer-schwarz.png" alt="Eric Meier" className="h-10 w-auto"/>
        </a>
        <nav className="backdrop-blur-sm rounded-full px-6 py-3 bg-white/40 shadow-sm">
          <ul className="flex items-center gap-8 text-[15px]">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:opacity-70 transition-opacity">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full select-none">
      <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center text-white">
        <h1 className="text-[56px] leading-none md:text-[92px] font-display tracking-wide fade-in">Eric Meier</h1>
        <p className="mt-2 text-sm md:text-base opacity-90 fade-in-delayed">Steinbildhauer & Steinmetz</p>
        <a href="#kontakt" className="mt-6 inline-block bg-[#767f62] hover:bg-[#5f6750] text-white px-8 py-3 rounded-full transition-all float-up">Anfrage senden</a>
      </div>
    </section>
  )
}

function LeistungenPreview() {
  const items = [
    { title: 'Natursteinprojekte / Reliefarbeiten', img: 'https://i.postimg.cc/5tMyYzQx/Fav1-stilleben.jpg', link: '/leistungen/natursteinprojekte-reliefarbeiten' },
    { title: 'Grabmal', img: 'https://i.postimg.cc/DzdZqz1W/Fav4-arbeiten.jpg', link: '/leistungen/grabmal' },
    { title: 'Skulpturen & Spezial', img: 'https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg', link: '/leistungen/skulpturen-spezial' },
    { title: 'Natursteinmauer / Gartengestaltung', img: 'https://karpfgarten.ch/images/1200/12533466/natursteinmauer-gaertner-freiamt.webp', link: '/leistungen/natursteinmauer-gartengestaltung' },
  ]
  return (
    <section id="leistungen" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-5xl md:text-6xl font-display">Leistungen</h2>
        <Link to="/leistungen" className="text-sm underline">Alle ansehen</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <Link key={it.title} to={it.link} className="group block overflow-hidden rounded-2xl bg-[#f8f9fa]">
            <img src={it.img} alt={it.title} className="w-full h-60 object-cover transition-opacity duration-700 opacity-0 group-[.loaded]:opacity-100" onLoad={(e)=>e.currentTarget.parentElement?.classList.add('loaded')} />
            <div className="p-4">
              <h3 className="text-2xl font-display">{it.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section id="ueber-uns" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-5xl md:text-6xl font-display mb-4">Über mich</h2>
        <p className="text-sm md:text-base leading-7 text-[#252525]/80">Mein Name ist Eric Meier und ich bin leidenschaftlicher Steinbildhauer und Künstler. In meiner Arbeit vereine ich traditionelle Handwerkskunst mit reduzierter, zeitloser Formensprache. Jedes Werk ist ein Unikat – präzise, ruhig und von der natürlichen Schönheit des Materials geprägt.</p>
        <Link to="/ueber-uns" className="mt-6 inline-block underline text-sm">Mehr erfahren</Link>
      </div>
      <div className="order-1 md:order-2">
        <img src="https://i.postimg.cc/bwndwgr8/Fav-4-ich.jpg" alt="Über uns" className="w-full h-[420px] object-cover rounded-2xl shadow-sm opacity-0 fade-in" onLoad={(e)=>e.currentTarget.classList.remove('opacity-0')} />
      </div>
    </section>
  )
}

function InstagramFeed() {
  // Placeholder grid with the provided main images to simulate an IG feel
  const imgs = [
    'https://i.postimg.cc/zvQcbZk2/image3.jpg',
    'https://i.postimg.cc/Wzzy1b0X/image1.jpg',
    'https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg',
    'https://i.postimg.cc/BvGbLFPZ/Fav1-werkstu-ck.jpg',
    'https://i.postimg.cc/vTTKZH5q/image2.jpg',
    'https://i.postimg.cc/Wzzy1bML/image7.jpg',
  ]
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-5xl md:text-6xl font-display">Instagram</h2>
        <a href="https://www.instagram.com/e_m_steinbildhauer/" target="_blank" rel="noreferrer" className="text-sm underline">Folgen</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {imgs.map((src,i)=>(
          <img key={i} src={src} alt="Instagram" className="w-full aspect-square object-cover rounded-lg opacity-0 fade-in" onLoad={(e)=>e.currentTarget.classList.remove('opacity-0')} />
        ))}
      </div>
    </section>
  )
}

function KontaktSection() {
  const [status, setStatus] = useState('')
  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sende...')
    const fd = new FormData(e.currentTarget)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      message: fd.get('message'),
    }
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const r = await fetch(`${base}/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      })
      if (!r.ok) throw new Error('Fehler beim Senden')
      setStatus('Danke! Wir haben Ihre Anfrage erhalten.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Leider ist ein Fehler aufgetreten. Bitte später erneut versuchen.')
    }
  }
  return (
    <section id="kontakt" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-5xl md:text-6xl font-display mb-6">Kontakt</h2>
      <p className="text-sm md:text-base mb-10">Eric Meier Steinbildhauer · Fahrwangerstrasse 20, 5614 Sarmenstorf · +41 79 664 31 19 · atelier@ericmeier.ch</p>
      <form onSubmit={submit} className="grid grid-cols-1 gap-4">
        <input name="name" placeholder="Name" className="border rounded-lg px-4 py-3" required />
        <input type="email" name="email" placeholder="E-Mail" className="border rounded-lg px-4 py-3" required />
        <input name="phone" placeholder="Telefon (optional)" className="border rounded-lg px-4 py-3" />
        <textarea name="message" placeholder="Nachricht" rows="5" className="border rounded-lg px-4 py-3" required />
        <button className="justify-self-start bg-[#767f62] hover:bg-[#5f6750] text-white px-6 py-3 rounded-full">Senden</button>
      </form>
      {status && <p className="mt-4 text-sm">{status}</p>}
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#f8f9fa] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <img src="https://i.postimg.cc/8crDjzm8/Logo-Quer-schwarz.png" alt="Logo" className="h-14 w-auto mb-4" />
          <p className="text-sm">Minimalistische Stein-Kunst, präzise gefertigt in Sarmenstorf. Skulpturen, Grabmale, Natursteinprojekte.</p>
        </div>
        <div>
          <h4 className="text-2xl font-display mb-2">Kontakt</h4>
          <ul className="text-sm space-y-1">
            <li>Fahrwangerstrasse 20, 5614 Sarmenstorf</li>
            <li>+41 79 664 31 19</li>
            <li><a className="underline" href="mailto:atelier@ericmeier.ch">atelier@ericmeier.ch</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-display mb-2">Schnellzugriff</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/impressum" className="underline">Impressum</Link></li>
            <li><Link to="/datenschutz" className="underline">Datenschutz</Link></li>
            <li><Link to="/agb" className="underline">AGB</Link></li>
            <li><a className="underline" href="/sitemap.xml" target="_blank" rel="noreferrer">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-display mb-2">Social</h4>
          <a href="https://www.instagram.com/e_m_steinbildhauer/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 underline text-sm">
            <img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338392_960_720.png" alt="Instagram" className="h-5 w-5" />Instagram
          </a>
        </div>
      </div>
      <div className="text-center text-xs py-6 border-t">© {year} Eric Meier – Alle Rechte vorbehalten.</div>
    </footer>
  )
}

function CookieBanner() {
  const [visible, setVisible] = useState(() => localStorage.getItem('cookie_ok') !== '1')
  if (!visible) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white border shadow-lg rounded-xl p-4 max-w-xl w-[92vw]">
      <p className="text-sm">Wir verwenden Cookies, um die Website zu optimieren. Mit der Nutzung stimmen Sie der Verwendung zu.</p>
      <div className="mt-3 flex gap-3">
        <button onClick={()=>{localStorage.setItem('cookie_ok','1');setVisible(false)}} className="bg-[#767f62] text-white text-sm px-4 py-2 rounded-full">Akzeptieren</button>
        <a href="/datenschutz" className="text-sm underline">Mehr erfahren</a>
      </div>
    </div>
  )
}

function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </div>
  )
}

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <LeistungenPreview />
      <AboutPreview />
      <InstagramFeed />
      <KontaktSection />
    </PageLayout>
  )
}

function TextPage({ title, children, headerImg }) {
  return (
    <PageLayout>
      <section className="relative h-[46vh] min-h-[360px] w-full">
        <img src={headerImg} alt="Header" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-end pb-10">
          <h1 className="text-white text-6xl font-display">{title}</h1>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16 text-sm md:text-base leading-7 text-[#252525]/85">
        {children}
      </section>
    </PageLayout>
  )
}

function LeistungenListePage() {
  const items = [
    { title: 'Natursteinprojekte / Reliefarbeiten', img: 'https://i.postimg.cc/5tMyYzQx/Fav1-stilleben.jpg', link: '/leistungen/natursteinprojekte-reliefarbeiten' },
    { title: 'Grabmal', img: 'https://i.postimg.cc/DzdZqz1W/Fav4-arbeiten.jpg', link: '/leistungen/grabmal' },
    { title: 'Skulpturen & Spezial', img: 'https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg', link: '/leistungen/skulpturen-spezial' },
    { title: 'Natursteinmauer / Gartengestaltung', img: 'https://karpfgarten.ch/images/1200/12533466/natursteinmauer-gaertner-freiamt.webp', link: '/leistungen/natursteinmauer-gartengestaltung' },
  ]
  return (
    <TextPage title="Leistungen" headerImg="https://i.postimg.cc/Gp1t8DTG/Fav3-arbeiten.jpg">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <Link key={it.title} to={it.link} className="group block overflow-hidden rounded-2xl bg-[#f8f9fa]">
            <img src={it.img} alt={it.title} className="w-full h-60 object-cover transition-opacity duration-700 opacity-0 group-[.loaded]:opacity-100" onLoad={(e)=>e.currentTarget.parentElement?.classList.add('loaded')} />
            <div className="p-4">
              <h3 className="text-2xl font-display">{it.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </TextPage>
  )
}

function LeistungDetail({ title, img, children }) {
  return (
    <TextPage title={title} headerImg={img}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-sm md:text-base leading-7">
          {children}
        </div>
        <div className="space-y-3">
          <img src={img} alt={title} className="w-full aspect-[4/3] object-cover rounded-lg" />
        </div>
      </div>
    </TextPage>
  )
}

function PortfolioPage() {
  const items = [
    { title: 'Katz und Maus', img: 'https://i.postimg.cc/zvQcbZk2/image3.jpg', link: '/portfolio/katz-und-maus' },
    { title: 'Abschlussarbeit', img: 'https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg', link: '/portfolio/abschlussarbeit' },
    { title: 'Alp-Brunnen', img: 'https://i.postimg.cc/Wzzy1b0X/image1.jpg', link: '/portfolio/alp-brunnen' },
    { title: 'Gesicht', img: 'https://i.postimg.cc/BvGbLFPZ/Fav1-werkstu-ck.jpg', link: '/portfolio/gesicht' },
  ]
  return (
    <TextPage title="Portfolio" headerImg="https://i.postimg.cc/Gp1t8DTG/Fav3-arbeiten.jpg">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it)=>(
          <Link key={it.title} to={it.link} className="group block overflow-hidden rounded-2xl bg-[#f8f9fa]">
            <img src={it.img} alt={it.title} className="w-full h-60 object-cover transition-opacity duration-700 opacity-0 group-[.loaded]:opacity-100" onLoad={(e)=>e.currentTarget.parentElement?.classList.add('loaded')} />
            <div className="p-4"><h3 className="text-2xl font-display">{it.title}</h3></div>
          </Link>
        ))}
      </div>
    </TextPage>
  )
}

function PortfolioDetail({ title, img, gallery=[] }) {
  return (
    <TextPage title={title} headerImg={img}>
      <p className="mb-8">Ein Einblick in meine Arbeit – Material, Form und Handwerk im Dialog.</p>
      <div className="grid md:grid-cols-3 gap-4">
        <img src={img} alt={title} className="w-full aspect-[4/3] object-cover rounded-lg" />
        {gallery.map((g,i)=>(<img key={i} src={g} alt="Detail" className="w-full aspect-[4/3] object-cover rounded-lg" />))}
      </div>
    </TextPage>
  )
}

function LegalPage({ type }) {
  const common = {
    impressum: {
      title: 'Impressum',
      text: `Verantwortlich: Eric Meier, Fahrwangerstrasse 20, 5614 Sarmenstorf. Telefon: +41 79 664 31 19, E-Mail: atelier@ericmeier.ch.`
    },
    datenschutz: {
      title: 'Datenschutz',
      text: `Wir verarbeiten personenbezogene Daten gemäss DSGVO und Schweizer DSG nur soweit notwendig. Ihre Daten werden zur Bearbeitung von Anfragen genutzt. Sie haben jederzeit das Recht auf Auskunft, Berichtigung und Löschung.`
    },
    agb: {
      title: 'AGB',
      text: `Angebote freibleibend. Zahlungsbedingungen nach Vereinbarung. Eigentumsvorbehalt bis zur vollständigen Bezahlung. Gerichtsstand ist der Sitz des Unternehmens.`
    }
  }
  const page = common[type]
  return (
    <TextPage title={page.title} headerImg="https://i.postimg.cc/Gp1t8DTG/Fav3-arbeiten.jpg">
      <p>{page.text}</p>
    </TextPage>
  )
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leistungen" element={<LeistungenListePage />} />
        <Route path="/leistungen/natursteinprojekte-reliefarbeiten" element={<LeistungDetail title="Natursteinprojekte / Reliefarbeiten" img="https://i.postimg.cc/5tMyYzQx/Fav1-stilleben.jpg">Reduzierte Formen, präzise Gravuren und Reliefs, die mit Licht und Schatten spielen.</LeistungDetail>} />
        <Route path="/leistungen/grabmal" element={<LeistungDetail title="Grabmal" img="https://i.postimg.cc/DzdZqz1W/Fav4-arbeiten.jpg">Individuelle Grabmale mit würdiger, schlichter Gestaltung – beständig und zeitlos.</LeistungDetail>} />
        <Route path="/leistungen/skulpturen-spezial" element={<LeistungDetail title="Skulpturen & Spezial" img="https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg">Unikate, die Material, Handwerk und Idee in Balance bringen.</LeistungDetail>} />
        <Route path="/leistungen/natursteinmauer-gartengestaltung" element={<LeistungDetail title="Natursteinmauer / Gartengestaltung" img="https://karpfgarten.ch/images/1200/12533466/natursteinmauer-gaertner-freiamt.webp">Struktur und Ruhe im Aussenraum – Naturstein als Architektur der Landschaft.</LeistungDetail>} />

        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/katz-und-maus" element={<PortfolioDetail title="Katz und Maus" img="https://i.postimg.cc/zvQcbZk2/image3.jpg" />} />
        <Route path="/portfolio/abschlussarbeit" element={<PortfolioDetail title="Abschlussarbeit" img="https://i.postimg.cc/hGqvzmQ9/Fav2-werkstu-ck.jpg" />} />
        <Route path="/portfolio/alp-brunnen" element={<PortfolioDetail title="Alp-Brunnen" img="https://i.postimg.cc/Wzzy1b0X/image1.jpg" gallery={["https://i.postimg.cc/vTTKZH5q/image2.jpg","https://i.postimg.cc/Wzzy1bML/image7.jpg"]} />} />
        <Route path="/portfolio/gesicht" element={<PortfolioDetail title="Gesicht" img="https://i.postimg.cc/BvGbLFPZ/Fav1-werkstu-ck.jpg" />} />

        <Route path="/ueber-uns" element={<TextPage title="Über mich" headerImg="https://i.postimg.cc/bwndwgr8/Fav-4-ich.jpg"><p>Ich arbeite mit Naturstein und reduziere Formen auf das Wesentliche. Meine Arbeiten entstehen in präziser Handarbeit – mit Respekt vor Material und Raum.</p></TextPage>} />
        <Route path="/kontakt" element={<TextPage title="Kontakt" headerImg="https://i.postimg.cc/Gp1t8DTG/Fav3-arbeiten.jpg"><KontaktSection /></TextPage>} />

        <Route path="/impressum" element={<LegalPage type="impressum" />} />
        <Route path="/datenschutz" element={<LegalPage type="datenschutz" />} />
        <Route path="/agb" element={<LegalPage type="agb" />} />
      </Routes>
    </>
  )
}
