import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../models/repo.model';
import { Issue } from '../models/issue.model';
import { Comment } from '../models/comment.model';

@Injectable()
export class DataService {
  repos: Array<Repo>;
  spinner = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();


  showSpinner() {
    this.spinner = true;
    this.change.emit(this.spinner);
  }

  hideSpinner() {
    this.spinner = false;
    this.change.emit(this.spinner);
  }

  constructor(private http: HttpClient) {

  }

  setRepos(repos: Array<Repo>) {
    this.repos = repos;
  }

  getRepos() {
    return this.repos;
  }

  getIssues(repoID: string) {
    let issues: Array<Issue>;
    if (this.repos) {
      this.repos.map((e) => {
        if (String(e.id) === String(repoID)) {
          issues = e.issues;
        }
      });
    }
    return issues;
  }

  setIssues(repoID: string, issues: Array<Issue>) {
    if (this.repos) {
      this.repos.forEach((e, i, arr) => {
        if (String(e.id) === String(repoID)) {
          this.repos[i].issues = issues;
        }
      });
    }
  }

  addNewIssue(repoID: string, issue: Issue) {
    if (this.repos) {
      this.repos.forEach((e, i, arr) => {
        if (String(e.id) === String(repoID)) {
          this.repos[i].issues.unshift(issue);
        }
      });
    }
  }

  getComments(repoID: string, issueID: number) {
    let comments: Array<Comment>;
    if (this.repos) {
      this.repos.map((e) => {
        if (String(e.id) === String(repoID)) {
          e.issues.map((issue) => {
            if (String(issue.number) === String(issueID)) {
              comments = issue.comments;
            }
          });
        }
      });
    }
    return comments;
  }

  setComments(repoID: string, issueID: string, comments: Array<Comment>) {
    if (this.repos) {
      this.repos.map((e, i) => {
        if (String(e.id) === String(repoID)) {
          e.issues.map((issue, j) => {
            if (String(issue.number) === String(issueID)) {
              this.repos[i].issues[j].comments = comments;
            }
          });
        }
      });
    }
  }


  fetchRepos() {
    return this.http.get('https://api.github.com/users/Automattic/repos?per_page=100');
  }

  fetchIssue(owner, repo) {
    return this.http.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues?per_page=100');
  }

  fetchCommets(owner, repo, number) {
    return this.http.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/comments?per_page=100');
  }




}
