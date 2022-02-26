import { Container, ProfileImage } from "./styles";
interface Props {
  profileImageUrl: string;
  rank: number;
  handle: string;
}
interface ArrayProps {
  dd: Props[];
}
const Profile = ({ profileImageUrl, rank, handle }: Props) => {
  return (
    <Container>
      <ProfileImage src={profileImageUrl} />
      <p>{handle}</p>
      <p>{rank}</p>
    </Container>
  );
};

export default Profile;
Profile.defaultProps = {
  profileImageUrl: "https://static.solved.ac/uploads/profile/maxcha98-picture-1640578463397.png",
  rank: 12579,
  handle: "maxcha98",
};
