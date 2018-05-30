webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\r\n  width: 70%;\r\n  padding: 0;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n}\r\n\r\nhtml {\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 30px;\r\n  text-align: center;\r\n  background-color: #56a0d3;\r\n  margin-bot: 50px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\nmat-icon {\r\n  font-size: 55px;\r\n}\r\n\r\n.wrap {\r\n  position: fixed;\r\n  left: 0;\r\n  padding-top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  font-size: 50px;\r\n  text-align: center;\r\n  background-color: #56a0d3;\r\n  opacity: 0.7;\r\n  z-index: 999;\r\n}\r\n\r\n.spinner {\r\n  margin: 300px auto;\r\n  width: 40px;\r\n  height: 40px;\r\n  position: relative;\r\n}\r\n\r\n.cube1, .cube2 {\r\n  background-color: white;\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\r\n  animation: sk-cubemove 1.8s infinite ease-in-out;\r\n}\r\n\r\n.cube2 {\r\n  -webkit-animation-delay: -0.9s;\r\n  animation-delay: -0.9s;\r\n}\r\n\r\n@-webkit-keyframes sk-cubemove {\r\n  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\r\n  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\r\n  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\r\n  100% { -webkit-transform: rotate(-360deg) }\r\n}\r\n\r\n@keyframes sk-cubemove {\r\n  25% {\r\n    transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\r\n  } 50% {\r\n      transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n      -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\r\n    } 50.1% {\r\n        transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\r\n      } 75% {\r\n          transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n          -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\r\n        } 100% {\r\n            transform: rotate(-360deg);\r\n            -webkit-transform: rotate(-360deg);\r\n          }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"wrap\" *ngIf=\"show\">\n  <div class=\"spinner\" >\n    <div class=\"cube1\"></div>\n    <div class=\"cube2\"></div>\n  </div>\n</div>\n<div class=\"header\">\n  <a routerLink=\"/\" mat-icon-button  color=\"primary\"> <mat-icon aria-label=\"edit this repo\">home</mat-icon></a>\n</div>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.show = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.change.subscribe(function (show) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, show];
                    case 1:
                        _a.show = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__issue_issue_component__ = __webpack_require__("./src/app/issue/issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__repo_repo_component__ = __webpack_require__("./src/app/repo/repo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__issue_issue_component__["a" /* IssueComponent */],
                __WEBPACK_IMPORTED_MODULE_11__repo_repo_component__["a" /* RepoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__notfound_notfound_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["b" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_table__["q" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["c" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatGridListModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__issue_issue_component__ = __webpack_require__("./src/app/issue/issue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repo_repo_component__ = __webpack_require__("./src/app/repo/repo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");




var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'issues/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__issue_issue_component__["a" /* IssueComponent */],
    },
    {
        path: 'repos',
        component: __WEBPACK_IMPORTED_MODULE_2__repo_repo_component__["a" /* RepoComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__notfound_notfound_component__["a" /* NotFoundComponent */]
    }
];


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form-field {\r\n  width: 200px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.url:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter by language\">\n</mat-form-field>\n\n<br/>\n\n<div class=\"edit\" *ngIf=\"showEdit\" (click)=\"closeEdit()\">\n  <div class=\"container\" (click)=\"$event.stopPropagation()\">\n    <mat-form-field>\n      <input matInput placeholder=\"repo name\" [(ngModel)]=\"editable.name\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea rows=\"8\" cols=\"30\" matInput placeholder=\"description\" [(ngModel)]=\"editable.description\"></textarea>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"language\" [(ngModel)]=\"editable.language\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"saveEdit()\">save</button>\n    <button mat-raised-button color=\"primary\" (click)=\"closeEdit()\">cancel</button>\n  </div>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" matSort >\n\n  <ng-container matColumnDef=\"modify\">\n    <th mat-header-cell *matHeaderCellDef>\n      modify\n    </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <div class=\"wrapicons\">\n      <button mat-icon-button (click)=\"deleteRepo(element)\" color=\"primary\"> <mat-icon aria-label=\"delete this repo\">delete</mat-icon></button>\n      <button mat-icon-button (click)=\"editRepo(element)\" color=\"primary\"> <mat-icon aria-label=\"edit this repo\">edit</mat-icon></button>\n      </div>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\" >\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> name </th>\n    <td mat-cell *matCellDef=\"let element;let i = index\"  id=\"td\">\n    {{element.name}} </td>\n  </ng-container>\n\n   <ng-container matColumnDef=\"description\" >\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> description </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"language\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> language </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.language}}  </td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"url\" (click)=\"goToRepo(row)\"></tr>\n\n</table>\n\n<mat-paginator [length]=\"resultsLength\" [pageSize]=\"20\"></mat-paginator>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_repo_model__ = __webpack_require__("./src/app/models/repo.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.editable = new __WEBPACK_IMPORTED_MODULE_3__models_repo_model__["a" /* Repo */];
        this.repos = [];
        this.showEdit = false;
        this.displayedColumns = ['modify', 'name', 'description', 'language'];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getRepos();
    };
    HomeComponent.prototype.goToRepo = function (repo) {
        console.log('go to: ' + repo.name);
        this.router.navigate(['/repos'], {
            queryParams: {
                'id': repo.id,
                'name': repo.name
            }
        });
    };
    HomeComponent.prototype.deleteRepo = function (repo) {
        event.stopPropagation();
        console.log(' delete:' + repo.id);
        this.repos = this.repos.filter(function (el) { return el.id !== repo.id; });
        console.log(this.repos.length);
        this.dataSource.data = this.repos;
        this.dataService.setRepos(this.repos);
    };
    HomeComponent.prototype.saveEdit = function () {
        var _this = this;
        console.log('saving');
        this.repos.forEach(function (e, i, arr) {
            if (e.id === _this.editable.id) {
                arr[i] = { id: _this.editable.id, name: _this.editable.name,
                    description: _this.editable.description,
                    owner: arr[i].owner,
                    language: _this.editable.language,
                    issues: arr[i].issues };
            }
        });
        this.dataSource.data = this.repos;
        this.dataService.setRepos(this.repos);
        this.closeEdit();
    };
    HomeComponent.prototype.closeEdit = function () {
        this.showEdit = false;
    };
    HomeComponent.prototype.editRepo = function (repo) {
        event.stopPropagation();
        console.log(' edit:' + repo.id);
        this.showEdit = true;
        this.editable.id = repo.id;
        this.editable.name = repo.name;
        this.editable.description = repo.description;
        this.editable.language = repo.language;
    };
    HomeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue;
        this.dataSource.filterPredicate = function (data, filter) {
            var dataStr = data.language.toLowerCase();
            var transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) === 0;
        };
    };
    HomeComponent.prototype.getRepos = function () {
        var _this = this;
        var savedRepos = this.dataService.getRepos();
        if (!savedRepos) {
            this.dataService.showSpinner();
            this.dataService.fetchRepos().subscribe(function (data) {
                _this.repos = _this.parseRepos(data);
                console.log('fetched');
                _this.initTable();
                _this.dataService.setRepos(_this.repos);
                _this.dataService.hideSpinner();
            });
        }
        else {
            this.repos = savedRepos;
            this.initTable();
        }
    };
    HomeComponent.prototype.parseRepos = function (data) {
        var repos = data.map(function (a, i) {
            if (i <= 100) {
                if (a.description === null) {
                    a.description = 'No description for this repo';
                }
                if (a.language === null) {
                    a.language = 'unknown';
                }
                return { id: a.id, name: a.name, description: a.description, language: a.language, owner: a.owner.login };
            }
        });
        return repos;
    };
    HomeComponent.prototype.initTable = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatTableDataSource */](this.repos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatPaginator */])
    ], HomeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSort */])
    ], HomeComponent.prototype, "sort", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/issue/issue.component.html":
/***/ (function(module, exports) {

module.exports = "issue\n\n"

/***/ }),

/***/ "./src/app/issue/issue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IssueComponent = /** @class */ (function () {
    function IssueComponent() {
    }
    IssueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issue',
            template: __webpack_require__("./src/app/issue/issue.component.html"),
            styles: [__webpack_require__("./src/app/issue/issue.component.css")]
        })
    ], IssueComponent);
    return IssueComponent;
}());



/***/ }),

/***/ "./src/app/models/comment.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/models/issue.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Issue; });
var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());



/***/ }),

/***/ "./src/app/models/repo.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repo; });
var Repo = /** @class */ (function () {
    function Repo() {
    }
    return Repo;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "page is not found.\n\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__("./src/app/notfound/notfound.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/repo/repo.component.css":
/***/ (function(module, exports) {

module.exports = ".repotitle{\r\n  width: 100%;\r\n  margin: 0;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.issuesblock, .commentsblock {\r\n  width: 50%;\r\n  margin: 0;\r\n  padding-left: 30px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.issuesblock {\r\n  float: left;\r\n}\r\n\r\n.commentsblock {\r\n  float: right;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n\r\np {\r\n  word-wrap: break-word;\r\n}\r\n\r\n.title {\r\n  font-weight: bold;\r\n}\r\n\r\n.comment-text {\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment {\r\n  width: 90%;\r\n  padding: 10px;\r\n  margin-top: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/repo/repo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"repotitle\">\n{{name}}'s issues:\n</div>\n<div class=\"issuesblock\">\n  <button mat-button color=\"primary\" (click)=\"showCreated()\"><mat-icon aria-label=\"delete this repo\">add_circle</mat-icon> new issue </button>\n    <mat-card class=\"issue-card\" *ngFor=\"let issue of issues; let i = index\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\" [ngStyle]=\"{'background-image': issue.avatar}\"></div>\n        <mat-card-title>{{issue.author}}</mat-card-title>\n        <mat-card-subtitle>{{issue.created | slice:0:10}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p class=\"title\">\n          {{issue.title}}\n        </p>\n        <p>\n        {{issue.body}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button color=\"primary\" (click)=\"getComments(i)\"><mat-icon aria-label=\"delete this repo\">comment</mat-icon> {{issue.commentsCount}}</button>\n        <button mat-button color=\"primary\" (click)=\"getComments(i)\">write comment</button>\n      </mat-card-actions>\n    </mat-card>\n</div>\n<div class=\"commentsblock\">\n  <p class=\"title\">{{choosenIssue}}</p>\n  <mat-card class=\"issue-card\" *ngFor=\"let comment of comments; let i = index\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\" [ngStyle]=\"{'background-image': comment.avatar}\"></div>\n      <mat-card-title>{{comment.author}}</mat-card-title>\n    <mat-card-subtitle>{{comment.created | slice:0:10}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n    <p class=\"comment-text\">\n    {{comment.body}}\n    </p>\n    </mat-card-content>\n  </mat-card>\n  <div class=\"add-comment\" *ngIf=\"showCommentInput\">\n        <mat-form-field #commentform>\n          <textarea rows=\"8\" cols=\"30\" matInput placeholder=\"your comment\" [(ngModel)]=\"newComment.body\"></textarea>\n        </mat-form-field>\n        <button mat-raised-button color=\"primary\" (click)=\"sendComment()\">send</button>\n   </div>\n</div>\n\n\n<div class=\"edit\" *ngIf=\"showCreate\" (click)=\"closeCreated()\">\n  <div class=\"container\" (click)=\"$event.stopPropagation()\">\n    <mat-form-field>\n      <input matInput placeholder=\"title\" [(ngModel)]=\"newIssue.title\">\n    </mat-form-field>\n    <mat-form-field>\n      <textarea rows=\"8\" cols=\"30\" matInput placeholder=\"what's your problem?\" [(ngModel)]=\"newIssue.body\"></textarea>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"createIssue()\">create</button>\n    <button mat-raised-button color=\"primary\" (click)=\"closeCreated()\">cancel</button>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/repo/repo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_issue_model__ = __webpack_require__("./src/app/models/issue.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment_model__ = __webpack_require__("./src/app/models/comment.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RepoComponent = /** @class */ (function () {
    function RepoComponent(dataService, route) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.showCommentInput = false;
        this.newComment = { id: '', author: 'rockstarangular', body: '', avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '' };
        this.newIssue = { id: '', number: 0, author: 'rockstarangular', title: '', body: '', commentsCount: 0, avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '', comments: [] };
        this.showCreate = false;
        this.name = '';
        this.id = '';
        route.queryParams.subscribe(function (params) {
            _this.name = params['name'];
            _this.id = params['id'];
            _this.getIssues();
        });
    }
    RepoComponent.prototype.showCreated = function () {
        this.showCreate = true;
    };
    RepoComponent.prototype.closeCreated = function () {
        this.showCreate = false;
    };
    RepoComponent.prototype.createIssue = function () {
        if (this.newIssue.title !== '' && this.newIssue.body !== '') {
            var now = new Date();
            if (this.issues[0] !== undefined) {
                this.newIssue.number = this.issues[0].number + 1;
            }
            this.issues.unshift(this.newIssue);
            this.showCreate = false;
            this.newIssue.created = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            console.log(this.newIssue);
            this.newIssue = new __WEBPACK_IMPORTED_MODULE_3__models_issue_model__["a" /* Issue */]();
            this.newIssue = { id: '', number: 0, author: 'rockstarangular', title: '', body: '', commentsCount: 0, avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '', comments: [] };
        }
    };
    RepoComponent.prototype.sendComment = function () {
        var now = new Date();
        console.log(this.newComment);
        if (this.newComment.body !== '') {
            this.newComment.created = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            this.issues[this.choosenIssueID].commentsCount++;
            if (!this.issues[this.choosenIssueID].comments) {
                this.issues[this.choosenIssueID].comments = [];
            }
            this.issues[this.choosenIssueID].comments.push(this.newComment);
            this.comments = this.issues[this.choosenIssueID].comments;
            this.newComment = new __WEBPACK_IMPORTED_MODULE_4__models_comment_model__["a" /* Comment */]();
            this.newComment = { id: '', author: 'rockstarangular', body: '', avatar: 'url(https://pp.userapi.com/c830609/v830609468/11daed/FjhPGdOTJNE.jpg)', created: '' };
        }
    };
    RepoComponent.prototype.getComments = function (i) {
        var _this = this;
        window.scrollTo(600, 150);
        this.showCommentInput = true;
        this.choosenIssueID = i;
        this.choosenIssue = this.issues[i].title;
        var savedComments = this.dataService.getComments(this.id, this.issues[i].number);
        if (!savedComments && this.issues[i].commentsCount !== 0) {
            this.dataService.showSpinner();
            this.dataService.fetchCommets('Automattic', this.name, this.issues[i].number).subscribe(function (data) {
                console.log('fetched comments');
                _this.issues[i].comments = _this.parseComments(data);
                _this.comments = _this.issues[i].comments;
                _this.dataService.setComments(_this.id, String(_this.issues[i].number), _this.issues[i].comments);
                _this.dataService.hideSpinner();
                console.log(_this.issues[i].comments);
            });
        }
        else {
            this.issues[i].comments = savedComments;
            this.comments = this.issues[i].comments;
            console.log('find saved:', this.issues[i].comments);
        }
    };
    RepoComponent.prototype.getIssues = function () {
        var _this = this;
        var savedIssues = this.dataService.getIssues(this.id);
        if (!savedIssues) {
            this.dataService.showSpinner();
            this.dataService.fetchIssue('Automattic', this.name).subscribe(function (data) {
                console.log('fetched issues');
                console.log(data);
                _this.issues = _this.parseIssues(data);
                _this.dataService.setIssues(_this.id, _this.issues);
                _this.dataService.hideSpinner();
                console.log(_this.issues);
            });
        }
        else {
            this.issues = savedIssues;
            console.log('find saved:', this.issues);
        }
    };
    RepoComponent.prototype.parseIssues = function (data) {
        var issues = data.map(function (a, i) {
            if (i <= 100) {
                return { id: a.id, number: a.number, title: a.title, body: a.body, avatar: 'url(' + a.user.avatar_url + ')', commentsCount: a.comments, created: a.created_at, author: a.user.login };
            }
        });
        return issues;
    };
    RepoComponent.prototype.parseComments = function (data) {
        var issues = data.map(function (a, i) {
            if (i <= 100) {
                return { id: a.id, body: a.body, avatar: 'url(' + a.user.avatar_url + ')', created: a.created_at, author: a.user.login };
            }
        });
        return issues;
    };
    RepoComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    RepoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-repo',
            template: __webpack_require__("./src/app/repo/repo.component.html"),
            styles: [__webpack_require__("./src/app/repo/repo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], RepoComponent);
    return RepoComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/fesm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.spinner = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DataService.prototype.showSpinner = function () {
        this.spinner = true;
        this.change.emit(this.spinner);
    };
    DataService.prototype.hideSpinner = function () {
        this.spinner = false;
        this.change.emit(this.spinner);
    };
    DataService.prototype.setRepos = function (repos) {
        this.repos = repos;
    };
    DataService.prototype.getRepos = function () {
        return this.repos;
    };
    DataService.prototype.getIssues = function (repoID) {
        var issues;
        if (this.repos) {
            this.repos.map(function (e) {
                if (String(e.id) === String(repoID)) {
                    issues = e.issues;
                }
            });
        }
        return issues;
    };
    DataService.prototype.setIssues = function (repoID, issues) {
        var _this = this;
        if (this.repos) {
            this.repos.forEach(function (e, i, arr) {
                if (String(e.id) === String(repoID)) {
                    _this.repos[i].issues = issues;
                }
            });
        }
    };
    DataService.prototype.addNewIssue = function (repoID, issue) {
        var _this = this;
        if (this.repos) {
            this.repos.forEach(function (e, i, arr) {
                if (String(e.id) === String(repoID)) {
                    _this.repos[i].issues.unshift(issue);
                }
            });
        }
    };
    DataService.prototype.getComments = function (repoID, issueID) {
        var comments;
        if (this.repos) {
            this.repos.map(function (e) {
                if (String(e.id) === String(repoID)) {
                    e.issues.map(function (issue) {
                        if (String(issue.number) === String(issueID)) {
                            comments = issue.comments;
                        }
                    });
                }
            });
        }
        return comments;
    };
    DataService.prototype.setComments = function (repoID, issueID, comments) {
        var _this = this;
        if (this.repos) {
            this.repos.map(function (e, i) {
                if (String(e.id) === String(repoID)) {
                    e.issues.map(function (issue, j) {
                        if (String(issue.number) === String(issueID)) {
                            _this.repos[i].issues[j].comments = comments;
                        }
                    });
                }
            });
        }
    };
    DataService.prototype.fetchRepos = function () {
        return this.http.get('https://api.github.com/users/Automattic/repos?per_page=100');
    };
    DataService.prototype.fetchIssue = function (owner, repo) {
        return this.http.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues?per_page=100');
    };
    DataService.prototype.fetchCommets = function (owner, repo, number) {
        return this.http.get('https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + number + '/comments?per_page=100');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DataService.prototype, "change", void 0);
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map