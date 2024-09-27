export function cardAnimation(progress: number): number {
  const MIDDLE = [35, 65]
  const DURATION = 15
  const START = MIDDLE[0] - DURATION
  const END = MIDDLE[1] + DURATION

  const fadingIn = progress >= START && progress < MIDDLE[0]
  const solid = progress >= MIDDLE[0] && progress < MIDDLE[1]
  const fadingOut = progress >= MIDDLE[1] && progress < END

  if (fadingIn) return (progress - START) / DURATION
  if (solid) return 1
  if (fadingOut) return (END - progress) / DURATION
  return 0
}

export function cardRotation(progress: number, animation: number): number {
  const MAX_ROTATION = 10

  return progress < 50
    ? (1 - animation) * MAX_ROTATION
    : (animation - 1) * MAX_ROTATION
}

export function cardTranslation(animation: number): number {
  return (animation - 1) * 50
}
