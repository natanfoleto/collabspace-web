import { AppResponse } from "../../Api/types";

interface IFriend {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  user2: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  createdAt: string;
}

interface IListAllFriendsByUserRequest {
  id: string;
}

interface IListAllFriendsByUserResponse extends AppResponse {
  data?: {
    friends: IFriend[];
  };
}

export type {
  IFriend,
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
};
