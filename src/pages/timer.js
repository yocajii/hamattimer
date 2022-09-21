import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { IsStartedProvider } from '../components/providers/IsStartedProvider'
import { TrialsProvider } from '../components/providers/TrialsProvider'
import { useEffect, useState } from 'react'
import Display from '../components/Display'

export default function Timer() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (loaded) {
    return (
      <>
        <Head>
          <title>はまったいまー</title>
        </Head>
        <SessionProvider>
          <IsStartedProvider>
            <TrialsProvider>
              <Display/>
            </TrialsProvider>
          </IsStartedProvider>
        </SessionProvider>
      </>
    )
  } else {
    return (
      <></>
    )
  }
}
