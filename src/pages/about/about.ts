import github from './github.svg'
import external from './external.svg'
import james from './james.png'
import { select } from '../../scripts/helpers'

export default function pageAbout(): void {
  const page = select(document, '#pageAbout')

  page.className = 'relative bg-white'

  page.innerHTML = `
<x-title>A bit about us</x-title>
<div class='content flex flex-col items-center gap-x-6 py-24 md:flex-row md:py-44 2xl:gap-x-10'>
  <div class='space-y-6 md:space-y-3'>
    <h3 class='text-balance text-center font-lilita text-3xl md:text-left'>Nice to meet you! <div class='inline-block origin-bottom-right animate-wave'>👋</div></h3>

    <img alt='James from Digital Animal' class='mx-auto h-64 xs:h-80 md:hidden' src=${james} alt="James" />

    <x-p>
      I'm James, a software developer and designer based in Montréal. I love building things, solving interesting problems, and tinkering with new tech. 
    </x-p>

    <x-p>
      I started Digital Animal to help businesses elevate their presence on the web. From portfolio websites to complex applications - our small team of experts can help.
    </x-p>

    <div class='flex justify-center pt-2 md:justify-start'>
      <a target='_blank' href='https://github.com/jradam'>
        <button class='box press text-balance flex items-center gap-x-2 rounded-md bg-white px-2 py-2 font-lilita leading-tight'>
          <img alt='The GitHub logo' class='w-6' src="${github}" />
          <div>
            <p>Follow me on GitHub</p>
          </div>
          <img alt='An arrow indicating an external link' class='w-5' src="${external}" />
        </button>
      </a>
    </div>
  </div>
  <img class='hidden h-80 md:block' src=${james} alt="James" />
</div>
`
}
