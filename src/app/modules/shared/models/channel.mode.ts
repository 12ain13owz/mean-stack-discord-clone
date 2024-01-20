enum ChannelType {
  TEXT,
  AUDIO,
  VIDEO,
}

export interface Channel {
  id: string;
  name: string;
  type: ChannelType;

  profileId: string;
  serverId: string;

  createdAt: Date;
  updatedAt: Date;
}
