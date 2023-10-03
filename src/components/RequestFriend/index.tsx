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
  name: string;
  email: string;
  avatarUrl: string | null;
}

const RequestFriend: React.FC<RequestFriendProps> = ({
  id,
  name,
  email,
  avatarUrl,
}) => {
  const { me } = useAuthentication();

  return (
    <Container>
      <User>
        <AvatarCircle avatar={avatarUrl} onClick={() => me(id)} />

        <Info onClick={() => me(id)}>
          <h1>{name}</h1>
          <p>{email}</p>
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
