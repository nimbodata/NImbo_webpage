// /wsp: agente de WhatsApp para distribuidoras, el paquete estándar con precio (src/ns/Wsp.jsx).
import { useSeo } from '../hooks/useSeo'
import Wsp from '../ns/Wsp'

const SITE = 'https://www.nimbodata.com'

export default function WspPage() {
  useSeo({
    title: 'Agente de WhatsApp para distribuidoras — Nimbo',
    description:
      'Un agente de IA que toma pedidos por WhatsApp para tu distribuidora: responde precios y stock, arma el pedido y lo deja cargado. Listo en 7 días hábiles, desde $60.000 por mes.',
    path: '/wsp',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE}/wsp#service`,
      name: 'Agente de WhatsApp para distribuidoras',
      serviceType: 'Agente de IA para WhatsApp',
      url: `${SITE}/wsp`,
      areaServed: { '@type': 'Country', name: 'Argentina' },
      provider: { '@id': `${SITE}/#business` },
      offers: { '@type': 'Offer', price: '320000', priceCurrency: 'ARS', description: 'Implementación. Mantenimiento desde $60.000 por mes.' },
      inLanguage: 'es-AR',
    },
  })
  return <Wsp />
}
