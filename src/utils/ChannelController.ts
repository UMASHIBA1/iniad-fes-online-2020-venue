import actionCable from "actioncable";
import { rootUrl } from "../constants/websocketParams";

const cable = actionCable.createConsumer(rootUrl);

export default class ChannelController<T1, T2> {
  private cable: actionCable.Cable;
  private channel: actionCable.Channel | null;
  constructor() {
    this.cable = cable;
    this.channel = null;
    this.connect = this.connect.bind(this);
    this.send = this.send.bind(this);
    this.disconnect = this.disconnect.bind(this);
  }

  public connect(
    roomChannel: {channel: string, room_id: string},
    onEvents: {
      onReceive?: (obj: T1) => void;
      onConnected?: () => void;
      onDisConnected?: () => void;
    }
  ) {
    this.channel = this.cable.subscriptions.create(roomChannel, {
      connected: () => {
        console.log("connect websocket", "channel", this.channel);
        onEvents.onConnected && onEvents.onConnected();
      },
      disconnected: () => {
        console.log("disconnect websocket", "channel", this.channel);
        onEvents.onDisConnected && onEvents.onDisConnected();
      },
      received: (res: T1) => {
        console.log("receive websocket", "channel", this.channel);
        onEvents.onReceive && onEvents.onReceive(res);
      }
    });
  }

  public send(data: T2) {
    console.log("channel", this.channel);
    if (this.channel !== null) {
      this.channel.perform("speak", data);
    }
  }

  public disconnect() {
    this.channel?.unsubscribe();
  }
}
