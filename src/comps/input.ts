import { twMerge } from 'tailwind-merge'
import { html } from '../scripts/helpers'

customElements.define(
  'x-input',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className = 'group grid'

      const name = this.getAttribute('name')
      const type = this.getAttribute('type') || 'text'
      const placeholder = this.getAttribute('placeholder') || ''

      if (!name || !['text', 'email', 'textarea'].includes(type)) {
        throw new Error('Invalid input attributes')
      }

      const label = html`
        <label
          class="w-fit rounded-tl-md rounded-tr-md border-l-2 border-r-2 border-t-2 bg-white px-2 font-lilita text-base capitalize group-focus-within:bg-purple group-[.error]:border-red-500 group-[.error]:bg-red-500 group-[.error]:text-white"
          for="${name}"
        >
          ${name}
        </label>
      `

      const isArea = type === 'textarea'

      const classes = twMerge(
        'rounded-md rounded-tl-none border-2 p-2 font-gochi group-[.error]:border-red-500',
        isArea && 'min-h-32',
      )

      const element = isArea ? 'textarea' : 'input'

      const attributes = {
        type: !isArea && type,
        name,
        placeholder,
        class: classes,
      }

      const input = html`<${element} ${attributes}></${element}>`

      this.innerHTML = label + input
    }
  },
)
