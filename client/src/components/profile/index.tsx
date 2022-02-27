import { IUser } from "@/src/constants";
import { Container, ProfileImage } from "./styles";

interface Props {
	handle: string;
	rank: number;
	profileImageUrl: string;
	maxStreak: number;
}

const Profile = ({ handle, rank, profileImageUrl, maxStreak }: Props) => {
	return (
		<Container>
			<ProfileImage src={profileImageUrl} />
			<p>{handle}</p>
			<p>{rank}</p>
			<p>{maxStreak}</p>
		</Container>
	);
};

export default Profile;

// Profile.defaultProps = {
//   profileImageUrl: "https://static.solved.ac/uploads/profile/maxcha98-picture-1640578463397.png",
//   rank: 12579,
//   handle: "maxcha98",
// };
