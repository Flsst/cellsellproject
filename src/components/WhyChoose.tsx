import { useReveal } from '../hooks/useReveal'
import PhoneMockup from './PhoneMockup'

const reasons = [
  { number: '01', title: 'Escolha sem complicação' },
  { number: '02', title: 'Atendimento de verdade', active: true },
  { number: '03', title: 'Tecnologia para cada perfil' },
]

export default function WhyChoose() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section id="beneficios" className="section-pad">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-[55fr_45fr] lg:gap-12">
        <div ref={leftRef} className="reveal">
          <p className="eyebrow mb-6 text-accent-pink">Por que funciona</p>
          <h2 className="heading-xl max-w-[560px]">
            Escolher tecnologia
            <br />
            pode ser <em className="serif-word">simples.</em>
          </h2>
          <p className="body-lg mt-8 max-w-md text-foreground/70">
            Sem pressão, sem jargão. Orientação clara para você decidir com confiança o que
            faz sentido para o seu dia a dia.
          </p>

          <ol className="mt-16 flex flex-col">
            {reasons.map((r) => (
              <li key={r.number} className="flex items-start gap-6 border-t border-line py-8">
                <span
                  className={`font-serif text-[18px] italic leading-none ${
                    r.active ? 'text-accent-pink' : 'text-foreground/40'
                  }`}
                >
                  {r.number}
                </span>
                <span className="flex items-center gap-4">
                  <span
                    className={`h-10 w-[3px] ${
                      r.active ? 'bg-accent-pink' : 'bg-line'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="heading-md">{r.title}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div ref={rightRef} className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-foreground">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(170deg, #0A0A0A 0%, #2A0A1E 30%, #E0448F 62%, #FF6B5E 82%, #FF8A3D 100%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-40"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(80% 55% at 70% 20%, rgba(255,233,184,0.55) 0%, rgba(255,233,184,0) 60%)',
              }}
            />
            <div className="absolute left-1/2 top-1/2 h-[62%] w-auto -translate-x-1/2 -translate-y-1/2">
              <PhoneMockup
                screen="sunset"
                className="h-full w-auto"
                tilt="rotate-[7deg]"
                float
                floatSpeed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
