import { twMerge } from 'tailwind-merge'

customElements.define(
  'x-p',
  class extends HTMLElement {
    connectedCallback(): void {
      const classes =
        'max-w-80 ml-4 block xs:ml-0 xs:text-justify md:max-w-none md:text-left'
      this.className = twMerge(classes, this.className)
      this.innerHTML = `
<span class='mr-1 font-bold text-purple'>&#62;</span><p class='inline'>${this.innerHTML.trim()}</p>
`
    }
  },
)
