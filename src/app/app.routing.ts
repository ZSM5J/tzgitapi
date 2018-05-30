import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { RepoComponent } from './repo/repo.component';
import { NotFoundComponent } from './notfound/notfound.component';



export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'issues/:id',
    component: IssueComponent,
  },
  {
    path: 'repos',
    component: RepoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
