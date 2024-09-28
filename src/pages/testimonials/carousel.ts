import arrowLeft from './arrow-left.png'
import arrowRight from './arrow-right.png'
import arrowLeftShadow from './arrow-left-shadow.png'
import arrowRightShadow from './arrow-right-shadow.png'
import { twMerge } from 'tailwind-merge'

// TODO: Add left and right fades for the scroll
// TODO: Add animations to the quote marks and image when carousel moves
// TODO: Change arrows to inline svgs

customElements.define(
  'carousel-arrow',
  class extends HTMLButtonElement {
    connectedCallback(): void {
      const right = this.getAttribute('side') === 'right'

      this.className =
        'relative select-none disabled:pointer-events-none disabled:opacity-50'
      this.innerHTML = `
<img class='absolute left-[3px] top-[3px] drag-none' src=${right ? arrowRightShadow : arrowLeftShadow} />
<img class='press relative drag-none' src=${right ? arrowRight : arrowLeft} />
`
    }
  },
  { extends: 'button' },
)

customElements.define(
  'carousel-dot',
  class extends HTMLButtonElement {
    connectedCallback(): void {
      this.className = 'box press mx-1 h-4 w-4 rounded-full bg-white'
      if (this.hasAttribute('active')) this.#active()
    }

    #active(): void {
      this.classList.remove('bg-white')
      this.classList.add('bg-purple')
    }

    #inactive(): void {
      this.classList.remove('bg-purple')
      this.classList.add('bg-white')
    }

    static get observedAttributes(): string[] {
      return ['active']
    }
    attributeChangedCallback(name: string, _: string, newValue: string): void {
      if (name === 'active' && newValue) {
        this.#active()
      } else {
        this.#inactive()
      }
    }
  },
  { extends: 'button' },
)

customElements.define(
  'x-carousel',
  class extends HTMLElement {
    #index = 0
    #slides = 0
    #leftButton: HTMLButtonElement | null = null
    #rightButton: HTMLButtonElement | null = null
    #dots: HTMLButtonElement[] = []

    #updateButtons(): void {
      if (this.#leftButton) this.#leftButton.disabled = this.#index <= 0
      if (this.#rightButton)
        this.#rightButton.disabled = this.#index >= this.#slides - 1
    }

    #createDots(): void {
      for (let i = 0; i < this.#slides; i++) {
        const button = document.createElement('button', { is: 'carousel-dot' })
        button.addEventListener('click', () => this.#move(i - this.#index))
        this.#dots.push(button)
      }

      this.querySelector('#dots')?.append(...this.#dots)
    }

    #updateDots(): void {
      this.#dots.forEach((dot, i) => {
        if (i === this.#index) {
          dot.setAttribute('active', 'true')
        } else {
          dot.removeAttribute('active')
        }
      })
    }

    #move(how: number): void {
      const newIndex = this.#index + how
      if (newIndex < 0 || newIndex > this.#slides - 1) return

      const slidesContainer = this.querySelector<HTMLElement>('#slides')

      this.#index = newIndex
      if (slidesContainer) {
        slidesContainer.style.transform = `translateX(-${this.#index * 100}%)`
      }

      this.#updateButtons()
      this.#updateDots()
    }

    connectedCallback(): void {
      const classes =
        'relative mx-auto space-y-4 overflow-x-hidden sm:space-y-6'
      this.className = twMerge(classes, this.className)

      this.innerHTML = `
<div id='slides' class='flex transition-transform duration-500'>${this.innerHTML}</div>
<div class='mx-auto flex w-fit items-center gap-x-10 py-3'>
  <button is='carousel-arrow'></button>
  <div id='dots' class='mx-auto flex'></div>
  <button is='carousel-arrow' side='right'></button>
</div>
`

      this.#leftButton = this.querySelector('button:first-of-type')
      this.#rightButton = this.querySelector('button:last-of-type')

      this.#leftButton?.addEventListener('click', () => this.#move(-1))
      this.#rightButton?.addEventListener('click', () => this.#move(1))

      this.#slides = this.querySelectorAll('x-slide').length
      this.#updateButtons()

      this.#createDots()
      this.#updateDots()
    }
  },
)

customElements.define(
  'x-slide',
  class extends HTMLElement {
    connectedCallback(): void {
      const classes = 'flex w-full flex-shrink-0 items-center justify-center'
      this.className = twMerge(classes, this.className)
    }
  },
)
