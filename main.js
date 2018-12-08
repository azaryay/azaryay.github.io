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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n\n  </h1>\n  <!-- <app-data-table></app-data-table> -->\n  <app-input-data></app-input-data>\n</div>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Assignment';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-data/input-data.component */ "./src/app/input-data/input-data.component.ts");
/* harmony import */ var _services_rent_data_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/rent-data-service.service */ "./src/app/services/rent-data-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










/* import { DataTableComponent } from './data-table/data-table.component';
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _input_data_input_data_component__WEBPACK_IMPORTED_MODULE_6__["InputDataComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"]
            ],
            providers: [_services_rent_data_service_service__WEBPACK_IMPORTED_MODULE_7__["RentDataService"] /* ,FileService */],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input-data/input-data.component.css":
/*!*****************************************************!*\
  !*** ./src/app/input-data/input-data.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQtZGF0YS9pbnB1dC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYjs7RUFFRDtJQUNFLFlBQVk7R0FDYiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWRhdGEvaW5wdXQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/input-data/input-data.component.html":
/*!******************************************************!*\
  !*** ./src/app/input-data/input-data.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n\n  <input #desiredate placeholder=\"Please enter month YYYY-MM\" type=\"text\" >\n  <button (click)=\"getRevenue(desiredate.value)\">Get Revenue</button>\n\n</h2>\n<div *ngIf=\"show\" class=\"h1\" >{{desiredate.value}}: expected revenue: ${{expectedRevenue|number}}, expected total capacity of\n  the\n  unreserved\n  offices:{{totalCapacity}}\n<h4>Here is the list of reserved offices:</h4>\n  <!-- <th *ngFor=\"let title of displayedColumns\">{{title}} ; </th>\n  <ul *ngFor=\"let rent  of filteredRentData\">\n    <th class=\"h3\">{{rent.capacity}} ; {{rent.monthlyPrice}}; {{rent.startDay | date: 'dd-MM-yyyy'}} ; {{rent.endDay|\n      date: 'dd-MM-yyyy'}}</th>\n  </ul> -->\n  <table mat-table [dataSource]=\"filteredRentData\" style='align-content: center'>\n    <ng-container matColumnDef=\"capacity\">\n      <th mat-header-cell *matHeaderCellDef>capacity</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.capacity}}</td>\n      <td mat-footer-cell *matFooterCellDef> expected total capacity of the unreserved offices : {{totalCapacity}} .</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"monthlyPrice\">\n      <th mat-header-cell *matHeaderCellDef>monthlyPrice</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.monthlyPrice}}</td>\n      <td mat-footer-cell *matFooterCellDef> expected revenue is: {{expectedRevenue|number}} .</td>\n    </ng-container>\n    <ng-container matColumnDef=\"startDay\">\n      <th mat-header-cell *matHeaderCellDef>startDay </th>\n      <td mat-cell *matCellDef=\"let row\">{{row.startDay | date: 'dd-MM-yyyy' }}</td>\n      <td mat-footer-cell *matFooterCellDef> for month {{chosenStartDate| date: 'dd/MM/yyyy'}}  until </td>\n    </ng-container>\n    <ng-container matColumnDef=\"endDay\">\n      <th mat-header-cell *matHeaderCellDef> endDay</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.endDay | date: 'dd-MM-yyyy'}}</td>\n      <td mat-footer-cell *matFooterCellDef>   {{chosenEndDate| date: 'dd/MM/yyyy'}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/input-data/input-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/input-data/input-data.component.ts ***!
  \****************************************************/
/*! exports provided: InputDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDataComponent", function() { return InputDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rent_data_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rent-data-service.service */ "./src/app/services/rent-data-service.service.ts");
/* harmony import */ var _interfaces_RentDataItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/RentDataItem */ "./src/app/interfaces/RentDataItem.ts");




var InputDataComponent = /** @class */ (function () {
    function InputDataComponent(_rentDataService /* , private _csvFileService: FileService) */) {
        this._rentDataService = _rentDataService;
        this.displayedColumns = ['capacity', 'monthlyPrice', 'startDay', 'endDay'];
    }
    InputDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rentDataService.getRentData().subscribe(function (data) { return _this.data = data; });
        // // this._csvFileService.getCSVContent().subscribe(
        //   data =>  this.csvData = data
        // );
        // this.csvData = this.getContent().then(t => this.csvData = t);
        // this.JSONData = this.csvJSON(this.csvData);
    };
    InputDataComponent.prototype.getContent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    InputDataComponent.prototype.csvJSON = function (lines) {
        lines.split(/\r?\n/);
        var result = [];
        var headers = lines[0].split(',');
        console.log(headers);
        for (var i = 1; i < lines.length - 1; i++) {
            var obj = {};
            var currentline = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        console.log(JSON.stringify(result)); //JSON
        this.JSONData = JSON.stringify(result);
    };
    InputDataComponent.prototype.getRevenue = function (value) {
        // debugger;
        var _this = this;
        // this.JSONData = this.csvJSON(this.csvData);
        //Here get input from user 
        this.chosenYear = parseInt(value.substring(0, 4), 10);
        this.chosenMonth = parseInt(value.substr(5), 10);
        // convert user string to type Date
        this.chosenEndDate = new Date(this.chosenYear, this.chosenMonth, 0);
        this.chosenStartDate = new Date(this.chosenYear, this.chosenMonth - 1, 1);
        // get the relevant  from the records & map it to RentDataItem
        this.rentData = this.data.map(function (data) { return new _interfaces_RentDataItem__WEBPACK_IMPORTED_MODULE_3__["RentDataItem"](data.capacity, data.monthlyPrice, data.startDay, data.endDay); });
        // filter the data according to date in input
        this.filteredRentData = this.rentData.filter(function (a) { return a.startDay <= _this.chosenStartDate &&
            (a.endDay >= _this.chosenStartDate || a.endDay === undefined); });
        // calculate capacity
        this.totalCapacity = this.data
            .map(function (t) { return t.capacity; }).reduce(function (acc, val) { return acc + val; }, 0) -
            this.filteredRentData.map(function (t) { return t.capacity; }).reduce(function (acc, val) { return acc + val; }, 0);
        //calculate expected revenue (with proration)
        this.expectedRevenue = this.filteredRentData
            .map(function (t) { return t.endDay === undefined || t.endDay >= _this.chosenEndDate ? t.monthlyPrice
            : _this.calculateProration(t.endDay, t.monthlyPrice); }).reduce(function (acc, val) { return acc + val; }, 0);
        console.log(this.totalCapacity + ' ' + this.expectedRevenue);
        this.show = true;
    };
    InputDataComponent.prototype.calculateProration = function (endDay, monthlyPrice) {
        //proration calculation
        var day = endDay.getDate();
        var daysInMonth = new Date(endDay.getFullYear(), endDay.getMonth() + 1, 0).getDate();
        console.log(endDay);
        console.log(day + ' ' + daysInMonth);
        return (day * monthlyPrice / daysInMonth).valueOf();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputDataComponent.prototype, "csvData", void 0);
    InputDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-data',
            template: __webpack_require__(/*! ./input-data.component.html */ "./src/app/input-data/input-data.component.html"),
            styles: [__webpack_require__(/*! ./input-data.component.css */ "./src/app/input-data/input-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_rent_data_service_service__WEBPACK_IMPORTED_MODULE_2__["RentDataService"] /* , private _csvFileService: FileService) */])
    ], InputDataComponent);
    return InputDataComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/RentDataItem.ts":
/*!********************************************!*\
  !*** ./src/app/interfaces/RentDataItem.ts ***!
  \********************************************/
/*! exports provided: RentDataItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentDataItem", function() { return RentDataItem; });
var RentDataItem = /** @class */ (function () {
    function RentDataItem(capacity, monthlyPrice, startDay, endDay) {
        this.capacity = capacity;
        this.monthlyPrice = monthlyPrice;
        var date1 = new Date(startDay);
        date1.setHours(0, 0, 0, 0);
        this.startDay = date1;
        if (endDay !== '') {
            var date2 = new Date(endDay);
            date2.setHours(0, 0, 0, 0);
            this.endDay = date2;
        }
    }
    return RentDataItem;
}());



/***/ }),

/***/ "./src/app/services/rent-data-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/rent-data-service.service.ts ***!
  \*******************************************************/
/*! exports provided: RentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentDataService", function() { return RentDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RentDataService = /** @class */ (function () {
    function RentDataService(http) {
        this.http = http;
        this._url = '/assets/data/rent_data.json';
    }
    RentDataService.prototype.getRentData = function () {
        return this.http.get(this._url);
    };
    RentDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RentDataService);
    return RentDataService;
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

module.exports = __webpack_require__(/*! /home/azaryay/Dev/angular-project/Assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map