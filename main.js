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

module.exports = "<div>\n    <app-sprite-anim [defaultAnim]='character.GetIddle()' [spriteSheetInfo]='character.GetSpriteSheetInfo()' [heightSprite]='character.GetHeight()' #mainAnim></app-sprite-anim>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ingame/ingame.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ingame/ingame.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"containerBG\">\r\n        <img class=\"ingameBackground\" src=\"assets/scenes/demo_scene.png\">\r\n    </div>\r\n    <div class=\"charContainer\">\r\n        <div class=\"charactersGrid\">\r\n\r\n            <div *ngFor=\"let enemy of enemies; let i = index\" class=\"grid-item\" [ngClass]=\"gridMonster(i)\">\r\n                <app-character [character]=\"enemy\"></app-character>\r\n            </div>\r\n\r\n            <app-character [character]=\"player\" class=\"grid-item player-item\"></app-character>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"containerUI playerUI\">\r\n        <app-ui-character class=\"UI\" [character]=\"player\"></app-ui-character>\r\n    </div>\r\n\r\n    <div class=\"containerUI enemiesUI\">\r\n\r\n        <div *ngFor=\"let enemy of enemies; let i = index\" class=\"enemyUI\" [ngClass]=\"gridMonster(i)\">\r\n            <app-ui-character class=\"UI enemy\" [character]=\"enemy\"></app-ui-character>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>"

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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VFa0NJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBMUJlO0VBMkJmLDhDQUFBO0FEbENKOztBRENBO0VFOEJJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBMUJlO0VBMkJmLDhDQUFBO0FEM0JKOztBREZBO0VFMEJJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBekJjO0VBMEJkLDhDQUFBO0FEcEJKOztBRExBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ1FKOztBREpBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURKQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBQ01KOztBRWxEQTtFQUVJLCtDQUFBO0VBQ0EsV0FBQTtBRm9ESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuKntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY2xlYXItcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5jbGVhci1tZWRpdW0tdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgYm9sZCwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uZGFyay1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWRhcmspO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgXHJcbn1cclxuXHJcbi5mdWxsLXNjcmVlbntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJnLWFwcCB7XHJcbiAgICBAZXh0ZW5kIC5mdWxsLXNjcmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuIiwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5jbGVhci1tZWRpdW0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5kYXJrLXJlZ3VsYXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XG59XG5cbi5mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZnVsbC1zY3JlZW4sIC5iZy1hcHAge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYmctYXBwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmctYXBwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XG4gIHotaW5kZXg6IC0xO1xufSIsIiRjb2xvci1wcmltYXJ5LTA6ICMwMGEwZmY7IC8vIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kY29sb3ItcHJpbWFyeS0xOiAjMzViMmZjO1xyXG4kY29sb3ItcHJpbWFyeS0yOiAjMGNhNGZmO1xyXG4kY29sb3ItcHJpbWFyeS0zOiAjMDA3MGIzO1xyXG4kY29sb3ItcHJpbWFyeS00OiAjMDA1NDg4ODY7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMDogI2ZmYmIwMDsgLy8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMS0xOiAjZmZjNjJhO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMjogI2ZmYmIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTM6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS00OiAjZDU5YzAwO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0yLTA6ICNmZjNkMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMTogI2ZmNWQyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTI6ICNmZjNkMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0zOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItNDogI2Q1MzMwMDtcclxuXHJcbiR0ZXh0LWNvbG9yLWNsZWFyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiR0ZXh0LWNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCk7XHJcblxyXG4kZm9udC13ZWlnaHRzOiAoXHJcbiAgICBcInJlZ3VsYXJcIjogNDAwLFxyXG4gICAgXCJtZWRpdW1cIjogNTAwLFxyXG4gICAgXCJib2xkXCI6IDYwMCxcclxuKTtcclxuXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBcInNtYWxsXCI6IDE0cHgsXHJcbiAgICBcIm1lZGl1bVwiOiAyNHB4LFxyXG4gICAgXCJiaWdcIjogMzJweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBmb250LXdlaWdodCgkbmFtZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRmb250LXdlaWdodHMsICRrZXk6ICRuYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkbmFtZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRmb250LXNpemVzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkY29sb3IpIHtcclxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKCRzaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBmb250LXdlaWdodCgkd2VpZ2h0KTtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIG9wYXNpdHktZWFzZSgkdGltZTogMC4zcykge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdGltZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ5OXB4KSBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9nbG9iYWwuc2Nzc1wiO1xyXG5cclxuLmJnLWFwcCB7XHJcbiAgICBAZXh0ZW5kIC5mdWxsLXNjcmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgZGVlcHNreWJsdWUpO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn0iXX0= */"

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
            _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__["CapitalizePipe"]
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


let CharacterComponent = class CharacterComponent {
    constructor() {
        this.isPlayer = false;
    }
    ngOnInit() {
        setInterval(() => {
            this.mainAnim.PlayAnimation(this.character.GetAttack());
        }, 3000);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterComponent.prototype, "character", void 0);
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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center, .charactersGrid .grid-item, .charContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered, .ingameBackground {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.containerBG {\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n\n.ingameBackground {\n  position: absolute;\n  height: 140vh;\n}\n\n.charContainer {\n  z-index: 2;\n  height: 80vh;\n  top: 0;\n  left: 0;\n}\n\n.charactersGrid {\n  height: 35vh;\n  width: 60vh;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr 1fr 0fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n}\n\n.charactersGrid .grid-item {\n  position: relative;\n}\n\n.charactersGrid .player-item {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 4;\n  grid-column-end: 6;\n}\n\n.charactersGrid .grid-monster-1-0 {\n  grid-row-start: 1;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-0 {\n  grid-row-start: 1;\n  grid-row-end: 3;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.charactersGrid .grid-monster-2-1 {\n  grid-row-start: 3;\n  grid-row-end: 5;\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n\n.UI {\n  z-index: 3;\n}\n\n.containerUI {\n  background-color: #00548886;\n  padding: 5px;\n  border: solid rgba(255, 255, 255, 0.5) 3px;\n  border-radius: 10px;\n  width: 500px;\n  max-width: 500px;\n}\n\n@media (max-width: 800px) {\n  .containerUI {\n    width: 400px;\n  }\n}\n\n@media (max-width: 500px) {\n  .containerUI {\n    width: 300px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .containerUI {\n    width: 80vw;\n  }\n}\n\n.playerUI {\n  position: fixed;\n  top: 40px;\n  right: 5vw;\n}\n\n@media (max-width: 800px) {\n  .playerUI {\n    top: 10px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .playerUI {\n    top: 10px;\n  }\n}\n\n.enemiesUI {\n  position: fixed;\n  bottom: 40px;\n  left: 5vw;\n}\n\n.enemiesUI .enemyUI:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n@media (max-width: 800px) {\n  .enemiesUI {\n    bottom: 10px;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .enemiesUI {\n    bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFxpbmdhbWVcXGluZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvaW5nYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2luZ2FtZS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUVrQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QURsQ0o7O0FEQ0E7RUU4QkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QUQzQko7O0FERkE7RUUwQkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUF6QmM7RUEwQmQsOENBQUE7QURwQko7O0FETEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDTUo7O0FFbERBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FGcURKOztBRW5EQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtBRnFESjs7QUVsREE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FGb0RKOztBRWpEQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBRm1ESjs7QUVqREk7RUFDSSxrQkFBQTtBRm1EUjs7QUU3Q0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGK0NSOztBRTVDSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUY4Q1I7O0FFM0NJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRjZDUjs7QUUxQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FGNENSOztBRXhDQTtFQUNJLFVBQUE7QUYyQ0o7O0FFeENBO0VBQ0ksMkJEdkVjO0VDd0VkLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FGMkNKOztBQ2xFSTtFQ2lCSjtJQVNRLFlBQUE7RUY0Q047QUFDRjs7QUNqRUk7RUNXSjtJQWFRLFlBQUE7RUY2Q047QUFDRjs7QUNoRUk7RUNLSjtJQWlCUSxXQUFBO0VGOENOO0FBQ0Y7O0FFM0NBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FGOENKOztBQ3ZGSTtFQ3NDSjtJQU1RLFNBQUE7RUYrQ047QUFDRjs7QUNoRkk7RUMwQko7SUFVUSxTQUFBO0VGZ0ROO0FBQ0Y7O0FFN0NBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FGZ0RKOztBRTdDUTtFQUNJLGtCQUFBO0FGK0NaOztBQzFHSTtFQ29ESjtJQWNRLFlBQUE7RUY0Q047QUFDRjs7QUNuR0k7RUN3Q0o7SUFrQlEsWUFBQTtFRjZDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmdhbWUvaW5nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4qe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jbGVhci1yZWd1bGFyLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIHJlZ3VsYXIsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmNsZWFyLW1lZGl1bS10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCBib2xkLCAkdGV4dC1jb2xvci1jbGVhcik7XHJcbn1cclxuXHJcbi5kYXJrLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItZGFyayk7XHJcbn1cclxuXHJcbi5mbGV4LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBcclxufVxyXG5cclxuLmZ1bGwtc2NyZWVue1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYmctYXBwIHtcclxuICAgIEBleHRlbmQgLmZ1bGwtc2NyZWVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCBkZWVwc2t5Ymx1ZSk7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xlYXItcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmNsZWFyLW1lZGl1bS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmRhcmstcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmZsZXgtY2VudGVyLCAuY2hhcmFjdGVyc0dyaWQgLmdyaWQtaXRlbSwgLmNoYXJDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbnRlcmVkLCAuaW5nYW1lQmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsLXNjcmVlbiwgLmJnLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZy1hcHAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5jb250YWluZXJCRyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaW5nYW1lQmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNDB2aDtcbn1cblxuLmNoYXJDb250YWluZXIge1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNoYXJhY3RlcnNHcmlkIHtcbiAgaGVpZ2h0OiAzNXZoO1xuICB3aWR0aDogNjB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMGZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xufVxuLmNoYXJhY3RlcnNHcmlkIC5ncmlkLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2hhcmFjdGVyc0dyaWQgLnBsYXllci1pdGVtIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gIGdyaWQtcm93LWVuZDogNTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG4gIGdyaWQtY29sdW1uLWVuZDogNjtcbn1cbi5jaGFyYWN0ZXJzR3JpZCAuZ3JpZC1tb25zdGVyLTEtMCB7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xuICBncmlkLXJvdy1lbmQ6IDU7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG59XG4uY2hhcmFjdGVyc0dyaWQgLmdyaWQtbW9uc3Rlci0yLTAge1xuICBncmlkLXJvdy1zdGFydDogMTtcbiAgZ3JpZC1yb3ctZW5kOiAzO1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xufVxuLmNoYXJhY3RlcnNHcmlkIC5ncmlkLW1vbnN0ZXItMi0xIHtcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XG4gIGdyaWQtcm93LWVuZDogNTtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLlVJIHtcbiAgei1pbmRleDogMztcbn1cblxuLmNvbnRhaW5lclVJIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTQ4ODg2O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXJVSSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmNvbnRhaW5lclVJIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OTlweCkgYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuY29udGFpbmVyVUkge1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG59XG5cbi5wbGF5ZXJVSSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MHB4O1xuICByaWdodDogNXZ3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5wbGF5ZXJVSSB7XG4gICAgdG9wOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnBsYXllclVJIHtcbiAgICB0b3A6IDEwcHg7XG4gIH1cbn1cblxuLmVuZW1pZXNVSSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MHB4O1xuICBsZWZ0OiA1dnc7XG59XG4uZW5lbWllc1VJIC5lbmVteVVJOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmVuZW1pZXNVSSB7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLmVuZW1pZXNVSSB7XG4gICAgYm90dG9tOiAxMHB4O1xuICB9XG59IiwiJGNvbG9yLXByaW1hcnktMDogIzAwYTBmZjsgLy8gTWFpbiBQcmltYXJ5IGNvbG9yICovXHJcbiRjb2xvci1wcmltYXJ5LTE6ICMzNWIyZmM7XHJcbiRjb2xvci1wcmltYXJ5LTI6ICMwY2E0ZmY7XHJcbiRjb2xvci1wcmltYXJ5LTM6ICMwMDcwYjM7XHJcbiRjb2xvci1wcmltYXJ5LTQ6ICMwMDU0ODg4NjtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMS0wOiAjZmZiYjAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0xLTE6ICNmZmM2MmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0yOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMzogI2ZmYmIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTQ6ICNkNTljMDA7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTItMDogI2ZmM2QwMDsgLy8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMi0xOiAjZmY1ZDJhO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMjogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTM6ICNmZjNkMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi00OiAjZDUzMzAwO1xyXG5cclxuJHRleHQtY29sb3ItY2xlYXI6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHRleHQtY29sb3ItZGFyazogcmdiYSgwLCAwLCAwKTtcclxuXHJcbiRmb250LXdlaWdodHM6IChcclxuICAgIFwicmVndWxhclwiOiA0MDAsXHJcbiAgICBcIm1lZGl1bVwiOiA1MDAsXHJcbiAgICBcImJvbGRcIjogNjAwLFxyXG4pO1xyXG5cclxuJGZvbnQtc2l6ZXM6IChcclxuICAgIFwic21hbGxcIjogMTRweCxcclxuICAgIFwibWVkaXVtXCI6IDI0cHgsXHJcbiAgICBcImJpZ1wiOiAzMnB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGZvbnQtd2VpZ2h0KCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtd2VpZ2h0cywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZm9udC1zaXplKCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtc2l6ZXMsICRrZXk6ICRuYW1lKTtcclxufVxyXG5cclxuQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRjb2xvcikge1xyXG4gICAgZm9udC1zaXplOiBmb250LXNpemUoJHNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0KCR3ZWlnaHQpO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSgkdGltZTogMC4zcykge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gb3Bhc2l0eS1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyQkd7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG4uaW5nYW1lQmFja2dyb3VuZCB7XHJcbiAgICBAZXh0ZW5kIC5jZW50ZXJlZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTQwdmg7XHJcbn1cclxuXHJcbi5jaGFyQ29udGFpbmVyIHtcclxuICAgIEBleHRlbmQgLmZsZXgtY2VudGVyO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jaGFyYWN0ZXJzR3JpZCB7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICB3aWR0aDogNjB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC4xKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMGZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcclxuXHJcbiAgICAuZ3JpZC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcclxuICAgICAgICAvLyAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgICAgICBAZXh0ZW5kIC5mbGV4LWNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucGxheWVyLWl0ZW0ge1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDY7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtbW9uc3Rlci0xLTAge1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtbW9uc3Rlci0yLTAge1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogMztcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtbW9uc3Rlci0yLTEge1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAzO1xyXG4gICAgICAgIGdyaWQtcm93LWVuZDogNTtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5VSSB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uY29udGFpbmVyVUkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnktNDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogc29saWQgcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC41KSAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBtb2JpbGUtbGFuZHNjYXBle1xyXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGxheWVyVUkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDV2dztcclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXR7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlICBtb2JpbGUtbGFuZHNjYXBle1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVuZW1pZXNVSSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICBsZWZ0OiA1dnc7XHJcblxyXG4gICAgLmVuZW15VUkge1xyXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZW5lbXkge1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlICB0YWJsZXR7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlICBtb2JpbGUtbGFuZHNjYXBle1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

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
            name: "knight",
            sizeX: 384,
            sizeY: 192,
            columnN: 14,
            iddleAnim: {
                position: 0,
                length: 14,
                speed: 100,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
            },
            attackAnim: {
                position: 1,
                length: 14,
                speed: 80,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
            },
            health: 100,
            coldDown: 2,
            damage: 50,
            height: 20
        });
        this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_4__["Character"]({
            name: "wolf",
            sizeX: 388,
            sizeY: 192,
            columnN: 15,
            iddleAnim: {
                position: 0,
                length: 12,
                speed: 100,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
            },
            attackAnim: {
                position: 1,
                length: 15,
                speed: 80,
                play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
            },
            health: 100,
            coldDown: 2.5,
            damage: 50,
            height: 20
        }));
        setTimeout(() => {
            this.enemies.push(new src_app_classes_character__WEBPACK_IMPORTED_MODULE_4__["Character"]({
                name: "wolf",
                sizeX: 388,
                sizeY: 192,
                columnN: 15,
                iddleAnim: {
                    position: 0,
                    length: 12,
                    speed: 100,
                    play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].loop
                },
                attackAnim: {
                    position: 1,
                    length: 15,
                    speed: 80,
                    play: _interfaces_animation_info_anim__WEBPACK_IMPORTED_MODULE_2__["EnumAnim"].oneShoot
                },
                health: 100,
                coldDown: 2.5,
                damage: 50,
                height: 30
            }));
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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center, :host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.imgContainer {\n  transition: opacity 0.5s ease-in-out;\n  opacity: 0;\n  width: auto;\n  position: absolute;\n  overflow: hidden;\n}\n\n.imgContainer img {\n  height: 100%;\n  width: auto;\n  position: absolute;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNwcml0ZS1hbmltXFxzcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9zcHJpdGUtYW5pbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcHJpdGUtYW5pbS9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Nwcml0ZS1hbmltL0Y6XFxQcm95ZWN0b3MgUGVyc29uYWxlc1xcQW5ndWxhcjhcXGFuZ3VsYXItZmFudGFzeS9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQTtFRWtDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRGxDSjs7QURDQTtFRThCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQTFCZTtFQTJCZiw4Q0FBQTtBRDNCSjs7QURGQTtFRTBCSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQXpCYztFQTBCZCw4Q0FBQTtBRHBCSjs7QURMQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNRSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkE7RUFFSSwrQ0FBQTtFQUNBLFdBQUE7QUNNSjs7QUU5Q0E7RUQrQ0ksb0NBQUE7RUM3Q0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGZ0RKOztBRS9DSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRmlEUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ByaXRlLWFuaW0vc3ByaXRlLWFuaW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uY2xlYXItbWVkaXVtLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIGJvbGQsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmRhcmstcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZsZXgtY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZnVsbC1zY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbGVhci1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY2xlYXItbWVkaXVtLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZGFyay1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uZmxleC1jZW50ZXIsIDpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsLXNjcmVlbiwgLmJnLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZy1hcHAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5pbWdDb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nQ29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59IiwiJGNvbG9yLXByaW1hcnktMDogIzAwYTBmZjsgLy8gTWFpbiBQcmltYXJ5IGNvbG9yICovXHJcbiRjb2xvci1wcmltYXJ5LTE6ICMzNWIyZmM7XHJcbiRjb2xvci1wcmltYXJ5LTI6ICMwY2E0ZmY7XHJcbiRjb2xvci1wcmltYXJ5LTM6ICMwMDcwYjM7XHJcbiRjb2xvci1wcmltYXJ5LTQ6ICMwMDU0ODg4NjtcclxuXHJcbiRjb2xvci1zZWNvbmRhcnktMS0wOiAjZmZiYjAwOyAvLyBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cclxuJGNvbG9yLXNlY29uZGFyeS0xLTE6ICNmZmM2MmE7XHJcbiRjb2xvci1zZWNvbmRhcnktMS0yOiAjZmZiYjAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMzogI2ZmYmIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTQ6ICNkNTljMDA7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTItMDogI2ZmM2QwMDsgLy8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDIpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMi0xOiAjZmY1ZDJhO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMjogI2ZmM2QwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTM6ICNmZjNkMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi00OiAjZDUzMzAwO1xyXG5cclxuJHRleHQtY29sb3ItY2xlYXI6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHRleHQtY29sb3ItZGFyazogcmdiYSgwLCAwLCAwKTtcclxuXHJcbiRmb250LXdlaWdodHM6IChcclxuICAgIFwicmVndWxhclwiOiA0MDAsXHJcbiAgICBcIm1lZGl1bVwiOiA1MDAsXHJcbiAgICBcImJvbGRcIjogNjAwLFxyXG4pO1xyXG5cclxuJGZvbnQtc2l6ZXM6IChcclxuICAgIFwic21hbGxcIjogMTRweCxcclxuICAgIFwibWVkaXVtXCI6IDI0cHgsXHJcbiAgICBcImJpZ1wiOiAzMnB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGZvbnQtd2VpZ2h0KCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtd2VpZ2h0cywgJGtleTogJG5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZm9udC1zaXplKCRuYW1lKSB7XHJcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1hcDogJGZvbnQtc2l6ZXMsICRrZXk6ICRuYW1lKTtcclxufVxyXG5cclxuQG1peGluIHRleHQoJHNpemUsICR3ZWlnaHQsICRjb2xvcikge1xyXG4gICAgZm9udC1zaXplOiBmb250LXNpemUoJHNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGZvbnQtd2VpZ2h0KCR3ZWlnaHQpO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuQG1peGluIHRyYW5zaXRpb24tZWFzZSgkdGltZTogMC4zcykge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gb3Bhc2l0eS1lYXNlKCR0aW1lOiAwLjNzKSB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0aW1lIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gbW9iaWxlLWxhbmRzY2FwZSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpe1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIn5zcmMvc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcblxyXG46aG9zdHtcclxuICAgIEBleHRlbmQgLmZsZXgtY2VudGVyO1xyXG59XHJcblxyXG4uaW1nQ29udGFpbmVye1xyXG4gICAgQGluY2x1ZGUgb3Bhc2l0eS1lYXNlKC41cyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

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
    SetDefaultAnimation(newAnim) {
        this.defaultAnim = Object.create(newAnim);
    }
    PlayAnimation(newAnim) {
        this.currentAnim = Object.create(newAnim);
        this.PlayCurrentAnim();
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

module.exports = "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.clear-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.clear-medium-text, .container-grid .item-grid {\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.dark-regular-text {\n  font-size: 24px;\n  font-weight: 400;\n  color: black;\n  font-family: \"Courier New\", Courier, monospace;\n}\n\n.flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.full-screen, .bg-app {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.bg-app {\n  background: linear-gradient(white, deepskyblue);\n  z-index: -1;\n}\n\n.container-grid {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  width: 100%;\n  border-bottom: 3px solid white;\n  padding-left: 10px;\n}\n\n.container-grid .coldDown {\n  place-self: center center;\n  width: 120px;\n  height: 15px;\n  background-color: white;\n  border: 2px solid white;\n}\n\n.container-grid .coldDown .fill {\n  height: 100%;\n  width: 10%;\n  background: linear-gradient(to right, #ffbb00, #ff3d00);\n}\n\n.container-grid .hpSeparator {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n@media (max-width: 800px) {\n  .container-grid {\n    padding-left: 5px;\n    padding-right: 5px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n  .container-grid .name {\n    grid-row-start: 1;\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n  .container-grid .hp {\n    grid-row-start: 1;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    place-self: center right;\n  }\n  .container-grid .coldDown {\n    grid-row-start: 2;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    place-self: center right;\n  }\n}\n\n@media (min-width: 499px) and (max-height: 450px) {\n  .container-grid {\n    grid-template-columns: 1.4fr 1fr 1fr;\n    grid-template-rows: 1fr;\n  }\n  .container-grid .coldDown {\n    grid-row-start: 1;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    place-self: center right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91aS1jaGFyYWN0ZXIvRjpcXFByb3llY3RvcyBQZXJzb25hbGVzXFxBbmd1bGFyOFxcYW5ndWxhci1mYW50YXN5L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1aS1jaGFyYWN0ZXJcXHVpLWNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91aS1jaGFyYWN0ZXIvdWktY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci9GOlxcUHJveWVjdG9zIFBlcnNvbmFsZXNcXEFuZ3VsYXI4XFxhbmd1bGFyLWZhbnRhc3kvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUVrQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QURsQ0o7O0FEQ0E7RUU4QkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUExQmU7RUEyQmYsOENBQUE7QUQzQko7O0FERkE7RUUwQkksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUF6QmM7RUEwQmQsOENBQUE7QURwQko7O0FETEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDUUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBRUksK0NBQUE7RUFDQSxXQUFBO0FDTUo7O0FFbERBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUZxREo7O0FFL0NJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUZpRFI7O0FFaERRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx1REFBQTtBRmtEWjs7QUU5Q0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FGZ0RSOztBQ25CSTtFQ3ZESjtJQThCUSxpQkFBQTtJQUNBLGtCQUFBO0lBRUEsOEJBQUE7SUFDQSwyQkFBQTtFRitDTjtFRTdDTTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFRitDVjtFRTdDTTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0VGK0NWO0VFN0NNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esd0JBQUE7RUYrQ1Y7QUFDRjs7QUNoQ0k7RUNuRUo7SUF3RFEsb0NBQUE7SUFDQSx1QkFBQTtFRitDTjtFRTdDTTtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLHdCQUFBO0VGK0NWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VpLWNoYXJhY3Rlci91aS1jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsZWFyLXJlZ3VsYXItdGV4dCB7XHJcbiAgICBAaW5jbHVkZSB0ZXh0KG1lZGl1bSwgcmVndWxhciwgJHRleHQtY29sb3ItY2xlYXIpO1xyXG59XHJcblxyXG4uY2xlYXItbWVkaXVtLXRleHQge1xyXG4gICAgQGluY2x1ZGUgdGV4dChtZWRpdW0sIGJvbGQsICR0ZXh0LWNvbG9yLWNsZWFyKTtcclxufVxyXG5cclxuLmRhcmstcmVndWxhci10ZXh0IHtcclxuICAgIEBpbmNsdWRlIHRleHQobWVkaXVtLCByZWd1bGFyLCAkdGV4dC1jb2xvci1kYXJrKTtcclxufVxyXG5cclxuLmZsZXgtY2VudGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZnVsbC1zY3JlZW57XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5iZy1hcHAge1xyXG4gICAgQGV4dGVuZCAuZnVsbC1zY3JlZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbGVhci1yZWd1bGFyLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xufVxuXG4uY2xlYXItbWVkaXVtLXRleHQsIC5jb250YWluZXItZ3JpZCAuaXRlbS1ncmlkIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmRhcmstcmVndWxhci10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcbn1cblxuLmZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsLXNjcmVlbiwgLmJnLWFwcCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iZy1hcHAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIGRlZXBza3libHVlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5jb250YWluZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS40ZnIgMWZyIDFmcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNvbnRhaW5lci1ncmlkIC5jb2xkRG93biB7XG4gIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG4uY29udGFpbmVyLWdyaWQgLmNvbGREb3duIC5maWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmJiMDAsICNmZjNkMDApO1xufVxuLmNvbnRhaW5lci1ncmlkIC5ocFNlcGFyYXRvciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWluZXItZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cbiAgLmNvbnRhaW5lci1ncmlkIC5uYW1lIHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIH1cbiAgLmNvbnRhaW5lci1ncmlkIC5ocCB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciByaWdodDtcbiAgfVxuICAuY29udGFpbmVyLWdyaWQgLmNvbGREb3duIHtcbiAgICBncmlkLXJvdy1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gICAgcGxhY2Utc2VsZjogY2VudGVyIHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDk5cHgpIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLmNvbnRhaW5lci1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIH1cbiAgLmNvbnRhaW5lci1ncmlkIC5jb2xkRG93biB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xuICAgIHBsYWNlLXNlbGY6IGNlbnRlciByaWdodDtcbiAgfVxufSIsIiRjb2xvci1wcmltYXJ5LTA6ICMwMGEwZmY7IC8vIE1haW4gUHJpbWFyeSBjb2xvciAqL1xyXG4kY29sb3ItcHJpbWFyeS0xOiAjMzViMmZjO1xyXG4kY29sb3ItcHJpbWFyeS0yOiAjMGNhNGZmO1xyXG4kY29sb3ItcHJpbWFyeS0zOiAjMDA3MGIzO1xyXG4kY29sb3ItcHJpbWFyeS00OiAjMDA1NDg4ODY7XHJcblxyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMDogI2ZmYmIwMDsgLy8gTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXHJcbiRjb2xvci1zZWNvbmRhcnktMS0xOiAjZmZjNjJhO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTEtMjogI2ZmYmIwMDtcclxuJGNvbG9yLXNlY29uZGFyeS0xLTM6ICNmZmJiMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMS00OiAjZDU5YzAwO1xyXG5cclxuJGNvbG9yLXNlY29uZGFyeS0yLTA6ICNmZjNkMDA7IC8vIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItMTogI2ZmNWQyYTtcclxuJGNvbG9yLXNlY29uZGFyeS0yLTI6ICNmZjNkMDA7XHJcbiRjb2xvci1zZWNvbmRhcnktMi0zOiAjZmYzZDAwO1xyXG4kY29sb3Itc2Vjb25kYXJ5LTItNDogI2Q1MzMwMDtcclxuXHJcbiR0ZXh0LWNvbG9yLWNsZWFyOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiR0ZXh0LWNvbG9yLWRhcms6IHJnYmEoMCwgMCwgMCk7XHJcblxyXG4kZm9udC13ZWlnaHRzOiAoXHJcbiAgICBcInJlZ3VsYXJcIjogNDAwLFxyXG4gICAgXCJtZWRpdW1cIjogNTAwLFxyXG4gICAgXCJib2xkXCI6IDYwMCxcclxuKTtcclxuXHJcbiRmb250LXNpemVzOiAoXHJcbiAgICBcInNtYWxsXCI6IDE0cHgsXHJcbiAgICBcIm1lZGl1bVwiOiAyNHB4LFxyXG4gICAgXCJiaWdcIjogMzJweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBmb250LXdlaWdodCgkbmFtZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRmb250LXdlaWdodHMsICRrZXk6ICRuYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGZvbnQtc2l6ZSgkbmFtZSkge1xyXG4gICAgQHJldHVybiBtYXAtZ2V0KCRtYXA6ICRmb250LXNpemVzLCAka2V5OiAkbmFtZSk7XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0KCRzaXplLCAkd2VpZ2h0LCAkY29sb3IpIHtcclxuICAgIGZvbnQtc2l6ZTogZm9udC1zaXplKCRzaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBmb250LXdlaWdodCgkd2VpZ2h0KTtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbn1cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uLWVhc2UoJHRpbWU6IDAuM3MpIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIG9wYXNpdHktZWFzZSgkdGltZTogMC4zcykge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkdGltZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQG1peGluIHRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIG1vYmlsZS1sYW5kc2NhcGUge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ5OXB4KSBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KXtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCJ+c3JjL3N0eWxlcy9nbG9iYWwuc2Nzc1wiO1xyXG5cclxuLmNvbnRhaW5lci1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNGZyIDFmciAxZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuXHJcbiAgICAuaXRlbS1ncmlkIHtcclxuICAgICAgICBAZXh0ZW5kIC5jbGVhci1tZWRpdW0tdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sZERvd24ge1xyXG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAuZmlsbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3Itc2Vjb25kYXJ5LTEtMCwgJGNvbG9yLXNlY29uZGFyeS0yLTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaHBTZXBhcmF0b3Ige1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ocCB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xkRG93biB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIG1vYmlsZS1sYW5kc2NhcGV7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjRmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG5cclxuICAgICAgICAuY29sZERvd24ge1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWVuZDogNDtcclxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ== */"

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
            transitionDuration: this.character.GetColdDown() + "s"
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