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

interface IRequest {
  id: string;
  user1: {
    id: string;
    name: string;
    avatarUrl: string | null;
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

interface IListAllRequestsByUserRequest {
  id: string;
}

interface IListAllRequestsByUserResponse extends AppResponse {
  data?: {
    requests: IRequest[];
  };
}

export type {
  IFriend,
  IRequest,
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
  IListAllRequestsByUserRequest,
  IListAllRequestsByUserResponse,
};
