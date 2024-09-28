import { select } from '../../scripts/helpers'
import logo from './logo.png'
import './typer'

export default function pageLanding(): void {
  const page = select('#pageLanding')

  page.className =
    'flex h-screen flex-col items-center justify-center gap-y-5 sm:gap-y-7'

  page.innerHTML = `
<img class='w-5/6 max-w-[700px] drag-none xs:w-9/12 2xl:max-w-[800px]' src=${logo} />
<x-typer class='font-lilita text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl'></x-typer>

<div class='mx-3 mt-2 flex flex-wrap justify-center gap-3 xs:gap-4'>
  <button class='secondary' id='buttonAbout'>Learn more</button>
  <button class='primary' id='buttonContact'>Get in touch</x-button>
</div>
`

  page.querySelector('#buttonAbout')?.addEventListener('click', () => {
    const target = document.querySelector('#pageAbout')
    target?.scrollIntoView({ behavior: 'smooth' })
  })

  page.querySelector('#buttonContact')?.addEventListener('click', () => {
    const target = document.querySelector('#pageContact')
    target?.scrollIntoView({ behavior: 'smooth' })
  })
}
