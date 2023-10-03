import api from "../Api/api";

import {
  IListAllFriendsByUserRequest,
  IListAllFriendsByUserResponse,
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

export { listAllFriendsByUser };
