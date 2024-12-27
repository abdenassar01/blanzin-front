import {
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
} from 'react'
import type { VideoClient } from '@zoom/videosdk'
import { Mic, MicOff, Video, VideoOff } from 'lucide-react'

export const MicButton = (props: {
  client: MutableRefObject<typeof VideoClient>
  isAudioMuted: boolean
  setIsAudioMuted: Dispatch<SetStateAction<boolean>>
}) => {
  const { client, isAudioMuted, setIsAudioMuted } = props
  const onMicrophoneClick = async () => {
    const mediaStream = client.current.getMediaStream()
    isAudioMuted
      ? await mediaStream?.unmuteAudio()
      : await mediaStream?.muteAudio()
    setIsAudioMuted(client.current.getCurrentUserInfo().muted ?? true)
  }
  return (
    <button onClick={onMicrophoneClick} title='microphone'>
      {isAudioMuted ? <MicOff /> : <Mic />}
    </button>
  )
}
