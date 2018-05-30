import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Repo } from '../models/repo.model';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  editable: Repo = new Repo;
  repos: Array<Repo> = [];
  showEdit = false;
  dataSource: MatTableDataSource<Repo>;
  displayedColumns = ['modify', 'name', 'description', 'language'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor (private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.getRepos();
  }

  goToRepo(repo) {
    console.log('go to: ' + repo.name);
    this.router.navigate(['/repos' ], {
      queryParams: {
        'id': repo.id,
         'name': repo.name }
    });
  }

  deleteRepo(repo) {
    event.stopPropagation();
    console.log(' delete:' + repo.id);
    this.repos = this.repos.filter((el) => el.id !== repo.id );
    console.log(this.repos.length);
    this.dataSource.data = this.repos;
    this.dataService.setRepos(this.repos);
  }

  saveEdit() {
    console.log('saving');
    this.repos.forEach((e, i, arr) => {
      if (e.id === this.editable.id) {
          arr[i] = {id: this.editable.id, name: this.editable.name,
            description: this.editable.description,
            owner: arr[i].owner,
            language: this.editable.language,
            issues: arr[i].issues };
      }
    });
    this.dataSource.data = this.repos;
    this.dataService.setRepos(this.repos);
    this.closeEdit();
  }

  closeEdit() {
    this.showEdit = false;
  }

  editRepo(repo) {
    event.stopPropagation();
    console.log(' edit:' + repo.id);
    this.showEdit = true;
    this.editable.id = repo.id;
    this.editable.name = repo.name;
    this.editable.description = repo.description;
    this.editable.language = repo.language;
  }

  applyFilter(filterValue: string) {

    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = (data: Repo, filter: string) => {
      const dataStr = data.language.toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) === 0;
    };
  }

  getRepos() {
    const savedRepos = this.dataService.getRepos();
      if (!savedRepos) {
        this.dataService.showSpinner();
        this.dataService.fetchRepos().subscribe((data: any) => {
          this.repos = this.parseRepos(data);
          console.log('fetched');
          this.initTable();
          this.dataService.setRepos(this.repos);
          this.dataService.hideSpinner();
        });
      } else {
        this.repos = savedRepos;
        this.initTable();
      }
  }

  parseRepos(data: any): Array<Repo> {
    const repos = data.map((a, i) => {
      if (i <= 100) {
        if (a.description === null) {
          a.description = 'No description for this repo';
        }
        if (a.language === null) {
          a.language = 'unknown';
        }
        return {id: a.id, name: a.name, description: a.description, language: a.language, owner: a.owner.login};
      }
    });
    return repos;
  }

  initTable() {
    this.dataSource = new MatTableDataSource(this.repos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
