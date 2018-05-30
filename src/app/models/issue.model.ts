import { Comment } from './comment.model';

export class Issue {
  id: string;
  number: number;
  created: string;
  author: string;
  avatar: string;
  title: string;
  body: string;
  commentsCount: number;
  comments: Array<Comment>;
}
