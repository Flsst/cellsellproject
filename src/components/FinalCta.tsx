import { siteConfig } from '../data/siteConfig'
import { useReveal } from '../hooks/useReveal'

export default function FinalCta() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contato" className="section-pad relative overflow-hidden">
      <div className="container-page relative z-10">
        <div ref={ref} className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 text-foreground/70">
            Seu próximo celular pode estar a uma mensagem de distância.
          </p>
          <h2 className="heading-xl">
            Vamos encontrar
            <br />
            o aparelho <em className="serif-word">ideal?</em>
          </h2>
          <a href={siteConfig.whatsapp.href} className="btn-ghost mt-12">
            CONVERSAR NO WHATSAPP →
          </a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-[-42%] mx-auto h-[640px] max-w-[1500px]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(46% 58% at 50% 50%, rgba(255,92,138,0.28) 0%, rgba(255,138,61,0.16) 48%, rgba(255,255,255,0) 72%)',
          filter: 'blur(60px)',
        }}
      />
    </section>
  )
}
