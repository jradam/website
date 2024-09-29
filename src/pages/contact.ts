import { select } from '../scripts/helpers'

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>
<div class='flex justify-center py-44 font-lilita text-3xl'>james@digitalanimal.com</div>
`
}
