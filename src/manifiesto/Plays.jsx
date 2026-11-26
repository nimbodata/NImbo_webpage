// Mini-interacciones de /manifiesto, todas opcionales (la página se entiende sin tocarlas).
import { useCallback, useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

const Caption = ({ children }) => <p className="mf-cap mono">{children}</p>

/* ---------- el problema: el celular que no para ---------- */

const MSGS = [
  ['Cliente · Mostrador', '¿Tenés stock del de 1 kg?'],
  ['Juan · Reparto', 'Llegué, ¿a quién le dejo esto?'],
  ['Proveedor', 'Te paso la lista nueva de precios'],
  ['Grupo Ventas 🔥', '@todos ¿quién cargó el pedido de ayer?'],
  ['Número desconocido', 'Hola, ¿precio?'],
  ['Contadora', 'Necesito las facturas de octubre'],
  ['Cliente · Mostrador', 'Ya pagué, te mando el comprobante'],
  ['Juan · Reparto', '🎤 Audio · 0:47'],
  ['Distribuidora Sur', '¿Me confirmás el pedido?'],
  ['Cliente', '¿Llegó lo de ayer?'],
  ['Grupo Ventas 🔥', 'Urgente!!!'],
  ['Proveedor', '¿Me reenviás la factura?'],
]

export function Notifs({ onDone }) {
  const [ref, seen] = useInView(0.45)
  const [items, setItems] = useState([])
  const [off, setOff] = useState(0)
  const [state, setState] = useState('idle')
  const n = useRef(0)

  useEffect(() => {
    if (seen && state === 'idle') setState('run')
  }, [seen, state])

  useEffect(() => {
    if (state !== 'run') return
    let t
    const t0 = Date.now()
    const spawn = () => {
      const i = n.current++
      setItems((list) => [{ k: i, s: MSGS[i % MSGS.length][0], m: MSGS[i % MSGS.length][1] }, ...list].slice(0, 7))
      if (Date.now() - t0 > 9000) {
        setState('done')
        return
      }
      t = setTimeout(spawn, Math.max(300, 1100 - i * 75))
    }
    t = setTimeout(spawn, 500)
    return () => clearTimeout(t)
  }, [state])

  useEffect(() => {
    if (state === 'done') onDone()
  }, [state, onDone])

  const dismiss = (k) => {
    setItems((list) => list.filter((x) => x.k !== k))
    setOff((o) => o + 1)
  }
  const again = () => {
    setItems([])
    setOff(0)
    n.current = 0
    setState('run')
  }

  return (
    <div className="mf-phone-wrap" ref={ref}>
      <Caption>mini-juego: tocá las notificaciones para apagarlas</Caption>
      <div className="mf-phone">
        <div className="mf-phone-top"><span>9:41</span><span>lunes</span></div>
        <ul className="mf-notifs" aria-live="off">
          {items.map((x) => (
            <li key={x.k}>
              <button type="button" onClick={() => dismiss(x.k)} aria-label={`Apagar: ${x.s}, ${x.m}`}>
                <span className="mf-n-ico" aria-hidden="true" />
                <span><b>{x.s}</b><small>{x.m}</small></span>
                <em aria-hidden="true">ahora</em>
              </button>
            </li>
          ))}
        </ul>
        <p className="mf-phone-count mono">apagaste {off}</p>
        {state === 'done' && (
          <div className="mf-phone-end" role="status">
            <p>No es tu culpa.<br />El sistema está mal armado.</p>
            <button type="button" className="mf-chipbtn" onClick={again}>Otra vez</button>
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- la solución: conectá los cables ---------- */

const NODES = [
  { id: 'wsp', label: 'WhatsApp', x: 15, y: 18 },
  { id: 'mail', label: 'Gmail', x: 85, y: 18 },
  { id: 'sheet', label: 'Planilla', x: 10, y: 70 },
  { id: 'crm', label: 'CRM', x: 90, y: 70 },
  { id: 'fact', label: 'Facturación', x: 50, y: 92 },
]
const HUB = { x: 50, y: 48 }

const ICONS = {
  wsp: <path d="M5 19l1.3-3.6A7.5 7.5 0 1 1 9 18.4L5 19z" />,
  mail: <><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M4.5 7l7.5 6 7.5-6" /></>,
  sheet: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 15h16M10 4v16" /></>,
  crm: <><circle cx="9" cy="10" r="3" /><path d="M4 19c.8-3 2.6-4.5 5-4.5s4.2 1.5 5 4.5M15 8h5M15 12h5" /></>,
  fact: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6M9 12h6" /></>,
}

function useCount(to, on, ms = 1200) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!on) return
    let raf
    const t0 = performance.now()
    const step = (t) => {
      const k = Math.min(1, (t - t0) / ms)
      setV(Math.round(to * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, on, ms])
  return v
}

export function Cables({ onDone }) {
  const board = useRef(null)
  const [conn, setConn] = useState([])
  const [drag, setDrag] = useState(null)
  const done = conn.length === NODES.length
  const connect = useCallback((id) => setConn((c) => (c.includes(id) ? c : [...c, id])), [])
  useEffect(() => {
    if (done) onDone()
  }, [done, onDone])

  const toPct = (e) => {
    const r = board.current.getBoundingClientRect()
    return { x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 }
  }
  const down = (e, nd) => {
    if (conn.includes(nd.id)) return
    board.current.setPointerCapture?.(e.pointerId)
    setDrag({ id: nd.id, x: nd.x, y: nd.y, moved: false })
  }
  const move = (e) => {
    if (!drag) return
    const p = toPct(e)
    setDrag((d) => d && { ...d, ...p, moved: d.moved || Math.hypot(p.x - d.x, p.y - d.y) > 3 })
  }
  const up = (e) => {
    if (!drag) return
    const p = toPct(e)
    if (!drag.moved || Math.hypot(p.x - HUB.x, p.y - HUB.y) < 16) connect(drag.id)
    setDrag(null)
  }
  const reset = () => setConn([])
  const pedidos = useCount(48, done)
  const horas = useCount(11, done)

  return (
    <div className="mf-cables-wrap">
      <Caption>mini-juego: arrastrá cada herramienta al tablero (o tocala)</Caption>
      <div className={`mf-board${done ? ' done' : ''}`} ref={board} onPointerMove={move} onPointerUp={up} onPointerCancel={() => setDrag(null)}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {NODES.map((nd) => (
            <line key={nd.id} x1={nd.x} y1={nd.y} x2={HUB.x} y2={HUB.y} vectorEffect="non-scaling-stroke"
              className={conn.includes(nd.id) ? 'on' : 'hint'} />
          ))}
          {drag && <line x1={NODES.find((n) => n.id === drag.id).x} y1={NODES.find((n) => n.id === drag.id).y}
            x2={drag.x} y2={drag.y} vectorEffect="non-scaling-stroke" className="drag" />}
        </svg>
        {NODES.map((nd) => (
          <button key={nd.id} type="button" className={`mf-node${conn.includes(nd.id) ? ' on' : ''}`}
            style={{ left: `${nd.x}%`, top: `${nd.y}%` }}
            onPointerDown={(e) => down(e, nd)}
            onClick={(e) => e.detail === 0 && connect(nd.id)}
            aria-pressed={conn.includes(nd.id)} aria-label={`Conectar ${nd.label} al tablero`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[nd.id]}</svg>
            <span>{nd.label}</span>
          </button>
        ))}
        <div className="mf-hub" style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }} aria-live="polite">
          {done ? (
            <div className="mf-dash">
              <span className="mono">tablero · hoy</span>
              <p><b>{pedidos}</b> pedidos cargados</p>
              <p><b>0</b> cargados dos veces</p>
              <p><b>+{horas} h</b> libres esta semana</p>
            </div>
          ) : (
            <span className="mf-hub-txt"><b>Tablero</b><small>{conn.length}/{NODES.length} conectados</small></span>
          )}
        </div>
      </div>
      {done && (
        <p className="mf-cap mono mf-cap-end">
          números de ejemplo · <button type="button" className="mf-link" onClick={reset}>desconectar todo</button>
        </p>
      )}
    </div>
  )
}

/* ---------- la metodología: los pasos que se prenden en orden ---------- */

export function Steps({ steps }) {
  const [ref, seen] = useInView(0.5)
  const [lit, setLit] = useState(0)
  useEffect(() => {
    if (!seen || lit >= steps.length) return
    const t = setTimeout(() => setLit((v) => v + 1), lit === 0 ? 200 : 550)
    return () => clearTimeout(t)
  }, [seen, lit, steps.length])
  return (
    <div className="mf-steps-wrap" ref={ref}>
      <ol className="mf-steps">
        {steps.map(([n, t, d], i) => (
          <li key={n} className={i < lit ? 'lit' : ''}>
            <span className="mf-step-n mono">{n}</span>
            <b>{t}</b>
            <small>{d}</small>
          </li>
        ))}
      </ol>
    </div>
  )
}
