import { Issue } from './issue.model';

export class Repo {
  id: string;
  name: string;
  description: string;
  language: string;
  owner: string;
  issues: Array<Issue>;
}
