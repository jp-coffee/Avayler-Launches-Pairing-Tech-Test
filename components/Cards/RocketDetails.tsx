import dayjs from 'dayjs'
import { useCallback, useState } from 'react'
import { getSuffix } from 'utils/number'

import { Launch, Rocket } from '@/types'

interface Props {
  rocket: Rocket
  launch_date_utc: Launch['launch_date_utc']
}

const RocketDetails = ({ rocket, launch_date_utc }: Props): JSX.Element => {
  const [coreExpanded, setCoreExpanded] = useState<boolean>(false)
  const [payloadExpanded, setPayloadExpanded] = useState<boolean>(false)

  const toggleCoreExpanded = useCallback(() => {
    setCoreExpanded((prev) => !prev)
  }, [])

  const togglePayloadExpanded = useCallback(() => {
    setPayloadExpanded((prev) => !prev)
  }, [])

  const CoreDetail = ({
    title,
    value,
  }: {
    title: string
    value: string
  }): JSX.Element => (
    <p key={value} className='mb-1'>
      {title}: {value}
    </p>
  )

  const PayloadDetail = ({
    title,
    id,
    type,
  }: {
    title: string
    id: string
    type: string
  }): JSX.Element => (
    <div key={id} className='mb-1'>
      <p>{title}</p>
      <div className='grid grid-cols-2'>
        <p>ID: {id}</p>
        <p>Type: {type}</p>
      </div>
    </div>
  )

  return (
    <div className='mb-4'>
      <h3 className='text-lg font-medium mb-2 flex justify-between items-baseline'>
        {rocket.rocket_name ? `${rocket.rocket_name} Rocket` : 'Unknown Rocket'}
        {rocket.rocket_name && launch_date_utc ? (
          <span className='text-sm font-normal ml-auto'>
            {dayjs(launch_date_utc).format('DD MMM YYYY, HH:mm')} UTC
          </span>
        ) : null}
      </h3>
      {rocket.first_stage.cores.length ? (
        <div className='mb-3'>
          {rocket.first_stage.cores.slice(0, 1).map((core, index) => (
            <>
              <CoreDetail
                key={index}
                title={`${
                  rocket.first_stage.cores.length > 1
                    ? `${getSuffix(index + 1)} `
                    : ''
                }
                Core Serial`}
                value={core.core_serial}
              />
            </>
          ))}
          {rocket.first_stage.cores.length > 1 ? (
            <>
              <div
                className={`ease-linear duration-200 overflow-hidden ${
                  coreExpanded ? 'max-h-20 overflow-y-auto' : 'max-h-0'
                } `}
              >
                {rocket.first_stage.cores.slice(1).map((core, index) => (
                  <CoreDetail
                    key={index}
                    title={`${
                      rocket.first_stage.cores.length > 1
                        ? `${getSuffix(index + 1)} `
                        : ''
                    }
                Core Serial`}
                    value={core.core_serial}
                  />
                ))}
              </div>
              <p
                className='text-sm text-gray-500 flex justify-between cursor-pointer'
                onClick={toggleCoreExpanded}
              >
                <span
                  className={`ease-linear duration-200 ${
                    coreExpanded ? 'opacity-0' : ''
                  }`}
                >
                  and {rocket.first_stage.cores.length - 1} more core
                  {rocket.first_stage.cores.length - 1 > 1 ? 's' : null}
                </span>
                <span>
                  View all
                  <svg
                    className={`inline-block w-4 h-4 ease-linear duration-200 ${
                      coreExpanded ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </span>
              </p>
            </>
          ) : null}
        </div>
      ) : null}
      {rocket.second_stage.payloads.length ? (
        <div className='mb-3'>
          {rocket.second_stage.payloads.slice(0, 1).map((payload, index) => (
            <PayloadDetail
              key={index}
              title={`${
                rocket.second_stage.payloads.length > 1
                  ? `${getSuffix(index + 1)} `
                  : ''
              }
              Payload`}
              id={payload.payload_id}
              type={payload.payload_type}
            />
          ))}
          {rocket.second_stage.payloads.length > 1 ? (
            <>
              <div
                className={`ease-linear duration-200 overflow-hidden ${
                  payloadExpanded ? 'max-h-20 overflow-y-auto' : 'max-h-0'
                } `}
              >
                {rocket.second_stage.payloads.slice(1).map((payload, index) => (
                  <PayloadDetail
                    key={index}
                    title={`${
                      rocket.second_stage.payloads.length > 1
                        ? `${getSuffix(index + 1)} `
                        : ''
                    }
              Payload`}
                    id={payload.payload_id}
                    type={payload.payload_type}
                  />
                ))}
              </div>
              <p
                className='text-sm text-gray-500 flex justify-between cursor-pointer'
                onClick={togglePayloadExpanded}
              >
                <span
                  className={`ease-linear duration-200 ${
                    payloadExpanded ? 'opacity-0' : ''
                  }`}
                >
                  and {rocket.second_stage.payloads.length - 1} more payload
                  {rocket.second_stage.payloads.length - 1 > 1 ? 's' : null}
                </span>
                <span>
                  View all
                  <svg
                    className={`inline-block w-4 h-4 ease-linear duration-200 ${
                      payloadExpanded ? 'rotate-180' : ''
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </span>
              </p>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default RocketDetails
