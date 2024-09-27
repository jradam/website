import { getFileName } from '../../scripts/helpers'
import css from './tech/CSS.svg'
import digitalOcean from './tech/Digital_Ocean.svg'
import figma from './tech/Figma.svg'
import firebase from './tech/Firebase.svg'
import git from './tech/Git.svg'
import github from './tech/GitHub.svg'
import gitlab from './tech/GitLab.svg'
import html5 from './tech/HTML5.svg'
import javascript from './tech/JavaScript.svg'
import neovim from './tech/Neovim.svg'
import nextjs from './tech/Next.js.svg'
import nodejs from './tech/Node.js.svg'
import npm from './tech/npm.svg'
import pwa from './tech/PWA.svg'
import python from './tech/Python.svg'
import react from './tech/React.svg'
import storybook from './tech/Storybook.svg'
import tailwindCss from './tech/Tailwind_CSS.svg'
import typescript from './tech/TypeScript.svg'
import vite from './tech/Vite.svg'
import { twMerge } from 'tailwind-merge'

// TODO: Pause scroll on hover
// TODO: Show alt on hover

// https://www.tech-stack-icons.com/

customElements.define(
  'x-marquee',
  class extends HTMLElement {
    #tech = [
      css,
      digitalOcean,
      figma,
      firebase,
      git,
      github,
      gitlab,
      html5,
      javascript,
      neovim,
      nextjs,
      nodejs,
      npm,
      pwa,
      python,
      react,
      storybook,
      tailwindCss,
      typescript,
      vite,
    ]
    #WIDTH = 2
    #SPEED = 70
    #animation: HTMLStyleElement | null = null

    #item(image: string): HTMLImageElement {
      const item = document.createElement('img')
      item.className = 'mx-8 inline-block h-12 w-12'
      item.alt = getFileName(image)
      item.src = image
      return item
    }

    #set(images: string[]): HTMLSpanElement {
      const span = document.createElement('span')
      images.forEach((image) => {
        span.appendChild(this.#item(image))
      })
      return span
    }

    #addAnimation(width: number): void {
      this.#animation = document.createElement('style')
      this.#animation.textContent = `
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-${width}px); } }
.animate-marquee { animation: marquee ${this.#SPEED}s linear infinite; }
`
      document.head.appendChild(this.#animation)
    }

    #select(selector: string): HTMLDivElement {
      const element = this.querySelector<HTMLDivElement>(selector)
      if (!element) throw new Error(`Element not found: ${selector}`)
      return element
    }

    connectedCallback(): void {
      const classes = 'flex justify-center'
      this.className = twMerge(classes, this.className)
      this.innerHTML = `
  <div class='relative'>
    <div id='container' class='whitespace-nowrap'>
      <div id='slider' class='animate-marquee py-6'></div>

      <div class='absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white from-10%'></div>
      <div id='rightPortal' class='absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white from-10%'></div>
    </div>

    <div id='leftCover' class='absolute inset-y-0 bg-white'></div>
    <div id='rightCover' class='absolute inset-y-0 bg-white'></div>
  </div>
`

      const slider = this.#select('#slider')
      const rightPortal = this.#select('#rightPortal')
      const leftCover = this.#select('#leftCover')
      const rightCover = this.#select('#rightCover')
      const container = this.#select('#container')

      for (let i = 0; i < this.#WIDTH; i++)
        slider.appendChild(this.#set(this.#tech))

      const width = slider.firstElementChild?.getBoundingClientRect().width || 0

      rightPortal.style.right = `${width}px`

      // Covers as wide as one set, each offset half a set outwards
      // + 1 fixes pixel gap at some scaling
      leftCover.style.width = `${width + 1}px`
      leftCover.style.left = `-${width / 2}px`
      rightCover.style.width = `${width + 1}px`
      rightCover.style.right = `-${width / 2}px`

      container.style.translate = `${width / 2}px`
      container.style.width = `${this.#WIDTH * width}px`

      this.#addAnimation(width)
    }

    disconnectedCallback(): void {
      this.#animation?.remove()
    }
  },
)
