// /pyme · Nimbodata Consultoría: la unidad de Nimbodata que hace diagnóstico y mejora de procesos de gestión para pymes
// de servicios y obras del AMBA. Es la cara al mercado del Plan de Negocio Express (Parte C del trabajo de la facultad):
// todo lo que dice esta página tiene que coincidir con el plan (segmento, servicios, equipo, caso, modalidad).
// El primer cliente va sin nombre: el plan pide usar el caso respetando su confidencialidad.
import Fig from './Fig'
import { WA_PYME } from './data'
import { FIGS } from './scenes'
import { Arrow, Final, Icon } from './ui'
import { Words } from './motion'

const SINTOMAS = [
  ['M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M4 21c0-4 3.6-7 8-7s8 3 8 7', 'Todo pasa por la dirección',
    'Los asuntos operativos terminan siempre en el dueño o en el socio gerente, y la empresa se frena cuando no están.'],
  ['M4 7h12 M4 12h16 M4 17h9 M18 15l2 2-2 2', 'Demoras y tareas duplicadas',
    'Con el crecimiento, el mismo trabajo se hace dos veces y nadie tiene claro quién es responsable de cada paso.'],
  ['M12 3v18 M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.6 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3', 'Gastos que no se explican',
    'Hay planillas y sistema contable, pero no se logra anticipar ni explicar buena parte de lo que se gasta.'],
  ['M5 19V11 M12 19V5 M19 19v-6', 'Información que llega tarde',
    'Los datos existen, pero no se clasifican ni se revisan a tiempo para decidir mientras el proceso está en curso.'],
]

// el servicio principal y los cuatro complementarios del plan (punto 5)
const DIAGNOSTICO = {
  icon: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14 M16 16l4.5 4.5',
  checks: [
    'Acordamos antes qué área o proceso se analiza: gastos, facturación, tareas, operaciones',
    'Entrevistas a varios roles, cruzadas con planillas, registros y comprobantes',
    'Informe escrito: el proceso, los problemas, sus causas y las mejoras recomendadas',
    'Mejoras por prioridad, con plazos, responsables y recursos estimados',
  ],
}
const COMPLEMENTOS = [
  ['M4 5h6v6H4z M14 13h6v6h-6z M7 11v4a2 2 0 0 0 2 2h5 M14 7h3a2 2 0 0 1 2 2v4', 'Diseño de procesos y roles',
    'Para empresas que todavía no tienen una estructura administrativa armada, o que la tienen pero no funciona bien.'],
  ['M4 19h16 M6 15l4-8 4 5 4-7', 'Implementación y capacitación',
    'Definimos con tu equipo los cambios concretos y lo capacitamos para que pueda sostenerlos.'],
  ['M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0 M12 8v4l2.5 2.5', 'Seguimiento',
    'Mensual o trimestral: medimos los indicadores del diagnóstico para que la mejora no se abandone.'],
  ['M6 4h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z M3 8.5h18 M9 21h6', 'Asesoría en herramientas',
    'Cuando el diagnóstico lo amerita, te ayudamos a elegir herramientas digitales de gestión.'],
]
const BENEFICIOS = [
  'Tareas y responsabilidades más claras, con menos confusiones y trabajo duplicado',
  'Información ordenada y a tiempo para controlar gastos y operaciones',
  'Mejoras priorizadas según su importancia, su costo y la posibilidad real de aplicarlas',
  'Procedimientos y controles que ayudan a sostener las mejoras en el tiempo',
]

const CASO = [
  ['La consulta', 'Una pyme de energía, telecomunicaciones y obras civiles, de 20 personas. Tenía cashflow, sistema contable y planillas, pero no lograba anticipar ni explicar buena parte de sus gastos.'],
  ['El diagnóstico', 'Relevamos la documentación y entrevistamos a la socia de administración y al equipo de facturación. El problema no era la falta de información: faltaba una clasificación consistente y una revisión periódica mientras el proceso estaba en curso.'],
  ['El plan', 'Un plan de acción de bajo costo, sin incorporar herramientas nuevas: ordenar lo que la empresa ya tenía y revisarlo a tiempo.'],
]

const SITUACIONES = [
  ['M4 6h16 M4 12h10 M4 18h13', 'Todavía no ordenaron sus procesos',
    'No hay procesos, registros ni responsabilidades formalizados. Cada uno resuelve a su manera.'],
  ['M5 19V11 M12 19V5 M19 19v-6', 'Tienen información, pero no la usan a tiempo',
    'Hay sistemas y datos administrativos, pero cuesta integrarlos, analizarlos o usarlos para decidir.'],
]

const PASOS = [
  ['Primera reunión', 'Sin cargo, para entender qué necesita tu empresa y si podemos ayudarte.'],
  ['Propuesta y contrato', 'Qué área analizamos, qué entregamos, el precio cerrado y los plazos. Con un acuerdo de confidencialidad.'],
  ['Diagnóstico e implementación', 'Relevamos en tu empresa y analizamos a distancia. Unas 8 semanas entre las dos etapas.'],
  ['Seguimiento', 'Indicadores cada mes o cada trimestre, y una revisión sin cargo a los 90 días de terminar.'],
]

// propuesta de valor del plan (Canvas)
const PORQUE = [
  ['Diagnóstico con evidencia', 'Cruzamos lo que dicen las entrevistas con lo que muestran las planillas y los comprobantes. No trabajamos con impresiones.'],
  ['Primero, lo que ya tenés', 'Ordenamos lo que la empresa ya tiene. Comprar algo nuevo es el último recurso.'],
  ['El mismo equipo de punta a punta', 'No hay un socio que vende y un junior que ejecuta: la misma dupla hace el diagnóstico, la implementación y el seguimiento.'],
  ['Miradas distintas', 'Un equipo con formación en administración, marketing y comercio exterior mira el mismo problema desde varios ángulos.'],
  ['IA para analizar', 'Procesamos en horas volúmenes de información que a mano llevarían días.'],
  ['Un caso real', 'Nuestro método ya se aplicó en una pyme real. Te lo mostramos en la primera reunión.'],
]

// las seis áreas del plan (punto 7.5); la asignación de cada integrante es provisoria
const EQUIPO = [
  { initials: 'V', name: 'Valentín', role: 'Dirección y comercial', pos: '70% 40%',
    bio: 'Relación con los clientes, propuestas, contratos y coordinación general.' },
  { initials: 'A', name: 'Ari', role: 'Metodología y diagnóstico', pos: '80% 70%',
    bio: 'Guías de entrevista, matriz de alternativas y calidad de cada informe.' },
  { initials: 'C', name: 'Cameron', role: 'Administración y finanzas', pos: '10% 60%',
    bio: 'Cotizaciones, cobranzas, presupuesto y vínculo con el contador y el abogado.' },
  { initials: 'A', name: 'Agustín', role: 'Marketing y marca', pos: '30% 80%',
    bio: 'Sitio web, LinkedIn, contenidos, eventos y cámaras pyme.' },
  { photo: '/seba.jpg', name: 'Sebastián Deina', role: 'Datos e IA', pos: '20% 30%',
    bio: 'Procesa la información de cada cliente, arma los tableros y hace de puente con Nimbodata.' },
  { initials: 'K', name: 'Kate', role: 'Seguimiento y calidad', pos: '50% 20%',
    bio: 'Mide los indicadores después de cada proyecto, la satisfacción y la retención de clientes.' },
]

const FAQ = [
  ['¿La primera reunión tiene costo?', 'No. Es para entender qué necesita tu empresa. Si avanzamos, te mandamos una propuesta por escrito con precio cerrado antes de empezar.'],
  ['¿Cuánto dura un proyecto?', 'El diagnóstico y la implementación llevan unas 8 semanas en total. Después, el seguimiento puede ser mensual o trimestral.'],
  ['¿Trabajan en mi empresa o a distancia?', 'Las dos cosas: el relevamiento, las entrevistas y las capacitaciones son presenciales; el análisis, el informe y el seguimiento, remotos.'],
  ['¿Voy a tener que comprar un sistema nuevo?', 'Casi nunca. Primero ordenamos lo que ya usás. Si hace falta una herramienta, te asesoramos para elegirla.'],
  ['¿Qué pasa con la información de mi empresa?', 'Firmamos un acuerdo de confidencialidad al arrancar, junto con el contrato que fija qué entregamos y qué necesitamos de tu equipo.'],
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
            <span className="pill py-kicker">Nimbodata Consultoría</span>
            <h1>Ordenamos la gestión de tu pyme con lo que ya tiene.</h1>
          </div>
          <div data-reveal style={{ '--d': '120ms' }}>
            <p className="lead"><Words>Diagnóstico y mejora de procesos para pymes de servicios y obras del AMBA. Encontramos qué falla, por qué falla, y te acompañamos a resolverlo.</Words></p>
            <div className="btns">
              <a className="btn btn-acc" href="/pyme/contacto" data-cta="pyme-hero">Pedí una primera reunión <Arrow /></a>
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
              <p className="lead">Nimbodata Consultoría ayuda a pequeñas y medianas empresas a organizar y mejorar sus procesos administrativos, operativos y de gestión. Somos un equipo de Buenos Aires con formación en administración de empresas, marketing y comercio exterior.</p>
              <p className="lead">Somos parte de Nimbodata, que hace automatizaciones e inteligencia artificial para empresas. Acá nos dedicamos a otra cosa: diagnosticar y ordenar la gestión. La IA la usamos como herramienta de trabajo y, si tu empresa la necesita, te la ofrecemos.</p>
            </div>
          </div>
        </section>

        <section id="problemas" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Cuando la empresa crece más rápido que su gestión.</h2>
              <p className="lead">Es lo que más vemos en pymes en crecimiento. Si alguna te suena, por ahí empieza el diagnóstico.</p>
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
              <p className="lead">Un servicio principal y cuatro complementarios. Cada empresa contrata las etapas que necesita.</p>
            </div>
          </div>
          <article className="row">
            <div className="fig" data-reveal>
              <Fig component={FIGS.datos.C} meta={FIGS.datos.meta} className="fig-player" onTap={false} />
            </div>
            <div className="row-copy" data-reveal style={{ '--d': '100ms' }}>
              <span className="mono py-num">Servicio principal</span>
              <div className="row-title">
                <span className="chip"><Icon d={DIAGNOSTICO.icon} /></span>
                <h3>Diagnóstico de gestión y procesos</h3>
              </div>
              <p>Revisamos cómo se trabaja en un área o proceso de tu empresa para detectar qué está funcionando mal, por qué ocurre y qué se puede mejorar.</p>
              <ul className="checks">{DIAGNOSTICO.checks.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </article>

          <div className="sec-head py-sub" data-reveal>
            <div>
              <h3>Servicios complementarios.</h3>
              <p className="lead">Para diseñar los cambios, ponerlos en práctica, medir los resultados o elegir herramientas.</p>
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

          <div className="py-benefits" data-reveal>
            <h3>Lo que gana tu empresa.</h3>
            <ul className="checks">{BENEFICIOS.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </section>

        <section id="clientes" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>A quién ayudamos.</h2>
              <p className="lead">Pymes de servicios, obras y proyectos del AMBA, de 10 a 50 personas, que crecieron más rápido que sus procedimientos de gestión.</p>
            </div>
          </div>
          <div className="ev-grid">
            {SITUACIONES.map(([icon, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 80}ms` }}>
                <div className="ev-top"><span className="ev-icon"><Icon d={icon} /></span></div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="rubros-more" data-reveal>Trabajamos con el dueño, el socio gerente o el responsable de administración. Pedimos tres cosas: un problema que se pueda identificar, acceso a la información y alguien de la dirección que se haga cargo de aplicar los cambios. <a href="/pyme/contacto">Contanos tu caso →</a></p>
        </section>

        <section id="caso" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Nuestro primer caso.</h2>
              <p className="lead">Por confidencialidad no damos el nombre del cliente, pero sí cómo trabajamos.</p>
            </div>
          </div>
          <ol className="steps steps-3 py-case" data-reveal>
            {CASO.map(([t, d], i) => (
              <li key={t}><span className="mono">0{i + 1}</span><h4>{t}</h4><p>{d}</p></li>
            ))}
          </ol>
        </section>

        <section id="proceso" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Cómo trabajamos.</h2>
              <p className="lead">Planteamos hipótesis, entrevistamos a varios roles y separamos el síntoma del problema, su causa y su consecuencia.</p>
            </div>
          </div>
          <ol className="steps" data-reveal>
            {PASOS.map(([t, d], i) => (
              <li key={t}><span className="mono">Paso {i + 1}</span><h4>{t}</h4><p>{d}</p></li>
            ))}
          </ol>
        </section>

        <section id="propuesta" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Por qué Nimbodata.</h2>
              <p className="lead">Atención directa para empresas que, por su tamaño, no son prioridad para las consultoras grandes. Cambios concretos y de bajo costo en vez de proyectos largos y caros.</p>
            </div>
          </div>
          <div className="ev-grid ev-grid-3">
            {PORQUE.map(([t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${(i % 3) * 70}ms` }}>
                <span className="mono py-num">0{i + 1}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="equipo" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>El equipo.</h2>
              <p className="lead">Seis socios, cada uno a cargo de un área. Cada proyecto lo lleva una dupla, y todos participan de las entrevistas y los relevamientos.</p>
            </div>
          </div>
          <div className="team team-3">
            {EQUIPO.map((p, i) => (
              <article className="person" key={p.role} data-reveal style={{ '--d': `${(i % 3) * 90}ms` }}>
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

        <Final title="Contanos qué está frenando la gestión de tu empresa." cta="/pyme/contacto" alt={['/pyme#servicios', 'Ver servicios']} />
      </div>
    </>
  )
}
