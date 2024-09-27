customElements.define(
  'page-contact',
  class extends HTMLElement {
    connectedCallback(): void {
      this.innerHTML = `
<x-title>Get in touch</x-title>
<div class='flex justify-center py-44 font-lilita text-3xl'>james@digitalanimal.com</div>
`
    }
  },
)
