import { select } from '../scripts/helpers'
import '../comps/input'
import emailjs from '@emailjs/browser'

// TODO: Button loading state
// TODO: Disable form on Success, with button to 'send another message'
// TODO: Throttle sending on success
// TODO: Validate emails
// TODO: Block submit on 'Enter'
// TODO: Change to own server

const ERROR = 'There was an error! Please let me know: james@digitalanimal.com'
const SUCCESS = "Sent! We'll be in touch soon"

async function handleForm(event: SubmitEvent): Promise<void> {
  const form = event.target
  const message = select(document, '#message')
  if (!(form instanceof HTMLFormElement)) throw new Error('Form error')

  try {
    const res = await emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form,
    )

    if (res) {
      message.innerText = SUCCESS
      return
    }
  } catch {
    message.innerText = ERROR
    throw new Error('Error sending form!')
  }

  message.innerText = ERROR
}

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>

<div class='max-w-96 mx-auto my-44 space-y-12 px-6 text-center'>

  <h2 class='text-balance font-lilita text-3xl'>
    Drop us a line and we'll be in touch soon
  </h2>

  <form id='contact' class='w-full space-y-6'>

    <x-input name='name' placeholder='Your name...'></x-input>

    <x-input name='email' type='email' placeholder='Your email...'></x-input>

    <x-input name='message' type='textarea' placeholder='Tell us about it...'></x-input>

    <button class='primary mx-auto w-fit' type='submit'>Send</button>

  </form>

  <p id='message' class='text-balance text-xl font-bold'></p>
</div>
`

  emailjs.init({ publicKey: import.meta.env.VITE_PUBLIC_KEY })

  select(page, '#contact').addEventListener('submit', (event) => {
    event.preventDefault()
    handleForm(event)
  })
}
