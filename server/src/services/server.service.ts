import { Server } from '@prisma/client';
import { db } from '../utils/db';

const ServerModel = db.server;

export function getServer(profileId: string) {
  return ServerModel.findFirst({
    where: {
      members: {
        some: {
          profileId: profileId,
        },
      },
    },
  });
}
