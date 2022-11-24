import { useEffect, useState } from 'react'
import { useTheme } from 'utils/theme'

import { Theme } from '@/types'

import Navigation from './Navigation'

interface Props {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  useEffect(() => {
    setTheme(useTheme())
  }, [])

  return (
    <>
      <Navigation theme={theme} />
      <div className='mt-20'>{children}</div>
    </>
  )
}

export default DefaultLayout
