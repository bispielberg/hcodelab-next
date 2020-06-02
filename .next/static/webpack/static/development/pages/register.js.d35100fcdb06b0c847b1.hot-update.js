webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Register.module.css */ "./components/Register.module.css");
/* harmony import */ var _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Register_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");


var _jsxFileName = "C:\\projetos\\next2505\\pages\\register.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    password: '',
    birth_at: '',
    level: '1',
    photo: 'user.png'
  }),
      values = _useState[0],
      setValues = _useState[1];

  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
    console.log(name, value);
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:3333/users", values).then(function (res) {
      alert(" Ol\xE1 ".concat(res.data.name, " seus dados foram cadastrados ID:").concat(res.data.id));
      window.location.href = "/login";
    })["catch"](function (err) {
      return console.log("Deu ruim!", err);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("main", {
    id: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.register,
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.page,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['page-header'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("hr", {
    className: "italy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  })), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx("form", {
    onSubmit: handleFormSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    name: "name",
    id: "name",
    onChange: handleInputChange,
    onFocus: handleInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }), __jsx("label", {
    htmlFor: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 37
    }
  }, "Nome Completo")), __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "email",
    name: "email",
    id: "email",
    onChange: handleInputChange,
    onFocus: handleInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 37
    }
  }), __jsx("label", {
    htmlFor: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 37
    }
  }, "E-mail"))), __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fields,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "date",
    name: "birth_at",
    id: "birth_at",
    onChange: handleInputChange,
    onFocus: handleInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }), __jsx("label", {
    htmlFor: "birth_at",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Data de Nascimento")), __jsx("div", {
    className: _components_Register_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.field,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "password",
    name: "password",
    id: "password",
    onChange: handleInputChange,
    onFocus: handleInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }), __jsx("label", {
    htmlFor: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "Senha"))), __jsx("button", {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 29
    }
  }, "Entrar")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, "Se voc\xEA j\xE1 possui uma conta, ", __jsx("a", {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 57
    }
  }, "clique aqui"), " para fazer o login.")))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }));
}

_s(Login, "i0q1VS3/9mQiUskjCCrXrVryAbc=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaXJ0aF9hdCIsImxldmVsIiwicGhvdG8iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiYWxlcnQiLCJkYXRhIiwiaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnIiLCJzdHlsZXMiLCJyZWdpc3RlciIsInBhZ2UiLCJpbWFnZSIsImZpZWxkcyIsImZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVDQyxzREFBUSxDQUFDO0FBQUNDLFFBQUksRUFBQyxFQUFOO0FBQVVDLFNBQUssRUFBRSxFQUFqQjtBQUFxQkMsWUFBUSxFQUFDLEVBQTlCO0FBQWtDQyxZQUFRLEVBQUMsRUFBM0M7QUFBOENDLFNBQUssRUFBQyxHQUFwRDtBQUF5REMsU0FBSyxFQUFDO0FBQS9ELEdBQUQsQ0FGVDtBQUFBLE1BRXBCQyxNQUZvQjtBQUFBLE1BRVpDLFNBRlk7O0FBSTNCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQUMsQ0FBQyxFQUFHO0FBQUEsb0JBQ0ZBLENBQUMsQ0FBQ0MsTUFEQTtBQUFBLFFBQ2xCVixJQURrQixhQUNsQkEsSUFEa0I7QUFBQSxRQUNaVyxLQURZLGFBQ1pBLEtBRFk7QUFFMUJKLGFBQVMsaUNBQUtELE1BQUwscUdBQWNOLElBQWQsRUFBb0JXLEtBQXBCLEdBQVQ7QUFDQUMs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aXN0ZXIuanMuZDM1MTAwZmNkYjA2YjBjODQ3YjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xuXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtuYW1lOicnLCBlbWFpbDogJycsIHBhc3N3b3JkOicnLCBiaXJ0aF9hdDonJyxsZXZlbDonMScsIHBob3RvOid1c2VyLnBuZycgfSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PntcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTp2YWx1ZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMzMzMvdXNlcnNgLCB2YWx1ZXMpXG4gICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgYWxlcnQoYCBPbMOhICR7cmVzLmRhdGEubmFtZX0gc2V1cyBkYWRvcyBmb3JhbSBjYWRhc3RyYWRvcyBJRDoke3Jlcy5kYXRhLmlkfWApXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0oXCIvbG9naW5cIilcbiAgICAgICAgfSkuY2F0Y2goIGVyciA9PiBjb25zb2xlLmxvZyhcIkRldSBydWltIVwiLCBlcnIpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPG1haW4gaWQ9e3N0eWxlcy5yZWdpc3Rlcn0gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3BhZ2UtaGVhZGVyJ119PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIml0YWx5XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uRm9jdXM9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Tm9tZSBDb21wbGV0bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbkZvY3VzPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FLW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImJpcnRoX2F0XCIgaWQ9XCJiaXJ0aF9hdFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25Gb2N1cz17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJpcnRoX2F0XCI+RGF0YSBkZSBOYXNjaW1lbnRvPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uRm9jdXM9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlNlbmhhPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlIHZvY8OqIGrDoSBwb3NzdWkgdW1hIGNvbnRhLCA8YSBocmVmPVwiL2xvZ2luXCI+Y2xpcXVlIGFxdWk8L2E+IHBhcmEgZmF6ZXIgbyBsb2dpbi48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9