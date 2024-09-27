customElements.define(
  'x-title',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className = 'sticky top-0 z-20'
      const children = this.innerHTML
      this.innerHTML = `
<!-- Pull the content below up by the height of this element, to simplify centering on pages -->
<div class='-mb-[52px]'> 
  <div class='h-[2px] bg-clay'></div>
  <h2 class='ml-auto flex h-[50px] w-fit items-center rounded-bl-md border-b-2 border-l-2 bg-purple px-4 font-lilita'>
    ${children}
  </h2>
</div>
`
    }
  },
)
