// /pyme · Nimbo como consultora para pymes: diagnóstico de la empresa, orden de procesos y seguimiento después de
// la solución. Es la cara al mercado del plan de negocio (Parte C del trabajo de la facultad): identidad, equipo,
// servicios, clientes, propuesta de valor y contacto. La tecnología (automatización, tableros) va como complemento.
import Fig from './Fig'
import { WA_PYME } from './data'
import { FIGS } from './scenes'
import { Arrow, Final, Icon } from './ui'
import { Words } from './motion'

const SINTOMAS = [
  ['M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M4 21c0-4 3.6-7 8-7s8 3 8 7', 'Todo pasa por el dueño',
    'Las decisiones, los problemas y hasta las dudas chicas terminan en la misma persona. Si no está, la empresa se frena.'],
  ['M4 6h16 M4 12h10 M4 18h13', 'Cada uno trabaja a su manera',
    'No hay procesos escritos: el mismo trabajo se hace distinto según quién lo haga, y los errores se repiten.'],
  ['M5 19V11 M12 19V5 M19 19v-6', 'Los números llegan tarde',
    'Ventas, costos y cobranzas se miran a fin de mes, cuando ya no hay margen para corregir.'],
  ['M4 12a8 8 0 0 1 14-5.3 M20 12a8 8 0 0 1-14 5.3 M18 3v4h-4 M6 21v-4h4', 'Se arregla y vuelve a pasar',
    'Se apaga el incendio del día, pero nadie mira por qué empezó. A los meses, el mismo problema.'],
]

const SERVICIOS = [
  {
    fig: 'datos', tag: 'Servicio principal',
    icon: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14 M16 16l4.5 4.5',
    t: 'Diagnóstico integral',
    d: 'Relevamos cómo funciona tu empresa por dentro: procesos, equipo, números y herramientas. Te decimos qué problemas tiene, por qué los tiene y por dónde conviene empezar.',
    checks: ['Entrevistas con el dueño y el equipo, y observación del día a día', 'Mapa de procesos y de quién hace qué', 'Informe con problemas, causas y prioridades en 3 semanas'],
  },
  {
    fig: 'automatizacion', tag: 'Implementación',
    icon: 'M6 6m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M18 18m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M8.5 6H14a4 4 0 0 1 4 4v5.5',
    t: 'Organización y mejora de procesos',
    d: 'Con el diagnóstico en la mano, ordenamos la empresa junto a tu equipo: roles claros, procesos escritos y las tareas repetidas que conviene sacar de encima.',
    checks: ['Roles, responsabilidades y circuitos de trabajo', 'Procedimientos simples que el equipo entiende y usa', 'Automatización de tareas repetidas cuando suma'],
  },
  {
    fig: 'software', tag: 'Abono mensual',
    icon: 'M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0 M12 8v4l2.5 2.5',
    t: 'Control y seguimiento',
    d: 'No entregamos un informe y desaparecemos. Medimos todos los meses si la mejora se sostiene, si el problema sigue o si apareció otro, y ajustamos el plan.',
    checks: ['Indicadores acordados con vos desde el principio', 'Una reunión mensual de avance con el dueño', 'Ajustes al plan según lo que muestran los números'],
  },
]

const COMPLEMENTOS = [
  ['M5 19V11 M12 19V5 M19 19v-6', 'Tablero de indicadores', 'Ventas, costos, stock y cobranzas en un tablero que se actualiza solo.'],
  ['M6 6m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M18 18m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M8.5 6H14a4 4 0 0 1 4 4v5.5', 'Automatizaciones', 'Lo que se copia a mano entre WhatsApp, planillas y facturación pasa solo.'],
  ['M4 19h16 M6 15l4-8 4 5 4-7', 'Capacitación del equipo', 'Talleres cortos para que el equipo adopte los procesos y las herramientas nuevas.'],
  ['M7 4h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6l-4 3.5V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z', 'Atención con IA', 'Un agente que responde consultas y pedidos por WhatsApp a cualquier hora.'],
]

const CLIENTES = [
  ['M4 10.5 12 4l8 6.5 M6 9v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9 M10 20v-4a2 2 0 0 1 4 0v4', 'Comercios y distribuidoras',
    'Pedidos, stock, listas de precios y cobranzas que hoy dependen de planillas y de la memoria de alguien.'],
  ['M9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1 M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z M4 12h16', 'Servicios y estudios profesionales',
    'Clientes, vencimientos y tareas repartidas entre varias personas sin un circuito claro.'],
  ['M3 20h18 M5 20V9l5 3V9l5 3V6l4 2v12', 'Talleres e industria liviana',
    'Producción, compras y entregas que se coordinan de palabra y se traban cuando falta alguien.'],
]

const PORQUE = [
  ['Primero entendemos', 'No llegamos con una receta ni un sistema para vender. Arrancamos por el diagnóstico y recién después proponemos.'],
  ['Nos quedamos después', 'El seguimiento mensual es parte del servicio: medimos si la mejora se sostiene y corregimos a tiempo.'],
  ['Gestión y tecnología juntas', 'Cuando un proceso conviene automatizarlo o medirlo, lo hace nuestro propio equipo técnico. No hay que contratar a otro.'],
  ['A escala de pyme', 'Trabajamos por etapas y con un abono mensual. Hablamos claro, sin jerga, y directo con quien hace el trabajo.'],
]

const PASOS = [
  ['Primera charla', 'Una reunión sin cargo para conocer la empresa y lo que te preocupa.'],
  ['Diagnóstico', 'Tres semanas de relevamiento y un informe con causas y prioridades.'],
  ['Plan y puesta en marcha', 'Ordenamos procesos y roles con tu equipo, empezando por lo más urgente.'],
  ['Seguimiento', 'Indicadores y una reunión por mes para sostener la mejora.'],
]

// el equipo de la consultora; sin foto va con iniciales
const EQUIPO = [
  { photo: '/seba.jpg', name: 'Sebastián Deina', role: 'Tecnología y automatización', pos: '20% 30%',
    bio: 'Fundó Nimbo. Lleva las mejoras al día a día con automatizaciones, tableros y sistemas.' },
  { initials: 'A', name: 'Ari', role: 'Diagnóstico organizacional', pos: '80% 70%',
    bio: 'Releva la empresa con entrevistas y observación, y arma el mapa de problemas y causas.' },
  { initials: 'K', name: 'Kate', role: 'Procesos y mejora continua', pos: '50% 20%',
    bio: 'Convierte el diagnóstico en procesos simples y acompaña al equipo mientras los adopta.' },
  { initials: 'A', name: 'Agustín', role: 'Estrategia y modelo de negocio', pos: '30% 80%',
    bio: 'Mira la empresa completa: propuesta de valor, clientes, costos y hacia dónde crecer.' },
  { initials: 'V', name: 'Valentín', role: 'Comercial y clientes', pos: '70% 40%',
    bio: 'Es el primer contacto. Coordina la charla inicial y la relación con cada cliente.' },
  { initials: 'C', name: 'Cameron', role: 'Administración y finanzas', pos: '10% 60%',
    bio: 'Ordena los números del cliente y arma los indicadores que se siguen cada mes.' },
]

const FAQ = [
  ['¿La primera reunión tiene costo?', 'No. Es una charla para conocernos y ver si podemos ayudarte. Si avanzamos, el diagnóstico se cotiza por escrito antes de empezar.'],
  ['¿Cuánto dura el diagnóstico?', 'Alrededor de tres semanas, según el tamaño de la empresa. Al final te entregamos el informe y lo repasamos juntos.'],
  ['¿Trabajan en mi empresa o a distancia?', 'Combinado: el relevamiento lo hacemos en tu empresa, porque hay que ver cómo se trabaja; el seguimiento puede ser por videollamada.'],
  ['¿Necesito usar algún sistema?', 'No. Partimos de lo que ya usás. Si hace falta una herramienta nueva, te la proponemos y la implementa nuestro equipo.'],
]

export default function Pyme() {
  return (
    <>
      <section className="hero wrap" id="top">
        <div className="hero-art hero-photo">
          <div><img src="/cielo-grabado.webp" alt="" width="1736" height="906" fetchPriority="high" /></div>
        </div>
        <div className="hero-row">
          <div data-reveal>
            <span className="pill py-kicker">Nimbo · Consultoría para pymes</span>
            <h1>Ordenamos tu pyme para que crezca sin depender de vos.</h1>
          </div>
          <div data-reveal style={{ '--d': '120ms' }}>
            <p className="lead"><Words>Diagnosticamos cómo funciona tu empresa, ordenamos los procesos con tu equipo y te acompañamos hasta que la mejora se sostiene.</Words></p>
            <div className="btns">
              <a className="btn btn-acc" href="/pyme/contacto" data-cta="pyme-hero">Pedí un diagnóstico <Arrow /></a>
              <a className="btn" href="#servicios">Ver servicios <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <div className="frame">
        <section id="nosotros" className="sec wrap">
          <div className="py-about" data-reveal>
            <h2>Quiénes somos.</h2>
            <div>
              <p className="lead">Nimbo es una consultora de Buenos Aires para pequeñas y medianas empresas. Nacimos armando automatizaciones y sistemas para pymes, y en cada proyecto vimos lo mismo: el problema de fondo casi nunca era la herramienta, sino cómo estaba organizada la empresa.</p>
              <p className="lead">Por eso trabajamos en tres tiempos: entender, ordenar y acompañar. Somos un equipo chico que combina gestión, procesos y tecnología.</p>
            </div>
          </div>
        </section>

        <section id="problemas" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Lo que vemos en las pymes.</h2>
              <p className="lead">Si alguna de estas te suena, es por donde empezaría el diagnóstico.</p>
            </div>
          </div>
          <div className="ev-grid ev-grid-4">
            {SINTOMAS.map(([icon, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                <div className="ev-top"><span className="ev-icon"><Icon d={icon} /></span></div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Qué hacemos.</h2>
              <p className="lead">Tres servicios que van en orden: entender la empresa, ordenarla y sostener el cambio.</p>
            </div>
          </div>
          {SERVICIOS.map((s, i) => (
            <article className="row" key={s.t}>
              <div className="fig" data-reveal>
                <Fig component={FIGS[s.fig].C} meta={FIGS[s.fig].meta} className="fig-player" onTap={false} />
              </div>
              <div className="row-copy" data-reveal style={{ '--d': '100ms' }}>
                <span className="mono py-num">0{i + 1} · {s.tag}</span>
                <div className="row-title">
                  <span className="chip"><Icon d={s.icon} /></span>
                  <h3>{s.t}</h3>
                </div>
                <p>{s.d}</p>
                <ul className="checks">{s.checks.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
            </article>
          ))}

          <div className="sec-head py-sub" data-reveal>
            <div>
              <h3>Servicios complementarios.</h3>
              <p className="lead">Cuando el diagnóstico lo pide, lo implementa el equipo técnico de Nimbo.</p>
            </div>
          </div>
          <div className="ev-grid ev-grid-4">
            {COMPLEMENTOS.map(([icon, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                <div className="ev-top"><span className="ev-icon"><Icon d={icon} /></span></div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="clientes" className="sec wrap" data-buddy="¿Tu empresa es de estas? Contame cómo trabajan.">
          <div className="sec-head" data-reveal>
            <div>
              <h2>A quién ayudamos.</h2>
              <p className="lead">Pymes de 10 a 70 personas del AMBA, con el dueño todavía metido en la operación y ganas de crecer con orden.</p>
            </div>
          </div>
          <div className="ev-grid ev-grid-3">
            {CLIENTES.map(([icon, t, d], i) => (
              <a key={t} className="ev-card" href="/pyme/contacto" data-reveal style={{ '--d': `${i * 80}ms` }}>
                <div className="ev-top"><span className="ev-icon"><Icon d={icon} /></span></div>
                <h4>{t}</h4>
                <p>{d}</p>
                <span className="other-go">Contanos tu caso <Arrow /></span>
              </a>
            ))}
          </div>
        </section>

        <section id="propuesta" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Por qué Nimbo.</h2>
              <p className="lead">Una consultora que entiende antes de proponer y que se queda hasta ver el resultado.</p>
            </div>
          </div>
          <ol className="steps" data-reveal>
            {PORQUE.map(([t, d], i) => (
              <li key={t}><span className="mono">0{i + 1}</span><h4>{t}</h4><p>{d}</p></li>
            ))}
          </ol>
        </section>

        <section id="proceso" className="sec wrap">
          <div className="sec-head" data-reveal><div><h2>Cómo trabajamos.</h2></div></div>
          <ol className="steps" data-reveal>
            {PASOS.map(([t, d], i) => (
              <li key={t}><span className="mono">Paso {i + 1}</span><h4>{t}</h4><p>{d}</p></li>
            ))}
          </ol>
        </section>

        <section id="equipo" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>El equipo.</h2>
              <p className="lead">Seis personas que se reparten el trabajo con cada cliente. Hablás directo con quien lo hace.</p>
            </div>
          </div>
          <div className="team team-3">
            {EQUIPO.map((p, i) => (
              <article className="person" key={p.name} data-reveal style={{ '--d': `${(i % 3) * 90}ms` }}>
                <div className="person-cover" style={{ backgroundPosition: p.pos }} />
                <div className="person-body">
                  {p.photo ? <img className="avatar" src={p.photo} alt={p.name} /> : <span className="avatar avatar-i">{p.initials}</span>}
                  <h4>{p.name}</h4>
                  <span className="mono">{p.role}</span>
                  <p>{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="sec wrap">
          <div className="faq-grid">
            <div data-reveal>
              <h2 className="faq-title">Antes de escribirnos.</h2>
              <div className="ask">
                <span className="chip chip-sq"><Icon d="M7 4h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6l-4 3.5V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" /></span>
                <div><b>¿Preferís WhatsApp?</b><span>Escribinos y te responde alguien del equipo.</span></div>
                <a className="btn btn-wide" href={WA_PYME} data-cta="pyme-wa">WhatsApp <Arrow /></a>
              </div>
            </div>
            <div className="faq" data-reveal style={{ '--d': '100ms' }}>
              {FAQ.map(([q, a], i) => (
                <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
              ))}
            </div>
          </div>
        </section>

        <Final title="Contanos qué te preocupa de tu empresa." cta="/pyme/contacto" alt={['/pyme#servicios', 'Ver servicios']} />
      </div>
    </>
  )
}
