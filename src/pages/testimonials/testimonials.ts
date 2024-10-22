import { select } from '../../scripts/helpers'
import './carousel'
import danny from './danny.png'
import ed from './ed.png'
import phil from './phil.png'
import './quote'

// TODO: Add ability to swipe

export default function pageTestimonials(): void {
  const page = select(document, '#pageTestimonials')

  page.innerHTML = `
<x-title>A word from our clients</x-title>
<div class='py-24 md:py-44'>
  <x-carousel>
    <x-slide>
      <x-quote image='${phil}' color='#5e9df1' name='Phil Callan' company='One Tree Software'>
        James is a great asset to any digital team: smart, knowledgeable, quick, efficient and personable. In addition to good technical skills he is also able to understand and interpret the business need. Highly recommended.
      </x-quote>
    </x-slide>
    <x-slide>
      <x-quote image='${ed}' color='#ff9482' name='Ed Cox' company='Rattle &amp; Shake'>
        Digital Animal implemented a sophisticated new website for us. Since launching we’ve seen a significant increase in business, and James’ creative approach made all the difference. We couldn’t be happier with the results!
      </x-quote>
    </x-slide>
    <x-slide>
      <x-quote image='${danny}' color='#96b76b' name='Danny' company='Website client'>
        Digital Animal were fantastic - they delivered exactly what I asked for and dealt with my amendments promptly and enthusiastically. 
      </x-quote>
    </x-slide>
  </x-carousel>
</div>
`
}
