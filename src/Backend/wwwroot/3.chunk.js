webpackJsonp([3,7],{

/***/ 1109:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_routing_module__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_edit_client_edit_component__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_list_client_list_component__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_service__ = __webpack_require__(1115);
/* harmony export (binding) */ __webpack_require__.d(exports, "ClientModule", function() { return ClientModule; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ClientService", function() { return __WEBPACK_IMPORTED_MODULE_7__client_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ClientModule = (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__client_routing_module__["a" /* ClientRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__client_edit_client_edit_component__["a" /* ClientEditComponent */], __WEBPACK_IMPORTED_MODULE_5__client_list_client_list_component__["a" /* ClientListComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__client_service__["a" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientModule);
    return ClientModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client.module.js.map

/***/ },

/***/ 1115:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client__ = __webpack_require__(1135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = (function () {
    function ClientService(dataService) {
        this.dataService = dataService;
        this._clients = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.clients = this._clients.asObservable();
        this._editClient = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.editClient = this._editClient.asObservable();
        this.editing = false;
        this.initEditClient();
        this.dataStore = { clients: [] };
        // Get the list of clients
        this.loadall();
    }
    ClientService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("clients")
            .subscribe(function (clients) {
            _this.dataStore.clients = clients;
            _this._clients.next(_this.dataStore.clients);
        }, function (error) { return console.log(error); }, function () { });
    };
    ClientService.prototype.setEditClient = function (edit) {
        this._editClient.next(edit);
        this.editing = true;
    };
    ClientService.prototype.initEditClient = function () {
        this._editClient.next(this.newClient());
    };
    ClientService.prototype.newClient = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__client__["a" /* Client */]('', '');
    };
    ClientService.prototype.submit = function (client) {
        if (this.editing) {
            this.update(client);
        }
        else {
            this.add(client);
        }
        this.editing = false;
    };
    ClientService.prototype.add = function (client) {
        var _this = this;
        this.dataService.Add('clients', client).subscribe(function (client) {
            _this.dataStore.clients.push(client);
            _this._clients.next(_this.dataStore.clients);
        }, function (error) { return console.log(error); });
    };
    ClientService.prototype.update = function (client) {
        var _this = this;
        this.dataService.Update('clients', client.clientId, client).subscribe(function (response) {
            _this.dataStore.clients.forEach(function (m, i) {
                if (m.clientId === client.clientId) {
                    _this.dataStore.clients[i] = client;
                }
            });
            _this._clients.next(_this.dataStore.clients);
        }, function (error) { return console.log(error); });
    };
    ClientService.prototype.delete = function (clientId) {
        var _this = this;
        this.dataService.Delete('clients', clientId).subscribe(function (response) {
            _this.dataStore.clients.forEach(function (m, i) {
                if (m.clientId === clientId) {
                    _this.dataStore.clients.splice(i, 1);
                }
            });
            _this._clients.next(_this.dataStore.clients);
        }, function (error) { return console.log(error); });
    };
    ClientService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object])
    ], ClientService);
    return ClientService;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client.service.js.map

/***/ },

/***/ 1119:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientListComponent = (function () {
    function ClientListComponent(confirmationService, clientService) {
        this.confirmationService = confirmationService;
        this.clientService = clientService;
        this.showDialog = false;
        this.canDelete = false;
        this.canEdit = false;
        this.selectedClients = [];
    }
    ClientListComponent.prototype.showEditingDialog = function () {
        this.showDialog = true;
    };
    ClientListComponent.prototype.editClient = function () {
        this.clientService.setEditClient(this.selectedClients[0]);
        this.showEditingDialog();
    };
    ClientListComponent.prototype.deleteClients = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected client(s)?",
            accept: function () {
                _this.selectedClients.forEach(function (c, i) {
                    _this.clientService.delete(c.clientId);
                });
                _this.selectedClients = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    };
    //Update the state of the delete and edit buttons based on row selection
    ClientListComponent.prototype.onRowSelect = function (event) {
        if (this.selectedClients.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
    };
    ClientListComponent.prototype.onRowUnselect = function (event) {
        if (this.selectedClients.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedClients.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
    };
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.clients.subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'client-list',
            template: __webpack_require__(1205),
            styles: [__webpack_require__(1174)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]) === 'function' && _b) || Object])
    ], ClientListComponent);
    return ClientListComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client-list.component.js.map

/***/ },

/***/ 1133:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__(1115);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEditComponent = (function () {
    function ClientEditComponent(_fb, clientService) {
        this._fb = _fb;
        this.clientService = clientService;
    }
    ClientEditComponent.prototype.onSubmit = function (client) {
        this.clientService.submit(this.client);
        this.reset();
    };
    ClientEditComponent.prototype.initClientForm = function () {
        this.clientForm = this._fb.group({
            name: [this.client.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            industry: [this.client.industry, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    ClientEditComponent.prototype.reset = function () {
        this.clientForm.reset();
    };
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.editClient.subscribe(function (client) {
            _this.client = client;
            _this.initClientForm();
        });
    };
    ClientEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'client-edit',
            template: __webpack_require__(1204),
            styles: [__webpack_require__(1173)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */]) === 'function' && _b) || Object])
    ], ClientEditComponent);
    return ClientEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client-edit.component.js.map

/***/ },

/***/ 1134:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_list_client_list_component__ = __webpack_require__(1119);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientRoutingModule; });
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
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_2__client_list_client_list_component__["a" /* ClientListComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_2__client_list_client_list_component__["a" /* ClientListComponent */] }
];
var ClientRoutingModule = (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client-routing.module.js.map

/***/ },

/***/ 1135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Client; });
var Client = (function () {
    function Client(name, industry, clientId, created_By, creation_Date, modified_By, date_Modified, projects) {
        this.name = name;
        this.industry = industry;
        this.clientId = clientId;
        this.created_By = created_By;
        this.creation_Date = creation_Date;
        this.modified_By = modified_By;
        this.date_Modified = date_Modified;
        this.projects = projects;
    }
    return Client;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/client.js.map

/***/ },

/***/ 1173:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1174:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1204:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"clientForm\" novalidate (ngSubmit)=\"onSubmit(clientForm.value)\">\r\n    <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"name\">\r\n        <small *ngIf=\"!clientForm.controls.name.valid\" class=\"text-danger\">\r\n            Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"industry\">Industry</label>\r\n        <select class=\"form-control\" id=\"industry\" formControlName=\"industry\">\r\n            <option value=\"\" selected disabled>Select Industry</option>\r\n            <option>Agriculture, Forestry and Fishing</option>\r\n            <option>Mining</option>\r\n            <option>Construction</option>\r\n            <option>Manufacturing</option>\r\n            <option>Transportation</option>\r\n            <option>Communication</option>\r\n            <option>Electric</option>\r\n            <option>Oil and Natural Gas</option>\r\n            <option>Sanitation</option>\r\n            <option>Wholesale Trade</option>\r\n            <option>Retail Trade</option>\r\n            <option>Finance</option>\r\n            <option>Insurance</option>\r\n            <option>Real Estate</option>\r\n            <option>Services</option>\r\n            <option>Public Administration</option>\r\n            <option>Nonclassifiable</option>\r\n        </select>\r\n        <small *ngIf=\"!clientForm.controls.industry.valid\" class=\"text-danger\">\r\n            Industry is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!clientForm.valid\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"reset()\"><span class=\"fa fa-eraser\"></span> Clear</button>\r\n    </div>\r\n</form>"

/***/ },

/***/ 1205:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid add-margin-top\">\r\n    <h4>All Clients</h4>\r\n    <hr>\r\n    <p-dataTable [value]=\"clients\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" resizableColumns=\"true\" [responsive]=\"true\" \r\n                 [stacked]=\"stacked\" [(selection)]=\"selectedClients\" \r\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\r\n        <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\"></p-column>\r\n        <p-column field=\"name\" header=\"Name\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"industry\" header=\"Industry\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"created_By\" header=\"Created By\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"creation_Date\" header=\"Creation Date\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"modified_By\" header=\"Modified By\" [sortable]=\"true\"></p-column>\r\n        <p-column field=\"date_Modified\" header=\"Date Modified\" [sortable]=\"true\"></p-column>\r\n        <footer>\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <div style=\"float:left\">\r\n                    <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showEditingDialog()\" label=\"Add Client\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"deleteClients()\" [disabled]=\"!canDelete\" label=\"Delete Client(s)\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"editClient()\" [disabled]=\"!canEdit\" label=\"Edit Client\"></button>\r\n                </div>               \r\n            </div>\r\n        </footer>\r\n    </p-dataTable>\r\n</div>  \r\n<p-dialog header=\"Add New Client\" [modal]=\"true\" [responsive]=\"true\" [(visible)]=\"showDialog\">\r\n    <client-edit></client-edit>\r\n</p-dialog>\r\n<p-confirmDialog header=\"Confirm Deleting Client(s)\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }

});
//# sourceMappingURL=3.bundle.map