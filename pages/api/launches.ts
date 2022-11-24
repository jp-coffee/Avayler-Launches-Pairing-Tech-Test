import { NextApiRequest, NextApiResponse } from 'next'

import { Launch } from '@/types'

const launches = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/launches')
    const resJSON: Launch[] = await response.json()

    const data = resJSON
      .sort((a: Launch, b: Launch) => {
        return b.flight_number - a.flight_number
      })
      .slice(0, 10)
      .map((launch: Launch) => {
        return {
          flight_number: launch.flight_number,
          mission_name: launch.mission_name,
          launch_date_utc: launch.launch_date_utc,
          rocket: {
            rocket_id: launch.rocket.rocket_id,
            rocket_name: launch.rocket.rocket_name,
            first_stage: {
              cores: launch.rocket.first_stage.cores.map((core) => {
                return {
                  core_serial: core.core_serial,
                }
              }),
            },
            second_stage: {
              payloads: launch.rocket.second_stage.payloads.map((payload) => {
                return {
                  payload_id: payload.payload_id,
                  payload_type: payload.payload_type,
                }
              }),
            },
          },
          links: {
            mission_patch_small: launch.links.mission_patch_small,
          },
          launch_success: launch.launch_success,
          launch_failure_details: launch.launch_failure_details,
        }
      })

    res.status(200).json(data)
  } catch (error: Error | unknown) {
    res.status(500).json({
      message: (error as Error).message || 'Internal Server Error',
    })
  } finally {
    res.end()
  }
}

export default launches
