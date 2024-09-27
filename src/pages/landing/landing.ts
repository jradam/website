import logo from './logo.png'
import './typer'

customElements.define(
  'page-landing',
  class extends HTMLElement {
    connectedCallback(): void {
      this.className =
        'flex h-screen flex-col items-center justify-center gap-y-5 sm:gap-y-7'
      this.innerHTML = `
<img class='w-5/6 max-w-[700px] drag-none xs:w-9/12 2xl:max-w-[800px]' src=${logo} />
<x-typer class='font-lilita text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl'></x-typer>
<div class='mx-3 mt-2 flex flex-wrap justify-center gap-3 xs:gap-4'>
  <button is='x-button' id='learnMore'>Learn more</button>
  <button is='x-button' id='getInTouch' class='bg-purple'>Get in touch</x-button>
</div>
`
      this.querySelector('#learnMore')?.addEventListener('click', () => {
        const target = document.querySelector('#about')
        target?.scrollIntoView({ behavior: 'smooth' })
      })

      this.querySelector('#getInTouch')?.addEventListener('click', () => {
        const target = document.querySelector('#contact')
        target?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  },
)
