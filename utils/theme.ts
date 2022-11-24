import { Theme } from '@/types'

export const useTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    if (userPrefersDark) {
      document.documentElement.classList.add('dark')
      return Theme.Dark
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  return Theme.Light
}
