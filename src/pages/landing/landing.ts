import { select } from '../../scripts/helpers'
import logo from './logo.png'
import './typer'
import arrow from './arrow.svg'

export default function pageLanding(): void {
  const page = select(document, '#pageLanding')

  page.innerHTML = `
<div id='parallax' class='h-dvh flex transform-none flex-col items-center justify-center gap-y-5 will-change-transform sm:transform-gpu sm:gap-y-7'>
  <img alt='The Digital Animal logo' class='w-5/6 max-w-[700px] drag-none xs:w-9/12 2xl:max-w-[800px]' src=${logo} />
  <x-typer class='font-lilita text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl'></x-typer>

  <div class='mx-3 mt-2 flex flex-wrap justify-center gap-3 xs:gap-4'>
    <button class='secondary' id='buttonAbout'>Learn more</button>
    <button class='primary' id='buttonContact'>Get in touch</x-button>
  </div>

  <button id='buttonArrow' class='absolute bottom-2 mx-auto flex h-10 w-10 items-center justify-center duration-500 sm:bottom-4'>
    <img class='w-5 sm:w-6' src="${arrow}" />
  </button>
</div>
`
  // Init the buttons
  select(page, '#buttonAbout').addEventListener('click', () => {
    select(document, '#pageAbout').scrollIntoView({ behavior: 'smooth' })
  })
  select(page, '#buttonContact').addEventListener('click', () => {
    select(document, '#pageContact').scrollIntoView({ behavior: 'smooth' })
  })
  select(page, '#buttonArrow').addEventListener('click', () => {
    select(document, '#pageAbout').scrollIntoView({ behavior: 'smooth' })
  })

  // The parallax animation
  const parallax = select(page, '#parallax')
  const container = select(document, 'main')

  const updateParallax = (): void => {
    parallax.style.setProperty(
      '--tw-translate-y',
      `${container.scrollTop * 0.5}px`,
    )
  }
  const update = (): void => {
    requestAnimationFrame(updateParallax)

    // Fade out the arrow with scroll
    const arrow = select(page, '#buttonArrow')
    if (container.scrollTop > 100) {
      arrow.style.opacity = '0'
      arrow.style.pointerEvents = 'none'
    } else {
      arrow.style.opacity = '1'
      arrow.style.pointerEvents = 'all'
    }
  }

  container.addEventListener('scroll', update, { passive: true })
}
