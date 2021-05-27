(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js ***!
      \***********************************************************************/

    /*! exports provided: Facebook */

    /***/
    function node_modulesIonicNativeFacebook__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Facebook", function () {
        return Facebook;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

      var Facebook =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Facebook, _super);

        function Facebook() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0'
          };
          return _this;
        }

        Facebook.prototype.login = function (permissions) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {}, arguments);
        };

        Facebook.prototype.logout = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments);
        };

        Facebook.prototype.getLoginStatus = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLoginStatus", {}, arguments);
        };

        Facebook.prototype.getAccessToken = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAccessToken", {}, arguments);
        };

        Facebook.prototype.showDialog = function (options) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showDialog", {}, arguments);
        };

        Facebook.prototype.api = function (requestPath, permissions) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "api", {}, arguments);
        };

        Facebook.prototype.logEvent = function (name, params, valueToSum) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logEvent", {
            "successIndex": 3,
            "errorIndex": 4
          }, arguments);
        };

        Facebook.prototype.logPurchase = function (value, currency) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logPurchase", {}, arguments);
        };

        Facebook.prototype.getDeferredApplink = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDeferredApplink", {}, arguments);
        };

        Facebook.prototype.activateApp = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "activateApp", {}, arguments);
        };

        Facebook.pluginName = "Facebook";
        Facebook.plugin = "cordova-plugin-facebook4";
        Facebook.pluginRef = "facebookConnectPlugin";
        Facebook.repo = "https://github.com/jeduan/cordova-plugin-facebook4";
        Facebook.install = "ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
        Facebook.installVariables = ["APP_ID", "APP_NAME"];
        Facebook.platforms = ["Android", "iOS", "Browser"];

        Facebook.ɵfac = function Facebook_Factory(t) {
          return ɵFacebook_BaseFactory(t || Facebook);
        };

        Facebook.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: Facebook,
          factory: function factory(t) {
            return Facebook.ɵfac(t);
          }
        });

        var ɵFacebook_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Facebook);
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Facebook, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return Facebook;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmFjZWJvb2svbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRVEsSUFrSHNCLDRCQUFpQjtBQUFDO0FBRXJDO0FBQ3NCLFFBRi9CLFlBQU0sR0FBRztBQUNYLFlBQUksd0JBQXdCLEVBQUUsd0JBQXdCO0FBQ3RELFlBQUksMEJBQTBCLEVBQUUsMEJBQTBCO0FBQzFELFlBQUksZ0NBQWdDLEVBQUUsNkJBQTZCO0FBQ25FLFlBQUksZ0NBQWdDLEVBQUUsaUNBQWlDO0FBQ3ZFLFlBQUksaUNBQWlDLEVBQUUsaUNBQWlDO0FBQ3hFLFlBQUkseUJBQXlCLEVBQUUsd0JBQXdCO0FBQ3ZELFlBQUksbUJBQW1CLEVBQUUsa0JBQWtCO0FBQzNDLFlBQUksZ0JBQWdCLEVBQUUsZ0JBQWdCO0FBQ3RDLFlBQUksNkJBQTZCLEVBQUUsK0JBQStCO0FBQ2xFLFlBQUksOEJBQThCLEVBQUUsNkJBQTZCO0FBQ2pFLFlBQUksd0JBQXdCLEVBQUUsdUJBQXVCO0FBQ3JELFlBQUksNEJBQTRCLEVBQUUsMkJBQTJCO0FBQzdELFlBQUksNkJBQTZCLEVBQUUsOEJBQThCO0FBQ2pFLFlBQUksNkJBQTZCLEVBQUUsNEJBQTRCO0FBQy9ELFlBQUksb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzlDLFlBQUkseUJBQXlCLEVBQUUsMEJBQTBCO0FBQ3pELFlBQUksK0JBQStCLEVBQUUsZ0NBQWdDO0FBQ3JFLFlBQUksd0JBQXdCLEVBQUUseUJBQXlCO0FBQ3ZELFlBQUksb0JBQW9CLEVBQUUsYUFBYTtBQUN2QyxZQUFJLCtCQUErQixFQUFFLHdCQUF3QjtBQUM3RCxZQUFJLHdCQUF3QixFQUFFLGlCQUFpQjtBQUMvQyxZQUFJLHNCQUFzQixFQUFFLGVBQWU7QUFDM0MsWUFBSSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDakQsWUFBSSxtQkFBbUIsRUFBRSxZQUFZO0FBQ3JDLFlBQUksNEJBQTRCLEVBQUUscUJBQXFCO0FBQ3ZELFlBQUksa0NBQWtDLEVBQUUsMkJBQTJCO0FBQ25FLFlBQUkscUJBQXFCLEVBQUUsY0FBYztBQUN6QyxZQUFJLGlCQUFpQixFQUFFLFVBQVU7QUFDakMsWUFBSSx1QkFBdUIsRUFBRSxnQkFBZ0I7QUFDN0MsWUFBSSw4QkFBOEIsRUFBRSx5QkFBeUI7QUFDN0QsWUFBSSxxQkFBcUIsRUFBRSxHQUFHO0FBQzlCLFlBQUksb0JBQW9CLEVBQUUsR0FBRztBQUM3QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFxQm5CLHdCQUFLLGFBQUMsV0FBcUI7QUFJN0IsSUFPRSx5QkFBTTtBQUtpQixJQTBCdkIsaUNBQWM7QUFLaUIsSUFLL0IsaUNBQWM7QUFLYyxJQWlCNUIsNkJBQVUsYUFBQyxPQUFZO0FBS1IsSUFhZixzQkFBRyxhQUFDLFdBQW1CLEVBQUUsV0FBcUI7QUFLdEMsSUFXUiwyQkFBUSxhQUFDLElBQVksRUFBRSxNQUFlLEVBQUUsVUFBbUI7QUFLVixJQU9qRCw4QkFBVyxhQUFDLEtBQWEsRUFBRSxRQUFnQjtBQUszQixJQUloQixxQ0FBa0I7QUFLYyxJQUloQyw4QkFBVztBQUlzQjtBQUFzQztBQUFrRDtBQUFrRDtBQUEwRTtBQUFrSjtBQUF3RDtJQXhNcGIsUUFBUSx3QkFEcEIsVUFBVSxFQUFFLFFBQ0EsUUFBUTs7Ozs7MEJBQUU7QUFBQyxtQkF0SHhCO0FBQUUsRUFzSDRCLGlCQUFpQjtBQUM5QyxTQURZLFFBQVE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2Vib29rTG9naW5SZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuXG4gIGF1dGhSZXNwb25zZToge1xuICAgIHNlc3Npb25fa2V5OiBib29sZWFuO1xuXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcblxuICAgIGV4cGlyZXNJbjogbnVtYmVyO1xuXG4gICAgc2lnOiBzdHJpbmc7XG5cbiAgICBzZWNyZXQ6IHN0cmluZztcblxuICAgIHVzZXJJRDogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEZhY2Vib29rXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSB0aGUgRmFjZWJvb2sgQ29ubmVjdCBwbHVnaW4gdG8gb2J0YWluIGFjY2VzcyB0byB0aGUgbmF0aXZlIEZCIGFwcGxpY2F0aW9uIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rNGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtGYWNlYm9vayBDb25uZWN0XShodHRwczovL2dpdGh1Yi5jb20vamVkdWFuL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rNCkuXG4gKlxuICogIyMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiAgVG8gdXNlIHRoZSBGQiBwbHVnaW4sIHlvdSBmaXJzdCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBGYWNlYm9vayBBcHAgaW5zaWRlIG9mIHRoZSBGYWNlYm9vayBkZXZlbG9wZXIgcG9ydGFsIGF0IFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcykuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0xXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzEucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBSZXRyaWV2ZSB0aGUgYEFwcCBJRGAgYW5kIGBBcHAgTmFtZWAuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0yXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzIucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBUaGVuIHR5cGUgaW4gdGhlIGZvbGxvd2luZyBjb21tYW5kIGluIHlvdXIgVGVybWluYWwsIHdoZXJlIEFQUF9JRCBhbmQgQVBQX05BTUUgYXJlIHRoZSB2YWx1ZXMgZnJvbSB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbC5cbiAqXG4gKiBgYGBiYXNoXG4gKiAgaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rNCAtLXZhcmlhYmxlIEFQUF9JRD1cIjEyMzQ1Njc4OVwiIC0tdmFyaWFibGUgQVBQX05BTUU9XCJteUFwcGxpY2F0aW9uXCJcbiAqIGBgYFxuICpcbiAqIEFmdGVyLCB5b3UnbGwgbmVlZCB0byBhZGQgdGhlIG5hdGl2ZSBwbGF0Zm9ybXMgeW91J2xsIGJlIHVzaW5nIHRvIHlvdXIgYXBwIGluIHRoZSBGYWNlYm9vayBEZXZlbG9wZXIgcG9ydGFsIHVuZGVyIHlvdXIgYXBwJ3MgU2V0dGluZ3M6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0zXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzMucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBDbGljayBgJ0FkZCBQbGF0Zm9ybSdgLlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNF0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay80LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogQXQgdGhpcyBwb2ludCB5b3UnbGwgbmVlZCB0byBvcGVuIHlvdXIgcHJvamVjdCdzIFtgY29uZmlnLnhtbGBdKGh0dHBzOi8vY29yZG92YS5hcGFjaGUub3JnL2RvY3MvZW4vbGF0ZXN0L2NvbmZpZ19yZWYvaW5kZXguaHRtbCkgZmlsZSwgZm91bmQgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHlvdXIgcHJvamVjdC5cbiAqXG4gKiBUYWtlIG5vdGUgb2YgdGhlIGBpZGAgZm9yIHRoZSBuZXh0IHN0ZXA6XG4gKiBgYGBcbiAqIDx3aWRnZXQgaWQ9XCJjb20ubXljb21wYW55LnRlc3RhcHBcIiB2ZXJzaW9uPVwiMC4wLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnL25zL3dpZGdldHNcIiB4bWxuczpjZHY9XCJodHRwOi8vY29yZG92YS5hcGFjaGUub3JnL25zLzEuMFwiPlxuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIGVkaXQgdGhlIGBpZGAgdG8gd2hhdGV2ZXIgeW91J2QgbGlrZSBpdCB0byBiZS5cbiAqXG4gKiAjIyMjIGlPUyBJbnN0YWxsXG4gKiBVbmRlciAnQnVuZGxlIElEJywgYWRkIHRoZSBgaWRgIGZyb20geW91ciBgY29uZmlnLnhtbGAgZmlsZTpcbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTVdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNS5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqXG4gKiAjIyMjIEFuZHJvaWQgSW5zdGFsbFxuICogVW5kZXIgJ0dvb2dsZSBQbGF5IFBhY2thZ2UgTmFtZScsIGFkZCB0aGUgYGlkYCBmcm9tIHlvdXIgYGNvbmZpZy54bWxgIGZpbGU6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC02XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzYucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKlxuICogQW5kIHRoYXQncyBpdCEgWW91IGNhbiBub3cgbWFrZSBjYWxscyB0byBGYWNlYm9vayB1c2luZyB0aGUgcGx1Z2luLlxuICpcbiAqICMjIEV2ZW50c1xuICpcbiAqIEFwcCBldmVudHMgYWxsb3cgeW91IHRvIHVuZGVyc3RhbmQgdGhlIG1ha2V1cCBvZiB1c2VycyBlbmdhZ2luZyB3aXRoIHlvdXIgYXBwLCBtZWFzdXJlIHRoZSBwZXJmb3JtYW5jZSBvZiB5b3VyIEZhY2Vib29rIG1vYmlsZSBhcHAgYWRzLCBhbmQgcmVhY2ggc3BlY2lmaWMgc2V0cyBvZiB5b3VyIHVzZXJzIHdpdGggRmFjZWJvb2sgbW9iaWxlIGFwcCBhZHMuXG4gKlxuICogLSBbaU9TXSBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2lvcy9hcHAtZXZlbnRzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvaW9zL2FwcC1ldmVudHMpXG4gKiAtIFtBbmRyb2lkXSBbaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FuZHJvaWQvYXBwLWV2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FuZHJvaWQvYXBwLWV2ZW50cylcbiAqIC0gW0pTXSBEb2VzIG5vdCBoYXZlIGFuIEV2ZW50cyBBUEksIHNvIHRoZSBwbHVnaW4gZnVuY3Rpb25zIGFyZSBlbXB0eSBhbmQgd2lsbCByZXR1cm4gYW4gYXV0b21hdGljIHN1Y2Nlc3NcbiAqXG4gKiBBY3RpdmF0aW9uIGV2ZW50cyBhcmUgYXV0b21hdGljYWxseSB0cmFja2VkIGZvciB5b3UgaW4gdGhlIHBsdWdpbi5cbiAqXG4gKiBFdmVudHMgYXJlIGxpc3RlZCBvbiB0aGUgW2luc2lnaHRzIHBhZ2VdKGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pbnNpZ2h0cy8pLlxuICpcbiAqIEZvciB0cmFja2luZyBldmVudHMsIHNlZSBgbG9nRXZlbnRgIGFuZCBgbG9nUHVyY2hhc2VgLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZWJvb2ssIEZhY2Vib29rTG9naW5SZXNwb25zZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZWJvb2svbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGYWNlYm9vaykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5mYi5sb2dpbihbJ3B1YmxpY19wcm9maWxlJywgJ3VzZXJfZnJpZW5kcycsICdlbWFpbCddKVxuICogICAudGhlbigocmVzOiBGYWNlYm9va0xvZ2luUmVzcG9uc2UpID0+IGNvbnNvbGUubG9nKCdMb2dnZWQgaW50byBGYWNlYm9vayEnLCByZXMpKVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3IgbG9nZ2luZyBpbnRvIEZhY2Vib29rJywgZSkpO1xuICpcbiAqXG4gKiB0aGlzLmZiLmxvZ0V2ZW50KHRoaXMuZmIuRVZFTlRTLkVWRU5UX05BTUVfQURERURfVE9fQ0FSVCk7XG4gKlxuICogYGBgXG4gKlxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZhY2Vib29rJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0JyxcbiAgcGx1Z2luUmVmOiAnZmFjZWJvb2tDb25uZWN0UGx1Z2luJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tZmFjZWJvb2s0JyxcbiAgaW5zdGFsbDpcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rNCAtLXZhcmlhYmxlIEFQUF9JRD1cIjEyMzQ1Njc4OVwiIC0tdmFyaWFibGUgQVBQX05BTUU9XCJteUFwcGxpY2F0aW9uXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQUF9JRCcsICdBUFBfTkFNRSddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnQnJvd3NlciddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlYm9vayBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRVZFTlRTID0ge1xuICAgIEVWRU5UX05BTUVfQUNUSVZBVEVEX0FQUDogJ2ZiX21vYmlsZV9hY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfREVBQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2RlYWN0aXZhdGVfYXBwJyxcbiAgICBFVkVOVF9OQU1FX1NFU1NJT05fSU5URVJSVVBUSU9OUzogJ2ZiX21vYmlsZV9hcHBfaW50ZXJydXB0aW9ucycsXG4gICAgRVZFTlRfTkFNRV9USU1FX0JFVFdFRU5fU0VTU0lPTlM6ICdmYl9tb2JpbGVfdGltZV9iZXR3ZWVuX3Nlc3Npb25zJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9SRUdJU1RSQVRJT046ICdmYl9tb2JpbGVfY29tcGxldGVfcmVnaXN0cmF0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1ZJRVdFRF9DT05URU5UOiAnZmJfbW9iaWxlX2NvbnRlbnRfdmlldycsXG4gICAgRVZFTlRfTkFNRV9TRUFSQ0hFRDogJ2ZiX21vYmlsZV9zZWFyY2gnLFxuICAgIEVWRU5UX05BTUVfUkFURUQ6ICdmYl9tb2JpbGVfcmF0ZScsXG4gICAgRVZFTlRfTkFNRV9DT01QTEVURURfVFVUT1JJQUw6ICdmYl9tb2JpbGVfdHV0b3JpYWxfY29tcGxldGlvbicsXG4gICAgRVZFTlRfTkFNRV9QVVNIX1RPS0VOX09CVEFJTkVEOiAnZmJfbW9iaWxlX29idGFpbl9wdXNoX3Rva2VuJyxcbiAgICBFVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQ6ICdmYl9tb2JpbGVfYWRkX3RvX2NhcnQnLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fV0lTSExJU1Q6ICdmYl9tb2JpbGVfYWRkX3RvX3dpc2hsaXN0JyxcbiAgICBFVkVOVF9OQU1FX0lOSVRJQVRFRF9DSEVDS09VVDogJ2ZiX21vYmlsZV9pbml0aWF0ZWRfY2hlY2tvdXQnLFxuICAgIEVWRU5UX05BTUVfQURERURfUEFZTUVOVF9JTkZPOiAnZmJfbW9iaWxlX2FkZF9wYXltZW50X2luZm8nLFxuICAgIEVWRU5UX05BTUVfUFVSQ0hBU0VEOiAnZmJfbW9iaWxlX3B1cmNoYXNlJyxcbiAgICBFVkVOVF9OQU1FX0FDSElFVkVEX0xFVkVMOiAnZmJfbW9iaWxlX2xldmVsX2FjaGlldmVkJyxcbiAgICBFVkVOVF9OQU1FX1VOTE9DS0VEX0FDSElFVkVNRU5UOiAnZmJfbW9iaWxlX2FjaGlldmVtZW50X3VubG9ja2VkJyxcbiAgICBFVkVOVF9OQU1FX1NQRU5UX0NSRURJVFM6ICdmYl9tb2JpbGVfc3BlbnRfY3JlZGl0cycsXG4gICAgRVZFTlRfUEFSQU1fQ1VSUkVOQ1k6ICdmYl9jdXJyZW5jeScsXG4gICAgRVZFTlRfUEFSQU1fUkVHSVNUUkFUSU9OX01FVEhPRDogJ2ZiX3JlZ2lzdHJhdGlvbl9tZXRob2QnLFxuICAgIEVWRU5UX1BBUkFNX0NPTlRFTlRfVFlQRTogJ2ZiX2NvbnRlbnRfdHlwZScsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9JRDogJ2ZiX2NvbnRlbnRfaWQnLFxuICAgIEVWRU5UX1BBUkFNX1NFQVJDSF9TVFJJTkc6ICdmYl9zZWFyY2hfc3RyaW5nJyxcbiAgICBFVkVOVF9QQVJBTV9TVUNDRVNTOiAnZmJfc3VjY2VzcycsXG4gICAgRVZFTlRfUEFSQU1fTUFYX1JBVElOR19WQUxVRTogJ2ZiX21heF9yYXRpbmdfdmFsdWUnLFxuICAgIEVWRU5UX1BBUkFNX1BBWU1FTlRfSU5GT19BVkFJTEFCTEU6ICdmYl9wYXltZW50X2luZm9fYXZhaWxhYmxlJyxcbiAgICBFVkVOVF9QQVJBTV9OVU1fSVRFTVM6ICdmYl9udW1faXRlbXMnLFxuICAgIEVWRU5UX1BBUkFNX0xFVkVMOiAnZmJfbGV2ZWwnLFxuICAgIEVWRU5UX1BBUkFNX0RFU0NSSVBUSU9OOiAnZmJfZGVzY3JpcHRpb24nLFxuICAgIEVWRU5UX1BBUkFNX1NPVVJDRV9BUFBMSUNBVElPTjogJ2ZiX21vYmlsZV9sYXVuY2hfc291cmNlJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9ZRVM6ICcxJyxcbiAgICBFVkVOVF9QQVJBTV9WQUxVRV9OTzogJzAnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB0byBhdXRoZW50aWNhdGUgdGhpcyBhcHAuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICoge1xuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAqICAgYXV0aFJlc3BvbnNlOiB7XG4gICAqICAgICBzZXNzaW9uX2tleTogdHJ1ZSxcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIGV4cGlyZXNJbjogNTE4Mzk3OSxcbiAgICogICAgIHNpZzogJy4uLicsXG4gICAqICAgICBzZWNyZXQ6ICcuLi4nLFxuICAgKiAgICAgdXNlcklEOiAnNjM0NTY1NDM1J1xuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIHRoaXMgYXBwIGhhcyB1cG9uIGxvZ2dpbmcgaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cyBvYmplY3QgaWYgbG9naW4gc3VjY2VlZHMsIGFuZCByZWplY3RzIGlmIGxvZ2luIGZhaWxzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbihwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgb2YgRmFjZWJvb2suXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm8gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmxvZ291dClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBhIHN1Y2Nlc3NmdWwgbG9nb3V0LCBhbmQgcmVqZWN0cyBpZiBsb2dvdXQgZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiB0byBGYWNlYm9vayBhbmQgaGFzIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHAuICBUaGVyZSBhcmUgdGhyZWUgcG9zc2libGUgc3RhdGVzIGZvciBhIHVzZXI6XG4gICAqXG4gICAqIDEpIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbnRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChjb25uZWN0ZWQpXG4gICAqIDIpIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbnRvIEZhY2Vib29rIGJ1dCBoYXMgbm90IGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiAobm90X2F1dGhvcml6ZWQpXG4gICAqIDMpIHRoZSB1c2VyIGlzIGVpdGhlciBub3QgbG9nZ2VkIGludG8gRmFjZWJvb2sgb3IgZXhwbGljaXRseSBsb2dnZWQgb3V0IG9mIHlvdXIgYXBwbGljYXRpb24gc28gaXQgZG9lc24ndCBhdHRlbXB0IHRvIGNvbm5lY3QgdG8gRmFjZWJvb2sgYW5kIHRodXMsIHdlIGRvbid0IGtub3cgaWYgdGhleSd2ZSBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gb3Igbm90ICh1bmtub3duKVxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIGEgcmVzcG9uc2UgbGlrZTpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIHVzZXJJRDogJzEyMzQ1Njc4OTEyMzQ1JyxcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIHNlc3Npb25fS2V5OiB0cnVlLFxuICAgKiAgICAgZXhwaXJlc0luOiAnNTE4MzczOCcsXG4gICAqICAgICBzaWc6ICcuLi4nXG4gICAqICAgfSxcbiAgICogICBzdGF0dXM6ICdjb25uZWN0ZWQnXG4gICAqIH1cbiAgICogYGBgXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9yZWZlcmVuY2UvamF2YXNjcmlwdC9GQi5nZXRMb2dpblN0YXR1cylcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0TG9naW5TdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgRmFjZWJvb2sgYWNjZXNzIHRva2VuIGZvciB1c2luZyBGYWNlYm9vayBzZXJ2aWNlcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFuIGFjY2VzcyB0b2tlbiwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIG9mIHZhcmlvdXMgRmFjZWJvb2sgZGlhbG9ncy4gRXhhbXBsZSBvZiBvcHRpb25zIGZvciBhIFNoYXJlIGRpYWxvZzpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBtZXRob2Q6ICdzaGFyZScsXG4gICAqICAgaHJlZjogJ2h0dHA6Ly9leGFtcGxlLmNvbScsXG4gICAqICAgY2FwdGlvbjogJ1N1Y2ggY2FwdGlvbiwgdmVyeSBmZWVkLicsXG4gICAqICAgZGVzY3JpcHRpb246ICdNdWNoIGRlc2NyaXB0aW9uJyxcbiAgICogICBwaWN0dXJlOiAnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZydcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgb3B0aW9ucyBzZWUgdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vamVkdWFuL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rNCNzaG93LWEtZGlhbG9nKSBhbmQgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvamF2YXNjcmlwdC9yZWZlcmVuY2UvRkIudWkpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBkaWFsb2cgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc3VjY2VzcyBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvd0RpYWxvZyhvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGEgY2FsbCB0byBGYWNlYm9vayBHcmFwaCBBUEkuIENhbiB0YWtlIGFkZGl0aW9uYWwgcGVybWlzc2lvbnMgYmV5b25kIHRob3NlIGdyYW50ZWQgb24gbG9naW4uXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZTpcbiAgICpcbiAgICogIENhbGxpbmcgdGhlIEdyYXBoIEFQSSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3JlZmVyZW5jZS9GQi5hcGlcbiAgICogIEdyYXBoIEV4cGxvcmVyIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS90b29scy9leHBsb3JlclxuICAgKiAgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2dyYXBoLWFwaVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIHJlcXVlc3RQYXRoIEdyYXBoIEFQSSBlbmRwb2ludCB5b3Ugd2FudCB0byBjYWxsXG4gICAqIEBwYXJhbSB7c3RyaW5nW119ICBwZXJtaXNzaW9ucyBMaXN0IG9mIFtwZXJtaXNzaW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLWxvZ2luL3Blcm1pc3Npb25zKSBmb3IgdGhpcyByZXF1ZXN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFwaShyZXF1ZXN0UGF0aDogc3RyaW5nLCBwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gZXZlbnQuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9ICBbcGFyYW1zXSBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gIFt2YWx1ZVRvU3VtXSBhbnkgdmFsdWUgdG8gYmUgYWRkZWQgdG8gYWRkZWQgdG8gYSBzdW0gb24gZWFjaCBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgdmFsdWVUb1N1bT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIHB1cmNoYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBjdXJyZW5jeSBUaGUgY3VycmVuY3ksIGFzIGFuIFtJU08gNDIxNyBjdXJyZW5jeSBjb2RlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dQdXJjaGFzZSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVmZXJyZWQgYXBwIGxpbmtcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RGVmZXJyZWRBcHBsaW5rKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IGxvZyBhY3RpdmF0aW9uIGV2ZW50c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhY3RpdmF0ZUFwcCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"login-header\" absolute top start width-100>\n    <img absolute top start size-full object-fit src=\"assets/imgs/login-header.png\" />\n  </div>\n  <div absolute top start index-100 width-100 padding-x2 class=\"main ion-text-center\">\n    <div class=\"d-flex ion-justify-content-center ion-margin-bottom ion-padding-bottom\">\n      <ion-back-button defaultHref=\"/home\" color=\"truewhite\"></ion-back-button>\n    </div>\n    <ion-list padding-x2 margin-auto class=\"ion-no-margin ion-padding-top content\">\n      <div *ngIf=\"'general.config._terms_login'|translate\" class=\"ion-margin-bottom\">\n        <ion-item detail=\"false\" lines=\"none\" class=\"ion-no-padding\" [routerLink]=\"['/detail', 0, {type:1,slug:('general.config._terms_login'|translate)}]\">\n          <ion-icon slot=\"start\" name=\"checkbox-outline\" color=\"success\" class=\"ion-margin-end\"></ion-icon>\n          <ion-label [innerHTML]=\"'login.terms'|translate\" class=\"ion-text-wrap ion-no-margin\"></ion-label>\n        </ion-item>\n      </div>\n      <!-- <ion-button expand=\"block\" (click)=\"facebook()\" class=\"ion-margin-bottom facebook\">\n        <span>{{'login.login.facebook'|translate}}</span>\n        <ion-spinner *ngIf=\"loadingFacebook\" spinner-load absolute end name=\"lines\" color=\"light\" class=\"ion-margin-end\"></ion-spinner>\n      </ion-button> -->\n      <form *ngIf=\"form\" [formGroup]=\"form\" class=\"ion-padding-vertical\" (keyup.enter)=\"submit()\">\n        <ion-item class=\"ion-no-padding\">\n          <ion-label position=\"stacked\">{{'login.username'|translate}}</ion-label>\n          <ion-input formControlName=\"username\" clearInput></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" *ngIf=\"!isRegister\">\n          <ion-label position=\"stacked\">{{'login.password'|translate}}</ion-label>\n          <ion-input type=\"password\" formControlName=\"password\" clearInput></ion-input>\n        </ion-item>\n        <ion-item class=\"ion-no-padding\" *ngIf=\"isRegister\">\n          <ion-label position=\"stacked\">{{'login.email'|translate}}</ion-label>\n          <ion-input type=\"email\" formControlName=\"email\" clearInput></ion-input>\n        </ion-item>\n      </form>\n      <!-- Login button -->\n      <ion-button expand=\"block\" [disabled]=\"!form.valid\" (click)=\"login()\" *ngIf=\"!isRegister\">\n        <span>{{'login.login.title'|translate}}</span>\n        <ion-spinner *ngIf=\"loading\" spinner-load absolute end name=\"lines\" color=\"light\" class=\"ion-margin-end\"></ion-spinner>\n      </ion-button>\n      <!-- Register button -->\n      <ion-button expand=\"block\" [disabled]=\"!form.valid\" (click)=\"register()\" *ngIf=\"isRegister\">\n        <span>{{'login.register.title'|translate}}</span>\n        <ion-spinner *ngIf=\"loading\" spinner-load absolute end name=\"lines\" color=\"light\" class=\"ion-margin-end\"></ion-spinner>\n      </ion-button>\n      <!-- Forgot button -->\n      <ion-button (click)=\"forgot()\" fill=\"clear\" color=\"dark\" class=\"ion-no-margin\">\n        <span>{{'login.forgot.title'|translate}}</span>\n      </ion-button>\n    </ion-list>\n    <h4></h4>\n    <ion-button (click)=\"switch()\" fill=\"clear\">\n      <span *ngIf=\"!isRegister\">{{'login.register.hint'|translate}}</span>\n      <span *ngIf=\"isRegister\">{{'login.login.hint'|translate}}</span>\n    </ion-button>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/login/login-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/login/login.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-login .login-header {\n  padding-top: 50%;\n}\napp-login .main {\n  padding-top: 30%;\n}\napp-login .main .content {\n  max-width: 500px;\n  border-radius: 25px;\n  box-shadow: 0 0 5px var(--ion-color-step-200);\n}\n@media (orientation: landscape) {\n  app-login .main {\n    padding-top: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUFBSjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBQ047QUFHRTtFQUNFO0lBQ0UsZUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4ge1xuICAubG9naW4taGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xuICB9XG4gIC5tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIC5jb250ZW50IHtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDApO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgIC5tYWluIHtcbiAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/login/login.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/toast/ngx */
      "./node_modules/@ionic-native/toast/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/core.service */
      "./src/app/services/core.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/facebook/ngx */
      "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(translate, Toast, core, storage, alertCtrl, routerOutlet, navCtrl, platform, Facebook) {
          var _this2 = this;

          _classCallCheck(this, LoginPage);

          this.Toast = Toast;
          this.core = core;
          this.storage = storage;
          this.alertCtrl = alertCtrl;
          this.routerOutlet = routerOutlet;
          this.navCtrl = navCtrl;
          this.platform = platform;
          this.Facebook = Facebook; // set true show register form

          this.isRegister = false; // get translate

          translate.get('login').subscribe(function (trans) {
            return _this2.trans = trans;
          });
          this.makeLoginForm();
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "makeLoginForm",
          value: function makeLoginForm() {
            // constructor form login
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
            });
          }
        }, {
          key: "makeRegisterForm",
          value: function makeRegisterForm() {
            // constructor form login
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            });
          }
        }, {
          key: "switch",
          value: function _switch() {
            this.isRegister = !this.isRegister;
            if (this.isRegister) this.makeRegisterForm();else this.makeLoginForm();
          }
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            if (this.loadingFacebook || this.loading || this.form.invalid) return; // when click login button

            var option = {
              method: 'POST',
              body: this.form.value
            };
            this.loading = true;
            this.core.request('jwt-auth/v1/token', option, true, true).subscribe(function (res) {
              _this3.loginSuccessful(res);
            }, function (err) {
              _this3.form.patchValue({
                password: null
              });

              _this3.loading = false;

              _this3.Toast.showShortCenter(_this3.trans['login']['wrong']).subscribe(function () {}, function () {});
            });
          }
        }, {
          key: "loginSuccessful",
          value: function loginSuccessful(login) {
            var _this4 = this;

            this.storage.set('login', login).then(function () {
              _this4.core.patchConfig('user_token', login['token']);

              _this4.loading = false;

              _this4.Toast.showShortCenter(_this4.trans['login']['success']).subscribe(function () {}, function () {});

              if (_this4.routerOutlet.canGoBack()) _this4.navCtrl.pop();else _this4.navCtrl.navigateRoot('/home');
            });
          }
        }, {
          key: "facebook",
          value: function facebook(isTry) {
            var _this5 = this;

            if (this.loadingFacebook || this.loading) return; // when click Facebook button

            if (!this.platform.is('cordova')) return;
            this.Facebook.login(['email']).then(function (res) {
              if (res && res['authResponse']) {
                // login
                var option = {
                  method: 'POST',
                  body: {
                    token: res['authResponse']['accessToken']
                  }
                };
                _this5.loadingFacebook = true;

                _this5.core.request('m_facebook/login', option).subscribe(function (res) {
                  _this5.loadingFacebook = false;

                  _this5.loginSuccessful(res);
                }, function (err) {
                  _this5.loadingFacebook = false;
                  var message;
                  if (_this5.trans['register'][err['error']['code']]) message = _this5.trans['register'][err['error']['code']];else message = _this5.trans['register']['default'];

                  _this5.Toast.showLongCenter(message).subscribe(function () {}, function () {});
                });
              }
            })["catch"](function (err) {
              _this5.Facebook.logout().then(function () {
                if (!isTry) _this5.facebook(true);else _this5.Toast.showLongCenter(_this5.trans['register']['default']).subscribe(function () {}, function () {});
              })["catch"](function () {});
            });
          }
        }, {
          key: "register",
          value: function register() {
            var _this6 = this;

            if (this.loadingFacebook || this.loading || this.form.invalid) return; // when click register

            var option = {
              method: 'POST',
              body: this.form.value
            };
            this.loading = true; // request register

            this.core.request('m_users/register', option).subscribe(function (res) {
              // when request success
              _this6.loading = false;

              _this6["switch"]();

              _this6.Toast.showShortCenter(_this6.trans['register']['success']).subscribe(function () {}, function () {});
            }, function (err) {
              // when request error
              _this6.loading = false;
              var message;
              if (_this6.trans['register'][err['error']['code']]) message = _this6.trans['register'][err['error']['code']];else message = _this6.trans['register']['default'];

              _this6.Toast.showLongCenter(message).subscribe(function () {}, function () {});
            });
          }
        }, {
          key: "forgot",
          value: function forgot() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: this.trans['forgot']['title'],
                        message: this.trans['forgot']['message'],
                        inputs: [{
                          name: 'username',
                          placeholder: this.trans['username']
                        }],
                        buttons: [{
                          text: this.trans['forgot']['yes'],
                          role: 'send-forgot',
                          handler: function handler(data) {
                            if (!data['username']) return false;

                            _this7.handlerForgot(data);
                          }
                        }, {
                          text: this.trans['forgot']['no']
                        }],
                        backdropDismiss: false
                      });

                    case 2:
                      alert = _context.sent;
                      alert.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "handlerForgot",
          value: function handlerForgot(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this8 = this;

              var option;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // if request forgot password
                      this.core.showLoading();
                      option = {
                        method: 'POST',
                        body: data
                      };
                      this.core.request('m_users/password', option).subscribe(function (res) {
                        // when request success
                        _this8.core.hideLoading();

                        if (res) _this8.Toast.showLongCenter(_this8.trans['forgot']['success']).subscribe(function () {}, function () {});else _this8.Toast.showLongCenter(_this8.trans['forgot']['mail']).subscribe(function () {}, function () {});
                      }, function (err) {
                        // when request error
                        _this8.core.hideLoading();

                        _this8.Toast.showShortCenter(_this8.trans['forgot']['error']).subscribe(function () {}, function () {});
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "submit",
          value: function submit() {
            if (this.isRegister) this.register();else this.login();
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"]
        }, {
          type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        providers: [_ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/login/login.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]])], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map