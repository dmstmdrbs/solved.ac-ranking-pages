export interface IOrganization {
  organizationId: number;
  name: string;
  type: string;
  rating: number;
  userCount: number;
  voteCount: number;
  solvedCount: number;
  color: string;
}
export interface IBadge {
  badgeId: string;
  badgeImageUrl: string;
  unlockedUserCount: number;
  displayName: string;
  displayDescription: string;
}
export interface IBackground {
  backgroundId: string;
  backgroundImageUrl: string;
  author: string;
  authorUrl: string;
  unlockedUserCount: number;
  displayName: string;
  displayDescription: string;
}

export interface IUser {
  handle: string;
  bio: string;
  organizations: IOrganization[];
  badge: IBadge;
  background: IBackground;
  profileImageUrl: string;
  solvedCount: number;
  voteCount: number;
  class: number;
  classDecoration: string;
  tier: number;
  rating: number;
  ratingByProblemsSum: number;
  ratingByClass: number;
  ratingBySolvedCount: number;
  ratingByVoteCount: number;
  exp: number;
  rivalCount: number;
  reverseRivalCount: number;
  maxStreak: number;
  rank: number;
}
