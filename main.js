(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-app\"></div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/character/character.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/character/character.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-sprite-anim [defaultAnim]='charInfo.GetIddle()' [heightSprite]='charInfo.GetHeight()' #mainAnim></app-sprite-anim>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ingame/ingame.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ingame/ingame.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <img class=\"ingameBackground\" src=\"assets/scenes/demo_scene.png\">\r\n    <div class=\"charContainer\">\r\n        <div class=\"charactersGrid\">\r\n\r\n            <div *ngFor=\"let enemy of enemies; let i = index\" class=\"grid-item\" [ngClass]=\"gridMonster(i)\">\r\n                <app-character [charInfo]=\"enemy\"></app-character>\r\n            </div>\r\n\r\n            <app-character [charInfo]=\"player\" class=\"grid-item player-item\" ></app-character>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/main-menu/main-menu.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/main-menu/main-menu.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sprite-anim [defaultAnim]='menuAnimation'></app-sprite-anim>\r\n\r\n<a href=\"#\" routerLink=\"/ingame\">Ingame</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sprite-anim/sprite-anim.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sprite-anim/sprite-anim.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imgContainer\" [ngStyle]=\"{'height': heightSprite + 'vh'}\">\n    <img [src]=currentFrame>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_ingame_ingame_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ingame/ingame.component */ "./src/app/components/ingame/ingame.component.ts");





const routes = [
    { path: '', component: _components_ingame_ingame_component__WEBPACK_IMPORTED_MODULE_4__["IngameComponent"] },
    { path: 'main', component: _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: white;\n}\n\n.dark-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: black;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VFa0NJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBMUJlO0FEUm5COztBREVBO0VFOEJJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBekJjO0FESGxCOztBREFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRXpDQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBRjJDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2xlYXItcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5kYXJrLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xlYXItcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn0iLCIkY29sb3ItcHJpbWFyeS0wOiAjMDBBMEZGO1x0Ly8gTWFpbiBQcmltYXJ5IGNvbG9yICovXHJcbiRjb2xvci1wcmltYXJ5LTE6ICMzNUIyRkM7XHJcbiRjb2xvci1wcmltYXJ5LTI6ICMwQ0E0RkY7XHJcbiRjb2xvci1wcmltYXJ5LTM6ICMwMDcwQjM7XHJcbiRjb2xvci1wcmltYXJ5LTQ6ICMwMDU1ODg7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMDogI0ZGQkIwMDtcdC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMTogI0ZGQzYyQTtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTI6ICNGRkJCMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0zOiAjRkZCQjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtNDogI0Q1OUMwMDtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMi0wOiAjRkYzRDAwO1x0Ly8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMi0xOiAjRkY1RDJBO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMjogI0ZGM0QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTM6ICNGRjNEMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi00OiAjRDUzMzAwO1xyXG5cclxuJHRleHQtY29sb3ItY2xlYXI6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHRleHQtY29sb3ItZGFyazogcmdiYSgwLCAwLCAwKTtcclxuXHJcbiRmb250LXdlaWdodHM6IChcclxuICAgIFwicmVndWxhclwiOiA0MDAsXHJcbiAgICBcIm1lZGl1bVwiOiA1MDAsXHJcbiAgICBcImJvbGRcIjogNzAwLFxyXG4pO1xyXG5cclxuJGZvbnQtc2l6ZXM6IChcclxuICAgIFwic21hbGxcIjogMTRweCxcclxuICAgIFwibWVkaXVtXCI6IDIycHgsXHJcbiAgICBcImJpZ1wiOiAzMnB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGZvbnQtd2VpZ2h0KCRuYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC13ZWlnaHRzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250LXNpemUoJG5hbWUpe1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRmb250LXNpemVzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkY29sb3IpIHtcclxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKCRzaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBmb250LXdlaWdodCgkd2VpZ2h0KTtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiAgdHJhbnNpdGlvbi1lYXNlKCR0aW1lOiAuM3MgKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-fantasy';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ "./src/app/components/main-menu/main-menu.component.ts");
/* harmony import */ var _components_sprite_anim_sprite_anim_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sprite-anim/sprite-anim.component */ "./src/app/components/sprite-anim/sprite-anim.component.ts");
/* harmony import */ var _components_ingame_ingame_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ingame/ingame.component */ "./src/app/components/ingame/ingame.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/character/character.component */ "./src/app/components/character/character.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
            _components_sprite_anim_sprite_anim_component__WEBPACK_IMPORTED_MODULE_6__["SpriteAnimComponent"],
            _components_ingame_ingame_component__WEBPACK_IMPORTED_MODULE_7__["IngameComponent"],
            _components_character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/classes/character.ts":
/*!**************************************!*\
  !*** ./src/app/classes/character.ts ***!
  \**************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
class Character {
    constructor(iddleAnim, attackAnim, health, coldDown, damage, height) {
        this.iddleAnim = iddleAnim;
        this.attackAnim = attackAnim;
        this.health = health;
        this.currentHealth = health;
        this.coldDown = coldDown;
        this.damage = damage;
        this.height = height;
    }
    GetIddle() {
        return this.iddleAnim;
    }
    GetAttack() {
        return this.attackAnim;
    }
    IsPlayer() {
        return false;
    }
    TakeDamage(damage) {
        this.currentHealth -= damage;
        if (this.currentHealth <= 0) {
            this.Death();
        }
    }
    Death() {
        this.currentHealth = 0;
    }
    GetHeight() {
        return this.height;
    }
}
Character.ctorParameters = () => [
    { type: undefined },
    { type: undefined },
    { type: Number },
    { type: Number },
    { type: Number },
    { type: Number }
];


/***/ }),

/***/ "./src/app/classes/player-character.ts":
/*!*********************************************!*\
  !*** ./src/app/classes/player-character.ts ***!
  \*********************************************/
/*! exports provided: PlayerCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerCharacter", function() { return PlayerCharacter; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character */ "./src/app/classes/character.ts");

class PlayerCharacter extends _character__WEBPACK_IMPORTED_MODULE_0__["Character"] {
    IsPlayer() {
        return true;
    }
}


/***/ }),

/***/ "./src/app/components/character/character.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/character/character.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGFyYWN0ZXJcXGNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59IiwiOmhvc3Qge1xuICB6LWluZGV4OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/character/character.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/character/character.component.ts ***!
  \*************************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterComponent = class CharacterComponent {
    constructor() {
        this.isPlayer = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.mainAnim.PlayAnimation(this.charInfo.GetAttack());
        }, 5000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterComponent.prototype, "charInfo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterComponent.prototype, "isPlayer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainAnim', { static: false })
], CharacterComponent.prototype, "mainAnim", void 0);
CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character',
        template: __webpack_require__(/*! raw-loader!./character.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/character/character.component.html"),
        styles: [__webpack_require__(/*! ./character.component.scss */ "./src/app/components/character/character.component.scss")]
    })
], CharacterComponent);



/***/ }),

/***/ "./src/app/components/ingame/ingame.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/ingame/ingame.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: white;\n}\n\n.dark-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: black;\n}\n\n.flex-center, .charactersGrid .grid-item, .charContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered, .ingameBackground {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.ingameBackground {\n  position: absolute;\n  height: 140vh;\n  z-index: 0;\n}\n\n.charContainer {\n  z-index: 2;\n  height: calc(80vh);\n  top: 0;\n  left: 0;\n}\n\n.charactersGrid {\n  height: 45vh;\n  width: 60vh;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.charactersGrid .grid-item {\n  position: relative;\n}\n\n.charactersGrid .player-item {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 4;\n  grid-column-end: 6;\n}\n\n.charactersGrid .grid-monster-1-0 {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-0 {\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-1 {\n  grid-row-start: 3;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbmdhbWVcXGluZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvaW5nYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUVrQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7QURSbkI7O0FERUE7RUU4QkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUF6QmM7QURIbEI7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDQ0o7O0FFekNBO0VBRUksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBRjJDSjs7QUV4Q0E7RUFFSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBRjBDSjs7QUV2Q0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7QUZ5Q0o7O0FFdkNJO0VBQ0ksa0JBQUE7QUZ5Q1I7O0FFbENJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRm9DUjs7QUVqQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGbUNSOztBRWhDSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUZrQ1I7O0FFL0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRmlDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5nYW1lL2luZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2xlYXItcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5kYXJrLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xlYXItcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZmxleC1jZW50ZXIsIC5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1pdGVtLCAuY2hhckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyZWQsIC5pbmdhbWVCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmluZ2FtZUJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTQwdmg7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jaGFyQ29udGFpbmVyIHtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiBjYWxjKDgwdmgpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jaGFyYWN0ZXJzR3JpZCB7XG4gIGhlaWdodDogNDV2aDtcbiAgd2lkdGg6IDYwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDBmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbn1cbi5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXJhY3RlcnNHcmlkIC5wbGF5ZXItaXRlbSB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICBncmlkLWNvbHVtbi1lbmQ6IDY7XG59XG4uY2hhcmFjdGVyc0dyaWQgLmdyaWQtbW9uc3Rlci0xLTAge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiA1O1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuLmNoYXJhY3RlcnNHcmlkIC5ncmlkLW1vbnN0ZXItMi0wIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogMztcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cbi5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1tb25zdGVyLTItMSB7XG4gIGdyaWQtcm93LXN0YXJ0OiAzO1xuICBncmlkLXJvdy1lbmQ6IDU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59IiwiJGNvbG9yLXByaW1hcnktMDogIzAwQTBGRjtcdC8vIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kY29sb3ItcHJpbWFyeS0xOiAjMzVCMkZDO1xyXG4kY29sb3ItcHJpbWFyeS0yOiAjMENBNEZGO1xyXG4kY29sb3ItcHJpbWFyeS0zOiAjMDA3MEIzO1xyXG4kY29sb3ItcHJpbWFyeS00OiAjMDA1NTg4O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNGRkJCMDA7XHQvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0xLTE6ICNGRkM2MkE7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0yOiAjRkZCQjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMzogI0ZGQkIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTQ6ICNENTlDMDA7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTItMDogI0ZGM0QwMDtcdC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMTogI0ZGNUQyQTtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTI6ICNGRjNEMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0zOiAjRkYzRDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItNDogI0Q1MzMwMDtcclxuXHJcbiR0ZXh0LWNvbG9yLWNsZWFyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiR0ZXh0LWNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCk7XHJcblxyXG4kZm9udC13ZWlnaHRzOiAoXHJcbiAgICBcInJlZ3VsYXJcIjogNDAwLFxyXG4gICAgXCJtZWRpdW1cIjogNTAwLFxyXG4gICAgXCJib2xkXCI6IDcwMCxcclxuKTtcclxuXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBcInNtYWxsXCI6IDE0cHgsXHJcbiAgICBcIm1lZGl1bVwiOiAyMnB4LFxyXG4gICAgXCJiaWdcIjogMzJweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBmb250LXdlaWdodCgkbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtd2VpZ2h0cywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZm9udC1zaXplKCRuYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gIHRyYW5zaXRpb24tZWFzZSgkdGltZTogLjNzICkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG4uaW5nYW1lQmFja2dyb3VuZHtcclxuICAgIEBleHRlbmQgLmNlbnRlcmVkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxNDB2aDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jaGFyQ29udGFpbmVye1xyXG4gICAgQGV4dGVuZCAuZmxleC1jZW50ZXI7ICAgXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDgwdmgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNoYXJhY3RlcnNHcmlke1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG4gICAgd2lkdGg6IDYwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMSk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDBmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XHJcblxyXG4gICAgLmdyaWQtaXRlbXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XHJcbiAgICAvLyAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgICAgICBAZXh0ZW5kIC5mbGV4LWNlbnRlcjsgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnBsYXllci1pdGVte1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtbW9uc3Rlci0xLTB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1tb25zdGVyLTItMHtcclxuICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICBncmlkLXJvdy1lbmQ6IDM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLW1vbnN0ZXItMi0xe1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/ingame/ingame.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ingame/ingame.component.ts ***!
  \*******************************************************/
/*! exports provided: IngameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngameComponent", function() { return IngameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/animation/info-anim */ "./src/app/interfaces/animation/info-anim.ts");
/* harmony import */ var src_app_classes_player_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/player-character */ "./src/app/classes/player-character.ts");
/* harmony import */ var src_app_classes_character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/classes/character */ "./src/app/classes/character.ts");





let IngameComponent = class IngameComponent {
    constructor() {
        this.enemies = [];
    }
    ngOnInit() {
        this.player = new src_app_classes_player_character__WEBPACK_IMPORTED_MODULE_3__["PlayerCharacter"]({
            name: "knightIddle",
            length: 14,
            speed: 100,
            play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
        }, {
            name: "knightAttack",
            length: 14,
            speed: 80,
            play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
        }, 100, 2, 50, 20);
        this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_4__["Character"]({
            name: "wolfIddle",
            length: 12,
            speed: 100,
            play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
        }, {
            name: "wolfAttack",
            length: 15,
            speed: 80,
            play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
        }, 100, 2, 50, 30));
        setTimeout(() => {
            this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_4__["Character"]({
                name: "wolfIddle",
                length: 12,
                speed: 100,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
            }, {
                name: "wolfAttack",
                length: 15,
                speed: 80,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
            }, 100, 2, 50, 35));
        }, 5000);
    }
    gridMonster(index) {
        return "grid-monster-" + this.enemies.length + "-" + index;
    }
};
IngameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingame',
        template: __webpack_require__(/*! raw-loader!./ingame.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ingame/ingame.component.html"),
        styles: [__webpack_require__(/*! ./ingame.component.scss */ "./src/app/components/ingame/ingame.component.scss")]
    })
], IngameComponent);



/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/main-menu/main-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/animation/info-anim */ "./src/app/interfaces/animation/info-anim.ts");



let MainMenuComponent = class MainMenuComponent {
    constructor() { }
    ngOnInit() {
        this.menuAnimation = {
            name: "knightIddle",
            length: 14,
            speed: 100,
            play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
        };
    }
};
MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-menu',
        template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/main-menu/main-menu.component.html"),
        styles: [__webpack_require__(/*! ./main-menu.component.scss */ "./src/app/components/main-menu/main-menu.component.scss")]
    })
], MainMenuComponent);



/***/ }),

/***/ "./src/app/components/sprite-anim/sprite-anim.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/sprite-anim/sprite-anim.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: white;\n}\n\n.dark-regular-text {\n  font-size: 22px;\n  font-weight: 400;\n  color: black;\n}\n\n.flex-center, :host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.imgContainer {\n  width: auto;\n  position: absolute;\n}\n\n.imgContainer img {\n  height: 100%;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNwcml0ZS1hbmltXFxzcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9zcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nwcml0ZS1hbmltL0Y6XFxQcm95ZWN0b3MgUGVyc29uYWxlc1xcQW5ndWxhcjhcXGFuZ3VsYXItZmFudGFzeS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFRWtDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtBRFJuQjs7QURFQTtFRThCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQXpCYztBREhsQjs7QURBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNHSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFFSSwrQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QUVyQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUZ3Q0o7O0FFdkNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUZ5Q1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nwcml0ZS1hbmltL3Nwcml0ZS1hbmltLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jbGVhci1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmRhcmstcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZsZXgtY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZnVsbC1zY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbGVhci1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRhcmstcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5mbGV4LWNlbnRlciwgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmltZ0NvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW1nQ29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59IiwiJGNvbG9yLXByaW1hcnktMDogIzAwQTBGRjtcdC8vIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kY29sb3ItcHJpbWFyeS0xOiAjMzVCMkZDO1xyXG4kY29sb3ItcHJpbWFyeS0yOiAjMENBNEZGO1xyXG4kY29sb3ItcHJpbWFyeS0zOiAjMDA3MEIzO1xyXG4kY29sb3ItcHJpbWFyeS00OiAjMDA1NTg4O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNGRkJCMDA7XHQvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0xLTE6ICNGRkM2MkE7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0yOiAjRkZCQjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMzogI0ZGQkIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTQ6ICNENTlDMDA7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTItMDogI0ZGM0QwMDtcdC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMTogI0ZGNUQyQTtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTI6ICNGRjNEMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0zOiAjRkYzRDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItNDogI0Q1MzMwMDtcclxuXHJcbiR0ZXh0LWNvbG9yLWNsZWFyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiR0ZXh0LWNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCk7XHJcblxyXG4kZm9udC13ZWlnaHRzOiAoXHJcbiAgICBcInJlZ3VsYXJcIjogNDAwLFxyXG4gICAgXCJtZWRpdW1cIjogNTAwLFxyXG4gICAgXCJib2xkXCI6IDcwMCxcclxuKTtcclxuXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBcInNtYWxsXCI6IDE0cHgsXHJcbiAgICBcIm1lZGl1bVwiOiAyMnB4LFxyXG4gICAgXCJiaWdcIjogMzJweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBmb250LXdlaWdodCgkbmFtZSl7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtd2VpZ2h0cywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZm9udC1zaXplKCRuYW1lKXtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gIHRyYW5zaXRpb24tZWFzZSgkdGltZTogLjNzICkge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG46aG9zdHtcclxuICAgIEBleHRlbmQgLmZsZXgtY2VudGVyO1xyXG59XHJcblxyXG4uaW1nQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/sprite-anim/sprite-anim.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/sprite-anim/sprite-anim.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpriteAnimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimComponent", function() { return SpriteAnimComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../interfaces/animation/info-anim */ "./src/app/interfaces/animation/info-anim.ts");



let SpriteAnimComponent = class SpriteAnimComponent {
    constructor() {
        this.indexFrame = 0;
    }
    ngOnInit() {
        this.PlayAnimation(this.defaultAnim);
    }
    ngOnDestroy() {
        this.ClearAnimInterval();
    }
    SetDefaultAnimation(newAnim) {
        this.defaultAnim = Object.create(newAnim);
    }
    PlayAnimation(newAnim) {
        this.currentAnim = Object.create(newAnim);
        this.SetCurrentFrames(newAnim);
        this.PlayCurrentAnim();
    }
    SetCurrentFrames(info) {
        this.currentFrames = [];
        for (let i = 1; i <= info.length; i++) {
            this.currentFrames.push("assets/sprites/" + info.name + "/" + info.name + "_(" + i + ")" + ".png");
        }
    }
    PlayCurrentAnim() {
        this.ClearAnimInterval();
        this.indexFrame = 0;
        this.currentFrame = this.currentFrames[this.indexFrame];
        this.currentInterval = setInterval(() => { this.AnimInterval(); }, this.currentAnim.speed);
    }
    AnimInterval() {
        this.indexFrame++;
        if (this.indexFrame >= this.currentAnim.length) {
            switch (this.currentAnim.play) {
                case _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop:
                    this.indexFrame = 0;
                    break;
                case _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot:
                    this.PlayAnimation(this.defaultAnim);
                    break;
            }
        }
        this.currentFrame = this.currentFrames[this.indexFrame];
    }
    ClearAnimInterval() {
        if (this.currentInterval)
            clearInterval(this.currentInterval);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpriteAnimComponent.prototype, "defaultAnim", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpriteAnimComponent.prototype, "heightSprite", void 0);
SpriteAnimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sprite-anim',
        template: __webpack_require__(/*! raw-loader!./sprite-anim.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sprite-anim/sprite-anim.component.html"),
        styles: [__webpack_require__(/*! ./sprite-anim.component.scss */ "./src/app/components/sprite-anim/sprite-anim.component.scss")]
    })
], SpriteAnimComponent);



/***/ }),

/***/ "./src/app/interfaces/animation/info-anim.ts":
/*!***************************************************!*\
  !*** ./src/app/interfaces/animation/info-anim.ts ***!
  \***************************************************/
/*! exports provided: EnumAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumAnim", function() { return EnumAnim; });
var EnumAnim;
(function (EnumAnim) {
    EnumAnim[EnumAnim["loop"] = 0] = "loop";
    EnumAnim[EnumAnim["oneShoot"] = 1] = "oneShoot";
})(EnumAnim || (EnumAnim = {}));
;


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Proyectos Personales\Angular8\angular-fantasy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map