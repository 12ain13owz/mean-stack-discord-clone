import { Profile } from '@prisma/client';
import { db } from '../utils/db';

const ProfileModel = db.profile;

export function getProfile(id: string) {
  return ProfileModel.findUnique({
    where: {
      userId: id,
    },
  });
}

export function newProfile(profile: Profile) {
  return ProfileModel.create({
    data: {
      userId: profile.id,
      name: profile.name,
      imageUrl: profile.imageUrl,
      email: profile.email,
    },
  });
}
