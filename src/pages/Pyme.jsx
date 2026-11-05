// /pyme: Nimbodata Consultoría — diagnóstico y mejora de la gestión para pymes de obras (src/ns/Pyme.jsx).
import { useSeo } from '../hooks/useSeo'
import Pyme from '../ns/Pyme'

export default function PymePage() {
  useSeo({
    title: 'Nimbodata Consultoría — Gestión para pymes de obras y servicios técnicos',
    description:
      'Nimbodata Consultoría: diagnóstico y mejora de la gestión interna para pymes de obras y servicios técnicos del AMBA, de 10 a 50 personas. Primera reunión sin cargo.',
    path: '/pyme',
  })
  return <Pyme />
}
