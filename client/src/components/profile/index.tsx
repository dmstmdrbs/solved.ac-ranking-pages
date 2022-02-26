import { useQuery } from "react-query";
import { fetchUserProfile } from "../../api";
interface IOrganization {
	organizationId: number;
	name: string;
	type: string;
	rating: number;
	userCount: number;
	voteCount: number;
	solvedCount: number;
	color: string;
}
interface IBadge {
	badgeId: string;
	badgeImageUrl: string;
	unlockedUserCount: number;
	displayName: string;
	displayDescription: string;
}
interface IBackground {
	backgroundId: string;
	backgroundImageUrl: string;
	author: string;
	authorUrl: string;
	unlockedUserCount: number;
	displayName: string;
	displayDescription: string;
}

interface IUser {
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
const userId = "dmstmdrbs";

const Profile = () => {
	const { isLoading: userDataLoading, data: userData } = useQuery<IUser>(
		["user-data", userId],
		() => fetchUserProfile(userId)
	);

	const loading = userDataLoading;

	console.log(userData);

	if (loading)
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	else return <div>유저 이름 : {userData?.handle}</div>;
};

export default Profile;
