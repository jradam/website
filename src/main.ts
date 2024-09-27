import './comps/button'
import './comps/paragraph'
import './comps/error'
import './comps/loading'
import './comps/title'
import './pages/about/about'
import './pages/contact'
import './pages/landing/landing'
import './pages/projects/projects'
import './pages/technology/technology'
import './pages/testimonials/testimonials'
import { check, select } from './scripts/helpers'
import scroll from './scripts/scroll'
import './tw.css'

// TODO: Add simple contact form
// TODO: Add CV to About section
// TODO: Evaluate using Axe-core
// TODO: Get perfect score with Lighthouse, heytony etc
// TODO: aria labels
// TODO: Enforce double quotes for HTML attributes
// TODO: Not loading on iOS

document.body.innerHTML = `
<main class='absolute inset-0 h-screen overflow-y-auto overflow-x-hidden bg-mustard'>

  <section is='page-landing' id='landing'></section>

  <section is='page-about' id='about'></section>

  <section is='page-testimonials'></section>

  <section is='page-technology'></section>

  <!-- TODO: Add projects section -->
  <!-- <section is='page-projects' id='projects'></section> -->

  <section is='page-contact' id='contact'></section>

</main>
<x-loading></x-loading>
<x-error></x-error>
`

const container = select(HTMLElement, 'main')
const parallax = select(HTMLDivElement, '#landing')
scroll(container, parallax)

document.addEventListener('DOMContentLoaded', check) // Check the DOM for duplicate IDs
