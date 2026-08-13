import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import { useReveal } from '../hooks/useReveal'

export default function Faq() {
  const ref = useReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-background-warm">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[38fr_62fr] lg:gap-28">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-6 text-foreground/70">Dúvidas frequentes</p>
          <h2 className="heading-lg">
            Antes de escolher,
            <br />
            talvez você queira <em className="serif-word">saber.</em>
          </h2>
          <a href="#contato" className="btn-ghost mt-10">
            FALAR COM UM ESPECIALISTA →
          </a>
        </div>

        <div ref={ref} className="reveal">
          <div className="divide-y divide-line">
            {siteConfig.faq.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="heading-md max-w-[560px]">{item.question}</span>
                    <span
                      className={`relative block h-[18px] w-[18px] shrink-0 text-foreground/60 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current" />
                      <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[560px] pb-7 text-[15px] leading-relaxed text-foreground/70">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
