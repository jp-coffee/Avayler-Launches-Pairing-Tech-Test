import dayjs from 'dayjs'
import ReactTooltip from 'react-tooltip'

import { Launch } from '@/types'

interface Props {
  flight_number: Launch['flight_number']
  launch_success: Launch['launch_success']
  launch_date_utc: Launch['launch_date_utc']
  launch_failure_details?: Launch['launch_failure_details']
}

interface iStatusRenderer {
  children: React.ReactNode
  className?: string
}

const LanuchStatus = ({
  flight_number,
  launch_success,
  launch_date_utc,
  launch_failure_details,
}: Props): JSX.Element => {
  const StatusRenderer = ({
    children,
    className,
  }: iStatusRenderer): JSX.Element => (
    <p className={className || ''}>Launch Status: {children}</p>
  )

  switch (launch_success) {
    case true:
      return (
        <StatusRenderer>
          <span className='text-green-600 dark:text-green-500 font-medium'>
            Successful
          </span>
        </StatusRenderer>
      )
    case false:
      return (
        <StatusRenderer className='flex gap-1'>
          <span className='text-red-500 font-medium flex items-start'>
            Failed
            {launch_failure_details ? (
              <span
                className='ml-1 text-spacex-dark-grey dark:text-spacex-grey cursor-pointer flex items-center'
                data-tip
                data-for={`${flight_number}-tooltip`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 inline-block'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z'
                    clipRule='evenodd'
                  />
                  <path
                    fillRule='evenodd'
                    d='M10 5a1 1 0 00-1 1v4a1 1 0 002 0V6a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                  <path
                    fillRule='evenodd'
                    d='M10 12a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            ) : null}
          </span>
          {launch_failure_details ? (
            <ReactTooltip
              id={`${flight_number}-tooltip`}
              type='error'
              effect='solid'
            >
              {launch_failure_details?.reason}
            </ReactTooltip>
          ) : null}
        </StatusRenderer>
      )
    default:
      return launch_date_utc && dayjs(launch_date_utc).isAfter(dayjs()) ? (
        <StatusRenderer>
          <span className='text-yellow-500 font-medium'>Upcoming</span>
        </StatusRenderer>
      ) : (
        <StatusRenderer>
          <span className='text-gray-500 font-medium'>Unknown</span>
        </StatusRenderer>
      )
  }
}

export default LanuchStatus
