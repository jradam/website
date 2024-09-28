import logo from './logo.png'
import './typer'

customElements.define(
  'page-landing',
  class extends HTMLElement {
    connectedCallback(): void {
      this.outerHTML = `
<section id='page-landing' class='flex h-screen flex-col items-center justify-center gap-y-5 sm:gap-y-7'>
  <img class='w-5/6 max-w-[700px] drag-none xs:w-9/12 2xl:max-w-[800px]' src=${logo} />
  <x-typer class='font-lilita text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl'></x-typer>

  <div class='mx-3 mt-2 flex flex-wrap justify-center gap-3 xs:gap-4'>
    <button class='secondary' id='learnMore'>Learn more</button>
    <button class='primary' id='getInTouch'>Get in touch</x-button>
  </div>
</section>
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
