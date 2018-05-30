import { ViewChild, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../services/data.service';
import { Issue } from '../models/issue.model';
import {Comment} from '../models/comment.model';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  showCommentInput = false;
  choosenIssueID: number;
  newComment: Comment = {id: '', author: 'rockstarangular', body: '', avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: ''};
  newIssue: Issue = {id: '', number: 0, author: 'rockstarangular', title: '', body: '', commentsCount: 0, avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '', comments: []};
  showCreate = false;
  issues: Array<Issue>;
  comments: Array<Comment>;
  choosenIssue: string;
  name = '';
  id = '';

  constructor (private dataService: DataService, private route: ActivatedRoute) {
    route.queryParams.subscribe((params: any) => {
      this.name = params['name'];
      this.id = params['id'];
      this.getIssues();
    });
  }

  showCreated() {
    this.showCreate = true;
  }

  closeCreated() {
    this.showCreate = false;
  }

  createIssue() {
    if (this.newIssue.title !== '' && this.newIssue.body !== ''){
      const now = new Date();
      if (this.issues[0] !== undefined) {
        this.newIssue.number = this.issues[0].number + 1;
      }
      this.issues.unshift(this.newIssue);
      this.showCreate = false;
      this.newIssue.created = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
      console.log(this.newIssue);
      this.newIssue = new Issue();
      this.newIssue = {id: '', number: 0, author: 'rockstarangular', title: '', body: '', commentsCount: 0, avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '', comments: []};
    }
  }

  sendComment() {
    const now = new Date();
    console.log(this.newComment);
    if (this.newComment.body !== '') {
      this.newComment.created = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
      this.issues[this.choosenIssueID].commentsCount++;
      if (!this.issues[this.choosenIssueID].comments) { this.issues[this.choosenIssueID].comments = []; }
      this.issues[this.choosenIssueID].comments.push(this.newComment);
      this.comments = this.issues[this.choosenIssueID].comments;
      this.newComment = new Comment();
      this.newComment = {id: '', author: 'rockstarangular', body: '', avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: ''};
    }
  }

  getComments(i) {
    window.scrollTo(600, 150);
    this.showCommentInput = true;
    this.choosenIssueID = i;
    this.choosenIssue = this.issues[i].title;
    const savedComments = this.dataService.getComments(this.id, this.issues[i].number);
    if (!savedComments && this.issues[i].commentsCount !== 0) {
      this.dataService.showSpinner();
      this.dataService.fetchCommets('Automattic', this.name, this.issues[i].number).subscribe((data: any) => {
        console.log('fetched comments')
        this.issues[i].comments = this.parseComments(data);
        this.comments = this.issues[i].comments;
        this.dataService.setComments(this.id, String(this.issues[i].number), this.issues[i].comments);
        this.dataService.hideSpinner();
        console.log(this.issues[i].comments);
      });
    } else {
      this.issues[i].comments = savedComments;
      this.comments = this.issues[i].comments;
      console.log('find saved:', this.issues[i].comments);
    }
  }

  getIssues() {
    const savedIssues = this.dataService.getIssues(this.id);
    if (!savedIssues) {
      this.dataService.showSpinner();
      this.dataService.fetchIssue('Automattic', this.name).subscribe((data: any) => {
        console.log('fetched issues')
        console.log(data);
        this.issues = this.parseIssues(data);
        this.dataService.setIssues(this.id, this.issues);
        this.dataService.hideSpinner();
        console.log(this.issues);
      });
    } else {
      this.issues = savedIssues;
      console.log('find saved:', this.issues);
    }
  }

  parseIssues(data: any): Array<Issue> {
    const issues = data.map((a, i) => {
      if (i <= 100) {
        return {id: a.id, number: a.number, title: a.title, body: a.body, avatar: 'url(' + a.user.avatar_url + ')', commentsCount: a.comments, created: a.created_at, author: a.user.login};
      }
    });
    return issues;
  }

  parseComments(data: any): Array<Comment> {
    const issues = data.map((a, i) => {
      if (i <= 100) {
        return {id: a.id, body: a.body, avatar: 'url(' + a.user.avatar_url + ')',  created: a.created_at, author: a.user.login};
      }
    });
    return issues;
  }

  scroll(el) {
    el.scrollIntoView();
  }

}
