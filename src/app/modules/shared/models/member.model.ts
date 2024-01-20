enum MemberRole {
  ADMIN,
  MODERATOR,
  GUEST,
}

export interface Member {
  id: string;
  role: MemberRole;

  profileId: string;
  serverId: string;

  createdAt: Date;
  updatedAt: Date;
}
