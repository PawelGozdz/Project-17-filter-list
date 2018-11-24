(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-secondary\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <a href=\"#\" class=\"navbar-brand text-light\">Select Ligue</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <header>\r\n    <h2 class=\"my-3\">\r\n      Display teams\r\n      <span> from your favorite league</span>\r\n    </h2>\r\n  </header>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <app-list></app-list>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'filter-categories';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.module */ "./src/app/list/list.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _list_list_module__WEBPACK_IMPORTED_MODULE_3__["ListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col col-sm-3 col-md-2 p-2\">\n    <button \n      class=\"btn btn-block btn-outline-warning\"\n      (click)=\"changeCategory()\">\n      Select All\n    </button>\n\n    <button \n      class=\"btn btn-outline-warning btn-block\"\n      *ngFor=\"let category of categories\"\n      [class.active]=\"category === selectedCategory\"\n      (click)=\"changeCategory(category)\">\n      {{ category }}\n    </button>\n  </div>\n\n  <div class=\"col col-sm-9\">\n    <div \n      class=\"card m-1 p-1 bg-light\"\n      *ngFor=\"let item of items\">\n      <h4 class=\"card-header\">\n        {{ item.name }}\n      </h4>\n      <div class=\"card-text bg-white p-1\">\n        {{ item.description }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_item_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/item.repository */ "./src/app/model/item.repository.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(repository) {
        this.repository = repository;
        this.selectedCategory = null;
    }
    Object.defineProperty(ListComponent.prototype, "items", {
        get: function () {
            return this.repository.getItems(this.selectedCategory);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        })
        // This class provides a logic for the app-list
        ,
        __metadata("design:paramtypes", [_model_item_repository__WEBPACK_IMPORTED_MODULE_1__["ItemRepository"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.component */ "./src/app/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // Browser and Forms modules contain Angular functions for workin with HTML forms
            imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_3__["ModelModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            // Inform Angular about ListComponent
            declarations: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
            // Exports ListComponent module so it can be used in other places
            exports: [_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/model/item.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/item.model.ts ***!
  \*************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(id, name, category, description) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/model/item.repository.ts":
/*!******************************************!*\
  !*** ./src/app/model/item.repository.ts ***!
  \******************************************/
/*! exports provided: ItemRepository */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRepository", function() { return ItemRepository; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
// Repository is responsible for delivering data to a specific app component
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemRepository = /** @class */ (function () {
    function ItemRepository(data) {
        var _this = this;
        this.data = data;
        this.items = [];
        this.categories = [];
        // subscribe() - Observabe method
        data.getItems().subscribe(function (results) {
            _this.items = results;
            _this.categories = results.map(function (cat) { return cat.category; })
                // filter 1 record for each category
                .filter(function (c, i, arr) { return arr.indexOf(c) === i; })
                .sort();
        });
    }
    ItemRepository.prototype.getItems = function (category) {
        if (category === void 0) { category = null; }
        return this.items
            // filter categories. if no category passed, null is default and display all the items
            .filter(function (item) { return category === null || category === item.category; });
    };
    ItemRepository.prototype.getCategories = function () {
        return this.categories;
    };
    ItemRepository = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_static_datasource__WEBPACK_IMPORTED_MODULE_1__["StaticDataSource"]])
    ], ItemRepository);
    return ItemRepository;
}());



/***/ }),

/***/ "./src/app/model/model.module.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.module.ts ***!
  \***************************************/
/*! exports provided: ModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelModule", function() { return ModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.repository */ "./src/app/model/item.repository.ts");
/* harmony import */ var _static_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static.datasource */ "./src/app/model/static.datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // Providers tells Angular, which classes whould be used as a service for @Injectable()
            providers: [_item_repository__WEBPACK_IMPORTED_MODULE_1__["ItemRepository"], _static_datasource__WEBPACK_IMPORTED_MODULE_2__["StaticDataSource"]]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./src/app/model/static.datasource.ts":
/*!********************************************!*\
  !*** ./src/app/model/static.datasource.ts ***!
  \********************************************/
/*! exports provided: StaticDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDataSource", function() { return StaticDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.model */ "./src/app/model/item.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaticDataSource = /** @class */ (function () {
    function StaticDataSource() {
        this.items = [
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](1, 'Ac Milan', 'Serie A', 'Ac Milan - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](2, 'Juventus', 'Serie A', 'Juventus - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](3, 'Inter', 'Serie A', 'Inter - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](4, 'Roma', 'Serie A', 'Roma - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](5, 'Lazio', 'Serie A', 'Lazio - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](6, 'Napoli', 'Serie A', 'Napoli - Serie A'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](7, 'Liverpool', 'Premier League', 'Liverpool - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](8, 'Man City', 'Premier League', 'Man City - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](9, 'Man Utd', 'Premier League', 'Man Utd - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](10, 'Chalsea', 'Premier League', 'Chalsea - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](11, 'Tottenham', 'Premier League', 'Tottenham - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](12, 'Arsenal', 'Premier League', 'Arsenal - Premier League'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](13, 'Borussia', 'Bundesliga', 'Borussia - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](14, 'RB Lipsk', 'Bundesliga', 'RB Lipsk - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](15, 'Bayern', 'Bundesliga', 'Bayern - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](16, 'Wolfsburg', 'Bundesliga', 'Wolfsburg - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](17, 'Schalke', 'Bundesliga', 'Schalke - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](18, 'Herta', 'Bundesliga', 'Herta - Bundesliga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](19, 'Barcelona', 'La Liga', 'Barcelona - La Liga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](20, 'Real', 'La Liga', 'Real - La Liga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](21, 'Sevilla', 'La Liga', 'Sevilla - La Liga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](22, 'Atletico', 'La Liga', 'Atletico - La Liga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](23, 'Valencia', 'La Liga', 'Valencia - La Liga'),
            new _item_model__WEBPACK_IMPORTED_MODULE_1__["Item"](24, 'Bilbao', 'La Liga', 'Bilbao - La Liga'),
        ];
    }
    StaticDataSource.prototype.getItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])([this.items]);
    };
    StaticDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StaticDataSource);
    return StaticDataSource;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projekty WWW\Cwiczeniowe\Angular\filter-categories\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map