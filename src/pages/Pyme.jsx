// /pyme: Nimbo como consultora para pymes — diagnóstico, procesos y seguimiento (src/ns/Pyme.jsx).
import { useSeo } from '../hooks/useSeo'
import Pyme from '../ns/Pyme'

export default function PymePage() {
  useSeo({
    title: 'Consultoría para pymes: diagnóstico, procesos y seguimiento | Nimbo',
    description:
      'Nimbo es una consultora para pymes de Buenos Aires: diagnosticamos cómo funciona tu empresa, ordenamos los procesos con tu equipo y medimos cada mes que la mejora se sostenga.',
    path: '/pyme',
  })
  return <Pyme />
}
