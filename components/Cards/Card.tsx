import Badge from '@/Badge/Badge'
import LanuchStatus from '@/Status/Lanuch'
import type { Launch, Theme } from '@/types'

import RocketDetails from './RocketDetails'

interface Props {
  launch: Launch | null
  theme: Theme
}

const Card = ({ launch, theme }: Props) => {
  const {
    flight_number,
    mission_name,
    launch_date_utc,
    rocket,
    links,
    launch_success,
    launch_failure_details,
  } = launch || {
    flight_number: 0,
    mission_name: '',
    launch_date_utc: '',
    rocket: {
      rocket_id: '',
      rocket_name: '',
      first_stage: {
        cores: [],
      },
      second_stage: {
        payloads: [],
      },
    },
    links: {
      mission_patch_small: '',
    },
    launch_success: null,
  }

  return (
    <div className='relative p-4 min-h-[200px] rounded-xl shadow-lg shadow-black/10 dark:shadow-black/30 bg-spacex-grey dark:bg-spacex-dark-grey'>
      {launch ? (
        <>
          <Badge
            mission_name={mission_name}
            mission_patch_small={links.mission_patch_small}
            theme={theme}
          />
          <h2 className='text-xl font-bold mb-4'>{mission_name}</h2>
          <RocketDetails rocket={rocket} launch_date_utc={launch_date_utc} />
          <LanuchStatus
            flight_number={flight_number}
            launch_success={launch_success}
            launch_date_utc={launch_date_utc}
            launch_failure_details={launch_failure_details}
          />
        </>
      ) : null}
    </div>
  )
}

export default Card
