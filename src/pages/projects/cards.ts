import './modal'
import { cardAnimation, cardRotation, cardTranslation } from './animations'

customElements.define(
  'x-card',
  class extends HTMLElement {
    #modal(): void {
      const modal = document.createElement('x-modal')
      document.body.appendChild(modal)
    }

    // Arrow function so that when eventListener runs later, it knows what `this` is.
    #update = (): void => {
      const card = this.getBoundingClientRect()
      const viewport = window.innerHeight
      const visible = viewport - card.top // Distance from bottom of viewport to top of card
      const totalDistance = viewport + card.height // Distance when card will be scrolled out

      const progress = (visible / totalDistance) * 100
      const animation = cardAnimation(progress)

      const rotate = cardRotation(progress, animation)
      const translate = cardTranslation(animation)

      this.style.transform = `translateX(${translate}px) rotate(${rotate}deg)`
      this.style.opacity = animation.toString()
    }

    connectedCallback(): void {
      this.className = 'flex h-[80vh] items-center'

      const children = this.innerHTML
      const color = this.getAttribute('color')
      this.innerHTML = `
<div class='relative h-60 w-60 rounded-md border-2 bg-white p-20 sm:h-[400px] sm:w-[400px]'>
  <div class='absolute -left-4 -top-5 -rotate-3 rounded-md border-2 px-4 py-2 font-lilita text-2xl text-white sm:text-3xl' style="background-color: ${color};">${children}</div>
  <button is='x-button' class='absolute -bottom-2 -right-2 bg-purple'>Learn more</button>
</div>
`

      const scrollContainer = this.closest('main')
      scrollContainer?.addEventListener('scroll', this.#update)

      const button = this.getElementsByTagName('button')[0]
      button.addEventListener('click', () => this.#modal())
    }
  },
)

customElements.define(
  'x-cards',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className = 'flex flex-col items-center bg-mustard pb-[20vh]'
    }
  },
)
