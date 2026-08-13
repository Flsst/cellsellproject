import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = siteConfig.navigation

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-background/85 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav
        className="container-page flex h-[72px] items-center justify-between md:h-[92px]"
        aria-label="Navegação principal"
      >
        <a href="#inicio" className="text-[15px] font-semibold uppercase tracking-[0.18em]">
          {siteConfig.brandName}
        </a>

        <ul className="hidden items-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden rounded-full border border-foreground/80 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-foreground hover:text-background md:inline-flex"
          >
            {siteConfig.whatsapp.label.toUpperCase()} →
          </a>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-[2px] w-5 bg-foreground">
              <span
                className={`absolute left-0 top-[-6px] block h-[2px] w-5 bg-foreground transition-transform duration-300 ${
                  menuOpen ? 'top-0 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-[-6px] left-0 block h-[2px] w-5 bg-foreground transition-transform duration-300 ${
                  menuOpen ? 'bottom-0 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[72px] z-40 flex flex-col bg-background px-6 pb-10 pt-10 transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="heading-md block text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          onClick={() => setMenuOpen(false)}
          className="mt-auto inline-flex w-fit rounded-full bg-foreground px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-background"
        >
          {siteConfig.whatsapp.label.toUpperCase()} →
        </a>
      </div>
    </header>
  )
}
