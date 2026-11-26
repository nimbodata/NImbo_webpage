// Fondo de /manifiesto: el video del descenso (Higgsfield, grabado cobalto sobre crema) pasado cuadro a cuadro
// con el scroll, como voyarelle-travel.higgsfield.app: la página no reproduce el video, le mueve el tiempo.
// - El tiempo sigue al scroll con un poco de inercia, así no salta; se pide un cuadro nuevo recién cuando el anterior
//   terminó de buscarse (seeked), para no amontonar pedidos.
// - El video está codificado con un cuadro clave cada 6 (ver scripts/manifiesto-video.sh): buscar hacia atrás
//   o hacia adelante es rápido en cualquier navegador.
// - En iPhone hay que "despertar" el video con un play/pause en el primer toque para que dibuje los cuadros.
// - Hasta que carga se ve el primer cuadro (poster y fondo de .mf-sky).
import { useEffect, useRef } from 'react'

export const VIDEO = '/manifiesto/descenso.mp4'
export const POSTER = '/manifiesto/descenso-0.jpg'

export default function Descent({ state }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let cur = 0
    let seekAt = 0

    const wake = () => {
      const p = v.play()
      if (p) p.then(() => v.pause()).catch(() => {})
    }
    window.addEventListener('touchstart', wake, { once: true, passive: true })
    const onSeeked = () => { seekAt = 0 }
    v.addEventListener('seeked', onSeeked)

    const tick = (now) => {
      raf = requestAnimationFrame(tick)
      const d = v.duration
      if (!d || v.readyState < 1) return
      const target = Math.min(1, Math.max(0, state.current.p || 0)) * (d - 0.05)
      cur += (target - cur) * (reduced ? 1 : 0.16)
      if (Math.abs(target - cur) < 0.004) cur = target
      // si una búsqueda quedó colgada (pasa en algunos navegadores), se suelta a los 300 ms
      if (seekAt && now - seekAt < 300) return
      if (Math.abs(v.currentTime - cur) > 1 / 30) {
        seekAt = now
        v.currentTime = cur
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      v.removeEventListener('seeked', onSeeked)
      window.removeEventListener('touchstart', wake)
    }
  }, [state])

  return <video ref={ref} className="mf-film" src={VIDEO} poster={POSTER} muted playsInline preload="auto" tabIndex={-1} aria-hidden="true" />
}
