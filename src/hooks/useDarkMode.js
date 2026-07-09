import { useCallback, useEffect, useState } from 'react'

function getInitialTheme() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('agisoft-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggle = useCallback(() => setIsDark((v) => !v), [])

  return { isDark, toggle }
}
