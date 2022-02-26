import { IUser } from "@/src/constants";
import { Container, ProfileImage } from "./styles";

interface Props {
  handle: string;
  rank: number;
  profileImageUrl: string;
}

const Profile = ({ handle, rank, profileImageUrl }: Props) => {
  return (
    <Container>
      <ProfileImage src={profileImageUrl} />
      <p>{handle}</p>
      <p>{rank}</p>
    </Container>
  );
};

export default Profile;

// Profile.defaultProps = {
//   profileImageUrl: "https://static.solved.ac/uploads/profile/maxcha98-picture-1640578463397.png",
//   rank: 12579,
//   handle: "maxcha98",
// };
