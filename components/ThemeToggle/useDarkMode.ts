import { useEffect, useState } from 'react'
import { Theme } from './ThemeToggle.type'

export default function useDarkMode() {
  const [theme, setTheme] = useState<Theme>('light')
  const storageKey = 'theme-preference'
  const reflectPreference = () => {
    document.firstElementChild?.setAttribute('data-theme', theme)
  }
  useEffect(() => {
    localStorage.setItem(storageKey, theme)
    reflectPreference()
  }, [theme])
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const getColorPreference: () => Theme = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey) as Theme
    else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = ({ matches: isDark }: MediaQueryListEvent) => {
      setTheme(isDark ? 'dark' : 'light')
    }
    setTheme(getColorPreference())
    mediaQuery.addEventListener('change', handleChange)
  }, [])

  return [theme, toggleTheme]
}
