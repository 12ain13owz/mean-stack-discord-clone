import { Channel } from './channel.mode';
import { Member } from './member.model';
import { Server } from './server.model';

export interface Profile {
  id: string;
  userId: string;
  name: string;
  imageUrl: string;
  email: string;

  servers: Server[];
  members: Member[];
  channels: Channel[];

  createdAt: Date;
  updatedAt: Date;
}
