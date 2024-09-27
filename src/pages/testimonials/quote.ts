const PATH = '<path d="M1 14.3 12 3v11.3h11V35H1V14.3Z" stroke-width="2"/>'

customElements.define(
  'quote-open',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className =
        'absolute -left-2 -top-7 flex stroke-clay xs:-top-6 2xl:-top-5'
      this.innerHTML = `
<svg class='-rotate-12' width="24" height="36">${PATH}</svg>
<svg class='-ml-1 -rotate-12' width="24" height="36">${PATH}</svg>
`
      const color = this.getAttribute('color')
      if (color) this.style.fill = color
    }
  },
)

customElements.define(
  'quote-close',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className =
        'absolute -bottom-6 -right-1 flex stroke-clay xs:-bottom-4'
      this.innerHTML = `
<svg class='z-10 -mr-1 -rotate-[160deg]' width="24" height="36">${PATH}</svg>
<svg class='-rotate-[160deg]' width="24" height="36">${PATH}</svg>
`
      const color = this.getAttribute('color')
      if (color) this.style.fill = color
    }
  },
)

customElements.define(
  'x-quote',
  class extends HTMLElement {
    connectedCallback(): void {
      const image = this.getAttribute('image')
      const color = this.getAttribute('color')
      const name = this.getAttribute('name')
      const company = this.getAttribute('company')

      this.className = 'flex flex-col items-center'
      this.innerHTML = `
<img class='h-44' src='${image}' alt='${name} from ${company}' />
<div class='relative -mt-5 mb-5 w-60 rounded-2xl border-2 bg-white px-4 py-2 xxs:w-72 sm:w-96'>
  <quote-open color='${color}'></quote-open>
  <p class='font-gochi md:text-justify'>${this.innerHTML}</p>
  <quote-close color='${color}'></quote-close>
</div>
<div class='flex flex-col justify-center px-6 text-center sm:flex-row'>
  <h4 class='font-lilita text-3xl'>${name}</h4>
  <h4 class='hidden font-lilita text-3xl sm:block'>,&nbsp;</h4>
  <h4 class='font-lilita text-3xl'>${company}</h4>
</div>
`
    }
  },
)
