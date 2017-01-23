webpackJsonp([4,7],{

/***/ 1107:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(456);


/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this._message = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.message = this._message.asObservable();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this._message.next(null);
                }
            }
        });
    }
    AlertService.prototype.success = function (summary, detail, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'success', summary: summary, detail: detail });
    };
    AlertService.prototype.info = function (summary, detail, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'info', summary: summary, detail: detail });
    };
    AlertService.prototype.warn = function (summary, detail, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'warn', summary: summary, detail: detail });
    };
    AlertService.prototype.error = function (summary, detail, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this._message.next({ severity: 'error', summary: summary, detail: detail });
    };
    AlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AlertService);
    return AlertService;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/alert.service.js.map

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppSettings; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSettings = (function () {
    function AppSettings() {
        this.api_url = "http://localhost:5000/api/";
        this.base_url = "http://localhost:5000";
    }
    AppSettings = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppSettings);
    return AppSettings;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/app-settings.js.map

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthTokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthTokenService = (function () {
    function AuthTokenService(http, appSettings) {
        this.http = http;
        this.appSettings = appSettings;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
    }
    AuthTokenService.prototype.getTokens = function (data, grantType) {
        var _this = this;
        // data can be any since it can either be a refresh tokens or login details
        // The request for tokens must be x-www-form-urlencoded
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        Object.assign(data, {
            grant_type: grantType,
            // offline_access is required for a refresh token
            scope: ['openid+email+name+profile+roles offline_access']
        });
        return this.http.post(this.appSettings.base_url + '/connect/token', this.encodeObjectToParams(data), options)
            .map(function (res) { return res.json(); })
            .map(function (tokens) {
            var now = new Date();
            tokens.expiration_date = new Date(now.getTime() + tokens.expires_in * 1000).getTime().toString();
            var user = _this.jwtHelper.decodeToken(tokens.id_token);
            localStorage.setItem('id_token', JSON.stringify(tokens));
        });
    };
    AuthTokenService.prototype.deleteTokens = function () {
        localStorage.removeItem('id_token');
    };
    AuthTokenService.prototype.encodeObjectToParams = function (obj) {
        return Object.keys(obj)
            .map(function (key) { return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); })
            .join('&');
    };
    AuthTokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === 'function' && _b) || Object])
    ], AuthTokenService);
    return AuthTokenService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/auth-token.service.js.map

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AlertModule; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__alert_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlertModule = (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AlertModule);
    return AlertModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/alert.module.js.map

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_service__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_token_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return AuthModule; });
/* unused harmony reexport AuthGuard */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a"]; });
/* unused harmony reexport AuthTokenService */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3__user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_4__auth_token_service__["a" /* AuthTokenService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/auth.module.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(832),
            styles: [__webpack_require__(825)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/about.component.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.currDate = Date.now();
        this.opened = false;
    }
    HomeComponent.prototype.toggleMainBar = function () {
        this.opened = !this.opened;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            {
                label: "Projects",
                icon: "fa-dashboard",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/project"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                    }
                ]
            },
            {
                label: "Data Objects",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/data-object"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                        routerLink: ["/pages/data-object/edit"]
                    }
                ]
            },
            {
                label: "Maps",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/map"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                        routerLink: ["/pages/map/edit"]
                    }
                ]
            },
            {
                label: "Admin Tools",
                icon: "fa-cog",
                items: [
                    {
                        label: "Users",
                        icon: "fa-users",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/user"]
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    },
                    {
                        label: "Clients",
                        icon: "fa-user",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/client"]
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    }
                ]
            }
        ];
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__(834),
            styles: [__webpack_require__(827)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/home.component.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(835),
            styles: [__webpack_require__(828)]
        }), 
        __metadata('design:paramtypes', [])
    ], OverviewComponent);
    return OverviewComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/overview.component.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, route, router, userAuthService, alertService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.userAuthService = userAuthService;
        this.alertService = alertService;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.userAuthService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm = this.fb.group({
            'username': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomValidators"].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]
        });
    };
    LoginComponent.prototype.submitForm = function () {
        var _this = this;
        this.userAuthService.login(this.loginForm.value)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error("Error occurred during login", error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__(836),
            styles: [__webpack_require__(829)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_module__["a" /* UserAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_module__["a" /* UserAuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _e) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/login.component.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('id_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/auth-guard.js.map

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_token_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserAuthService = (function () {
    function UserAuthService(http, authTokens) {
        this.http = http;
        this.authTokens = authTokens;
    }
    UserAuthService.prototype.register = function (user) {
        return this.http.post('api/account/', user)
            .catch(function (res) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json()); });
    };
    UserAuthService.prototype.login = function (user) {
        return this.authTokens.getTokens(user, 'password').catch(function (res) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res.json()); });
    };
    UserAuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        this.authTokens.deleteTokens();
    };
    UserAuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_token_service__["a" /* AuthTokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_token_service__["a" /* AuthTokenService */]) === 'function' && _b) || Object])
    ], UserAuthService);
    return UserAuthService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user-auth.service.js.map

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    /*constructor(private authHttp: AuthHttp, private appSettings: AppSettings) {
        this.api_url = this.appSettings.api_url;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
    }*/
    function DataService(http, appSettings, alertService) {
        this.http = http;
        this.appSettings = appSettings;
        this.alertService = alertService;
        this.api_url = this.appSettings.api_url;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
    }
    DataService.prototype.GetAll = function (action) {
        var _this = this;
        return this.http.get(this.api_url + action)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.Get = function (action, id) {
        var _this = this;
        return this.http.get(this.api_url + action + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.Add = function (action, itemToAdd) {
        var _this = this;
        return this.http.post(this.api_url + action, JSON.stringify(itemToAdd), { headers: this.headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.Update = function (action, id, itemToUpdate) {
        var _this = this;
        return this.http
            .put(this.api_url + action + "/" + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .catch(function (error) { return _this.handleError(error); });
    };
    DataService.prototype.Delete = function (action, id) {
        var _this = this;
        return this.http.delete(this.api_url + action + "/" + id)
            .catch(function (error) { return _this.handleError(error); });
    };
    /*GetAll(action: string): Observable<any> {
       return this.authHttp.get(this.api_url + action)
           .map(res => res.json())
           .catch(this.handleError);
   }

   Get(action: string, id: number): Observable<any> {
       return this.authHttp.get(this.api_url + action + "/" + id)
           .map(res => res.json())
           .catch(this.handleError);
   }

   Add(action: string, itemToAdd: any): Observable<any> {
       return this.authHttp.post(this.api_url + action, JSON.stringify(itemToAdd), { headers: this.headers })
           .map(res => res.json())
           .catch(this.handleError);
   }

   Update(action: string, id: number, itemToUpdate: any): Observable<any> {
       return this.authHttp
           .put(this.api_url + action + "/" + id, JSON.stringify(itemToUpdate), { headers: this.headers })
           .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
   }

   Delete(action: string, id: number): Observable<any> {
       return this.authHttp.delete(this.api_url + action + "/" + id)
           .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
   }*/
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        var errMsg = (error.message)
            ? error.message
            : error.status ? error.status + " - " + error.statusText : "Server Error";
        this.alertService.error("Server Error", "Please consult an admin for help");
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */]) === 'function' && _c) || Object])
    ], DataService);
    return DataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data.service.js.map

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileUploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploadService = (function () {
    function FileUploadService(_http) {
        this._http = _http;
        this.progressObserver = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](0);
    }
    FileUploadService.prototype.makeFileRequest = function (url, paramNames, params, files) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
        }
        for (var i = 0; i < paramNames.length; i++) {
            formData.append(paramNames[i], params[i]);
        }
        return this._http.post("api/" + url, formData).map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server Error"); });
    };
    FileUploadService.prototype.makeFileRequestFd = function (url, formData) {
        return this._http.post("api/" + url, formData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || "Server Error"); });
    };
    FileUploadService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], FileUploadService);
    return FileUploadService;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/file-upload.service.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/client/client.module": [
		1109,
		3
	],
	"app/data-object/data-object.module": [
		1110,
		0
	],
	"app/map/map.module": [
		1111,
		1
	],
	"app/user/user.module": [
		1112,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 455;


/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(579);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/main.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_service__ = __webpack_require__(381);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return DataModule; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__data_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__file_upload_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataModule = (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__file_upload_service__["a" /* FileUploadService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DataModule);
    return DataModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data.module.js.map

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(377);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'pages', redirectTo: 'pages/overview' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/app-routing.module.js.map

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.currDate = new Date();
        // Sets initial value to true to show loading spinner on first load
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationCancel"]) {
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(833),
            styles: [__webpack_require__(826)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/app.component.js.map

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_module__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_ui_loading_dots_loading_dots_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_settings__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_ui_loading_dots_loading_dots_component__["a" /* LoadingDotsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_module__["b" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_alert_alert_module__["b" /* AlertModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_data_data_module__["c" /* DataModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__app_settings__["a" /* AppSettings */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/app.module.js.map

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__(375);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'pages', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */], children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_2__overview_overview_component__["a" /* OverviewComponent */] },
            { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
            { path: 'client', loadChildren: 'app/client/client.module#ClientModule' },
            { path: 'data-object', loadChildren: 'app/data-object/data-object.module#DataObjectModule' },
            { path: 'map', loadChildren: 'app/map/map.module#MapModule' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] }
        ] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/home-routing.module.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overview_overview_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__(374);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["PanelMenuModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__overview_overview_component__["a" /* OverviewComponent */], __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/home.module.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.messages = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.message.subscribe(function (message) {
            if (message)
                _this.messages.push(message);
        });
    };
    AlertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__(837),
            styles: [__webpack_require__(830)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]) === 'function' && _a) || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/alert.component.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoadingDotsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingDotsComponent = (function () {
    function LoadingDotsComponent() {
    }
    LoadingDotsComponent.prototype.ngOnInit = function () {
    };
    LoadingDotsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading-dots',
            template: __webpack_require__(838),
            styles: [__webpack_require__(831)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingDotsComponent);
    return LoadingDotsComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/loading-dots.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/environment.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/polyfills.js.map

/***/ },

/***/ 825:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 826:
/***/ function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n"

/***/ },

/***/ 827:
/***/ function(module, exports) {

module.exports = ".fixed-top {\r\n    z-index: 1;\r\n}"

/***/ },

/***/ 828:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 829:
/***/ function(module, exports) {

module.exports = ".resize-login-image {\r\n    width: 200px;\r\n    height: auto;\r\n}"

/***/ },

/***/ 830:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "/* CSS Loading Spinner Styling */\r\n.spinner {\r\n  margin: 100px auto 0;\r\n  width: 70px;\r\n  text-align: center;\r\n}\r\n\r\n.spinner > div {\r\n  width: 18px;\r\n  height: 18px;\r\n  background-color: #522786;\r\n\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n}\r\n\r\n.spinner .bounce1 {\r\n  -webkit-animation-delay: -0.32s;\r\n  animation-delay: -0.32s;\r\n}\r\n\r\n.spinner .bounce2 {\r\n  -webkit-animation-delay: -0.16s;\r\n  animation-delay: -0.16s;\r\n}\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n  0%, 80%, 100% { -webkit-transform: scale(0) }\r\n  40% { -webkit-transform: scale(1.0) }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n  0%, 80%, 100% { \r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n  } 40% { \r\n    -webkit-transform: scale(1.0);\r\n    transform: scale(1.0);\r\n  }\r\n}"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n    <h1>About GTiHub</h1>\r\n    <p>\r\n      The Grant Thornton Integration Hub (GTiHub) was developed in order to assist with integrating file resources into Oracle systems, however\r\n      the conversion features can be used with any target system in which custom data formats are required.\r\n    </p>\r\n    <p>\r\n      The instructions below should answer any questions you may have about the terminology and usage procedures within iHub. \r\n    </p>\r\n</div>\r\n<div class=\"container\" style=\"padding-bottom: 50px\">\r\n    <section>\r\n        <h2>Terminology</h2>\r\n        <p>Terms and Definitions are roughly ordered in terms of granularity (i.e. a field is a part of a source, which is part of a transformation, etc.) </p>\r\n        <table class=\"table table-responsive\">\r\n          <tr>\r\n            <td>Field</td>\r\n            <td>Fields can be thought of as single column headers in a data table, or as one value in a delimited list of values. Fields exist in both Sources \r\n              and Targets, and the fields can have a number of different user-defined data types. \r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Source</td>\r\n            <td>A flat file with a file type of <b>.txt, .dat, or .csv</b> from which some or all fields are taken and converted or formatted to a Target.</td>\r\n          </tr>\r\n          <tr>\r\n            <td>Target</td>\r\n            <td>Represents a pre-defined output format as chosen by the user and which is the result of performing a Mapping one or more sources. \r\n              Can be a flat file with type <b>.txt, .dat, or .csv</b>, as chosen by the user at the time of running the Map.</td>\r\n          </tr>\r\n           <tr>\r\n            <td>Transformation</td>\r\n            <td>A single action of converting one or more Source Fields to a single Target Field. For example, the operation \r\n              \"Convert Source Field X to Target Field Y if Source Field X equals '2016'\"\" would be a single Transformation. A single Transformation may contain at \r\n              most one Rule, but may contain zero or more Conditions.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Rule</td>\r\n            <td>\r\n              The operation to be performed for a given transformation, for the example in the definition of Transformation the Rule would be \"Convert Source Field X to Target Field Y\".\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Condition</td>\r\n            <td>\r\n              A condition is what determines if the Transformation takes place or not for a given field in a given row of data. In the example for Transformation,\r\n              the Condition is the \"if Source Field X equals '2016'\" part.\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Map</td>\r\n            <td>\r\n              A collection of Transformations which defines the overall pattern for transforming one or more Sources to one or more Targets. For example, a map may contain three \r\n              Transformations, each of which specifies actions to be taken for translating Source Fields to Target Fields.\r\n            </td>\r\n          </tr>\r\n        </table>\r\n    </section>\r\n    <section>\r\n        <h2>Integrating Sources and Outputting to Targets</h2>\r\n        <p>\r\n          The general flow for using iHub is as follows:\r\n        </p>\r\n        <ol>\r\n            <li>\r\n              Gather the files you need to perform a complete mapping\r\n            </li>\r\n            <li>\r\n              Define Sources and Targets using those files\r\n            </li>\r\n            <li>\r\n              Create a new Map for containing the Transformations\r\n            </li>\r\n            <li>\r\n              Create Transformations within the Map you created\r\n            </li>\r\n            <li>\r\n              Run the Map you created\r\n            </li>\r\n        </ol>\r\n        <h3>File Formats</h3>\r\n        <p>As stated before, the file formats currently accepted for use within GTiHub are <b>.txt, .dat, and .csv</b> files. The files must be in a delimited format,\r\n          and any delimiter may be used, so long as it cannot be found within the contents of the field itself or otherwise misinterpreted. For example, if a comma delimited file is provided and \r\n          commas exist within fields in the row of data specified as the header row, or within some row of data below the header, then the result can be either too many header\r\n          fields read in or errors on attempting to transform the data.\r\n        </p>\r\n        <h3>Defining Sources and Targets</h3>\r\n        <p>\r\n          Defining Sources and Targets follows similar procedures. Provide a name and description for the Source and Target, where the name is typically the name of the \r\n          file being used as a template / input for Sources, or the name of the expected output file for a Target. Specify the effective date and whether or not the Source/Target is active.\r\n          After this, provide a template file with data in the first row, or manually specify the fields for the Source or Target.\r\n        </p>\r\n        <h3>Creating Transformations</h3>\r\n        <p>\r\n          Upon creating a new Map, one can define the Transformations within it which will specify how and when to transform data from Source to Target, and in what format.\r\n          \r\n        </p>\r\n    </section>\r\n</div>"

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div *ngIf=\"loading\" class=\"center-container\">\r\n    <loading-dots></loading-dots>\r\n</div>\r\n<footer class=\"footer\">\r\n    <div class=\"container\"><p>&copy; Grant Thornton LLP - {{ currDate | date:'y' }}</p></div>\r\n</footer>\r\n<alert></alert>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 834:
/***/ function(module, exports) {

module.exports = "<ng-sidebar-container>\r\n    <ng-sidebar [(opened)]=\"opened\" [closeOnClickOutside]=\"true\" [mode]=\"'push'\" [position]=\"'right'\" [closeOnClickOutside]=\"true\" [keyClose]=\"true\" [keyClose]=\"true\">\r\n        <p-panelMenu [model]=\"menuItems\"></p-panelMenu>\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"width: 100%\" (click)=\"toggleMainBar()\">\r\n            <span class=\"fa fa-close\"></span>\r\n            Close\r\n        </button>\r\n    </ng-sidebar>\r\n    <nav class=\"navbar navbar-light fixed-top bg-faded\">\r\n        <div class=\"form-inline\">\r\n            <a routerLink=\"/pages/overview\">\r\n                <img src=\"../../assets/images/grant-thornton-swirl-sm.png\" alt=\"GTiHub\">\r\n            </a> \r\n            <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-left: 10px;\" (click)=\"toggleMainBar()\">\r\n                <span class=\"fa fa-bars\"></span>\r\n                Menu\r\n            </button>\r\n        </div>\r\n    </nav>\r\n    <div class=\"container-fluid add-margin-main-body\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</ng-sidebar-container>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 835:
/***/ function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-3\">Welcome to Grant Thornton iHub</h1>\r\n    <p>This website is used to transform flat files such as .dat, .csv, and .txt to formats usable by Oracle Cloud products. To learn more about how to begin transforming your files, click the button below.</p>\r\n    <p><a class=\"btn btn-primary btn-lg\" routerLink=\"/pages/about\" role=\"button\">Learn more &raquo;</a></p>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n\r\n</div>\r\n<div class=\"container\">\r\n  <!-- Example row of columns -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h2>All Sources</h2>\r\n      <p>View Sources from all Projects</p>\r\n      <p><a class=\"btn btn-secondary\" routerLink=\"/pages/source\" role=\"button\">View All Sources &raquo;</a></p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h2>All Targets</h2>\r\n      <p>View Targets from all Projects</p>\r\n      <p><a class=\"btn btn-secondary\" routerLink=\"/pages/target\" role=\"button\">View All Targets &raquo;</a></p>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <h2>All Maps</h2>\r\n      <p>View Maps from all Projects</p>\r\n      <p><a class=\"btn btn-secondary\" routerLink=\"/pages/map\" role=\"button\">View All Maps &raquo;</a></p>\r\n    </div>\r\n  </div>\r\n</div>\r\n    \r\n"

/***/ },

/***/ 836:
/***/ function(module, exports) {

module.exports = "<div class=\"center-container\">\r\n    <div class=\"card\">\r\n        <div class=\"card-block center-block\">\r\n            <img class=\"card-img-top\" src=\"../../assets/images/grant-thornton-logo-lg.jpg\" style=\"width: 318px; height: auto;\" alt=\"GTiHub\">\r\n        </div>\r\n        \r\n        <div class=\"card-block\">\r\n            <h2 class=\"card-title\">Login to GTiHub</h2>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!loginForm.controls['username'].valid && loginForm.controls['username'].touched}\">\r\n                    <label>Email/Username:</label>\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"user@example.com\" [formControl]=\"loginForm.controls['username']\">\r\n                    <div *ngIf=\"loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched\" class=\"alert alert-danger\">Enter valid email.</div>\r\n                    <div *ngIf=\"loginForm.controls['username'].hasError('email') && loginForm.controls['username'].touched\" class=\"alert alert-danger\">Email must be valid format.</div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}\">\r\n                    <label>Password:</label>\r\n                    <input class=\"form-control\" type=\"password\" placeholder=\"Password\" [formControl]=\"loginForm.controls['password']\">\r\n                    <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">Enter valid password.</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>           \r\n</div>\r\n"

/***/ },

/***/ 837:
/***/ function(module, exports) {

module.exports = "<p-growl [value]=\"messages\"></p-growl>"

/***/ },

/***/ 838:
/***/ function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n  <div class=\"bounce1\"></div>\r\n  <div class=\"bounce2\"></div>\r\n  <div class=\"bounce3\"></div>\r\n</div>"

/***/ }

},[1107]);
//# sourceMappingURL=main.bundle.map