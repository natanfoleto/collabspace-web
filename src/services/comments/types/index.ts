import { AppResponse } from "../../Api/types";

interface IUserComment {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface IComment {
  id: string;
  content: string;
  commentedAt: string;
  user: IUserComment;
  reactions: any[];
}

interface ICreateCommentRequest {
  postId: string;
  content: string;
}

interface ICreateCommentResponse extends AppResponse {
  data?: IComment;
}

interface IDeleteCommentRequest {
  commentId: string;
  postId: string;
}

type IDeleteCommentResponse = AppResponse;

export type {
  IComment,
  ICreateCommentRequest,
  ICreateCommentResponse,
  IDeleteCommentRequest,
  IDeleteCommentResponse,
};
