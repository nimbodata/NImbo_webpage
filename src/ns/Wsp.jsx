// /wsp: el agente de WhatsApp para distribuidoras como paquete estándar (n8n), con precio desde y todo a WhatsApp.
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Fig from './Fig'
import { FIGS } from './scenes'
import { Arrow } from './ui'
import { Words } from './motion'

export const WA_WSP = 'https://wa.me/5491124036836?text=' + encodeURIComponent('¡Hola! Vi el agente de WhatsApp para distribuidoras y quiero saber cómo funcionaría en la mía.')

const DOLORES = [
  ['Pedidos que llegan de noche', 'El cliente escribe a las 23 h y nadie lo ve hasta la mañana. Si tardás, le compra a otro.'],
  ['Las mismas preguntas todo el día', '¿Tenés stock? ¿A cuánto está? ¿Cuándo pasa el camión? Tu equipo contesta lo mismo cien veces.'],
  ['Pedidos que se cargan a mano', 'Alguien pasa el chat a la planilla o al sistema. Ahí se pierden pedidos y aparecen los errores.'],
]

const CHAT = [
  ['in', '23:14', 'Hola! Para mañana necesito 10 cajas de agua 2 L y 5 de gaseosa cola 1,5 L'],
  ['out', '23:14', 'Hola Martín 👋 Hay stock de las dos. 10 cajas de agua 2 L y 5 de gaseosa cola 1,5 L: $187.500. Te lo entregamos mañana a la mañana en el reparto de zona Norte. ¿Lo confirmo?'],
  ['in', '23:15', 'Dale, confirmado'],
  ['out', '23:15', 'Listo, pedido #2481 cargado ✅ Mañana te avisamos cuando sale el camión.'],
]

const INCLUYE = [
  'Agente de IA en el WhatsApp de tu distribuidora, con la API oficial de Meta',
  'Entrenado con tu lista de precios, stock, mínimos de compra, zonas y días de reparto y medios de pago',
  'Toma el pedido, confirma precio y stock, y lo deja cargado en una planilla de Google lista para preparar',
  'Aviso a tu equipo por cada pedido nuevo',
  'Derivación a una persona cuando el cliente lo pide o el agente no sabe qué responder',
  'Cambiás la lista de precios en la planilla y el agente ya responde con los precios nuevos',
  'Una capacitación con tu equipo para usarlo y corregirlo',
]

const NO_INCLUYE = [
  'El consumo de IA y los cargos de Meta por conversación: van aparte y te los mostramos antes de arrancar',
  'Conexión con tu sistema de gestión o facturación: se cotiza aparte',
  'Cobros online con Mercado Pago o link de pago',
  'Envíos masivos de promociones o listas de difusión',
  'Otros canales como Instagram o el chat de la web: se suman al abono mensual',
]

const DIAS = [
  ['Día 1', 'Una charla de 30 minutos: nos pasás la lista de precios, las zonas de reparto y cómo toman pedidos hoy.'],
  ['Días 2 a 5', 'Armamos el agente y los flujos en n8n, conectamos tu número de WhatsApp y la planilla de pedidos.'],
  ['Día 6', 'Lo probás con tu equipo con pedidos reales y ajustamos las respuestas.'],
  ['Día 7', 'Queda atendiendo a tus clientes. Después lo seguimos y lo ajustamos cada mes.'],
]

const FAQ_WSP = [
  ['¿Sigo usando mi mismo número?', 'Sí. Conectamos el número de WhatsApp Business de tu distribuidora a la API oficial de Meta, y tu equipo puede seguir viendo las conversaciones y tomar las que necesiten una persona.'],
  ['¿Qué pasa si el agente no sabe algo?', 'No inventa. Le dice al cliente que lo deriva y le avisa a tu equipo con el resumen de la charla para que siga una persona.'],
  ['¿Qué incluye el mantenimiento mensual?', 'Que esté funcionando todos los días: monitoreo, ajustes de respuestas, cambios de productos o zonas y soporte por WhatsApp. Arranca en $60.000 por mes con WhatsApp y sube según cuántos canales sumes.'],
  ['¿Y si ya tengo un sistema de gestión?', 'El paquete deja los pedidos en una planilla. Si tu sistema permite conectarse, lo cotizamos aparte para que el pedido entre directo, sin cargarlo dos veces.'],
]

export default function Wsp() {
  return (
    <>
      <section className="sv-hero wrap">
        <span className="mono crumb" data-reveal>Agente de WhatsApp · Distribuidoras y mayoristas</span>
        <h1 data-reveal>Tu distribuidora toma pedidos por WhatsApp, aunque sea de madrugada.</h1>
        <p className="lead words" data-reveal style={{ '--d': '80ms' }}>
          <Words>Un agente responde precios y stock, arma el pedido y lo deja cargado para preparar. Listo en 7 días hábiles.</Words>
        </p>
        <div className="btns" data-reveal style={{ '--d': '160ms' }}>
          <a className="btn btn-acc" href={WA_WSP} data-cta="wsp-hero">Escribinos por WhatsApp <Arrow /></a>
          <a className="btn" href="#precio">Ver precio <Arrow /></a>
        </div>
        <div className="fig sv-fig" data-reveal style={{ '--d': '220ms' }}>
          <Fig component={FIGS.agentes.C} meta={FIGS.agentes.meta} className="fig-player" />
        </div>
      </section>

      <div className="frame">
        <section className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>El problema.</h2>
              <p className="lead">Tus clientes ya te piden por WhatsApp. Lo que falla es todo lo que pasa después.</p>
            </div>
          </div>
          <ul className="para">
            {DOLORES.map(([t, d], i) => (
              <li key={t} data-reveal style={{ '--d': `${i * 80}ms` }}>
                <span className="mono">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sec wrap sv-split ws-split">
          <div data-reveal>
            <h2>Así atiende.</h2>
            <p className="sv-text">El cliente escribe como siempre. El agente conoce tu lista de precios, tu stock y tus zonas de reparto: responde al instante, confirma el pedido y lo deja anotado para que tu equipo lo prepare a la mañana.</p>
            <p className="mono ws-note">Ejemplo de conversación</p>
          </div>
          <Chat />
        </section>

        <section className="sec wrap" id="incluye">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Qué incluye el paquete.</h2>
              <p className="lead">Un servicio estándar, con alcance cerrado, para que sepas desde el principio qué recibís.</p>
            </div>
          </div>
          <div className="ws-lists">
            <div className="ws-list" data-reveal>
              <h4>Incluye</h4>
              <ul>{INCLUYE.map((t) => <li key={t} className="ws-yes">{t}</li>)}</ul>
            </div>
            <div className="ws-list ws-list-no" data-reveal style={{ '--d': '100ms' }}>
              <h4>No incluye</h4>
              <ul>{NO_INCLUYE.map((t) => <li key={t} className="ws-no">{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="sec wrap sv-split ws-split" id="precio">
          <div data-reveal>
            <h2>Precio.</h2>
            <p className="sv-text">Una implementación al principio y un abono mensual que lo mantiene funcionando.</p>
            <div className="ws-price">
              <div>
                <span className="mono">Implementación</span>
                <b>$320.000</b>
                <p>Pago único. Lo dejamos andando en 7 días hábiles.</p>
              </div>
              <div>
                <span className="mono">Mantenimiento</span>
                <b>desde $60.000<small>/mes</small></b>
                <p>Según la cantidad de canales. Con WhatsApp solo, $60.000.</p>
              </div>
              <a className="btn btn-acc btn-wide" href={WA_WSP} data-cta="wsp-precio">Quiero el agente <Arrow /></a>
            </div>
          </div>
          <ol className="timeline" data-reveal style={{ '--d': '100ms' }}>
            {DIAS.map(([t, d], i) => (
              <li key={t}><span className="mono">0{i + 1}</span><div><h4>{t}</h4><p>{d}</p></div></li>
            ))}
          </ol>
        </section>

        <section className="sec wrap">
          <div className="faq-grid">
            <div data-reveal>
              <h2 className="faq-title">Preguntas frecuentes.</h2>
              <a className="btn btn-wide" href={WA_WSP} data-cta="wsp-faq">Preguntanos por WhatsApp <Arrow /></a>
            </div>
            <div className="faq" data-reveal style={{ '--d': '100ms' }}>
              {FAQ_WSP.map(([q, a], i) => (
                <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="final" data-reveal>
            <div className="final-copy">
              <h2>Que ningún pedido quede sin respuesta.</h2>
              <p className="lead">Contanos cómo toman pedidos hoy y en 7 días hábiles lo tenés atendiendo.</p>
              <div className="btns">
                <a className="btn btn-acc" href={WA_WSP} data-cta="wsp-final">Escribinos por WhatsApp <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// en el prerender (Node) no hay layout: ahí va un useEffect común para que React no avise
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// El chat de "Así atiende" se va escribiendo solo mientras está en pantalla: el cliente manda, el agente
// "escribe…" y responde, y vuelve a empezar. En el prerender y con movimiento reducido se ve completo.
// El alto queda fijo desde el principio para que la página no salte cuando aparece cada mensaje.
function Chat() {
  const box = useRef(null)
  const body = useRef(null)
  const [shown, setShown] = useState(CHAT.length)
  const [typing, setTyping] = useState(false)
  const [visible, setVisible] = useState(false)

  useBrowserLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    body.current.style.minHeight = body.current.offsetHeight + 'px'
    setShown(0)
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 })
    io.observe(box.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    let t
    if (shown >= CHAT.length) t = setTimeout(() => setShown(0), 4500)
    else if (CHAT[shown][0] === 'in') t = setTimeout(() => setShown(shown + 1), shown ? 1100 : 500)
    else if (!typing) t = setTimeout(() => setTyping(true), 500)
    else t = setTimeout(() => { setTyping(false); setShown(shown + 1) }, 1500)
    return () => clearTimeout(t)
  }, [visible, shown, typing])

  return (
    <div ref={box} className="ws-chat" data-reveal style={{ '--d': '100ms' }}>
      <div className="ws-chat-top"><b>Distribuidora</b><span>{typing ? 'escribiendo…' : 'en línea'}</span></div>
      <div ref={body} className="ws-chat-body">
        {CHAT.slice(0, shown).map(([side, h, t]) => (
          <p key={h + t} className={`ws-msg ws-${side}`}>{t}<time>{h}</time></p>
        ))}
        {typing && <p className="ws-msg ws-out ws-typing" aria-label="Escribiendo"><i /><i /><i /></p>}
      </div>
    </div>
  )
}
