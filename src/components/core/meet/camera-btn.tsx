import { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { VideoClient } from '@zoom/videosdk'
import { Video, VideoOff } from 'lucide-react'

export const CameraButton = (props: {
  client: MutableRefObject<typeof VideoClient>
  isVideoMuted: boolean
  setIsVideoMuted: Dispatch<SetStateAction<boolean>>
  renderVideo: (event: {
    action: 'Start' | 'Stop'
    userId: number
  }) => Promise<void>
}) => {
  const { client, isVideoMuted, setIsVideoMuted, renderVideo } = props

  const onCameraClick = async () => {
    const mediaStream = client.current.getMediaStream()
    if (isVideoMuted) {
      await mediaStream.startVideo()
      setIsVideoMuted(false)
      await renderVideo({
        action: 'Start',
        userId: client.current.getCurrentUserInfo().userId,
      })
    } else {
      await mediaStream.stopVideo()
      setIsVideoMuted(true)
      await renderVideo({
        action: 'Stop',
        userId: client.current.getCurrentUserInfo().userId,
      })
    }
  }

  return (
    <button onClick={onCameraClick} title='camera'>
      {isVideoMuted ? <VideoOff /> : <Video />}
    </button>
  )
}
