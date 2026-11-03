// /pyme/contacto: el formulario de contacto de la consultora, sin salir de /pyme (src/ns/Contact.jsx con `pyme`).
import { useSeo } from '../hooks/useSeo'
import Contact from '../ns/Contact'

export default function PymeContacto() {
  useSeo({
    title: 'Contacto — Consultoría para pymes | Nimbo',
    description:
      'Contanos cómo funciona tu empresa: te respondemos en menos de 24 h para coordinar una primera charla sin cargo y ver si un diagnóstico te sirve.',
    path: '/pyme/contacto',
  })
  return <Contact pyme />
}
