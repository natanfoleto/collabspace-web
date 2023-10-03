import api from "../Api/api";

import {
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
  IListAllRequestsByUserRequest,
  IListAllRequestsByUserResponse,
} from "./types";

const listAllFriendsByUser = async ({
  id,
}: IListAllFriendsByUserRequest): Promise<IListAllFriendsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllFriends/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const listAllRequestsByUser = async ({
  id,
}: IListAllRequestsByUserRequest): Promise<IListAllRequestsByUserResponse> => {
  const response = await api
    .get(`/friends/listAllRequests/${id}`)
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { listAllFriendsByUser, listAllRequestsByUser };
