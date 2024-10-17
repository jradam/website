import './comps/error'
import './comps/loading'
import './comps/paragraph'
import './comps/title'
import pageAbout from './pages/about/about'
import pageContact from './pages/contact'
import pageLanding from './pages/landing/landing'
import pageTechnology from './pages/technology/technology'
import pageTestimonials from './pages/testimonials/testimonials'
import { checkForDuplicateIDs } from './scripts/helpers'
import { saveScroll } from './scripts/scroll'
import './tw.css'

// TODO: Evaluate using Axe-core
// TODO: Get perfect score with Lighthouse, heytony etc
// TODO: Enforce double quotes for HTML attributes

document.body.innerHTML = `
<main class='h-dvh absolute inset-0 overflow-y-auto overflow-x-hidden bg-mustard'>

  <section id='pageLanding'></section>
  <section id='pageAbout'></section>
  <section id='pageTestimonials'></section>
  <section id='pageTechnology'></section>
  <!-- TODO: <section id='pageProjects'></section> -->
  <section id='pageContact'></section>

</main>

<x-loading></x-loading>
<x-error></x-error>
`

pageLanding()
pageAbout()
pageTestimonials()
pageTechnology()
// TODO: pageProjects()
pageContact()

saveScroll()

document.addEventListener('DOMContentLoaded', checkForDuplicateIDs)
