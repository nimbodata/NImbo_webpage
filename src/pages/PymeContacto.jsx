// /pyme/contacto: el formulario de contacto de la consultora, sin salir de /pyme (src/ns/Contact.jsx con `pyme`).
import { useSeo } from '../hooks/useSeo'
import Contact from '../ns/Contact'

export default function PymeContacto() {
  useSeo({
    title: 'Contacto — Nimbodata Consultoría',
    description:
      'Contanos cómo funciona la gestión de tu empresa: te respondemos en menos de 24 h para coordinar una primera reunión sin cargo.',
    path: '/pyme/contacto',
  })
  return <Contact pyme />
}
