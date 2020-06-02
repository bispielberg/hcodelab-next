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
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:3333/users", values).then(function (res) {//alert(` Olá ${res.data.name} seus dados foram cadastrados ID:${res.data.id}`)
      //window.location.href=("/login")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJiaXJ0aF9hdCIsImxldmVsIiwicGhvdG8iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZXJyIiwic3R5bGVzIiwicmVnaXN0ZXIiLCJwYWdlIiwiaW1hZ2UiLCJmaWVsZHMiLCJmaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFQ0Msc0RBQVEsQ0FBQztBQUFDQyxRQUFJLEVBQUMsRUFBTjtBQUFVQyxTQUFLLEVBQUUsRUFBakI7QUFBcUJDLFlBQVEsRUFBQyxFQUE5QjtBQUFrQ0MsWUFBUSxFQUFDLEVBQTNDO0FBQThDQyxTQUFLLEVBQUMsR0FBcEQ7QUFBeURDLFNBQUssRUFBQztBQUEvRCxHQUFELENBRlQ7QUFBQSxNQUVwQkMsTUFGb0I7QUFBQSxNQUVaQyxTQUZZOztBQUkzQixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBRztBQUFBLG9CQUNGQSxDQUFDLENBQUNDLE1BREE7QUFBQSxRQUNsQlYsSUFEa0IsYUFDbEJBLElBRGtCO0FBQUEsUUFDWlcsS0FEWSxhQUNaQSxLQURZO0FBRTFCSixhQUFTLGlDQUFLRCxNQUFMLHFHQUFjTixJQUFkLEVBQW9CVyxLQUFwQixHQUFUO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZYixJQUFaLEVBQWtCVyxLQUFsQjtBQUNILEdB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STtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosQ0FESixFQUtJO0FBQUssYUFBUyxFQUFFYSxzRUFBTSxDQUFDSyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUMsVUFBNUI7QUFBdUMsTUFBRSxFQUFDLFVBQTFDO0FBQXFELFlBQVEsRUFBRWxCLGlCQUEvRDtBQUFrRixXQUFPLEVBQUVBLGlCQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixDQUxKLENBWEosRUFxQkk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKLENBREosRUF3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FBZ0M7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFoQyx5QkF4QkosQ0FGQSxDQUpKLENBRlIsRUFvQ0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENKLENBREo7QUF3Q0g7O0dBNUR1QlYsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuNzk2ZDU2NGIwZmRhMjAzNDdiNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xuXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtuYW1lOicnLCBlbWFpbDogJycsIHBhc3N3b3JkOicnLCBiaXJ0aF9hdDonJyxsZXZlbDonMScsIHBob3RvOid1c2VyLnBuZycgfSlcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gZSA9PntcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcbiAgICAgICAgc2V0VmFsdWVzKHsuLi52YWx1ZXMsIFtuYW1lXTp2YWx1ZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjMzMzMvdXNlcnNgLCB2YWx1ZXMpXG4gICAgICAgIC50aGVuKCByZXMgPT4ge1xuICAgICAgICAgICAgLy9hbGVydChgIE9sw6EgJHtyZXMuZGF0YS5uYW1lfSBzZXVzIGRhZG9zIGZvcmFtIGNhZGFzdHJhZG9zIElEOiR7cmVzLmRhdGEuaWR9YClcbiAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWY9KFwiL2xvZ2luXCIpXG4gICAgICAgIH0pLmNhdGNoKCBlcnIgPT4gY29uc29sZS5sb2coXCJEZXUgcnVpbSFcIiwgZXJyKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxtYWluIGlkPXtzdHlsZXMucmVnaXN0ZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydwYWdlLWhlYWRlciddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJpdGFseVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbkZvY3VzPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5vbWUgQ29tcGxldG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gb25Gb2N1cz17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RS1tYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJiaXJ0aF9hdFwiIGlkPVwiYmlydGhfYXRcIiBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IG9uRm9jdXM9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaXJ0aF9hdFwiPkRhdGEgZGUgTmFzY2ltZW50bzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBvbkZvY3VzPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5TZW5oYTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudHJhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5TZSB2b2PDqiBqw6EgcG9zc3VpIHVtYSBjb250YSwgPGEgaHJlZj1cIi9sb2dpblwiPmNsaXF1ZSBhcXVpPC9hPiBwYXJhIGZhemVyIG8gbG9naW4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==