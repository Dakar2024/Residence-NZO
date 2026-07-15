import { useRef } from 'react'
import type { TouchEvent } from 'react'

const SWIPE_THRESHOLD_PX = 48

/**
 * Horizontal swipe detection for touch screens.
 * Only fires when the gesture is clearly horizontal, so vertical
 * page scrolling over the carousel keeps working.
 */
export function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const start = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0]
    start.current = { x: touch.clientX, y: touch.clientY }
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (!start.current) return
    const touch = e.changedTouches[0]
    const dx = touch.clientX - start.current.x
    const dy = touch.clientY - start.current.y
    start.current = null

    if (Math.abs(dx) > SWIPE_THRESHOLD_PX && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) onSwipeLeft()
      else onSwipeRight()
    }
  }

  return { onTouchStart, onTouchEnd }
}
