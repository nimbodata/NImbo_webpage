// /manifiesto — "De la nube a la tierra". Página de Nimbo Consulting con el orden de una web de consultoría:
// propuesta de valor, prueba social, problema, solución y servicios, metodología, casos (contexto, problema,
// solución, resultado) y contacto. Se cuenta como un descenso: el scroll baja de 10.000 m a 0 m y de fondo pasa,
// cuadro a cuadro, el video del descenso (Descent.jsx), un grabado cobalto sobre crema hecho con Higgsfield.
// Página propia, sin la barra ni el pie del sitio. Las mini-interacciones son opcionales.
// Estilos en manifiesto.css (todo bajo .mf). Textos y casos reales en content.js.
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import {
  AGENDAR, BADGES, BUZZ, CASOS, CLIENTES, CONFIANZA, DOLORES, EDITED, LEVELS, SERVICIOS, STEPS, WA_MANIFIESTO,
} from './content'
import { Cables, Notifs, Steps } from './Plays'
import Descent from './Descent'
import './manifiesto.css'

const fmt = (n) => Math.round(n).toLocaleString('es-AR')

// el rótulo de cada parte: "03 // El problema 6.000 m"
function Tag({ lv }) {
  return <p className="mf-tag">{String(lv.n).padStart(2, '0')} //<i>{lv.name}</i>{fmt(lv.alt)} m</p>
}

function Head({ lv }) {
  return (
    <>
      <Tag lv={lv} />
      <h2 id={`${lv.id}-t`}>{lv.title}</h2>
      {lv.lead && <p className="mf-lead">{lv.lead}</p>}
    </>
  )
}

// cada parte es una sección con su altura; adentro, tarjetas como las del sitio. Antes de cada parte queda un tramo
// de video solo (el padding de .mf-lv) y las tarjetas van a un costado (`side`), así el fondo sigue siendo protagonista.
function Part({ lv, side = 'left', before, children }) {
  return (
    <section className={`mf-lv side-${side}`} id={lv.id} data-alt={lv.alt} data-name={lv.name} aria-labelledby={`${lv.id}-t`}>
      {before}
      <div className="mf-row">{children}</div>
    </section>
  )
}

const Arrow = ({ d = '→' }) => <span aria-hidden="true">{d}</span>

/* ---------- 1 · propuesta de valor (atrás, el primer cuadro del descenso: las nubes) ---------- */

const TITLE = ['Tecnología', 'que', 'baja', 'de', 'la', 'nube', 'y', 'trabaja', 'en', 'tu', 'pyme.']

function Intro({ onCases }) {
  return (
    <section className="mf-intro" id="nube" data-alt="10000" data-name="Nube" aria-labelledby="nube-t">
      <div className="mf-intro-in">
        <p className="mf-eyebrow mono">Nimbo Consulting // De la nube a la tierra</p>
        <h1 id="nube-t" className="mf-title">
          {TITLE.map((w, i) => <Fragment key={i}><span style={{ '--w': i }}>{w}</span>{' '}</Fragment>)}
        </h1>
        <div className="mf-lines mf-intro-lines">
          <p style={{ '--i': 0 }}>
            Agentes de IA, automatizaciones, tableros y software a medida para pymes de 15 a 70 personas:
            menos trabajo manual y los números al día.
          </p>
        </div>
        <div className="mf-ctas mf-start">
          <a className="mf-btn mf-btn-acc" href={AGENDAR} data-cta="manifiesto-hero">Agendar diagnóstico gratuito <Arrow /></a>
          <button type="button" className="mf-btn" onClick={onCases}>Ver casos <Arrow d="↓" /></button>
        </div>
        <p className="mf-hint mono" aria-hidden="true">20 minutos, sin cargo · scrolleá: el video baja con vos</p>
      </div>
    </section>
  )
}

/* ---------- las palabras de moda que se pinchan (arriba del problema) ---------- */

const BUZZ_POS = [
  [6, 12], [44, 4], [72, 16], [18, 40], [58, 34], [84, 44], [4, 70], [34, 62], [66, 64], [88, 76], [24, 80], [54, 82],
]

function Buzz({ onAll }) {
  const [popped, setPopped] = useState([])
  const pop = (w) => {
    if (popped.includes(w)) return
    const next = [...popped, w]
    setPopped(next)
    if (next.length === BUZZ.length) onAll()
  }
  return (
    <div className="mf-buzz" aria-label="Palabras de moda: tocalas para pincharlas">
      {BUZZ.map((w, i) => (
        <button key={w} type="button" className={`mf-chip${popped.includes(w) ? ' pop' : ''}`}
          style={{ left: `${BUZZ_POS[i][0]}%`, top: `${BUZZ_POS[i][1]}%`, '--d': `${(i % 6) * -1.7}s`, '--t': `${9 + (i % 4) * 2}s` }}
          onClick={() => pop(w)} aria-pressed={popped.includes(w)} tabIndex={popped.includes(w) ? -1 : 0}>
          {w}
        </button>
      ))}
      <p className="mf-buzz-n mono" aria-live="polite">
        {popped.length ? `${popped.length}/${BUZZ.length} pinchadas` : 'tocá las palabras para pincharlas'}
      </p>
    </div>
  )
}

/* ---------- altura: un número chico en la esquina ---------- */

function Altimeter({ altRef, level }) {
  return (
    <aside className="mf-alt" aria-label="Altura">
      <b ref={altRef}>10.000</b> <span>m</span>
      <small>{LEVELS[level].name}</small>
    </aside>
  )
}

/* ---------- página ---------- */

export default function Manifiesto() {
  const root = useRef(null)
  const altRef = useRef(null)
  const sky = useRef({ p: 0 })
  const [level, setLevel] = useState(0)
  const [badges, setBadges] = useState([])
  const [toast, setToast] = useState(null)

  const unlock = useCallback((id) => setBadges((b) => (b.includes(id) ? b : [...b, id])), [])
  // cada logro nuevo sale en un aviso
  useEffect(() => {
    const id = badges[badges.length - 1]
    if (id) setToast({ id, text: BADGES[id], k: Date.now() })
  }, [badges])
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3600)
    return () => clearTimeout(t)
  }, [toast])

  const jump = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }, [])

  // la página arranca con JS: recién ahí se esconden las cosas que entran con animación (data-in las muestra)
  useEffect(() => {
    const el = root.current
    el.classList.add('js')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.dataset.in = '' // atributo y no clase: React reescribe className
          io.unobserve(e.target)
        }
      }),
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )
    el.querySelectorAll('[data-rv]').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  // scroll: progreso (el tiempo del video), la altura de la esquina y el progreso de cada parte (--lp)
  useEffect(() => {
    const el = root.current
    let secs = []
    let raf = 0
    let last = -1
    // cada parte "llega" cuando su borde de arriba pasa por la mitad de la pantalla (la intro, apenas entrás)
    const measure = () => {
      const vh = window.innerHeight
      secs = [...el.querySelectorAll('[data-alt]')].map((s) => ({
        s, top: s.offsetTop, h: s.offsetHeight, at: Math.max(0, s.offsetTop - vh * 0.5), alt: Number(s.dataset.alt),
      }))
    }
    const tick = () => {
      raf = 0
      const y = window.scrollY
      const vh = window.innerHeight
      const tierra = secs[secs.length - 1]
      const p = tierra?.at ? Math.min(1, Math.max(0, y / tierra.at)) : 0
      el.style.setProperty('--p', p.toFixed(4))
      sky.current.p = p
      let alt = 0
      let idx = secs.length - 1
      for (let i = 0; i < secs.length; i++) {
        const a = secs[i]
        const b = secs[i + 1]
        if (!b || y < b.at) {
          idx = i
          alt = b ? a.alt + (b.alt - a.alt) * Math.max(0, Math.min(1, (y - a.at) / (b.at - a.at))) : a.alt
          break
        }
      }
      for (const { s, top, h } of secs) {
        const lp = (y + vh - top) / (h + vh)
        if (lp > -0.2 && lp < 1.2) s.style.setProperty('--lp', Math.max(0, Math.min(1, lp)).toFixed(3))
      }
      if (altRef.current) altRef.current.textContent = fmt(Math.round(alt / 10) * 10)
      if (idx !== last) {
        last = idx
        setLevel(idx)
      }
    }
    const onScroll = () => { raf ||= requestAnimationFrame(tick) }
    const onResize = () => { measure(); onScroll() }
    measure()
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    const ro = new ResizeObserver(onResize)
    ro.observe(el)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      ro.disconnect()
    }
  }, [])

  const L = LEVELS
  return (
    <div className="mf" ref={root}>
      <div className="mf-sky" aria-hidden="true">
        <Descent state={sky} />
      </div>

      <header className="mf-top">
        <a href="/" className="mf-home mono" aria-label="Ir a nimbodata.com">← nimbodata.com</a>
        <a href={AGENDAR} className="mf-home mono" data-cta="manifiesto-barra">Agendar diagnóstico →</a>
      </header>

      <Altimeter altRef={altRef} level={level} />

      <main>
        {/* 1 · propuesta de valor */}
        <Intro onCases={() => jump('casos')} />

        {/* 2 · prueba social */}
        <Part lv={L[1]}>
          <div className="mf-copy mf-wide mf-proof" data-rv>
            <Tag lv={L[1]} />
            <h2 id="confianza-t" className="mf-sr">Quiénes somos</h2>
            <ul className="mf-facts">
              {CONFIANZA.map(([n, t]) => <li key={n}><b>{n}</b><span>{t}</span></li>)}
            </ul>
            <p className="mf-clients-t mono">Ya trabajan con nosotros</p>
            <ul className="mf-clients">{CLIENTES.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </Part>

        {/* 3 · el problema: los tres dolores y el celular que no para, en la misma tarjeta */}
        <Part lv={L[2]} side="right" before={<Buzz onAll={() => unlock('humo')} />}>
          <div className="mf-copy mf-wide mf-split" data-rv>
            <div>
              <Head lv={L[2]} />
              <ol className="mf-pains">
                {DOLORES.map(([t, d], i) => <li key={t}><span className="mono">0{i + 1}</span><b>{t}</b><p>{d}</p></li>)}
              </ol>
            </div>
            <Notifs onDone={() => unlock('lunes')} />
          </div>
        </Part>

        {/* 4 · la solución y los servicios */}
        <Part lv={L[3]}>
          <div className="mf-stack">
            <div className="mf-copy mf-wide" data-rv>
              <Head lv={L[3]} />
              <ul className="mf-services">
                {SERVICIOS.map((s) => (
                  <li key={s.t}>
                    <a href={s.href}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={s.icon} /></svg>
                      <b>{s.t}</b>
                      <p>{s.d}</p>
                      <span className="mf-more mono">Ver más →</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mf-copy mf-wide mf-split mf-split-rev" data-rv>
              <div>
                <p className="mf-tag">Probalo //<i>Integración</i></p>
                <h2>Cargás una vez. Aparece donde tiene que estar.</h2>
                <p className="mf-lead">Uní cada herramienta al tablero: así se ve una pyme conectada.</p>
              </div>
              <Cables onDone={() => unlock('cables')} />
            </div>
          </div>
        </Part>

        {/* 5 · metodología */}
        <Part lv={L[4]} side="right">
          <div className="mf-copy mf-wide" data-rv>
            <Head lv={L[4]} />
            <Steps steps={STEPS} />
          </div>
        </Part>

        {/* 6 · casos: contexto, problema, solución, resultado */}
        <Part lv={L[5]}>
          <div className="mf-stack">
            <div className="mf-copy mf-wide" data-rv>
              <Head lv={L[5]} />
            </div>
            {CASOS.map((c) => (
              <article key={c.id} className="mf-copy mf-wide mf-case" data-rv aria-label={`Caso: ${c.t}`}>
                <div className="mf-case-img"><img src={c.img} alt={`Captura del proyecto para ${c.t}`} loading="lazy" decoding="async" /></div>
                <div className="mf-case-body">
                  <ul className="mf-case-tags">{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <h3>{c.t}</h3>
                  <dl>
                    <div><dt className="mono">Contexto</dt><dd>{c.contexto}</dd></div>
                    <div><dt className="mono">Problema</dt><dd>{c.problema}</dd></div>
                    <div><dt className="mono">Solución</dt><dd>{c.solucion}</dd></div>
                  </dl>
                  <blockquote><span className="mono">Resultado</span>“{c.resultado[0]}”<cite>{c.resultado[1]}</cite></blockquote>
                </div>
              </article>
            ))}
          </div>
        </Part>

        {/* llegada: el contacto */}
        <Part lv={L[6]}>
          <div className="mf-copy" data-rv>
            <Head lv={L[6]} />
            <div className="mf-ctas">
              <a className="mf-btn mf-btn-acc" href={AGENDAR} data-cta="manifiesto-cierre">Agendar diagnóstico gratuito <Arrow /></a>
              <a className="mf-btn" href={WA_MANIFIESTO} target="_blank" rel="noopener noreferrer" data-cta="manifiesto-wsp">Escribinos por WhatsApp <Arrow /></a>
            </div>
            <p className="mf-sign">— Seba<small className="mono">Nimbo Consulting · Buenos Aires · {EDITED}</small></p>
          </div>
        </Part>
      </main>

      <div className="mf-toast-wrap" aria-live="polite">
        {toast && <p key={toast.k} className="mf-toast"><span aria-hidden="true">🏅</span> {toast.text}</p>}
      </div>
    </div>
  )
}
