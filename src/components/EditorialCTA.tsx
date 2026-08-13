import { useReveal } from '../hooks/useReveal'

const panels = [
  {
    title: 'Câmera',
    grad: 'linear-gradient(180deg, #FFF6E6 0%, #FFE9B8 40%, #FF8A3D 100%)',
    tilt: '-rotate-[8deg]',
  },
  {
    title: 'Tela',
    grad: 'linear-gradient(180deg, #FFE9B8 0%, #FFB08A 55%, #FF6B5E 100%)',
    tilt: '-rotate-[4deg]',
  },
  {
    title: 'Desempenho',
    grad: 'linear-gradient(180deg, #FFB08A 0%, #FF6B5E 50%, #FF5C8A 100%)',
    tilt: '',
  },
  {
    title: 'Bateria',
    grad: 'linear-gradient(180deg, #FF6B5E 0%, #FF5C8A 55%, #E0448F 100%)',
    tilt: 'rotate-[4deg]',
  },
  {
    title: 'Acabamento',
    grad: 'linear-gradient(180deg, #FF5C8A 0%, #E0448F 60%, #3D0F2B 100%)',
    tilt: 'rotate-[8deg]',
  },
]

export default function EditorialCTA() {
  const contentRef = useReveal<HTMLDivElement>()
  const arcRef = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad overflow-hidden bg-background-warm">
      <div className="container-page">
        <div ref={contentRef} className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-6 text-foreground/70">Seu próximo upgrade começa aqui.</p>
          <h2 className="heading-xl">
            Pronto para encontrar
            <br />
            seu próximo <em className="serif-word">celular?</em>
          </h2>
          <p className="body-lg mx-auto mt-6 max-w-md text-foreground/70">
            Uma conversa rápida é o suficiente para sair com uma direção clara.
          </p>
          <a href="#contato" className="btn-ghost mt-10">
            FALAR COM UM ESPECIALISTA →
          </a>
        </div>
      </div>

      <div
        ref={arcRef}
        className="reveal mx-auto mt-24 flex max-w-[1240px] items-end justify-center gap-3 overflow-hidden px-2 md:mt-32 md:gap-5"
        aria-hidden="true"
      >
        <div className="phone-arc flex items-end">
          {panels.map((p, i) => (
            <div
              key={p.title}
              className={`panel-shrink relative -mx-2 h-[340px] w-[118px] md:h-[520px] md:w-[176px] ${p.tilt}`}
              style={{ zIndex: panels.length - i }}
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-[20px] md:rounded-[24px]"
                style={{ background: p.grad, boxShadow: '0 30px 60px -30px rgba(10,10,10,0.4)' }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[5px] bg-foreground/90"
                  style={{ borderRadius: '20px 20px 0 0' }}
                />
                <span className="absolute bottom-5 left-5 text-[12px] font-semibold uppercase tracking-[0.16em] text-foreground/70 md:text-[13px]">
                  {p.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
