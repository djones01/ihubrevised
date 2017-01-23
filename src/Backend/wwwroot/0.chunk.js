webpackJsonp([0,7],{

/***/ 1110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_object_routing_module__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__object_info_object_info_module__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__field_field_module__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_object_edit_data_object_edit_component__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_object_list_data_object_list_component__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__object_format_edit_object_format_edit_component__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__object_format_list_object_format_list_component__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__object_target_edit_object_target_edit_component__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__object_target_list_object_target_list_component__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_object_service__ = __webpack_require__(1122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_object_format_service__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_object_target_service__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_object_builder_service__ = __webpack_require__(1113);
/* harmony export (binding) */ __webpack_require__.d(exports, "DataObjectModule", function() { return DataObjectModule; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "DataObjectService", function() { return __WEBPACK_IMPORTED_MODULE_13__services_data_object_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ObjectFormatService", function() { return __WEBPACK_IMPORTED_MODULE_14__services_object_format_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "ObjectTargetService", function() { return __WEBPACK_IMPORTED_MODULE_15__services_object_target_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// services



var DataObjectModule = (function () {
    function DataObjectModule() {
    }
    DataObjectModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__data_object_routing_module__["a" /* DataObjectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_4__object_info_object_info_module__["a" /* ObjectInfoModule */],
                __WEBPACK_IMPORTED_MODULE_5__field_field_module__["a" /* FieldModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__data_object_edit_data_object_edit_component__["a" /* DataObjectEditComponent */],
                __WEBPACK_IMPORTED_MODULE_7__data_object_list_data_object_list_component__["a" /* DataObjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__object_format_edit_object_format_edit_component__["a" /* ObjectFormatEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__object_format_list_object_format_list_component__["a" /* ObjectFormatListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__object_target_edit_object_target_edit_component__["a" /* ObjectTargetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__object_target_list_object_target_list_component__["a" /* ObjectTargetListComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_object_service__["a" /* DataObjectService */], __WEBPACK_IMPORTED_MODULE_14__services_object_format_service__["a" /* ObjectFormatService */], __WEBPACK_IMPORTED_MODULE_15__services_object_target_service__["a" /* ObjectTargetService */], __WEBPACK_IMPORTED_MODULE_16__services_data_object_builder_service__["a" /* DataObjectBuilderService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DataObjectModule);
    return DataObjectModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object.module.js.map

/***/ },

/***/ 1113:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataObjectBuilderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataObjectBuilderService = (function () {
    function DataObjectBuilderService(_fb) {
        this._fb = _fb;
    }
    // Init form models
    DataObjectBuilderService.prototype.initDataObject = function () {
        return this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            effective_Date: new Date(),
            active: true,
            existingObjectFormats: [],
            existingObjectTargets: [],
            objectFormats: this._fb.array([]),
            objectTargets: this._fb.array([])
        });
    };
    DataObjectBuilderService.prototype.initObjectFormat = function () {
        return this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            effective_Date: new Date(),
            active: true,
            fieldsGroup: this.initFieldsGroup()
        });
    };
    DataObjectBuilderService.prototype.initFieldsGroup = function () {
        return this._fb.group({
            fromBatchFiles: false,
            perFileFormats: false,
            preserveFileOrdering: true,
            apiInfos: this._fb.array([]),
            fileInfos: this._fb.array([])
        });
    };
    DataObjectBuilderService.prototype.initObjectTarget = function () {
        return this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            effective_Date: new Date(),
            active: true,
            checkTypes: true,
            evalConditions: true,
            stopOnError: true,
            apiInfos: this._fb.array([]),
            fileInfos: this._fb.array([])
        });
    };
    DataObjectBuilderService.prototype.initSourceFileInfo = function () {
        return this._fb.group({
            fileName: '',
            batchProcessLines: false,
            delimiter: '',
            lineFormat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            startLine: [1],
            flls: this._fb.array([]),
            file: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    DataObjectBuilderService.prototype.initTargetFileInfo = function () {
        return this._fb.group({
            fileName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            fileType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            compressFile: [false],
            lineLimit: 0,
            fileSizeLimit: 0,
            fileSizeLimitUnits: '',
            delimiter: '',
            lineFormat: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            flls: this._fb.array([]),
            file: null
        });
    };
    DataObjectBuilderService.prototype.initTargetApiInfo = function () {
        return this._fb.group({
            fileName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            fileType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            effective_Date: new Date(),
            active: true,
            compressFile: false,
            lineLimit: 0,
            fileSizeLimit: [0],
            fileSizeLimitUnits: ['mb'],
            batchProcessLines: [false],
            delimiter: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            startLine: [1, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            hasFixedLengthLines: [false],
            flls: this._fb.array([])
        });
    };
    DataObjectBuilderService.prototype.initFll = function () {
        return this._fb.group({
            lineLength: [100, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lineIndex: [1, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            fieldIndexes: [[], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    DataObjectBuilderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object])
    ], DataObjectBuilderService);
    return DataObjectBuilderService;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object-builder.service.js.map

/***/ },

/***/ 1117:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Field; });
var Field = (function () {
    function Field(name, datatype, length, active) {
        this.name = name;
        this.datatype = datatype;
        this.length = length;
        this.active = active;
    }
    Field.isEquivalent = function (a, b) {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
        if (aProps.length != bProps.length) {
            return false;
        }
        var upperA = a.name.toUpperCase();
        var upperB = b.name.toUpperCase();
        if (upperA != upperB || !upperA.includes(upperB) ||
            !upperB.includes(upperA) ||
            a.datatype !== b.datatype ||
            a.length !== b.length ||
            a.active !== b.active)
            return false;
    };
    Field.CheckFieldInList = function (list, field, isExisting) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].field === field) {
                return true;
            }
        }
        list.push({ isExisting: isExisting, field: field });
    };
    return Field;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field.js.map

/***/ },

/***/ 1120:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_object_builder_service__ = __webpack_require__(1113);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataObjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataObjectEditComponent = (function () {
    function DataObjectEditComponent(dataObjectBuilderService) {
        this.dataObjectBuilderService = dataObjectBuilderService;
    }
    DataObjectEditComponent.prototype.onSubmit = function (dataObject) {
    };
    DataObjectEditComponent.prototype.addDataObjectFormat = function () {
        var control = this.dataObjectForm.controls['objectFormats'];
        control.push(this.dataObjectBuilderService.initObjectFormat());
    };
    DataObjectEditComponent.prototype.removeObjectFormat = function (i) {
        var control = this.dataObjectForm.controls['objectFormats'];
        control.removeAt(i);
    };
    DataObjectEditComponent.prototype.addDataObjectTarget = function () {
        var control = this.dataObjectForm.controls['objectTargets'];
        control.push(this.dataObjectBuilderService.initObjectTarget());
    };
    DataObjectEditComponent.prototype.removeObjectTarget = function (i) {
        var control = this.dataObjectForm.controls['objectTargets'];
        control.removeAt(i);
    };
    DataObjectEditComponent.prototype.newDataObject = function () {
        this.dataObjectForm = this.dataObjectBuilderService.initDataObject();
    };
    DataObjectEditComponent.prototype.ngOnInit = function () {
        this.newDataObject();
    };
    DataObjectEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'data-object-edit',
            template: __webpack_require__(1206),
            styles: [__webpack_require__(1175)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_object_builder_service__["a" /* DataObjectBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_object_builder_service__["a" /* DataObjectBuilderService */]) === 'function' && _a) || Object])
    ], DataObjectEditComponent);
    return DataObjectEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object-edit.component.js.map

/***/ },

/***/ 1121:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataObjectListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataObjectListComponent = (function () {
    function DataObjectListComponent() {
    }
    DataObjectListComponent.prototype.ngOnInit = function () {
    };
    DataObjectListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'data-object-list',
            template: __webpack_require__(1207),
            styles: [__webpack_require__(1176)]
        }), 
        __metadata('design:paramtypes', [])
    ], DataObjectListComponent);
    return DataObjectListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object-list.component.js.map

/***/ },

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataObjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataObjectService = (function () {
    function DataObjectService(dataService, alertService) {
        this.dataService = dataService;
        this.alertService = alertService;
        this._dataObjects = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.dataObjects = this._dataObjects.asObservable();
        this._editDataObject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.edit = this._editDataObject.asObservable();
        this.dataStore = { dataObjects: [] };
        // Get the list of dataObjects
        this.loadall();
    }
    DataObjectService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("dataobjects")
            .subscribe(function (dataObjects) {
            _this.dataStore.dataObjects = dataObjects;
            _this._dataObjects.next(_this.dataStore.dataObjects);
        }, function (error) { return console.log(error); }, function () { });
    };
    DataObjectService.prototype.getObjectFormats = function (dataObjectId) {
        return this.dataService.Get("dataobjects/getobjectformats", dataObjectId);
    };
    DataObjectService.prototype.getObjectTargets = function (dataObjectId) {
        return this.dataService.Get("dataobjects/getobjecttargets", dataObjectId);
    };
    DataObjectService.prototype.setEditDataObject = function (edit) {
        this._editDataObject.next(edit);
    };
    DataObjectService.prototype.clearEditDataObject = function () {
        this._editDataObject.next(null);
    };
    DataObjectService.prototype.add = function (dataObject) {
        var _this = this;
        this.dataService.Add('dataobjects', dataObject).subscribe(function (dataObject) {
            _this.dataStore.dataObjects.push(dataObject);
            _this._dataObjects.next(_this.dataStore.dataObjects);
        }, function (error) { return console.log(error); });
    };
    DataObjectService.prototype.update = function (dataObject) {
        var _this = this;
        this.dataService.Update('dataobjects', dataObject.dataObjectId, dataObject).subscribe(function (dataObject) {
            _this.dataStore.dataObjects.forEach(function (m, i) {
                if (m.dataObjectId === dataObject.dataObjectId) {
                    _this.dataStore.dataObjects[i] = dataObject;
                }
            });
            _this._dataObjects.next(_this.dataStore.dataObjects);
        }, function (error) { return console.log(error); });
    };
    DataObjectService.prototype.delete = function (dataObjectId) {
        var _this = this;
        this.dataService.Delete('dataobjects', dataObjectId).subscribe(function (response) {
            _this.dataStore.dataObjects.forEach(function (m, i) {
                if (m.dataObjectId === dataObjectId) {
                    _this.dataStore.dataObjects.splice(i, 1);
                }
            });
            _this._dataObjects.next(_this.dataStore.dataObjects);
        }, function (error) { return console.log(error); });
    };
    DataObjectService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _b) || Object])
    ], DataObjectService);
    return DataObjectService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object.service.js.map

/***/ },

/***/ 1123:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectFormatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObjectFormatService = (function () {
    function ObjectFormatService(dataService, alertService) {
        this.dataService = dataService;
        this.alertService = alertService;
        this._objectFormats = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.objectFormats = this._objectFormats.asObservable();
        this._editObjectFormat = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.edit = this._editObjectFormat.asObservable();
        this.dataStore = { objectFormats: [] };
        // Get the list of objectFormats
        this.loadall();
    }
    ObjectFormatService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("objectformats")
            .subscribe(function (objectFormats) {
            _this.dataStore.objectFormats = objectFormats;
            _this._objectFormats.next(_this.dataStore.objectFormats);
        }, function (error) { return console.log(error); }, function () { });
    };
    ObjectFormatService.prototype.getFields = function (objectFormatId) {
        return this.dataService.Get("objectformats/getfields", objectFormatId);
    };
    ObjectFormatService.prototype.getSourceInfos = function (objectFormatId) {
        return this.dataService.Get("objectformats/getsourceinfos", objectFormatId);
    };
    ObjectFormatService.prototype.setEditObjectFormat = function (edit) {
        this._editObjectFormat.next(edit);
    };
    ObjectFormatService.prototype.clearEditObjectFormat = function () {
        this._editObjectFormat.next(null);
    };
    ObjectFormatService.prototype.add = function (objectFormat) {
        var _this = this;
        this.dataService.Add('objectformats', objectFormat).subscribe(function (objectFormat) {
            _this.dataStore.objectFormats.push(objectFormat);
            _this._objectFormats.next(_this.dataStore.objectFormats);
        }, function (error) { return console.log(error); });
    };
    ObjectFormatService.prototype.update = function (objectFormat) {
        var _this = this;
        this.dataService.Update('objectformats', objectFormat.objectFormatId, objectFormat).subscribe(function (objectFormat) {
            _this.dataStore.objectFormats.forEach(function (m, i) {
                if (m.objectFormatId === objectFormat.objectFormatId) {
                    _this.dataStore.objectFormats[i] = objectFormat;
                }
            });
            _this._objectFormats.next(_this.dataStore.objectFormats);
        }, function (error) { return console.log(error); });
    };
    ObjectFormatService.prototype.delete = function (objectFormatId) {
        var _this = this;
        this.dataService.Delete('objectformats', objectFormatId).subscribe(function (response) {
            _this.dataStore.objectFormats.forEach(function (m, i) {
                if (m.objectFormatId === objectFormatId) {
                    _this.dataStore.objectFormats.splice(i, 1);
                }
            });
            _this._objectFormats.next(_this.dataStore.objectFormats);
        }, function (error) { return console.log(error); });
    };
    ObjectFormatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _b) || Object])
    ], ObjectFormatService);
    return ObjectFormatService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-format.service.js.map

/***/ },

/***/ 1124:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectTargetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObjectTargetService = (function () {
    function ObjectTargetService(dataService, alertService) {
        this.dataService = dataService;
        this.alertService = alertService;
        this._objectTargets = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.objectTargets = this._objectTargets.asObservable();
        this._editObjectTarget = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.edit = this._editObjectTarget.asObservable();
        this.dataStore = { objectTargets: [] };
        // Get the list of objectTargets
        this.loadall();
    }
    ObjectTargetService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("objecttargets")
            .subscribe(function (objectTargets) {
            _this.dataStore.objectTargets = objectTargets;
            _this._objectTargets.next(_this.dataStore.objectTargets);
        }, function (error) { return console.log(error); }, function () { });
    };
    ObjectTargetService.prototype.getTargetInfos = function (objectFormatId) {
        return this.dataService.Get("objecttargets/gettargetinfos", objectFormatId);
    };
    ObjectTargetService.prototype.setEditObjectTarget = function (edit) {
        this._editObjectTarget.next(edit);
    };
    ObjectTargetService.prototype.clearEditObjectTarget = function () {
        this._editObjectTarget.next(null);
    };
    ObjectTargetService.prototype.add = function (objectTarget) {
        var _this = this;
        this.dataService.Add('objecttargets', objectTarget).subscribe(function (objectTarget) {
            _this.dataStore.objectTargets.push(objectTarget);
            _this._objectTargets.next(_this.dataStore.objectTargets);
        }, function (error) { return console.log(error); });
    };
    ObjectTargetService.prototype.update = function (objectTarget) {
        var _this = this;
        this.dataService.Update('objecttargets', objectTarget.objectTargetId, objectTarget).subscribe(function (objectTarget) {
            _this.dataStore.objectTargets.forEach(function (m, i) {
                if (m.objectTargetId === objectTarget.objectTargetId) {
                    _this.dataStore.objectTargets[i] = objectTarget;
                }
            });
            _this._objectTargets.next(_this.dataStore.objectTargets);
        }, function (error) { return console.log(error); });
    };
    ObjectTargetService.prototype.delete = function (objectTargetId) {
        var _this = this;
        this.dataService.Delete('objecttargets', objectTargetId).subscribe(function (response) {
            _this.dataStore.objectTargets.forEach(function (m, i) {
                if (m.objectTargetId === objectTargetId) {
                    _this.dataStore.objectTargets.splice(i, 1);
                }
            });
            _this._objectTargets.next(_this.dataStore.objectTargets);
        }, function (error) { return console.log(error); });
    };
    ObjectTargetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _b) || Object])
    ], ObjectTargetService);
    return ObjectTargetService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-target.service.js.map

/***/ },

/***/ 1125:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldOptions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldOptions = (function () {
    function FieldOptions() {
        this.dataTypeOptions = [
            { value: "url", label: "URL" },
            { value: "text", label: "Text" },
            { value: "date", label: "Date" },
            { value: "bool", label: "Boolean" },
            { value: "num", label: "Number" },
            { value: "currency", label: "Currency" },
            { value: "email", label: "Email" }
        ];
    }
    FieldOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], FieldOptions);
    return FieldOptions;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-options.js.map

/***/ },

/***/ 1126:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field__ = __webpack_require__(1117);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldService = (function () {
    function FieldService(dataService, alertService) {
        this.dataService = dataService;
        this.alertService = alertService;
        this._fields = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.fields = this._fields.asObservable();
        this._editField = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.edit = this._editField.asObservable();
        this.dataStore = { fields: [] };
        // Get the list of fields
        this.loadall();
    }
    FieldService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("Fields")
            .subscribe(function (fields) {
            _this.dataStore.fields = fields;
            _this._fields.next(_this.dataStore.fields);
        }, function (error) { return console.log(error); }, function () { });
    };
    FieldService.prototype.checkIfFieldExists = function (field) {
        this.dataStore.fields.forEach(function (f, i) { return function () {
            if (__WEBPACK_IMPORTED_MODULE_4__field__["a" /* Field */].isEquivalent(field, f))
                return true;
        }; });
    };
    FieldService.prototype.setEditField = function (edit) {
        this._editField.next(edit);
    };
    FieldService.prototype.clearEditField = function () {
        this._editField.next(null);
    };
    FieldService.prototype.add = function (field) {
        var _this = this;
        this.dataService.Add('Fields', field).subscribe(function (field) {
            _this.dataStore.fields.push(field);
            _this._fields.next(_this.dataStore.fields);
        }, function (error) { return console.log(error); });
    };
    FieldService.prototype.update = function (field) {
        var _this = this;
        this.dataService.Update('Fields', field.fieldId, field).subscribe(function (field) {
            _this.dataStore.fields.forEach(function (m, i) {
                if (m.fieldId === field.fieldId) {
                    _this.dataStore.fields[i] = field;
                }
            });
            _this._fields.next(_this.dataStore.fields);
        }, function (error) { return console.log(error); });
    };
    FieldService.prototype.delete = function (fieldId) {
        var _this = this;
        this.dataService.Delete('Fields', fieldId).subscribe(function (response) {
            _this.dataStore.fields.forEach(function (m, i) {
                if (m.fieldId === fieldId) {
                    _this.dataStore.fields.splice(i, 1);
                }
            });
            _this._fields.next(_this.dataStore.fields);
        }, function (error) { return console.log(error); });
    };
    FieldService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _b) || Object])
    ], FieldService);
    return FieldService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field.service.js.map

/***/ },

/***/ 1127:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExtractionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExtractionService = (function () {
    function ExtractionService(http, appSettings, alertService) {
        this.http = http;
        this.appSettings = appSettings;
        this.alertService = alertService;
        this.api_url = this.appSettings.api_url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'multipart/form-data' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
    }
    ExtractionService.prototype.extractFields = function (fieldsForm) {
        var _this = this;
        var formData = new FormData();
        var extractUrl = this.api_url + 'Extract/Fields';
        return this.http.post(extractUrl, formData, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ExtractionService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ExtractionService.prototype.handleError = function (error) {
        var errMsg = (error.message)
            ? error.message
            : error.status ? error.status + " - " + error.statusText : "Server Error";
        this.alertService.error("Server Error", "Please consult an admin for help");
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(errMsg);
    };
    ExtractionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_service__["a" /* AlertService */]) === 'function' && _c) || Object])
    ], ExtractionService);
    return ExtractionService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/extraction.service.js.map

/***/ },

/***/ 1130:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return InfoOptions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoOptions = (function () {
    function InfoOptions() {
        this.fileTypeOptions = [
            { value: "txt", label: ".txt" },
            { value: "dat", label: ".dat" },
            { value: "csv", label: ".csv" }
        ];
        this.unitOptions = [{ value: "b", label: "Bytes" },
            { value: "kb", label: "KB" },
            { value: "mb", label: "MB" },
            { value: "gb", label: "GB" }];
    }
    InfoOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], InfoOptions);
    return InfoOptions;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/info-options.js.map

/***/ },

/***/ 1136:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_object_edit_data_object_edit_component__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_object_list_data_object_list_component__ = __webpack_require__(1121);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataObjectRoutingModule; });
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
    { path: "list", component: __WEBPACK_IMPORTED_MODULE_3__data_object_list_data_object_list_component__["a" /* DataObjectListComponent */] },
    { path: "edit", component: __WEBPACK_IMPORTED_MODULE_2__data_object_edit_data_object_edit_component__["a" /* DataObjectEditComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__data_object_list_data_object_list_component__["a" /* DataObjectListComponent */] }
];
var DataObjectRoutingModule = (function () {
    function DataObjectRoutingModule() {
    }
    DataObjectRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], DataObjectRoutingModule);
    return DataObjectRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/data-object-routing.module.js.map

/***/ },

/***/ 1137:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectFormatEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjectFormatEditComponent = (function () {
    function ObjectFormatEditComponent() {
    }
    ObjectFormatEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ObjectFormatEditComponent.prototype, "objectFormatForm", void 0);
    ObjectFormatEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'object-format-edit',
            template: __webpack_require__(1208),
            styles: [__webpack_require__(1177)]
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectFormatEditComponent);
    return ObjectFormatEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-format-edit.component.js.map

/***/ },

/***/ 1138:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectFormatListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectFormatListComponent = (function () {
    function ObjectFormatListComponent() {
    }
    ObjectFormatListComponent.prototype.ngOnInit = function () {
    };
    ObjectFormatListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'object-format-list',
            template: __webpack_require__(1209),
            styles: [__webpack_require__(1178)]
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectFormatListComponent);
    return ObjectFormatListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-format-list.component.js.map

/***/ },

/***/ 1139:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_object_builder_service__ = __webpack_require__(1113);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectTargetEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObjectTargetEditComponent = (function () {
    function ObjectTargetEditComponent(dataObjectBuilderService) {
        this.dataObjectBuilderService = dataObjectBuilderService;
    }
    ObjectTargetEditComponent.prototype.addFileInfo = function () {
        var control = this.objectTargetForm.controls['fileInfos'];
        control.push(this.dataObjectBuilderService.initTargetFileInfo());
    };
    ObjectTargetEditComponent.prototype.removeFileInfo = function (i) {
        var control = this.objectTargetForm.controls['fileInfos'];
        control.removeAt(i);
    };
    ObjectTargetEditComponent.prototype.addApiInfo = function () {
        var control = this.objectTargetForm.controls['apiInfos'];
        control.push(this.dataObjectBuilderService.initTargetApiInfo());
    };
    ObjectTargetEditComponent.prototype.removeApiInfo = function (i) {
        var control = this.objectTargetForm.controls['apiInfos'];
        control.removeAt(i);
    };
    ObjectTargetEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ObjectTargetEditComponent.prototype, "objectTargetForm", void 0);
    ObjectTargetEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'object-target-edit',
            template: __webpack_require__(1210),
            styles: [__webpack_require__(1179)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_object_builder_service__["a" /* DataObjectBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_object_builder_service__["a" /* DataObjectBuilderService */]) === 'function' && _b) || Object])
    ], ObjectTargetEditComponent);
    return ObjectTargetEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-target-edit.component.js.map

/***/ },

/***/ 1140:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectTargetListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ObjectTargetListComponent = (function () {
    function ObjectTargetListComponent() {
    }
    ObjectTargetListComponent.prototype.ngOnInit = function () {
    };
    ObjectTargetListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'object-target-list',
            template: __webpack_require__(1211),
            styles: [__webpack_require__(1180)]
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectTargetListComponent);
    return ObjectTargetListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-target-list.component.js.map

/***/ },

/***/ 1141:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldEditListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldEditListComponent = (function () {
    function FieldEditListComponent() {
    }
    FieldEditListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], FieldEditListComponent.prototype, "fieldsForm", void 0);
    FieldEditListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-edit-list',
            template: __webpack_require__(1212),
            styles: [__webpack_require__(1181)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldEditListComponent);
    return FieldEditListComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-edit-list.component.js.map

/***/ },

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldEditComponent = (function () {
    function FieldEditComponent() {
    }
    FieldEditComponent.prototype.ngOnInit = function () {
    };
    FieldEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-field-edit',
            template: __webpack_require__(1213),
            styles: [__webpack_require__(1182)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldEditComponent);
    return FieldEditComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-edit.component.js.map

/***/ },

/***/ 1143:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldOrderListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldOrderListComponent = (function () {
    function FieldOrderListComponent() {
        this.onItemsConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fields = [];
    }
    FieldOrderListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('fields'), 
        __metadata('design:type', Array)
    ], FieldOrderListComponent.prototype, "_fields", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], FieldOrderListComponent.prototype, "onItemsConfirmed", void 0);
    FieldOrderListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-order-list',
            template: __webpack_require__(1214),
            styles: [__webpack_require__(1183)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldOrderListComponent);
    return FieldOrderListComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-order-list.component.js.map

/***/ },

/***/ 1144:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldOverviewComponent = (function () {
    function FieldOverviewComponent() {
    }
    FieldOverviewComponent.prototype.toggleDialog = function () {
        this.showDialog = !this.showDialog;
    };
    FieldOverviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], FieldOverviewComponent.prototype, "fieldForm", void 0);
    FieldOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-overview',
            template: __webpack_require__(1215),
            styles: [__webpack_require__(1184)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldOverviewComponent);
    return FieldOverviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-overview.component.js.map

/***/ },

/***/ 1145:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_options__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_service__ = __webpack_require__(1126);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldSelectExistingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldSelectExistingComponent = (function () {
    function FieldSelectExistingComponent(fieldOptions, fieldService) {
        this.fieldOptions = fieldOptions;
        this.fieldService = fieldService;
        this.selectSingle = false;
        this.datatypes = [{ value: null, label: "All Datatypes" }];
        this.datatypes.concat(this.fieldOptions.dataTypeOptions);
    }
    FieldSelectExistingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], FieldSelectExistingComponent.prototype, "selectSingle", void 0);
    FieldSelectExistingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-select-existing',
            template: __webpack_require__(1216),
            styles: [__webpack_require__(1185)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__field_options__["a" /* FieldOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__field_options__["a" /* FieldOptions */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__field_service__["a" /* FieldService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__field_service__["a" /* FieldService */]) === 'function' && _b) || Object])
    ], FieldSelectExistingComponent);
    return FieldSelectExistingComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-select-existing.component.js.map

/***/ },

/***/ 1146:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_edit_field_edit_component__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field_edit_list_field_edit_list_component__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__field_overview_field_overview_component__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_select_existing_field_select_existing_component__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_fields_new_fields_component__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_handling_file_handling_module__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__field_service__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__field_options__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__field_order_list_field_order_list_component__ = __webpack_require__(1143);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FieldModule = (function () {
    function FieldModule() {
    }
    FieldModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_9__file_handling_file_handling_module__["a" /* FileHandlingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__field_edit_field_edit_component__["a" /* FieldEditComponent */], __WEBPACK_IMPORTED_MODULE_4__field_edit_list_field_edit_list_component__["a" /* FieldEditListComponent */], __WEBPACK_IMPORTED_MODULE_5__field_overview_field_overview_component__["a" /* FieldOverviewComponent */], __WEBPACK_IMPORTED_MODULE_6__field_select_existing_field_select_existing_component__["a" /* FieldSelectExistingComponent */], __WEBPACK_IMPORTED_MODULE_12__field_order_list_field_order_list_component__["a" /* FieldOrderListComponent */], __WEBPACK_IMPORTED_MODULE_7__new_fields_new_fields_component__["a" /* NewFieldsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__field_service__["a" /* FieldService */], __WEBPACK_IMPORTED_MODULE_11__field_options__["a" /* FieldOptions */], __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmationService"]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__field_overview_field_overview_component__["a" /* FieldOverviewComponent */], __WEBPACK_IMPORTED_MODULE_6__field_select_existing_field_select_existing_component__["a" /* FieldSelectExistingComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldModule);
    return FieldModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field.module.js.map

/***/ },

/***/ 1147:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NewFieldsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewFieldsComponent = (function () {
    function NewFieldsComponent() {
        this.fields = [];
    }
    NewFieldsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], NewFieldsComponent.prototype, "fieldsForm", void 0);
    NewFieldsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'new-fields',
            template: __webpack_require__(1217),
            styles: [__webpack_require__(1186)]
        }), 
        __metadata('design:paramtypes', [])
    ], NewFieldsComponent);
    return NewFieldsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/new-fields.component.js.map

/***/ },

/***/ 1148:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extraction_service__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_object_services_data_object_builder_service__ = __webpack_require__(1113);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExtractionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtractionComponent = (function () {
    function ExtractionComponent(dataObjectBuilderService, extractionService) {
        this.dataObjectBuilderService = dataObjectBuilderService;
        this.extractionService = extractionService;
        this.extractMode = "Fields";
    }
    ExtractionComponent.prototype.addSourceFileInfo = function () {
        var control = this.extractForm.controls['fileInfos'];
        control.push(this.dataObjectBuilderService.initSourceFileInfo());
    };
    ExtractionComponent.prototype.removeSourceFileInfo = function (i) {
        var control = this.extractForm.controls['fileInfos'];
        control.removeAt(i);
    };
    ExtractionComponent.prototype.onSelectFile = function (event) {
        var files = event.files;
    };
    ExtractionComponent.prototype.uploadForExtraction = function (extractForm) {
        var _this = this;
        this.extractionService.extractFields(extractForm).subscribe(function (fields) { return _this.fields = fields; });
    };
    ExtractionComponent.prototype.newExtractForm = function () {
        this.extractForm = this.dataObjectBuilderService.initFieldsGroup();
        this.addSourceFileInfo();
    };
    ExtractionComponent.prototype.ngOnInit = function () {
        // Start off with one file only if provided with an input form
        if (this.extractForm)
            this.addSourceFileInfo();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ExtractionComponent.prototype, "extractForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], ExtractionComponent.prototype, "extractMode", void 0);
    ExtractionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'extraction',
            template: __webpack_require__(1218),
            styles: [__webpack_require__(1187)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_object_services_data_object_builder_service__["a" /* DataObjectBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__data_object_services_data_object_builder_service__["a" /* DataObjectBuilderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__extraction_service__["a" /* ExtractionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__extraction_service__["a" /* ExtractionService */]) === 'function' && _c) || Object])
    ], ExtractionComponent);
    return ExtractionComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/extraction.component.js.map

/***/ },

/***/ 1149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_select_with_info_file_select_with_info_component__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extraction_extraction_component__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extraction_service__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_pipes_pipes_module__ = __webpack_require__(1167);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileHandlingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FileHandlingModule = (function () {
    function FileHandlingModule() {
    }
    FileHandlingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_7__shared_pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChipsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__extraction_extraction_component__["a" /* ExtractionComponent */], __WEBPACK_IMPORTED_MODULE_3__file_select_with_info_file_select_with_info_component__["a" /* FileSelectWithInfoComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__extraction_extraction_component__["a" /* ExtractionComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__extraction_service__["a" /* ExtractionService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], FileHandlingModule);
    return FileHandlingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/file-handling.module.js.map

/***/ },

/***/ 1150:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_object_services_data_object_builder_service__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileSelectWithInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileSelectWithInfoComponent = (function () {
    function FileSelectWithInfoComponent(dataObjectBuilderService, alertService) {
        this.dataObjectBuilderService = dataObjectBuilderService;
        this.alertService = alertService;
    }
    FileSelectWithInfoComponent.prototype.onFileChange = function (event) {
        var fileControl = this.fileInfoForm.get('file');
        var fileNameControl = this.fileInfoForm.get('fileName');
        var file = (event.srcElement || event.target).files[0];
        if (file) {
            fileControl.setValue(file);
            fileNameControl.setValue(file.name);
        }
    };
    FileSelectWithInfoComponent.prototype.subscribeLineFormatsChanges = function () {
        var _this = this;
        var lineFormatsControl = this.fileInfoForm.get('lineFormat');
        lineFormatsControl.valueChanges.subscribe(function (newValue) {
            switch (newValue) {
                case "Delimited":
                    _this.removeFllValidators();
                    _this.addFllValidators();
                case "FixedLength":
                    _this.removeDelimiterValidators();
                    _this.addFllValidators();
                case "Mixed":
                    _this.addFllValidators();
                    _this.addDelimiterValidators();
            }
        });
    };
    FileSelectWithInfoComponent.prototype.addDelimiterValidators = function () {
        var delimiterControl = this.fileInfoForm.get('delimiter');
        delimiterControl.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        delimiterControl.updateValueAndValidity();
    };
    FileSelectWithInfoComponent.prototype.removeDelimiterValidators = function () {
        var delimiterControl = this.fileInfoForm.get('delimiter');
        delimiterControl.setValidators(null);
        delimiterControl.updateValueAndValidity();
    };
    FileSelectWithInfoComponent.prototype.addFllValidators = function () {
        var fllsControl = this.fileInfoForm.get('flls');
        fllsControl.controls.forEach(function (fllGroup) {
            Object.keys(fllGroup.controls).forEach(function (key) {
                fllGroup.controls[key].setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
                fllGroup.controls[key].updateValueAndValidity();
            });
        });
    };
    FileSelectWithInfoComponent.prototype.removeFllValidators = function () {
        var fllsControl = this.fileInfoForm.get('flls');
        fllsControl.controls.forEach(function (fllGroup) {
            Object.keys(fllGroup.controls).forEach(function (key) {
                fllGroup.controls[key].setValidators(null);
                fllGroup.controls[key].updateValueAndValidity();
            });
        });
    };
    FileSelectWithInfoComponent.prototype.addFll = function () {
        var control = this.fileInfoForm.get('flls');
        control.push(this.dataObjectBuilderService.initFll());
    };
    FileSelectWithInfoComponent.prototype.removeFll = function (i) {
        var control = this.fileInfoForm.get('flls');
        control.removeAt(i);
    };
    FileSelectWithInfoComponent.prototype.addedFllFieldIndex = function (event, i) {
        var eventVal = event.value;
        // remove the chip that was just added if it isn't a number
        if (!this.isNumeric(eventVal)) {
            var control = this.fileInfoForm.get('flls').controls[i].get('fieldIndexes');
            var controlValue = control.value;
            controlValue.splice(controlValue.indexOf(eventVal), 1);
            control.setValue(controlValue);
            this.alertService.info('Removed Field Index', 'Indexes may only be numbers');
        }
    };
    FileSelectWithInfoComponent.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    FileSelectWithInfoComponent.prototype.ngOnInit = function () {
        this.subscribeLineFormatsChanges();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], FileSelectWithInfoComponent.prototype, "fileInfoForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], FileSelectWithInfoComponent.prototype, "index", void 0);
    FileSelectWithInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'file-select-with-info',
            template: __webpack_require__(1219),
            styles: [__webpack_require__(1188)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_object_services_data_object_builder_service__["a" /* DataObjectBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_object_services_data_object_builder_service__["a" /* DataObjectBuilderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_alert_alert_module__["a" /* AlertService */]) === 'function' && _c) || Object])
    ], FileSelectWithInfoComponent);
    return FileSelectWithInfoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/file-select-with-info.component.js.map

/***/ },

/***/ 1163:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApiInfoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiInfoEditComponent = (function () {
    function ApiInfoEditComponent() {
    }
    ApiInfoEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ApiInfoEditComponent.prototype, "apiInfoForm", void 0);
    ApiInfoEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-info-edit',
            template: __webpack_require__(1231),
            styles: [__webpack_require__(1200)]
        }), 
        __metadata('design:paramtypes', [])
    ], ApiInfoEditComponent);
    return ApiInfoEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/api-info-edit.component.js.map

/***/ },

/***/ 1164:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_options__ = __webpack_require__(1130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FileInfoEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileInfoEditComponent = (function () {
    function FileInfoEditComponent(options) {
        this.options = options;
        this.fileTypeOptions = this.options.fileTypeOptions;
        this.unitOptions = this.options.unitOptions;
    }
    FileInfoEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], FileInfoEditComponent.prototype, "fileInfoForm", void 0);
    FileInfoEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'file-info-edit',
            template: __webpack_require__(1232),
            styles: [__webpack_require__(1201)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__info_options__["a" /* InfoOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__info_options__["a" /* InfoOptions */]) === 'function' && _b) || Object])
    ], FileInfoEditComponent);
    return FileInfoEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/file-info-edit.component.js.map

/***/ },

/***/ 1165:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_info_edit_file_info_edit_component__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_info_edit_api_info_edit_component__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__info_options__ = __webpack_require__(1130);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ObjectInfoModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ObjectInfoModule = (function () {
    function ObjectInfoModule() {
    }
    ObjectInfoModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__file_info_edit_file_info_edit_component__["a" /* FileInfoEditComponent */], __WEBPACK_IMPORTED_MODULE_4__api_info_edit_api_info_edit_component__["a" /* ApiInfoEditComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__file_info_edit_file_info_edit_component__["a" /* FileInfoEditComponent */], __WEBPACK_IMPORTED_MODULE_4__api_info_edit_api_info_edit_component__["a" /* ApiInfoEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__info_options__["a" /* InfoOptions */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ObjectInfoModule);
    return ObjectInfoModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/object-info.module.js.map

/***/ },

/***/ 1166:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ExtractFileNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExtractFileNamePipe = (function () {
    function ExtractFileNamePipe() {
    }
    ExtractFileNamePipe.prototype.transform = function (value) {
        if (value != undefined) {
            return value.replace(/\\/g, "/").replace(/.*\//, "");
        }
        else {
            return "";
        }
    };
    ExtractFileNamePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "extractFileName" }), 
        __metadata('design:paramtypes', [])
    ], ExtractFileNamePipe);
    return ExtractFileNamePipe;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/extract-file-name.pipe.js.map

/***/ },

/***/ 1167:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extract_file_name_pipe__ = __webpack_require__(1166);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__extract_file_name_pipe__["a" /* ExtractFileNamePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__extract_file_name_pipe__["a" /* ExtractFileNamePipe */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/pipes.module.js.map

/***/ },

/***/ 1175:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1176:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1177:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1178:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1179:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1180:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1181:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1182:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1183:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1184:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1185:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1186:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1187:
/***/ function(module, exports) {

module.exports = ".modify-fileupload > .ui-progressbar {\r\n    display: none;\r\n}\r\n\r\n.modify-fileupload > .fa-upload {\r\n    display: none;\r\n}\r\n"

/***/ },

/***/ 1188:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1200:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1201:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1206:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid add-margin-top\">\r\n  <h4>Add / Edit Data Objects</h4>\r\n  <hr>\r\n  <form [formGroup]=\"dataObjectForm\" novalidate (ngSubmit)=\"onSubmit(dataObjectForm.value)\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"form-group\">\r\n                  <label>Object Name</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n                  <small *ngIf=\"!dataObjectForm.controls.name.valid\" class=\"text-danger\">\r\n                      Object Name is required\r\n                  </small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label>Object Description</label>\r\n                  <textarea class=\"form-control textarea-resize\" formControlName=\"description\"></textarea>\r\n                  <small *ngIf=\"!dataObjectForm.controls.description.valid\" class=\"text-danger\">\r\n                      Object Description is required\r\n                  </small>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <label>Effective Date</label>\r\n                  <p-calendar formControlName=\"effective_Date\"></p-calendar>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                    <label for=\"active\">Active</label>\r\n                    <div>\r\n                        <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"active\"></p-inputSwitch>\r\n                    </div>           \r\n                </div>\r\n          </div>\r\n      </div>\r\n    <p-panel header=\"Data Formats\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\"> \r\n        <div formArrayName=\"objectFormats\">\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addDataObjectFormat()\"><span class=\"fa fa-plus\"></span> Add Data Format</button>\r\n            </div>\r\n            <div class=\"card form-group\" *ngFor=\"let objectFormat of dataObjectForm.controls.objectFormats.controls; let i=index\">\r\n                <div class=\"card-header\">                               \r\n                    <span class=\"fa fa-close pull-right\" (click)=\"removeObjectFormat(i)\"></span>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <object-format-edit [group]=\"dataObjectForm.controls.objectFormats.controls[i]\"></object-format-edit>\r\n                </div>\r\n            </div>    \r\n        </div>                 \r\n    </p-panel>\r\n    <p-panel header=\"Data Targets\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\r\n        <div formArrayName=\"objectTargets\">\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addDataObjectTarget()\"><span class=\"fa fa-plus\"></span> Add Data Target</button>\r\n            </div>              \r\n            <div class=\"card form-group\" *ngFor=\"let objectTarget of dataObjectForm.controls.objectTargets.controls; let i=index\">\r\n                <div class=\"card-header\" >                               \r\n                    <span class=\"fa fa-close pull-right\" (click)=\"removeObjectTarget(i)\"></span>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <object-target-edit [group]=\"dataObjectForm.controls.objectTargets.controls[i]\"></object-target-edit>\r\n                </div>\r\n            </div>\r\n        </div>        \r\n    </p-panel>\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"newDataObject()\"><span class=\"fa fa-eraser\"></span> Clear</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!dataObjectForm.valid\">Submit</button>\r\n    </form> \r\n<div>\r\n\r\n\r\n"

/***/ },

/***/ 1207:
/***/ function(module, exports) {

module.exports = "<p>\n  data-object-list works!\n</p>\n"

/***/ },

/***/ 1208:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"objectFormatForm\">       \r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n        <small *ngIf=\"!objectFormatForm.controls.name.valid\" class=\"text-danger\">\r\n            Format Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control textarea-resize\" formControlName=\"description\"></textarea>\r\n        <small *ngIf=\"!objectFormatForm.controls.description.valid\" class=\"text-danger\">\r\n            Description is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Effective Date</label>\r\n        <p-calendar formControlName=\"effective_Date\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"active\">Active</label>\r\n        <div>\r\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"active\"></p-inputSwitch>\r\n        </div>           \r\n    </div>\r\n    <field-overview [group]=\"objectFormatForm.get('fieldsGroup')\"></field-overview>\r\n</form>\r\n"

/***/ },

/***/ 1209:
/***/ function(module, exports) {

module.exports = "<p>\n  object-format-list works!\n</p>\n"

/***/ },

/***/ 1210:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"objectTargetForm\">       \r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\">\r\n        <small *ngIf=\"!objectTargetForm.controls.name.valid\" class=\"text-danger\">\r\n            Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control textarea-resize\" formControlName=\"description\"></textarea>\r\n        <small *ngIf=\"!objectTargetForm.controls.description.valid\" class=\"text-danger\">\r\n            Description is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Effective Date</label>\r\n        <p-calendar formControlName=\"effective_Date\"></p-calendar>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"active\">Active</label>\r\n        <div>\r\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"active\"></p-inputSwitch>\r\n        </div>           \r\n    </div>\r\n    <p-panel header=\"Target Infos\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\r\n        <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addFileInfo()\">New File Info</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addApiInfo()\">New API Info</button>\r\n        </div>     \r\n        <div formArrayName=\"fileInfos\">\r\n            <div class=\"card form-group\" *ngFor=\"let fileInfo of objectTargetForm.controls.fileInfos.controls; let i=index\">\r\n                <div class=\"card-header\" >                               \r\n                     Target File Info<span class=\"fa fa-close pull-right\" (click)=\"removeFileInfo(i)\"></span>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <file-info-edit [group]=\"objectTargetForm.controls.fileInfos.controls[i]\"></file-info-edit>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div formArrayName=\"apiInfos\">\r\n            <div class=\"card form-group\" *ngFor=\"let fileInfo of objectTargetForm.controls.apiInfos.controls; let i=index\">\r\n                <div class=\"card-header\" >                               \r\n                     Target API Info<span class=\"fa fa-close pull-right\" (click)=\"removeApiInfo(i)\"></span>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <api-info-edit [group]=\"objectTargetForm.controls.apiInfos.controls[i]\"></api-info-edit>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </p-panel>\r\n    <p-panel header=\"Target Options\" [toggleable]=\"true\" [collapsed]=\"true\">\r\n        <div class=\"form-group\">\r\n            <label>Check Types</label>\r\n            <div>\r\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"checkTypes\"></p-inputSwitch>\r\n            </div>           \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Evaluate Conditions</label>\r\n            <div>\r\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"evalConditions\"></p-inputSwitch>\r\n            </div>         \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Stop On Error</label>\r\n            <div>\r\n               <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"stopOnError\"></p-inputSwitch>\r\n            </div>     \r\n        </div>\r\n    </p-panel> \r\n</form>\r\n"

/***/ },

/***/ 1211:
/***/ function(module, exports) {

module.exports = "<p>\n  object-target-list works!\n</p>\n"

/***/ },

/***/ 1212:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"fieldsForm\">       \r\n\r\n</form>"

/***/ },

/***/ 1213:
/***/ function(module, exports) {

module.exports = "\r\n"

/***/ },

/***/ 1214:
/***/ function(module, exports) {

module.exports = "<div class=\"add-margin-bottom\">\n<p-orderList [value]=\"fields\" header=\"Reorder Fields\">\n    <template let-field pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <h5>{{fieldStatus.field.name}}</h5>\n            <div style=\"font-size:14px;margin:15px 5px 0 0\"> \n              <div>Datatype: {{fieldStatus.field.dataType}} Length: {{fieldStatus.field.length}}</div>\n              <div>Active: \n                <span *ngIf=\"field.active\" class=\"fa fa-check\"></span>\n                <span *ngIf=\"!field.active\" class=\"fa fa-close\"></span>\n              </div>\n              <div style=\"float: right\">\n                <span *ngIf=\"fieldStatus.isExisting\">Existing Field</span>\n                <span *ngIf=\"!fieldStatus.isExisting\">New Field</span>\n              </div>\n            </div>\n        </div>\n    </template>\n    <template *ngIf=\"fields.length == 0\" pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            No Fields currently in working set\n        </div>\n    </template>\n</p-orderList>\n</div>\n<button type=\"button\" [disabled]=\"fields.length == 0\" class=\"btn btn-secondary pull-right\" (click)=\"confirmOrder()\"><span class=\"fa fa-check\"></span>Confirm Ordering</button>\n<p-confirmDialog header=\"Confirm Field Ordering\" icon=\"fa fa-question-circle\" width=\"425\"><p-confirmDialog>\n"

/***/ },

/***/ 1215:
/***/ function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-secondary\" (click)=\"toggleDialog()\">Edit Fields</button>\r\n\r\n<p-dialog header=\"Select and Create Fields\" [modal]=\"true\" responsive=\"true\" width=\"1000\" [(visible)]=\"showDialog\" [resizable]=\"false\" [closable]=\"true\">\r\n    <p-tabView>\r\n        <p-tabPanel header=\"Add New Fields\">\r\n            <div class=\"add-padding-container scroll-container\">\r\n                <new-fields [group]=\"fieldForm\"></new-fields>\r\n            </div>    \r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Select Existing Fields\">\r\n            <div class=\"add-padding-container scroll-container\">\r\n                <field-select-existing></field-select-existing>\r\n            </div>      \r\n        </p-tabPanel>\r\n        <p-tabPanel header=\"Current Working Set\">\r\n            <div class=\"add-padding-container\">\r\n                <field-order-list></field-order-list>\r\n            </div>    \r\n        </p-tabPanel>\r\n    </p-tabView>\r\n</p-dialog>"

/***/ },

/***/ 1216:
/***/ function(module, exports) {

module.exports = "<p-dataTable [value]=\"fieldService.fields | async\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" \r\n                        [resizableColumns]=\"true\" [responsive]=\"true\"\r\n                        [stacked]=\"stacked\" [(selection)]=\"selectedFields\" [globalFilter]=\"gb\" #dt>\r\n    <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\" *ngIf=\"!selectSingle\"></p-column>\r\n    <p-column [style]=\"{'width':'38px'}\" selectionMode=\"single\" *ngIf=\"selectSingle\"></p-column>\r\n    <p-column *ngFor=\"let fieldCol of fieldCols\" [field]=\"fieldCol.field\" [header]=\"fieldCol.header\" [sortable]=\"true\"></p-column>\r\n    <p-column field=\"name\" header=\"Name\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\r\n    <p-column field=\"length\" header=\"Length\" [filter]=\"true\" filterPlaceholder=\"Search\"></p-column>\r\n    <p-column field=\"datatype\" header=\"Data Type\" [filter]=\"true\" [style]=\"{'overflow':'visible'}\" filterMatchMode=\"equals\">\r\n        <template pTemplate=\"filter\" let-col>\r\n            <p-dropdown [options]=\"datatypes\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" styleClass=\"ui-column-filter\"></p-dropdown>\r\n        </template>\r\n    </p-column>\r\n    <p-column field=\"active\" header=\"Active\" [filter]=\"true\" filterMatchMode=\"equals\" [style]=\"{'overflow':'visible'}\">\r\n        <template pTemplate=\"filter\" let-col>\r\n            <input type=\"checkbox\" (onChange)=\"dt.filter($event.value,col.field,col.filterMatchMode)\" class=\"ui-column-filter\">\r\n        </template>\r\n    </p-column>\r\n</p-dataTable>\r\n"

/***/ },

/***/ 1217:
/***/ function(module, exports) {

module.exports = "<extraction [group]=\"fieldsForm\"></extraction>\n<field-edit-list *ngIf=\"fields.length > 0\"></field-edit-list>\n"

/***/ },

/***/ 1218:
/***/ function(module, exports) {

module.exports = "<p-panel header=\"File Options and Selection for {{ extractMode }}\" [toggleable]=\"true\">\n  <form [formGroup]=\"extractForm\">\n    <div class=\"form-group\">\n        <label>Are your {{ extractMode }} coming from one file or multiple files?</label>\n        <div>\n            <p-inputSwitch onLabel=\"Multiple\" offLabel=\"Single\" formControlName=\"fromBatchFiles\"></p-inputSwitch>\n        </div>           \n    </div>\n    <div *ngIf=\"extractMode == 'Formats' && extractForm.get('fromBatchFiles').value == true\" class=\"form-group\">\n        <label>Should each file be treated as a separate format?</label>\n        <div>\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"perFileFormats\"></p-inputSwitch>\n        </div>           \n    </div>\n    <div *ngIf=\"extractForm.get('fromBatchFiles').value == true\" class=\"form-group\">\n        <label>Should the order in which you provide the files be preserved?</label>\n        <div>\n            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"preserveFileOrdering\"></p-inputSwitch>\n        </div>           \n    </div>\n    <h5>Provide Input File(s) and related Information</h5>\n    <div class=\"form-group\" *ngIf=\"extractForm.get('fromBatchFiles').value == true\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addSourceFileInfo()\"><span class=\"fa fa-plus\"></span> Add New File</button>\n    </div>\n    <p-panel formArrayName=\"fileInfos\" *ngFor=\"let fileInfo of extractForm.get('fileInfos').controls; let i=index\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\n        <header style=\"display: inline-block;\">           \n            <span *ngIf=\"extractForm.get('fileInfos').controls.length > 1 || extractForm.get('fromBatchFiles').value == true\" \n                class=\"fa fa-close ui-panel-titlebar-toggler\" (click)=\"removeSourceFileInfo(i)\"></span> \n            <span *ngIf=\"extractForm.get('fileInfos').controls[i].get('fileName').value == ''\">New File Source</span>       \n            <span *ngIf=\"extractForm.get('fileInfos').controls[i].get('fileName').value != ''\">{{extractForm.get('fileInfos').controls[i].get('fileName').value}}</span>                            \n        </header>\n        <file-select-with-info [group]=\"extractForm.get('fileInfos').controls[i]\" [index]=\"i\"></file-select-with-info>\n    </p-panel>   \n  </form>\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"newExtractForm()\"><span class=\"fa fa-eraser\"></span> Clear</button>\n  <button class=\"btn btn-primary\" [disabled]=\"extractForm.invalid\" (click)=\"uploadForExtraction(extractForm.value)\">Upload Files</button>\n</p-panel>\n\n"

/***/ },

/***/ 1219:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"fileInfoForm\">   \n    <div class=\"row\">\n      <div class=\"col-md-4\">\n          <div class=\"form-group\">\n              <label for=\"batchProcessLines\">Process All Lines</label>\n              <div>\n                  <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"batchProcessLines\"></p-inputSwitch>\n              </div>           \n          </div>        \n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n                <label for=\"active\">Line Formats</label>\n                <select class=\"form-control\" formControlName=\"lineFormat\">\n                  <option value=\"\" selected disabled>Select Line Format</option>\n                  <option value=\"Delimited\">Delimited</option>\n                  <option value=\"FixedLength\">Fixed Length</option>\n                  <option value=\"Mixed\">Mixed</option>\n                </select> \n                <small *ngIf=\"fileInfoForm.get('lineFormat').invalid\" class=\"text-danger\">\n                    Line Format required\n                </small>         \n            </div>  \n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"form-group\"> \n              <label for=\"dataFile\">Select Data File</label>\n              <div class=\"input-group\">\n                <label class=\"input-group-btn\">\n                    <span class=\"btn btn-primary\">\n                        Browse&hellip; <input type=\"file\" name=\"dataFile\" style=\"display:none;\" #dataFile (change)=\"onFileChange($event)\" />\n                    </span>\n                </label>\n            </div>\n            <small *ngIf=\"fileInfoForm.get('file').invalid\" class=\"text-danger\">\n                File required\n            </small>\n          </div>  \n      </div>\n    </div>\n    <div class=\"row\">   \n        <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label>Beginning Line Number</label>\n              <input type=\"number\" class=\"form-control\" min=\"1\" formControlName=\"startLine\" />       \n          </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"form-group\" *ngIf=\"fileInfoForm.get('lineFormat').value == 'Delimited' || fileInfoForm.get('lineFormat').value == 'Mixed'\">\n                <label for=\"delimiter\">Delimiter</label>\n                <input type=\"text\" name=\"delimiter\" class=\"form-control delimiter-field\" maxlength=\"1\" size=\"1\" formControlName=\"delimiter\" />\n                <small *ngIf=\"fileInfoForm.get('delimiter').invalid\" class=\"text-danger\">\n                    Delimiter required\n                </small>          \n            </div>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n    </div>\n    <p-panel header=\"Fixed Length Lines\" *ngIf=\"fileInfoForm.get('lineFormat').value == 'FixedLength' || fileInfoForm.get('lineFormat').value == 'Mixed'\">\n      <div formArrayName=\"flls\">\n            <div class=\"form-group\">\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addFll()\"><span class=\"fa fa-plus\"></span> Add Fixed Length Line</button>\n            </div>\n            <div *ngFor=\"let fll of fileInfoForm.get('flls').controls; let i=index\">\n                <div [formGroup]=\"fll\" class=\"row\">\n                    <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label>Line Length</label>\n                            <input type=\"number\" class=\"form-control\" min=\"1\" formControlName=\"lineLength\" />       \n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label>Line Index</label>\n                            <input type=\"number\" class=\"form-control\" min=\"1\" formControlName=\"lineIndex\" />       \n                        </div>\n                    </div>\n                    <div class=\"col-md-7\">\n                        <div class=\"form-group\">\n                            <label>Field Indexes</label>\n                            <p-chips (onAdd)=\"addedFllFieldIndex($event, i)\" formControlName=\"fieldIndexes\"></p-chips>     \n                             <small *ngIf=\"fll.get('fieldIndexes').invalid\" class=\"text-danger\">\n                                Field Indexes are required\n                            </small>\n                        </div>\n                    </div>\n                    <div class=\"col-md-1\" style=\"vertical-align: middle\">\n                        <div class=\"form-group\">                               \n                            <button class=\"btn btn-secondary\" (click)=\"removeFll(i)\"><span class=\"fa fa-close\"></span></button>\n                        </div>\n                    </div>              \n                </div>         \n            </div>    \n        </div> \n    </p-panel>\n</form>\n"

/***/ },

/***/ 1231:
/***/ function(module, exports) {

module.exports = "<p>\r\n  api-info-edit works!\r\n</p>\r\n"

/***/ },

/***/ 1232:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"fileInfoForm\">       \r\n    <div class=\"form-group\">\r\n        <label>File Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"fileName\">\r\n        <small *ngIf=\"!fileInfoForm.controls.fileName.valid\" class=\"text-danger\">\r\n            File Name is required\r\n        </small>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>File Type</label>\r\n        <select class=\"form-control\" formControlName=\"fileType\">\r\n            <option value=\"\" disabled selected>Select File Type</option>\r\n            <option *ngFor=\"let fileType of fileTypeOptions\" [ngValue]=\"fileType.value\">{{fileType.label}}</option>\r\n        </select>\r\n        <small *ngIf=\"!fileInfoForm.controls.fileType.valid\" class=\"text-danger\">\r\n            File Type is required\r\n        </small>\r\n    </div>\r\n    \r\n    <p-panel header=\"File Size Options\" [toggleable]=\"true\" [collapsed]=\"true\">\r\n        <div class=\"form-group\">\r\n            <label>Compress File</label>\r\n            <div>\r\n                <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"compressFile\"></p-inputSwitch>\r\n            </div>           \r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>File Size Limit (0 = No Limit)</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"number\" min=\"0\" class=\"form-control\" formControlName=\"fileSizeLimit\">\r\n                <div class=\"input-group-btn\">\r\n                    <select class=\"form-control\" formControlName=\"fileSizeLimitUnits\">\r\n                        <option value=\"0\" disabled selected>Units</option>\r\n                        <option *ngFor=\"let units of unitOptions\" [ngValue]=\"units.value\">{{units.label}}</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <small *ngIf=\"!fileInfoForm.controls.fileSizeLimitUnits.valid\" class=\"text-danger\">\r\n                Units Are Required\r\n            </small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Row Limit (0 = No Limit)</label>\r\n             <input type=\"number\" min=\"0\" class=\"form-control\" formControlName=\"rowLimit\">      \r\n        </div>\r\n    </p-panel>\r\n    \r\n</form>"

/***/ }

});
//# sourceMappingURL=0.bundle.map