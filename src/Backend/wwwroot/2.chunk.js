webpackJsonp([2,7],{

/***/ 1112:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__(1118);
/* harmony export (binding) */ __webpack_require__.d(exports, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MultiSelectModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__user_edit_user_edit_component__["a" /* UserEditComponent */], __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__["a" /* UserListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"]]
        }), 
        __metadata('design:paramtypes', [])
    ], UserModule);
    return UserModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user.module.js.map

/***/ },

/***/ 1118:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_module__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(dataService, userAuthService) {
        this.dataService = dataService;
        this.userAuthService = userAuthService;
        this._users = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.users = this._users.asObservable();
        this._editUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.editUser = this._editUser.asObservable();
        this.editing = false;
        this.initEditUser();
        this.dataStore = { users: [] };
        // Get the list of users
        this.loadall();
    }
    UserService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("users")
            .subscribe(function (users) {
            _this.dataStore.users = users;
            _this._users.next(_this.dataStore.users);
        }, function (error) { return console.log(error); }, function () { });
    };
    UserService.prototype.setEditUser = function (edit) {
        this._editUser.next(edit);
        this.editing = true;
    };
    UserService.prototype.initEditUser = function () {
        this._editUser.next(this.newUser());
    };
    UserService.prototype.newUser = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]('', '', '', []);
    };
    UserService.prototype.submit = function (user) {
        if (this.editing) {
            this.update(user);
        }
        else {
            this.add(user);
        }
        this.editing = false;
    };
    UserService.prototype.add = function (user) {
        var _this = this;
        this.userAuthService.register(user).subscribe(function (user) {
            _this.dataStore.users.push(user);
            _this._users.next(_this.dataStore.users);
        }, function (error) { return console.log(error); });
    };
    UserService.prototype.update = function (user) {
        var _this = this;
        this.dataService.Update('users', user.id, user).subscribe(function (user) {
            _this.dataStore.users.forEach(function (m, i) {
                if (m.id === user.id) {
                    _this.dataStore.users[i] = user;
                }
            });
            _this._users.next(_this.dataStore.users);
        }, function (error) { return console.log(error); });
    };
    UserService.prototype.delete = function (userId) {
        var _this = this;
        this.dataService.Delete('users', userId).subscribe(function (response) {
            _this.dataStore.users.forEach(function (m, i) {
                if (m.id === userId) {
                    _this.dataStore.users.splice(i, 1);
                }
            });
            _this._users.next(_this.dataStore.users);
        }, function (error) { return console.log(error); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_module__["a" /* UserAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_auth_module__["a" /* UserAuthService */]) === 'function' && _b) || Object])
    ], UserService);
    return UserService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user.service.js.map

/***/ },

/***/ 1131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(confirmationService, userService) {
        this.confirmationService = confirmationService;
        this.userService = userService;
        this.showDialog = false;
        this.canDelete = false;
        this.canEdit = false;
        this.selectedUsers = [];
        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'title', header: 'Title' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'created_By', header: 'Created By' },
            { field: 'creation_Date', header: 'Creation Date' },
            { field: 'modified_By', header: 'Modified By' },
            { field: 'date_Modified', header: 'Date Modified' }
        ];
    }
    UserListComponent.prototype.showEditingDialog = function () {
        this.showDialog = true;
    };
    UserListComponent.prototype.editUser = function () {
        this.userService.setEditUser(this.selectedUsers[0]);
        this.showEditingDialog();
    };
    UserListComponent.prototype.deleteUsers = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected user(s)?",
            accept: function () {
                _this.selectedUsers.forEach(function (c, i) {
                    _this.userService.delete(c.id);
                });
                _this.selectedUsers = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    };
    //Update the state of the delete and edit buttons based on row selection
    UserListComponent.prototype.onRowSelect = function (event) {
        if (this.selectedUsers.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
    };
    UserListComponent.prototype.onRowUnselect = function (event) {
        if (this.selectedUsers.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedUsers.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.users.subscribe(function (users) { return _this.users = users; });
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    };
    UserListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(1234),
            styles: [__webpack_require__(1203)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], UserListComponent);
    return UserListComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user-list.component.js.map

/***/ },

/***/ 1132:
/***/ function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,f=e.placeholderChar,s=e.placeholder,c=e.indexesOfPipedChars,d=void 0===c?n:c,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=s.length,y=u.length,C=h-m,b=C>0,j=0===m,O=C>1&&!b&&!j;if(O)return a;var P=b&&(t===u||u===s),x=0;if(P?x=a-C:!function(){for(var e=u.toLowerCase(),r=l.toLowerCase(),t=r.substr(0,a).split(o),n=t.filter(function(r){return e.indexOf(r)!==-1}),i=n[n.length-1],c=d.map(function(r){return e[r]}),p=c.filter(function(e){return e===i}).length,v=n.filter(function(e){return e===i}).length,h=s.substr(0,s.indexOf(f)).split(o).filter(function(e,r){return e===i&&l[r]!==e}).length,m=h+v+p,g=0,C=0;C<y;C++){var b=e[C];if(x=C+1,b===i&&g++,g>=m)break}}(),b){for(var k=x,V=x;V<=g;V++)if(s[V]===f&&(k=V),s[V]===f||v.indexOf(V)!==-1||V===g)return k}else for(var w=x;w>=0;w--)if(s[w-1]===f||v.indexOf(w)!==-1||0===w)return w}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,c=void 0===s?i.placeholderChar:s,d=t.placeholder,p=void 0===d?(0,o.convertMaskToPlaceholder)(r,c):d,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==f,g=e.length,y=f.length,C=p.length,b=r.length,j=g-y,O=j>0,P=v+(O?-j:0),x=P+Math.abs(j);if(h===!0&&!O){for(var k=a,V=P;V<x;V++)p[V]===c&&(k+=c);e=e.slice(0,P)+k+e.slice(P,g)}for(var w=e.split(a).map(function(e,r){return{char:e,isNew:r>=P&&r<x}}),M=g-1;M>=0;M--){var T=w[M].char;if(T!==c){var _=M>=P&&y===b;T===p[_?M-j:M]&&w.splice(M,1)}}var R=a,S=!1;e:for(var N=0;N<C;N++){var E=p[N];if(E===c){if(w.length>0)for(;w.length>0;){var I=w.shift(),J=I.char,A=I.isNew;if(J===c&&m!==!0){R+=c;continue e}if(r[N].test(J)){if(h===!0&&A!==!1&&f!==a&&u!==!1&&O){for(var L=w.length,W=null,q=0;q<L;q++){var z=w[q];if(z.char!==c&&z.isNew===!1)break;if(z.char===c){W=q;break}}null!==W?(R+=J,w.splice(W,1)):N--}else R+=J;continue e}S=!0}m===!1&&(R+=p.substr(N,C));break}R+=E}if(m&&O===!1){for(var B=null,D=0;D<R.length;D++)p[D]===c&&(B=D);R=null!==B?R.substr(0,B+1):a}return{conformedValue:R,meta:{someCharsRejected:S}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=e.mask,n=e.guide,o=e.pipe,f=e.placeholderChar,c=void 0===f?v.placeholderChar:f,g=e.onAccept,C=e.onReject,b=e.keepCharPositions,j=void 0!==b&&b;("undefined"==typeof t?"undefined":l(t))===y&&void 0!==t.pipe&&void 0!==t.mask&&(o=t.pipe,t=t.mask);var O={previousConformedValue:m,previousOnRejectRawValue:m},P=void 0,x=void 0;return t instanceof Array&&(P=(0,p.convertMaskToPlaceholder)(t,c)),{state:O,update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.value;if(e!==O.previousConformedValue){var f=a(e),v=r.selectionStart,y=O.previousConformedValue,b=void 0;if(("undefined"==typeof t?"undefined":l(t))===h){x=t(f,{currentCaretPosition:v,previousConformedValue:y,placeholderChar:c});var k=(0,p.processCaretTraps)(x),V=k.maskWithoutCaretTraps,w=k.indexes;x=V,b=w,P=(0,p.convertMaskToPlaceholder)(x,c)}else x=t;var M={previousConformedValue:y,guide:n,placeholderChar:c,pipe:o,placeholder:P,currentCaretPosition:v,keepCharPositions:j},T=(0,d.default)(f,x,M),_=T.conformedValue,R=T.meta.someCharsRejected,S=("undefined"==typeof o?"undefined":l(o))===h,N={};S&&(N=o(_,u({rawValue:f},M)),N===!1?N={value:y,rejected:!0}:(0,p.isString)(N)&&(N={value:N}));var E=S?N.value:_,I=(0,s.default)({previousConformedValue:y,conformedValue:E,placeholder:P,rawValue:f,currentCaretPosition:v,placeholderChar:c,indexesOfPipedChars:N.indexesOfPipedChars,caretTrapIndexes:b}),J=E===P&&0===I,A=J?m:E;if(O.previousConformedValue=A,r.value!==A){r.value=A,i(r,I),("undefined"==typeof g?"undefined":l(g))===h&&A!==y&&A!==P&&(O.previousOnRejectRawValue=null,g());var L=f.length<y.length;("undefined"==typeof C?"undefined":l(C))===h&&(R||N.rejected)&&L===!1&&O.previousOnRejectRawValue!==e&&(O.previousOnRejectRawValue=e,C({conformedValue:E,pipeRejection:N.rejected,maskRejection:R}))}}}}}function i(e,r){document.activeElement===e&&e.setSelectionRange(r,r,g)}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var f=t(2),s=n(f),c=t(3),d=n(c),p=t(4),v=t(1),h="function",m="",g="none",y="object"}])});

/***/ },

/***/ 1168:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(1118);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserEditComponent = (function () {
    function UserEditComponent(_fb, userService) {
        this._fb = _fb;
        this.userService = userService;
        this.phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    UserEditComponent.prototype.onSubmit = function (user) {
        this.userService.submit(user);
        this.reset();
    };
    UserEditComponent.prototype.initUserForm = function () {
        this.userForm = this._fb.group({
            firstName: [this.user.firstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastName: [this.user.lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            title: [this.user.title],
            phoneNumber: [this.user.phoneNumber],
            email: [this.user.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            password: [this.user.password, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    UserEditComponent.prototype.reset = function () {
        this.userForm.reset();
    };
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.editUser.subscribe(function (user) {
            _this.user = user;
            _this.initUserForm();
        });
    };
    UserEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-edit',
            template: __webpack_require__(1233),
            styles: [__webpack_require__(1202)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _b) || Object])
    ], UserEditComponent);
    return UserEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user-edit.component.js.map

/***/ },

/***/ 1169:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__ = __webpack_require__(1131);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserRoutingModule; });
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
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__user_list_user_list_component__["a" /* UserListComponent */] }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], UserRoutingModule);
    return UserRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user-routing.module.js.map

/***/ },

/***/ 1170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(firstName, lastName, email, roles, title, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
        this.title = title;
        this.phoneNumber = phoneNumber;
    }
    return User;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/user.js.map

/***/ },

/***/ 1171:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var forms_1 = __webpack_require__(5);
var textMaskCore_1 = __webpack_require__(1132);
var MaskedInputDirective = (function () {
    function MaskedInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.textMaskConfig = {
            mask: '',
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
            onReject: undefined,
            onAccept: undefined
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    MaskedInputDirective.prototype.ngOnInit = function () {
        if (this.element.nativeElement.tagName === 'INPUT') {
            // `textMask` directive is used directly on an input element
            this.inputElement = this.element.nativeElement;
        }
        else {
            // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
            this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
        }
        this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    MaskedInputDirective.prototype.onInput = function ($event) {
        this.textMaskInputElement.update($event.target.value);
        this._onChange($event.target.value);
    };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.decorators = [
        { type: core_1.Directive, args: [{
                    host: {
                        '(input)': 'onInput($event)',
                        '(blur)': '_onTouched()'
                    },
                    selector: '[textMask]',
                    providers: [{
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    MaskedInputDirective.ctorParameters = [
        { type: core_1.Renderer, },
        { type: core_1.ElementRef, },
    ];
    MaskedInputDirective.propDecorators = {
        'textMaskConfig': [{ type: core_1.Input, args: ['textMask',] },],
    };
    return MaskedInputDirective;
}());
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = (function () {
    function TextMaskModule() {
    }
    TextMaskModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MaskedInputDirective],
                    exports: [MaskedInputDirective],
                    imports: [common_1.CommonModule]
                },] },
    ];
    /** @nocollapse */
    TextMaskModule.ctorParameters = [];
    return TextMaskModule;
}());
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(1132);
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ },

/***/ 1202:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1203:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1233:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"onSubmit(userForm.value)\">\r\n    <div class=\"form-group\">\r\n        <label for=\"firstName\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n        <small *ngIf=\"!userForm.controls.firstName.valid\" class=\"text-danger\">\r\n            First Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"lastName\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n        <small *ngIf=\"!userForm.controls.lastName.valid\" class=\"text-danger\">\r\n            Last Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"title\">Title</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" formControlName=\"title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"phoneNumber\">Phone Number</label>\r\n        <input type=\"text\" [textMask]=\"{mask: phoneMask}\" class=\"form-control\" id=\"phoneNumber\" placeholder=\"(111) 111-1111\" formControlName=\"phoneNumber\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"user@example.com\" formControlName=\"email\">\r\n        <small *ngIf=\"!userForm.controls.email.valid\" class=\"text-danger\">\r\n            Email is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n        <small *ngIf=\"!userForm.controls.email.valid\" class=\"text-danger\">\r\n            Password is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!userForm.valid\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reset()\"><span class=\"fa fa-eraser\"></span> Clear</button>\r\n    </div>\r\n</form>\r\n"

/***/ },

/***/ 1234:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid add-margin-top\">\r\n    <h4>All Users</h4>\r\n    <hr>\r\n    <p-dataTable [value]=\"users\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" resizableColumns=\"true\" [responsive]=\"true\"\r\n                 [stacked]=\"stacked\" [(selection)]=\"selectedUsers\"\r\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\r\n        <header>\r\n            <div style=\"text-align:left\">\r\n                <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\r\n            </div>\r\n        </header>\r\n        <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\"></p-column>\r\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\" [sortable]=\"true\"></p-column>\r\n        <footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <div style=\"float:left\">\r\n                    <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showEditingDialog()\" label=\"Add User\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"deleteUsers()\" [disabled]=\"!canDelete\" label=\"Delete User(s)\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"editUser()\" [disabled]=\"!canEdit\" label=\"Edit User\"></button>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </p-dataTable>\r\n</div>\r\n<p-dialog header=\"Add New User\" [modal]=\"true\" [responsive]=\"true\" width=\"300\" [(visible)]=\"showDialog\">\r\n    <user-edit></user-edit>\r\n</p-dialog>\r\n<p-confirmDialog header=\"Confirm Deleting User(s)\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }

});
//# sourceMappingURL=2.bundle.map