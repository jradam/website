import { select } from '../scripts/helpers'
import '../comps/input'
import emailjs from '@emailjs/browser'
import { validate } from 'email-validator'

// TODO: Change to own server
// TODO: Button should go red on invalid
// TODO: Labels fade on submit too?
// TODO: Add animal pun

async function handleForm(event: SubmitEvent): Promise<void> {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) throw new Error('Form error')

  const alert = select(form, '#alert')
  const nameInput = select<HTMLInputElement>(form, 'input[name="name"]')
  const emailInput = select<HTMLInputElement>(form, 'input[name="email"]')
  const messageInput = select<HTMLInputElement>(
    form,
    'textarea[name="message"]',
  )

  if (!nameInput.value) {
    alert.innerText = 'You must include a name.'
    nameInput.parentElement?.classList.add('error')
    return
  }
  nameInput.parentElement?.classList.remove('error')

  if (!validate(emailInput.value)) {
    alert.innerText = 'Email is invalid.'
    emailInput.parentElement?.classList.add('error')
    return
  }
  emailInput.parentElement?.classList.remove('error')

  const button = select<HTMLInputElement>(form, 'button')
  button.innerText = 'Sending...'
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
  nameInput.disabled = true
  emailInput.disabled = true
  messageInput.disabled = true
}

export default function pageContact(): void {
  const page = select(document, '#pageContact')

  page.innerHTML = `
<x-title>Get in touch</x-title>

<div class='max-w-96 min-h-dvh mx-auto flex flex-col items-center justify-center gap-y-6 px-6 pb-8 pt-16 text-center'>

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

    <p id='alert' class='text-balance min-h-7 text-xl font-bold text-red-500'></p>
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
