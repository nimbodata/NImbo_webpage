// /pyme: Nimbodata Consultoría — diagnóstico y mejora de procesos para pymes (src/ns/Pyme.jsx).
import { useSeo } from '../hooks/useSeo'
import Pyme from '../ns/Pyme'

export default function PymePage() {
  useSeo({
    title: 'Nimbodata Consultoría — Diagnóstico y procesos para pymes del AMBA',
    description:
      'Nimbodata Consultoría: diagnóstico y mejora de procesos de gestión para pymes de servicios y obras del AMBA, de 10 a 50 personas. Primera reunión sin cargo.',
    path: '/pyme',
  })
  return <Pyme />
}
