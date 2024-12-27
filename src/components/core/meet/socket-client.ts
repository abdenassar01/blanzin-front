import { Client, IMessage } from '@stomp/stompjs'

class SocketClient {
  private url: string
  private client: Client

  constructor(url: string) {
    this.url = url
    this.client = new Client()

    this.client.configure({
      brokerURL: url,

      onConnect: () => {
        console.log('connected!')
      },
    })

    this.client.activate()
  }

  publish = ({ destination, body }: any) => {
    this.client.publish({
      destination: destination,
      body: JSON.stringify(body),
    })
  }

  deactivate = () => {
    this.client.deactivate()
  }

  subscribe = (
    topic: string,
    callback: (arg0: IMessage) => void,
    ...forMessageTypes: any[]
  ) => {
    return this.client.subscribe(topic, message => {
      if (
        !forMessageTypes ||
        forMessageTypes.includes(JSON.parse(message.body).messageType)
      ) {
        callback(message)
      }
    })
  }

  awaitConnect = async (awaitConnectConfig: any) => {
    const {
      retries = 3,
      curr = 0,
      timeinterval = 100,
    } = awaitConnectConfig || {}
    return new Promise((resolve, reject) => {
      console.log(timeinterval)
      setTimeout(() => {
        if (this.connected) {
          resolve({})
        } else {
          console.log('failed to connect! retrying')
          if (curr >= retries) {
            console.log('failed to connect within the specified time interval')
            reject()
          }
          this.awaitConnect({ ...awaitConnectConfig, curr: curr + 1 })
        }
      }, timeinterval)
    })
  }

  get connected() {
    return this.client.connected
  }
}

export default SocketClient
