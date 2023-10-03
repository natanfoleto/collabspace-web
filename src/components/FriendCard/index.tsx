import AvatarSquare from "../AvatarSquare";

import { Container, Info } from "./styles";

interface FriendCardProps {
  name: string;
  avatarUrl: string;
}

const FriendCard: React.FC<FriendCardProps> = ({ name, avatarUrl }) => {
  return (
    <Container>
      <AvatarSquare size="72px" avatar={avatarUrl} />

      <Info>
        <h1>{name}</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
