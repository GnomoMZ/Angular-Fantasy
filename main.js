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

module.exports = "<div>\n    <app-sprite-anim [defaultAnim]='character.GetIddle()' [spriteSheetInfo]='character.GetSpriteSheetInfo()' [heightSprite]='character.GetHeight()' #mainAnim></app-sprite-anim>\n    <app-damage-text *ngFor=\"let damages of damagesToShow; let i = index\" [damage]='damages'></app-damage-text>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/damage-text/damage-text.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/damage-text/damage-text.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"damage-text\">{{damage}}</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ingame/ingame.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ingame/ingame.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"containerBG\">\r\n        <img class=\"ingameBackground\" src=\"assets/scenes/demo_scene.png\">\r\n    </div>\r\n    <div class=\"charContainer\">\r\n        <div class=\"charactersGrid\">\r\n\r\n            <div *ngFor=\"let enemy of enemies; let i = index\" class=\"grid-item\" [ngClass]=\"GridMonster(i)\">\r\n                <app-character [character]=\"enemy\" #enemyComponent></app-character>\r\n            </div>\r\n\r\n            <app-character *ngIf=\"player\" [character]=\"player\" class=\"grid-item player-item\" #playerComponent></app-character>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"containerUI playerUI\" *ngIf=\"player\">\r\n        <app-ui-character class=\"UI\" [character]=\"player\" ></app-ui-character>\r\n    </div>\r\n\r\n    <div class=\"containerUI enemiesUI\" *ngIf=\"enemies.length\">\r\n\r\n        <div *ngFor=\"let enemy of enemies; let i = index\" class=\"enemyUI\" [ngClass]=\"GridMonster(i)\">\r\n            <app-ui-character class=\"UI enemy\" [character]=\"enemy\"></app-ui-character>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>"

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

module.exports = "<div class=\"imgContainer\" [ngStyle]=\"GetSizeContainer()\" (window:resize)=\"CalcSizes()\">\n    <img [src]=spriteSheet [ngStyle]=\"GetImgStyle()\" >\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ui-character/ui-character.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ui-character/ui-character.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-grid\">\n    <div class=\"item-grid name\"><span>{{character.GetName() | capitalize }}</span></div>\n    <div class=\"item-grid hp\"><span>{{character.GetCurrentHealth()}}</span><span\n            class=\"hpSeparator\">/</span><span>{{character.GetTotalHealth()}}</span></div>\n    <div class=\"item-grid coldDown\" >\n        <div class=\"fill\" [ngStyle]=\"GetCD()\"></div>\n    </div>\n</div>"

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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.foward-animation {\n  -webkit-animation-fill-mode: forwards;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n  /* When the spec is finished */\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VFa0NJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBMUJlO0VBMkJmLDhDQUFBO0FEbENKOztBRENBO0VFOEJJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBMUJlO0VBMkJmLDhDQUFBO0FEM0JKOztBREZBO0VFMEJJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBekJjO0VBMEJkLDhDQUFBO0FEcEJKOztBRExBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ1FKOztBREpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURKQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBQ01KOztBREZBO0VBQ0kscUNBQUE7RUFBdUMsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ3ZDLDZCQUFBO0VBQXVDLDhCQUFBO0FDVTNDOztBRS9EQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBRmlFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2xlYXItcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5jbGVhci1tZWRpdW0tdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgYm9sZCwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uZGFyay1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgXHJcbn1cclxuXHJcbi5mdWxsLXNjcmVlbntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJnLWFwcCB7XHJcbiAgICBAZXh0ZW5kIC5mdWxsLXNjcmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcblxyXG4uZm93YXJkLWFuaW1hdGlvbntcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IC8qIENocm9tZSAxNissIFNhZmFyaSA0KyAqL1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgLyogRkYgNSsgKi9cclxuICAgIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAgIC8qIE5vdCBpbXBsZW1lbnRlZCB5ZXQgKi9cclxuICAgIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgIC8qIElFIDEwKyAqL1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgICAgICAgLyogV2hlbiB0aGUgc3BlYyBpcyBmaW5pc2hlZCAqLyAgXHJcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xlYXItcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNsZWFyLW1lZGl1bS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmRhcmstcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsLXNjcmVlbiwgLmJnLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZy1hcHAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5mb3dhcmQtYW5pbWF0aW9uIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogQ2hyb21lIDE2KywgU2FmYXJpIDQrICovXG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIEZGIDUrICovXG4gIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBOb3QgaW1wbGVtZW50ZWQgeWV0ICovXG4gIC1tcy1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogSUUgMTArICovXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBXaGVuIHRoZSBzcGVjIGlzIGZpbmlzaGVkICovXG59XG5cbi5iZy1hcHAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcbiAgei1pbmRleDogLTE7XG59IiwiJGNvbG9yLXByaW1hcnktMDogIzAwYTBmZjsgLy8gTWFpbiBQcmltYXJ5IGNvbG9yICovXHJcbiRjb2xvci1wcmltYXJ5LTE6ICMzNWIyZmM7XHJcbiRjb2xvci1wcmltYXJ5LTI6ICMwY2E0ZmY7XHJcbiRjb2xvci1wcmltYXJ5LTM6ICMwMDcwYjM7XHJcbiRjb2xvci1wcmltYXJ5LTQ6ICMwMDU0ODg4NjtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMS0wOiAjZmZiYjAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0xLTE6ICNmZmM2MmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0yOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMzogI2ZmYmIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTQ6ICNkNTljMDA7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTItMDogI2ZmM2QwMDsgLy8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMi0xOiAjZmY1ZDJhO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMjogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTM6ICNmZjNkMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi00OiAjZDUzMzAwO1xyXG5cclxuJHRleHQtY29sb3ItY2xlYXI6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHRleHQtY29sb3ItZGFyazogcmdiYSgwLCAwLCAwKTtcclxuXHJcbiRmb250LXdlaWdodHM6IChcclxuICAgIFwicmVndWxhclwiOiA0MDAsXHJcbiAgICBcIm1lZGl1bVwiOiA1MDAsXHJcbiAgICBcImJvbGRcIjogNjAwLFxyXG4pO1xyXG5cclxuJGZvbnQtc2l6ZXM6IChcclxuICAgIFwic21hbGxcIjogMTRweCxcclxuICAgIFwibWVkaXVtXCI6IDI0cHgsXHJcbiAgICBcImJpZ1wiOiAzMnB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGZvbnQtd2VpZ2h0KCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtd2VpZ2h0cywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZm9udC1zaXplKCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtc2l6ZXMsICRrZXk6ICRuYW1lKTtcclxufVxyXG5cclxuQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRjb2xvcikge1xyXG4gICAgZm9udC1zaXplOiBmb250LXNpemUoJHNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0KCR3ZWlnaHQpO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSgkdGltZTogMC4zcykge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gb3Bhc2l0eS1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufSJdfQ== */"

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
/* harmony import */ var _components_ui_character_ui_character_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ui-character/ui-character.component */ "./src/app/components/ui-character/ui-character.component.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capitalize.pipe */ "./src/app/capitalize.pipe.ts");
/* harmony import */ var _components_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/damage-text/damage-text.component */ "./src/app/components/damage-text/damage-text.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__["MainMenuComponent"],
            _components_sprite_anim_sprite_anim_component__WEBPACK_IMPORTED_MODULE_6__["SpriteAnimComponent"],
            _components_ingame_ingame_component__WEBPACK_IMPORTED_MODULE_7__["IngameComponent"],
            _components_character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"],
            _components_ui_character_ui_character_component__WEBPACK_IMPORTED_MODULE_9__["UiCharacterComponent"],
            _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__["CapitalizePipe"],
            _components_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_11__["DamageTextComponent"]
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

/***/ "./src/app/capitalize.pipe.ts":
/*!************************************!*\
  !*** ./src/app/capitalize.pipe.ts ***!
  \************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value, ...args) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'capitalize'
    })
], CapitalizePipe);



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
    constructor(info) {
        this.timeCd = 0;
        this.readyToRemove = false;
        this.name = info.name;
        this.sizeX = info.sizeX;
        this.sizeY = info.sizeY;
        this.columnN = info.columnN;
        this.iddleAnim = info.iddleAnim;
        this.attackAnim = info.attackAnim;
        this.health = info.health;
        this.currentHealth = info.health;
        this.coldDown = info.coldDown;
        this.damage = info.damage;
        this.height = info.height;
        this.delayAttack = info.delayAttack;
    }
    GetIddle() {
        return this.iddleAnim;
    }
    GetSpriteSheetInfo() {
        return {
            name: this.name,
            sizeX: this.sizeX,
            sizeY: this.sizeY,
            columnN: this.columnN
        };
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
        setTimeout(() => { this.readyToRemove = true; }, 500);
    }
    IsDead() {
        return (this.currentHealth <= 0);
    }
    GetHeight() {
        return this.height;
    }
    GetName() {
        return this.name;
    }
    GetTotalHealth() {
        return this.health;
    }
    GetCurrentHealth() {
        return this.currentHealth;
    }
    GetColdDown() {
        return this.coldDown;
    }
    ResolverCDBar(dt) {
        let hasToAttack = false;
        this.timeCd += dt;
        if (this.timeCd >= this.coldDown) {
            this.timeCd = this.coldDown;
            hasToAttack = true;
            setTimeout(() => {
                this.timeCd = 0;
            });
        }
        return hasToAttack;
    }
    GetCDBarStyle() {
        return this.timeCd / this.coldDown * 100 + "%";
    }
    GetAttackData() {
        return { damage: this.damage, isPlayer: this.IsPlayer(), delay: this.delayAttack };
    }
    ReadyToRemove() {
        return this.readyToRemove;
    }
    Remove() {
        this.readyToRemove = true;
    }
}
Character.ctorParameters = () => [
    { type: undefined }
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
/* harmony import */ var src_app_services_interaction_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/interaction-events.service */ "./src/app/services/interaction-events.service.ts");



let CharacterComponent = class CharacterComponent {
    constructor(interactionEventsService) {
        this.interactionEventsService = interactionEventsService;
        this.damagesQueued = [];
        this.damagesToShow = [];
        this.timeSinceDamageShow = 5;
    }
    ngOnInit() {
    }
    Attack() {
        this.mainAnim.PlayAnimation(this.character.GetAttack());
        this.interactionEventsService.DealDamage(this.character.GetAttackData());
    }
    ;
    AddDamageToShow(damage) {
        this.damagesToShow.push(damage);
        this.damagesQueued.shift();
        setTimeout(() => {
            this.damagesToShow.shift();
        }, 3000);
    }
    Dead() {
        this.mainAnim.Dissapear();
    }
    TakeDamage(damage) {
        this.character.TakeDamage(damage);
        if (this.character.IsDead())
            this.Dead();
        this.damagesQueued.push(damage);
    }
    Update(dt) {
        if (this.character.ResolverCDBar(dt))
            this.Attack();
        this.timeSinceDamageShow += dt;
        if (this.damagesQueued.length > 0 && this.timeSinceDamageShow > .5) {
            this.AddDamageToShow(this.damagesQueued[0]);
            this.timeSinceDamageShow = 0;
        }
    }
    IsDead() {
        return this.character.IsDead();
    }
    Remove() {
        this.Dead();
        this.character.Remove();
    }
};
CharacterComponent.ctorParameters = () => [
    { type: src_app_services_interaction_events_service__WEBPACK_IMPORTED_MODULE_2__["InteractionEventsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterComponent.prototype, "character", void 0);
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

/***/ "./src/app/components/damage-text/damage-text.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/damage-text/damage-text.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.foward-animation, .damage-text {\n  -webkit-animation-fill-mode: forwards;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n  /* When the spec is finished */\n}\n\n:host {\n  z-index: 9;\n}\n\n.damage-text {\n  -webkit-animation-name: enter;\n          animation-name: enter;\n  font-weight: 600;\n  font-size: 24px;\n  color: red;\n  text-shadow: 1px 1px white;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  position: absolute;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n@-webkit-keyframes enter {\n  from {\n    bottom: 50%;\n    opacity: 1;\n  }\n  to {\n    bottom: 100%;\n    opacity: 0;\n  }\n}\n\n@keyframes enter {\n  from {\n    bottom: 50%;\n    opacity: 1;\n  }\n  to {\n    bottom: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYW1hZ2UtdGV4dC9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRhbWFnZS10ZXh0XFxkYW1hZ2UtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYW1hZ2UtdGV4dC9kYW1hZ2UtdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kYW1hZ2UtdGV4dC9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RhbWFnZS10ZXh0L0Y6XFxQcm95ZWN0b3MgUGVyc29uYWxlc1xcQW5ndWxhcjhcXGFuZ3VsYXItZmFudGFzeS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFRWtDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRGxDSjs7QURDQTtFRThCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRDNCSjs7QURGQTtFRTBCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQXpCYztFQTBCZCw4Q0FBQTtBRHBCSjs7QURMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNRSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkE7RUFFSSwrQ0FBQTtFQUNBLFdBQUE7QUNNSjs7QURGQTtFQUNJLHFDQUFBO0VBQXVDLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUN2Qyw2QkFBQTtFQUF1Qyw4QkFBQTtBQ1UzQzs7QUUvREE7RUFDSSxVQUFBO0FGa0VKOztBRS9EQTtFQUlJLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0VBQ0EsOENBQUE7QUYrREo7O0FFNURBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFRitETjtFRTdERTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VGK0ROO0FBQ0Y7O0FFdkVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtFRitETjtFRTdERTtJQUNJLFlBQUE7SUFDQSxVQUFBO0VGK0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhbWFnZS10ZXh0L2RhbWFnZS10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jbGVhci1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmNsZWFyLW1lZGl1bS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCBib2xkLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5kYXJrLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcbi5mb3dhcmQtYW5pbWF0aW9ue1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgLyogQ2hyb21lIDE2KywgU2FmYXJpIDQrICovXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAvKiBGRiA1KyAqL1xyXG4gICAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgICAgLyogTm90IGltcGxlbWVudGVkIHlldCAqL1xyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAgLyogSUUgMTArICovXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgICAgICAvKiBXaGVuIHRoZSBzcGVjIGlzIGZpbmlzaGVkICovICBcclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbGVhci1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY2xlYXItbWVkaXVtLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZGFyay1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvd2FyZC1hbmltYXRpb24sIC5kYW1hZ2UtdGV4dCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIENocm9tZSAxNissIFNhZmFyaSA0KyAqL1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBGRiA1KyAqL1xuICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogTm90IGltcGxlbWVudGVkIHlldCAqL1xuICAtbXMtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIElFIDEwKyAqL1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogV2hlbiB0aGUgc3BlYyBpcyBmaW5pc2hlZCAqL1xufVxuXG46aG9zdCB7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5kYW1hZ2UtdGV4dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCB3aGl0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG5Aa2V5ZnJhbWVzIGVudGVyIHtcbiAgZnJvbSB7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgYm90dG9tOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iLCIkY29sb3ItcHJpbWFyeS0wOiAjMDBhMGZmOyAvLyBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJGNvbG9yLXByaW1hcnktMTogIzM1YjJmYztcclxuJGNvbG9yLXByaW1hcnktMjogIzBjYTRmZjtcclxuJGNvbG9yLXByaW1hcnktMzogIzAwNzBiMztcclxuJGNvbG9yLXByaW1hcnktNDogIzAwNTQ4ODg2O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNmZmJiMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMTogI2ZmYzYyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTI6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0zOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtNDogI2Q1OWMwMDtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMi0wOiAjZmYzZDAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0yLTE6ICNmZjVkMmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0yOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMzogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTQ6ICNkNTMzMDA7XHJcblxyXG4kdGV4dC1jb2xvci1jbGVhcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kdGV4dC1jb2xvci1kYXJrOiByZ2JhKDAsIDAsIDApO1xyXG5cclxuJGZvbnQtd2VpZ2h0czogKFxyXG4gICAgXCJyZWd1bGFyXCI6IDQwMCxcclxuICAgIFwibWVkaXVtXCI6IDUwMCxcclxuICAgIFwiYm9sZFwiOiA2MDAsXHJcbik7XHJcblxyXG4kZm9udC1zaXplczogKFxyXG4gICAgXCJzbWFsbFwiOiAxNHB4LFxyXG4gICAgXCJtZWRpdW1cIjogMjRweCxcclxuICAgIFwiYmlnXCI6IDMycHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZm9udC13ZWlnaHQoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC13ZWlnaHRzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250LXNpemUoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFzaXR5LWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcclxuXHJcbjpob3N0e1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG5cclxuLmRhbWFnZS10ZXh0e1xyXG5cclxuICAgIEBleHRlbmQgLmZvd2FyZC1hbmltYXRpb247XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGVudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogIDFweCAxcHggd2hpdGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBlbnRlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/damage-text/damage-text.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/damage-text/damage-text.component.ts ***!
  \*****************************************************************/
/*! exports provided: DamageTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamageTextComponent", function() { return DamageTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DamageTextComponent = class DamageTextComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DamageTextComponent.prototype, "damage", void 0);
DamageTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-damage-text',
        template: __webpack_require__(/*! raw-loader!./damage-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/damage-text/damage-text.component.html"),
        styles: [__webpack_require__(/*! ./damage-text.component.scss */ "./src/app/components/damage-text/damage-text.component.scss")]
    })
], DamageTextComponent);



/***/ }),

/***/ "./src/app/components/ingame/ingame.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/ingame/ingame.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center, .charactersGrid .grid-item, .charContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered, .ingameBackground {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.foward-animation {\n  -webkit-animation-fill-mode: forwards;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n  /* When the spec is finished */\n}\n\n.containerBG {\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n\n.ingameBackground {\n  position: absolute;\n  height: 140vh;\n}\n\n.charContainer {\n  z-index: 2;\n  height: 80vh;\n  top: 0;\n  left: 0;\n}\n\n.charactersGrid {\n  height: 35vh;\n  width: 50vh;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.charactersGrid .grid-item {\n  position: relative;\n}\n\n.charactersGrid .player-item {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 4;\n  grid-column-end: 6;\n}\n\n.charactersGrid .grid-monster-1-0 {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-0 {\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-1 {\n  grid-row-start: 3;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.UI {\n  z-index: 3;\n}\n\n.containerUI {\n  background-color: #00548886;\n  padding: 5px;\n  border: solid rgba(255, 255, 255, 0.5) 3px;\n  border-radius: 10px;\n  width: 500px;\n  max-width: 500px;\n}\n\n@media (max-width: 800px) {\n  .containerUI {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  .containerUI {\n    width: 300px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .containerUI {\n    width: 80vw;\n  }\n}\n\n.playerUI {\n  position: fixed;\n  top: 40px;\n  right: 5vw;\n}\n\n@media (max-width: 800px) {\n  .playerUI {\n    top: 10px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .playerUI {\n    top: 10px;\n  }\n}\n\n.enemiesUI {\n  position: fixed;\n  bottom: 40px;\n  left: 5vw;\n}\n\n.enemiesUI .enemyUI:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n@media (max-width: 800px) {\n  .enemiesUI {\n    bottom: 10px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .enemiesUI {\n    bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbmdhbWVcXGluZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvaW5nYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUVrQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QURsQ0o7O0FEQ0E7RUU4QkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QUQzQko7O0FERkE7RUUwQkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUF6QmM7RUEwQmQsOENBQUE7QURwQko7O0FETEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDTUo7O0FERkE7RUFDSSxxQ0FBQTtFQUF1QywwQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDdkMsNkJBQUE7RUFBdUMsOEJBQUE7QUNVM0M7O0FFL0RBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FGa0VKOztBRWhFQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtBRmtFSjs7QUUvREE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FGaUVKOztBRTlEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBRmdFSjs7QUU5REk7RUFDSSxrQkFBQTtBRmdFUjs7QUUxREk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGNERSOztBRXpESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUYyRFI7O0FFeERJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRjBEUjs7QUV2REk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGeURSOztBRXJEQTtFQUNJLFVBQUE7QUZ3REo7O0FFckRBO0VBQ0ksMkJEdkVjO0VDd0VkLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGd0RKOztBQy9FSTtFQ2lCSjtJQVNRLFlBQUE7RUZ5RE47QUFDRjs7QUM5RUk7RUNXSjtJQWFRLFlBQUE7RUYwRE47QUFDRjs7QUM3RUk7RUNLSjtJQWlCUSxXQUFBO0VGMkROO0FBQ0Y7O0FFeERBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FGMkRKOztBQ3BHSTtFQ3NDSjtJQU1RLFNBQUE7RUY0RE47QUFDRjs7QUM3Rkk7RUMwQko7SUFVUSxTQUFBO0VGNkROO0FBQ0Y7O0FFMURBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FGNkRKOztBRTFEUTtFQUNJLGtCQUFBO0FGNERaOztBQ3ZISTtFQ29ESjtJQWNRLFlBQUE7RUZ5RE47QUFDRjs7QUNoSEk7RUN3Q0o7SUFrQlEsWUFBQTtFRjBETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvaW5nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jbGVhci1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmNsZWFyLW1lZGl1bS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCBib2xkLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5kYXJrLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcbi5mb3dhcmQtYW5pbWF0aW9ue1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgLyogQ2hyb21lIDE2KywgU2FmYXJpIDQrICovXHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAvKiBGRiA1KyAqL1xyXG4gICAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgICAgLyogTm90IGltcGxlbWVudGVkIHlldCAqL1xyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAgLyogSUUgMTArICovXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgICAgICAvKiBXaGVuIHRoZSBzcGVjIGlzIGZpbmlzaGVkICovICBcclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbGVhci1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY2xlYXItbWVkaXVtLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZGFyay1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZmxleC1jZW50ZXIsIC5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1pdGVtLCAuY2hhckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyZWQsIC5pbmdhbWVCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvd2FyZC1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBDaHJvbWUgMTYrLCBTYWZhcmkgNCsgKi9cbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogRkYgNSsgKi9cbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIE5vdCBpbXBsZW1lbnRlZCB5ZXQgKi9cbiAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBJRSAxMCsgKi9cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIFdoZW4gdGhlIHNwZWMgaXMgZmluaXNoZWQgKi9cbn1cblxuLmNvbnRhaW5lckJHIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5pbmdhbWVCYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE0MHZoO1xufVxuXG4uY2hhckNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogODB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uY2hhcmFjdGVyc0dyaWQge1xuICBoZWlnaHQ6IDM1dmg7XG4gIHdpZHRoOiA1MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG59XG4uY2hhcmFjdGVyc0dyaWQgLmdyaWQtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jaGFyYWN0ZXJzR3JpZCAucGxheWVyLWl0ZW0ge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiA1O1xuICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgZ3JpZC1jb2x1bW4tZW5kOiA2O1xufVxuLmNoYXJhY3RlcnNHcmlkIC5ncmlkLW1vbnN0ZXItMS0wIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogNTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cbi5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1tb25zdGVyLTItMCB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDM7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG4uY2hhcmFjdGVyc0dyaWQgLmdyaWQtbW9uc3Rlci0yLTEge1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1yb3ctZW5kOiA1O1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuXG4uVUkge1xuICB6LWluZGV4OiAzO1xufVxuXG4uY29udGFpbmVyVUkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NDg4ODY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lclVJIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuY29udGFpbmVyVUkge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ5OXB4KSBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5jb250YWluZXJVSSB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cblxuLnBsYXllclVJIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiA1dnc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnBsYXllclVJIHtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAucGxheWVyVUkge1xuICAgIHRvcDogMTBweDtcbiAgfVxufVxuXG4uZW5lbWllc1VJIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQwcHg7XG4gIGxlZnQ6IDV2dztcbn1cbi5lbmVtaWVzVUkgLmVuZW15VUk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZW5lbWllc1VJIHtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuZW5lbWllc1VJIHtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cbn0iLCIkY29sb3ItcHJpbWFyeS0wOiAjMDBhMGZmOyAvLyBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJGNvbG9yLXByaW1hcnktMTogIzM1YjJmYztcclxuJGNvbG9yLXByaW1hcnktMjogIzBjYTRmZjtcclxuJGNvbG9yLXByaW1hcnktMzogIzAwNzBiMztcclxuJGNvbG9yLXByaW1hcnktNDogIzAwNTQ4ODg2O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNmZmJiMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMTogI2ZmYzYyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTI6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0zOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtNDogI2Q1OWMwMDtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMi0wOiAjZmYzZDAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0yLTE6ICNmZjVkMmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0yOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMzogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTQ6ICNkNTMzMDA7XHJcblxyXG4kdGV4dC1jb2xvci1jbGVhcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kdGV4dC1jb2xvci1kYXJrOiByZ2JhKDAsIDAsIDApO1xyXG5cclxuJGZvbnQtd2VpZ2h0czogKFxyXG4gICAgXCJyZWd1bGFyXCI6IDQwMCxcclxuICAgIFwibWVkaXVtXCI6IDUwMCxcclxuICAgIFwiYm9sZFwiOiA2MDAsXHJcbik7XHJcblxyXG4kZm9udC1zaXplczogKFxyXG4gICAgXCJzbWFsbFwiOiAxNHB4LFxyXG4gICAgXCJtZWRpdW1cIjogMjRweCxcclxuICAgIFwiYmlnXCI6IDMycHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZm9udC13ZWlnaHQoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC13ZWlnaHRzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250LXNpemUoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFzaXR5LWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXJCR3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbi5pbmdhbWVCYWNrZ3JvdW5kIHtcclxuICAgIEBleHRlbmQgLmNlbnRlcmVkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxNDB2aDtcclxufVxyXG5cclxuLmNoYXJDb250YWluZXIge1xyXG4gICAgQGV4dGVuZCAuZmxleC1jZW50ZXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNoYXJhY3RlcnNHcmlkIHtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIHdpZHRoOiA1MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjEpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAwZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG5cclxuICAgIC5ncmlkLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xyXG4gICAgICAgIC8vICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIEBleHRlbmQgLmZsZXgtY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wbGF5ZXItaXRlbSB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogNjtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1tb25zdGVyLTEtMCB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1tb25zdGVyLTItMCB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1tb25zdGVyLTItMSB7XHJcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICAgICAgZ3JpZC1yb3ctZW5kOiA1O1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxufVxyXG5cclxuLlVJIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5jb250YWluZXJVSSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS00O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjUpIDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldCB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGV7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wbGF5ZXJVSSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICByaWdodDogNXZ3O1xyXG5cclxuICAgIEBpbmNsdWRlIHRhYmxldHtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgIG1vYmlsZS1sYW5kc2NhcGV7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW5lbWllc1VJIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGxlZnQ6IDV2dztcclxuXHJcbiAgICAuZW5lbXlVSSB7XHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lbmVteSB7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgIHRhYmxldHtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgIG1vYmlsZS1sYW5kc2NhcGV7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

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
/* harmony import */ var src_app_classes_player_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/player-character */ "./src/app/classes/player-character.ts");
/* harmony import */ var src_app_classes_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/classes/character */ "./src/app/classes/character.ts");
/* harmony import */ var src_app_services_interaction_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/interaction-events.service */ "./src/app/services/interaction-events.service.ts");
/* harmony import */ var src_assets_jsons_wolf_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/assets/jsons/wolf.json */ "./src/assets/jsons/wolf.json");
var src_assets_jsons_wolf_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/jsons/wolf.json */ "./src/assets/jsons/wolf.json", 1);
/* harmony import */ var src_assets_jsons_knight_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/assets/jsons/knight.json */ "./src/assets/jsons/knight.json");
var src_assets_jsons_knight_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! src/assets/jsons/knight.json */ "./src/assets/jsons/knight.json", 1);
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../character/character.component */ "./src/app/components/character/character.component.ts");








let IngameComponent = class IngameComponent {
    constructor(interactionEventsService) {
        this.interactionEventsService = interactionEventsService;
        this.wolf = src_assets_jsons_wolf_json__WEBPACK_IMPORTED_MODULE_5__;
        this.knight = src_assets_jsons_knight_json__WEBPACK_IMPORTED_MODULE_6__;
        this.enemies = [];
        this.restarting = false;
    }
    ngOnInit() {
        this.interactionEventsService.damage.subscribe((attackData) => {
            if (attackData.isPlayer) {
                setTimeout(() => {
                    let enemyIndex = Math.floor(Math.random() * this.enemyComponents.length);
                    const result = this.enemyComponents.toArray().filter(enemy => !enemy.IsDead());
                    result[enemyIndex].TakeDamage(attackData.damage);
                }, attackData.delay);
            }
            else {
                setTimeout(() => {
                    this.playerComponent.TakeDamage(attackData.damage);
                }, attackData.delay);
            }
        });
        this.BasicSetup();
    }
    ngAfterViewInit() {
        window.requestAnimationFrame((timestamp) => { this.Update(timestamp); });
    }
    ngOnDestroy() {
    }
    BasicSetup() {
        this.player = new src_app_classes_player_character__WEBPACK_IMPORTED_MODULE_2__["PlayerCharacter"](this.knight);
        this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_3__["Character"](this.wolf));
        setTimeout(() => {
            this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_3__["Character"](this.wolf));
        }, 5000);
    }
    Update(timestamp) {
        if (this.lastTime === undefined)
            this.lastTime = timestamp;
        this.elapsed = (timestamp - this.lastTime) / 1000;
        this.enemies = this.enemies.filter(enemy => !enemy.ReadyToRemove());
        if (this.enemies.length) {
            this.characters.forEach((character) => {
                if (!character.IsDead())
                    character.Update(this.elapsed);
            });
        }
        else {
            if (!this.restarting) {
                this.restarting = true;
                setTimeout(() => {
                    this.Restart();
                }, 3000);
            }
        }
        this.lastTime = timestamp;
        window.requestAnimationFrame((timestamp) => { this.Update(timestamp); });
    }
    GridMonster(index) {
        return "grid-monster-" + this.enemies.length + "-" + index;
    }
    Restart() {
        this.playerComponent.Remove();
        setTimeout(() => {
            this.player = null;
        }, 500);
        setTimeout(() => {
            this.BasicSetup();
            this.restarting = false;
        }, 1500);
    }
};
IngameComponent.ctorParameters = () => [
    { type: src_app_services_interaction_events_service__WEBPACK_IMPORTED_MODULE_4__["InteractionEventsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_character_character_component__WEBPACK_IMPORTED_MODULE_7__["CharacterComponent"])
], IngameComponent.prototype, "characters", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('enemyComponent')
], IngameComponent.prototype, "enemyComponents", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('playerComponent', { static: false })
], IngameComponent.prototype, "playerComponent", void 0);
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
            position: 0,
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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center, :host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.foward-animation {\n  -webkit-animation-fill-mode: forwards;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n  /* When the spec is finished */\n}\n\n.imgContainer {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n  width: auto;\n  position: absolute;\n  overflow: hidden;\n}\n\n.imgContainer img {\n  height: 100%;\n  width: auto;\n  position: absolute;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNwcml0ZS1hbmltXFxzcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9zcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nwcml0ZS1hbmltL0Y6XFxQcm95ZWN0b3MgUGVyc29uYWxlc1xcQW5ndWxhcjhcXGFuZ3VsYXItZmFudGFzeS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFRWtDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRGxDSjs7QURDQTtFRThCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRDNCSjs7QURGQTtFRTBCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQXpCYztFQTBCZCw4Q0FBQTtBRHBCSjs7QURMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNRSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkE7RUFFSSwrQ0FBQTtFQUNBLFdBQUE7QUNNSjs7QURGQTtFQUNJLHFDQUFBO0VBQXVDLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUN2Qyw2QkFBQTtFQUF1Qyw4QkFBQTtBQ1UzQzs7QUUzREE7RUQrQ0ksb0NBQUE7RUM3Q0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGNkRKOztBRTVESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRjhEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ByaXRlLWFuaW0vc3ByaXRlLWFuaW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uY2xlYXItbWVkaXVtLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIGJvbGQsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmRhcmstcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZsZXgtY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZnVsbC1zY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuLmZvd2FyZC1hbmltYXRpb257XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAvKiBDaHJvbWUgMTYrLCBTYWZhcmkgNCsgKi9cclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgIC8qIEZGIDUrICovXHJcbiAgICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgICAvKiBOb3QgaW1wbGVtZW50ZWQgeWV0ICovXHJcbiAgICAtbXMtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgICAvKiBJRSAxMCsgKi9cclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAgICAgIC8qIFdoZW4gdGhlIHNwZWMgaXMgZmluaXNoZWQgKi8gIFxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5jbGVhci1tZWRpdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5kYXJrLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5mbGV4LWNlbnRlciwgOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvd2FyZC1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBDaHJvbWUgMTYrLCBTYWZhcmkgNCsgKi9cbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogRkYgNSsgKi9cbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIE5vdCBpbXBsZW1lbnRlZCB5ZXQgKi9cbiAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBJRSAxMCsgKi9cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIFdoZW4gdGhlIHNwZWMgaXMgZmluaXNoZWQgKi9cbn1cblxuLmltZ0NvbnRhaW5lciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbWdDb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iLCIkY29sb3ItcHJpbWFyeS0wOiAjMDBhMGZmOyAvLyBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJGNvbG9yLXByaW1hcnktMTogIzM1YjJmYztcclxuJGNvbG9yLXByaW1hcnktMjogIzBjYTRmZjtcclxuJGNvbG9yLXByaW1hcnktMzogIzAwNzBiMztcclxuJGNvbG9yLXByaW1hcnktNDogIzAwNTQ4ODg2O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNmZmJiMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMTogI2ZmYzYyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTI6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0zOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtNDogI2Q1OWMwMDtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMi0wOiAjZmYzZDAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0yLTE6ICNmZjVkMmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0yOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMzogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTQ6ICNkNTMzMDA7XHJcblxyXG4kdGV4dC1jb2xvci1jbGVhcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kdGV4dC1jb2xvci1kYXJrOiByZ2JhKDAsIDAsIDApO1xyXG5cclxuJGZvbnQtd2VpZ2h0czogKFxyXG4gICAgXCJyZWd1bGFyXCI6IDQwMCxcclxuICAgIFwibWVkaXVtXCI6IDUwMCxcclxuICAgIFwiYm9sZFwiOiA2MDAsXHJcbik7XHJcblxyXG4kZm9udC1zaXplczogKFxyXG4gICAgXCJzbWFsbFwiOiAxNHB4LFxyXG4gICAgXCJtZWRpdW1cIjogMjRweCxcclxuICAgIFwiYmlnXCI6IDMycHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZm9udC13ZWlnaHQoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC13ZWlnaHRzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250LXNpemUoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFzaXR5LWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcclxuXHJcbjpob3N0e1xyXG4gICAgQGV4dGVuZCAuZmxleC1jZW50ZXI7XHJcbn1cclxuXHJcbi5pbWdDb250YWluZXJ7XHJcbiAgICBAaW5jbHVkZSBvcGFzaXR5LWVhc2UoLjVzKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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
        this.opacity = 0;
    }
    ngOnInit() {
        this.SetSpriteSheet();
        this.PlayAnimation(this.defaultAnim);
    }
    ngAfterViewInit() {
        this.CalcSizes();
        this.opacity = 1;
    }
    ngOnDestroy() {
        this.ClearAnimInterval();
    }
    SetSpriteSheet() {
        this.spriteSheet = "assets/sprites/" + this.spriteSheetInfo.name + ".png";
    }
    ;
    CalcSizes() {
        this.trueHeightSprite = Math.trunc(document.documentElement.clientHeight * this.heightSprite / 100);
        let ratioSprite = this.trueHeightSprite / this.spriteSheetInfo.sizeY;
        this.trueWidhtSprite = this.spriteSheetInfo.sizeX * ratioSprite;
    }
    PlayCurrentAnim() {
        this.ClearAnimInterval();
        this.indexFrame = 0;
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
    }
    ClearAnimInterval() {
        if (this.currentInterval)
            clearInterval(this.currentInterval);
    }
    GetImgStyle() {
        return {
            top: this.indexFrame * -this.trueHeightSprite + "px",
            left: this.currentAnim.position * -this.trueWidhtSprite + "px",
            width: this.trueWidhtSprite * 2 + "px",
            height: this.trueHeightSprite * this.spriteSheetInfo.columnN + "px"
        };
    }
    ;
    GetSizeContainer() {
        return {
            width: this.trueWidhtSprite + "px",
            height: this.trueHeightSprite + "px",
            opacity: this.opacity
        };
    }
    ;
    PlayAnimation(newAnim) {
        this.currentAnim = Object.create(newAnim);
        this.PlayCurrentAnim();
    }
    Dissapear() {
        this.opacity = 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpriteAnimComponent.prototype, "spriteSheetInfo", void 0);
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

/***/ "./src/app/components/ui-character/ui-character.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/ui-character/ui-character.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text, .container-grid .item-grid {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.foward-animation {\n  -webkit-animation-fill-mode: forwards;\n  /* Chrome 16+, Safari 4+ */\n  /* FF 5+ */\n  /* Not implemented yet */\n  /* IE 10+ */\n  animation-fill-mode: forwards;\n  /* When the spec is finished */\n}\n\n.container-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  width: 100%;\n  border-bottom: 3px solid white;\n  padding-left: 10px;\n}\n\n.container-grid .coldDown {\n  place-self: center center;\n  width: 120px;\n  height: 15px;\n  background-color: white;\n  border: 2px solid white;\n}\n\n.container-grid .coldDown .fill {\n  height: 100%;\n  width: 0%;\n  background: linear-gradient(to right, #ffbb00, #ff3d00);\n}\n\n.container-grid .hpSeparator {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n@media (max-width: 800px) {\n  .container-grid {\n    padding-left: 5px;\n    padding-right: 5px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n  .container-grid .name {\n    grid-row-start: 1;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n  .container-grid .hp {\n    grid-row-start: 1;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    place-self: center right;\n  }\n  .container-grid .coldDown {\n    grid-row-start: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    place-self: center right;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .container-grid {\n    grid-template-columns: 1.4fr 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n  .container-grid .coldDown {\n    grid-row-start: 1;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    place-self: center right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jaGFyYWN0ZXIvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1aS1jaGFyYWN0ZXJcXHVpLWNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1jaGFyYWN0ZXIvdWktY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUVrQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QURsQ0o7O0FEQ0E7RUU4QkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QUQzQko7O0FERkE7RUUwQkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUF6QmM7RUEwQmQsOENBQUE7QURwQko7O0FETEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDTUo7O0FERkE7RUFDSSxxQ0FBQTtFQUF1QywwQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDdkMsNkJBQUE7RUFBdUMsOEJBQUE7QUNVM0M7O0FFL0RBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUZrRUo7O0FFNURJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUY4RFI7O0FFN0RRO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSx1REFBQTtBRitEWjs7QUUzREk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FGNkRSOztBQ2hDSTtFQ3ZESjtJQThCUSxpQkFBQTtJQUNBLGtCQUFBO0lBRUEsOEJBQUE7SUFDQSwyQkFBQTtFRjRETjtFRTFETTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFRjREVjtFRTFETTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0VGNERWO0VFMURNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esd0JBQUE7RUY0RFY7QUFDRjs7QUM3Q0k7RUNuRUo7SUF3RFEsb0NBQUE7SUFDQSx1QkFBQTtFRjRETjtFRTFETTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0VGNERWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci91aS1jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uY2xlYXItbWVkaXVtLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIGJvbGQsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmRhcmstcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZsZXgtY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZnVsbC1zY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG5cclxuLmZvd2FyZC1hbmltYXRpb257XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAvKiBDaHJvbWUgMTYrLCBTYWZhcmkgNCsgKi9cclxuICAgIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgIC8qIEZGIDUrICovXHJcbiAgICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgICAgICAvKiBOb3QgaW1wbGVtZW50ZWQgeWV0ICovXHJcbiAgICAtbXMtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7ICAgICAvKiBJRSAxMCsgKi9cclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyAgICAgICAgIC8qIFdoZW4gdGhlIHNwZWMgaXMgZmluaXNoZWQgKi8gIFxyXG59IiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5jbGVhci1tZWRpdW0tdGV4dCwgLmNvbnRhaW5lci1ncmlkIC5pdGVtLWdyaWQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZGFyay1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZ1bGwtc2NyZWVuLCAuYmctYXBwIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJnLWFwcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmZvd2FyZC1hbmltYXRpb24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBDaHJvbWUgMTYrLCBTYWZhcmkgNCsgKi9cbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLyogRkYgNSsgKi9cbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIE5vdCBpbXBsZW1lbnRlZCB5ZXQgKi9cbiAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAvKiBJRSAxMCsgKi9cbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC8qIFdoZW4gdGhlIHNwZWMgaXMgZmluaXNoZWQgKi9cbn1cblxuLmNvbnRhaW5lci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMWZyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY29udGFpbmVyLWdyaWQgLmNvbGREb3duIHtcbiAgcGxhY2Utc2VsZjogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5jb250YWluZXItZ3JpZCAuY29sZERvd24gLmZpbGwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZiYjAwLCAjZmYzZDAwKTtcbn1cbi5jb250YWluZXItZ3JpZCAuaHBTZXBhcmF0b3Ige1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFpbmVyLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICB9XG4gIC5jb250YWluZXItZ3JpZCAubmFtZSB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICB9XG4gIC5jb250YWluZXItZ3JpZCAuaHAge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XG4gIH1cbiAgLmNvbnRhaW5lci1ncmlkIC5jb2xkRG93biB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ5OXB4KSBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5jb250YWluZXItZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICB9XG4gIC5jb250YWluZXItZ3JpZCAuY29sZERvd24ge1xuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XG4gIH1cbn0iLCIkY29sb3ItcHJpbWFyeS0wOiAjMDBhMGZmOyAvLyBNYWluIFByaW1hcnkgY29sb3IgKi9cclxuJGNvbG9yLXByaW1hcnktMTogIzM1YjJmYztcclxuJGNvbG9yLXByaW1hcnktMjogIzBjYTRmZjtcclxuJGNvbG9yLXByaW1hcnktMzogIzAwNzBiMztcclxuJGNvbG9yLXByaW1hcnktNDogIzAwNTQ4ODg2O1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0xLTA6ICNmZmJiMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgxKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMTogI2ZmYzYyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTI6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0zOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtNDogI2Q1OWMwMDtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMi0wOiAjZmYzZDAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMikgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0yLTE6ICNmZjVkMmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0yOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMzogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTQ6ICNkNTMzMDA7XHJcblxyXG4kdGV4dC1jb2xvci1jbGVhcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kdGV4dC1jb2xvci1kYXJrOiByZ2JhKDAsIDAsIDApO1xyXG5cclxuJGZvbnQtd2VpZ2h0czogKFxyXG4gICAgXCJyZWd1bGFyXCI6IDQwMCxcclxuICAgIFwibWVkaXVtXCI6IDUwMCxcclxuICAgIFwiYm9sZFwiOiA2MDAsXHJcbik7XHJcblxyXG4kZm9udC1zaXplczogKFxyXG4gICAgXCJzbWFsbFwiOiAxNHB4LFxyXG4gICAgXCJtZWRpdW1cIjogMjRweCxcclxuICAgIFwiYmlnXCI6IDMycHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZm9udC13ZWlnaHQoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC13ZWlnaHRzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBmb250LXNpemUoJG5hbWUpIHtcclxuICAgIEByZXR1cm4gbWFwLWdldCgkbWFwOiAkZm9udC1zaXplcywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AbWl4aW4gdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGNvbG9yKSB7XHJcbiAgICBmb250LXNpemU6IGZvbnQtc2l6ZSgkc2l6ZSk7XHJcbiAgICBmb250LXdlaWdodDogZm9udC13ZWlnaHQoJHdlaWdodCk7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbi1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBvcGFzaXR5LWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJHRpbWUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtb2JpbGUtbGFuZHNjYXBlIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCl7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwifnNyYy9zdHlsZXMvZ2xvYmFsLnNjc3NcIjtcclxuXHJcbi5jb250YWluZXItZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMWZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgLml0ZW0tZ3JpZCB7XHJcbiAgICAgICAgQGV4dGVuZCAuY2xlYXItbWVkaXVtLXRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbGREb3duIHtcclxuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgLmZpbGwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3Itc2Vjb25kYXJ5LTEtMCwgJGNvbG9yLXNlY29uZGFyeS0yLTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaHBTZXBhcmF0b3Ige1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ocCB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xkRG93biB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGV7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5cclxuICAgICAgICAuY29sZERvd24ge1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/ui-character/ui-character.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/ui-character/ui-character.component.ts ***!
  \*******************************************************************/
/*! exports provided: UiCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiCharacterComponent", function() { return UiCharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UiCharacterComponent = class UiCharacterComponent {
    constructor() { }
    ngOnInit() {
    }
    GetCD() {
        return {
            width: this.character.GetCDBarStyle()
            //transitionDuration: this.character.GetColdDown() + "s"
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UiCharacterComponent.prototype, "character", void 0);
UiCharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ui-character',
        template: __webpack_require__(/*! raw-loader!./ui-character.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ui-character/ui-character.component.html"),
        styles: [__webpack_require__(/*! ./ui-character.component.scss */ "./src/app/components/ui-character/ui-character.component.scss")]
    })
], UiCharacterComponent);



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

/***/ "./src/app/services/interaction-events.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/interaction-events.service.ts ***!
  \********************************************************/
/*! exports provided: InteractionEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionEventsService", function() { return InteractionEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InteractionEventsService = class InteractionEventsService {
    constructor() {
        this.damage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DealDamage(attackData) {
        this.damage.emit(attackData);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InteractionEventsService.prototype, "damage", void 0);
InteractionEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InteractionEventsService);



/***/ }),

/***/ "./src/assets/jsons/knight.json":
/*!**************************************!*\
  !*** ./src/assets/jsons/knight.json ***!
  \**************************************/
/*! exports provided: name, sizeX, sizeY, columnN, iddleAnim, attackAnim, health, coldDown, damage, height, delayAttack, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"knight\",\"sizeX\":384,\"sizeY\":192,\"columnN\":14,\"iddleAnim\":{\"position\":0,\"length\":14,\"speed\":100,\"play\":0},\"attackAnim\":{\"position\":1,\"length\":14,\"speed\":70,\"play\":1},\"health\":125,\"coldDown\":4,\"damage\":50,\"height\":20,\"delayAttack\":700}");

/***/ }),

/***/ "./src/assets/jsons/wolf.json":
/*!************************************!*\
  !*** ./src/assets/jsons/wolf.json ***!
  \************************************/
/*! exports provided: name, sizeX, sizeY, columnN, iddleAnim, attackAnim, health, coldDown, damage, height, delayAttack, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"wolf\",\"sizeX\":388,\"sizeY\":192,\"columnN\":15,\"iddleAnim\":{\"position\":0,\"length\":12,\"speed\":100,\"play\":0},\"attackAnim\":{\"position\":1,\"length\":15,\"speed\":80,\"play\":1},\"health\":65,\"coldDown\":6,\"damage\":20,\"height\":30,\"delayAttack\":750}");

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