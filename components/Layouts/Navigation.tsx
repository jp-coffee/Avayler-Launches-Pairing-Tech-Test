import Image from 'next/image'
import { useEffect, useState } from 'react'

import SpaceXLogoBlack from '@/Icons/SpaceX-Logo-Black.svg'
import SpaceXLogoWhite from '@/Icons/SpaceX-Logo-White.svg'
import { Theme } from '@/types'

interface Props {
  theme: Theme
}

const Navigation = ({ theme }: Props): JSX.Element => {
  const [scroll, setScroll] = useState<boolean>(false)

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-10 py-5 ease-linear duration-300 shadow-black/20 dark:shadow-black/30 bg-spacex-white dark:bg-spacex-black ${
        scroll ? 'shadow-xl' : ''
      }`}
    >
      <div className='container'>
        <div
          className={`relative ease-linear duration-300 ${
            scroll ? 'h-4' : 'h-6'
          }`}
        >
          {theme === Theme.Light ? (
            <Image
              src={SpaceXLogoBlack}
              alt='SpaceX Logo'
              height={SpaceXLogoWhite.height}
              width={SpaceXLogoWhite.width}
              objectPosition='0,0'
              objectFit='contain'
              layout='fill'
              className='object-left'
            />
          ) : (
            <Image
              src={SpaceXLogoWhite}
              alt='SpaceX Logo'
              height={SpaceXLogoWhite.height}
              width={SpaceXLogoWhite.width}
              objectPosition='0,0'
              objectFit='contain'
              layout='fill'
              className='object-left'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
