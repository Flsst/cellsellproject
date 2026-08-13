import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'

export default function MobileWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > window.innerHeight * 0.6)

      const footer = document.querySelector('footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        setNearFooter(rect.top < window.innerHeight * 0.85)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hidden = !visible || nearFooter

  return (
    <a
      href={siteConfig.whatsapp.href}
      aria-label={siteConfig.whatsapp.label}
      className={`fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[calc(100%-32px)] max-w-[420px] items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 md:hidden ${
        hidden ? 'pointer-events-none translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
      }`}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: '#25D366' }}
        aria-hidden="true"
      />
      {siteConfig.whatsapp.label}
    </a>
  )
}
