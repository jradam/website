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

  <page-landing></page-landing>

  <page-about></page-about>

  <page-testimonials></page-testimonials>

  <page-technology></page-technology>

  <!-- TODO: Add projects section -->
  <!-- <page-projects id='projects'></page-projects> -->

  <page-contact></page-contact>

</main>
<x-loading></x-loading>
<x-error></x-error>
`

const container = select(HTMLElement, 'main')
const parallax = select(HTMLDivElement, '#page-landing')
scroll(container, parallax)

document.addEventListener('DOMContentLoaded', check) // Check the DOM for duplicate IDs
