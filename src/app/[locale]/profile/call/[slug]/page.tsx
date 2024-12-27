'use client'

import {
  Call,
  CallControls,
  StreamCall,
  StreamTheme,
  StreamVideo,
  SpeakerLayout,
  StreamVideoClient,
} from '@stream-io/video-react-sdk'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import './style.css'

import { useEffect, useState } from 'react'

const user_id = 'user-' + Math.random().toString(16).substring(2)
const user = { id: user_id }

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY || 'mmhfdzb5evj2'

const tokenProvider = async () => {
  const { token } = await fetch(
    'https://pronto.getstream.io/api/auth/create-token?' +
      new URLSearchParams({
        api_key: apiKey,
        user_id: user_id,
      }),
  ).then(res => res.json())
  return token as string
}

export default function App({ params }: { params: Promise<{ slug: string }> }) {
  const [client, setClient] = useState<StreamVideoClient>()
  const [call, setCall] = useState<Call>()
  const callId = 'csb-' + params.then(value => value)

  useEffect(() => {
    const myClient = new StreamVideoClient({ apiKey, user, tokenProvider })
    setClient(myClient)
    return () => {
      myClient.disconnectUser()
      setClient(undefined)
    }
  }, [])

  useEffect(() => {
    if (!client) return
    const myCall = client.call('default', callId)
    myCall.join({ create: true }).catch(err => {
      console.error(`Failed to join the call`, err)
    })

    setCall(myCall)

    return () => {
      setCall(undefined)
      myCall.leave().catch(err => {
        console.error(`Failed to leave the call`, err)
      })
    }
  }, [client])

  if (!client || !call) return null

  return (
    <StreamVideo client={client}>
      <StreamTheme className='my-theme-overrides'>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  )
}
