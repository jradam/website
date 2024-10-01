// Select something in the DOM with error handling
export function select<T extends HTMLElement>(
  node: ParentNode,
  selector: string,
): T {
  const element = node.querySelector<T>(selector)
  if (!element) throw new Error(`element "${selector}" not found`)
  return element
}

// Check the DOM for duplicate IDs
export function checkForDuplicateIDs(): void {
  const elements = document.querySelectorAll('[id]')
  const ids = new Set()

  for (const element of elements) {
    if (ids.has(element.id)) throw new Error(`duplicate ID "${element.id}"`)

    ids.add(element.id)
  }
}

// Get a file name from a path
export function getFileName(path: string): string {
  const fullFileName = path.split('/').pop() ?? ''
  const fileNameParts = fullFileName.split('.')
  const withoutExtension = fileNameParts.slice(0, -1).join('.')
  const underscoresToSpaces = withoutExtension.replace(/_/g, ' ')
  return underscoresToSpaces
}

// Put template into slots
export function putTemplateInSlots(element: HTMLElement): void {
  const slots = element.querySelectorAll('slot')
  const template = element.querySelector('template')
  if (!template) return
  slots.forEach((slot) => slot.appendChild(template.content.cloneNode(true)))
}

// Process template literals to "create HTML"
// This is mainly for syntax highlighting, since we aren't really modifying any values
// By allowing and converting falsy values to strings, we can use short-circuits in our HTML (&&, ||)
export function html(
  strings: TemplateStringsArray,
  ...values: Array<string | false | Record<string, string | false>>
): string {
  let result = ''
  strings.forEach((string, index) => {
    result += string // Add string literal

    if (typeof values[index] !== 'object') {
      result += values[index] || '' // Add corresponding value (or empty string if false)
      return
    }

    // If we do pass an object as a value, we can do some magic to expand attributes
    // e.g. { name } -> name='${name}'
    for (const [key, value] of Object.entries(values[index])) {
      result += value ? `${key}="${value}"` : ''
    }
  })

  return result
}
