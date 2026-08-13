import { siteConfig } from '../data/siteConfig'
import { useReveal } from '../hooks/useReveal'
import PhoneMockup from './PhoneMockup'

const sizes = [
  'h-[360px] lg:h-[600px]',
  'h-[440px] lg:h-[700px]',
  'h-[400px] lg:h-[640px]',
  'h-[460px] lg:h-[740px]',
]

const offsets = ['', 'lg:translate-y-8', 'lg:-translate-y-4', 'lg:translate-y-4']

export default function ProductShowcase() {
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad">
      <div className="container-wide">
        <div
          ref={headerRef}
          className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <h2 className="heading-xl max-w-[560px]">
            Uma seleção
            <br />
            para cada <em className="serif-word">perfil.</em>
          </h2>
          <a href="#contato" className="btn-ghost hidden md:inline-flex">
            VER TODOS OS MODELOS →
          </a>
        </div>
      </div>

      <div ref={listRef} className="reveal mt-16 md:mt-24">
        <div className="flex snap-x snap-mandatory items-start gap-8 overflow-x-auto pb-8 pl-6 pr-6 lg:justify-center lg:gap-10 lg:overflow-visible lg:pl-10 lg:pr-10">
          {siteConfig.products.map((product, i) => (
            <article
              key={product.name}
              className={`group w-[240px] shrink-0 snap-start lg:w-auto lg:shrink lg:snap-none ${offsets[i % offsets.length]}`}
            >
              <div className={`relative ${sizes[i % sizes.length]}`}>
                <div className="flex h-full items-end justify-center">
                  <PhoneMockup
                    screen={product.image}
                    className="h-full w-auto transition-transform duration-500 group-hover:-translate-y-2"
                    tilt={i % 2 === 0 ? 'rotate-[3deg]' : '-rotate-[3deg]'}
                  />
                </div>
              </div>
              <div className="mt-6 border-t border-line pt-4">
                <h3 className="heading-md">{product.name}</h3>
                <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-foreground/50">
                  {product.category}
                </p>
                <a
                  href="#contato"
                  className="mt-3 inline-block text-[13px] font-semibold text-foreground/80 underline-offset-4 transition-colors group-hover:text-foreground hover:underline"
                >
                  Saber mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
