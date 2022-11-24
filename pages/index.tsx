import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useTheme } from 'utils/theme'

import Card from '@/Cards/Card'
import { Launch, Theme } from '@/types'

const HomePage: NextPage = (): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  const [launches, setLaunches] = useState<Launch[]>([])
  const [error, setError] = useState<Error['message']>('')

  useEffect(() => {
    ;(async () => {
      const response = await fetch('/api/launches', {
        method: 'GET',
      })
      if (response.ok) {
        const data = await response.json()
        setLaunches(data)
      } else {
        const error = await response.json()
        setError(error.message || 'Something went wrong')
      }
    })()
  }, [])

  useEffect(() => {
    setTheme(useTheme())
  }, [])

  return (
    <div className='container'>
      {error ? (
        <>
          <h1 className='text-2xl font-bold mb-10'>Error</h1>
          <p className='text-red-500'>{error}</p>
        </>
      ) : launches && launches.length ? (
        <>
          <h1 className='text-2xl font-bold mb-10'>Launches:</h1>
          <div className='grid sm:!grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 gap-y-10 mb-20'>
            {launches.map((launch: Launch) => (
              <Card key={launch.mission_name} launch={launch} theme={theme} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className='text-2xl font-bold mb-10'>Loading...</h1>
          <div className='grid sm:!grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-8 gap-y-10 mb-20'>
            {[...Array(10)].map((_, index) => (
              <Card key={index} launch={null} theme={theme} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage
