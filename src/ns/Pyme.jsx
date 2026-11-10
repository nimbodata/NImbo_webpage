// /pyme · Nimbodata Consultoría: la unidad de Nimbodata que hace diagnóstico y mejora de la gestión interna para pymes
// de obras y servicios técnicos del AMBA. Es la cara al mercado del Plan de Negocio Express (Parte C del trabajo de la
// facultad): todo lo que dice esta página tiene que coincidir con el plan (segmento, servicios, equipo, caso, modalidad).
// El primer cliente va sin nombre: el plan pide usar el caso respetando su confidencialidad.
import Fig from './Fig'
import { WA_PYME } from './data'
import { FIGS } from './scenes'
import { Arrow, Final } from './ui'
import { Words } from './motion'

// los síntomas del cliente objetivo (plan, 1.2 y 1.4)
const SINTOMAS = [
  ['M12 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8 M4 21c0-4 3.6-7 8-7s8 3 8 7', 'Todo pasa por la dirección',
    'Los asuntos operativos terminan siempre en el dueño o en el socio gerente, y la empresa se frena cuando no están.'],
  ['M4 7h12 M4 12h16 M4 17h9 M18 15l2 2-2 2', 'Demoras y tareas duplicadas',
    'Con más obras en curso, el mismo trabajo se hace dos veces y nadie tiene claro quién es responsable de cada paso.'],
  ['M12 3v18 M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.6 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3', 'Gastos que no se explican',
    'Hay planillas y sistema contable, pero cuesta controlar los costos, los materiales y el personal de cada obra.'],
  ['M5 19V11 M12 19V5 M19 19v-6', 'Desvíos que aparecen al cierre',
    'La información no se clasifica ni se revisa mientras la obra está en curso, y los desvíos se ven cuando ya no se pueden corregir.'],
]

// el servicio principal (plan, 4.2): las tres dimensiones de la gestión y el informe
const DIAGNOSTICO = {
  icon: 'M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14 M16 16l4.5 4.5',
  checks: [
    'Circulación de la información: cómo se genera, se registra y se comparte entre las obras y la administración',
    'Delimitación de responsabilidades: quién ejecuta, aprueba y controla cada etapa del proceso',
    'Seguimiento de las operaciones: cómo se controlan el avance, los plazos y los costos de cada obra en curso',
    'Informe escrito con los problemas, sus causas y la evidencia, las alternativas comparadas por costo, plazo e impacto, y las acciones por prioridad',
  ],
}
// los cuatro servicios complementarios (plan, 4.3)
const COMPLEMENTOS = [
  ['M4 5h6v6H4z M14 13h6v6h-6z M7 11v4a2 2 0 0 0 2 2h5 M14 7h3a2 2 0 0 1 2 2v4', 'Diseño de procesos',
    'Para empresas sin procesos formalizados, o con procesos que ya no responden a la operación: circuitos, responsables, registros y controles.'],
  ['M4 19h16 M6 15l4-8 4 5 4-7', 'Implementación acompañada',
    'Ponemos en práctica la alternativa que elegiste: primero en un área u obra piloto, con ajustes y capacitación al personal.'],
  ['M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0 M12 8v4l2.5 2.5', 'Seguimiento posterior',
    'Mensual o trimestral: medimos los indicadores del diagnóstico para que la mejora se sostenga y corregir desvíos a tiempo.'],
  ['M6 4h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z M3 8.5h18 M9 21h6', 'Asesoría en herramientas digitales',
    'Cuando el diagnóstico lo justifica, te ayudamos a elegir la herramienta y, con Nimbodata, a sumar automatización e IA.'],
]
// beneficios para el cliente (plan, 4.4)
const BENEFICIOS = [
  'Procesos ordenados y con responsables definidos, con menos demoras, tareas duplicadas y dependencia de la dirección',
  'Información confiable y a tiempo, registrada mientras la obra está en curso y no recién al cierre',
  'Más control y planificación, con indicadores que permiten anticipar problemas y corregirlos',
  'Mejoras que se sostienen: el personal queda capacitado y los resultados se verifican en el seguimiento',
  'Una inversión acotada: se prioriza por importancia y costo, y se aprovecha primero lo que la empresa ya tiene',
]

const CASO = [
  ['La consulta', 'Una pyme de energía, telecomunicaciones y obras civiles, de 20 personas. Tenía cashflow, sistema contable y planillas, pero no lograba anticipar ni explicar buena parte de sus gastos.'],
  ['El diagnóstico', 'Relevamos la documentación y entrevistamos a la socia de administración y al equipo de facturación. El problema no era la falta de información: faltaba una clasificación consistente y una revisión periódica mientras el proceso estaba en curso.'],
  ['El plan', 'Un plan de acción de bajo costo, sin incorporar herramientas nuevas: ordenar lo que la empresa ya tenía y revisarlo a tiempo.'],
]

const SITUACIONES = [
  ['M4 6h16 M4 12h10 M4 18h13', 'Todavía no formalizaron sus procesos',
    'No hay procesos, registros ni responsabilidades definidos. Cada obra y cada persona resuelve a su manera.'],
  ['M5 19V11 M12 19V5 M19 19v-6', 'Tienen información, pero no la usan a tiempo',
    'Hay sistemas y datos administrativos, pero cuesta integrarlos, analizarlos o usarlos para decidir.'],
]

// proceso de venta y de trabajo (plan, 6.3, 6.4 y 7.2)
const PASOS = [
  ['Primera reunión', 'Sin cargo, para conocer el problema de tu empresa y ver si podemos ayudarte.'],
  ['Propuesta y contrato', 'Por escrito: qué incluye, qué queda fuera, el plazo y el precio cerrado. El contrato tiene cláusula de confidencialidad.'],
  ['Diagnóstico e implementación', 'Unas 8 semanas. Relevamos en tu empresa y en las obras, analizamos a distancia y acompañamos los cambios con una prueba piloto.'],
  ['Seguimiento', 'Indicadores cada mes o cada trimestre, y una revisión sin cargo a los 90 días de las tres prioridades del diagnóstico.'],
]

// diferenciación (plan, 4.5)
const PORQUE = [
  ['La gestión interna, en el centro', 'Otros miran la obra desde lo técnico o los números desde la contabilidad. Nosotros trabajamos sobre cómo circula la información, quién se ocupa de qué y cómo se controla cada operación.'],
  ['A la medida de tu pyme', 'Cambios concretos, de bajo costo y en plazos cortos, en vez de programas largos pensados para empresas más grandes.'],
  ['Primero, los procesos', 'Ordenamos y aprovechamos lo que la empresa ya tiene. Recomendamos un sistema nuevo solo si el diagnóstico lo justifica.'],
  ['IA para analizar tus datos', 'Con las herramientas de Nimbodata procesamos en horas comprobantes, planillas y registros que a mano llevarían días.'],
  ['Hasta ver los resultados', 'No terminamos con el informe: acompañamos la implementación, capacitamos al personal y medimos los indicadores.'],
  ['Un caso real del rubro', 'Nuestro método ya se aplicó en una pyme de obras. Te lo mostramos en la primera reunión.'],
]

// las seis áreas del plan (punto 6.5)
const EQUIPO = [
  { initials: 'VE', name: 'Valentín Elizari', role: 'Dirección y comercial', pos: '70% 40%',
    bio: 'Relación con los clientes, reuniones iniciales, propuestas, contratos y coordinación general.' },
  { photo: '/equipo-ariana.jpg', name: 'Ariana Sosa', role: 'Metodología y diagnóstico', pos: '80% 70%',
    bio: 'Guías de relevamiento y entrevista, matriz de comparación de alternativas y calidad de cada informe.' },
  { initials: 'CA', name: 'Cameron Avelino Melia', role: 'Administración y finanzas', pos: '10% 60%',
    bio: 'Cotizaciones, facturación, cobranzas y presupuesto de la consultora.' },
  { initials: 'AM', name: 'Agustín Marcos', role: 'Marketing y marca', pos: '30% 80%',
    bio: 'Sitio web, LinkedIn, contenidos y participación en cámaras y eventos del sector.' },
  { photo: '/seba.jpg', name: 'Sebastián Deina', role: 'Datos e IA', pos: '20% 30%',
    bio: 'Análisis de la información de cada cliente con IA, tableros de indicadores y vínculo con Nimbodata.' },
  { photo: '/equipo-katerina.jpg', name: 'Katerina Prada', role: 'Seguimiento y calidad', pos: '50% 20%',
    bio: 'Indicadores después de cada proyecto, encuestas de satisfacción, revisión a los 90 días y retención de clientes.' },
]

const FAQ = [
  ['¿La primera reunión tiene costo?', 'No. Es para conocer el problema de tu empresa. Si avanzamos, te mandamos una propuesta por escrito con el alcance, el plazo y el precio cerrado antes de empezar.'],
  ['¿Cómo se paga?', 'Con precio cerrado: 50 % al iniciar el proyecto y 50 % al terminar la implementación. El seguimiento es un abono mensual.'],
  ['¿Cuánto dura un proyecto?', 'El diagnóstico y la implementación llevan unas 8 semanas en total. Después, el seguimiento puede ser mensual o trimestral.'],
  ['¿Trabajan en mi empresa o a distancia?', 'Las dos cosas: las entrevistas, el relevamiento y las capacitaciones son presenciales, en tu empresa y en las obras; el análisis, los informes y parte del seguimiento, remotos.'],
  ['¿Voy a tener que comprar un sistema nuevo?', 'Casi nunca. Primero ordenamos lo que ya usás. Si hace falta una herramienta, te asesoramos para elegirla.'],
  ['¿Qué pasa con la información de mi empresa?', 'El contrato incluye una cláusula de confidencialidad, y la documentación se guarda en cuentas institucionales, no personales.'],
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
            <p className="lead"><Words>Diagnóstico y mejora de la gestión interna para pymes de obras y servicios técnicos del AMBA. Encontramos qué falla, por qué falla, y te acompañamos a resolverlo.</Words></p>
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
              <p className="lead">Nimbodata Consultoría es una consultora de gestión creada en 2026 por un equipo de seis integrantes con formación en administración de empresas, marketing y comercio exterior. Ayudamos a pymes de obras y servicios técnicos a organizar y mejorar sus procesos administrativos, operativos y de gestión.</p>
              <p className="lead">Somos una extensión de Nimbodata, que hace automatizaciones e inteligencia artificial para empresas. Acá nos dedicamos a otra cosa: diagnosticar y ordenar la gestión. La IA la usamos para analizar la información de cada cliente y, si tu empresa la necesita, te la ofrecemos.</p>
            </div>
          </div>
        </section>

        <section id="problemas" className="sec wrap">
          <div className="sec-head" data-reveal>
            <div>
              <h2>Cuando la empresa crece más rápido que su gestión.</h2>
              <p className="lead">Cada obra tiene sus propios costos, materiales y personal. Si alguna de estas situaciones te suena, por ahí empieza el diagnóstico.</p>
            </div>
          </div>
          <div className="ev-grid ev-grid-4">
            {SINTOMAS.map(([, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                <span className="mono py-num">{String(i + 1).padStart(2, '0')}</span>
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
              <p className="lead">Un servicio principal y cuatro complementarios. Cada empresa contrata las etapas que necesita, según el problema que quiera resolver.</p>
            </div>
          </div>
          <article className="row">
            <div className="fig" data-reveal>
              <Fig component={FIGS.datos.C} meta={FIGS.datos.meta} className="fig-player" onTap={false} />
            </div>
            <div className="row-copy" data-reveal style={{ '--d': '100ms' }}>
              <span className="mono py-num">Servicio principal</span>
              <div className="row-title">
                <h3>Diagnóstico de gestión y procesos</h3>
              </div>
              <p>Identificamos qué funciona mal en un área o proceso de tu empresa, por qué ocurre y qué alternativas de mejora son viables. Antes de empezar acordamos qué área se estudia y qué queda fuera. Analizamos tres dimensiones:</p>
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
            {COMPLEMENTOS.map(([, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 70}ms` }}>
                <span className="mono py-num">{String(i + 1).padStart(2, '0')}</span>
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
              <p className="lead">Pymes de construcción, obras civiles, instalaciones eléctricas, energía y telecomunicaciones del AMBA, de 10 a 50 personas y con varias obras en curso, que crecieron más rápido que sus procedimientos de gestión.</p>
            </div>
          </div>
          <div className="ev-grid">
            {SITUACIONES.map(([, t, d], i) => (
              <div key={t} className="ev-card" data-reveal style={{ '--d': `${i * 80}ms` }}>
                <span className="mono py-num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <p className="rubros-more" data-reveal>Trabajamos en CABA y los 24 partidos del Gran Buenos Aires. Pedimos tres cosas: una necesidad de mejora que se pueda identificar, disposición a compartir la información y el compromiso de la dirección para aplicar los cambios. <a href="/pyme/contacto">Contanos tu caso →</a></p>
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
              <p className="lead">Entrevistamos a varios roles, contrastamos lo que dicen con lo que muestran los datos y separamos el síntoma del problema, su causa y la evidencia que lo respalda.</p>
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
              <p className="lead">Una consultoría directa y a la medida de empresas que, por su tamaño, no son prioridad para las consultoras grandes. El mismo equipo hace el diagnóstico y acompaña la implementación.</p>
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
              <p className="lead">Seis integrantes, cada uno a cargo de un área. Cada proyecto lo lleva una dupla, que te acompaña desde el diagnóstico hasta el seguimiento.</p>
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
