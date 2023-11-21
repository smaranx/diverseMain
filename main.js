(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\diverse-sub\diverse (2)\argon-design-system-angular-master\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _raw_loader_main_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./main-page.component.html */ "vMfD");
/* harmony import */ var _main_page_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.component.css */ "YJFP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(router) {
        var _this = this;
        this.router = router;
        this.loading = true;
        this.list = ['YOU’RE NOT ALONE,', 'TOGETHER WE ARE STRONG, WE ARE ONE'];
        setTimeout(function () {
            _this.loading = false;
            _this.router.navigate(["./home"]);
        }, 12000);
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main-page',
            template: _raw_loader_main_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_main_page_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "AytR":
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

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./landing.component.html */ "QnVx");
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ "KjGC");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = /** @class */ (function () {
    function LandingComponent(wowService) {
        this.wowService = wowService;
        this.data = [
            {
                "parentName": "Q // Will there be a Pre-Sale ?",
                "childProperties": [
                    { "propertyName": "Yes, there will be a total supply of 1500 for the Pre-Sale on 27th February 2022 12:30 PM, Eastern Time (ET)." },
                ]
            },
           /* {
                "parentName": "Q // What will be the price for Pre-Sale ?",
                "childProperties": [
                    { "propertyName": "0.25 ETH + Gas." },
                ]
            },*/
            {
                "parentName": "Q // When is the public mint?",
                "childProperties": [
                    { "propertyName": "Public mint is on 28th February 2022 01:00 PM, Eastern Time (ET)." },
                ]
            },
           /* {
                "parentName": "Q // What will be the price for public sale ?",
                "childProperties": [
                    { "propertyName": "0.2 + Gas." },
                ]
            }*/
        ];
        this.wowService.init();
    }
    LandingComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_5__["init"]();
        this.images = [
            { img: "../../assets/o1.jpg" },
            { img: "../../assets/o2.jpg" },
            { img: "../../assets/o3.jpg" },
            { img: "../../assets/h1.jpg" },
            { img: "../../assets/h2.jpg" },
            { img: "../../assets/h3.jpg" },
        ];
        this.slideConfig = {
            "slidesToShow": 3,
            "slidesToScroll": 3,
            "dots": false,
            "infinite": true,
            "autoplay": true,
            "prevArrow": false,
            "nextArrow": false,
            "responsive": [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    };
    LandingComponent.prototype.toggleAccordian = function (event, index) {
        var element = event.target;
        element.classList.toggle("active");
        if (this.data[index].isActive) {
            this.data[index].isActive = false;
        }
        else {
            this.data[index].isActive = true;
        }
        var panel = element.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    };
    LandingComponent.ctorParameters = function () { return [
        { type: ngx_wow__WEBPACK_IMPORTED_MODULE_4__["NgwWowService"] }
    ]; };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-landing',
            template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [ngx_wow__WEBPACK_IMPORTED_MODULE_4__["NgwWowService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "KjGC":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slick-slider {\n  width: 100%;\n  margin: auto;\n}\n\n.card_style {\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid white;\n  color: white;\n  border-radius: 2%;\n  text-align: center;\n}\n\n.wrapper {\n  position: relative;\n  width: 100%;\n}\n\n.wrapper::after {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  background: linear-gradient(0deg, #050505 10%, rgba(48, 48, 48, 0.5) 40%, rgba(0, 0, 0, 0) 100%);\n}\n\n.accor {\n  background-color: rgba(0, 0, 0, 0) !important;\n}\n\n.slick-next .slick-arrow {\n  visibility: hidden !important;\n  background: black !important;\n}\n\n.timeline-centered {\n  color: #CCD5DB;\n}\n\n@media (min-width: 992px) {\n  .timeline-centered,\n.timeline-centered .timeline-item,\n.timeline-centered .timeline-info,\n.timeline-centered .timeline-marker,\n.timeline-centered .timeline-content {\n    display: block;\n    margin: 0;\n    padding: 0;\n  }\n  .timeline-centered .timeline-item {\n    padding-bottom: 40px;\n    overflow: hidden;\n  }\n  .timeline-centered .timeline-marker {\n    position: absolute;\n    left: 50%;\n    margin-left: -7.5px;\n  }\n  .timeline-centered .timeline-info,\n.timeline-centered .timeline-content {\n    width: 50%;\n  }\n  .timeline-centered > .timeline-item:nth-child(odd) .timeline-info {\n    float: left;\n    text-align: right;\n    padding-right: 30px;\n  }\n  .timeline-centered > .timeline-item:nth-child(odd) .timeline-content {\n    float: right;\n    text-align: left;\n    padding-left: 30px;\n  }\n  .timeline-centered > .timeline-item:nth-child(even) .timeline-info {\n    float: right;\n    text-align: left;\n    padding-left: 30px;\n  }\n  .timeline-centered > .timeline-item:nth-child(even) .timeline-content {\n    float: left;\n    text-align: right;\n    padding-right: 30px;\n  }\n  .timeline-centered > .timeline-item.period .timeline-content {\n    float: none;\n    padding: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .timeline-centered .timeline-item.period {\n    padding: 50px 0 90px;\n  }\n  .timeline-centered .period .timeline-marker:after {\n    height: 30px;\n    bottom: 0;\n    top: auto;\n  }\n  .timeline-centered .period .timeline-title {\n    left: auto;\n  }\n}\n\n/*==================================\n    TIMELINE\n==================================*/\n\n/*-- GENERAL STYLES\n------------------------------*/\n\n.timeline {\n  color: white !important;\n  line-height: 1.4em;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\n.timeline h1, .timeline h2, .timeline h3, .timeline h4, .timeline h5, .timeline h6 {\n  line-height: inherit;\n}\n\n/*----- TIMELINE ITEM -----*/\n\n.timeline-item {\n  padding-left: 40px;\n  position: relative;\n}\n\n.timeline-item:last-child {\n  padding-bottom: 0;\n}\n\n/*----- TIMELINE INFO -----*/\n\n.timeline-info {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  margin: 0 0 0.5em 0;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n/*----- TIMELINE MARKER -----*/\n\n.timeline-marker {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15px;\n}\n\n.timeline-marker:before {\n  background: #e2dddd;\n  border: 3px solid transparent;\n  border-radius: 100%;\n  content: \"\";\n  display: block;\n  height: 15px;\n  position: absolute;\n  top: 4px;\n  left: 0;\n  width: 15px;\n  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;\n}\n\n.timeline-marker:after {\n  content: \"\";\n  width: 3px;\n  background: #CCD5DB;\n  display: block;\n  position: absolute;\n  top: 24px;\n  bottom: 0;\n  left: 6px;\n}\n\n.timeline-item:last-child .timeline-marker:after {\n  content: none;\n}\n\n.timeline-item:not(.period):hover .timeline-marker:before {\n  background: transparent;\n  border: 3px solid #e2dddd;\n}\n\n/*----- TIMELINE CONTENT -----*/\n\n.timeline-content {\n  padding-bottom: 40px;\n}\n\n.timeline-content p:last-child {\n  margin-bottom: 0;\n}\n\n/*----- TIMELINE PERIOD -----*/\n\n.period {\n  padding: 0;\n}\n\n.period .timeline-info {\n  display: none;\n}\n\n.period .timeline-marker:before {\n  background: transparent;\n  content: \"\";\n  width: 15px;\n  height: auto;\n  border: none;\n  border-radius: 0;\n  top: 0;\n  bottom: 30px;\n  position: absolute;\n  border-top: 3px solid #CCD5DB;\n  border-bottom: 3px solid #CCD5DB;\n}\n\n.period .timeline-marker:after {\n  content: \"\";\n  height: 32px;\n  top: auto;\n}\n\n.period .timeline-content {\n  padding: 40px 0 70px;\n}\n\n.period .timeline-title {\n  color: #CCD5DB;\n  margin: 0;\n}\n\n.accordion {\n  color: #FFFFFF;\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  border-color: #FFFFFF;\n  margin: 0;\n  padding: 15px 20px;\n  font-weight: 200;\n  line-height: 1;\n  background-color: #35373898;\n  border-radius: 0px 0px 0px 0px;\n  font-size: 1em;\n  transition: 0.4s;\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.active, .accordion:hover {\n  background-color: rgba(2, 2, 2, 0);\n  color: #e5eaeb;\n}\n\n.mainpage-button__soon:hover {\n  background-color: #565757;\n}\n\n.accordion:after {\n  color: #FFFFFF;\n  font-weight: bold;\n  float: right;\n  margin-left: 5px;\n  font-size: \"9rem\";\n}\n\n.active:after {\n  color: #909697;\n}\n\n.mainpage_accordion__title {\n  color: #FFFFFF;\n  font-size: 1.2em;\n  font-weight: 400;\n  padding: 30px 30px 30px 30px;\n}\n\n.panel {\n  padding: 2px 18px;\n  background-color: #1B91EF00;\n  max-height: 0;\n  border-top: none;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n@media only screen and (max-width: 600px) {\n  .al {\n    text-align: center;\n    align-content: center;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .btn {\n    text-align: center;\n    margin: auto;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBRUUsa0NBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdHQUFBO0FBQUo7O0FBR0U7RUFFRSw2Q0FBQTtBQURKOztBQUlBO0VBRUksNkJBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtFO0VBQ0ksY0FBQTtBQUZOOztBQUdJO0VBQ0k7Ozs7O0lBS0ksY0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBRFY7RUFHTTtJQUNJLG9CQUFBO0lBQ0EsZ0JBQUE7RUFEVjtFQUdNO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUFEVjtFQUdNOztJQUVJLFVBQUE7RUFEVjtFQUdNO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFEVjtFQUdNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFEVjtFQUdNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUFEVjtFQUdNO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFEVjtFQUdNO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUFEVjtFQUdNO0lBQ0ksb0JBQUE7RUFEVjtFQUdNO0lBQ0ksWUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VBRFY7RUFHTTtJQUNJLFVBQUE7RUFEVjtBQUNGOztBQUlBOzttQ0FBQTs7QUFJSTsrQkFBQTs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUZSOztBQUdRO0VBQ0ksb0JBQUE7QUFEWjs7QUFLSSw0QkFBQTs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFIUjs7QUFJUTtFQUNJLGlCQUFBO0FBRlo7O0FBTUksNEJBQUE7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUpSOztBQU1JLDhCQUFBOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQVEsU0FBQTtFQUFXLE9BQUE7RUFDbkIsV0FBQTtBQUZSOztBQUdRO0VBQ0ksbUJBcEpJO0VBcUpKLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxPQUFBO0VBQ1YsV0FBQTtFQUNBLGdFQUFBO0FBQVo7O0FBR1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUFXLFNBQUE7RUFBVyxTQUFBO0FBQ2xDOztBQUNRO0VBQ0ksYUFBQTtBQUNaOztBQUVJO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtBQUNSOztBQUVJLCtCQUFBOztBQUVBO0VBQ0ksb0JBQUE7QUFBUjs7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7O0FBR0ksOEJBQUE7O0FBRUE7RUFDSSxVQUFBO0FBRFI7O0FBRVE7RUFDSSxhQUFBO0FBQVo7O0FBR1k7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBRGhCOztBQUdZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBRGhCOztBQUlRO0VBQ0ksb0JBQUE7QUFGWjs7QUFJUTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBRlo7O0FBS0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlHQUFBO0FBRlI7O0FBS0k7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7QUFGTjs7QUFLSTtFQUVFLHlCQUFBO0FBSE47O0FBS0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZSOztBQUtJO0VBQ0ksY0FBQTtBQUZSOztBQUlJO0VBRUUsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUZOOztBQUdLO0VBQ0csaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFBUjs7QUFHSTtFQURKO0lBRUEsa0JBQUE7SUFDQSxxQkFBQTtFQUNFO0FBQ0Y7O0FBR0k7RUFGSjtJQUdBLGtCQUFBO0lBQ0EsWUFBQTtJQUVBLG1CQUFBO0VBQUU7QUFDRiIsImZpbGUiOiJsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6ICNlMmRkZGQ7XHJcbiRwcmltYXJ5LWNvbG9yLWhvdmVyOiBzY2FsZS1jb2xvcigkcHJpbWFyeS1jb2xvciwgJGxpZ2h0bmVzczogMzIlKTtcclxuLnNsaWNrLXNsaWRlciB7ICBcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBtYXJnaW46IGF1dG87ICBcclxuICB9ICBcclxuICAuY2FyZF9zdHlsZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZXI6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYig1LCA1LCA1KSAxMCUsIHJnYmEoNDgsNDgsNDgsMC41KSA0MCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XHJcblxyXG4gIH1cclxuICAuYWNjb3JcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi5zbGljay1uZXh0IC5zbGljay1hcnJvd1xyXG57XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuICAudGltZWxpbmUtY2VudGVyZWQge1xyXG4gICAgICBjb2xvcjogI0NDRDVEQjtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICYsXHJcbiAgICAgICAgLnRpbWVsaW5lLWl0ZW0sXHJcbiAgICAgICAgLnRpbWVsaW5lLWluZm8sXHJcbiAgICAgICAgLnRpbWVsaW5lLW1hcmtlcixcclxuICAgICAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1tYXJrZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03LjVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWluZm8sXHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1pbmZvIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChvZGQpIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtaW5mbyB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA+IC50aW1lbGluZS1pdGVtOm50aC1jaGlsZChldmVuKSAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiAudGltZWxpbmUtaXRlbS5wZXJpb2QgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLWl0ZW0ucGVyaW9kIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweCAwIDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wZXJpb2QgLnRpbWVsaW5lLW1hcmtlcjphZnRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wZXJpb2QgLnRpbWVsaW5lLXRpdGxlIHtcclxuICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBUSU1FTElORVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgICAvKi0tIEdFTkVSQUwgU1RZTEVTXHJcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLnRpbWVsaW5lIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0gVElNRUxJTkUgSVRFTSAtLS0tLSovXHJcblxyXG4gICAgLnRpbWVsaW5lLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0gVElNRUxJTkUgSU5GTyAtLS0tLSovXHJcblxyXG4gICAgLnRpbWVsaW5lLWluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgLjVlbSAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC8qLS0tLS0gVElNRUxJTkUgTUFSS0VSIC0tLS0tKi9cclxuXHJcbiAgICAudGltZWxpbmUtbWFya2VyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwOyBib3R0b206IDA7IGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0cHg7IGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjQ0NENURCO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDI0cHg7IGJvdHRvbTogMDsgbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZWxpbmUtaXRlbTpsYXN0LWNoaWxkICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aW1lbGluZS1pdGVtOm5vdCgucGVyaW9kKTpob3ZlciAudGltZWxpbmUtbWFya2VyOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLSBUSU1FTElORSBDT05URU5UIC0tLS0tKi9cclxuXHJcbiAgICAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLSBUSU1FTElORSBQRVJJT0QgLS0tLS0qL1xyXG4gICAgXHJcbiAgICAucGVyaW9kIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC50aW1lbGluZS1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpbWVsaW5lLW1hcmtlciB7XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjQ0NENURCO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNDQ0Q1REI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAwIDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aW1lbGluZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjQ0NENURCO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjY29yZGlvbiB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM3Mzg5ODtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFjdGl2ZSwgLmFjY29yZGlvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLDIsMiwwKTtcclxuICAgICAgY29sb3I6ICNlNWVhZWI7XHJcbiAgICBcclxuICAgIH1cclxuICAgIC5tYWlucGFnZS1idXR0b25fX3Nvb246aG92ZXJcclxuICAgIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU2NTc1NyA7XHJcbiAgICB9XHJcbiAgICAuYWNjb3JkaW9uOmFmdGVyIHtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IFwiOXJlbVwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aXZlOmFmdGVyIHtcclxuICAgICAgICBjb2xvcjogIzkwOTY5NztcclxuICAgIH1cclxuICAgIC5tYWlucGFnZV9hY2NvcmRpb25fX3RpdGxlXHJcbiAgICB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAzMHB4XHJcbiAgICB9LnBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAycHggMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5MUVGMDA7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4uYWx7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbn1cclxuLmJ0bntcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luOiBhdXRvO1xyXG5cclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG59Il19 */");

/***/ }),

/***/ "QnVx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<head>  \n  <link rel=\"stylesheet\" href=\"node_modules/aos/dist/aos.css\" />\n  <link href=\"https://unpkg.com/aos@2.3.1/dist/aos.css\" rel=\"stylesheet\">\n  <script src=\"https://unpkg.com/aos@2.3.1/dist/aos.js\"></script>\n</head>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js\"></script>\n<script>\n  AOS.init();\n</script>\n<app-navbar></app-navbar>\n<main  style=\"background-color: black;\">\n  <section class=\"wrapper\">\n    <video  minHeight=\"105vh\" width=\"100%\" autoplay loop muted playsinline oncanplay=\"this.play()\" onloadmetadata=\"this.muted=true\">\n    <source src=\"../../assets/diverse.mp4\" type=\"video/mp4\"/>\n  </video>\n  <!--<iframe  height=\"1000vh\" width=\"100%\"\n  src=\"https://youtu.be/aSPsgyuWC-8\"><!-autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0->\n  </iframe>-\n  <iframe width=\"1920px\" height=\"600vh\" src=\"https://www.youtube.com/embed/aSPsgyuWC-8?autoplay=100&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0\"></iframe>-->\n  \n  </section>\n \n<!-- <div class=\"col-lg-12 col-sm-6 col-md-6\" style=\"background-color: black;\">\n  <ng-image-slider [images]=\"imageObject\" [infinite]=\"true\"\n  [autoSlide]=\"0\"\n  [imageSize]=\"{width: '400vw', height: '500vh'}\"\n  slideImage=\"1\"></ng-image-slider>\n</div>\n<div class='col-lg-12 col-sm-3 col-md-6'>    \n   \n<owl-carousel [options]=\"SlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\"  >  \n  <div class=\"item\" *ngFor=\"let img of Images\">  \n  <div style=\"align-content: center\">  \n  <img style=\"height: 70%;width:100%\"src={{img}}/>  \n  </div>  \n  </div>  \n</owl-carousel>  \n</div>\n\n<swiper\n[slidesPerView]=\"3\"\n[spaceBetween]=\"50\"\n(swiper)=\"onSwiper($event)\"\n(slideChange)=\"onSlideChange()\"\n>\n<ng-template swiperSlide>Slide 1</ng-template>\n<ng-template swiperSlide>Slide 2</ng-template>\n<ng-template swiperSlide>Slide 3</ng-template>\n</swiper> -->\n\n  <!-- <section class=\"section section-lg pt-lg-0 mt--200\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row row-grid\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h6 class=\"text-primary text-uppercase\">Download Argon</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary\">angular</span>\n                    <span class=\"badge badge-pill badge-primary\">ng-bootstrap</span>\n                    <span class=\"badge badge-pill badge-primary\">creative</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-success rounded-circle mb-4\">\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h6 class=\"text-success text-uppercase\">Build Something</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success\">business</span>\n                    <span class=\"badge badge-pill badge-success\">vision</span>\n                    <span class=\"badge badge-pill badge-success\">success</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div class=\"icon icon-shape icon-shape-warning rounded-circle mb-4\">\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h6 class=\"text-warning text-uppercase\">Prepare Launch</h6>\n                  <p class=\"description mt-3\">Argon is a great free UI package based on Angular that includes the most important components and features.</p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning\">marketing</span>\n                    <span class=\"badge badge-pill badge-warning\">product</span>\n                    <span class=\"badge badge-pill badge-warning\">launch</span>\n                  </div>\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning mt-4\">Learn more</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section> -->\n  <section class=\"section section-sm pt-0 al\" style=\"background-color: black;padding-bottom: 0rem;\">\n    <div class=\"wow fadeInDown container\"  data-wow-delay=\"5s\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\" style=\"color:white\">\n          <div class=\"animated fadeIn pr-md-5\" >\n            <h1 data-aos=\"fade-up\"\n            data-aos-easing=\"ease-out-cubic\"\n            data-aos-duration=\"2000\" class=\"mb-3 mt-2\" style=\"color:white\">About Diverse</h1>\n            <div data-aos=\"fade-up\"\n            data-aos-easing=\"ease-out-cubic\"\n            data-aos-duration=\"2000\" class=\"d-flex align-items-center\">\n            <p data-aos=\"fade-up\"\n            data-aos-easing=\"ease-out-cubic\"\n            data-aos-duration=\"2000\">Diverse is a NFT Alpha Portal-hub to other projects exclusively! Our Art consists of crafted life-like art pieces, 🌍 We take global prospectives and reflect them in our project which promotes diversity, equality and inclusion in the NFT Space, The variations includes 5 main male and female figures, each with their own unique ethnicities that showcase the truly diverse cultural roots of the earth we inhabit together. <br><br>Diverse is a community-driven project focused on encapsulating our diverse world and bringing individuals together that make the Earth a beautiful place!</p>\n            </div>\n\n            \n           \n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <img src=\"./assets/about.png\" class=\"img-fluid\">\n        </div>\n      </div>\n    </div>\n  </section>\n      \n     <section class=\"section-lg\" style=\"background-color: rgb(37, 37, 37);\">\n      <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">  \n        <div ngxSlickItem *ngFor=\"let image of images\" class=\"slide\">  \n          <img class=\"\" src=\"{{ image.img }}\" width=\"100%\">  \n        </div>  \n      </ngx-slick-carousel>  \n     </section>\n  <section class=\"section section-md pb-0\" style=\"background-image: url(../../assets/coren.png);\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center text-center mb-lg\">\n        <div class=\"col-lg-8\">\n          <h2 data-aos=\"fade-up\"\n          data-aos-easing=\"ease-out-cubic\"\n          data-aos-duration=\"2000\" class=\"display-3\" style=\"color: white;\">ROADMAP</h2>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2\">\n                <ul class=\"timeline timeline-centered\">\n                    <li class=\"timeline-item\">\n                  \n                        <div class=\"timeline-marker\"></div>\n                        <div class=\"timeline-content animate__delay-6s\" style=\"color: white;\">\n                            <h4 data-aos=\"fade-left\"\n                            data-aos-easing=\"ease-out-cubic\"\n                            data-aos-duration=\"2000\" class=\"timeline-title\" style=\"color: white;\">DIVERSE IN METAVERSE</h4>\n                            <h5 style=\"color: WHITE; opacity: 0.5;\">Completed ✅ </h5>\n                            <p data-aos=\"fade-left\"\n                            data-aos-easing=\"ease-out-cubic\"\n                            data-aos-duration=\"2000\" class=\"text-muted\">As we mature as a project, DIVERSE will be in the metaverse where we will host shows and festivals! Art galleries where you can walk and purchase the NFT directly from there, club houses, lounges , game slots and much more! We look forward to celebrating our community and showing everyone how strong we are! \n                          </p>\n                        </div>\n                    </li>\n                    <li class=\"timeline-item\">\n                        \n                        <div class=\"timeline-marker\"></div>\n                        <div class=\"timeline-content\">\n                            <h4 data-aos=\"fade-right\"\n                            data-aos-easing=\"ease-out-cubic\"\n                            data-aos-duration=\"2000\" class=\"timeline-title\" style=\"color: white;\">DIVERSE ALPHA REBRAND</h4>\n                            <h5 style=\"color: WHITE; opacity: 0.5;\">Completed ✅ </h5>\n                            <p data-aos=\"fade-right\"\n                            data-aos-easing=\"ease-out-cubic\"\n                            data-aos-duration=\"2000\" class=\"text-muted\">Diverse Alpha rebrand aiming to be the biggest alpha project in the NFT space! Meaning that diverse will be a portal hub to other projects, introducing diverse alpha pass card mint for our diverse NFT holders, the card access will have benefits such as alpha access chat, free NFTS and whitelists from other projects, analysis and news of the nft space and projects, $ETH reward’s, and so on. \n                          </p>\n                        </div>\n                    </li>\n                    <li class=\"timeline-item\">\n                      \n                      <div class=\"timeline-marker\"></div>\n                      <div class=\"timeline-content animate__delay-6s\" style=\"color: white;\">\n                        <h4 data-aos=\"fade-left\"\n                        data-aos-easing=\"ease-out-cubic\"\n                        data-aos-duration=\"2000\" class=\"timeline-title\" style=\"color: white;\">DIVERSE MERCH </h4>\n                        <h5 style=\"color: WHITE; opacity: 0.5;\">Completed ✅</h5>\n                        <p data-aos=\"fade-left\"\n                        data-aos-easing=\"ease-out-cubic\"\n                        data-aos-duration=\"2000\" class=\"text-muted\">We will be launching our exclusive merchandise, We are incredibly excited for everyone to rep DIVERSE and show the world our project! & guess what? Our lucky OG holders and long term holders will receive for free \n                      </p>\n                    </div>\n                  </li>\n                                   <li class=\"timeline-item\">\n                        <div class=\"timeline-marker\"></div>\n                        <div class=\"timeline-content animate__delay-6s\" style=\"color: #ffffff;\">\n                          <h4 data-aos=\"fade-left\"\n                          data-aos-easing=\"ease-out-cubic\"\n                          data-aos-duration=\"2000\" class=\"timeline-title\" style=\"color: white;\"></h4>\n                          <h5 style=\"color: WHITE; opacity: 0.5;\"></h5>\n                          <p data-aos=\"fade-left\"\n                          data-aos-easing=\"ease-out-cubic\"\n                          data-aos-duration=\"2000\" class=\"text-muted\">\n                        </p>\n                      </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container pt-3\">\n      <div class=\"row justify-content-center text-center mb-0 \">\n        <div data-aos=\"fade-up\"\n        data-aos-easing=\"ease-out-cubic\"\n        data-aos-duration=\"2000\"  class=\"col-lg-8\">\n          <h2 data-aos=\"fade-up\"\n          data-aos-easing=\"ease-out-cubic\"\n          data-aos-duration=\"2000\"  class=\"display-3\" style=\"color: white;\">The Team</h2>\n          \n        </div>\n      </div>\n      <div class=\"container mt-0 pt-0\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-12\">\n            <div class=\"row row-grid\">\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://twitter.com/ShamounDillon\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/1.png\" class=\"img-fluid mt-3\">\n                    <h6  class=\"text-uppercase mt-4\" style=\"color: white;\">DillON</h6>\n                    <p class=\"description mb-0\" >FOUNDER</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://twitter.com/Mainhoodgirl\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/2.png\" class=\"img-fluid mt-3\">\n                      <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Sky</h6>\n                      <p class=\"description mb-0\" >FOUNDER</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://twitter.com/777Gaige777\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/3.png\" class=\"img-fluid mt-3\">\n                      <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Gaige</h6>\n                      <p class=\"description mb-0\" >BRAND STRATEGIST</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://praj.io\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/4.png\" class=\"img-fluid mt-3\">\n                    <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Praj</h6>\n                    <p class=\"description mb-0\" >Head Developer</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container mt-5\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-12\">\n            <div class=\"row row-grid\">\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://discord.gg/diverse\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/5.png\" class=\"img-fluid mt-3\">\n                    <h6  class=\"text-uppercase mt-4\" style=\"color: white;\">Jah</h6>\n                    <p  class=\"description mb-0\" >Designer</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://degen.rocks/\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/7.png\" class=\"img-fluid mt-3\">\n                    <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Datts</h6>\n                    <p class=\"description mb-0\" >Developer</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://smaran.netlify.app\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/6.png\" class=\"img-fluid mt-3\">\n                    <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Smaran</h6>\n                    <p class=\"description mb-0\" >Developer</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-3\">\n                <div data-aos=\"fade-up\"\n                data-aos-easing=\"ease-out-cubic\"\n                data-aos-duration=\"2000\"  class=\"card card-lift--hover shadow border-0\" class=\"card_style\">\n                  <div class=\"card-body\">\n                    <a href=\"https://discord.gg/diverse\" target=\"_blank\" style=\"color: white;\">\n                      <img src=\"./assets/8.png\" class=\"img-fluid mt-3\">\n                    <h6 class=\"text-uppercase mt-4\" style=\"color: white;\">Rivardo</h6>\n                    <p class=\"description mb-0\" >Animator</p>\n\n                    </a>\n            \n<!--                     <a href=\"javascript:void(0)\" class=\"btn btn-primary mt-4\">Learn more</a>\n -->                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 al\">\n          <h4 data-aos=\"fade-up\"\n          data-aos-easing=\"ease-out-cubic\"\n          data-aos-duration=\"2000\" class=\"display-3 text-white al pt-5\">Looking For Answers?</h4>\n          <p data-aos=\"fade-up\"\n          data-aos-easing=\"ease-out-cubic\"\n          data-aos-duration=\"2000\"  class=\"text-white text-muted al\">FREQUENTLY ASKED QUESTIONS</p>\n          <img src=\"./assets/42.png\" class=\"img-center img-fluid\">\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pl-md-5 mb-2 mt-0\"  class=\"accor\">\n            <div class=\"row question-tab mt-0 mb-2\n            \">\n          <!-- /.col-lg-4 -->\n          <div data-aos=\"fade-up\"\n          data-aos-easing=\"ease-out-cubic\"\n          data-aos-duration=\"2000\"  class=\"mb-2\" *ngFor=\"let item of data;let i = index;\">\n            <button class=\"accordion\" (click)=\"toggleAccordian($event, i)\"> {{item.parentName}} </button>\n            <div class=\"panel\" *ngFor=\"let child of item.childProperties\" hide=\"!item.isActive\">\n            <p class=\"mainpage_accordion__title\"> {{child.propertyName}} </p>\n          </div>\n          </div>\n             \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-sm pt-0 al\" style=\"background-color: #647177;padding-bottom: 0rem;\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"./assets/Re.png\" class=\"img-fluid\">\n        </div>\n        <div class=\"animate__animated animate__fadeInDown timeline-content animate__delay-10s col-md-6 order-md-1 \" style=\"color:white\">\n          <div class=\"pr-md-5\" >\n            <h2 data-aos=\"fade-up\"\n            data-aos-easing=\"ease-out-cubic\"\n            data-aos-duration=\"2000\"  class=\"display-3 text-white\">Join The Community</h2>\n            <div data-aos=\"fade-up\"\n            data-aos-easing=\"ease-out-cubic\"\n            data-aos-duration=\"2000\"  class=\"d-flex align-items-center\">\n            <p class=\"mt-2 mb-2 text-white\"> Diverse Discord already has over 40,000 plus members!!\n              If you want to join the diverse discord its here!\n              Join us to get the news as soon as possible and follow our latest announcements <br/><br/>\n            \nYou're never alone<br/>\nTogether we are Strong <br/>\nWe are One!!\n            </p>\n  \n          </div>\n            \n            <ul class=\"list-unstyled mt-2\">\n              <li >\n                <div class=\"row d-flex align-items-center\">\n                  <div class=\"col-sm-2 col-lg-6 col-md-5 ml-0 mt-2 \">\n                    <button data-aos=\"fade-up\"\n                    data-aos-easing=\"ease-out-cubic\"\n                    data-aos-duration=\"2000\"   class=\"btn\"  style=\"background-color: cornflowerblue; color: white;\" type=\"button\"><a href=\"https://discord.gg/diverse/\" style=\"color: white;\">JOIN OUR DISCORD</a></button>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- <section class=\"section section-lg bg-gradient-default\">\n    <div class=\"container pt-lg pb-300\">\n      <div class=\"row text-center justify-content-center\">\n        <div class=\"col-lg-10\">\n          <h2 class=\"display-3 text-white\">Build something</h2>\n          <p class=\"lead text-white\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice.</p>\n        </div>\n      </div>\n      <div class=\"row row-grid mt-5\">\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-settings text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Building tools</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-ruler-pencil text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Grow your market</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\n            <i class=\"ni ni-atom text-primary\"></i>\n          </div>\n          <h5 class=\"text-white mt-3\">Launch time</h5>\n          <p class=\"text-white mt-3\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 section-contact-us\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center mt--300\">\n        <div class=\"col-lg-8\">\n          <div class=\"card bg-gradient-secondary shadow\">\n            <div class=\"card-body p-lg-5\">\n              <h4 class=\"mb-1\">Want to work with us?</h4>\n              <p class=\"mt-0\">Your project is very important to us.</p>\n              <div class=\"form-group mt-5\" [ngClass]=\"{'focused':focus===true}\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Your name\" type=\"text\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                  </div>\n                  <input class=\"form-control\" placeholder=\"Email address\" type=\"email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                </div>\n              </div>\n              <div class=\"form-group mb-4\">\n                <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n              </div>\n              <div>\n                <button type=\"button\" class=\"btn btn-default btn-round btn-block btn-lg\">Send Message</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section> \n  <section class=\"section section-lg\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Do you love this awesome\n            <span class=\"text-success\">Design System for Angular?</span>\n          </h2>\n          <p class=\"lead\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim where you can find the Design System in Angular. Start a new project or give an old Angular project a new look!</p>\n          <div class=\"btn-wrapper\">\n            <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" class=\"btn btn-primary mb-3 mb-sm-0\">Download Angular</a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Bootstrap 4 - Most popular front-end component library\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/argon-design-system-angular?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Angular - One framework. Mobile &amp; desktop\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.creative-tim.com/product/vue-argon-design-system?ref=adsa-landing-page\" target=\"_blank\" placement=\"top\" ngbTooltip=\"Vue.js - The progressive javascript framework\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\" class=\"img-fluid\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.sketchapp.com/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Sketch - Digital design toolkit\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://www.adobe.com/products/photoshop.html?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n              <div class=\"col-lg-2 col-4\">\n                <a href=\"https://reactjs.org/?ref=creative-tim\" target=\"_blank\" placement=\"top\" ngbTooltip=\"[Coming Soon] React - A JavaScript library for building user interfaces\">\n                  <img src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\" class=\"img-fluid opacity-3\">\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>-->\n</main>\n<app-footer></app-footer>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.show = true;
        this.title = 'angularTests';
        this.list = ['YOU’RE NOT ALONE,', 'TOGETHER WE ARE STRONG, WE ARE ONE'];
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("coninit");
        this.show = true;
        var navbar = this.element.nativeElement.children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("contentinit");
        setTimeout(function () {
            _this.show = false; // <<<---using ()=> syntax
        }, 11000);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['window:scroll', ['$event'],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <app-main-page *ngIf=\"show\"></app-main-page>\n\n  <app-landing *ngIf=\"!show\"></app-landing>\n\n");

/***/ }),

/***/ "YJFP":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-screen-wrapper {\r\n    z-index: 100000;\r\n    position: absolute;\r\n    background-color: rgba(255, 255, 255, 0.6);\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n  }\r\n  \r\n  .loading-screen-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctc2NyZWVuLXdyYXBwZXIge1xyXG4gICAgei1pbmRleDogMTAwMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmctc2NyZWVuLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-slick-carousel */ "eSVu");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-animate-on-scroll */ "wR1u");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_15__["MainPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_11__["SlickCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_wow__WEBPACK_IMPORTED_MODULE_12__["NgwWowModule"],
                angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_13__["AngularTypewriterEffectModule"],
                ng2_animate_on_scroll__WEBPACK_IMPORTED_MODULE_14__["AnimateOnScrollModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] },
    { path: '', redirectTo: 'main', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" style=\"background-color: rgb(31, 31, 31);color: beige;text-align: center;\">\n \n  <div class=\"container\" >\n    <div class=\"row align-items-center justify-content-md-between\">\n      <div class=\"col-lg-12\">\n        <div class=\"copyright\">Copyrights\n          &copy; {{test | date: 'yyyy'}} <strong>Diverse</strong> All Rights Reserved. Made with ❤️ by\n          <a href=\"https://degen.rocks/\" target=\"_blank\" style=\"color: white;\"><strong>Degen Rocks</strong></a>.\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "vMfD":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"position-relative\" style=\"background-color: black;height: 100vh;\">\n    <!-- Hero for FREE version -->\n    <section class=\"section section-lg section-hero\" style=\"background-color: black;\">\n      <!-- Background circles -->\n      <div class=\"shape shape-style-1 shape-primary\">\n        <span class=\"span-150\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-75\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        <span class=\"span-50\"></span>\n        <span class=\"span-100\"></span>\n        \n      </div>\n      <div class=\"container shape-container d-flex align-items-center py-lg\">\n        <div class=\"col px-20\">\n          <div class=\"row align-items-center justify-content-center\">\n            <div class=\"col-lg-6 text-center\">\n              <img src=\"./assets/logo.png\" style=\"width: 100%;\" class=\"img-fluid pt-30\">\n              <h1 class=\"text-muted pt-30\" style=\"font-size: 48px;margin-top: 18%;\">    \n                  <ngtypewriter [StringList]='list' [speed]='1000'></ngtypewriter>\n              </h1>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- SVG separator -->\n      \n    </section>\n \n  </div>");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-overlay {\n  left: 0 !important;\n  top: 0 !important;\n  z-index: 10000 !important;\n  width: 100% !important;\n  height: 100% !important;\n  position: fixed !important;\n  background-color: rgba(0, 0, 0, 0.9) !important;\n  cursor: pointer !important;\n  visibility: visible !important;\n  transition: visibility 0s, opacity 0.4s linear !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: wait !important;\n}\n\n.my-overlay i.fa.fa-spinner.fa-spin, .spinner-big {\n  font-size: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyQkFBQTtBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vdmVybGF5IHtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMsIG9wYWNpdHkgMC40cyBsaW5lYXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHdhaXQgIWltcG9ydGFudDtcclxufVxyXG4ubXktb3ZlcmxheSBpLmZhLmZhLXNwaW5uZXIuZmEtc3BpbiwgLnNwaW5uZXItYmlnIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom headroom--top headroom--pinned\">\n  <div class=\"container\">\n    <a class=\"navbar-brand mr-lg-5 navbar-dark\">\n      <img src=\"\">\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n          \n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbar_global\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\n        <li class=\"nav-item dropdown\">\n         \n          <div class=\"dropdown-menu-xl dropdown-menu\" >\n            <div class=\"dropdown-menu-inner\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/tutorial']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-primary rounded-circle text-white\">\n                  <i class=\"ni ni-spaceship\"></i>\n                </div>\n                <div class=\"media-body ml-3\">\n                  <h6 class=\"heading text-primary mb-md-1\">Getting started</h6>\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn how to use Argon compiling Scss, change brand colors and more.</p>\n                </div>\n              </a>\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/colors']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-success rounded-circle text-white\">\n                  <i class=\"ni ni-palette\"></i>\n                </div>\n                <div class=\"media-body ml-3\">\n                  <h6 class=\"heading text-primary mb-md-1\">Foundation</h6>\n                  <p class=\"description d-none d-md-inline-block mb-0\">Learn more about colors, typography, icons and the grid system we used for Argon.</p>\n                </div>\n              </a>\n              <a routerLinkActive=\"active\" [routerLink]=\"['documentation/alerts']\" class=\"media d-flex align-items-center\">\n                <div class=\"icon icon-shape bg-gradient-warning rounded-circle text-white\">\n                  <i class=\"ni ni-ui-04\"></i>\n                </div>\n              </a>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <div class=\"dropdown-menu\">\n            <a [routerLink]=\"['/landing']\" class=\"dropdown-item\">Landing</a>\n            <a [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">Profile</a>\n            <a [routerLink]=\"['/login']\" class=\"dropdown-item\">Login</a>\n            <a [routerLink]=\"['/register']\" class=\"dropdown-item\">Register</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://opensea.io/collection/diversegenesis\" target=\"_blank\" data-toggle=\"tooltip\" title=\"discord\">\n            OpenSea\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://instagram.com/diverse\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Instagram\">\n          Instagram\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" href=\"https://twitter.com/diverse\" target=\"_blank\" data-toggle=\"tooltip\" title=\"Follow us on Twitter\">\n              \n         Twitter\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map