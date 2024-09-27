customElements.define(
  'x-loading',
  class extends HTMLElement {
    constructor() {
      super()
      window.addEventListener('load', () => this.remove()) // Arrow for `this` binding
    }

    connectedCallback(): void {
      this.className =
        'fixed bottom-8 right-12 z-50 h-12 w-12 animate-spin rounded-full border-8 border-solid border-e-transparent'
    }
  },
)
