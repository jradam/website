import { select } from '../scripts/helpers'

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>

<div class='flex flex-col items-center gap-y-12 py-44'>

  <div>
    Drop us a line and we'll be in touch right away!

    james@digitalanimal.com
  </div>

  <form action="" class='flex flex-col items-center gap-y-12'>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name...">
    </div>

    <div>
      <label for="email">Email</label>
      <input type="text" id="email" email="email" placeholder="Your email...">
    </div>

    <div>
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Tell us about it..."></textarea>
    </div>

    <button type="submit" class='primary'>Send</button>
  </form>
</div>
`
}
