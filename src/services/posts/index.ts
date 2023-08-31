import api from "../Api/api";

import { ICreatePostRequest, ICreatePostResponse } from "./types";

const createPost = async ({
  content,
  tags,
  visibility,
}: ICreatePostRequest): Promise<ICreatePostResponse> => {
  const response = await api
    .post("/posts", {
      content,
      tags,
      visibility,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

export { createPost };
