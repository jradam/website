// Select something in the DOM
export function select<T extends HTMLElement>(
  _type: new () => T, // Make the type required by having it as a parameter
  selector: string,
): T {
  const element = document.querySelector<T>(selector)
  if (!element) throw new Error(`element "${selector}" not found`)
  return element
}

// Check the DOM for duplicate IDs
export function check(): void {
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
