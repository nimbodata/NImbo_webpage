// Piezas compartidas entre la home y las páginas de servicio.
import { Player } from '@remotion/player'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AREAS, WA, WA_PYME } from './data'
import { Hero, HERO } from './scenes/Hero'
import './styles.css'

const LINKS = [['/#servicios', 'Servicios'], ['/casos', 'Casos'], ['/blog', 'Blog'], ['/beta', 'Beta']]
// /pyme (la consultora) tiene su propia barra: las secciones de la página y el contacto con el tema marcado
const PYME = { home: '/pyme', contact: '/pyme/contacto',
  links: [['/pyme#servicios', 'Servicios'], ['/pyme#clientes', 'Clientes'], ['/pyme#caso', 'Caso'], ['/pyme#equipo', 'Equipo']] }
const SITE = { home: '/', contact: '/contacto', links: LINKS }

// En el celular los links van en un menú desplegable (botón "Menú"); se cierra al elegir, al tocar afuera o con Escape.
export function Nav() {
  const [open, setOpen] = useState(false)
  const nav = useRef(null)
  const { pathname, hash } = useLocation()
  const { home, contact, links } = pathname.startsWith('/pyme') ? PYME : SITE
  useEffect(() => setOpen(false), [pathname, hash])
  useEffect(() => {
    if (!open) return
    const out = (e) => { if (!nav.current?.contains(e.target)) setOpen(false) }
    const esc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('pointerdown', out)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('pointerdown', out); document.removeEventListener('keydown', esc) }
  }, [open])
  return (
    <nav ref={nav} className={`nav${open ? ' open' : ''}`}>
      <a href={home} className="logo"><Logo /><LogoWord /></a>
      <div className="nav-links">
        {links.map(([href, t]) => <a key={href} href={href}>{t}</a>)}
      </div>
      <div className="nav-end">
        <button type="button" className="nav-menu" aria-expanded={open} aria-controls="nav-sheet" onClick={() => setOpen((o) => !o)}>
          <span aria-hidden="true"><i /><i /></span>{open ? 'Cerrar' : 'Menú'}
        </button>
        <a href={contact} className="btn btn-acc btn-sm">Hablemos</a>
      </div>
      <div id="nav-sheet" className="nav-sheet" hidden={!open}>
        {links.map(([href, t]) => <a key={href} href={href} onClick={() => setOpen(false)}>{t}</a>)}
        <a href={contact} onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </nav>
  )
}

// `s` deja marcado el servicio en el formulario de contacto; `cta` y `alt` ([href, texto]) cambian los botones (/pyme)
export function Final({ title = 'Hagamos más simple lo que hoy te frena.', s, cta, alt = ['/casos', 'Ver casos'] }) {
  return (
    <section className="wrap" id="cierre">
      <div className="final" data-reveal>
        <div className="final-copy">
          <h2>{title}</h2>
          <p className="lead">Contanos cómo trabaja tu empresa. Te ayudamos a encontrar una solución posible.</p>
          <div className="btns">
            <a className="btn btn-acc" href={cta || (s ? `/contacto?s=${s}` : '/contacto')}>Empecemos <Arrow /></a>
            <a className="btn" href={alt[0]}>{alt[1]} <Arrow /></a>
          </div>
        </div>
        <LiveEngraving className="final-art" />
      </div>
    </section>
  )
}

// en /pyme el pie también se queda dentro de la consultora
function PymeFooter() {
  return (
    <footer className="wrap foot">
      <div>
        <a href="/pyme" className="logo"><Logo /><LogoWord /></a>
        <p>Nimbodata Consultoría: diagnóstico y mejora de la gestión interna para pymes de obras y servicios técnicos del AMBA.</p>
      </div>
      <div><h5>Servicios</h5><a href="/pyme#servicios">Diagnóstico de gestión</a><a href="/pyme#servicios">Diseño de procesos</a><a href="/pyme#servicios">Implementación acompañada</a><a href="/pyme#servicios">Seguimiento posterior</a></div>
      <div><h5>Explorar</h5><a href="/pyme#nosotros">Quiénes somos</a><a href="/pyme#clientes">A quién ayudamos</a><a href="/pyme#caso">Primer caso</a><a href="/pyme#proceso">Cómo trabajamos</a><a href="/pyme#propuesta">Por qué Nimbodata</a><a href="/pyme#equipo">Equipo</a></div>
      <div><h5>Contacto</h5><a href="/pyme/contacto">Formulario</a><a href={WA_PYME}>WhatsApp</a><a href="https://instagram.com/nimbodata">Instagram</a><a href="https://linkedin.com/company/nimboconsulting">LinkedIn</a></div>
      <p className="foot-bottom">© 2026 Nimbodata Consultoría, una unidad de Nimbodata. Hecho en Argentina.</p>
    </footer>
  )
}

export function Footer() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/pyme')) return <PymeFooter />
  return (
    <footer className="wrap foot">
      <div>
        <a href="/" className="logo"><Logo /><LogoWord /></a>
        <p>IA, automatización y software a medida para pymes. Un equipo chico de Buenos Aires.</p>
      </div>
      <div><h5>Servicios</h5>{AREAS.map((a) => <a key={a.slug} href={a.path}>{a.t}</a>)}</div>
      <div><h5>Explorar</h5><a href="/casos">Casos</a><a href="/blog">Blog</a><a href="/beta">BETA</a><a href="/#proceso">Cómo trabajamos</a><a href="/#equipo">Equipo</a></div>
      <div><h5>Nimbo</h5><a href="/contacto">Contacto</a><a href={WA}>WhatsApp</a><a href="https://instagram.com/nimbodata">Instagram</a><a href="https://linkedin.com/company/nimboconsulting">LinkedIn</a></div>
      <p className="foot-trust">Partner oficial de Tiendanube · Certificaciones HubSpot y Make · En la Guía de Buenos Aires</p>
      {/* insignia del directorio: el enlace al perfil es lo que AdWorld verifica */}
      <a className="foot-badge" href="https://www.adworldlatam.com/agencias/nimbo-consulting" target="_blank" rel="noopener"
        title="Nimbo Consulting en AdWorld Latam">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.6 2.1 3.3-.3.9 3.2 2.9 1.6-1.2 3.1 1.2 3.1-2.9 1.6-.9 3.2-3.3-.3L12 22l-2.6-2.1-3.3.3-.9-3.2-2.9-1.6 1.2-3.1-1.2-3.1 2.9-1.6.9-3.2 3.3.3z" /><path d="M8.5 12.2l2.4 2.3 4.6-4.8" /></svg>
        <span><small>AdWorld Latam</small>Partner</span>
      </a>
      <p className="foot-bottom">© 2026 Nimbo. Hecho en Argentina.</p>
    </footer>
  )
}

// grabado vivo a la resolución real del contenedor (tope 1600 px de composición para que corra fluido).
// El tamaño lo decide el CSS (alto del hero según la ventana, o aspect-ratio en el cierre).
export function LiveEngraving({ className }) {
  const box = useRef(null)
  const [size, setSize] = useState(null)
  useEffect(() => {
    const el = box.current
    const ro = new ResizeObserver(([e]) => {
      const { width: cssW, height: cssH } = e.contentRect
      if (!cssW || !cssH) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.min(1600, Math.round((cssW * dpr) / 8) * 8)
      const h = Math.round((w * cssH) / cssW)
      setSize((prev) => (prev && prev.w === w && Math.abs(prev.h - h) < 4 ? prev : { w, h, k: w / cssW }))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const player = useRef(null)
  useEffect(() => {
    const el = box.current
    const io = new IntersectionObserver(([e]) => {
      if (!player.current) return
      if (e.isIntersecting) player.current.play()
      else player.current.pause()
    })
    io.observe(el)
    return () => io.disconnect()
  }, [size?.w])
  return (
    <div ref={box} className={className}>
      {size && (
        <Player ref={player} numberOfSharedAudioTags={0} component={Hero} inputProps={{ cssScale: size.k }} durationInFrames={HERO.durationInFrames}
          fps={HERO.fps} compositionWidth={size.w} compositionHeight={size.h} autoPlay loop controls={false}
          clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false}
          style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  )
}

// en el prerender (Node) no hay layout: ahí va un useEffect común para que React no avise
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

export function useReveal(key) {
  // useLayoutEffect: lo que ya está en pantalla arranca en el mismo cuadro, sin esperar al observer
  // (al cambiar de página el observer tarda mientras se montan las animaciones y el título quedaba invisible)
  useBrowserLayoutEffect(() => {
    const els = [...document.querySelectorAll('[data-reveal]:not(.in)')]
    const io = new IntersectionObserver((list) => list.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < innerHeight * 0.92) el.classList.add('in')
      else io.observe(el)
    })
    return () => io.disconnect()
  }, [key])
}

export const Icon = ({ d }) => <svg viewBox="0 0 24 24"><path d={d} /></svg>

export const Arrow = () => (
  <i aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M3.5 8.5l5-5M4.5 3.5h4v4" /></svg></i>
)

export const Logo = () => (
  <svg viewBox="-12 -12 399 224" aria-hidden="true">
    <path d="M271.84,16.97c15.42,12.31,28,33.93,28.55,53.89,13.64-.57,26.09-.17,38.52,5.87,56.51,27.48,43.11,115.68-20.22,122.53l-261.99-.05c-62.34-7.28-77.99-89.68-23.15-121.24,14.02-8.07,30.12-8.07,45.94-6.19,1.71-.48,5.47-10.25,6.98-12.67,10.49-16.9,33.25-31.45,53.83-31.99,3.61-.09,18.6,3.19,19.55,2.91.59-.17,6.77-7.6,8.32-8.95,29.26-25.43,72.35-29.12,103.66-4.12Z"
      fill="none" stroke="#26248a" strokeWidth="22" strokeLinejoin="round" />
  </svg>
)

// el nombre del logo, dibujado (Poppins SemiBold pasada a curvas): así no hace falta cargar la fuente
export const LogoWord = () => (
  <svg className="logo-word" viewBox="60 -790 3100 800" role="img" aria-label="nimbo">
    <path fill="currentColor" d="M597 -325V0H457V-306Q457 -372 424 -407.5Q391 -443 334 -443Q276 -443 242.5 -407.5Q209 -372 209 -306V0H69V-554H209V-485Q237 -521 280.5 -541.5Q324 -562 376 -562Q475 -562 536 -499.5Q597 -437 597 -325Z M685 -702Q685 -737 709.5 -760.5Q734 -784 771 -784Q808 -784 832.5 -760.5Q857 -737 857 -702Q857 -667 832.5 -643.5Q808 -620 771 -620Q734 -620 709.5 -643.5Q685 -667 685 -702ZM840 -554V0H700.0V-554Z M1863 -325V0H1723.0V-306Q1723 -371 1690 -405.5Q1657 -440 1600 -440Q1543 -440 1509.5 -405.5Q1476 -371 1476 -306V0H1336.0V-306Q1336 -371 1303 -405.5Q1270 -440 1213 -440Q1155 -440 1121.5 -405.5Q1088 -371 1088 -306V0H948.0V-554H1088.0V-487Q1115 -522 1157.5 -542.0Q1200 -562 1251 -562Q1316 -562 1367 -534.5Q1418 -507 1446 -456Q1473 -504 1524.5 -533.0Q1576 -562 1636 -562Q1738 -562 1800.5 -499.5Q1863 -437 1863 -325Z M2289 -563Q2360 -563 2417.5 -528.0Q2475 -493 2508.5 -428.5Q2542 -364 2542 -279Q2542 -194 2508.5 -128.5Q2475 -63 2417.5 -27.0Q2360 9 2289 9Q2227 9 2180.5 -15.5Q2134 -40 2106 -79V0H1966.0V-740H2106.0V-473Q2133 -513 2180.5 -538.0Q2228 -563 2289 -563ZM2252 -440Q2214 -440 2180.5 -420.5Q2147 -401 2126.5 -364.0Q2106 -327 2106 -277Q2106 -227 2126.5 -190.0Q2147 -153 2180.5 -133.5Q2214 -114 2252 -114Q2291 -114 2324.5 -134.0Q2358 -154 2378.5 -191.0Q2399 -228 2399 -279Q2399 -329 2378.5 -365.5Q2358 -402 2324.5 -421.0Q2291 -440 2252 -440Z M2579 -277Q2579 -362 2616.5 -427.0Q2654 -492 2719 -527.5Q2784 -563 2864 -563Q2944 -563 3009 -527.5Q3074 -492 3111.5 -427.0Q3149 -362 3149 -277Q3149 -192 3110.5 -127.0Q3072 -62 3006.5 -26.5Q2941 9 2860 9Q2780 9 2716 -26.5Q2652 -62 2615.5 -127.0Q2579 -192 2579 -277ZM3005 -277Q3005 -356 2963.5 -398.5Q2922 -441 2862 -441Q2802 -441 2761.5 -398.5Q2721 -356 2721 -277Q2721 -198 2760.5 -155.5Q2800 -113 2860 -113Q2898 -113 2931.5 -131.5Q2965 -150 2985 -187.0Q3005 -224 3005 -277Z" />
  </svg>
)
