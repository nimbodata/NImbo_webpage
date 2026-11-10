// Clientes: las reseñas reales que ya están en el sitio (src/components/Testimonios.jsx), quietas y con contexto
// (quién es y qué le armamos), en vez de una cinta que corre sola. Primero las de empresas con equipo (salas de juego
// y WODSI), que es el cliente al que apunta Nimbo; después las de negocios chicos.
// El Reencuentro y Zip mandan sus comentarios: van acá cuando lleguen (no publicar textos inventados).
const REVIEWS = [
  { name: 'Christina B.', role: 'Gerente · Salas de juego', did: 'Tablero de retención por sala',
    text: 'El dashboard cambió cómo tomamos decisiones: vemos retención y rendimiento por sala en tiempo real, sin esperar reportes de nadie.' },
  { name: 'Leo', role: 'Coach · WODSI', did: 'Plataforma y automatizaciones por WhatsApp',
    text: 'WODSI quedó sólido y las automatizaciones por WhatsApp nos ahorran horas cada semana. Mis atletas tienen todo en un solo lugar.' },
  { name: 'Patricia', role: 'Fundadora · M.e.H Velas', did: 'Catálogo web con pedidos',
    text: 'La página está funcionando de diez: mostramos el catálogo, recibimos pedidos y en estos meses notamos más ventas que cuando solo vendíamos por Instagram.' },
  { name: 'Francisca Dioli', role: 'Psicóloga · psi.frantadioli', did: 'Web con turnos online',
    text: 'Estoy muy contenta con la página. Los pacientes me dicen que se sienten contenidas apenas entran, y el agendamiento de turnos nos simplificó el día a día.' },
  { name: 'Esteban Keklikian', role: 'Emprendedor', did: 'Web institucional',
    text: 'Con tu página por fin tenemos algo que nos representa de verdad. Se ve profesional, carga rápido y ya nos escribieron clientes que nos encontraron por Google.' },
]

export default function Testimonials() {
  return (
    <section className="sec wrap tm" id="clientes">
      <div className="sec-head" data-reveal>
        <div>
          <h2>Lo que cambió del otro lado.</h2>
          <p className="lead">Contado por ellos: una gerenta de salas de juego, un coach, una fabricante de velas, una psicóloga y un emprendedor.</p>
        </div>
      </div>
      <div className="tm-grid">
        {REVIEWS.map((r, i) => (
          <figure key={r.name} className="tm-card" data-reveal style={{ '--d': `${(i % 3) * 80}ms` }}>
            <span className="mono tm-did">{r.did}</span>
            <blockquote>{r.text}</blockquote>
            <figcaption>
              <span className="tm-av">{r.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}</span>
              <span><b>{r.name}</b><small>{r.role}</small></span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
