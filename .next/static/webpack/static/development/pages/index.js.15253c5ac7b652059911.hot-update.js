webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/currencies */ "./data/currencies.js");


var _jsxFileName = "/Users/magino/Dev/crypto-prices/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var risiMood = function risiMood(_ref) {
  var price_change = _ref.price_change;
  var result = '';

  if (price_change > 15) {
    result = 'https://image.noelshack.com/fichiers/2016/52/1483054975-smokingdollars.jpg';
  } else if (price_change > 10) {} else if (price_change > 5) {
    result = 'https://image.noelshack.com/fichiers/2017/39/3/1506463228-risibg.png';
  } else if (price_change > 0) {
    result = 'https://image.noelshack.com/fichiers/2018/29/6/1532128784-risitas33.png';
  } else if (price_change > -5) {
    result = 'https://image.noelshack.com/fichiers/2017/09/1488194409-risitas-sueur.gif';
  } else if (price_change > -10) {
    result = 'https://image.noelshack.com/fichiers/2016/38/1474490235-risitas434.png';
  } else if (price_change > -15) {
    result = 'https://image.noelshack.com/fichiers/2017/31/5/1501863678-risitas596bestreup.png';
  } else if (price_change > -30) {
    result = 'https://image.noelshack.com/fichiers/2017/30/4/1501186458-risitalarmebestreup.gif';
  } else if (price_change > -100) {
    result = 'https://image.noelshack.com/fichiers/2018/34/2/1534813390-bogdanoff5.png';
  }

  return result;
};

var renderCurrencyRow = function renderCurrencyRow(currency) {
  return __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, currency.rank), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    className: "mr-3",
    width: 16,
    height: 16,
    src: "https://images.openmarketcap.com/coin_logos/16x16/".concat(currency.global_id, ".png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/currencies/[name]",
    as: "/currencies/".concat(currency.symbol),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, currency.name))), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(currency.price_usd).toFixed(3)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(currency.market_cap)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(currency.volume_usd)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, currency.available_supply), __jsx("td", {
    className: currency.price_change >= 0 ? 'text-success' : 'text-danger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(currency.price_change).toFixed(2), "\xA0%"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    width: 56,
    src: risiMood(currency),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })));
};

var Page = function Page() {
  var currencies = _data_currencies__WEBPACK_IMPORTED_MODULE_5__["default"].data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "col p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Cryptocurrencies by Market Capitalization"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "#"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Name"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Price USD"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Market Cap"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Volume (24h)"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Available supply"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Price change"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Risi mood"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, currencies.map(renderCurrencyRow))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"])(Page));

/***/ })

})
//# sourceMappingURL=index.js.15253c5ac7b652059911.hot-update.js.map