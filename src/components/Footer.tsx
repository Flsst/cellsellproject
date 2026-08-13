import { siteConfig } from '../data/siteConfig'

const year = new Date().getFullYear()

export default function Footer() {
  const { brandName, instagram, whatsapp, address, openingHours } = siteConfig

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em]">{brandName}</p>
          <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-foreground/60">
            {brandName} © {year}. Todos os direitos reservados.
          </p>
        </div>

        <nav aria-label="Links de contato" className="flex flex-col gap-4 text-[14px]">
          <a
            href={instagram.href}
            className="w-fit text-foreground/80 transition-colors hover:text-foreground"
          >
            Instagram — {instagram.label}
          </a>
          <a
            href={whatsapp.href}
            className="w-fit text-foreground/80 transition-colors hover:text-foreground"
          >
            WhatsApp
          </a>
          {address.lines.length > 0 && (
            <div className="text-foreground/60">
              <p className="font-medium text-foreground/80">{address.label}</p>
              {address.lines.map((line) => (
                <p key={line} className="mt-0.5">
                  {line}
                </p>
              ))}
            </div>
          )}
        </nav>

        {openingHours.length > 0 && (
          <div className="text-[14px] text-foreground/60">
            <p className="font-medium text-foreground/80">Horário</p>
            {openingHours.map((h) => (
              <p key={h} className="mt-0.5">
                {h}
              </p>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
