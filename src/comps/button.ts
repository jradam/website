import { twMerge } from 'tailwind-merge'

customElements.define(
  'x-button',
  class extends HTMLButtonElement {
    connectedCallback(): void {
      const classes =
        'box press rounded-md bg-white px-4 py-2 font-lilita leading-tight'
      this.className = twMerge(classes, this.className)
    }
  },
  { extends: 'button' },
)
