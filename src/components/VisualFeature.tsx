import { useReveal } from '../hooks/useReveal'
import PhoneMockup from './PhoneMockup'

export default function VisualFeature() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="px-3 pb-28 sm:px-5 md:pb-40 lg:px-8">
      <div
        ref={ref}
        className="reveal mx-auto h-[620px] max-w-[1280px] overflow-hidden rounded-[24px] md:h-[720px]"
      >
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(120deg, #0A0A0A 0%, #1B0A2A 20%, #4A1040 42%, #E0448F 64%, #FF5C8A 80%, #FF8A3D 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(80% 70% at 78% 18%, rgba(255,233,184,0.55) 0%, rgba(255,233,184,0) 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(55% 55% at 12% 90%, rgba(255,138,61,0.65) 0%, rgba(255,138,61,0) 65%)',
          }}
        />

        <div className="absolute right-[-4%] top-1/2 hidden h-[88%] w-auto -translate-y-1/2 md:block">
          <PhoneMockup
            screen="magenta"
            className="h-full w-auto"
            tilt="rotate-[9deg]"
            float
            floatSpeed="slow"
          />
        </div>
        <div className="absolute right-[22%] top-[14%] hidden h-[38%] w-auto lg:block">
          <PhoneMockup screen="warm" className="h-full w-auto" tilt="-rotate-[6deg]" float />
        </div>
        <div className="absolute -left-[8%] bottom-[-6%] hidden h-[46%] w-auto md:block">
          <PhoneMockup
            screen="sunset"
            className="h-full w-auto"
            tilt="-rotate-[11deg]"
            float
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
          <p className="eyebrow text-accent-yellow">Menos dúvida. Mais escolha.</p>
          <h2 className="mt-4 max-w-xl text-white heading-xl">
            Seu próximo
            <br />
            <em className="serif-word">smartphone</em> está aqui.
          </h2>
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-white/85">
            Um acervo pensado para diferentes perfis, com orientação de quem entende.
          </p>
          <a href="#contato" className="btn-ghost-light mt-8 w-fit">
            CONVERSAR AGORA →
          </a>
        </div>
      </div>
    </section>
  )
}
