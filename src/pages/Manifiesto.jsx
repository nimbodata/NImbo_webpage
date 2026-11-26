// /manifiesto: la historia de Nimbo contada como un descenso de la nube a la tierra (src/manifiesto/).
import { useSeo } from '../hooks/useSeo'
import Manifiesto from '../manifiesto/Manifiesto'

const SITE = 'https://www.nimbodata.com'

export default function ManifiestoPage() {
  useSeo({
    title: 'De la nube a la tierra — Nimbo Consulting',
    description:
      'Agentes de IA, automatizaciones, tableros y software a medida para pymes de Argentina. El problema, cómo trabajamos y casos reales. Diagnóstico de 20 minutos sin cargo.',
    path: '/manifiesto',
    image: '/manifiesto/og.jpg',
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${SITE}/manifiesto#article`,
      headline: 'De la nube a la tierra — Nimbo Consulting',
      url: `${SITE}/manifiesto`,
      image: `${SITE}/manifiesto/og.jpg`,
      inLanguage: 'es-AR',
      author: { '@type': 'Person', name: 'Sebastian Deina' },
      publisher: { '@id': `${SITE}/#business` },
    },
  })
  return <Manifiesto />
}
