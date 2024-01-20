import { FormControl } from '@angular/forms';
import { Channel } from './channel.mode';
import { Member } from './member.model';

export interface ServerResponse {
  id: string;
  name: string;
  imaageUrl: string;
  invaiteCode: string;

  profileId: string;

  members: Member[];
  channels: Channel[];

  createdAt: Date;
  updatedAt: Date;
}

export interface ServerForm {
  name: FormControl<string>;
  image: FormControl<any>;
}

export interface ServerInput {
  name: string;
  image: string;
}
