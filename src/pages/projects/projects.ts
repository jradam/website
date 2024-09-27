import './cards'

customElements.define(
  'page-projects',
  class extends HTMLElement {
    connectedCallback(): void {
      this.innerHTML = `
<x-title>Our projects</x-title>
<x-cards>
  <x-card color='#5e9df1'>One Tree Software</x-card>
  <x-card color='#ff9482'>Rattle & Shake</x-card>
  <x-card color='#009688'>GAINS</x-card>
</x-cards>
`
    }
  },
  { extends: 'section' },
)
