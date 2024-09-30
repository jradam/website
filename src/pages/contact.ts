import { select } from '../scripts/helpers'

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>

<div class='flex flex-col items-center py-44'>

  Drop us a line and we'll be in touch right away!

  james@digitalanimal.com

  <form action="" class='flex flex-col'>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name...">

    <label for="email">Email</label>
    <input type="text" id="email" email="email" placeholder="Your email...">

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Tell us about it..."></textarea>

    <button type="submit" class='primary'>Send</button>
  </form>
</div>
`
}
