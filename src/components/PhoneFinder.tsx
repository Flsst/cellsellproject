import { siteConfig } from '../data/siteConfig'
import { useReveal } from '../hooks/useReveal'
import PhoneMockup from './PhoneMockup'

export default function PhoneFinder() {
  const leftRef = useReveal<HTMLDivElement>()
  const rightRef = useReveal<HTMLDivElement>()

  return (
    <section id="escolha" className="section-pad bg-background-warm">
      <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-[40fr_60fr] lg:gap-20">
        <div ref={leftRef} className="reveal">
          <p className="eyebrow mb-6 text-foreground/70">Encontre seu celular</p>
          <h2 className="heading-xl max-w-[560px]">
            Encontre o celular
            <br />
            certo para <em className="serif-word">você.</em>
          </h2>
          <p className="body-lg mt-8 max-w-md text-foreground/70">
            Cada perfil tem um aparelho ideal. Descubra o que importa para a sua rotina.
          </p>

          <div className="relative mt-14 hidden aspect-[3/4] max-w-[440px] overflow-hidden rounded-[20px] bg-foreground lg:block">
            <div
              className="absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(160deg, #FFFFFF 0%, #FFF6E6 25%, #FFE9B8 45%, #FF8A3D 70%, #FF6B5E 100%)',
              }}
            />
            <div className="absolute bottom-[-18%] left-1/2 h-[92%] w-auto -translate-x-1/2">
              <PhoneMockup screen="warm" className="h-full w-auto" tilt="rotate-[5deg]" />
            </div>
          </div>
        </div>

        <div ref={rightRef} className="reveal">
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
            {siteConfig.categories.map((cat) => {
              const [num, name] = cat.name.split('—').map((s) => s.trim())
              return (
                <div key={cat.name} className="border-t border-line pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-[19px] italic text-accent-pink">{num}</span>
                    <h3 className="heading-md">{name}</h3>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-foreground/70">
                    {cat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
