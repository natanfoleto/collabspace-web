import AvatarCircle from "../AvatarCircle";

import { IReaction } from "../../services/reactions/types";

import {
  Container,
  Title,
  Navbar,
  Reactions,
  Reaction,
  AuthorInfo,
} from "./styles";

interface ReactionListProps {
  data: IReaction[];
}

const ReactionList: React.FC<ReactionListProps> = ({ data }) => {
  return (
    <Container>
      <Title>Reações</Title>

      <Navbar>Todas {data.length}</Navbar>

      <Reactions>
        {data.length ? (
          data.map((reaction) => (
            <Reaction key={reaction.id}>
              <AvatarCircle
                size="56px"
                src={
                  reaction.user.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"
                }
              />

              <AuthorInfo>
                <h1>{reaction.user.name}</h1>
                <p>{reaction.user.email}</p>
              </AuthorInfo>
            </Reaction>
          ))
        ) : (
          <span>Ninguém reagiu a isto!</span>
        )}
      </Reactions>
    </Container>
  );
};

export default ReactionList;
