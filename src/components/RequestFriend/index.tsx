import { Check, X } from "phosphor-react";

import AvatarCircle from "../AvatarCircle";

import {
  Container,
  User,
  Info,
  Actions,
  ButtonAccept,
  ButtonRecuse,
} from "./styles";
import { useAuthentication } from "../../contexts/Authentication";

interface RequestFriendProps {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userAvatarUrl: string | null;
}

const RequestFriend: React.FC<RequestFriendProps> = ({
  userId,
  userName,
  userEmail,
  userAvatarUrl,
}) => {
  const { me } = useAuthentication();

  return (
    <Container>
      <User>
        <AvatarCircle avatar={userAvatarUrl} onClick={() => me(userId)} />

        <Info onClick={() => me(userId)}>
          <h1>{userName}</h1>
          <p>{userEmail}</p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept>
          <Check size={18} />
        </ButtonAccept>

        <ButtonRecuse>
          <X size={18} />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
