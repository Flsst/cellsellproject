import { siteConfig } from '../data/siteConfig'
import { useReveal } from '../hooks/useReveal'

export default function Benefits() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="pb-28 md:pb-40">
      <div
        ref={ref}
        className="reveal container-page grid grid-cols-1 gap-12 border-t border-line pt-20 md:grid-cols-3 md:gap-8 md:pt-28"
      >
        {siteConfig.benefits.map((benefit, i) => (
          <div key={benefit.title} className="max-w-sm">
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-foreground/40">
              0{i + 1}
            </span>
            <h3 className="heading-md mt-4">{benefit.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
