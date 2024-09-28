import { select } from './helpers'

export function scrollEffects(): void {
  const container = select('main')
  const landing = select('#pageLanding')

  let scrollPos = 0

  const handleScroll = (): void => {
    scrollPos = container.scrollTop
    landing.style.transform = `translateY(${scrollPos * 0.5}px)`
  }

  const saveScroll = (): void => {
    sessionStorage.setItem('scrollPos', scrollPos.toString())
  }

  container.addEventListener('scroll', handleScroll)
  addEventListener('pagehide', saveScroll) // If the page unloads/refreshes, save the scrollPos

  // Restore scroll position on page load
  const savedPos = sessionStorage.getItem('scrollPos')
  if (savedPos) container.scrollTop = parseInt(savedPos)
}
