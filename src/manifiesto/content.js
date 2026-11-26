// Textos de /manifiesto ("De la nube a la tierra"). Orden de web de consultoría: propuesta de valor → prueba social →
// problema → solución y servicios → metodología → casos (contexto, problema, solución, resultado) → contacto.
// Todo sale de lo que ya está en el sitio (src/ns/data.js, src/ns/Testimonials.jsx, src/ns/ui.jsx): no inventar
// números, métricas ni clientes. Los resultados de los casos son las palabras de los clientes.

export const WA_MANIFIESTO =
  'https://wa.me/5491124036836?text=' +
  encodeURIComponent('¡Hola Seba! Leí la historia de Nimbo y quiero contarte cómo trabajamos.')

// la charla de diagnóstico: 20 minutos, sin cargo (src/ns/data.js, PASOS_SERVICIO)
export const AGENDAR = '/agendar'

// cada parte del descenso; `alt` es la altura que muestra la esquina y mueve el video
export const LEVELS = [
  { id: 'nube', n: 0, alt: 10000, name: 'Nube' },
  { id: 'confianza', n: 2, alt: 8000, name: 'Quiénes somos' },
  { id: 'problema', n: 3, alt: 6000, name: 'El problema', title: 'Todos hablan de IA. Tu equipo sigue copiando pedidos a mano.',
    lead: 'Lo vemos en inmobiliarias, distribuidoras, consultorios y comercios: gente capaz, atrapada en lo operativo.' },
  { id: 'solucion', n: 4, alt: 4000, name: 'La solución', title: 'Cuatro frentes, un solo equipo.',
    lead: 'No vendemos horas: dejamos funcionando sistemas que tu equipo usa todos los días.' },
  { id: 'metodo', n: 5, alt: 2000, name: 'Cómo trabajamos', title: 'Tres pasos. Sin improvisar.',
    lead: 'Primero entendemos, después construimos.' },
  { id: 'casos', n: 6, alt: 500, name: 'Casos', title: 'Lo que ya está funcionando.',
    lead: 'Tres casos reales: cómo estaban, qué les pasaba, qué hicimos y qué cambió.' },
  { id: 'tierra', n: 7, alt: 0, name: 'Tierra', title: 'Llegaste a tierra.',
    lead: 'Contanos cómo trabajan y te decimos qué conviene automatizar primero. Y qué no.' },
]

// 2 · prueba social: solo datos verificables
export const CONFIANZA = [
  ['Desde 2024', 'armando sistemas para pymes'],
  ['Partner', 'AdWorld Latam'],
  ['Sin intermediarios', 'hablás con quien construye'],
]
export const CLIENTES = ['Salas de juego', 'WODSI', 'M.e.H Velas', 'El Reencuentro', 'Establecimiento ovino', 'psi.frantadioli']

// 3 · los tres dolores
export const DOLORES = [
  ['Cargan lo mismo dos veces.', 'El pedido llega por WhatsApp, se copia a la planilla y después al sistema. A mano.'],
  ['WhatsApp a toda hora.', 'Consultas y pedidos que se pierden entre chats, sin registro de nada.'],
  ['Los números llegan tarde.', 'El reporte aparece a fin de mes, cuando ya no hay nada que decidir.'],
]

export const BUZZ = [
  'disruptivo', 'IA generativa', 'transformación digital', 'agentes', '10x', 'sinergia',
  'game changer', 'hiperautomatización', 'copiloto', 'next-gen', 'no-code', 'prompt engineering',
]

// 4 · servicios (src/ns/data.js, AREAS), contados por el cambio que producen
export const SERVICIOS = [
  { t: 'Agentes de IA', d: 'WhatsApp e Instagram atendidos a cualquier hora. Te avisan cuando hace falta una persona.', href: '/agentes-de-ia',
    icon: 'M7 4h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-6l-4 3.5V17a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z M8.5 9.5h7 M8.5 12.5h4' },
  { t: 'Automatización e integración', d: 'Cargás una vez y aparece donde tiene que estar: planillas, CRM y facturación.', href: '/automatizacion-e-integracion',
    icon: 'M6 6m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M18 18m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0 M8.5 6H14a4 4 0 0 1 4 4v5.5' },
  { t: 'Datos y tableros', d: 'Ventas, stock y cobranzas al día, con avisos para decidir a tiempo y no a fin de mes.', href: '/datos-y-tableros',
    icon: 'M5 19V11 M12 19V5 M19 19v-6' },
  { t: 'Software a medida', d: 'Cuando lo que necesitás no existe hecho: stock, pedidos y turnos en un solo lugar.', href: '/software-a-medida',
    icon: 'M6 4h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z M3 8.5h18 M9 21h6' },
]

// 5 · metodología en tres pasos (src/ns/data.js, PASOS_SERVICIO)
export const STEPS = [
  ['01', 'Diagnóstico', 'Una charla de 20 minutos, sin cargo: qué se hace hoy, quién lo hace y dónde se traba.'],
  ['02', 'Plan de acción', 'Una propuesta por escrito: qué incluye, cuánto cuesta y en qué tiempos. Antes de arrancar.'],
  ['03', 'Implementación', 'Entregas por partes, empezando por lo que más duele. Después lo seguimos ajustando con el uso real.'],
]

// 6 · casos: contexto, problema, solución y resultado (el resultado, en palabras del cliente cuando lo hay)
export const CASOS = [
  { id: 'salas', t: 'Salas de juego', img: '/dashboard-cover-sm.jpg', tags: ['Datos y tableros', 'IA'],
    contexto: 'Una empresa con varias salas de juego y una gerencia que decide todos los días.',
    problema: 'Los números llegaban en reportes que había que pedir y esperar.',
    solucion: 'Un tablero a medida con clientes, retención y ritmo por sala en tiempo real, con alertas, y un asistente con IA que responde preguntas sobre los datos con gráficos.',
    resultado: ['El dashboard cambió cómo tomamos decisiones: vemos retención y rendimiento por sala en tiempo real, sin esperar reportes de nadie.', 'Christina B., gerente'] },
  { id: 'wodsi', t: 'WODSI', img: '/wodsi-cover-sm.jpg', tags: ['Plataforma', 'WhatsApp'],
    contexto: 'Coaches y boxes que entrenan a muchos atletas a la vez.',
    problema: 'Atletas, planes y avisos repartidos entre planillas y mensajes a mano.',
    solucion: 'Una plataforma con la gestión de atletas, la planificación de entrenamientos y avisos automáticos por WhatsApp.',
    resultado: ['WODSI quedó sólido y las automatizaciones por WhatsApp nos ahorran horas cada semana. Mis atletas tienen todo en un solo lugar.', 'Leo, coach'] },
  { id: 'locales', t: 'Salas de entretenimiento', img: '/mockups/bot-whatsapp.jpg', tags: ['Agente de IA', 'Panel'],
    contexto: 'Varios locales con eventos, promos y reservas.',
    problema: 'Las consultas llegaban por WhatsApp a cualquier hora, también de madrugada, y cada local se organizaba a su manera.',
    solucion: 'Un bot que responde con la información de cada local y le pasa al equipo, con un resumen, lo que no sabe. Más un panel único con lo de hoy, los eventos y las métricas.',
    resultado: ['Las consultas de la madrugada se responden en el momento, y lo que necesita una persona llega al equipo a la mañana, ya resumido.', 'Lo que cambió en la operación'] },
]

export const BADGES = {
  humo: 'Pinchaste todo el humo.',
  lunes: 'Sobreviviste a un lunes de pyme.',
  cables: 'Cargaste una vez. Apareció en todos lados.',
}

export const EDITED = 'noviembre de 2026'
