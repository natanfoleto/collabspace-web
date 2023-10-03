import { useState, useEffect, useCallback, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import { IUser } from "../../services/users/types";
import { listUserById, updateAvatar, updateCover } from "../../services/users";
import { IFriend, IRequest } from "../../services/friends/types";
import {
  listAllFriendsByUser,
  listAllRequestsByUser,
} from "../../services/friends";

import LayoutDefault from "../../layouts/Default";

import AvatarCircle from "../../components/AvatarCircle";
import RequestFriend from "../../components/RequestFriend";
import FriendCard from "../../components/FriendCard";
import Modal from "../../components/Modal";

import { useAuthentication } from "../../contexts/Authentication";

import {
  Camera,
  PencilSimple,
  MapPin,
  Phone,
  Clock,
  UserCirclePlus,
  UserCircleMinus,
} from "phosphor-react";

import {
  Container,
  Content,
  Overview,
  UserBanner,
  Cover,
  EditCoverButton,
  UserInfo,
  EditInfoButton,
  General,
  Total,
  FriendshipArea,
  FriendshipButton,
  Contact,
  Friends,
  FriendList,
  AreaFriendButton,
  Sidebar,
  Requests,
  RequestList,
  FormEdit,
  InputEdit,
  ButtonEdit,
  PreviewAvatar,
} from "./styles";

moment.defineLocale("pt-br", {
  weekdays: "Segunda_Terça_Quarta_Quinta_Sexta_Sábado_Domingo".split("_"),
  months:
    "Janeiro_Fereveiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_",
    ),
});

const Profile: React.FC = () => {
  const { id } = useParams();

  const {
    user: userLogged,
    handleAvatarUrl,
    handleCoverUrl,
    signOut,
  } = useAuthentication();

  const [user, setUser] = useState<IUser | null>(null);
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [requests, setRequests] = useState<IRequest[]>([]);

  const [modalEditAvatar, setModalEditAvatar] = useState(false);
  const [modalEditCover, setModalEditCover] = useState(false);
  const [modalPreviewAvatar, setModalPreviewAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleListUserById = useCallback(async () => {
    try {
      if (id) {
        const { result, message, data } = await listUserById({ id });

        if (result === "success") {
          if (data) setUser(data.user);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleListAllFriendsByUser = useCallback(async () => {
    try {
      if (id) {
        const { result, data, message } = await listAllFriendsByUser({ id });

        if (result === "success") {
          if (data?.friends) setFriends(data.friends);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleListAllRequestsByUser = useCallback(async () => {
    try {
      if (id) {
        const { result, data, message } = await listAllRequestsByUser({ id });

        if (result === "success") {
          if (data?.requests) setRequests(data.requests);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleUpdateAvatar = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await updateAvatar({ avatarUrl });

        if (result === "success") {
          handleAvatarUrl(avatarUrl);
          toast.success(message);
          setModalEditAvatar(!modalEditAvatar);
        }

        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [avatarUrl, handleAvatarUrl, modalEditAvatar],
  );

  const handleUpdateCover = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await updateCover({ coverUrl });

        if (result === "success") {
          handleCoverUrl(coverUrl);
          toast.success(message);
          setModalEditCover(!modalEditCover);
        }

        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [coverUrl, handleCoverUrl, modalEditCover],
  );

  function toggleModalEditAvatar() {
    setModalEditAvatar(!modalEditAvatar);
  }

  function toggleModalEditCover() {
    setModalEditCover(!modalEditCover);
  }

  function toggleModalPreviewAvatar() {
    if (user?.avatarUrl) setModalPreviewAvatar(!modalPreviewAvatar);
    else setModalPreviewAvatar(false);
  }

  useEffect(() => {
    handleListUserById();
    handleListAllFriendsByUser();
    handleListAllRequestsByUser();
  }, [
    id,
    handleListUserById,
    handleListAllFriendsByUser,
    handleListAllRequestsByUser,
  ]);

  const isOwner = id === userLogged?.id;
  const isFriend = true;

  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              {isOwner && (
                <EditCoverButton onClick={toggleModalEditCover}>
                  <Camera size={22} weight="fill" />
                </EditCoverButton>
              )}

              <Cover
                src={
                  coverUrl ||
                  user?.coverUrl ||
                  "https://i.imgur.com/gH2QLjf.png"
                }
              />

              <div>
                <AvatarCircle
                  size="192px"
                  avatar={avatarUrl || user?.avatarUrl}
                  onClick={
                    isOwner ? toggleModalEditAvatar : toggleModalPreviewAvatar
                  }
                />
              </div>

              {isOwner && (
                <EditInfoButton>
                  <PencilSimple size={22} weight="bold" />
                </EditInfoButton>
              )}
            </UserBanner>

            <UserInfo>
              <General>
                <h1>{user?.name}</h1>
                <p>{user?.bio}</p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>

                {!isOwner && (
                  <FriendshipArea>
                    <FriendshipButton>
                      {isFriend ? (
                        <UserCirclePlus size={20} weight="fill" />
                      ) : (
                        <UserCircleMinus size={20} weight="fill" />
                      )}

                      {isFriend ? "Adicionar amigo" : "Cancelar solicitação"}
                    </FriendshipButton>
                  </FriendshipArea>
                )}
              </General>

              <Contact>
                <span>
                  <MapPin size={20} weight="bold" />
                  Jaborandi, São Paulo, Brasil
                </span>

                {user?.telephone && (
                  <span>
                    <Phone size={20} weight="bold" />
                    {user.telephone}
                  </span>
                )}

                <span>
                  <Clock size={20} weight="bold" />
                  {moment(user?.createdAt).format("[Entrou em] MMMM [de] YYYY")}
                </span>
              </Contact>
            </UserInfo>
          </Overview>

          <Friends>
            <h1>Amigos</h1>

            <FriendList>
              {friends.map((friend) => (
                <FriendCard
                  key={friend.id}
                  id={friend.user2.id}
                  name={friend.user2.name}
                  avatarUrl={friend.user2.avatarUrl}
                />
              ))}
            </FriendList>

            <AreaFriendButton>
              <button>Ver todos os amigos</button>
            </AreaFriendButton>
          </Friends>
        </Content>

        <Sidebar>
          {isOwner && (
            <Requests>
              <h1>Solicitações de amizade</h1>

              <RequestList>
                {requests.map((request) => (
                  <RequestFriend
                    key={request.id}
                    id={request.user1.id}
                    name={request.user1.name}
                    email={request.user1.name}
                    avatarUrl={request.user1.avatarUrl}
                  />
                ))}
              </RequestList>
            </Requests>
          )}

          <a style={{ color: "white" }} onClick={signOut}>
            Sair
          </a>
        </Sidebar>

        <Modal
          width="75%"
          height="120px"
          isOpen={modalEditAvatar}
          onClose={toggleModalEditAvatar}
        >
          <FormEdit onSubmit={handleUpdateAvatar}>
            <InputEdit
              name="avatarUrl"
              type="text"
              value={avatarUrl}
              onChange={(e) => {
                setAvatarUrl(e.target.value);
              }}
              placeholder="URL da imagem"
            />
            <ButtonEdit>SALVAR</ButtonEdit>
          </FormEdit>
        </Modal>

        <Modal
          width="75%"
          height="120px"
          isOpen={modalEditCover}
          onClose={toggleModalEditCover}
        >
          <FormEdit onSubmit={handleUpdateCover}>
            <InputEdit
              name="coverUrl"
              type="text"
              value={coverUrl}
              onChange={(e) => {
                setCoverUrl(e.target.value);
              }}
              placeholder="URL do cover"
            />
            <ButtonEdit>SALVAR</ButtonEdit>
          </FormEdit>
        </Modal>

        <Modal
          width="90%"
          isOpen={modalPreviewAvatar}
          onClose={toggleModalPreviewAvatar}
        >
          <PreviewAvatar
            src={user?.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"}
          />
        </Modal>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
