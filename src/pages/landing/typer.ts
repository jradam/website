customElements.define(
  'x-typer',
  class extends HTMLElement {
    #sentences = [
      'A pride of software developers',
      'A flock of graphic designers',
      'A herd of product managers',
      'A gaggle of digital marketers',
    ]
    #index = 0
    #character = 0
    #deleting = false

    connectedCallback(): void {
      const prompt = '&#62;&nbsp;'
      const cursor = '&#124;'

      const longest = this.#sentences.reduce((prev, curr) =>
        curr.length > prev.length ? curr : prev,
      )

      this.innerHTML = `
<div class='border-b-2 border-opacity-30 pb-2 font-lilita'>
  ${prompt}<span id='typer'></span><span class='-ml-1 w-0 animate-blink'>${cursor}</span>
  <!-- Invisibly print out longest sentence to set typer width to max length -->
  <div class='pointer-events-none h-0 opacity-0'>
    ${prompt}${longest}<span class='-ml-1'>${cursor}</span>
  </div>
</div>
`

      this.type()
    }

    #getMatchingCharCount(sentences: string[]): number {
      let i = 0
      // While all sentences have the same character at `i` as the first sentence, increment i
      while (sentences.every((sentence) => sentence[i] === sentences[0][i])) i++
      return i
    }

    type(): void {
      const typer = this.querySelector('#typer')
      if (!typer || !this.#sentences) return

      const SPEED = 100
      const PAUSE = 3000
      const ignore = this.#getMatchingCharCount(this.#sentences)

      const sentence = this.#sentences[this.#index]

      const isTyping = !this.#deleting && this.#character < sentence.length
      const isFinishedTyping =
        !this.#deleting && this.#character === sentence.length
      const isDeleting = this.#deleting && this.#character > ignore

      if (isTyping) {
        typer.innerHTML = sentence.substring(0, this.#character + 1)
        this.#character++
        setTimeout(() => this.type(), SPEED)
        return
      }

      if (isFinishedTyping) {
        this.#deleting = true
        setTimeout(() => this.type(), PAUSE)
        return
      }

      if (isDeleting) {
        typer.innerHTML = sentence.substring(0, this.#character - 1)
        this.#character--
        setTimeout(() => this.type(), SPEED / 1.5)
        return
      }

      // Loop through the sentence array
      this.#index++
      if (this.#index >= this.#sentences.length) this.#index = 0

      this.#deleting = false
      setTimeout(() => this.type(), SPEED)
    }
  },
)
