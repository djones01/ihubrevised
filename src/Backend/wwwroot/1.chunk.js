webpackJsonp([1,7],{

/***/ 1111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_routing_module__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_run_map_file_select_map_file_select_component__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_run_map_options_map_options_component__ = __webpack_require__(1153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_run_map_run_map_run_component__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transformation_transformation_edit_transformation_edit_component__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transformation_condition_condition_edit_condition_edit_component__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__transformation_rule_rule_edit_rule_edit_component__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transformation_rule_rule_field_edit_rule_field_edit_component__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__transformation_rule_date_format_date_format_component__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__transformation_rule_field_format_field_format_component__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__map_edit_map_edit_component__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_list_map_list_component__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_map_service__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_map_builder_service__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_map_run_service__ = __webpack_require__(1156);
/* harmony export (binding) */ __webpack_require__.d(exports, "MapModule", function() { return MapModule; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "MapService", function() { return __WEBPACK_IMPORTED_MODULE_16__services_map_service__["a"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MapModule = (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__map_routing_module__["a" /* MapRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputSwitchModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__map_run_map_file_select_map_file_select_component__["a" /* MapFileSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_run_map_options_map_options_component__["a" /* MapOptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__map_run_map_run_map_run_component__["a" /* MapRunComponent */],
                __WEBPACK_IMPORTED_MODULE_8__transformation_transformation_edit_transformation_edit_component__["a" /* TransformationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__transformation_condition_condition_edit_condition_edit_component__["a" /* ConditionEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__transformation_rule_rule_edit_rule_edit_component__["a" /* RuleEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__transformation_rule_rule_field_edit_rule_field_edit_component__["a" /* RuleFieldEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__transformation_rule_date_format_date_format_component__["a" /* DateFormatComponent */],
                __WEBPACK_IMPORTED_MODULE_13__transformation_rule_field_format_field_format_component__["a" /* FieldFormatComponent */],
                __WEBPACK_IMPORTED_MODULE_14__map_edit_map_edit_component__["a" /* MapEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__map_list_map_list_component__["a" /* MapListComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_15__map_list_map_list_component__["a" /* MapListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__map_edit_map_edit_component__["a" /* MapEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_18__services_map_run_service__["a" /* MapRunService */], __WEBPACK_IMPORTED_MODULE_17__services_map_builder_service__["a" /* MapBuilderService */], __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]]
        }), 
        __metadata('design:paramtypes', [])
    ], MapModule);
    return MapModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map.module.js.map

/***/ },

/***/ 1114:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_data_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapService = (function () {
    function MapService(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this._maps = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.maps = this._maps.asObservable();
        this._editMap = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.newMap());
        this.editMap = this._editMap.asObservable();
        this.editing = false;
        this.dataStore = { maps: [] };
        this.initEditMap();
        this.loadall();
    }
    MapService.prototype.loadall = function () {
        var _this = this;
        this.dataService.GetAll("maps")
            .subscribe(function (maps) {
            _this.dataStore.maps = maps;
            _this._maps.next(_this.dataStore.maps);
        }, function (error) { return console.log(error); }, function () { });
    };
    MapService.prototype.setEditMap = function (editMap) {
        var _this = this;
        // Load Transforms for the map being edited
        this.dataService.Get('maps/getmaptransforms', editMap.mapId)
            .subscribe(function (transformations) {
            editMap.transformations = transformations;
            _this.router.navigate(['/map-edit']);
        }, function (error) { return console.log(error); });
        this._editMap.next(editMap);
        this.editing = true;
    };
    MapService.prototype.initEditMap = function () {
        this._editMap.next(this.newMap());
    };
    MapService.prototype.newMap = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__map__["a" /* Map */]('', new Date(), true, []);
    };
    MapService.prototype.add = function (map) {
        var _this = this;
        this.dataService.Add('maps', map).subscribe(function (map) {
            _this.dataStore.maps.push(map);
            _this._maps.next(_this.dataStore.maps);
        }, function (error) { return console.log(error); });
    };
    MapService.prototype.update = function (map) {
        var _this = this;
        var editId = this._editMap.getValue().mapId;
        map.mapId = editId;
        this.dataService.Update('maps', editId, map).subscribe(function () {
            _this.dataStore.maps.forEach(function (m, i) {
                if (m.mapId === map.mapId) {
                    _this.dataStore.maps[i] = map;
                }
            });
            _this._maps.next(_this.dataStore.maps);
        }, function (error) { return console.log(error); });
        this.editing = false;
        this.initEditMap();
    };
    MapService.prototype.delete = function (mapId) {
        var _this = this;
        this.dataService.Delete('maps', mapId).subscribe(function (response) {
            _this.dataStore.maps.forEach(function (m, i) {
                if (m.mapId === mapId) {
                    _this.dataStore.maps.splice(i, 1);
                }
            });
            _this._maps.next(_this.dataStore.maps);
        }, function (error) { return console.log(error); });
    };
    MapService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _b) || Object])
    ], MapService);
    return MapService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map.service.js.map

/***/ },

/***/ 1116:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_field__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapBuilderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapBuilderService = (function () {
    function MapBuilderService(_fb) {
        this._fb = _fb;
        this.ruleFieldSeqNum = 1;
        this.condSeqNum = 1;
    }
    MapBuilderService.prototype.buildMap = function () {
        return this._fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            effective_Date: [new Date()],
            active: [true],
            transformations: this._fb.array([])
        });
    };
    MapBuilderService.prototype.buildTransform = function () {
        return this._fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            rule: this._fb.group({
                rule_Value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                alt_Value: [''],
                rule_Operation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                targetField: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
                ruleFields: this._fb.array([])
            }),
            conditions: this._fb.array([])
        });
    };
    MapBuilderService.prototype.buildRuleField = function () {
        return this._fb.group({
            seqNum: [this.ruleFieldSeqNum++],
            append: [''],
            prepend: [''],
            custom_Format: [''],
            field: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            trim: [false]
        });
    };
    // Init new condition
    MapBuilderService.prototype.buildCondition = function () {
        var leftField = this._fb.control(new __WEBPACK_IMPORTED_MODULE_1__field_field__["a" /* Field */]('', '', 0, true), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        var operation = this._fb.control({ value: '', disabled: leftField.invalid });
        return this._fb.group({
            seqNum: [this.condSeqNum++],
            chain_Operation: [{ value: '', disabled: (leftField.invalid || this.condSeqNum == 1) },],
            left_Paren: [{ value: '', disabled: leftField.invalid }],
            operation: operation,
            cond_Value: [{ value: '', disabled: operation.invalid }],
            right_Paren: [{ value: '', disabled: leftField.invalid }],
            leftField: leftField,
            rightField: [{ value: new __WEBPACK_IMPORTED_MODULE_1__field_field__["a" /* Field */]('', '', 0, true), disabled: operation.invalid }],
            fieldToFieldCompare: [false]
        });
    };
    MapBuilderService.prototype.buildEditMapForm = function (editMap) {
        var _this = this;
        if (editMap != null) {
            this.mapForm = this.buildMap();
            if (editMap.transformations.length > 0) {
                var transformsControl_1 = this.mapForm.controls['transformations'];
                editMap.transformations.forEach(function (transform, i) {
                    var transformControl = _this.buildTransform();
                    transformsControl_1.push(transformControl);
                    if (transform.conditions != undefined && transform.conditions.length > 0) {
                        var condsControl_1 = transformControl.controls['conditions'];
                        transform.conditions.forEach(function (cond, i) {
                            condsControl_1.push(_this.buildCondition());
                        });
                    }
                    if (transform.rule.ruleFields != undefined && transform.rule.ruleFields.length > 0) {
                        var ruleFieldsControl_1 = transformControl.controls['rule'].controls['ruleFields'];
                        transform.rule.ruleFields.forEach(function (ruleField, i) {
                            ruleFieldsControl_1.push(_this.buildRuleField());
                        });
                    }
                });
            }
            this.mapForm.patchValue(editMap);
        }
        return this.mapForm;
    };
    MapBuilderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _a) || Object])
    ], MapBuilderService);
    return MapBuilderService;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-builder.service.js.map

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

/***/ 1128:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapEditComponent = (function () {
    function MapEditComponent(_fb, confirmationService, mapService, mapBuilderService) {
        this._fb = _fb;
        this.confirmationService = confirmationService;
        this.mapService = mapService;
        this.mapBuilderService = mapBuilderService;
    }
    MapEditComponent.prototype.initMapForm = function () {
        this.mapForm = this.mapBuilderService.buildMap();
    };
    MapEditComponent.prototype.onSubmit = function (map) {
        if (this.mapService.editing) {
            this.mapService.update(map);
        }
        else {
            this.mapService.add(map);
        }
        this.initMapForm();
    };
    MapEditComponent.prototype.addTransform = function () {
        var control = this.mapForm.controls['transformations'];
        control.push(this.mapBuilderService.buildTransform());
    };
    MapEditComponent.prototype.removeTransform = function (i) {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected transformation?",
            accept: function () {
                var control = _this.mapForm.controls['transformations'];
                control.removeAt(i);
            }
        });
    };
    MapEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.editMap.subscribe(function (editMap) {
            if (_this.mapService.editing) {
                _this.mapForm = _this.mapBuilderService.buildEditMapForm(editMap);
            }
            else {
                _this.initMapForm();
            }
        });
    };
    MapEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'map-edit',
            template: __webpack_require__(1220),
            styles: [__webpack_require__(1189)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__["a" /* MapBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__["a" /* MapBuilderService */]) === 'function' && _d) || Object])
    ], MapEditComponent);
    return MapEditComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-edit.component.js.map

/***/ },

/***/ 1129:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapListComponent = (function () {
    function MapListComponent(confirmationService, router, mapService) {
        this.confirmationService = confirmationService;
        this.router = router;
        this.mapService = mapService;
        // Control behavior of the list
        this.showHeader = true;
        this.showFooterOptions = true;
        this.emitSelected = false;
        // Emit selected maps
        this.onSelectedMapsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showDialog = false;
        this.canDelete = false;
        this.canEdit = false;
        this.selectedMaps = [];
        this.cols = [
            { field: 'description', header: 'Description' },
            { field: 'effective_Date', header: 'Effective Date' },
            { field: 'active', header: 'Active' },
            { field: 'created_By', header: 'Created By' },
            { field: 'creation_Date', header: 'Creation Date' },
            { field: 'modified_By', header: 'Modified By' },
            { field: 'date_Modified', header: 'Date Modified' }
        ];
    }
    MapListComponent.prototype.editMap = function () {
        this.mapService.setEditMap(this.selectedMaps[0]);
        this.router.navigate(['../edit']);
    };
    MapListComponent.prototype.deleteMaps = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "Are you sure that you wish to delete the selected map(s)?",
            accept: function () {
                _this.selectedMaps.forEach(function (c, i) {
                    _this.mapService.delete(c.mapId);
                });
                _this.selectedMaps = [];
            }
        });
        this.canDelete = false;
        this.canEdit = false;
    };
    //Update the state of the delete and edit buttons based on row selection
    MapListComponent.prototype.onRowSelect = function (event) {
        if (this.selectedMaps.length > 1) {
            this.canEdit = false;
        }
        else {
            this.canDelete = true;
            this.canEdit = true;
        }
        if (this.emitSelected)
            this.onSelectedMapsChange.emit(this.selectedMaps);
    };
    MapListComponent.prototype.onRowUnselect = function (event) {
        if (this.selectedMaps.length == 1) {
            this.canEdit = true;
        }
        if (this.selectedMaps.length == 0) {
            this.canDelete = false;
            this.canEdit = false;
        }
        if (this.emitSelected)
            this.onSelectedMapsChange.emit(this.selectedMaps);
    };
    MapListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.maps.subscribe(function (maps) { return _this.maps = maps; });
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], MapListComponent.prototype, "selectedMaps", void 0);
    MapListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'map-list',
            template: __webpack_require__(1221),
            styles: [__webpack_require__(1190)],
            inputs: ['showFooterOptions', 'showHeader', 'emitSelected'],
            outputs: ['onSelectedMapsChange']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]) === 'function' && _c) || Object])
    ], MapListComponent);
    return MapListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-list.component.js.map

/***/ },

/***/ 1151:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_edit_map_edit_component__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_list_map_list_component__ = __webpack_require__(1129);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapRoutingModule; });
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
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__map_list_map_list_component__["a" /* MapListComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_2__map_edit_map_edit_component__["a" /* MapEditComponent */] }
];
var MapRoutingModule = (function () {
    function MapRoutingModule() {
    }
    MapRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        }), 
        __metadata('design:paramtypes', [])
    ], MapRoutingModule);
    return MapRoutingModule;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-routing.module.js.map

/***/ },

/***/ 1152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapFileSelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapFileSelectComponent = (function () {
    function MapFileSelectComponent() {
    }
    MapFileSelectComponent.prototype.ngOnInit = function () {
    };
    MapFileSelectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-file-select',
            template: __webpack_require__(1222),
            styles: [__webpack_require__(1191)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapFileSelectComponent);
    return MapFileSelectComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-file-select.component.js.map

/***/ },

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapOptionsComponent = (function () {
    function MapOptionsComponent() {
    }
    MapOptionsComponent.prototype.ngOnInit = function () {
    };
    MapOptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-options',
            template: __webpack_require__(1223),
            styles: [__webpack_require__(1192)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapOptionsComponent);
    return MapOptionsComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-options.component.js.map

/***/ },

/***/ 1154:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapRunComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapRunComponent = (function () {
    function MapRunComponent() {
    }
    MapRunComponent.prototype.ngOnInit = function () {
    };
    MapRunComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-run',
            template: __webpack_require__(1224),
            styles: [__webpack_require__(1193)]
        }), 
        __metadata('design:paramtypes', [])
    ], MapRunComponent);
    return MapRunComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-run.component.js.map

/***/ },

/***/ 1155:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Map; });
/* unused harmony export Transformation */
/* unused harmony export Condition */
/* unused harmony export Rule */
/* unused harmony export RuleField */
//Classes
var Map = (function () {
    function Map(description, effective_Date, active, transformations) {
        this.description = description;
        this.effective_Date = effective_Date;
        this.active = active;
        this.transformations = transformations;
    }
    return Map;
}());
var Transformation = (function () {
    function Transformation(description, rule, conditions) {
        this.description = description;
        this.rule = rule;
        this.conditions = conditions;
    }
    return Transformation;
}());
var Condition = (function () {
    function Condition(seqNum, chain_Operation, operation, cond_Value, fieldToFieldCompare, leftField, left_Paren, right_Paren, rightField) {
        this.seqNum = seqNum;
        this.chain_Operation = chain_Operation;
        this.operation = operation;
        this.cond_Value = cond_Value;
        this.fieldToFieldCompare = fieldToFieldCompare;
        this.leftField = leftField;
        this.left_Paren = left_Paren;
        this.right_Paren = right_Paren;
        this.rightField = rightField;
    }
    return Condition;
}());
var Rule = (function () {
    function Rule(rule_Operation, targetField, ruleFields, rule_Value, alt_Value) {
        this.rule_Operation = rule_Operation;
        this.targetField = targetField;
        this.ruleFields = ruleFields;
        this.rule_Value = rule_Value;
        this.alt_Value = alt_Value;
    }
    return Rule;
}());
var RuleField = (function () {
    function RuleField(trim, seqNum, field, append, prepend, custom_Format) {
        this.trim = trim;
        this.seqNum = seqNum;
        this.field = field;
        this.append = append;
        this.prepend = prepend;
        this.custom_Format = custom_Format;
    }
    return RuleField;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map.js.map

/***/ },

/***/ 1156:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapRunService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapRunService = (function () {
    function MapRunService(dataService, fileUploadService) {
        this.dataService = dataService;
        this.fileUploadService = fileUploadService;
        // Array of FilePackages which will be appended to formdata
        this._filePackages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.filePackages = this._filePackages.asObservable();
        this._selectedMapId = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.selectedMapId = this._selectedMapId.asObservable();
    }
    // On changing selected mapping
    MapRunService.prototype.initFilePackages = function (mapId) {
        var _this = this;
        var filepackages = new Array();
        this.dataService.Get("Maps/MapSources", mapId)
            .subscribe(function (sources) {
            sources.forEach(function (source) {
                filepackages.push({
                    isPrimarySource: false,
                    sourceId: source["sourceId"],
                    sourceName: source["name"],
                    sourceDescription: source["description"],
                    firstRowHeader: true,
                    altHeadRow: 1,
                    delimiter: "",
                    file: null
                });
            });
            if (filepackages.length == 1) {
                filepackages[0].isPrimarySource = true;
            }
            _this._filePackages.next(filepackages);
            _this._selectedMapId.next(mapId);
        });
    };
    MapRunService.prototype.uploadAll = function (formValues) {
        var _this = this;
        var formData = new FormData();
        var options = formValues["options"];
        var filePackages = formValues['filePackages'];
        filePackages.forEach(function (fp, i) {
            formData.append("primary-" + fp.sourceId, fp.isPrimarySource);
            formData.append("firstRowIsHeader-" + fp.sourceId, fp.firstRowHeader);
            formData.append("altHeadRow-" + fp.sourceId, fp.altHeadRow);
            formData.append("delimiter-" + fp.sourceId, fp.delimiter);
            formData.append(fp.sourceId, fp.file, fp.file.name);
        });
        formData.append("mapId", this._selectedMapId.getValue());
        formData.append("evalConditions", options["evalConditions"]);
        formData.append("outputDelimiter", (options["outputDelimiter"] == "" ? "," : options["outputDelimiter"]));
        return this.fileUploadService.makeFileRequestFd("File/RunMapping", formData)
            .map(function (res) { return new Blob([res], { type: _this.getMimeType(options["fileExt"]) }); });
    };
    MapRunService.prototype.getMimeType = function (fileExt) {
        switch (fileExt) {
            case "csv":
                return "text/csv";
            case "txt":
                return "text/plain";
            case "dat":
                return "application/octet-stream";
            default:
                return "text/plain";
        }
    };
    MapRunService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["a" /* DataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["b" /* FileUploadService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_data_data_module__["b" /* FileUploadService */]) === 'function' && _b) || Object])
    ], MapRunService);
    return MapRunService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/map-run.service.js.map

/***/ },

/***/ 1157:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConditionEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionEditComponent = (function () {
    function ConditionEditComponent() {
        //Options for operator selection
        this.dateNumOpts = [
            { value: "==", display: "equals" },
            { value: "!=", display: "not equal" },
            { value: "<", display: "less than" },
            { value: "<=", display: "less than or equal" },
            { value: ">", display: "greater than" },
            { value: ">=", display: "greater than or equal" },
        ];
        this.textOpts = [
            { value: "==", display: "equals" },
            { value: "!=", display: "not equal" }
        ];
        this.boolOpts = [
            { value: "==", display: "equals" },
            { value: "!=", display: "not equal" }
        ];
    }
    ConditionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var leftFieldControl = this.conditionForm.controls["leftField"];
        leftFieldControl.statusChanges.subscribe(function (newStatus) {
            if (leftFieldControl.valid) {
                _this.conditionForm.controls["left_Paren"].enable();
                _this.conditionForm.controls["right_Paren"].enable();
                _this.conditionForm.controls["operation"].enable();
            }
            else {
                _this.conditionForm.controls["left_Paren"].disable();
                _this.conditionForm.controls["right_Paren"].disable();
                _this.conditionForm.controls["operation"].disable();
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], ConditionEditComponent.prototype, "conditionForm", void 0);
    ConditionEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'condition-edit',
            template: __webpack_require__(1225),
            styles: [__webpack_require__(1194)]
        }), 
        __metadata('design:paramtypes', [])
    ], ConditionEditComponent);
    return ConditionEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/condition-edit.component.js.map

/***/ },

/***/ 1158:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DateFormatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateFormatComponent = (function () {
    function DateFormatComponent() {
        //Fields for date
        this.dateParts = [];
        this.datePattern = "";
        this.dateExamplePattern = "";
        this.hasValidFormat = false;
        this.presetOpts = [
            { value: "dd/MM/yyyy", display: "dd/MM/yyyy" },
            { value: "MM/dd/yyyy", display: "MM/dd/yyyy" },
            { value: "yyyy/MM/dd", display: "yyyy/MM/dd" },
            { value: "yyyy/dd/MM", display: "yyyy/dd/MM" },
        ];
        this.dateOptions = [
            {
                label: "Day",
                options: [
                    { value: "d", display: "Day: 1 - 31" },
                    { value: "dd", display: "Day: 01 - 31" },
                    { value: "ddd", display: "Day: Mon" },
                    { value: "dddd", display: "Day: Monday" }
                ]
            },
            {
                label: "Month",
                options: [
                    { value: "M", display: "Month: 1 - 12" },
                    { value: "MM", display: "Month: 01 - 12" },
                    { value: "MMM", display: "Month: Jun" },
                    { value: "MMMM", display: "Month: June" }
                ]
            },
            {
                label: "Year",
                options: [
                    { value: "yy", display: "Year: 00 - 99" },
                    { value: "yyyy", display: "Year: 1900" }
                ]
            }
        ];
    }
    DateFormatComponent.prototype.deleteDatePart = function (i) {
        this.dateParts.splice(i, 1);
        this.modifyDatePattern();
    };
    DateFormatComponent.prototype.addDatePart = function () {
        this.dateParts.push(new DatePart("", ""));
    };
    DateFormatComponent.prototype.modifyDatePattern = function () {
        this.datePattern = "";
        //Create the date pattern from the date parts
        for (var i = 0; i < this.dateParts.length; i++) {
            this.datePattern += this.dateParts[i].value;
        }
        var dateFormat = __webpack_require__(1172);
        this.dateExamplePattern = dateFormat(new Date(), this.datePattern);
        var timestamp = Date.parse(this.dateExamplePattern);
        if (isNaN(timestamp) == false) {
            this.hasValidFormat = true;
        }
        else {
            this.dateExamplePattern = "Invalid Format";
            this.hasValidFormat = false;
        }
    };
    DateFormatComponent.prototype.ngOnInit = function () { };
    DateFormatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-format',
            template: __webpack_require__(1226),
            styles: [__webpack_require__(1195)]
        }), 
        __metadata('design:paramtypes', [])
    ], DateFormatComponent);
    return DateFormatComponent;
}());
var DatePart = (function () {
    function DatePart(type, value) {
        this.type = type;
        this.value = value;
    }
    return DatePart;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/date-format.component.js.map

/***/ },

/***/ 1159:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FieldFormatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldFormatComponent = (function () {
    function FieldFormatComponent() {
        this.showDialog = false;
    }
    //Modal Functions
    FieldFormatComponent.prototype.showEditingDialog = function (content) {
        this.showDialog = !this.showDialog;
    };
    FieldFormatComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], FieldFormatComponent.prototype, "fieldDataType", void 0);
    FieldFormatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'field-format',
            template: __webpack_require__(1227),
            styles: [__webpack_require__(1196)]
        }), 
        __metadata('design:paramtypes', [])
    ], FieldFormatComponent);
    return FieldFormatComponent;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/field-format.component.js.map

/***/ },

/***/ 1160:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_builder_service__ = __webpack_require__(1116);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RuleEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuleEditComponent = (function () {
    function RuleEditComponent(mapBuilderService) {
        this.mapBuilderService = mapBuilderService;
        this.rule_Operations = [
            { value: "field", display: "Field(s)" },
            { value: "assign", display: "Automatic / System Generated" },
            { value: "text", display: "Text" }
        ];
    }
    //Add and remove validation based on selection
    RuleEditComponent.prototype.subscribeRuleOpChange = function () {
        var _this = this;
        var control = this.ruleForm.controls["rule_Operation"];
        var changes = control.valueChanges;
        changes.subscribe(function (rule_Operation) {
            switch (rule_Operation) {
                case "sfield":
                    _this.addRuleFieldValidators();
                    _this.removeAssignValidators();
                    _this.removeTextValidators();
                    break;
                case "assign":
                    //Add validators back to the assign fields
                    _this.addAssignValidators();
                    _this.removeRuleFieldValidators();
                    _this.removeTextValidators();
                    break;
                case "text":
                    //Add validators back to the text fields
                    _this.addTextValidators();
                    _this.removeRuleFieldValidators();
                    _this.removeAssignValidators();
                    break;
            }
        });
    };
    // Methods for adding and removing validators
    RuleEditComponent.prototype.addRuleFieldValidators = function () {
        // Add validators back to the rulesourcefields
        var rsfsControl = this.ruleForm.controls["ruleFields"];
        for (var i = 0; i < rsfsControl.length; i++) {
            var rsfControl = rsfsControl.at(i);
            var sfControl = rsfControl.controls["sourceField"];
            sfControl.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
            sfControl.updateValueAndValidity();
        }
    };
    RuleEditComponent.prototype.removeRuleFieldValidators = function () {
        // Remove validators from the rulesourcefields
        var rsfsControl = this.ruleForm.controls["ruleFields"];
        for (var i = 0; i < rsfsControl.length; i++) {
            var rsfControl = rsfsControl.at(i);
            var sfControl = rsfControl.controls["sourceField"];
            sfControl.setValidators(null);
            sfControl.updateValueAndValidity();
        }
    };
    RuleEditComponent.prototype.addAssignValidators = function () {
    };
    RuleEditComponent.prototype.removeAssignValidators = function () {
    };
    RuleEditComponent.prototype.addTextValidators = function () {
        var ruleValueControl = this.ruleForm.controls["rule_Value"];
        ruleValueControl.setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        ruleValueControl.updateValueAndValidity();
    };
    RuleEditComponent.prototype.removeTextValidators = function () {
        var ruleValueControl = this.ruleForm.controls["rule_Value"];
        ruleValueControl.setValidators(null);
        ruleValueControl.updateValueAndValidity();
    };
    RuleEditComponent.prototype.addRuleField = function () {
        var control = this.ruleForm.controls['ruleFields'];
        control.push(this.mapBuilderService.buildRuleField());
    };
    RuleEditComponent.prototype.removeRuleField = function (i) {
        var x = i;
        var control = this.ruleForm.controls['ruleFields'];
        // renumber the seqnums of other source fields
        for (x; x < control.length; x++) {
            var group = control.at(x);
            var newVal = group.controls['seqNum'].value - 1;
            group.controls['seqNum'].setValue(newVal);
        }
        this.mapBuilderService.ruleFieldSeqNum--;
        control.removeAt(i);
    };
    RuleEditComponent.prototype.ngOnInit = function () {
        this.subscribeRuleOpChange();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], RuleEditComponent.prototype, "ruleForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('i'), 
        __metadata('design:type', Number)
    ], RuleEditComponent.prototype, "i", void 0);
    RuleEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rule-edit',
            template: __webpack_require__(1228),
            styles: [__webpack_require__(1197)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_map_builder_service__["a" /* MapBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_map_builder_service__["a" /* MapBuilderService */]) === 'function' && _b) || Object])
    ], RuleEditComponent);
    return RuleEditComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/rule-edit.component.js.map

/***/ },

/***/ 1161:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RuleFieldEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RuleFieldEditComponent = (function () {
    function RuleFieldEditComponent() {
    }
    RuleFieldEditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], RuleFieldEditComponent.prototype, "ruleFieldForm", void 0);
    RuleFieldEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rule-field-edit',
            template: __webpack_require__(1229),
            styles: [__webpack_require__(1198)]
        }), 
        __metadata('design:paramtypes', [])
    ], RuleFieldEditComponent);
    return RuleFieldEditComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/rule-field-edit.component.js.map

/***/ },

/***/ 1162:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_map_service__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__ = __webpack_require__(1116);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TransformationEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransformationEditComponent = (function () {
    function TransformationEditComponent(mapService, mapBuilderService) {
        this.mapService = mapService;
        this.mapBuilderService = mapBuilderService;
    }
    TransformationEditComponent.prototype.addCondition = function () {
        var control = this.transForm.controls['conditions'];
        control.push(this.mapBuilderService.buildCondition());
    };
    TransformationEditComponent.prototype.removeCondition = function (i) {
        var x = i;
        var control = this.transForm.controls['conditions'];
        // renumber the seqnums of other source fields
        for (x; x < control.length; x++) {
            var group = control.at(x);
            var newVal = group.controls['seqNum'].value - 1;
            group.controls['seqNum'].setValue(newVal);
        }
        this.mapBuilderService.condSeqNum--;
        control.removeAt(i);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === 'function' && _a) || Object)
    ], TransformationEditComponent.prototype, "transForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('i'), 
        __metadata('design:type', Number)
    ], TransformationEditComponent.prototype, "i", void 0);
    TransformationEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transformation-edit',
            template: __webpack_require__(1230),
            styles: [__webpack_require__(1199)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_map_service__["a" /* MapService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__["a" /* MapBuilderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_map_builder_service__["a" /* MapBuilderService */]) === 'function' && _c) || Object])
    ], TransformationEditComponent);
    return TransformationEditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/DJ/Desktop/ihubrevised/src/Frontend/src/transformation-edit.component.js.map

/***/ },

/***/ 1172:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return dateFormat;
    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);


/***/ },

/***/ 1189:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1190:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1191:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1192:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1193:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1194:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1195:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1196:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1197:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1198:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1199:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1220:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid add-margin-top\">\r\n    <h4>Add / Edit Maps</h4>\r\n    <hr />\r\n    <form [formGroup]=\"mapForm\" novalidate (ngSubmit)=\"onSubmit(mapForm.value)\">\r\n        <p-panel header=\"Map Options\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n                        <small *ngIf=\"!mapForm.controls.name.valid\" class=\"text-danger\">\r\n                            Map Name is required\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Description</label>\r\n                        <textarea class=\"form-control textarea-resize\" formControlName=\"description\"></textarea>\r\n                        <small *ngIf=\"!mapForm.controls.description.valid\" class=\"text-danger\">\r\n                            Map Description is required\r\n                        </small>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label>Effective Date</label>\r\n                        <p-calendar formControlName=\"effective_Date\"></p-calendar>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"active\">Active</label>\r\n                        <div>\r\n                            <p-inputSwitch onLabel=\"Yes\" offLabel=\"No\" formControlName=\"active\"></p-inputSwitch>\r\n                        </div>           \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addTransform()\"><span class=\"fa fa-plus\"></span> Add Transformation</button>\r\n                    </div>\r\n                </div>  \r\n            </div>  \r\n        </p-panel>          \r\n        <p-panel formArrayName=\"transformations\" *ngFor=\"let transformation of mapForm.controls.transformations?.controls; let i=index\" [toggleable]=\"true\">\r\n            <header style=\"display: inline-block;\">           \r\n                <span class=\"fa fa-close ui-panel-titlebar-toggler\" (click)=\"removeTransform(i)\"></span>  \r\n                <span class=\"ui-panel-title\">Transformation {{i+1}}</span>                                \r\n            </header>\r\n            <transformation-edit [group]=\"mapForm.controls.transformations.controls[i]\" [i]=\"i\"></transformation-edit>\r\n        </p-panel>           \r\n        <hr *ngIf=\"mapForm.controls.transformations.length > 0\"/>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"initMapForm()\"><span class=\"fa fa-eraser\"></span> Reset Map</button>      \r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!mapForm.valid\">Submit</button>     \r\n    </form>\r\n</div>\r\n<p-confirmDialog header=\"Confirm Deleting Transformation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ },

/***/ 1221:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid add-margin-top\">\r\n    <div *ngIf=\"showHeader\">\r\n        <h4>All Maps</h4>\r\n        <hr>\r\n    </div>\r\n    <p-dataTable [value]=\"maps\" [paginator]=\"true\" [rows]=\"10\" [rowsPerPageOptions]=\"[5,10,20]\" [resizableColumns]=\"true\" [responsive]=\"true\"\r\n                 [stacked]=\"stacked\" [(selection)]=\"selectedMaps\"\r\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\r\n        <header>\r\n            <div style=\"text-align:left\">\r\n                <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\r\n            </div>\r\n        </header>\r\n        <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\"></p-column>\r\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\" [sortable]=\"true\"></p-column>\r\n        <footer *ngIf=\"showFooterOptions\">\r\n            <div class=\"ui-helper-clearfix\" style=\"width:100%\">\r\n                <div style=\"float:left\">\r\n                    <button type=\"button\" pButton icon=\"fa-plus\" routerLink=\"/pages/map/edit\"  label=\"Add Map\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-remove\" (click)=\"deleteMaps()\" [disabled]=\"!canDelete\" label=\"Delete Map(s)\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-edit\" (click)=\"editMap()\" [disabled]=\"!canEdit\" label=\"Edit Map\"></button>\r\n                </div>\r\n            </div>\r\n        </footer>\r\n    </p-dataTable>\r\n</div>\r\n<p-confirmDialog header=\"Confirm Deleting Map(s)\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n\r\n"

/***/ },

/***/ 1222:
/***/ function(module, exports) {

module.exports = "<p>\r\n  map-file-select works!\r\n</p>\r\n"

/***/ },

/***/ 1223:
/***/ function(module, exports) {

module.exports = "<p>\r\n  map-options works!\r\n</p>\r\n"

/***/ },

/***/ 1224:
/***/ function(module, exports) {

module.exports = "<p>\r\n  map-run works!\r\n</p>\r\n"

/***/ },

/***/ 1225:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"conditionForm\" class=\"form-inline\">\r\n    <select class=\"form-control\" formControlName=\"chain_Operation\">\r\n        <option value=\"||\">Or</option>\r\n        <option value=\"&&\">And</option>\r\n    </select>\r\n\r\n\r\n    <select class=\"form-control\" formControlName=\"left_Paren\">\r\n        <option value=\"\"></option>\r\n        <option value=\"(\">(</option>\r\n    </select>\r\n\r\n    <small [hidden]=\"conditionForm.get('leftField').valid\" class=\"text-danger\">\r\n        Source Field is required\r\n    </small>\r\n\r\n    <div class=\"form-group\">\r\n        <select [ngClass]=\"{'has-danger': conditionForm.get('cond_Value').invalid}\" class=\"form-control\" formControlName=\"operation\">\r\n            <option value=\"\" disabled selected>Select Operation</option>\r\n            <option [hidden]=\"conditionForm.get('leftField').value.datatype != 'num' && conditionForm.get('leftField').value.datatype != 'currency' && conditionForm.get('leftField').value.datatype != 'date'\"\r\n                    *ngFor=\"let option of dateNumOpts\" [value]=\"option.value\">\r\n                {{option.display}}\r\n            </option>\r\n            <option [hidden]=\"conditionForm.get('leftField').value.datatype != 'text' && conditionForm.get('leftField').value.datatype != 'url' && conditionForm.get('leftField').value.datatype != 'email'\"\r\n                    *ngFor=\"let option of textOpts\" [value]=\"option.value\">\r\n                {{option.display}}\r\n            </option>\r\n            <option [hidden]=\"conditionForm.get('leftField').value.datatype != 'bool'\" *ngFor=\"let option of boolOpts\" [value]=\"option.value\">\r\n                {{option.display}}\r\n            </option>\r\n        </select>\r\n    </div>\r\n          \r\n    <!-- Display for non field-field compare -->\r\n    <div *ngIf=\"conditionForm.controls.fieldToFieldCompare.value == false\" class=\"form-group\">\r\n        <input *ngIf=\"conditionForm.get('leftField').value.datatype == 'text' \r\n        || conditionForm.get('leftField').value.datatype == 'url' || conditionForm.get('leftField').value.datatype == 'email'\"\r\n                class=\"form-control\" type=\"text\" formControlName=\"cond_Value\" />\r\n        <input *ngIf=\"conditionForm.get('leftField').value.datatype == 'num' \r\n        || conditionForm.get('leftField').value.datatype == 'currency'\"\r\n                class=\"form-control\" type=\"number\" step=\"any\" formControlName=\"cond_Value\" />\r\n        <input *ngIf=\"conditionForm.get('leftField').value.datatype == 'date'\" \r\n        type=\"date\" class=\"form-control\" formControlName=\"cond_Value\" />\r\n        <select *ngIf=\"conditionForm.get('leftField').value.datatype == 'bool'\" \r\n        class=\"form-control\" formControlName=\"cond_Value\">\r\n            <option value=\"\" disabled selected>Select T/F</option>\r\n            <option value=\"true\">True</option>\r\n            <option value=\"false\">False</option>\r\n        </select>\r\n    </div>\r\n\r\n    <!-- Display for field-field compare -->\r\n    <div *ngIf=\"conditionForm.get('fieldToFieldCompare').value == false\"> \r\n\r\n    </div>\r\n\r\n    <select class=\"form-control\" formControlName=\"right_Paren\">\r\n        <option value=\"\"></option>\r\n        <option value=\")\">)</option>\r\n    </select> \r\n</form>\r\n                        \r\n\r\n"

/***/ },

/***/ 1226:
/***/ function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n    <label for=\"presetPatterns\">Select Common Date Pattern (will clear custom formats)</label>\r\n    <select name=\"presetPatterns\" class=\"form-control\" [(ngModel)]=\"datePattern\">\r\n        <option value=\"\">Select Pattern</option>\r\n        <option *ngFor=\"let option of presetOpts\" [value]=\"option.value\">\r\n            {{option.display}}\r\n        </option>\r\n    </select>\r\n</div>\r\n<hr />\r\n<label>Create Custom Date Pattern</label>\r\n<div>\r\n    <ul class=\"list-group\" *ngIf=\"dateParts.length > 0\">\r\n        <li *ngFor=\"let datePart of dateParts; let i=index;\" class=\"list-group-item\">\r\n            <div class=\"row form-inline\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"type\">Select Type</label>\r\n                        <select #type name=\"type\" class=\"form-control\">\r\n                            <option value=\"\" disabled selected>Select Type</option>\r\n                            <option value=\"datepart\">Date Part</option>\r\n                            <option value=\"separator\">Separator</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <div *ngIf=\"type.value == 'datepart'\" class=\"form-group\">\r\n                        <!-- Datepart selects -->\r\n                        <label for=\"dateTimeOpts\">Date / Time Formats</label>\r\n                        <select class=\"form-control\" name=\"dateTimeOpts\" [(ngModel)]=\"datePart.value\" (ngModelChange)=\"modifyDatePattern()\" #dateTimeOpts=\"ngModel\">\r\n                            <option [value]=\"''\" disabled selected>Select Format</option>\r\n                            <optgroup *ngFor=\"let optGroup of dateOptions\" label=\"{{optGroup.label}}\">\r\n                                <option *ngFor=\"let option of optGroup.options\" [value]=\"option.value\">\r\n                                    {{option.display}}\r\n                                </option>\r\n                            </optgroup>\r\n                        </select>\r\n                    </div>\r\n                    <div *ngIf=\"type.value == 'separator'\" class=\"form-group\">\r\n                        <label for=\"separator\">Date / Time Separators</label>\r\n                        <select class=\"form-control\" name=\"separator\" [(ngModel)]=\"datePart.value\" (ngModelChange)=\"modifyDatePattern()\" #separator=\"ngModel\">\r\n                            <option [value]=\"''\" disabled selected>Select Separator</option>\r\n                            <option value=\"fslash\">/</option>\r\n                            <option value=\"dash\">-</option>\r\n                            <option value=\"colon\">:</option>\r\n                            <option value=\"space\">space</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteDatePart(i)\"><span class=\"fa fa-close\"></span> Delete Date Part</button>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n    <div class=\"alert\" *ngIf=\"datePattern.length > 0\" [ngClass]=\"{ 'alert-success': hasValidFormat, 'alert-danger': !hasValidFormat }\">\r\n        Example Format as Entered ( Current Date ): {{ dateExamplePattern }}\r\n    </div>\r\n</div>\r\n<button type=\"button\" class=\"btn btn-secondary\" (click)=\"addDatePart()\"><span class=\"fa fa-plus\"></span> Add Date Part</button>"

/***/ },

/***/ 1227:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"fieldDataType=='date'\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showEditingDialog()\"><span class=\"fa fa-pencil\"></span> Custom Date Format</button>\r\n</div>\r\n<p-dialog header=\"Select Field Format\" [modal]=\"true\" [responsive]=\"true\" [(visible)]=\"showDialog\">\r\n    <!--Date Editing-->\r\n    <div *ngIf=\"fieldDataType=='date'\" class=\"container-fluid\">\r\n        <date-format></date-format>\r\n    </div>\r\n</p-dialog>\r\n"

/***/ },

/***/ 1228:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"ruleForm\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <p-panel header=\"Rule Options\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\r\n            <!-- Select target field -->\r\n            \r\n            <small [hidden]=\"ruleForm.controls.targetField.valid\" class=\"text-danger\">\r\n                Target Field is required\r\n            </small>\r\n            <hr />\r\n            <!-- Select operation -->\r\n            <div>\r\n                <label>Assignment Options</label>\r\n                <div *ngFor=\"let rule_Opt of rule_Operations\">\r\n                    <label>\r\n                        <input type=\"radio\" formControlName=\"rule_Operation\" [value]=\"rule_Opt.value\">\r\n                        {{rule_Opt.display}}\r\n                    </label>\r\n                </div>\r\n            </div>\r\n          </p-panel>\r\n        </div>\r\n    </div> \r\n    <p-panel *ngIf=\"ruleForm.controls.rule_Operation.value != ''\" header=\"Add / Edit Rule Values\" [toggleable]=\"true\" styleClass=\"add-margin-bottom\">\r\n      <div *ngIf=\"ruleForm.controls.rule_Operation.value == 'field'\">\r\n                <button type=\"button\" (click)=\"addRuleField()\" class=\"btn btn-secondary add-margin-bottom\"><span class=\"fa fa-plus\"></span> Add Rule Field</button>          \r\n                <div formArrayName=\"ruleFields\" *ngIf=\"ruleForm.controls.ruleFields.length > 0\">\r\n                    <div class=\"row\" *ngFor=\"let ruleField of ruleForm.controls.ruleFields.controls; let i=index\">\r\n                        <div class=\"col-md-11\">\r\n                            <rule-field-edit [group]=\"ruleForm.controls.ruleFields.controls[i]\"></rule-field-edit>\r\n                        </div>\r\n                        <div class=\"col-md-1\">\r\n                            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeRuleField(i)\"><span class=\"fa fa-close\"></span></button>\r\n                        </div>\r\n                    </div> \r\n                </div>                            \r\n            </div>\r\n            <!-- Show for assign op -->\r\n            <div *ngIf=\"ruleForm.controls.rule_Operation.value == 'assign'\">\r\n\r\n            </div>\r\n            <!-- Show for plain text op -->\r\n            <div *ngIf=\"ruleForm.controls.rule_Operation.value == 'text'\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"rule_Value\">Rule Value</label>\r\n                    <textarea class=\"form-control textarea-resize\" placeholder=\"Value to set if conditions evaluate to true for a field\" formControlName=\"rule_Value\"></textarea>\r\n                    <small [hidden]=\"ruleForm.controls.rule_Value.valid\" class=\"text-danger\">\r\n                        Rule value is required\r\n                    </small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"alt_Value\">Alt Value (optional)</label>\r\n                    <textarea class=\"form-control textarea-resize\" placeholder=\"Value to set if conditions evaluate to false for a field\" formControlName=\"alt_Value\"></textarea>\r\n                </div>\r\n            </div>\r\n    </p-panel>\r\n</form>\r\n"

/***/ },

/***/ 1229:
/***/ function(module, exports) {

module.exports = "<form [formGroup]=\"ruleFieldForm\" class=\"form-inline\">    \r\n    <p-inputSwitch onLabel=\"Trim\" offLabel=\"No Trim\" formControlName=\"trim\"></p-inputSwitch>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Prepend Value\" formControlName=\"prepend\" />\r\n    <small [hidden]=\"ruleFieldForm.controls.field.valid\" class=\"text-danger\">\r\n         Field is required\r\n    </small>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Append Value\" formControlName=\"append\" />\r\n    <field-format *ngIf=\"ruleFieldForm.controls.field.value != null\" [fieldDataType]=\"ruleFieldForm.controls.field.value.datatype\"></field-format>\r\n</form>"

/***/ },

/***/ 1230:
/***/ function(module, exports) {

module.exports = "<div [formGroup]=\"transForm\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n                <label>Description</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"description\" />\r\n                <small [hidden]=\"transForm.controls.description.valid\" class=\"text-danger\">\r\n                    Description is required\r\n                </small>\r\n            </div>\r\n        </div>     \r\n    </div>\r\n    <rule-edit [group]=\"transForm.controls.rule\" [i]=\"i\" class=\"add-margin-bottom\"></rule-edit>\r\n    <div formArrayName=\"conditions\" class=\"add-margin-bottom\">\r\n        <p-panel header=\"Conditions\" [toggleable]=\"true\">\r\n            <button type=\"button\" class=\"btn btn-secondary  add-margin-bottom\" (click)=\"addCondition()\"><span class=\"fa fa-plus\"></span> Add Condition</button>\r\n            <div *ngFor=\"let condition of transForm.controls.conditions.controls; let i=index\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-11\">\r\n                        <condition-edit [group]=\"transForm.controls.conditions.controls[i]\"></condition-edit>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeCondition(i)\"><span class=\"fa fa-close\"></span></button>\r\n                    </div>          \r\n                </div>                        \r\n            </div>  \r\n        </p-panel>\r\n    </div>\r\n</div>\r\n"

/***/ }

});
//# sourceMappingURL=1.bundle.map