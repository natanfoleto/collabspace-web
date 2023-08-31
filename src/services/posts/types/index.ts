import { AppResponse } from "../../Api/types";

interface ICreatePostRequest {
  content: string;
  tags?: string;
  visibility?: 1 | 2 | 3;
}

interface ICreatePostResponse extends AppResponse {
  data?: {
    id: string;
    userId: string;
    tags: string | null;
    visibility: 1 | 2 | 3;
  };
}

export type { ICreatePostRequest, ICreatePostResponse };
