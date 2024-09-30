import { select } from '../../scripts/helpers'
import logo from './logo.png'
import './typer'

export default function pageLanding(): void {
  const page = select(document, '#pageLanding')

  page.innerHTML = `
<div id='parallax' class='h-dvh flex flex-col items-center justify-center gap-y-5 will-change-transform sm:gap-y-7'>
  <img alt='The Digital Animal logo' class='w-5/6 max-w-[700px] drag-none xs:w-9/12 2xl:max-w-[800px]' src=${logo} />
  <x-typer class='font-lilita text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl'></x-typer>

  <div class='mx-3 mt-2 flex flex-wrap justify-center gap-3 xs:gap-4'>
    <button class='secondary' id='buttonAbout'>Learn more</button>
    <button class='primary' id='buttonContact'>Get in touch</x-button>
  </div>
</div>
`
  // Init the buttons
  select(page, '#buttonAbout').addEventListener('click', () => {
    select(document, '#pageAbout').scrollIntoView({ behavior: 'smooth' })
  })
  select(page, '#buttonContact').addEventListener('click', () => {
    select(document, '#pageContact').scrollIntoView({ behavior: 'smooth' })
  })

  // The parallax animation
  const parallax = select(page, '#parallax')
  const container = select(document, 'main')
  let scrollPos = 0

  const update = (): void => {
    const newPos = container.scrollTop

    if (scrollPos !== newPos) {
      // translate3d to trigger hardware acceleration
      parallax.style.transform = `translate3d(0, ${newPos * 0.5}px, 0)`
      scrollPos = newPos
    }

    requestAnimationFrame(update)
  }

  // Start the animation
  requestAnimationFrame(update)
}
