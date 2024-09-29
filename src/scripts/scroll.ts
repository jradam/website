import { select } from './helpers'

export function saveScroll(): void {
  const container = select(document, 'main')

  // If the page unloads/refreshes, save the scrollPos
  addEventListener('pagehide', (): void => {
    sessionStorage.setItem('scrollPos', container.scrollTop.toString())
  })

  // Restore scroll position on page load
  const savedPos = sessionStorage.getItem('scrollPos')
  if (savedPos) container.scrollTop = parseInt(savedPos)
}
