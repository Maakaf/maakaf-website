'use client'

import { useState, useEffect } from 'react'

export type TailwindScreens = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

const screenSizes: Record<TailwindScreens, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

const getScreenSize = () => {
  const width = window.innerWidth
  if (width >= screenSizes['2xl']) return '2xl'
  if (width >= screenSizes.xl) return 'xl'
  if (width >= screenSizes.lg) return 'lg'
  if (width >= screenSizes.md) return 'md'
  return 'sm'
}

const useMediaQuery = (size: TailwindScreens) => {
  const [screen, setScreen] = useState<TailwindScreens>(getScreenSize())

  useEffect(() => {
    const handleResize = () => {
      const newSize = getScreenSize()
      setScreen(newSize)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMatching = screen === size

  return isMatching
}

export default useMediaQuery
