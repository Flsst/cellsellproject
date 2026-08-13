Antes de alterar qualquer arquivo, leia:

`.opencode/skills/high-value-website-director/`

Use essa skill como orquestradora principal e carregue apenas quando necessário:

* `premium-web-design-director`
* `landing-page-cro-architect`
* `mobile-first-ux-expert`
* `frontend-architecture-senior`
* `design-system-builder`
* `motion-interaction-designer`
* `web-performance-expert`
* `accessibility-expert`
* `seo-technical-expert`
* `conversion-copywriter`
* `visual-qa-pixel-polish`
* `browser-responsive-qa`

## MISSÃO

Construa a landing page COMPLETA de uma loja premium de smartphones.

O projeto React + TypeScript + Vite + Tailwind já está configurado.

NÃO reinicialize o projeto.
NÃO recrie o workspace.
NÃO altere `.opencode/skills`.
NÃO faça push para GitHub ainda.

Não existe mais imagem de referência disponível para análise. Portanto, siga RIGOROSAMENTE a especificação visual abaixo.

O objetivo é criar uma landing page que pareça trabalho de um estúdio profissional de branding/web design, e NÃO um template genérico criado por IA.

---

# 1. DIREÇÃO VISUAL

A página deve ter linguagem editorial premium, minimalista e sofisticada.

Características obrigatórias:

* fundo predominantemente branco/off-white;
* preto profundo para títulos;
* grande quantidade de espaço negativo;
* headlines muito grandes;
* mistura intencional de sans-serif moderna e pesada com serif elegante em itálico;
* layouts assimétricos;
* imagens grandes com aparência de campanha publicitária;
* gradientes quentes rosa, magenta, coral e laranja;
* poucos elementos decorativos;
* bordas arredondadas moderadas;
* CTAs pequenos e sofisticados;
* ritmo vertical generoso;
* sensação de revista/editorial de tecnologia.

Evitar completamente:

* glassmorphism;
* blobs;
* grids de cards genéricos;
* sombras exageradas;
* ícones em círculos;
* emojis;
* excesso de border-radius;
* gradiente roxo/azul típico de SaaS;
* dashboards;
* cards flutuando sem propósito;
* elementos com “cara de shadcn padrão”;
* títulos centralizados em todas as seções;
* excesso de texto.

---

# 2. DESIGN SYSTEM

Crie tokens consistentes.

## Cores

Base:

* `#FFFFFF`
* `#FAFAF8`
* `#0A0A0A`
* cinzas suaves para texto secundário

Acentos:

* pink vibrante
* magenta
* coral
* laranja quente
* amarelo pálido apenas em transições

Os gradientes devem parecer ILUMINAÇÃO FOTOGRÁFICA e não backgrounds genéricos.

## Tipografia

Use duas famílias:

### Sans

Moderna, neutra e premium, semelhante a Helvetica/Inter/Neue Montreal.

Para:

* headlines
* navegação
* botões
* corpo

### Serif

Editorial e elegante, preferencialmente itálica.

Para:

* eyebrows;
* palavras específicas dentro de headlines;
* frases de apoio.

Não use serif em excesso.

## Escala desktop aproximada

H1 hero:
`clamp(58px, 6vw, 92px)`

Headlines principais:
`clamp(50px, 5vw, 80px)`

Headlines secundárias:
`40–60px`

Body:
`15–18px`

Eyebrows serif:
`17–22px`

## Layout

Desktop:

* max-width aproximadamente `1440px`;
* conteúdo principal entre `1180–1320px`;
* gutters generosos;
* seções entre `120–190px` de padding vertical.

Mobile:

* gutters aproximadamente `20–24px`;
* não simplesmente reduzir o desktop.

---

# 3. CONFIGURAÇÃO REUTILIZÁVEL

Crie:

`src/data/siteConfig.ts`

Centralize nele todo conteúdo facilmente substituível:

* brandName
* navigation
* hero
* whatsapp
* instagram
* address
* openingHours
* benefits
* categories
* products
* faq
* testimonials

Como ainda não existe cliente real:

NÃO invente:

* nome real;
* endereço;
* telefone;
* preços;
* avaliações;
* número de clientes;
* garantia específica;
* parcelamento;
* estoque;
* métricas.

Use placeholders neutros ou deixe propriedades vazias/configuráveis.

Nome temporário discreto:

`Mobile Studio`

Ele deve ser obviamente fácil de substituir.

---

# 4. NAVBAR

Navbar extremamente minimalista.

Desktop:

* altura ~72–84px;
* marca pequena no canto esquerdo;
* navegação central discreta;
* CTA outline pill pequeno à direita.

Links:

`Início`
`Escolha seu celular`
`Benefícios`
`FAQ`

CTA:

`FALAR COM ESPECIALISTA →`

Estilo:

* preto;
* sem fundo pesado;
* border fina;
* radius pill;
* hover muito discreto.

No mobile:

* marca à esquerda;
* menu compacto à direita;
* não ocupar altura excessiva.

---

# 5. HERO — PRINCIPAL FOCO VISUAL

O hero deve ocupar aproximadamente `850–950px` no desktop.

Composição:

### Área superior

Conteúdo centralizado.

Eyebrow serif itálico:

`Tecnologia que acompanha seu ritmo.`

Headline em 2 linhas:

`Seu próximo celular,`
`do jeito certo.`

Headline:

* preta;
* pesada;
* line-height apertado;
* grande;
* máximo impacto.

Subtexto abaixo:

`Encontre smartphones para todos os estilos, necessidades e momentos.`

Máximo ~550px de largura.

CTA outline:

`ENCONTRAR MEU CELULAR →`

### Área visual inferior

A metade inferior do hero deve ser dominada por um grande cenário publicitário abstrato para smartphone.

Estrutura:

* branco no topo;
* amarelo muito suave;
* coral;
* pink;
* magenta;
* fade novamente para branco nas extremidades inferiores.

O gradiente deve ocupar grande largura e criar uma espécie de halo de iluminação.

No centro, crie um MOCKUP VISUAL DO SMARTPHONE utilizando CSS/HTML apenas se necessário.

Ele pode ser composto por:

* corpo preto arredondado;
* moldura fina;
* tela com gradiente vibrante;
* notch/dynamic-island simplificado;
* reflexo suave.

Não use desenho cartoon.

O telefone deve:

* aparecer vertical;
* ligeiramente inclinado;
* ocupar aproximadamente 30–40% da altura visual do hero;
* emergir da área de gradiente;
* parecer protagonista.

Se conseguir criar uma composição sofisticada apenas com CSS, faça isso.

Não use imagem externa remota.

---

# 6. MICRO FEATURES NO HERO

Crie dois pequenos blocos editoriais próximos ao hero, sobretudo desktop.

Um deles:

`Escolha inteligente`
`Encontre o modelo certo para sua rotina.`

Outro:

`Atendimento direto`
`Converse com quem pode ajudar na sua escolha.`

Devem parecer elementos editoriais da composição.

NÃO cards SaaS.

Pouca sombra ou nenhuma.

---

# 7. SEÇÃO “POR QUE ESCOLHER”

Muito espaço branco.

Desktop:

layout aproximadamente 55/45.

Topo:

serif itálico pequeno:

`Por que funciona`

Headline:

`Escolher tecnologia`
`pode ser simples.`

À direita, um parágrafo curto.

Abaixo, criar três razões numeradas:

`01`
`Escolha sem complicação`

`02`
`Atendimento de verdade`

`03`
`Tecnologia para cada perfil`

O item 02 pode aparecer visualmente ativo:

* número pink;
* pequena linha vertical pink;
* texto mais forte.

Ao lado, crie uma grande composição visual quadrada/vertical com smartphone abstrato ou silhueta humana estilizada utilizando CSS, gradiente e shapes simples.

Border-radius aproximadamente 18–24px.

Não parecer ilustração infantil.

---

# 8. CTA EDITORIAL CENTRAL

Criar grande área branca.

Eyebrow serif:

`Seu próximo upgrade começa aqui.`

Headline central:

`Pronto para encontrar`
`seu próximo celular?`

Descrição curta.

CTA outline:

`FALAR COM UM ESPECIALISTA →`

Abaixo, criar uma composição horizontal de aproximadamente 6 painéis verticais levemente inclinados, formando um arco suave.

Cada painel pode conter:

* gradiente diferente;
* smartphone estilizado;
* silhuetas abstratas;
* detalhes de câmera/tela.

Os painéis centrais mais retos e os laterais mais inclinados.

Resultado deve lembrar uma campanha visual, não um carrossel comum.

---

# 9. MANIFESTO TIPOGRÁFICO

Seção muito impactante.

Desktop:

duas colunas.

Esquerda ~60%.

Headline enorme:

`Tecnologia feita`
`para acompanhar`
`o seu ritmo.`

Transforme `o seu ritmo.` ou parte dela em serif itálico.

Direita:

texto curto:

`Escolher um novo celular não precisa ser complicado. A experiência deve ser simples, clara e feita para você.`

Use MUITO espaço em branco.

---

# 10. TRÊS BENEFÍCIOS

Logo abaixo do manifesto.

3 colunas horizontais sem cards.

### Escolha inteligente

`Encontre aparelhos alinhados ao que você realmente precisa.`

### Variedade

`Opções para diferentes estilos, rotinas e perfis.`

### Atendimento direto

`Tire suas dúvidas e siga para a escolha com mais segurança.`

Separação por espaço, não por caixas.

---

# 11. GRANDE BLOCO VISUAL COLORIDO

Criar um bloco quase full-width, altura aproximadamente `650–780px`.

Visual:

gradiente cinematográfico:

* roxo escuro nas bordas;
* magenta;
* pink;
* coral;
* laranja intenso.

Crie uma composição abstrata sofisticada de uma pessoa utilizando smartphone OU um grande smartphone de perfil.

Pode usar CSS e formas geométricas elegantes.

Não precisa buscar imagem externa.

Texto no canto inferior/esquerdo:

serif:

`Menos dúvida. Mais escolha.`

Headline branca:

`Seu próximo`
`smartphone está aqui.`

Pequeno texto + CTA outline branco.

Essa deve ser uma das áreas visualmente mais fortes.

---

# 12. ENCONTRE SEU CELULAR

Seção branca editorial.

Headline:

`Encontre o celular`
`certo para você.`

Uma palavra ou trecho pode usar serif itálico.

Desktop:

imagem/composição visual grande à esquerda.

À direita, grid 2×3 com:

`01 — Câmera`
Para quem registra tudo.

`02 — Performance`
Para quem exige velocidade.

`03 — Bateria`
Para acompanhar o dia inteiro.

`04 — Custo-benefício`
Equilíbrio para o uso cotidiano.

`05 — Premium`
Tecnologia sem abrir mão de acabamento.

`06 — Uso diário`
Simples, prático e funcional.

Sem caixas grandes.

Números em pink/serif.

---

# 13. SHOWCASE DE SMARTPHONES

NÃO criar grid tradicional de ecommerce.

Criar uma composição editorial com 4 aparelhos.

Dados temporários:

* Modelo 01
* Modelo 02
* Modelo 03
* Modelo 04

Cada aparelho:

* mockup elegante;
* nome;
* categoria curta;
* CTA discreto.

Não mostrar preço.

Não mostrar descontos.

Não inventar especificações.

O layout deve parecer catálogo de campanha premium.

No desktop, permitir sobreposição leve ou diferenças de escala.

No mobile, transformar em scroll horizontal/snap elegante se necessário.

---

# 14. PROVA SOCIAL

Como não existem avaliações reais:

não invente depoimentos.

Deixe a estrutura preparada em código.

Se `testimonials` estiver vazio no `siteConfig`, NÃO renderize a seção.

---

# 15. FAQ

Seção minimalista.

Headline:

`Antes de escolher,`
`talvez você queira saber.`

Accordion elegante.

Perguntas:

* `Quais marcas de celulares estão disponíveis?`
* `Posso falar com a loja antes de escolher?`
* `Quais são as formas de pagamento?`
* `Os aparelhos possuem garantia?`
* `É possível retirar o aparelho na loja?`

Como ainda não temos dados reais, respostas devem ser neutras e deixar claro quando informações dependem da loja.

Accordion:

* sem cards exagerados;
* divisórias horizontais;
* botão + discreto;
* animação curta.

---

# 16. CTA FINAL

Grande área central branca com halo suave pink/coral abaixo.

Eyebrow serif:

`Seu próximo celular pode estar a uma mensagem de distância.`

Headline:

`Vamos encontrar`
`o aparelho ideal?`

CTA principal:

`CONVERSAR NO WHATSAPP →`

Muito espaço negativo.

---

# 17. FOOTER

Minimalista.

Marca à esquerda.

Links:

* Instagram
* WhatsApp
* Endereço
* Horário

Se dados estiverem vazios, não exibir valores falsos.

Copyright genérico configurável.

---

# 18. WHATSAPP

WhatsApp é o principal canal de conversão.

NÃO criar enorme botão verde flutuante.

Desktop:

use os CTAs normais da página.

Mobile:

crie uma barra sticky/fixed extremamente elegante depois que o usuário fizer scroll.

Texto:

`Falar com especialista`

Pequeno ícone/indicador.

Visual:

* fundo quase preto;
* texto branco;
* radius moderado;
* pequena margem das bordas;
* verde somente como micro detalhe.

Não esconder conteúdo.

---

# 19. MOBILE FIRST

A versão mobile precisa parecer PROJETADA, não apenas empilhada.

Teste mentalmente e estruturalmente:

* 320px
* 375px
* 390px
* 430px

Regras:

* nenhum overflow horizontal;
* headlines sem cortes;
* máximo controle de line-break;
* imagens/composições redimensionadas;
* padding consistente;
* CTA confortável;
* navbar compacta;
* gradientes adaptados;
* blocos fotográficos com enquadramento próprio;
* showcase horizontal quando fizer sentido;
* manifesto com escala própria;
* barra WhatsApp sem sobrepor footer.

Utilize `clamp()` quando apropriado.

---

# 20. MOTION

Movimentos sofisticados e discretos.

Pode implementar:

* reveal on scroll;
* fade + translateY;
* stagger;
* hover em CTA;
* micro parallax;
* deslocamento muito leve de gradientes;
* smartphone hero com movimento quase imperceptível.

Não adicionar biblioteca pesada se CSS + IntersectionObserver forem suficientes.

Respeitar:

`prefers-reduced-motion`.

---

# 21. ARQUITETURA

Crie componentes separados:

* `Navbar`
* `Hero`
* `WhyChoose`
* `EditorialCTA`
* `Manifesto`
* `Benefits`
* `VisualFeature`
* `PhoneFinder`
* `ProductShowcase`
* `FAQ`
* `FinalCTA`
* `Footer`
* `MobileWhatsApp`

Evite componente monolítico.

Use `siteConfig.ts` para conteúdo.

---

# 22. SEO + ACESSIBILIDADE

Implementar:

* HTML semântico;
* somente um H1;
* hierarquia correta de headings;
* title;
* meta description;
* Open Graph preparado;
* alt;
* keyboard navigation;
* focus states;
* aria no menu/FAQ;
* contraste adequado;
* landmarks semânticos.

Preparar arquitetura para SEO local futuro.

---

# 23. PERFORMANCE

Prioridade alta.

* não adicionar dependências desnecessárias;
* evitar JS pesado;
* lazy-loading abaixo da dobra;
* evitar CLS;
* animações GPU-friendly;
* nenhuma requisição desnecessária;
* sem vídeo;
* sem imagens externas pesadas;
* build limpo.

---

# 24. QUALITY GATE

Após implementar tudo:

1. execute `npm run build`;
2. execute lint se disponível;
3. abra o preview;
4. revise desktop;
5. revise mobile;
6. procure overflow;
7. procure cortes;
8. procure espaçamento inconsistente;
9. procure componentes com aparência genérica;
10. corrija antes de finalizar.

Use `visual-qa-pixel-polish` e `browser-responsive-qa` na revisão final.

## REGRA FINAL

Se qualquer parte começar a parecer:

* template pronto;
* landing SaaS;
* interface de IA;
* dashboard;
* conjunto de cards genéricos;

REFINE.

A página deve parecer uma campanha editorial premium de tecnologia.

Implemente o site completo nesta task.

Não faça push para GitHub.

Ao terminar, informe apenas:

* principais componentes criados;
* skills utilizadas;
* resultado do build;
* resultado da validação responsiva;
* URL do preview.
