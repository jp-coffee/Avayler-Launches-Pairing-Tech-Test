import Image from 'next/image'

import SpaceXIconBlack from '@/Icons/SpaceX-Icon-Black.svg'
import SpaceXIconWhite from '@/Icons/SpaceX-Icon-White.svg'
import { Launch, Links, Theme } from '@/types'

interface Props {
  mission_name: Launch['mission_name']
  mission_patch_small?: Links['mission_patch_small']
  theme: Theme
}

const Badge = ({
  mission_name,
  mission_patch_small,
  theme,
}: Props): JSX.Element => (
  <div className='absolute w-14 h-14 -top-5 -right-5 rounded-full overflow-hidden p-[0.3rem] shadow-xl shadow-black/20 dark:shadow-black/70 bg-spacex-grey dark:bg-spacex-dark-grey'>
    <div className='relative w-full h-full'>
      {mission_patch_small ? (
        <Image
          src={mission_patch_small}
          alt={mission_name}
          width={100}
          height={100}
          className='object-contain w-full h-full'
        />
      ) : (
        <Image
          src={theme === Theme.Dark ? SpaceXIconWhite : SpaceXIconBlack}
          alt='SpaceX Logo'
          width={SpaceXIconWhite.width}
          height={SpaceXIconWhite.height}
          className='object-contain w-full h-full'
        />
      )}
    </div>
  </div>
)

export default Badge
