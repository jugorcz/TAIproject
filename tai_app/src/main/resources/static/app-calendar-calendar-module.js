(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar-page/calendar-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/calendar-page/calendar-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calendar-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/calendar/calendar-page/calendar-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/calendar/calendar-page/calendar-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/calendar-page/calendar-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/calendar/calendar-page/calendar-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageComponent", function() { return CalendarPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarPageComponent = /** @class */ (function () {
    function CalendarPageComponent() {
    }
    CalendarPageComponent.prototype.ngOnInit = function () {
    };
    CalendarPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calendar-page',
            template: __webpack_require__(/*! ./calendar-page.component.html */ "./src/app/calendar/calendar-page/calendar-page.component.html"),
            styles: [__webpack_require__(/*! ./calendar-page.component.scss */ "./src/app/calendar/calendar-page/calendar-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarPageComponent);
    return CalendarPageComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar-page/calendar-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/calendar/calendar-page/calendar-page.module.ts ***!
  \****************************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-page.component */ "./src/app/calendar/calendar-page/calendar-page.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            ],
            declarations: [_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__["CalendarPageComponent"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-page/calendar-page.component */ "./src/app/calendar/calendar-page/calendar-page.component.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/calendar/dashboard/dashboard.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/calendar/new-task/new-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/calendar/edit-task/edit-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"],
        children: [
            {
                path: 'calendar-page',
                component: _calendar_page_calendar_page_component__WEBPACK_IMPORTED_MODULE_2__["CalendarPageComponent"],
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
            },
            {
                path: 'new-task',
                component: _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_5__["NewTaskComponent"],
            },
            {
                path: 'edit-task/:id',
                component: _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_6__["EditTaskComponent"],
            }
        ],
    },
    { path: '', redirectTo: 'dashboard' },
    { path: '**', redirectTo: 'dashboard' }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-calendar',
            template: "\n    <ngx-sample-layout>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page_calendar_page_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-page/calendar-page.module */ "./src/app/calendar/calendar-page/calendar-page.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/calendar/dashboard/dashboard.module.ts");
/* harmony import */ var _new_task_new_task_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-task/new-task.module */ "./src/app/calendar/new-task/new-task.module.ts");
/* harmony import */ var _edit_task_edit_task_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-task/edit-task.module */ "./src/app/calendar/edit-task/edit-task.module.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CAL = [_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"]];
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_8__["ThemeModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_2__["CalendarRoutingModule"],
                _calendar_page_calendar_page_module__WEBPACK_IMPORTED_MODULE_3__["CalendarPageModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"],
                _new_task_new_task_module__WEBPACK_IMPORTED_MODULE_5__["NewTaskModule"],
                _edit_task_edit_task_module__WEBPACK_IMPORTED_MODULE_6__["EditTaskModule"]
            ],
            declarations: CAL.slice()
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/calendar/dashboard/dashboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/calendar/dashboard/dashboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Dashboard\n  </nb-card-header>\n  <nb-card-body>\n    <table _ngcontent-c35=\"\" class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>Weekdays</th>\n          <th>Tasks</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th>All</th>\n            <td *ngFor=\"let task of tasks\">{{task.name}}  {{task.date | date : 'EEEE'}}</td>\n        </tr>\n        <tr>\n          <th>Monday</th>\n            <td *ngFor=\"let task of mon\">\n              {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n            </td>\n        </tr>\n        <tr>\n          <th>Tuesday</th>\n              <td *ngFor=\"let task of tue\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n              </td>\n        </tr>\n        <tr>\n          <th>Wednesday</th>\n            <td *ngFor=\"let task of wed\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n            </td>\n        </tr>\n        <tr>\n          <th>Thursday</th>\n            <td *ngFor=\"let task of thu\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n</td>\n        </tr>\n        <tr>\n          <th>Friday</th>\n            <td *ngFor=\"let task of fri\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n</td>\n        </tr>\n        <tr>\n          <th>Saturday</th>\n            <td *ngFor=\"let task of sat\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n</td>\n        </tr>\n        <tr>\n          <th>Sunday</th>\n            <td *ngFor=\"let task of sun\">\n                {{task.name}}\n              <button class=\"btn btn-sucecss btn-tn\" (click)=\"edit(task)\">Edit</button>\n              <button class=\"btn btn-danger btn-tn\" (click)=\"delete(task)\">Delete</button>\n</td>\n        </tr>\n      </tbody>\n  </table>\n  <button class=\"btn btn-success\" (click)=\"newTask()\">New Task</button>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/calendar/dashboard/dashboard.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/calendar/dashboard/dashboard.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/dashboard/dashboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/calendar/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/task.service */ "./src/app/service/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentWeek = +Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(new Date(), 'w', 'en');
        this.getTasks();
    };
    DashboardComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
            _this.divByDate();
        });
    };
    DashboardComponent.prototype.divByDate = function () {
        var _this = this;
        var currentWeekTasks = this.tasks.filter(function (t) { return _this.currentWeek === +Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'w', 'en'); });
        this.mon = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Monday"; });
        this.tue = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Tuesday"; });
        this.wed = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Wednesday"; });
        this.thu = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Thursday"; });
        this.fri = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Friday"; });
        this.sat = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Saturday"; });
        this.sun = currentWeekTasks.filter(function (t) { return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(t.date, 'EEEE', 'en') == "Sunday"; });
    };
    DashboardComponent.prototype.delete = function (task) {
        this.tasks = this.tasks.filter(function (t) { return t.id !== task.id; });
        this.divByDate();
        this.taskService.deleteTask(task.id).subscribe();
    };
    DashboardComponent.prototype.edit = function (task) {
        this.router.navigate(["/calendar/edit-task/" + task.id]);
    };
    DashboardComponent.prototype.newTask = function () {
        this.router.navigate(['/calendar/new-task']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/calendar/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/calendar/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/calendar/dashboard/dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/calendar/dashboard/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/calendar/dashboard/dashboard.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/calendar/edit-task/edit-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/calendar/edit-task/edit-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    Edit\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name: </label>\n                <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"name\"\n                        formControlName=\"name\"\n                    >\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                      <label for=\"year\">Year: </label>\n\n                      <input\n                          class=\"form-control\"\n                          type=\"text\"\n                          id=\"year\"\n                          formControlName=\"year\"\n                      >\n                  </div>\n              <div class=\"form-group\">\n                      <label for=\"month\">Month: </label>\n\n                      <select\n                          class=\"form-control\"\n                          id=\"month\"\n                          formControlName=\"month\"\n                      >\n                          <option *ngFor=\"let month of months\" [value]=\"month.id\">{{ month.name }}</option>\n                      </select>\n                  </div>\n\n              <div class=\"form-group\">\n                      <label for=\"day\">Day: </label>\n\n                      <input\n                          class=\"form-control\"\n                          type=\"text\"\n                          id=\"day\"\n                          formControlName=\"day\"\n                      >\n                  </div>\n            </div>\n                <div class=\"row\">\n                <div class=\"container-btn\">\n                    <button class=\"btn btn-success\" type=\"submit\" id=\"savebutton\">Save</button>\n                </div>\n                <div class=\"container-btn\">\n                    <button class=\"btn btn-danger\" (click)=\"onCancel()\" id=\"cancelbutton\">Cancel</button>\n                </div>\n            </div>\n    </form>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/calendar/edit-task/edit-task.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/calendar/edit-task/edit-task.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/edit-task/edit-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/calendar/edit-task/edit-task.component.ts ***!
  \***********************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/task.service */ "./src/app/service/task.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(taskService, router, route) {
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.months = [
            { name: "January", id: 0 },
            { name: "February", id: 1 },
            { name: "March", id: 2 },
            { name: "April", id: 3 },
            { name: "May", id: 4 },
            { name: "June", id: 5 },
            { name: "July", id: 6 },
            { name: "August", id: 7 },
            { name: "September", id: 8 },
            { name: "October", id: 9 },
            { name: "November", id: 10 },
            { name: "December", id: 11 },
        ];
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    EditTaskComponent.prototype.getTask = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.taskService.getTask(id)
            .subscribe(function (task) {
            _this.editTask = task;
            _this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
                "year": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
                "month": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
                "day": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
            });
            _this.createForm.setValue({
                name: _this.editTask.name,
                year: +Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(_this.editTask.date, 'y', 'en'),
                month: +Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(_this.editTask.date, 'M', 'en'),
                day: +Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(_this.editTask.date, 'd', 'en')
            });
        });
    };
    EditTaskComponent.prototype.onSubmit = function () {
        this.editTask.name = this.createForm.value["name"];
        this.editTask.date = new Date(this.createForm.value["year"], this.createForm.value["month"], this.createForm.value["day"]);
        this.taskService.updateTask(this.editTask).subscribe();
        this.router.navigate(["/calendar/dashboard"]);
    };
    EditTaskComponent.prototype.onCancel = function () {
        this.router.navigate(["/calendar/dashboard"]);
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/calendar/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.scss */ "./src/app/calendar/edit-task/edit-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/calendar/edit-task/edit-task.module.ts":
/*!********************************************************!*\
  !*** ./src/app/calendar/edit-task/edit-task.module.ts ***!
  \********************************************************/
/*! exports provided: EditTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskModule", function() { return EditTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-task.component */ "./src/app/calendar/edit-task/edit-task.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditTaskModule = /** @class */ (function () {
    function EditTaskModule() {
    }
    EditTaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"]
            ],
            declarations: [_edit_task_component__WEBPACK_IMPORTED_MODULE_2__["EditTaskComponent"]]
        })
    ], EditTaskModule);
    return EditTaskModule;
}());



/***/ }),

/***/ "./src/app/calendar/new-task/new-task.component.html":
/*!***********************************************************!*\
  !*** ./src/app/calendar/new-task/new-task.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\n  <nb-card-header>\n    header\n  </nb-card-header>\n  <nb-card-body>\n    <form [formGroup]=\"createForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name: </label>\n                <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"name\"\n                        formControlName=\"name\"\n                    >\n            </div>\n            <div class=\"row\">\n              <div class=\"form-group\">\n                      <label for=\"year\">Year: </label>\n\n                      <input\n                          class=\"form-control\"\n                          type=\"text\"\n                          id=\"year\"\n                          formControlName=\"year\"\n                      >\n                  </div>\n              <div class=\"form-group\">\n                      <label for=\"month\">Month: </label>\n\n                      <select\n                          class=\"form-control\"\n                          id=\"month\"\n                          formControlName=\"month\"\n                      >\n                          <option *ngFor=\"let month of months\" [value]=\"month.id\">{{ month.name }}</option>\n                      </select>\n                  </div>\n\n              <div class=\"form-group\">\n                      <label for=\"day\">Day: </label>\n\n                      <input\n                          class=\"form-control\"\n                          type=\"text\"\n                          id=\"day\"\n                          formControlName=\"day\"\n                      >\n                  </div>\n            </div>\n                <div class=\"row\">\n                <div class=\"container-btn\">\n                    <button class=\"btn btn-success\" type=\"submit\" id=\"savebutton\">Save</button>\n                </div>\n                <div class=\"container-btn\">\n                    <button class=\"btn btn-danger\" (click)=\"onCancel()\" id=\"cancelbutton\">Cancel</button>\n                </div>\n            </div>\n    </form>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/calendar/new-task/new-task.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/calendar/new-task/new-task.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/new-task/new-task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/calendar/new-task/new-task.component.ts ***!
  \*********************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/task.service */ "./src/app/service/task.service.ts");
/* harmony import */ var _service_taskstatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/taskstatus */ "./src/app/service/taskstatus.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.months = [
            { name: "January", id: 0 },
            { name: "February", id: 1 },
            { name: "March", id: 2 },
            { name: "April", id: 3 },
            { name: "May", id: 4 },
            { name: "June", id: 5 },
            { name: "July", id: 6 },
            { name: "August", id: 7 },
            { name: "September", id: 8 },
            { name: "October", id: 9 },
            { name: "November", id: 10 },
            { name: "December", id: 11 },
        ];
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "name": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
            "year": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
            "month": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
            "day": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [])
        });
    };
    NewTaskComponent.prototype.onSubmit = function () {
        this.taskService.putTask({ id: 0, taskStatus: _service_taskstatus__WEBPACK_IMPORTED_MODULE_4__["TaskStatus"].UNCHECKED, name: this.createForm.value["name"],
            date: new Date(this.createForm.value["year"], this.createForm.value["month"], this.createForm.value["day"]), userId: "", category: "" }).subscribe();
        this.router.navigate(["/calendar/dashboard"]);
    };
    NewTaskComponent.prototype.onCancel = function () {
        this.router.navigate(["/calendar/dashboard"]);
    };
    NewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/calendar/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/calendar/new-task/new-task.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/calendar/new-task/new-task.module.ts":
/*!******************************************************!*\
  !*** ./src/app/calendar/new-task/new-task.module.ts ***!
  \******************************************************/
/*! exports provided: NewTaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskModule", function() { return NewTaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _new_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-task.component */ "./src/app/calendar/new-task/new-task.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewTaskModule = /** @class */ (function () {
    function NewTaskModule() {
    }
    NewTaskModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"],
            ],
            declarations: [_new_task_component__WEBPACK_IMPORTED_MODULE_2__["NewTaskComponent"]]
        })
    ], NewTaskModule);
    return NewTaskModule;
}());



/***/ }),

/***/ "./src/app/service/task.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/task.service.ts ***!
  \*****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TaskStatus } from './taskstatus';

var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = "/api";
        this.taskUrl = this.apiUrl + "/task";
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.taskUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getTasks')));
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.taskUrl + ("/" + id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getTask id=" + id)));
    };
    TaskService.prototype.putTask = function (task) {
        return this.http.put(this.taskUrl, task, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('putTask')));
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.post(this.taskUrl, task, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("updateTask id=" + task.id)));
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.taskUrl + ("/" + id), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("deleteTask id=" + id)));
    };
    TaskService.prototype.handleError = function (operation) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.messageService.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        };
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());

var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};


/***/ }),

/***/ "./src/app/service/taskstatus.ts":
/*!***************************************!*\
  !*** ./src/app/service/taskstatus.ts ***!
  \***************************************/
/*! exports provided: TaskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatus", function() { return TaskStatus; });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["UNCHECKED"] = "UNCHECKED";
    TaskStatus["CHECKED"] = "CHECKED";
    TaskStatus["CANCELED"] = "CANCELED";
})(TaskStatus || (TaskStatus = {}));


/***/ })

}]);
//# sourceMappingURL=app-calendar-calendar-module.js.map