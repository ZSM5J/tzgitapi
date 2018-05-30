import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import {MatButtonModule, MatCardModule, MatGridListModule, MatSortModule, MatPaginatorModule, MatInputModule, MatIconModule, MatTableModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { RepoComponent } from './repo/repo.component';
import { NotFoundComponent } from './notfound/notfound.component';

import { DataService } from './services/data.service';
import { AppRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    RepoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    CdkTableModule,
    HttpClientModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
