module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/magino/Dev/crypto-prices/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("ul", {
  className: "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Home"))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "About"))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/magino/Dev/crypto-prices/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const withLayout = Page => {
  return () => __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(Page, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ }),

/***/ "./data/currencies.js":
/*!****************************!*\
  !*** ./data/currencies.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "records_total": "378",
  "data": [{
    "rank": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "global_id": "btc",
    "price_usd": "10195.49138503486800000000",
    "volume_usd": "976489414.39",
    "available_supply": "17886937",
    "price_change": "-1.46",
    "market_cap": "182366112088.16142671931600000000",
    "nvt": "186.75687560021643535731"
  }, {
    "rank": 2,
    "name": "Ethereum",
    "symbol": "ETH",
    "global_id": "eth",
    "price_usd": "178.22579388110340000000",
    "volume_usd": "115704329.25",
    "available_supply": "107398133",
    "price_change": "-1.41",
    "market_cap": "19141117515.27332913995220000000",
    "nvt": "165.43129923786606403020"
  }, {
    "rank": 3,
    "name": "XRP",
    "symbol": "XRP",
    "global_id": "xrp",
    "price_usd": "0.25369446611017260000",
    "volume_usd": "51469363.50",
    "available_supply": "42890708341",
    "price_change": "-2.16",
    "market_cap": "10881135353.65712175976965660000",
    "nvt": "211.40994591194277659504"
  }, {
    "rank": 4,
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "global_id": "bch",
    "price_usd": "297.92845327303417000000",
    "volume_usd": "23195405.53",
    "available_supply": "17957713",
    "price_change": "-2.72",
    "market_cap": "5350113658.41105826405321000000",
    "nvt": "230.65402549187758322642"
  }, {
    "rank": 5,
    "name": "Litecoin",
    "symbol": "LTC",
    "global_id": "ltc",
    "price_usd": "69.00447376635088000000",
    "volume_usd": "35824493.21",
    "available_supply": "63074412",
    "price_change": "-3.12",
    "market_cap": "4352416608.18200714168256000000",
    "nvt": "121.49276146541773065553"
  }, {
    "rank": 6,
    "name": "Tether",
    "symbol": "USDT",
    "global_id": "usdt",
    "price_usd": "0.99953152530764040000",
    "volume_usd": "510110174.96",
    "available_supply": "4043607702",
    "price_change": "0.08",
    "market_cap": "4041713374.12578264088636080000",
    "nvt": "7.92321653737393358676"
  }, {
    "rank": 7,
    "name": "EOS",
    "symbol": "EOS",
    "global_id": "eos",
    "price_usd": "3.71053263040877250000",
    "volume_usd": "29428636.37",
    "available_supply": "928238991",
    "price_change": "-2.07",
    "market_cap": "3444261064.92321490294854750000",
    "nvt": "117.03773907901308928194"
  }, {
    "rank": 8,
    "name": "Binance Coin",
    "symbol": "BNB",
    "global_id": "bnb",
    "price_usd": "20.44688488802461300000",
    "volume_usd": "73472324.67",
    "available_supply": "155536713",
    "price_change": "-5.15",
    "market_cap": "3180241266.57272136911706900000",
    "nvt": "43.28488694017419564951"
  }, {
    "rank": 9,
    "name": "Bitcoin SV",
    "symbol": "BSV",
    "global_id": "bsv",
    "price_usd": "117.35286747581870000000",
    "volume_usd": "9846532.70",
    "available_supply": "17854986",
    "price_change": "-5.12",
    "market_cap": "2095333805.84059822703820000000",
    "nvt": "212.79915170957571968843"
  }, {
    "rank": 10,
    "name": "Monero",
    "symbol": "XMR",
    "global_id": "xmr",
    "price_usd": "73.19453399983796000000",
    "volume_usd": "6238534.90",
    "available_supply": "17164554",
    "price_change": "-0.11",
    "market_cap": "1256351531.34505465566984000000",
    "nvt": "201.38567011063040709604"
  }, {
    "rank": 11,
    "name": "Cardano",
    "symbol": "ADA",
    "global_id": "ada",
    "price_usd": "0.04454163427234657000",
    "volume_usd": "7802690.05",
    "available_supply": "25927070538",
    "price_change": "0.19",
    "market_cap": "1154834093.65692782317235466000",
    "nvt": "148.00460946887513789842"
  }, {
    "rank": 12,
    "name": "Stellar",
    "symbol": "XLM",
    "global_id": "xlm",
    "price_usd": "0.05816638853942919000",
    "volume_usd": "3371020.40",
    "available_supply": "19634311187",
    "price_change": "-1.36",
    "market_cap": "1142056973.20710313581134853000",
    "nvt": "338.78672855468425400551"
  }, {
    "rank": 13,
    "name": "TRON",
    "symbol": "TRX",
    "global_id": "trx",
    "price_usd": "0.01483651268306921700",
    "volume_usd": "32571676.67",
    "available_supply": "66682072191",
    "price_change": "0.29",
    "market_cap": "989329409.79510863144384444700",
    "nvt": "30.37391718634878096510"
  }, {
    "rank": 14,
    "name": "FarmaTrust",
    "symbol": "FTT",
    "global_id": "ftt",
    "price_usd": "1.23389272819666380000",
    "volume_usd": "109582.21",
    "available_supply": "600000000",
    "price_change": "-0.07",
    "market_cap": "740335636.91799828000000000000",
    "nvt": "6755.98381268271811638039"
  }, {
    "rank": 15,
    "name": "Dash",
    "symbol": "DASH",
    "global_id": "dash",
    "price_usd": "82.21528910310194000000",
    "volume_usd": "1901284.54",
    "available_supply": "8989876",
    "price_change": "2.25",
    "market_cap": "739105254.34103765595944000000",
    "nvt": "388.73994859340604324245"
  }, {
    "rank": 16,
    "name": "Ethereum Classic",
    "symbol": "ETC",
    "global_id": "etc",
    "price_usd": "6.22498528791642200000",
    "volume_usd": "12412883.95",
    "available_supply": "112843257",
    "price_change": "18.85",
    "market_cap": "702447614.66557180226645400000",
    "nvt": "56.59020236514591778379"
  }, {
    "rank": 17,
    "name": "CoTrader",
    "symbol": "COT",
    "global_id": "cot",
    "price_usd": "0.04250378359170000000",
    "volume_usd": "364.28",
    "available_supply": "15728056896",
    "price_change": "-7.92",
    "market_cap": "668501926.62552883336320000000",
    "nvt": "1835132.11437775566422312507"
  }, {
    "rank": 18,
    "name": "Tezos",
    "symbol": "XTZ",
    "global_id": "xtz",
    "price_usd": "0.99793722802888820000",
    "volume_usd": "775762.48",
    "available_supply": "660373612",
    "price_change": "1.76",
    "market_cap": "659011411.82270454097817840000",
    "nvt": "849.50152761023521139896"
  }, {
    "rank": 19,
    "name": "IOTA",
    "symbol": "IOTA",
    "global_id": "miota",
    "price_usd": "0.23377740646884393000",
    "volume_usd": "1315955.89",
    "available_supply": "2779530283",
    "price_change": "0.26",
    "market_cap": "649791380.76135179943573219000",
    "nvt": "493.77899798856616648126"
  }, {
    "rank": 20,
    "name": "NEO",
    "symbol": "NEO",
    "global_id": "neo",
    "price_usd": "8.93170316256021100000",
    "volume_usd": "2653942.25",
    "available_supply": "70538831",
    "price_change": "3.34",
    "market_cap": "630031899.92600025105334100000",
    "nvt": "237.39472851227273353568"
  }, {
    "rank": 21,
    "name": "ChainLink",
    "symbol": "LINK",
    "global_id": "link",
    "price_usd": "1.72457310648434000000",
    "volume_usd": "12721814.38",
    "available_supply": "350000000",
    "price_change": "0.44",
    "market_cap": "603600587.26951900000000000000",
    "nvt": "47.44610864771311024269"
  }, {
    "rank": 22,
    "name": "Cosmos",
    "symbol": "ATOM",
    "global_id": "atom",
    "price_usd": "2.52003584159846340000",
    "volume_usd": "5821792.61",
    "available_supply": "219116083",
    "price_change": "-8.10",
    "market_cap": "552180382.63066375902686220000",
    "nvt": "94.84714066972986161162"
  }, {
    "rank": 23,
    "name": "Maker",
    "symbol": "MKR",
    "global_id": "mkr",
    "price_usd": "453.74991279467866000000",
    "volume_usd": "18478.18",
    "available_supply": "1000000",
    "price_change": "-0.82",
    "market_cap": "453749912.79467866000000000000",
    "nvt": "24555.98510214093920505158"
  }, {
    "rank": 24,
    "name": "USD Coin",
    "symbol": "USDC",
    "global_id": "usdc",
    "price_usd": "1.00028667983708890000",
    "volume_usd": "26753042.78",
    "available_supply": "416197694",
    "price_change": "-0.18",
    "market_cap": "416317009.48711269585299660000",
    "nvt": "15.56148259136872265163"
  }, {
    "rank": 25,
    "name": "Ontology",
    "symbol": "ONT",
    "global_id": "ont",
    "price_usd": "0.72586272086315230000",
    "volume_usd": "3574296.74",
    "available_supply": "533355141",
    "price_change": "-0.22",
    "market_cap": "387142613.83261023667097430000",
    "nvt": "108.31294713169512519852"
  }, {
    "rank": 26,
    "name": "NEM",
    "symbol": "XEM",
    "global_id": "xem",
    "price_usd": "0.04212475069904888000",
    "volume_usd": "745683.04",
    "available_supply": "8999999999",
    "price_change": "3.73",
    "market_cap": "379122756.24931516930095112000",
    "nvt": "508.42346669077409793436"
  }, {
    "rank": 27,
    "name": "Crypto.com Chain",
    "symbol": "CRO",
    "global_id": "cro",
    "price_usd": "0.03941509066235446000",
    "volume_usd": "181665.97",
    "available_supply": "9143835616",
    "price_change": "-5.62",
    "market_cap": "360405109.80630574176444736000",
    "nvt": "1983.88894632443127221046"
  }, {
    "rank": 28,
    "name": "Zcash",
    "symbol": "ZEC",
    "global_id": "zec",
    "price_usd": "44.21188185895298000000",
    "volume_usd": "2039064.67",
    "available_supply": "7232131",
    "price_change": "1.76",
    "market_cap": "319746121.36047147420038000000",
    "nvt": "156.81019148866498393127"
  }, {
    "rank": 29,
    "name": "Dogecoin",
    "symbol": "DOGE",
    "global_id": "doge",
    "price_usd": "0.00235270242799690000",
    "volume_usd": "230655.72",
    "available_supply": "120856641083",
    "price_change": "4.02",
    "market_cap": "284339712.91552399393664270000",
    "nvt": "1232.74511863622542695513"
  }, {
    "rank": 30,
    "name": "DaTa eXchange",
    "symbol": "DTX",
    "global_id": "dtx",
    "price_usd": "3.69631741373303240000",
    "volume_usd": "4003.36",
    "available_supply": "76819977",
    "price_change": "6.54",
    "market_cap": "283951018.70767103310825480000",
    "nvt": "70928.17500990943435220785"
  }, {
    "rank": 31,
    "name": "HedgeTrade",
    "symbol": "HEDG",
    "global_id": "hedg",
    "price_usd": "0.93269078799999990000",
    "volume_usd": "165249.71",
    "available_supply": "288393355",
    "price_change": "0.31",
    "market_cap": "268981825.52891371116066450000",
    "nvt": "1627.72948605424911886783"
  }, {
    "rank": 32,
    "name": "Decred",
    "symbol": "DCR",
    "global_id": "dcr",
    "price_usd": "22.80958861367780000000",
    "volume_usd": "744124.11",
    "available_supply": "10262421",
    "price_change": "9.29",
    "market_cap": "234081601.19036794195380000000",
    "nvt": "314.57333265329615775223"
  }, {
    "rank": 33,
    "name": "Basic Attention Token",
    "symbol": "BAT",
    "global_id": "bat_1",
    "price_usd": "0.17355963281448264000",
    "volume_usd": "2462830.25",
    "available_supply": "1279225522",
    "price_change": "1.37",
    "market_cap": "222021911.88523488431393808000",
    "nvt": "90.14909244566688439609"
  }, {
    "rank": 34,
    "name": "VeChain",
    "symbol": "VET",
    "global_id": "vet",
    "price_usd": "0.00367116769470725470",
    "volume_usd": "1721216.60",
    "available_supply": "55454734800",
    "price_change": "2.73",
    "market_cap": "203583630.91631817302455356000",
    "nvt": "118.27891441223502784284"
  }, {
    "rank": 35,
    "name": "TrueUSD",
    "symbol": "TUSD",
    "global_id": "tusd",
    "price_usd": "1.00020264715167340000",
    "volume_usd": "6069642.01",
    "available_supply": "195244116",
    "price_change": "-0.36",
    "market_cap": "195283681.66398839090371440000",
    "nvt": "32.17383848046557047336"
  }, {
    "rank": 36,
    "name": "Paxos Standard Token",
    "symbol": "PAX",
    "global_id": "pax",
    "price_usd": "1.00111081214147250000",
    "volume_usd": "12032636.11",
    "available_supply": "191646486",
    "price_change": "-0.27",
    "market_cap": "191859369.24351933949063500000",
    "nvt": "15.94491576821393126054"
  }, {
    "rank": 37,
    "name": "Qtum",
    "symbol": "QTUM",
    "global_id": "qtum",
    "price_usd": "1.98456599101779090000",
    "volume_usd": "1385223.72",
    "available_supply": "95955896",
    "price_change": "-2.25",
    "market_cap": "190430807.83924007775014640000",
    "nvt": "137.47296201312527174321"
  }, {
    "rank": 38,
    "name": "Bitcoin Gold",
    "symbol": "BTG",
    "global_id": "btg",
    "price_usd": "10.23686363621593300000",
    "volume_usd": "371027.48",
    "available_supply": "17513924",
    "price_change": "-3.27",
    "market_cap": "179287651.72304949815109200000",
    "nvt": "483.21933384300671786115"
  }, {
    "rank": 39,
    "name": "OmiseGO",
    "symbol": "OMG",
    "global_id": "omg",
    "price_usd": "1.03612190944426770000",
    "volume_usd": "618335.39",
    "available_supply": "140245398",
    "price_change": "-0.46",
    "market_cap": "145311329.56653128240504460000",
    "nvt": "235.00406400243609282180"
  }, {
    "rank": 40,
    "name": "LEOcoin",
    "symbol": "LEO",
    "global_id": "leo",
    "price_usd": "1.07155487225730050000",
    "volume_usd": "660902.18",
    "available_supply": "121010421",
    "price_change": "-3.94",
    "market_cap": "129669306.21645715382851050000",
    "nvt": "196.20045165603350533435"
  }, {
    "rank": 41,
    "name": "Ravencoin",
    "symbol": "RVN",
    "global_id": "rvn",
    "price_usd": "0.03056819569719357300",
    "volume_usd": "2138271.57",
    "available_supply": "4236685000",
    "price_change": "0.40",
    "market_cap": "129507816.18736455282550500000",
    "nvt": "60.56658939133935771568"
  }, {
    "rank": 42,
    "name": "Nano",
    "symbol": "NANO",
    "global_id": "nano",
    "price_usd": "0.88672665067647570000",
    "volume_usd": "756282.01",
    "available_supply": "133248297",
    "price_change": "0.72",
    "market_cap": "118154816.10715428498688290000",
    "nvt": "156.23116052589203462196"
  }, {
    "rank": 43,
    "name": "BitTorrent",
    "symbol": "BTT",
    "global_id": "btt",
    "price_usd": "0.00055669626267371340",
    "volume_usd": "13540859.05",
    "available_supply": "212116500000",
    "price_change": "2.19",
    "market_cap": "118084462.80142872841110000000",
    "nvt": "8.72060349830085030027"
  }, {
    "rank": 44,
    "name": "Augur",
    "symbol": "REP",
    "global_id": "rep",
    "price_usd": "10.58646281781854800000",
    "volume_usd": "1543514.77",
    "available_supply": "11000000",
    "price_change": "8.63",
    "market_cap": "116451090.99600402800000000000",
    "nvt": "75.44540114507879182782"
  }, {
    "rank": 45,
    "name": "Lisk",
    "symbol": "LSK",
    "global_id": "lsk",
    "price_usd": "0.92407367896984320000",
    "volume_usd": "850651.25",
    "available_supply": "119469449",
    "price_change": "-4.46",
    "market_cap": "110398573.26193005472039680000",
    "nvt": "129.78123909408239242627"
  }, {
    "rank": 46,
    "name": "Bitcoin Diamond",
    "symbol": "BCD",
    "global_id": "bcd",
    "price_usd": "0.59109152357776980000",
    "volume_usd": "99456.73",
    "available_supply": "186492898",
    "price_change": "-2.20",
    "market_cap": "110234371.21525361837888040000",
    "nvt": "1108.36512738005380207936"
  }, {
    "rank": 47,
    "name": "Holo",
    "symbol": "HOT",
    "global_id": "hot",
    "price_usd": "0.00080961149908059680",
    "volume_usd": "1377529.30",
    "available_supply": "133214575156",
    "price_change": "3.95",
    "market_cap": "107852051.89143398731493310080",
    "nvt": "78.29383512309610206834"
  }, {
    "rank": 48,
    "name": "Waves",
    "symbol": "WAVES",
    "global_id": "waves",
    "price_usd": "1.01576468676174800000",
    "volume_usd": "1848424.90",
    "available_supply": "100000000",
    "price_change": "1.30",
    "market_cap": "101576468.67617480000000000000",
    "nvt": "54.95298655421423937754"
  }, {
    "rank": 49,
    "name": "Lambda",
    "symbol": "LAMB",
    "global_id": "lamb",
    "price_usd": "0.14960172600000000000",
    "volume_usd": "34782.99",
    "available_supply": "670070923",
    "price_change": "-7.46",
    "market_cap": "100243766.62321309800000000000",
    "nvt": "2881.97669674783846932078"
  }, {
    "rank": 50,
    "name": "ICON",
    "symbol": "ICX",
    "global_id": "icx",
    "price_usd": "0.20381056941517497000",
    "volume_usd": "4200307.09",
    "available_supply": "490453304",
    "price_change": "-3.77",
    "market_cap": "99959567.15979391177460088000",
    "nvt": "23.79815690090266989850"
  }, {
    "rank": 51,
    "name": "DigiByte",
    "symbol": "DGB",
    "global_id": "dgb",
    "price_usd": "0.00815091239327818200",
    "volume_usd": "302204.97",
    "available_supply": "12168441201",
    "price_change": "7.31",
    "market_cap": "99183898.19210774530317658200",
    "nvt": "328.20075127191900683558"
  }, {
    "rank": 52,
    "name": "MaidSafeCoin",
    "symbol": "MAID",
    "global_id": "maid",
    "price_usd": "0.21512835042046363000",
    "volume_usd": "77210.33",
    "available_supply": "452552412",
    "price_change": "18.82",
    "market_cap": "97356853.87236202991477556000",
    "nvt": "1260.93042048080910824725"
  }, {
    "rank": 53,
    "name": "0x",
    "symbol": "ZRX",
    "global_id": "zrx",
    "price_usd": "0.15598428831694522000",
    "volume_usd": "1168275.07",
    "available_supply": "600389990",
    "price_change": "7.35",
    "market_cap": "93651405.30276785746634780000",
    "nvt": "80.16211909988617446604"
  }, {
    "rank": 54,
    "name": "BitShares",
    "symbol": "BTS",
    "global_id": "bts",
    "price_usd": "0.03403728548060499000",
    "volume_usd": "61964.23",
    "available_supply": "2740240000",
    "price_change": "-0.88",
    "market_cap": "93270331.16537301779760000000",
    "nvt": "1505.22859987726818839837"
  }, {
    "rank": 55,
    "name": "Theta Token",
    "symbol": "THETA",
    "global_id": "theta",
    "price_usd": "0.10458385941254311000",
    "volume_usd": "523202.99",
    "available_supply": "870502690",
    "price_change": "-1.19",
    "market_cap": "91040530.94920059699596590000",
    "nvt": "174.00613660331069017011"
  }, {
    "rank": 56,
    "name": "Pundi X",
    "symbol": "NPXS",
    "global_id": "npxs",
    "price_usd": "0.00034405842146942626",
    "volume_usd": "401343.19",
    "available_supply": "234971468515",
    "price_change": "-4.89",
    "market_cap": "80843912.54762389248670420390",
    "nvt": "201.43337313789700153304"
  }, {
    "rank": 57,
    "name": "IOST",
    "symbol": "IOST",
    "global_id": "iost",
    "price_usd": "0.00671802096336960450",
    "volume_usd": "1057719.65",
    "available_supply": "12013965609",
    "price_change": "-4.12",
    "market_cap": "80710072.81446347721893164050",
    "nvt": "76.30573263384440028029"
  }, {
    "rank": 58,
    "name": "Komodo",
    "symbol": "KMD",
    "global_id": "kmd",
    "price_usd": "0.69271511530305200000",
    "volume_usd": "5170645.43",
    "available_supply": "115516840",
    "price_change": "1.98",
    "market_cap": "80020261.14004420939568000000",
    "nvt": "15.47587476715536640378"
  }, {
    "rank": 59,
    "name": "Dai",
    "symbol": "DAI",
    "global_id": "dai",
    "price_usd": "1.01523749843069130000",
    "volume_usd": "658546.86",
    "available_supply": "78548581",
    "price_change": "0.17",
    "market_cap": "79745464.87972052846404530000",
    "nvt": "121.09307586664452164277"
  }, {
    "rank": 60,
    "name": "Algorand",
    "symbol": "ALGO",
    "global_id": "algo",
    "price_usd": "0.32350236731861760000",
    "volume_usd": "1738527.16",
    "available_supply": "236247493",
    "price_change": "-13.09",
    "market_cap": "76426623.25858854022567680000",
    "nvt": "43.96055754377086649925"
  }, {
    "rank": 61,
    "name": "Bytom",
    "symbol": "BTM",
    "global_id": "btm",
    "price_usd": "0.07525976399999999000",
    "volume_usd": "2882.19",
    "available_supply": "1002499275",
    "price_change": "-0.80",
    "market_cap": "75447858.84667108997500725000",
    "nvt": "26177.26758009398754940072"
  }, {
    "rank": 62,
    "name": "RIF Token",
    "symbol": "RIF",
    "global_id": "rif",
    "price_usd": "0.14417041607107237000",
    "volume_usd": "52635.94",
    "available_supply": "477980957",
    "price_change": "6.40",
    "market_cap": "68910713.44473935142885809000",
    "nvt": "1309.19507554608792830256"
  }, {
    "rank": 63,
    "name": "Siacoin",
    "symbol": "SC",
    "global_id": "sc",
    "price_usd": "0.00164692419711674560",
    "volume_usd": "635677.39",
    "available_supply": "41817047634",
    "price_change": "-0.20",
    "market_cap": "68869507.60041815621425991040",
    "nvt": "108.34034477837595610292"
  }, {
    "rank": 64,
    "name": "Verge",
    "symbol": "XVG",
    "global_id": "xvg",
    "price_usd": "0.00418403585079442400",
    "volume_usd": "396336.24",
    "available_supply": "15890313609",
    "price_change": "-1.86",
    "market_cap": "66485641.82042252914851621600",
    "nvt": "167.75059939111934136660"
  }, {
    "rank": 65,
    "name": "TTC Protocol",
    "symbol": "TTC",
    "global_id": "ttc",
    "price_usd": "0.05268197771738448000",
    "volume_usd": "519458.92",
    "available_supply": "1259816434",
    "price_change": "0.87",
    "market_cap": "66369621.30398277540054432000",
    "nvt": "127.76683342733391776301"
  }, {
    "rank": 66,
    "name": "Quant",
    "symbol": "QNT",
    "global_id": "qnt",
    "price_usd": "5.39988099030341200000",
    "volume_usd": "113061.57",
    "available_supply": "12072738",
    "price_change": "-8.16",
    "market_cap": "65191348.42711363358205600000",
    "nvt": "576.60041716308763076663"
  }, {
    "rank": 67,
    "name": "MonaCoin",
    "symbol": "MONA",
    "global_id": "mona",
    "price_usd": "0.99102220400000010000",
    "volume_usd": "82625.25",
    "available_supply": "65729675",
    "price_change": "0.31",
    "market_cap": "65139567.38670370657296750000",
    "nvt": "788.37361928349634733895"
  }, {
    "rank": 68,
    "name": "Flexacoin",
    "symbol": "FXC",
    "global_id": "fxc",
    "price_usd": "0.00295736199999999940",
    "volume_usd": "1022.33",
    "available_supply": "20267695749",
    "price_change": "27.30",
    "market_cap": "59938913.23565412583938255060",
    "nvt": "58629.71177179005393501369"
  }, {
    "rank": 69,
    "name": "Zilliqa",
    "symbol": "ZIL",
    "global_id": "zil",
    "price_usd": "0.00665932915545175500",
    "volume_usd": "1821804.11",
    "available_supply": "8687360058",
    "price_change": "1.58",
    "market_cap": "57851990.11814644933300179000",
    "nvt": "31.75532967600256941620"
  }, {
    "rank": 70,
    "name": "Aeternity",
    "symbol": "AE",
    "global_id": "ae",
    "price_usd": "0.20200196659633080000",
    "volume_usd": "209113.11",
    "available_supply": "279546270",
    "price_change": "-5.13",
    "market_cap": "56468896.29466887082611600000",
    "nvt": "270.03996207922530933673"
  }, {
    "rank": 71,
    "name": "Golem",
    "symbol": "GNT",
    "global_id": "gnt",
    "price_usd": "0.05830143366491198600",
    "volume_usd": "1077063.35",
    "available_supply": "964450000",
    "price_change": "-3.69",
    "market_cap": "56228817.69812436489770000000",
    "nvt": "52.20567360139435150003"
  }, {
    "rank": 72,
    "name": "Ardor",
    "symbol": "ARDR",
    "global_id": "ardr",
    "price_usd": "0.05566233232974117000",
    "volume_usd": "140827.08",
    "available_supply": "998999495",
    "price_change": "6.87",
    "market_cap": "55606641.88793360231070915000",
    "nvt": "394.85759335444292610987"
  }, {
    "rank": 73,
    "name": "Enjin Coin",
    "symbol": "ENJ",
    "global_id": "enj",
    "price_usd": "0.07052658719848129000",
    "volume_usd": "1941846.29",
    "available_supply": "776278713",
    "price_change": "34.06",
    "market_cap": "54748288.34271933135577977000",
    "nvt": "28.19393513516424173603"
  }, {
    "rank": 74,
    "name": "Metaverse ETP",
    "symbol": "ETP",
    "global_id": "etp",
    "price_usd": "0.75104112625194210000",
    "volume_usd": "628325.06",
    "available_supply": "72605923",
    "price_change": "-11.77",
    "market_cap": "54530034.18248178671305830000",
    "nvt": "86.78634301563873118965"
  }, {
    "rank": 75,
    "name": "Steem",
    "symbol": "STEEM",
    "global_id": "steem",
    "price_usd": "0.15267328505590558000",
    "volume_usd": "218016.44",
    "available_supply": "341623795",
    "price_change": "10.73",
    "market_cap": "52156827.03591525140127610000",
    "nvt": "239.23345888922528686954"
  }, {
    "rank": 76,
    "name": "MCO",
    "symbol": "MCO",
    "global_id": "mco",
    "price_usd": "3.24870791346875980000",
    "volume_usd": "269937.82",
    "available_supply": "15793831",
    "price_change": "1.19",
    "market_cap": "51309543.75368821606079380000",
    "nvt": "190.07912175362539439932"
  }, {
    "rank": 77,
    "name": "Status",
    "symbol": "SNT",
    "global_id": "snt",
    "price_usd": "0.01448103230605340300",
    "volume_usd": "276470.18",
    "available_supply": "3470483788",
    "price_change": "2.02",
    "market_cap": "50256187.85166258937373056400",
    "nvt": "181.77796915263190183379"
  }, {
    "rank": 78,
    "name": "ZCoin",
    "symbol": "XZC",
    "global_id": "xzc",
    "price_usd": "5.27109403170333700000",
    "volume_usd": "164987.10",
    "available_supply": "8189393",
    "price_change": "-8.65",
    "market_cap": "43167060.56557308610444100000",
    "nvt": "261.63900429532421688993"
  }, {
    "rank": 79,
    "name": "WAX",
    "symbol": "WAX",
    "global_id": "wax",
    "price_usd": "0.04510612833990330000",
    "volume_usd": "66.83",
    "available_supply": "942821662",
    "price_change": "-7.65",
    "market_cap": "42527034.88781293022528460000",
    "nvt": "636346.47445477974300889720"
  }, {
    "rank": 80,
    "name": "Synereo",
    "symbol": "AMP",
    "global_id": "amp",
    "price_usd": "0.41216199802722864000",
    "volume_usd": "68766.31",
    "available_supply": "100728564",
    "price_change": "-12.52",
    "market_cap": "41516486.19665357380687296000",
    "nvt": "603.73293545420095693477"
  }, {
    "rank": 81,
    "name": "aelf",
    "symbol": "ELF",
    "global_id": "elf",
    "price_usd": "0.08120033144392336000",
    "volume_usd": "639335.95",
    "available_supply": "499780000",
    "price_change": "9.30",
    "market_cap": "40582301.64904401686080000000",
    "nvt": "63.47570733202789059617"
  }, {
    "rank": 82,
    "name": "Waltonchain",
    "symbol": "WTC",
    "global_id": "wtc",
    "price_usd": "0.94683428915529280000",
    "volume_usd": "982623.42",
    "available_supply": "42146962",
    "price_change": "-1.90",
    "market_cap": "39906188.80532513774047360000",
    "nvt": "40.61188446467634339559"
  }, {
    "rank": 83,
    "name": "ReddCoin",
    "symbol": "RDD",
    "global_id": "rdd",
    "price_usd": "0.00132571400000000020",
    "volume_usd": "99920.09",
    "available_supply": "28808713174",
    "price_change": "11.18",
    "market_cap": "38192114.37675624176174263480",
    "nvt": "382.22658102846226181084"
  }, {
    "rank": 84,
    "name": "GXChain",
    "symbol": "GXS",
    "global_id": "gxs",
    "price_usd": "0.56352819869120570000",
    "volume_usd": "5550849.83",
    "available_supply": "65000000",
    "price_change": "1.08",
    "market_cap": "36629332.91492837050000000000",
    "nvt": "6.59886936896802529785"
  }, {
    "rank": 85,
    "name": "Grin",
    "symbol": "GRIN",
    "global_id": "grin",
    "price_usd": "1.92699634912420410000",
    "volume_usd": "74408.87",
    "available_supply": "18660480",
    "price_change": "10.52",
    "market_cap": "35958676.83290522812396800000",
    "nvt": "483.25793461055420037918"
  }, {
    "rank": 86,
    "name": "SOLVE",
    "symbol": "SOLVE",
    "global_id": "solve",
    "price_usd": "0.10893582859962331000",
    "volume_usd": "275500.66",
    "available_supply": "327164058",
    "price_change": "-8.10",
    "market_cap": "35639887.74624521937099198000",
    "nvt": "129.36407392361680502323"
  }, {
    "rank": 87,
    "name": "Stratis",
    "symbol": "STRAT",
    "global_id": "strat",
    "price_usd": "0.34663414653532176000",
    "volume_usd": "401685.52",
    "available_supply": "99453031",
    "price_change": "-1.53",
    "market_cap": "34473816.52103589759225456000",
    "nvt": "85.82290076335312657587"
  }, {
    "rank": 88,
    "name": "Dent",
    "symbol": "DENT",
    "global_id": "dent",
    "price_usd": "0.00046066200059713305",
    "volume_usd": "237895.22",
    "available_supply": "73205838994",
    "price_change": "2.39",
    "market_cap": "33723148.24636765391629615170",
    "nvt": "141.75630870753794009100"
  }, {
    "rank": 89,
    "name": "Decentraland",
    "symbol": "MANA",
    "global_id": "mana",
    "price_usd": "0.03151680733433396000",
    "volume_usd": "206181.93",
    "available_supply": "1050141509",
    "price_change": "9.11",
    "market_cap": "33097107.61293973226434564000",
    "nvt": "160.52380348238922908688"
  }, {
    "rank": 90,
    "name": "Electroneum",
    "symbol": "ETN",
    "global_id": "etn",
    "price_usd": "0.00337222227249727330",
    "volume_usd": "10045.95",
    "available_supply": "9780222332",
    "price_change": "1.39",
    "market_cap": "32981083.57794562173776733560",
    "nvt": "3283.02286771740071747991"
  }, {
    "rank": 91,
    "name": "Republic Protocol",
    "symbol": "REN",
    "global_id": "ren",
    "price_usd": "0.04055776490478085000",
    "volume_usd": "2651995.02",
    "available_supply": "795594931",
    "price_change": "-17.53",
    "market_cap": "32267552.17093334192587135000",
    "nvt": "12.16727479787399522563"
  }, {
    "rank": 92,
    "name": "Nebulas",
    "symbol": "NAS",
    "global_id": "nas",
    "price_usd": "0.62685555331047400000",
    "volume_usd": "400880.11",
    "available_supply": "48627715",
    "price_change": "0.01",
    "market_cap": "30482553.19254903618691000000",
    "nvt": "76.03907610319962291696"
  }, {
    "rank": 92,
    "name": "QASH",
    "symbol": "QASH",
    "global_id": "qash",
    "price_usd": "0.08736214432434769000",
    "volume_usd": "142735.39",
    "available_supply": "350000000",
    "price_change": "-6.39",
    "market_cap": "30576750.51352169150000000000",
    "nvt": "214.21982672637592891293"
  }, {
    "rank": 93,
    "name": "Nuls",
    "symbol": "NULS",
    "global_id": "nuls",
    "price_usd": "0.41725804314548390000",
    "volume_usd": "250826.25",
    "available_supply": "72935472",
    "price_change": "-1.21",
    "market_cap": "30432912.32261223291490080000",
    "nvt": "121.33065148728345982488"
  }, {
    "rank": 94,
    "name": "Loopring",
    "symbol": "LRC",
    "global_id": "lrc",
    "price_usd": "0.03279235901785828400",
    "volume_usd": "152249.74",
    "available_supply": "898100716",
    "price_change": "4.96",
    "market_cap": "29450841.11326758164693134400",
    "nvt": "193.43771039127936538303"
  }, {
    "rank": 95,
    "name": "Wanchain",
    "symbol": "WAN",
    "global_id": "wan",
    "price_usd": "0.27275090293593585000",
    "volume_usd": "3837873.17",
    "available_supply": "106152493",
    "price_change": "7.50",
    "market_cap": "28953188.31465060976557405000",
    "nvt": "7.54407116445971813226"
  }, {
    "rank": 96,
    "name": "Horizen",
    "symbol": "ZEN",
    "global_id": "zen",
    "price_usd": "3.98490581987560900000",
    "volume_usd": "81652.86",
    "available_supply": "7145988",
    "price_change": "-13.92",
    "market_cap": "28476089.16996126340669200000",
    "nvt": "348.74576554895031731518"
  }, {
    "rank": 97,
    "name": "Matic Network",
    "symbol": "MATIC",
    "global_id": "matic",
    "price_usd": "0.01293879075465284600",
    "volume_usd": "3425755.04",
    "available_supply": "2175190262",
    "price_change": "25.19",
    "market_cap": "28144331.65157650180978565200",
    "nvt": "8.21551200332657229624"
  }, {
    "rank": 98,
    "name": "Fantom",
    "symbol": "FTM",
    "global_id": "ftm",
    "price_usd": "0.01518820165755020200",
    "volume_usd": "2126086.99",
    "available_supply": "1813658595",
    "price_change": "3.83",
    "market_cap": "27546212.47880917050128619000",
    "nvt": "12.95629605391130797583"
  }, {
    "rank": 99,
    "name": "Santiment Network Token",
    "symbol": "SAN",
    "global_id": "san",
    "price_usd": "0.43511755034562960000",
    "volume_usd": "1581.49",
    "available_supply": "62660371",
    "price_change": "20.67",
    "market_cap": "27264627.13326832896458160000",
    "nvt": "17239.83530295375181922213"
  }],
  "error": null
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_currencies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/currencies */ "./data/currencies.js");


var _jsxFileName = "/Users/magino/Dev/crypto-prices/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const risiMood = ({
  price_change
}) => {
  let result = '';

  if (price_change > 15) {
    result = 'https://image.noelshack.com/fichiers/2019/02/2/1546914264-1484472223-risitas739.png';
  } else if (price_change > 10) {
    result = 'https://image.noelshack.com/fichiers/2016/24/1466366197-risitas10.png';
  } else if (price_change > 5) {
    result = 'https://image.noelshack.com/fichiers/2017/39/3/1506463228-risibg.png';
  } else if (price_change > 0) {
    result = 'https://image.noelshack.com/fichiers/2018/29/6/1532128784-risitas33.png';
  } else if (price_change > -5) {
    result = 'https://image.noelshack.com/fichiers/2016/47/1480107253-ris47.png';
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

const renderCurrencyRow = currency => {
  return __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, currency.rank), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("img", {
    className: "mr-3",
    width: 16,
    height: 16,
    src: `https://images.openmarketcap.com/coin_logos/16x16/${currency.global_id}.png`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/currencies/[name]",
    as: `/currencies/${currency.symbol}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, currency.name))), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(currency.price_usd).toFixed(3)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(currency.market_cap)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(currency.volume_usd)), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, currency.available_supply), __jsx("td", {
    className: currency.price_change >= 0 ? 'text-success' : 'text-danger',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(currency.price_change).toFixed(2), "\xA0%"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("img", {
    width: 56,
    src: risiMood(currency),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  })));
};

const Page = () => {
  const currencies = _data_currencies__WEBPACK_IMPORTED_MODULE_5__["default"].data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "col p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Cryptocurrencies by Market Capitalization"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("table", {
    className: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "#"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Name"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Price USD"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Market Cap"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Volume (24h)"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Available supply"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Price change"), __jsx("th", {
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Risi mood"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, currencies.map(renderCurrencyRow))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"])(Page));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/magino/Dev/crypto-prices/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map