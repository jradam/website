import { twMerge } from 'tailwind-merge'

customElements.define(
  'x-modal',
  class extends HTMLElement {
    connectedCallback(): void {
      const classes = 'pointer-events-none fixed inset-0 bg-red-500 opacity-50'
      this.className = twMerge(this.className, classes)
      this.innerHTML = `Hello`
    }
  },
)
