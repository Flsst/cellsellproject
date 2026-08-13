import { siteConfig } from '../data/siteConfig'
import PhoneMockup from './PhoneMockup'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const headlineRef = useReveal<HTMLDivElement>()
  const phoneRef = useReveal<HTMLDivElement>()

  const { eyebrow, headline, serifWords, subtext, cta } = siteConfig.hero

  const renderHeadline = (line: string, i: number) => {
    if (serifWords.some((w) => line === w || line.endsWith(w))) {
      const idx = line.lastIndexOf(serifWords[serifWords.length - 1])
      if (idx >= 0) {
        return (
          <span key={i}>
            {line.slice(0, idx)}
            <em className="serif-word">{line.slice(idx)}</em>
          </span>
        )
      }
    }
    return <span key={i}>{line}</span>
  }

  const microFeatures = [
    {
      title: 'Escolha inteligente',
      text: 'Encontre o modelo certo para sua rotina.',
    },
    {
      title: 'Atendimento direto',
      text: 'Converse com quem pode ajudar na sua escolha.',
    },
  ]

  return (
    <section id="inicio" className="relative overflow-hidden pt-[72px] md:pt-[92px]">
      <div className="container-page">
        <div ref={headlineRef} className="reveal mx-auto max-w-3xl pb-16 pt-16 text-center md:pt-24">
          <p className="eyebrow mb-8 text-foreground/70">{eyebrow}</p>
          <h1 className="heading-display">
            {headline.map((line, i) => (
              <span key={i} className="block">
                {renderHeadline(line, i)}
              </span>
            ))}
          </h1>
          <p className="body-lg mx-auto mt-8 max-w-[550px] text-foreground/70">{subtext}</p>
          <a href="#escolha" className="btn-ghost mt-10">
            {cta}
          </a>
        </div>
      </div>

      <div className="relative w-full" aria-hidden="true">
        <div
          className="hero-halo hero-halo-fade mx-auto"
          style={{
            background:
              'radial-gradient(85% 70% at 50% 12%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 40%, rgba(255,255,255,0) 70%), radial-gradient(120% 100% at 50% 38%, #FFFFFF 0%, #FFF6E6 22%, #FFE9B8 34%, #FFB08A 46%, #FF6B5E 55%, #FF5C8A 60%, #E0448F 64%, #FF5C8A 72%, #FFB08A 80%, #FFF0D8 90%, #FFFDF8 96%, #FFFFFF 100%)',
          }}
        />
        <div className="hero-halo-veil" />
      </div>

      <div
        ref={phoneRef}
        className="reveal relative z-10 mx-auto -mt-52 flex w-full max-w-[1280px] items-end justify-center px-6 md:-mt-64 lg:max-w-[1400px]"
      >
        <div className="hidden w-64 shrink-0 pb-28 text-left lg:block" aria-hidden="true">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
            Escolha inteligente
          </p>
          <p className="mt-3 max-w-[220px] text-[15px] leading-relaxed text-foreground/70">
            Encontre o modelo certo para sua rotina.
          </p>
        </div>

        <PhoneMockup
          screen="warm"
          className="h-[48vh] min-h-[400px] w-auto max-h-[680px] lg:h-[76vh] lg:min-h-[680px] lg:max-h-[880px]"
          tilt="rotate-[3deg]"
          float
        />

        <div className="hidden w-64 shrink-0 pb-28 text-left lg:block" aria-hidden="true">
          <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
            Atendimento direto
          </p>
          <p className="mt-3 max-w-[220px] text-[15px] leading-relaxed text-foreground/70">
            Converse com quem pode ajudar na sua escolha.
          </p>
        </div>
      </div>

      <div className="container-page mt-14 grid grid-cols-1 gap-8 border-t border-line pt-8 lg:hidden">
        {microFeatures.map((f) => (
          <div key={f.title}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/50">
              {f.title}
            </p>
            <p className="mt-2 max-w-[280px] text-[15px] leading-relaxed text-foreground/70">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
