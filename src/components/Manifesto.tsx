import { useReveal } from '../hooks/useReveal'

export default function Manifesto() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="section-pad">
      <div
        ref={ref}
        className="reveal container-page grid grid-cols-1 items-end gap-12 lg:grid-cols-[62fr_38fr] lg:gap-16"
      >
        <h2 className="heading-xl">
          Tecnologia feita
          <br />
          para acompanhar
          <br />
          <em className="serif-word">o seu ritmo.</em>
        </h2>
        <p className="body-lg max-w-sm pb-3 text-foreground/70 lg:justify-self-end">
          Escolher um novo celular não precisa ser complicado. A experiência deve ser simples,
          clara e feita para você.
        </p>
      </div>
    </section>
  )
}
