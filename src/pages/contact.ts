import { select } from '../scripts/helpers'
import '../comps/input'
import emailjs from '@emailjs/browser'
import { validate } from 'email-validator'

// TODO: Change to own server

async function handleForm(event: SubmitEvent): Promise<void> {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) throw new Error('Form error')

  const alert = select(form, '#alert')
  const name = select<HTMLInputElement>(form, 'input[name="name"]')
  const email = select<HTMLInputElement>(form, 'input[name="email"]')
  const message = select<HTMLInputElement>(form, 'textarea[name="message"]')

  if (!name.value) {
    alert.innerText = 'You must include a name.'
    name.parentElement?.classList.add('error')
    return
  }
  name.parentElement?.classList.remove('error')

  if (!validate(email.value)) {
    alert.innerText = 'Email is invalid.'
    email.parentElement?.classList.add('error')
    return
  }
  email.parentElement?.classList.remove('error')

  const button = select<HTMLInputElement>(form, 'button')
  button.innerText = 'Loading...'
  button.disabled = true

  const { status } = await emailjs.sendForm(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    form,
  )

  if (status === 200) {
    alert.innerText = 'Message sent! Thanks for getting in touch.'
    alert.classList.remove('text-red-500')
  } else {
    alert.innerHTML = `There was an error! Please let me know: <a class='underline' href='mailto:james@digitalanimal.com'>james@digitalanimal.com</a>`
  }

  button.remove()
  name.disabled = true
  email.disabled = true
  message.disabled = true
}

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>

<div class='max-w-96 mx-auto space-y-12 px-6 py-24 text-center md:my-44'>

  <h2 class='text-balance font-lilita text-3xl'>
    Drop us a line and we'll be in touch soon
  </h2>

  <form id='contact' class='w-full space-y-6 disabled:opacity-70' novalidate>
    <x-input name='name' placeholder='Your name...'></x-input>
    <x-input name='email' type='email' placeholder='Your email...'></x-input>
    <x-input name='message' type='textarea' placeholder='Tell us about it...'></x-input>

    <button 
      class='primary mx-auto w-fit disabled:pointer-events-none disabled:translate-x-[3px] disabled:translate-y-[3px] disabled:opacity-70 disabled:shadow-none'
      type='submit'
    >
      Send
    </button>

    <p id='alert' class='text-balance text-xl font-bold text-red-500'></p>
  </form>
</div>
`

  emailjs.init({ publicKey: import.meta.env.VITE_PUBLIC_KEY })

  const form = select(page, '#contact')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleForm(event)
  })

  form.addEventListener('keydown', (event) => {
    const textArea =
      event.target instanceof HTMLElement && event.target.tagName === 'TEXTAREA'

    if (event.key === 'Enter' && !textArea) {
      event.preventDefault()
    }
  })
}
