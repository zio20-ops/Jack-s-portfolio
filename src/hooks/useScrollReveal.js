import { useEffect, useRef } from 'react'

/**
 * Hook that adds the "show" class to an element when it enters the viewport.
 * Mirrors the IntersectionObserver logic from the original Script.js.
 */
export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.add('hidden')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
