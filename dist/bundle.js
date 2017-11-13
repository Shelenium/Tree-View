/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyRateData", function() { return currencyRateData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getData_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__links_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createTree_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainSizeCalc_js__ = __webpack_require__(9);





var currencyRateData;
let shiftBig = 50;
let shiftSmall = 40;

var init = function() {

    var currencyRate = Object(__WEBPACK_IMPORTED_MODULE_0__getData_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__links_js__["a" /* linkCurrency */]);
    var unitData = Object(__WEBPACK_IMPORTED_MODULE_0__getData_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__links_js__["b" /* linkUnit */]);

    currencyRate.then((data) => {
        currencyRateData = data;
    });

    unitData.then((data) => {
        Object(__WEBPACK_IMPORTED_MODULE_2__createTree_js__["a" /* default */])(data, '0main');
        contejnerDraw();
        document.getElementById('0mainchildren').classList.remove('invisible');
    });
}

function contejnerDraw() {
    let shift = (document.documentElement.clientWidth >= 767) ? shiftBig : shiftSmall;
    Object(__WEBPACK_IMPORTED_MODULE_3__mainSizeCalc_js__["a" /* default */])(shift);
}

window.onload = init();
window.onresize = contejnerDraw;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return closeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openState; });
var closeState = "\u25BC";
var openState = "\u25B2";


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkStatus_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parseJSON_js__ = __webpack_require__(4);



var getData = function(link) {
    return (
        fetch(link)
        .then(__WEBPACK_IMPORTED_MODULE_0__checkStatus_js__["a" /* default */])
        .then(__WEBPACK_IMPORTED_MODULE_1__parseJSON_js__["a" /* default */])
    )
}
/* harmony default export */ __webpack_exports__["a"] = (getData);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}
/* harmony default export */ __webpack_exports__["a"] = (checkStatus);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function parseJSON(response) {
    return response.json()
}
/* harmony default export */ __webpack_exports__["a"] = (parseJSON);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return linkUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return linkCurrency; });
var linkUnit = './json/unit.json';
var linkCurrency = './json/currency-rate.json';


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Unit_js__ = __webpack_require__(7);


function createTree(data, parent_id) {

    let dataLen = data[0] ? data.length : 1;

    for (let i = 0; i < dataLen; i++) {
        let dataItem = data[0] ? data[i] : data;

        if (!document.getElementById(parent_id + 'children')) {
            let unitContBox = document.createElement('div');
            unitContBox.id = parent_id + 'children';
            document.getElementById(parent_id).appendChild(unitContBox);
            document.getElementById(unitContBox.id).classList.add('children', 'invisible');
        }

        var unit = new __WEBPACK_IMPORTED_MODULE_0__Unit_js__["a" /* default */](dataItem, parent_id);
        unit.drawSelf();
        if (dataItem.childUnits.length > 0) {
            createTree(dataItem.childUnits, dataItem.id);
        }
    }

}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttonAction__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttonState_js__ = __webpack_require__(1);




class Unit {
    constructor(obj, parent_id) {
        this.id = obj.id;
        this.parent_id = parent_id;
        this.value =
            obj.budget ?
            obj.budget.value : undefined;
        this.unitOwner = obj.unitOwner;
        this.childUnits = obj.childUnits;
        this.rate =
            obj.budget ?
            __WEBPACK_IMPORTED_MODULE_0__index_js__["currencyRateData"].filter(x => x.currency.id == obj.budget.currency.id)[0].rate : undefined;
        return this;
    }

    drawSelf() {

        let unitBoxOwner = document.createElement('h3');
        unitBoxOwner.appendChild(document.createTextNode(this.unitOwner));

        let unitBoxValue = document.createElement('p');
        let value =
            this.value ?
            (this.value * this.rate).toFixed(2) + ' $' : 'no budget for this unit';
        unitBoxValue.appendChild(document.createTextNode(value));

        let unitArticle = document.createElement('article');
        unitArticle.appendChild(unitBoxOwner);
        unitArticle.appendChild(unitBoxValue);

        let isHasChild = this.childUnits.length;
        if (isHasChild) {
            let unitButton = document.createElement('button');
            unitButton.innerHTML = __WEBPACK_IMPORTED_MODULE_2__buttonState_js__["a" /* closeState */];
            unitButton.classList.add('open-close-button');
            unitButton.setAttribute('data-id', this.id);
            unitButton.onclick = __WEBPACK_IMPORTED_MODULE_1__buttonAction__["a" /* default */];
            unitArticle.appendChild(unitButton);
        }

        let unitBox = document.createElement('div');
        unitBox.id = this.id;
        unitBox.classList.add('box');
        unitBox.setAttribute('data-parent-id', this.parent_id);
        unitBox.appendChild(unitArticle);

        document.getElementById(this.parent_id + 'children').appendChild(unitBox);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Unit;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buttonAction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttonState_js__ = __webpack_require__(1);


function buttonAction() {
    this.innerHTML =
        (this.innerHTML == __WEBPACK_IMPORTED_MODULE_0__buttonState_js__["a" /* closeState */]) ?
        __WEBPACK_IMPORTED_MODULE_0__buttonState_js__["b" /* openState */] : __WEBPACK_IMPORTED_MODULE_0__buttonState_js__["a" /* closeState */];
    let set = document.getElementById(this.dataset.id + 'children');
    set.classList.toggle('invisible');

}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mainSizeCalc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findShiftMax_js__ = __webpack_require__(10);


function mainSizeCalc(shift) {
    let shiftLeft = Object(__WEBPACK_IMPORTED_MODULE_0__findShiftMax_js__["a" /* default */])('.box')[0] * shift;
    let boxSize = 4 * shift;
    document.getElementById('0main').style.width = shiftLeft + boxSize + shift + 'px';
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findShiftMax;
function findShiftMax(style) {
    let boxSet = document.querySelectorAll(style);
    let boxSetLen = boxSet.length;
    let max = 0;

    for (let i = 0; i < boxSetLen; i++) {
        max =
            (max > boxSet[i].id) ?
            max : boxSet[i].id;
    }
    return max;
}

/***/ })
/******/ ]);