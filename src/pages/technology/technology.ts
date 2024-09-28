import { putTemplateInSlots, select } from '../../scripts/helpers'
import './marquee'
import owl from './owl.png'

export default function pageTechnology(): void {
  const page = select('#pageTechnology')

  page.className = 'bg-white'

  page.innerHTML = `
<x-title>What we do</x-title>
<div class='content flex items-center gap-x-10 pb-16 pt-32'>
  <slot class='hidden md:block'></slot>

  <div class='mx-auto space-y-6 md:space-y-3'>
    <h3 class='text-balance text-center font-lilita text-3xl md:text-left'>Experts in our field</h3>

    <slot class='md:hidden'></slot>

    <x-p> 
      <b>Eagle eyed.</b> By focusing in on what a business really needs, we can build thoughtful and practical solutions that solve real problems.
    </x-p>

    <x-p> 
      <b>Wise as an owl.</b> Our deep understanding of web technology allows us to dive into complex problems, with the right tools for the job at hand. 
    </x-p>

    <x-p> 
      <b>Like a duck to water.</b> We navigate digital landscapes of all shapes and sizes, allowing us to swiftly adapt to new challenges. 
    </x-p>
  </div>
</div>

<x-marquee></x-marquee>

<template>
  <div class='relative mx-auto mb-8 aspect-square h-36 flex-shrink-0 md:mb-0'>
    <div class='absolute left-0 right-0 top-10 m-auto aspect-square h-28 rounded-full border-2 bg-purple'></div>
    <img class='absolute top-2' src='${owl}' />
  </div>
</template>
`

  putTemplateInSlots(page)
}
