customElements.define(
  'x-error',
  class extends HTMLElement {
    #handleError(error: ErrorEvent): void {
      this.className =
        'box fixed bottom-8 left-8 z-50 rounded-lg bg-red-500 p-4 font-bold text-white'
      this.innerHTML = 'Error: ' + error?.message || 'An unknown error occurred'
    }

    constructor() {
      super()
      addEventListener('error', (error) => this.#handleError(error)) // Arrow for `this` binding
    }
  },
)
