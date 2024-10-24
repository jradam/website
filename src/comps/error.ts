customElements.define(
  'x-error',
  class extends HTMLElement {
    #handleError(error: ErrorEvent): void {
      this.className =
        'box fixed bottom-4 left-4 z-50 mr-8 rounded-lg bg-red-500 p-2 text-sm font-bold text-white sm:bottom-8 sm:left-8 sm:p-4 sm:text-base'
      this.innerHTML = 'Error: ' + error?.message || 'An unknown error occurred'
    }

    constructor() {
      super()
      addEventListener('error', (error) => this.#handleError(error)) // Arrow for `this` binding
    }
  },
)
