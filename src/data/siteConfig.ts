export interface NavLink {
  label: string
  href: string
}

export interface Benefit {
  title: string
  description: string
}

export interface Category {
  name: string
  description: string
}

export interface Product {
  name: string
  category: string
  image: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  author: string
}

export interface SiteConfig {
  brandName: string
  navigation: NavLink[]
  hero: {
    eyebrow: string
    headline: string[]
    serifWords: string[]
    subtext: string
    cta: string
  }
  whatsapp: {
    label: string
    href: string
  }
  instagram: {
    label: string
    href: string
  }
  address: {
    label: string
    lines: string[]
  }
  openingHours: string[]
  benefits: Benefit[]
  categories: Category[]
  products: Product[]
  faq: FaqItem[]
  testimonials: Testimonial[]
}

export const siteConfig: SiteConfig = {
  brandName: 'Mobile Studio',
  navigation: [
    { label: 'Início', href: '#inicio' },
    { label: 'Escolha seu celular', href: '#escolha' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Tecnologia que acompanha seu ritmo.',
    headline: ['Seu próximo celular,', 'do jeito certo.'],
    serifWords: ['do jeito certo.'],
    subtext: 'Encontre smartphones para todos os estilos, necessidades e momentos.',
    cta: 'ENCONTRAR MEU CELULAR →',
  },
  whatsapp: {
    label: 'Falar com especialista',
    href: '#',
  },
  instagram: {
    label: '@mobile.studio',
    href: '#',
  },
  address: {
    label: 'Endereço',
    lines: [],
  },
  openingHours: ['Horário de atendimento a definir pela loja.'],
  benefits: [
    {
      title: 'Escolha inteligente',
      description: 'Encontre aparelhos alinhados ao que você realmente precisa.',
    },
    {
      title: 'Variedade',
      description: 'Opções para diferentes estilos, rotinas e perfis.',
    },
    {
      title: 'Atendimento direto',
      description: 'Tire suas dúvidas e siga para a escolha com mais segurança.',
    },
  ],
  categories: [
    { name: '01 — Câmera', description: 'Para quem registra tudo.' },
    { name: '02 — Performance', description: 'Para quem exige velocidade.' },
    { name: '03 — Bateria', description: 'Para acompanhar o dia inteiro.' },
    { name: '04 — Custo-benefício', description: 'Equilíbrio para o uso cotidiano.' },
    { name: '05 — Premium', description: 'Tecnologia sem abrir mão de acabamento.' },
    { name: '06 — Uso diário', description: 'Simples, prático e funcional.' },
  ],
  products: [
    { name: 'Modelo 01', category: 'Câmera', image: 'warm' },
    { name: 'Modelo 02', category: 'Performance', image: 'cool' },
    { name: 'Modelo 03', category: 'Bateria', image: 'sunset' },
    { name: 'Modelo 04', category: 'Premium', image: 'magenta' },
  ],
  faq: [
    {
      question: 'Quais marcas de celulares estão disponíveis?',
      answer:
        'A seleção de marcas e modelos disponíveis é definida pela loja. Entre em contato para confirmar o portfólio atual e o que atende ao seu perfil.',
    },
    {
      question: 'Posso falar com a loja antes de escolher?',
      answer:
        'Sim. O atendimento direto é o ponto de partida: tire dúvidas e receba orientação antes de decidir. As regras de atendimento dependem da loja.',
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer:
        'As condições de pagamento são informadas pela loja no momento do atendimento. Entre em contato para confirmar as opções vigentes.',
    },
    {
      question: 'Os aparelhos possuem garantia?',
      answer:
        'Informações de garantia são definidas pela loja conforme o fabricante. Consulte a equipe para confirmar os termos aplicáveis ao aparelho.',
    },
    {
      question: 'É possível retirar o aparelho na loja?',
      answer:
        'A retirada na loja depende da disponibilidade e das regras locais. Confirme com a equipe no atendimento.',
    },
  ],
  testimonials: [],
}
