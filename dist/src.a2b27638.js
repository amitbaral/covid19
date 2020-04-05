// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
},{}],"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
},{}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
},{}],"node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles");

var iterableToArrayLimit = require("./iterableToArrayLimit");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableRest = require("./nonIterableRest");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
},{"./arrayWithHoles":"node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit":"node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest":"node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/moment/src/lib/utils/hooks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = hooks;
exports.setHookCallback = setHookCallback;
var hookCallback;

function hooks() {
  return hookCallback.apply(null, arguments);
} // This is done to register the method called with moment()
// without creating circular dependencies.


function setHookCallback(callback) {
  hookCallback = callback;
}
},{}],"node_modules/moment/src/lib/utils/is-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArray;

function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
},{}],"node_modules/moment/src/lib/utils/is-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;

function isObject(input) {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]';
}
},{}],"node_modules/moment/src/lib/utils/is-object-empty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObjectEmpty;

function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k;

    for (k in obj) {
      if (obj.hasOwnProperty(k)) {
        return false;
      }
    }

    return true;
  }
}
},{}],"node_modules/moment/src/lib/utils/is-undefined.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUndefined;

function isUndefined(input) {
  return input === void 0;
}
},{}],"node_modules/moment/src/lib/utils/is-number.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;

function isNumber(input) {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}
},{}],"node_modules/moment/src/lib/utils/is-date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}
},{}],"node_modules/moment/src/lib/utils/map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;

function map(arr, fn) {
  var res = [],
      i;

  for (i = 0; i < arr.length; ++i) {
    res.push(fn(arr[i], i));
  }

  return res;
}
},{}],"node_modules/moment/src/lib/utils/has-own-prop.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasOwnProp;

function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}
},{}],"node_modules/moment/src/lib/utils/extend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extend;

var _hasOwnProp = _interopRequireDefault(require("./has-own-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function extend(a, b) {
  for (var i in b) {
    if ((0, _hasOwnProp.default)(b, i)) {
      a[i] = b[i];
    }
  }

  if ((0, _hasOwnProp.default)(b, 'toString')) {
    a.toString = b.toString;
  }

  if ((0, _hasOwnProp.default)(b, 'valueOf')) {
    a.valueOf = b.valueOf;
  }

  return a;
}
},{"./has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js"}],"node_modules/moment/src/lib/create/utc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUTC = createUTC;

var _fromAnything = require("./from-anything");

function createUTC(input, format, locale, strict) {
  return (0, _fromAnything.createLocalOrUTC)(input, format, locale, strict, true).utc();
}
},{"./from-anything":"node_modules/moment/src/lib/create/from-anything.js"}],"node_modules/moment/src/lib/create/parsing-flags.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParsingFlags;

function defaultParsingFlags() {
  // We need to deep clone this object.
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}

function getParsingFlags(m) {
  if (m._pf == null) {
    m._pf = defaultParsingFlags();
  }

  return m._pf;
}
},{}],"node_modules/moment/src/lib/utils/some.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var some;
exports.default = some;

if (Array.prototype.some) {
  exports.default = some = Array.prototype.some;
} else {
  exports.default = some = function (fun) {
    var t = Object(this);
    var len = t.length >>> 0;

    for (var i = 0; i < len; i++) {
      if (i in t && fun.call(this, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
},{}],"node_modules/moment/src/lib/create/valid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = isValid;
exports.createInvalid = createInvalid;

var _extend = _interopRequireDefault(require("../utils/extend"));

var _utc = require("./utc");

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

var _some = _interopRequireDefault(require("../utils/some"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValid(m) {
  if (m._isValid == null) {
    var flags = (0, _parsingFlags.default)(m);

    var parsedParts = _some.default.call(flags.parsedDateParts, function (i) {
      return i != null;
    });

    var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

    if (m._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
    }

    if (Object.isFrozen == null || !Object.isFrozen(m)) {
      m._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }

  return m._isValid;
}

function createInvalid(flags) {
  var m = (0, _utc.createUTC)(NaN);

  if (flags != null) {
    (0, _extend.default)((0, _parsingFlags.default)(m), flags);
  } else {
    (0, _parsingFlags.default)(m).userInvalidated = true;
  }

  return m;
}
},{"../utils/extend":"node_modules/moment/src/lib/utils/extend.js","./utc":"node_modules/moment/src/lib/create/utc.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js","../utils/some":"node_modules/moment/src/lib/utils/some.js"}],"node_modules/moment/src/lib/moment/constructor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyConfig = copyConfig;
exports.Moment = Moment;
exports.isMoment = isMoment;

var _hooks = require("../utils/hooks");

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _isUndefined = _interopRequireDefault(require("../utils/is-undefined"));

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = _hooks.hooks.momentProperties = [];

function copyConfig(to, from) {
  var i, prop, val;

  if (!(0, _isUndefined.default)(from._isAMomentObject)) {
    to._isAMomentObject = from._isAMomentObject;
  }

  if (!(0, _isUndefined.default)(from._i)) {
    to._i = from._i;
  }

  if (!(0, _isUndefined.default)(from._f)) {
    to._f = from._f;
  }

  if (!(0, _isUndefined.default)(from._l)) {
    to._l = from._l;
  }

  if (!(0, _isUndefined.default)(from._strict)) {
    to._strict = from._strict;
  }

  if (!(0, _isUndefined.default)(from._tzm)) {
    to._tzm = from._tzm;
  }

  if (!(0, _isUndefined.default)(from._isUTC)) {
    to._isUTC = from._isUTC;
  }

  if (!(0, _isUndefined.default)(from._offset)) {
    to._offset = from._offset;
  }

  if (!(0, _isUndefined.default)(from._pf)) {
    to._pf = (0, _parsingFlags.default)(from);
  }

  if (!(0, _isUndefined.default)(from._locale)) {
    to._locale = from._locale;
  }

  if (momentProperties.length > 0) {
    for (i = 0; i < momentProperties.length; i++) {
      prop = momentProperties[i];
      val = from[prop];

      if (!(0, _isUndefined.default)(val)) {
        to[prop] = val;
      }
    }
  }

  return to;
}

var updateInProgress = false; // Moment prototype object

function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);

  if (!this.isValid()) {
    this._d = new Date(NaN);
  } // Prevent infinite loop in case updateOffset creates new moment
  // objects.


  if (updateInProgress === false) {
    updateInProgress = true;

    _hooks.hooks.updateOffset(this);

    updateInProgress = false;
  }
}

function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
},{"../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../utils/is-undefined":"node_modules/moment/src/lib/utils/is-undefined.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/utils/abs-floor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = absFloor;

function absFloor(number) {
  if (number < 0) {
    // -0 -> 0
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
},{}],"node_modules/moment/src/lib/utils/to-int.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toInt;

var _absFloor = _interopRequireDefault(require("./abs-floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion,
      value = 0;

  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = (0, _absFloor.default)(coercedNumber);
  }

  return value;
}
},{"./abs-floor":"node_modules/moment/src/lib/utils/abs-floor.js"}],"node_modules/moment/src/lib/utils/compare-arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compareArrays;

var _toInt = _interopRequireDefault(require("./to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;

  for (i = 0; i < len; i++) {
    if (dontConvert && array1[i] !== array2[i] || !dontConvert && (0, _toInt.default)(array1[i]) !== (0, _toInt.default)(array2[i])) {
      diffs++;
    }
  }

  return diffs + lengthDiff;
}
},{"./to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/utils/deprecate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecate = deprecate;
exports.deprecateSimple = deprecateSimple;

var _extend = _interopRequireDefault(require("./extend"));

var _hooks = require("./hooks");

var _isUndefined = _interopRequireDefault(require("./is-undefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function warn(msg) {
  if (_hooks.hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
    console.warn('Deprecation warning: ' + msg);
  }
}

function deprecate(msg, fn) {
  var firstTime = true;
  return (0, _extend.default)(function () {
    if (_hooks.hooks.deprecationHandler != null) {
      _hooks.hooks.deprecationHandler(null, msg);
    }

    if (firstTime) {
      var args = [];
      var arg;

      for (var i = 0; i < arguments.length; i++) {
        arg = '';

        if (typeof arguments[i] === 'object') {
          arg += '\n[' + i + '] ';

          for (var key in arguments[0]) {
            arg += key + ': ' + arguments[0][key] + ', ';
          }

          arg = arg.slice(0, -2); // Remove trailing comma and space
        } else {
          arg = arguments[i];
        }

        args.push(arg);
      }

      warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
      firstTime = false;
    }

    return fn.apply(this, arguments);
  }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
  if (_hooks.hooks.deprecationHandler != null) {
    _hooks.hooks.deprecationHandler(name, msg);
  }

  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}

_hooks.hooks.suppressDeprecationWarnings = false;
_hooks.hooks.deprecationHandler = null;
},{"./extend":"node_modules/moment/src/lib/utils/extend.js","./hooks":"node_modules/moment/src/lib/utils/hooks.js","./is-undefined":"node_modules/moment/src/lib/utils/is-undefined.js"}],"node_modules/moment/src/lib/utils/is-function.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFunction;

function isFunction(input) {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}
},{}],"node_modules/moment/src/lib/locale/set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.mergeConfigs = mergeConfigs;

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

var _extend = _interopRequireDefault(require("../utils/extend"));

var _isObject = _interopRequireDefault(require("../utils/is-object"));

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function set(config) {
  var prop, i;

  for (i in config) {
    prop = config[i];

    if ((0, _isFunction.default)(prop)) {
      this[i] = prop;
    } else {
      this['_' + i] = prop;
    }
  }

  this._config = config; // Lenient ordinal parsing accepts just a number in addition to
  // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
  // TODO: Remove "ordinalParse" fallback in next major release.

  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
}

function mergeConfigs(parentConfig, childConfig) {
  var res = (0, _extend.default)({}, parentConfig),
      prop;

  for (prop in childConfig) {
    if ((0, _hasOwnProp.default)(childConfig, prop)) {
      if ((0, _isObject.default)(parentConfig[prop]) && (0, _isObject.default)(childConfig[prop])) {
        res[prop] = {};
        (0, _extend.default)(res[prop], parentConfig[prop]);
        (0, _extend.default)(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }

  for (prop in parentConfig) {
    if ((0, _hasOwnProp.default)(parentConfig, prop) && !(0, _hasOwnProp.default)(childConfig, prop) && (0, _isObject.default)(parentConfig[prop])) {
      // make sure changes to properties don't modify parent config
      res[prop] = (0, _extend.default)({}, res[prop]);
    }
  }

  return res;
}
},{"../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js","../utils/extend":"node_modules/moment/src/lib/utils/extend.js","../utils/is-object":"node_modules/moment/src/lib/utils/is-object.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js"}],"node_modules/moment/src/lib/locale/constructor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Locale = Locale;

function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
},{}],"node_modules/moment/src/lib/utils/keys.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hasOwnProp = _interopRequireDefault(require("./has-own-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys;
exports.default = keys;

if (Object.keys) {
  exports.default = keys = Object.keys;
} else {
  exports.default = keys = function (obj) {
    var i,
        res = [];

    for (i in obj) {
      if ((0, _hasOwnProp.default)(obj, i)) {
        res.push(i);
      }
    }

    return res;
  };
}
},{"./has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js"}],"node_modules/moment/src/lib/locale/calendar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calendar = calendar;
exports.defaultCalendar = void 0;

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCalendar = {
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  lastDay: '[Yesterday at] LT',
  lastWeek: '[Last] dddd [at] LT',
  sameElse: 'L'
};
exports.defaultCalendar = defaultCalendar;

function calendar(key, mom, now) {
  var output = this._calendar[key] || this._calendar['sameElse'];
  return (0, _isFunction.default)(output) ? output.call(mom, now) : output;
}
},{"../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js"}],"node_modules/moment/src/lib/locale/formats.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longDateFormat = longDateFormat;
exports.defaultLongDateFormat = void 0;
var defaultLongDateFormat = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
exports.defaultLongDateFormat = defaultLongDateFormat;

function longDateFormat(key) {
  var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];

  if (format || !formatUpper) {
    return format;
  }

  this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
    return val.slice(1);
  });
  return this._longDateFormat[key];
}
},{}],"node_modules/moment/src/lib/locale/invalid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidDate = invalidDate;
exports.defaultInvalidDate = void 0;
var defaultInvalidDate = 'Invalid date';
exports.defaultInvalidDate = defaultInvalidDate;

function invalidDate() {
  return this._invalidDate;
}
},{}],"node_modules/moment/src/lib/locale/ordinal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ordinal = ordinal;
exports.defaultDayOfMonthOrdinalParse = exports.defaultOrdinal = void 0;
var defaultOrdinal = '%d';
exports.defaultOrdinal = defaultOrdinal;
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
exports.defaultDayOfMonthOrdinalParse = defaultDayOfMonthOrdinalParse;

function ordinal(number) {
  return this._ordinal.replace('%d', number);
}
},{}],"node_modules/moment/src/lib/locale/relative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeTime = relativeTime;
exports.pastFuture = pastFuture;
exports.defaultRelativeTime = void 0;

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRelativeTime = {
  future: 'in %s',
  past: '%s ago',
  s: 'a few seconds',
  ss: '%d seconds',
  m: 'a minute',
  mm: '%d minutes',
  h: 'an hour',
  hh: '%d hours',
  d: 'a day',
  dd: '%d days',
  M: 'a month',
  MM: '%d months',
  y: 'a year',
  yy: '%d years'
};
exports.defaultRelativeTime = defaultRelativeTime;

function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return (0, _isFunction.default)(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
  var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
  return (0, _isFunction.default)(format) ? format(output) : format.replace(/%s/i, output);
}
},{"../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js"}],"node_modules/moment/src/lib/units/aliases.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUnitAlias = addUnitAlias;
exports.normalizeUnits = normalizeUnits;
exports.normalizeObjectUnits = normalizeObjectUnits;

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aliases = {};

function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
  return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
  var normalizedInput = {},
      normalizedProp,
      prop;

  for (prop in inputObject) {
    if ((0, _hasOwnProp.default)(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);

      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }

  return normalizedInput;
}
},{"../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js"}],"node_modules/moment/src/lib/units/priorities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUnitPriority = addUnitPriority;
exports.getPrioritizedUnits = getPrioritizedUnits;
var priorities = {};

function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
  var units = [];

  for (var u in unitsObj) {
    units.push({
      unit: u,
      priority: priorities[u]
    });
  }

  units.sort(function (a, b) {
    return a.priority - b.priority;
  });
  return units;
}
},{}],"node_modules/moment/src/lib/utils/zero-fill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zeroFill;

function zeroFill(number, targetLength, forceSign) {
  var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
  return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
},{}],"node_modules/moment/src/lib/format/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addFormatToken = addFormatToken;
exports.formatMoment = formatMoment;
exports.expandFormat = expandFormat;
exports.formatTokenFunctions = exports.formattingTokens = void 0;

var _zeroFill = _interopRequireDefault(require("../utils/zero-fill"));

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
exports.formattingTokens = formattingTokens;
var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
var formatFunctions = {};
var formatTokenFunctions = {}; // token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }

exports.formatTokenFunctions = formatTokenFunctions;

function addFormatToken(token, padded, ordinal, callback) {
  var func = callback;

  if (typeof callback === 'string') {
    func = function () {
      return this[callback]();
    };
  }

  if (token) {
    formatTokenFunctions[token] = func;
  }

  if (padded) {
    formatTokenFunctions[padded[0]] = function () {
      return (0, _zeroFill.default)(func.apply(this, arguments), padded[1], padded[2]);
    };
  }

  if (ordinal) {
    formatTokenFunctions[ordinal] = function () {
      return this.localeData().ordinal(func.apply(this, arguments), token);
    };
  }
}

function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, '');
  }

  return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
  var array = format.match(formattingTokens),
      i,
      length;

  for (i = 0, length = array.length; i < length; i++) {
    if (formatTokenFunctions[array[i]]) {
      array[i] = formatTokenFunctions[array[i]];
    } else {
      array[i] = removeFormattingTokens(array[i]);
    }
  }

  return function (mom) {
    var output = '',
        i;

    for (i = 0; i < length; i++) {
      output += (0, _isFunction.default)(array[i]) ? array[i].call(mom, format) : array[i];
    }

    return output;
  };
} // format date using native date object


function formatMoment(m, format) {
  if (!m.isValid()) {
    return m.localeData().invalidDate();
  }

  format = expandFormat(format, m.localeData());
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
  return formatFunctions[format](m);
}

function expandFormat(format, locale) {
  var i = 5;

  function replaceLongDateFormatTokens(input) {
    return locale.longDateFormat(input) || input;
  }

  localFormattingTokens.lastIndex = 0;

  while (i >= 0 && localFormattingTokens.test(format)) {
    format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i -= 1;
  }

  return format;
}
},{"../utils/zero-fill":"node_modules/moment/src/lib/utils/zero-fill.js","../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js"}],"node_modules/moment/src/lib/parse/regex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addRegexToken = addRegexToken;
exports.getParseRegexForToken = getParseRegexForToken;
exports.regexEscape = regexEscape;
exports.matchWord = exports.matchTimestamp = exports.matchShortOffset = exports.matchOffset = exports.matchSigned = exports.matchUnsigned = exports.match1to6 = exports.match1to4 = exports.match1to3 = exports.match5to6 = exports.match3to4 = exports.match1to2 = exports.match6 = exports.match4 = exports.match3 = exports.match2 = exports.match1 = void 0;

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var match1 = /\d/; //       0 - 9

exports.match1 = match1;
var match2 = /\d\d/; //      00 - 99

exports.match2 = match2;
var match3 = /\d{3}/; //     000 - 999

exports.match3 = match3;
var match4 = /\d{4}/; //    0000 - 9999

exports.match4 = match4;
var match6 = /[+-]?\d{6}/; // -999999 - 999999

exports.match6 = match6;
var match1to2 = /\d\d?/; //       0 - 99

exports.match1to2 = match1to2;
var match3to4 = /\d\d\d\d?/; //     999 - 9999

exports.match3to4 = match3to4;
var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

exports.match5to6 = match5to6;
var match1to3 = /\d{1,3}/; //       0 - 999

exports.match1to3 = match1to3;
var match1to4 = /\d{1,4}/; //       0 - 9999

exports.match1to4 = match1to4;
var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

exports.match1to6 = match1to6;
var matchUnsigned = /\d+/; //       0 - inf

exports.matchUnsigned = matchUnsigned;
var matchSigned = /[+-]?\d+/; //    -inf - inf

exports.matchSigned = matchSigned;
var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

exports.matchOffset = matchOffset;
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

exports.matchShortOffset = matchShortOffset;
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months

exports.matchTimestamp = matchTimestamp;
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
exports.matchWord = matchWord;
var regexes = {};

function addRegexToken(token, regex, strictRegex) {
  regexes[token] = (0, _isFunction.default)(regex) ? regex : function (isStrict, localeData) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}

function getParseRegexForToken(token, config) {
  if (!(0, _hasOwnProp.default)(regexes, token)) {
    return new RegExp(unescapeFormat(token));
  }

  return regexes[token](config._strict, config._locale);
} // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


function unescapeFormat(s) {
  return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
    return p1 || p2 || p3 || p4;
  }));
}

function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
},{"../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js"}],"node_modules/moment/src/lib/parse/token.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addParseToken = addParseToken;
exports.addWeekParseToken = addWeekParseToken;
exports.addTimeToArrayFromToken = addTimeToArrayFromToken;

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _isNumber = _interopRequireDefault(require("../utils/is-number"));

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tokens = {};

function addParseToken(token, callback) {
  var i,
      func = callback;

  if (typeof token === 'string') {
    token = [token];
  }

  if ((0, _isNumber.default)(callback)) {
    func = function (input, array) {
      array[callback] = (0, _toInt.default)(input);
    };
  }

  for (i = 0; i < token.length; i++) {
    tokens[token[i]] = func;
  }
}

function addWeekParseToken(token, callback) {
  addParseToken(token, function (input, array, config, token) {
    config._w = config._w || {};
    callback(input, config._w, config, token);
  });
}

function addTimeToArrayFromToken(token, input, config) {
  if (input != null && (0, _hasOwnProp.default)(tokens, token)) {
    tokens[token](input, config._a, config, token);
  }
}
},{"../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../utils/is-number":"node_modules/moment/src/lib/utils/is-number.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEEKDAY = exports.WEEK = exports.MILLISECOND = exports.SECOND = exports.MINUTE = exports.HOUR = exports.DATE = exports.MONTH = exports.YEAR = void 0;
var YEAR = 0;
exports.YEAR = YEAR;
var MONTH = 1;
exports.MONTH = MONTH;
var DATE = 2;
exports.DATE = DATE;
var HOUR = 3;
exports.HOUR = HOUR;
var MINUTE = 4;
exports.MINUTE = MINUTE;
var SECOND = 5;
exports.SECOND = SECOND;
var MILLISECOND = 6;
exports.MILLISECOND = MILLISECOND;
var WEEK = 7;
exports.WEEK = WEEK;
var WEEKDAY = 8;
exports.WEEKDAY = WEEKDAY;
},{}],"node_modules/moment/src/lib/units/year.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysInYear = daysInYear;
exports.isLeapYear = isLeapYear;
exports.getIsLeapYear = getIsLeapYear;
exports.getSetYear = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _hooks = require("../utils/hooks");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('Y', 0, 0, function () {
  var y = this.year();
  return y <= 9999 ? '' + y : '+' + y;
});
(0, _format.addFormatToken)(0, ['YY', 2], 0, function () {
  return this.year() % 100;
});
(0, _format.addFormatToken)(0, ['YYYY', 4], 0, 'year');
(0, _format.addFormatToken)(0, ['YYYYY', 5], 0, 'year');
(0, _format.addFormatToken)(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

(0, _aliases.addUnitAlias)('year', 'y'); // PRIORITIES

(0, _priorities.addUnitPriority)('year', 1); // PARSING

(0, _regex.addRegexToken)('Y', _regex.matchSigned);
(0, _regex.addRegexToken)('YY', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('YYYY', _regex.match1to4, _regex.match4);
(0, _regex.addRegexToken)('YYYYY', _regex.match1to6, _regex.match6);
(0, _regex.addRegexToken)('YYYYYY', _regex.match1to6, _regex.match6);
(0, _token.addParseToken)(['YYYYY', 'YYYYYY'], _constants.YEAR);
(0, _token.addParseToken)('YYYY', function (input, array) {
  array[_constants.YEAR] = input.length === 2 ? _hooks.hooks.parseTwoDigitYear(input) : (0, _toInt.default)(input);
});
(0, _token.addParseToken)('YY', function (input, array) {
  array[_constants.YEAR] = _hooks.hooks.parseTwoDigitYear(input);
});
(0, _token.addParseToken)('Y', function (input, array) {
  array[_constants.YEAR] = parseInt(input, 10);
}); // HELPERS

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
} // HOOKS


_hooks.hooks.parseTwoDigitYear = function (input) {
  return (0, _toInt.default)(input) + ((0, _toInt.default)(input) > 68 ? 1900 : 2000);
}; // MOMENTS


var getSetYear = (0, _getSet.makeGetSet)('FullYear', true);
exports.getSetYear = getSetYear;

function getIsLeapYear() {
  return isLeapYear(this.year());
}
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/moment/get-set.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetSet = makeGetSet;
exports.get = get;
exports.set = set;
exports.stringGet = stringGet;
exports.stringSet = stringSet;

var _aliases = require("../units/aliases");

var _priorities = require("../units/priorities");

var _hooks = require("../utils/hooks");

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

var _month = require("../units/month");

var _year = require("../units/year");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeGetSet(unit, keepTime) {
  return function (value) {
    if (value != null) {
      set(this, unit, value);

      _hooks.hooks.updateOffset(this, keepTime);

      return this;
    } else {
      return get(this, unit);
    }
  };
}

function get(mom, unit) {
  return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set(mom, unit, value) {
  if (mom.isValid() && !isNaN(value)) {
    if (unit === 'FullYear' && (0, _year.isLeapYear)(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), (0, _month.daysInMonth)(value, mom.month()));
    } else {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
} // MOMENTS


function stringGet(units) {
  units = (0, _aliases.normalizeUnits)(units);

  if ((0, _isFunction.default)(this[units])) {
    return this[units]();
  }

  return this;
}

function stringSet(units, value) {
  if (typeof units === 'object') {
    units = (0, _aliases.normalizeObjectUnits)(units);
    var prioritized = (0, _priorities.getPrioritizedUnits)(units);

    for (var i = 0; i < prioritized.length; i++) {
      this[prioritized[i].unit](units[prioritized[i].unit]);
    }
  } else {
    units = (0, _aliases.normalizeUnits)(units);

    if ((0, _isFunction.default)(this[units])) {
      return this[units](value);
    }
  }

  return this;
}
},{"../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../units/priorities":"node_modules/moment/src/lib/units/priorities.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js","../units/month":"node_modules/moment/src/lib/units/month.js","../units/year":"node_modules/moment/src/lib/units/year.js"}],"node_modules/moment/src/lib/utils/mod.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mod;

function mod(n, x) {
  return (n % x + x) % x;
}
},{}],"node_modules/moment/src/lib/utils/index-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indexOf;
exports.default = indexOf;

if (Array.prototype.indexOf) {
  exports.default = indexOf = Array.prototype.indexOf;
} else {
  exports.default = indexOf = function (o) {
    // I know
    var i;

    for (i = 0; i < this.length; ++i) {
      if (this[i] === o) {
        return i;
      }
    }

    return -1;
  };
}
},{}],"node_modules/moment/src/lib/units/month.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysInMonth = daysInMonth;
exports.localeMonths = localeMonths;
exports.localeMonthsShort = localeMonthsShort;
exports.localeMonthsParse = localeMonthsParse;
exports.setMonth = setMonth;
exports.getSetMonth = getSetMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.monthsShortRegex = monthsShortRegex;
exports.monthsRegex = monthsRegex;
exports.defaultLocaleMonthsShort = exports.defaultLocaleMonths = void 0;

var _getSet = require("../moment/get-set");

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _hooks = require("../utils/hooks");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _isArray = _interopRequireDefault(require("../utils/is-array"));

var _isNumber = _interopRequireDefault(require("../utils/is-number"));

var _mod = _interopRequireDefault(require("../utils/mod"));

var _indexOf = _interopRequireDefault(require("../utils/index-of"));

var _utc = require("../create/utc");

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

var _year = require("../units/year");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }

  var modMonth = (0, _mod.default)(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? (0, _year.isLeapYear)(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
} // FORMATTING


(0, _format.addFormatToken)('M', ['MM', 2], 'Mo', function () {
  return this.month() + 1;
});
(0, _format.addFormatToken)('MMM', 0, 0, function (format) {
  return this.localeData().monthsShort(this, format);
});
(0, _format.addFormatToken)('MMMM', 0, 0, function (format) {
  return this.localeData().months(this, format);
}); // ALIASES

(0, _aliases.addUnitAlias)('month', 'M'); // PRIORITY

(0, _priorities.addUnitPriority)('month', 8); // PARSING

(0, _regex.addRegexToken)('M', _regex.match1to2);
(0, _regex.addRegexToken)('MM', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('MMM', function (isStrict, locale) {
  return locale.monthsShortRegex(isStrict);
});
(0, _regex.addRegexToken)('MMMM', function (isStrict, locale) {
  return locale.monthsRegex(isStrict);
});
(0, _token.addParseToken)(['M', 'MM'], function (input, array) {
  array[_constants.MONTH] = (0, _toInt.default)(input) - 1;
});
(0, _token.addParseToken)(['MMM', 'MMMM'], function (input, array, config, token) {
  var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


  if (month != null) {
    array[_constants.MONTH] = month;
  } else {
    (0, _parsingFlags.default)(config).invalidMonth = input;
  }
}); // LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
exports.defaultLocaleMonths = defaultLocaleMonths;

function localeMonths(m, format) {
  if (!m) {
    return (0, _isArray.default)(this._months) ? this._months : this._months['standalone'];
  }

  return (0, _isArray.default)(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
exports.defaultLocaleMonthsShort = defaultLocaleMonthsShort;

function localeMonthsShort(m, format) {
  if (!m) {
    return (0, _isArray.default)(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
  }

  return (0, _isArray.default)(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
  var i,
      ii,
      mom,
      llc = monthName.toLocaleLowerCase();

  if (!this._monthsParse) {
    // this is not used
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];

    for (i = 0; i < 12; ++i) {
      mom = (0, _utc.createUTC)([2000, i]);
      this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
      this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
    }
  }

  if (strict) {
    if (format === 'MMM') {
      ii = _indexOf.default.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = _indexOf.default.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format === 'MMM') {
      ii = _indexOf.default.call(this._shortMonthsParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._longMonthsParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = _indexOf.default.call(this._longMonthsParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._shortMonthsParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}

function localeMonthsParse(monthName, format, strict) {
  var i, mom, regex;

  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format, strict);
  }

  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  } // TODO: add sorting
  // Sorting makes sure if one month (or abbr) is a prefix of another
  // see sorting in computeMonthsParse


  for (i = 0; i < 12; i++) {
    // make the regex if we don't have it already
    mom = (0, _utc.createUTC)([2000, i]);

    if (strict && !this._longMonthsParse[i]) {
      this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
      this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
    }

    if (!strict && !this._monthsParse[i]) {
      regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
      this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
    } // test the regex


    if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
      return i;
    } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
      return i;
    } else if (!strict && this._monthsParse[i].test(monthName)) {
      return i;
    }
  }
} // MOMENTS


function setMonth(mom, value) {
  var dayOfMonth;

  if (!mom.isValid()) {
    // No op
    return mom;
  }

  if (typeof value === 'string') {
    if (/^\d+$/.test(value)) {
      value = (0, _toInt.default)(value);
    } else {
      value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

      if (!(0, _isNumber.default)(value)) {
        return mom;
      }
    }
  }

  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

  mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

  return mom;
}

function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);

    _hooks.hooks.updateOffset(this, true);

    return this;
  } else {
    return (0, _getSet.get)(this, 'Month');
  }
}

function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = _regex.matchWord;

function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!(0, _hasOwnProp.default)(this, '_monthsRegex')) {
      computeMonthsParse.call(this);
    }

    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!(0, _hasOwnProp.default)(this, '_monthsShortRegex')) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }

    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}

var defaultMonthsRegex = _regex.matchWord;

function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!(0, _hasOwnProp.default)(this, '_monthsRegex')) {
      computeMonthsParse.call(this);
    }

    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!(0, _hasOwnProp.default)(this, '_monthsRegex')) {
      this._monthsRegex = defaultMonthsRegex;
    }

    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}

function computeMonthsParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }

  var shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom;

  for (i = 0; i < 12; i++) {
    // make the regex if we don't have it already
    mom = (0, _utc.createUTC)([2000, i]);
    shortPieces.push(this.monthsShort(mom, ''));
    longPieces.push(this.months(mom, ''));
    mixedPieces.push(this.months(mom, ''));
    mixedPieces.push(this.monthsShort(mom, ''));
  } // Sorting makes sure if one month (or abbr) is a prefix of another it
  // will match the longer piece.


  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);

  for (i = 0; i < 12; i++) {
    shortPieces[i] = (0, _regex.regexEscape)(shortPieces[i]);
    longPieces[i] = (0, _regex.regexEscape)(longPieces[i]);
  }

  for (i = 0; i < 24; i++) {
    mixedPieces[i] = (0, _regex.regexEscape)(mixedPieces[i]);
  }

  this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/is-array":"node_modules/moment/src/lib/utils/is-array.js","../utils/is-number":"node_modules/moment/src/lib/utils/is-number.js","../utils/mod":"node_modules/moment/src/lib/utils/mod.js","../utils/index-of":"node_modules/moment/src/lib/utils/index-of.js","../create/utc":"node_modules/moment/src/lib/create/utc.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js","../units/year":"node_modules/moment/src/lib/units/year.js"}],"node_modules/moment/src/lib/create/date-from-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDate = createDate;
exports.createUTCDate = createUTCDate;

function createDate(y, m, d, h, M, s, ms) {
  // can't just apply() to create a date:
  // https://stackoverflow.com/q/181348
  var date; // the date constructor remaps years 0-99 to 1900-1999

  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    date = new Date(y + 400, m, d, h, M, s, ms);

    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  } else {
    date = new Date(y, m, d, h, M, s, ms);
  }

  return date;
}

function createUTCDate(y) {
  var date; // the Date.UTC function remaps years 0-99 to 1900-1999

  if (y < 100 && y >= 0) {
    var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

    args[0] = y + 400;
    date = new Date(Date.UTC.apply(null, args));

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }

  return date;
}
},{}],"node_modules/moment/src/lib/units/week-calendar-utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayOfYearFromWeeks = dayOfYearFromWeeks;
exports.weekOfYear = weekOfYear;
exports.weeksInYear = weeksInYear;

var _year = require("./year");

var _local = require("../create/local");

var _dateFromArray = require("../create/date-from-array");

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
  var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
  fwdlw = (7 + (0, _dateFromArray.createUTCDate)(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear,
      resDayOfYear;

  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = (0, _year.daysInYear)(resYear) + dayOfYear;
  } else if (dayOfYear > (0, _year.daysInYear)(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - (0, _year.daysInYear)(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }

  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}

function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek,
      resYear;

  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }

  return {
    week: resWeek,
    year: resYear
  };
}

function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return ((0, _year.daysInYear)(year) - weekOffset + weekOffsetNext) / 7;
}
},{"./year":"node_modules/moment/src/lib/units/year.js","../create/local":"node_modules/moment/src/lib/create/local.js","../create/date-from-array":"node_modules/moment/src/lib/create/date-from-array.js"}],"node_modules/moment/src/lib/units/week.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeWeek = localeWeek;
exports.localeFirstDayOfWeek = localeFirstDayOfWeek;
exports.localeFirstDayOfYear = localeFirstDayOfYear;
exports.getSetWeek = getSetWeek;
exports.getSetISOWeek = getSetISOWeek;
exports.defaultLocaleWeek = void 0;

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _local = require("../create/local");

var _weekCalendarUtils = require("./week-calendar-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('w', ['ww', 2], 'wo', 'week');
(0, _format.addFormatToken)('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

(0, _aliases.addUnitAlias)('week', 'w');
(0, _aliases.addUnitAlias)('isoWeek', 'W'); // PRIORITIES

(0, _priorities.addUnitPriority)('week', 5);
(0, _priorities.addUnitPriority)('isoWeek', 5); // PARSING

(0, _regex.addRegexToken)('w', _regex.match1to2);
(0, _regex.addRegexToken)('ww', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('W', _regex.match1to2);
(0, _regex.addRegexToken)('WW', _regex.match1to2, _regex.match2);
(0, _token.addWeekParseToken)(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
  week[token.substr(0, 1)] = (0, _toInt.default)(input);
}); // HELPERS
// LOCALES

function localeWeek(mom) {
  return (0, _weekCalendarUtils.weekOfYear)(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6 // The week that contains Jan 6th is the first week of the year.

};
exports.defaultLocaleWeek = defaultLocaleWeek;

function localeFirstDayOfWeek() {
  return this._week.dow;
}

function localeFirstDayOfYear() {
  return this._week.doy;
} // MOMENTS


function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
  var week = (0, _weekCalendarUtils.weekOfYear)(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, 'd');
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../create/local":"node_modules/moment/src/lib/create/local.js","./week-calendar-utils":"node_modules/moment/src/lib/units/week-calendar-utils.js"}],"node_modules/moment/src/lib/units/day-of-week.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeWeekdays = localeWeekdays;
exports.localeWeekdaysShort = localeWeekdaysShort;
exports.localeWeekdaysMin = localeWeekdaysMin;
exports.localeWeekdaysParse = localeWeekdaysParse;
exports.getSetDayOfWeek = getSetDayOfWeek;
exports.getSetLocaleDayOfWeek = getSetLocaleDayOfWeek;
exports.getSetISODayOfWeek = getSetISODayOfWeek;
exports.weekdaysRegex = weekdaysRegex;
exports.weekdaysShortRegex = weekdaysShortRegex;
exports.weekdaysMinRegex = weekdaysMinRegex;
exports.defaultLocaleWeekdaysMin = exports.defaultLocaleWeekdaysShort = exports.defaultLocaleWeekdays = void 0;

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _isArray = _interopRequireDefault(require("../utils/is-array"));

var _indexOf = _interopRequireDefault(require("../utils/index-of"));

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _utc = require("../create/utc");

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('d', 0, 'do', 'day');
(0, _format.addFormatToken)('dd', 0, 0, function (format) {
  return this.localeData().weekdaysMin(this, format);
});
(0, _format.addFormatToken)('ddd', 0, 0, function (format) {
  return this.localeData().weekdaysShort(this, format);
});
(0, _format.addFormatToken)('dddd', 0, 0, function (format) {
  return this.localeData().weekdays(this, format);
});
(0, _format.addFormatToken)('e', 0, 0, 'weekday');
(0, _format.addFormatToken)('E', 0, 0, 'isoWeekday'); // ALIASES

(0, _aliases.addUnitAlias)('day', 'd');
(0, _aliases.addUnitAlias)('weekday', 'e');
(0, _aliases.addUnitAlias)('isoWeekday', 'E'); // PRIORITY

(0, _priorities.addUnitPriority)('day', 11);
(0, _priorities.addUnitPriority)('weekday', 11);
(0, _priorities.addUnitPriority)('isoWeekday', 11); // PARSING

(0, _regex.addRegexToken)('d', _regex.match1to2);
(0, _regex.addRegexToken)('e', _regex.match1to2);
(0, _regex.addRegexToken)('E', _regex.match1to2);
(0, _regex.addRegexToken)('dd', function (isStrict, locale) {
  return locale.weekdaysMinRegex(isStrict);
});
(0, _regex.addRegexToken)('ddd', function (isStrict, locale) {
  return locale.weekdaysShortRegex(isStrict);
});
(0, _regex.addRegexToken)('dddd', function (isStrict, locale) {
  return locale.weekdaysRegex(isStrict);
});
(0, _token.addWeekParseToken)(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
  var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


  if (weekday != null) {
    week.d = weekday;
  } else {
    (0, _parsingFlags.default)(config).invalidWeekday = input;
  }
});
(0, _token.addWeekParseToken)(['d', 'e', 'E'], function (input, week, config, token) {
  week[token] = (0, _toInt.default)(input);
}); // HELPERS

function parseWeekday(input, locale) {
  if (typeof input !== 'string') {
    return input;
  }

  if (!isNaN(input)) {
    return parseInt(input, 10);
  }

  input = locale.weekdaysParse(input);

  if (typeof input === 'number') {
    return input;
  }

  return null;
}

function parseIsoWeekday(input, locale) {
  if (typeof input === 'string') {
    return locale.weekdaysParse(input) % 7 || 7;
  }

  return isNaN(input) ? null : input;
} // LOCALES


function shiftWeekdays(ws, n) {
  return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
exports.defaultLocaleWeekdays = defaultLocaleWeekdays;

function localeWeekdays(m, format) {
  var weekdays = (0, _isArray.default)(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
  return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
exports.defaultLocaleWeekdaysShort = defaultLocaleWeekdaysShort;

function localeWeekdaysShort(m) {
  return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
exports.defaultLocaleWeekdaysMin = defaultLocaleWeekdaysMin;

function localeWeekdaysMin(m) {
  return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
  var i,
      ii,
      mom,
      llc = weekdayName.toLocaleLowerCase();

  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];

    for (i = 0; i < 7; ++i) {
      mom = (0, _utc.createUTC)([2000, 1]).day(i);
      this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
      this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
      this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
    }
  }

  if (strict) {
    if (format === 'dddd') {
      ii = _indexOf.default.call(this._weekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format === 'ddd') {
      ii = _indexOf.default.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = _indexOf.default.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  } else {
    if (format === 'dddd') {
      ii = _indexOf.default.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._shortWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else if (format === 'ddd') {
      ii = _indexOf.default.call(this._shortWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._minWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    } else {
      ii = _indexOf.default.call(this._minWeekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._weekdaysParse, llc);

      if (ii !== -1) {
        return ii;
      }

      ii = _indexOf.default.call(this._shortWeekdaysParse, llc);
      return ii !== -1 ? ii : null;
    }
  }
}

function localeWeekdaysParse(weekdayName, format, strict) {
  var i, mom, regex;

  if (this._weekdaysParseExact) {
    return handleStrictParse.call(this, weekdayName, format, strict);
  }

  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }

  for (i = 0; i < 7; i++) {
    // make the regex if we don't have it already
    mom = (0, _utc.createUTC)([2000, 1]).day(i);

    if (strict && !this._fullWeekdaysParse[i]) {
      this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
      this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
      this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
    }

    if (!this._weekdaysParse[i]) {
      regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
      this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
    } // test the regex


    if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
      return i;
    } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
      return i;
    }
  }
} // MOMENTS


function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, 'd');
  } else {
    return day;
  }
}

function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  } // behaves the same as moment#day except
  // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
  // as a setter, sunday should belong to the previous week.


  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}

var defaultWeekdaysRegex = _regex.matchWord;

function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysRegex')) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }

    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}

var defaultWeekdaysShortRegex = _regex.matchWord;

function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysShortRegex')) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }

    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}

var defaultWeekdaysMinRegex = _regex.matchWord;

function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysRegex')) {
      computeWeekdaysParse.call(this);
    }

    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!(0, _hasOwnProp.default)(this, '_weekdaysMinRegex')) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }

    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}

function computeWeekdaysParse() {
  function cmpLenRev(a, b) {
    return b.length - a.length;
  }

  var minPieces = [],
      shortPieces = [],
      longPieces = [],
      mixedPieces = [],
      i,
      mom,
      minp,
      shortp,
      longp;

  for (i = 0; i < 7; i++) {
    // make the regex if we don't have it already
    mom = (0, _utc.createUTC)([2000, 1]).day(i);
    minp = this.weekdaysMin(mom, '');
    shortp = this.weekdaysShort(mom, '');
    longp = this.weekdays(mom, '');
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
  // will match the longer piece.


  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);

  for (i = 0; i < 7; i++) {
    shortPieces[i] = (0, _regex.regexEscape)(shortPieces[i]);
    longPieces[i] = (0, _regex.regexEscape)(longPieces[i]);
    mixedPieces[i] = (0, _regex.regexEscape)(mixedPieces[i]);
  }

  this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/is-array":"node_modules/moment/src/lib/utils/is-array.js","../utils/index-of":"node_modules/moment/src/lib/utils/index-of.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../create/utc":"node_modules/moment/src/lib/create/utc.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/units/hour.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeIsPM = localeIsPM;
exports.localeMeridiem = localeMeridiem;
exports.getSetHour = exports.defaultLocaleMeridiemParse = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _zeroFill = _interopRequireDefault(require("../utils/zero-fill"));

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
function hFormat() {
  return this.hours() % 12 || 12;
}

function kFormat() {
  return this.hours() || 24;
}

(0, _format.addFormatToken)('H', ['HH', 2], 0, 'hour');
(0, _format.addFormatToken)('h', ['hh', 2], 0, hFormat);
(0, _format.addFormatToken)('k', ['kk', 2], 0, kFormat);
(0, _format.addFormatToken)('hmm', 0, 0, function () {
  return '' + hFormat.apply(this) + (0, _zeroFill.default)(this.minutes(), 2);
});
(0, _format.addFormatToken)('hmmss', 0, 0, function () {
  return '' + hFormat.apply(this) + (0, _zeroFill.default)(this.minutes(), 2) + (0, _zeroFill.default)(this.seconds(), 2);
});
(0, _format.addFormatToken)('Hmm', 0, 0, function () {
  return '' + this.hours() + (0, _zeroFill.default)(this.minutes(), 2);
});
(0, _format.addFormatToken)('Hmmss', 0, 0, function () {
  return '' + this.hours() + (0, _zeroFill.default)(this.minutes(), 2) + (0, _zeroFill.default)(this.seconds(), 2);
});

function meridiem(token, lowercase) {
  (0, _format.addFormatToken)(token, 0, 0, function () {
    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}

meridiem('a', true);
meridiem('A', false); // ALIASES

(0, _aliases.addUnitAlias)('hour', 'h'); // PRIORITY

(0, _priorities.addUnitPriority)('hour', 13); // PARSING

function matchMeridiem(isStrict, locale) {
  return locale._meridiemParse;
}

(0, _regex.addRegexToken)('a', matchMeridiem);
(0, _regex.addRegexToken)('A', matchMeridiem);
(0, _regex.addRegexToken)('H', _regex.match1to2);
(0, _regex.addRegexToken)('h', _regex.match1to2);
(0, _regex.addRegexToken)('k', _regex.match1to2);
(0, _regex.addRegexToken)('HH', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('hh', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('kk', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('hmm', _regex.match3to4);
(0, _regex.addRegexToken)('hmmss', _regex.match5to6);
(0, _regex.addRegexToken)('Hmm', _regex.match3to4);
(0, _regex.addRegexToken)('Hmmss', _regex.match5to6);
(0, _token.addParseToken)(['H', 'HH'], _constants.HOUR);
(0, _token.addParseToken)(['k', 'kk'], function (input, array, config) {
  var kInput = (0, _toInt.default)(input);
  array[_constants.HOUR] = kInput === 24 ? 0 : kInput;
});
(0, _token.addParseToken)(['a', 'A'], function (input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
(0, _token.addParseToken)(['h', 'hh'], function (input, array, config) {
  array[_constants.HOUR] = (0, _toInt.default)(input);
  (0, _parsingFlags.default)(config).bigHour = true;
});
(0, _token.addParseToken)('hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[_constants.HOUR] = (0, _toInt.default)(input.substr(0, pos));
  array[_constants.MINUTE] = (0, _toInt.default)(input.substr(pos));
  (0, _parsingFlags.default)(config).bigHour = true;
});
(0, _token.addParseToken)('hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[_constants.HOUR] = (0, _toInt.default)(input.substr(0, pos1));
  array[_constants.MINUTE] = (0, _toInt.default)(input.substr(pos1, 2));
  array[_constants.SECOND] = (0, _toInt.default)(input.substr(pos2));
  (0, _parsingFlags.default)(config).bigHour = true;
});
(0, _token.addParseToken)('Hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[_constants.HOUR] = (0, _toInt.default)(input.substr(0, pos));
  array[_constants.MINUTE] = (0, _toInt.default)(input.substr(pos));
});
(0, _token.addParseToken)('Hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[_constants.HOUR] = (0, _toInt.default)(input.substr(0, pos1));
  array[_constants.MINUTE] = (0, _toInt.default)(input.substr(pos1, 2));
  array[_constants.SECOND] = (0, _toInt.default)(input.substr(pos2));
}); // LOCALES

function localeIsPM(input) {
  // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
  // Using charAt should be more compatible.
  return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
exports.defaultLocaleMeridiemParse = defaultLocaleMeridiemParse;

function localeMeridiem(hours, minutes, isLower) {
  if (hours > 11) {
    return isLower ? 'pm' : 'PM';
  } else {
    return isLower ? 'am' : 'AM';
  }
} // MOMENTS
// Setting the hour should keep the time, because the user explicitly
// specified which hour they want. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.


var getSetHour = (0, _getSet.makeGetSet)('Hours', true);
exports.getSetHour = getSetHour;
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/zero-fill":"node_modules/moment/src/lib/utils/zero-fill.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/locale/base-config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseConfig = void 0;

var _calendar = require("./calendar");

var _formats = require("./formats");

var _invalid = require("./invalid");

var _ordinal = require("./ordinal");

var _relative = require("./relative");

var _month = require("../units/month");

var _week = require("../units/week");

var _dayOfWeek = require("../units/day-of-week");

var _hour = require("../units/hour");

// months
// week
// weekdays
// meridiem
var baseConfig = {
  calendar: _calendar.defaultCalendar,
  longDateFormat: _formats.defaultLongDateFormat,
  invalidDate: _invalid.defaultInvalidDate,
  ordinal: _ordinal.defaultOrdinal,
  dayOfMonthOrdinalParse: _ordinal.defaultDayOfMonthOrdinalParse,
  relativeTime: _relative.defaultRelativeTime,
  months: _month.defaultLocaleMonths,
  monthsShort: _month.defaultLocaleMonthsShort,
  week: _week.defaultLocaleWeek,
  weekdays: _dayOfWeek.defaultLocaleWeekdays,
  weekdaysMin: _dayOfWeek.defaultLocaleWeekdaysMin,
  weekdaysShort: _dayOfWeek.defaultLocaleWeekdaysShort,
  meridiemParse: _hour.defaultLocaleMeridiemParse
};
exports.baseConfig = baseConfig;
},{"./calendar":"node_modules/moment/src/lib/locale/calendar.js","./formats":"node_modules/moment/src/lib/locale/formats.js","./invalid":"node_modules/moment/src/lib/locale/invalid.js","./ordinal":"node_modules/moment/src/lib/locale/ordinal.js","./relative":"node_modules/moment/src/lib/locale/relative.js","../units/month":"node_modules/moment/src/lib/units/month.js","../units/week":"node_modules/moment/src/lib/units/week.js","../units/day-of-week":"node_modules/moment/src/lib/units/day-of-week.js","../units/hour":"node_modules/moment/src/lib/units/hour.js"}],"node_modules/moment/src/lib/locale/locales.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetGlobalLocale = getSetGlobalLocale;
exports.defineLocale = defineLocale;
exports.updateLocale = updateLocale;
exports.getLocale = getLocale;
exports.listLocales = listLocales;

var _isArray = _interopRequireDefault(require("../utils/is-array"));

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _isUndefined = _interopRequireDefault(require("../utils/is-undefined"));

var _compareArrays = _interopRequireDefault(require("../utils/compare-arrays"));

var _deprecate = require("../utils/deprecate");

var _set = require("./set");

var _constructor = require("./constructor");

var _keys = _interopRequireDefault(require("../utils/keys"));

var _baseConfig = require("./base-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
  return key ? key.toLowerCase().replace('_', '-') : key;
} // pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


function chooseLocale(names) {
  var i = 0,
      j,
      next,
      locale,
      split;

  while (i < names.length) {
    split = normalizeLocale(names[i]).split('-');
    j = split.length;
    next = normalizeLocale(names[i + 1]);
    next = next ? next.split('-') : null;

    while (j > 0) {
      locale = loadLocale(split.slice(0, j).join('-'));

      if (locale) {
        return locale;
      }

      if (next && next.length >= j && (0, _compareArrays.default)(split, next, true) >= j - 1) {
        //the next array item is better than a shallower substring of this one
        break;
      }

      j--;
    }

    i++;
  }

  return globalLocale;
}

function loadLocale(name) {
  var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

  if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
    try {
      oldLocale = globalLocale._abbr;
      var aliasedRequire = require;
      aliasedRequire('./locale/' + name);
      getSetGlobalLocale(oldLocale);
    } catch (e) {}
  }

  return locales[name];
} // This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.


function getSetGlobalLocale(key, values) {
  var data;

  if (key) {
    if ((0, _isUndefined.default)(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }

    if (data) {
      // moment.duration._locale = moment._locale = data;
      globalLocale = data;
    } else {
      if (typeof console !== 'undefined' && console.warn) {
        //warn user if arguments are passed but the locale could not be set
        console.warn('Locale ' + key + ' not found. Did you forget to load it?');
      }
    }
  }

  return globalLocale._abbr;
}

function defineLocale(name, config) {
  if (config !== null) {
    var locale,
        parentConfig = _baseConfig.baseConfig;
    config.abbr = name;

    if (locales[name] != null) {
      (0, _deprecate.deprecateSimple)('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale = loadLocale(config.parentLocale);

        if (locale != null) {
          parentConfig = locale._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }

          localeFamilies[config.parentLocale].push({
            name: name,
            config: config
          });
          return null;
        }
      }
    }

    locales[name] = new _constructor.Locale((0, _set.mergeConfigs)(parentConfig, config));

    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function (x) {
        defineLocale(x.name, x.config);
      });
    } // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.


    getSetGlobalLocale(name);
    return locales[name];
  } else {
    // useful for testing
    delete locales[name];
    return null;
  }
}

function updateLocale(name, config) {
  if (config != null) {
    var locale,
        tmpLocale,
        parentConfig = _baseConfig.baseConfig; // MERGE

    tmpLocale = loadLocale(name);

    if (tmpLocale != null) {
      parentConfig = tmpLocale._config;
    }

    config = (0, _set.mergeConfigs)(parentConfig, config);
    locale = new _constructor.Locale(config);
    locale.parentLocale = locales[name];
    locales[name] = locale; // backwards compat for now: also set the locale

    getSetGlobalLocale(name);
  } else {
    // pass null for config to unupdate, useful for tests
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }

  return locales[name];
} // returns locale data


function getLocale(key) {
  var locale;

  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }

  if (!key) {
    return globalLocale;
  }

  if (!(0, _isArray.default)(key)) {
    //short-circuit everything else
    locale = loadLocale(key);

    if (locale) {
      return locale;
    }

    key = [key];
  }

  return chooseLocale(key);
}

function listLocales() {
  return (0, _keys.default)(locales);
}
},{"../utils/is-array":"node_modules/moment/src/lib/utils/is-array.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../utils/is-undefined":"node_modules/moment/src/lib/utils/is-undefined.js","../utils/compare-arrays":"node_modules/moment/src/lib/utils/compare-arrays.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js","./set":"node_modules/moment/src/lib/locale/set.js","./constructor":"node_modules/moment/src/lib/locale/constructor.js","../utils/keys":"node_modules/moment/src/lib/utils/keys.js","./base-config":"node_modules/moment/src/lib/locale/base-config.js"}],"node_modules/moment/src/lib/create/check-overflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkOverflow;

var _month = require("../units/month");

var _constants = require("../units/constants");

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkOverflow(m) {
  var overflow;
  var a = m._a;

  if (a && (0, _parsingFlags.default)(m).overflow === -2) {
    overflow = a[_constants.MONTH] < 0 || a[_constants.MONTH] > 11 ? _constants.MONTH : a[_constants.DATE] < 1 || a[_constants.DATE] > (0, _month.daysInMonth)(a[_constants.YEAR], a[_constants.MONTH]) ? _constants.DATE : a[_constants.HOUR] < 0 || a[_constants.HOUR] > 24 || a[_constants.HOUR] === 24 && (a[_constants.MINUTE] !== 0 || a[_constants.SECOND] !== 0 || a[_constants.MILLISECOND] !== 0) ? _constants.HOUR : a[_constants.MINUTE] < 0 || a[_constants.MINUTE] > 59 ? _constants.MINUTE : a[_constants.SECOND] < 0 || a[_constants.SECOND] > 59 ? _constants.SECOND : a[_constants.MILLISECOND] < 0 || a[_constants.MILLISECOND] > 999 ? _constants.MILLISECOND : -1;

    if ((0, _parsingFlags.default)(m)._overflowDayOfYear && (overflow < _constants.YEAR || overflow > _constants.DATE)) {
      overflow = _constants.DATE;
    }

    if ((0, _parsingFlags.default)(m)._overflowWeeks && overflow === -1) {
      overflow = _constants.WEEK;
    }

    if ((0, _parsingFlags.default)(m)._overflowWeekday && overflow === -1) {
      overflow = _constants.WEEKDAY;
    }

    (0, _parsingFlags.default)(m).overflow = overflow;
  }

  return m;
}
},{"../units/month":"node_modules/moment/src/lib/units/month.js","../units/constants":"node_modules/moment/src/lib/units/constants.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/utils/defaults.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaults;

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
  if (a != null) {
    return a;
  }

  if (b != null) {
    return b;
  }

  return c;
}
},{}],"node_modules/moment/src/lib/create/from-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFromArray = configFromArray;

var _hooks = require("../utils/hooks");

var _dateFromArray = require("./date-from-array");

var _year = require("../units/year");

var _weekCalendarUtils = require("../units/week-calendar-utils");

var _constants = require("../units/constants");

var _local = require("./local");

var _defaults = _interopRequireDefault(require("../utils/defaults"));

var _parsingFlags = _interopRequireDefault(require("./parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function currentDateArray(config) {
  // hooks is actually the exported moment object
  var nowValue = new Date(_hooks.hooks.now());

  if (config._useUTC) {
    return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  }

  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
} // convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]


function configFromArray(config) {
  var i,
      date,
      input = [],
      currentDate,
      expectedWeekday,
      yearToUse;

  if (config._d) {
    return;
  }

  currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

  if (config._w && config._a[_constants.DATE] == null && config._a[_constants.MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  } //if the day of the year is set, figure out what it is


  if (config._dayOfYear != null) {
    yearToUse = (0, _defaults.default)(config._a[_constants.YEAR], currentDate[_constants.YEAR]);

    if (config._dayOfYear > (0, _year.daysInYear)(yearToUse) || config._dayOfYear === 0) {
      (0, _parsingFlags.default)(config)._overflowDayOfYear = true;
    }

    date = (0, _dateFromArray.createUTCDate)(yearToUse, 0, config._dayOfYear);
    config._a[_constants.MONTH] = date.getUTCMonth();
    config._a[_constants.DATE] = date.getUTCDate();
  } // Default to current date.
  // * if no year, month, day of month are given, default to today
  // * if day of month is given, default month and year
  // * if month is given, default only year
  // * if year is given, don't default anything


  for (i = 0; i < 3 && config._a[i] == null; ++i) {
    config._a[i] = input[i] = currentDate[i];
  } // Zero out whatever was not defaulted, including time


  for (; i < 7; i++) {
    config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
  } // Check for 24:00:00.000


  if (config._a[_constants.HOUR] === 24 && config._a[_constants.MINUTE] === 0 && config._a[_constants.SECOND] === 0 && config._a[_constants.MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[_constants.HOUR] = 0;
  }

  config._d = (config._useUTC ? _dateFromArray.createUTCDate : _dateFromArray.createDate).apply(null, input);
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
  // with parseZone.

  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }

  if (config._nextDay) {
    config._a[_constants.HOUR] = 24;
  } // check for mismatching day of week


  if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
    (0, _parsingFlags.default)(config).weekdayMismatch = true;
  }
}

function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
  w = config._w;

  if (w.GG != null || w.W != null || w.E != null) {
    dow = 1;
    doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
    // how we interpret now (local, utc, fixed offset). So create
    // a now version of current config (take local/utc/offset flags, and
    // create now).

    weekYear = (0, _defaults.default)(w.GG, config._a[_constants.YEAR], (0, _weekCalendarUtils.weekOfYear)((0, _local.createLocal)(), 1, 4).year);
    week = (0, _defaults.default)(w.W, 1);
    weekday = (0, _defaults.default)(w.E, 1);

    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    var curWeek = (0, _weekCalendarUtils.weekOfYear)((0, _local.createLocal)(), dow, doy);
    weekYear = (0, _defaults.default)(w.gg, config._a[_constants.YEAR], curWeek.year); // Default to current week.

    week = (0, _defaults.default)(w.w, curWeek.week);

    if (w.d != null) {
      // weekday -- low day numbers are considered next week
      weekday = w.d;

      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w.e != null) {
      // local weekday -- counting starts from beginning of week
      weekday = w.e + dow;

      if (w.e < 0 || w.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      // default to beginning of week
      weekday = dow;
    }
  }

  if (week < 1 || week > (0, _weekCalendarUtils.weeksInYear)(weekYear, dow, doy)) {
    (0, _parsingFlags.default)(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    (0, _parsingFlags.default)(config)._overflowWeekday = true;
  } else {
    temp = (0, _weekCalendarUtils.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy);
    config._a[_constants.YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
},{"../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./date-from-array":"node_modules/moment/src/lib/create/date-from-array.js","../units/year":"node_modules/moment/src/lib/units/year.js","../units/week-calendar-utils":"node_modules/moment/src/lib/units/week-calendar-utils.js","../units/constants":"node_modules/moment/src/lib/units/constants.js","./local":"node_modules/moment/src/lib/create/local.js","../utils/defaults":"node_modules/moment/src/lib/utils/defaults.js","./parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/create/from-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFromISO = configFromISO;
exports.configFromRFC2822 = configFromRFC2822;
exports.configFromString = configFromString;

var _fromStringAndFormat = require("./from-string-and-format");

var _dateFromArray = require("./date-from-array");

var _fromArray = require("./from-array");

var _hooks = require("../utils/hooks");

var _deprecate = require("../utils/deprecate");

var _parsingFlags = _interopRequireDefault(require("./parsing-flags"));

var _month = require("../units/month");

var _dayOfWeek = require("../units/day-of-week");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

function configFromISO(config) {
  var i,
      l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime,
      dateFormat,
      timeFormat,
      tzFormat;

  if (match) {
    (0, _parsingFlags.default)(config).iso = true;

    for (i = 0, l = isoDates.length; i < l; i++) {
      if (isoDates[i][1].exec(match[1])) {
        dateFormat = isoDates[i][0];
        allowTime = isoDates[i][2] !== false;
        break;
      }
    }

    if (dateFormat == null) {
      config._isValid = false;
      return;
    }

    if (match[3]) {
      for (i = 0, l = isoTimes.length; i < l; i++) {
        if (isoTimes[i][1].exec(match[3])) {
          // match[2] should be 'T' or space
          timeFormat = (match[2] || ' ') + isoTimes[i][0];
          break;
        }
      }

      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }

    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }

    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = 'Z';
      } else {
        config._isValid = false;
        return;
      }
    }

    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    (0, _fromStringAndFormat.configFromStringAndFormat)(config);
  } else {
    config._isValid = false;
  }
} // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [untruncateYear(yearStr), _month.defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }

  return result;
}

function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);

  if (year <= 49) {
    return 2000 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }

  return year;
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
    var weekdayProvided = _dayOfWeek.defaultLocaleWeekdaysShort.indexOf(weekdayStr),
        weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

    if (weekdayProvided !== weekdayActual) {
      (0, _parsingFlags.default)(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }

  return true;
}

var obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    // the only allowed military tz is Z
    return 0;
  } else {
    var hm = parseInt(numOffset, 10);
    var m = hm % 100,
        h = (hm - m) / 100;
    return h * 60 + m;
  }
} // date and time from ref 2822 format


function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i));

  if (match) {
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }

    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = _dateFromArray.createUTCDate.apply(null, config._a);

    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

    (0, _parsingFlags.default)(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
} // date from iso format or fallback


function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);

  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }

  configFromISO(config);

  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }

  configFromRFC2822(config);

  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  } // Final attempt, use Input Fallback


  _hooks.hooks.createFromInputFallback(config);
}

_hooks.hooks.createFromInputFallback = (0, _deprecate.deprecate)('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
  config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
});
},{"./from-string-and-format":"node_modules/moment/src/lib/create/from-string-and-format.js","./date-from-array":"node_modules/moment/src/lib/create/date-from-array.js","./from-array":"node_modules/moment/src/lib/create/from-array.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js","./parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js","../units/month":"node_modules/moment/src/lib/units/month.js","../units/day-of-week":"node_modules/moment/src/lib/units/day-of-week.js"}],"node_modules/moment/src/lib/create/from-string-and-format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFromStringAndFormat = configFromStringAndFormat;

var _fromString = require("./from-string");

var _fromArray = require("./from-array");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _format = require("../format/format");

var _checkOverflow = _interopRequireDefault(require("./check-overflow"));

var _constants = require("../units/constants");

var _hooks = require("../utils/hooks");

var _parsingFlags = _interopRequireDefault(require("./parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// constant that refers to the ISO standard
_hooks.hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


_hooks.hooks.RFC_2822 = function () {}; // date from string and format string


function configFromStringAndFormat(config) {
  // TODO: Move this to another part of the creation flow to prevent circular deps
  if (config._f === _hooks.hooks.ISO_8601) {
    (0, _fromString.configFromISO)(config);
    return;
  }

  if (config._f === _hooks.hooks.RFC_2822) {
    (0, _fromString.configFromRFC2822)(config);
    return;
  }

  config._a = [];
  (0, _parsingFlags.default)(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

  var string = '' + config._i,
      i,
      parsedInput,
      tokens,
      token,
      skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;
  tokens = (0, _format.expandFormat)(config._f, config._locale).match(_format.formattingTokens) || [];

  for (i = 0; i < tokens.length; i++) {
    token = tokens[i];
    parsedInput = (string.match((0, _regex.getParseRegexForToken)(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
    //         'regex', getParseRegexForToken(token, config));

    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));

      if (skipped.length > 0) {
        (0, _parsingFlags.default)(config).unusedInput.push(skipped);
      }

      string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    } // don't parse if it's not a known token


    if (_format.formatTokenFunctions[token]) {
      if (parsedInput) {
        (0, _parsingFlags.default)(config).empty = false;
      } else {
        (0, _parsingFlags.default)(config).unusedTokens.push(token);
      }

      (0, _token.addTimeToArrayFromToken)(token, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      (0, _parsingFlags.default)(config).unusedTokens.push(token);
    }
  } // add remaining unparsed input length to the string


  (0, _parsingFlags.default)(config).charsLeftOver = stringLength - totalParsedInputLength;

  if (string.length > 0) {
    (0, _parsingFlags.default)(config).unusedInput.push(string);
  } // clear _12h flag if hour is <= 12


  if (config._a[_constants.HOUR] <= 12 && (0, _parsingFlags.default)(config).bigHour === true && config._a[_constants.HOUR] > 0) {
    (0, _parsingFlags.default)(config).bigHour = undefined;
  }

  (0, _parsingFlags.default)(config).parsedDateParts = config._a.slice(0);
  (0, _parsingFlags.default)(config).meridiem = config._meridiem; // handle meridiem

  config._a[_constants.HOUR] = meridiemFixWrap(config._locale, config._a[_constants.HOUR], config._meridiem);
  (0, _fromArray.configFromArray)(config);
  (0, _checkOverflow.default)(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
  var isPm;

  if (meridiem == null) {
    // nothing to do
    return hour;
  }

  if (locale.meridiemHour != null) {
    return locale.meridiemHour(hour, meridiem);
  } else if (locale.isPM != null) {
    // Fallback
    isPm = locale.isPM(meridiem);

    if (isPm && hour < 12) {
      hour += 12;
    }

    if (!isPm && hour === 12) {
      hour = 0;
    }

    return hour;
  } else {
    // this is not supposed to happen
    return hour;
  }
}
},{"./from-string":"node_modules/moment/src/lib/create/from-string.js","./from-array":"node_modules/moment/src/lib/create/from-array.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../format/format":"node_modules/moment/src/lib/format/format.js","./check-overflow":"node_modules/moment/src/lib/create/check-overflow.js","../units/constants":"node_modules/moment/src/lib/units/constants.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/create/from-string-and-array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFromStringAndArray = configFromStringAndArray;

var _constructor = require("../moment/constructor");

var _fromStringAndFormat = require("./from-string-and-format");

var _parsingFlags = _interopRequireDefault(require("./parsing-flags"));

var _valid = require("./valid");

var _extend = _interopRequireDefault(require("../utils/extend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// date from string and array of format strings
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i, currentScore;

  if (config._f.length === 0) {
    (0, _parsingFlags.default)(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }

  for (i = 0; i < config._f.length; i++) {
    currentScore = 0;
    tempConfig = (0, _constructor.copyConfig)({}, config);

    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }

    tempConfig._f = config._f[i];
    (0, _fromStringAndFormat.configFromStringAndFormat)(tempConfig);

    if (!(0, _valid.isValid)(tempConfig)) {
      continue;
    } // if there is any input that was not parsed add a penalty for that format


    currentScore += (0, _parsingFlags.default)(tempConfig).charsLeftOver; //or tokens

    currentScore += (0, _parsingFlags.default)(tempConfig).unusedTokens.length * 10;
    (0, _parsingFlags.default)(tempConfig).score = currentScore;

    if (scoreToBeat == null || currentScore < scoreToBeat) {
      scoreToBeat = currentScore;
      bestMoment = tempConfig;
    }
  }

  (0, _extend.default)(config, bestMoment || tempConfig);
}
},{"../moment/constructor":"node_modules/moment/src/lib/moment/constructor.js","./from-string-and-format":"node_modules/moment/src/lib/create/from-string-and-format.js","./parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js","./valid":"node_modules/moment/src/lib/create/valid.js","../utils/extend":"node_modules/moment/src/lib/utils/extend.js"}],"node_modules/moment/src/lib/create/from-object.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configFromObject = configFromObject;

var _aliases = require("../units/aliases");

var _fromArray = require("./from-array");

var _map = _interopRequireDefault(require("../utils/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configFromObject(config) {
  if (config._d) {
    return;
  }

  var i = (0, _aliases.normalizeObjectUnits)(config._i);
  config._a = (0, _map.default)([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
    return obj && parseInt(obj, 10);
  });
  (0, _fromArray.configFromArray)(config);
}
},{"../units/aliases":"node_modules/moment/src/lib/units/aliases.js","./from-array":"node_modules/moment/src/lib/create/from-array.js","../utils/map":"node_modules/moment/src/lib/utils/map.js"}],"node_modules/moment/src/lib/create/from-anything.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareConfig = prepareConfig;
exports.createLocalOrUTC = createLocalOrUTC;

var _isArray = _interopRequireDefault(require("../utils/is-array"));

var _isObject = _interopRequireDefault(require("../utils/is-object"));

var _isObjectEmpty = _interopRequireDefault(require("../utils/is-object-empty"));

var _isUndefined = _interopRequireDefault(require("../utils/is-undefined"));

var _isNumber = _interopRequireDefault(require("../utils/is-number"));

var _isDate = _interopRequireDefault(require("../utils/is-date"));

var _map = _interopRequireDefault(require("../utils/map"));

var _valid = require("./valid");

var _constructor = require("../moment/constructor");

var _locales = require("../locale/locales");

var _hooks = require("../utils/hooks");

var _checkOverflow = _interopRequireDefault(require("./check-overflow"));

var _fromStringAndArray = require("./from-string-and-array");

var _fromStringAndFormat = require("./from-string-and-format");

var _fromString = require("./from-string");

var _fromArray = require("./from-array");

var _fromObject = require("./from-object");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFromConfig(config) {
  var res = new _constructor.Moment((0, _checkOverflow.default)(prepareConfig(config)));

  if (res._nextDay) {
    // Adding is smart enough around DST
    res.add(1, 'd');
    res._nextDay = undefined;
  }

  return res;
}

function prepareConfig(config) {
  var input = config._i,
      format = config._f;
  config._locale = config._locale || (0, _locales.getLocale)(config._l);

  if (input === null || format === undefined && input === '') {
    return (0, _valid.createInvalid)({
      nullInput: true
    });
  }

  if (typeof input === 'string') {
    config._i = input = config._locale.preparse(input);
  }

  if ((0, _constructor.isMoment)(input)) {
    return new _constructor.Moment((0, _checkOverflow.default)(input));
  } else if ((0, _isDate.default)(input)) {
    config._d = input;
  } else if ((0, _isArray.default)(format)) {
    (0, _fromStringAndArray.configFromStringAndArray)(config);
  } else if (format) {
    (0, _fromStringAndFormat.configFromStringAndFormat)(config);
  } else {
    configFromInput(config);
  }

  if (!(0, _valid.isValid)(config)) {
    config._d = null;
  }

  return config;
}

function configFromInput(config) {
  var input = config._i;

  if ((0, _isUndefined.default)(input)) {
    config._d = new Date(_hooks.hooks.now());
  } else if ((0, _isDate.default)(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === 'string') {
    (0, _fromString.configFromString)(config);
  } else if ((0, _isArray.default)(input)) {
    config._a = (0, _map.default)(input.slice(0), function (obj) {
      return parseInt(obj, 10);
    });
    (0, _fromArray.configFromArray)(config);
  } else if ((0, _isObject.default)(input)) {
    (0, _fromObject.configFromObject)(config);
  } else if ((0, _isNumber.default)(input)) {
    // from milliseconds
    config._d = new Date(input);
  } else {
    _hooks.hooks.createFromInputFallback(config);
  }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
  var c = {};

  if (locale === true || locale === false) {
    strict = locale;
    locale = undefined;
  }

  if ((0, _isObject.default)(input) && (0, _isObjectEmpty.default)(input) || (0, _isArray.default)(input) && input.length === 0) {
    input = undefined;
  } // object construction must be done this way.
  // https://github.com/moment/moment/issues/1423


  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale;
  c._i = input;
  c._f = format;
  c._strict = strict;
  return createFromConfig(c);
}
},{"../utils/is-array":"node_modules/moment/src/lib/utils/is-array.js","../utils/is-object":"node_modules/moment/src/lib/utils/is-object.js","../utils/is-object-empty":"node_modules/moment/src/lib/utils/is-object-empty.js","../utils/is-undefined":"node_modules/moment/src/lib/utils/is-undefined.js","../utils/is-number":"node_modules/moment/src/lib/utils/is-number.js","../utils/is-date":"node_modules/moment/src/lib/utils/is-date.js","../utils/map":"node_modules/moment/src/lib/utils/map.js","./valid":"node_modules/moment/src/lib/create/valid.js","../moment/constructor":"node_modules/moment/src/lib/moment/constructor.js","../locale/locales":"node_modules/moment/src/lib/locale/locales.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./check-overflow":"node_modules/moment/src/lib/create/check-overflow.js","./from-string-and-array":"node_modules/moment/src/lib/create/from-string-and-array.js","./from-string-and-format":"node_modules/moment/src/lib/create/from-string-and-format.js","./from-string":"node_modules/moment/src/lib/create/from-string.js","./from-array":"node_modules/moment/src/lib/create/from-array.js","./from-object":"node_modules/moment/src/lib/create/from-object.js"}],"node_modules/moment/src/lib/create/local.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLocal = createLocal;

var _fromAnything = require("./from-anything");

function createLocal(input, format, locale, strict) {
  return (0, _fromAnything.createLocalOrUTC)(input, format, locale, strict, false);
}
},{"./from-anything":"node_modules/moment/src/lib/create/from-anything.js"}],"node_modules/moment/src/lib/moment/min-max.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = min;
exports.max = max;
exports.prototypeMax = exports.prototypeMin = void 0;

var _deprecate = require("../utils/deprecate");

var _isArray = _interopRequireDefault(require("../utils/is-array"));

var _local = require("../create/local");

var _valid = require("../create/valid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prototypeMin = (0, _deprecate.deprecate)('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  var other = _local.createLocal.apply(null, arguments);

  if (this.isValid() && other.isValid()) {
    return other < this ? this : other;
  } else {
    return (0, _valid.createInvalid)();
  }
});
exports.prototypeMin = prototypeMin;
var prototypeMax = (0, _deprecate.deprecate)('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
  var other = _local.createLocal.apply(null, arguments);

  if (this.isValid() && other.isValid()) {
    return other > this ? this : other;
  } else {
    return (0, _valid.createInvalid)();
  }
}); // Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.

exports.prototypeMax = prototypeMax;

function pickBy(fn, moments) {
  var res, i;

  if (moments.length === 1 && (0, _isArray.default)(moments[0])) {
    moments = moments[0];
  }

  if (!moments.length) {
    return (0, _local.createLocal)();
  }

  res = moments[0];

  for (i = 1; i < moments.length; ++i) {
    if (!moments[i].isValid() || moments[i][fn](res)) {
      res = moments[i];
    }
  }

  return res;
} // TODO: Use [].sort instead?


function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy('isBefore', args);
}

function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy('isAfter', args);
}
},{"../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js","../utils/is-array":"node_modules/moment/src/lib/utils/is-array.js","../create/local":"node_modules/moment/src/lib/create/local.js","../create/valid":"node_modules/moment/src/lib/create/valid.js"}],"node_modules/moment/src/lib/moment/now.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.now = void 0;

var now = function () {
  return Date.now ? Date.now() : +new Date();
};

exports.now = now;
},{}],"node_modules/moment/src/lib/duration/valid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDurationValid;
exports.isValid = isValid;
exports.createInvalid = createInvalid;

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _indexOf = _interopRequireDefault(require("../utils/index-of"));

var _constructor = require("./constructor");

var _create = require("./create");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
  for (var key in m) {
    if (!(_indexOf.default.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
      return false;
    }
  }

  var unitHasDecimal = false;

  for (var i = 0; i < ordering.length; ++i) {
    if (m[ordering[i]]) {
      if (unitHasDecimal) {
        return false; // only allow non-integers for smallest unit
      }

      if (parseFloat(m[ordering[i]]) !== (0, _toInt.default)(m[ordering[i]])) {
        unitHasDecimal = true;
      }
    }
  }

  return true;
}

function isValid() {
  return this._isValid;
}

function createInvalid() {
  return (0, _create.createDuration)(NaN);
}
},{"../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/index-of":"node_modules/moment/src/lib/utils/index-of.js","./constructor":"node_modules/moment/src/lib/duration/constructor.js","./create":"node_modules/moment/src/lib/duration/create.js"}],"node_modules/moment/src/lib/duration/constructor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Duration = Duration;
exports.isDuration = isDuration;

var _aliases = require("../units/aliases");

var _locales = require("../locale/locales");

var _valid = _interopRequireDefault(require("./valid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Duration(duration) {
  var normalizedInput = (0, _aliases.normalizeObjectUnits)(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;
  this._isValid = (0, _valid.default)(normalizedInput); // representation for dateAddRemove

  this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
  minutes * 6e4 + // 1000 * 60
  hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
  // Because of dateAddRemove treats 24 hours as different from a
  // day when working around DST, we need to store them separately

  this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
  // which months you are are talking about, so we have to store
  // it separately.

  this._months = +months + quarters * 3 + years * 12;
  this._data = {};
  this._locale = (0, _locales.getLocale)();

  this._bubble();
}

function isDuration(obj) {
  return obj instanceof Duration;
}
},{"../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../locale/locales":"node_modules/moment/src/lib/locale/locales.js","./valid.js":"node_modules/moment/src/lib/duration/valid.js"}],"node_modules/moment/src/lib/utils/abs-round.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = absRound;

function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
},{}],"node_modules/moment/src/lib/units/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneWithOffset = cloneWithOffset;
exports.getSetOffset = getSetOffset;
exports.getSetZone = getSetZone;
exports.setOffsetToUTC = setOffsetToUTC;
exports.setOffsetToLocal = setOffsetToLocal;
exports.setOffsetToParsedOffset = setOffsetToParsedOffset;
exports.hasAlignedHourOffset = hasAlignedHourOffset;
exports.isDaylightSavingTime = isDaylightSavingTime;
exports.isDaylightSavingTimeShifted = isDaylightSavingTimeShifted;
exports.isLocal = isLocal;
exports.isUtcOffset = isUtcOffset;
exports.isUtc = isUtc;

var _zeroFill = _interopRequireDefault(require("../utils/zero-fill"));

var _create = require("../duration/create");

var _addSubtract = require("../moment/add-subtract");

var _constructor = require("../moment/constructor");

var _format = require("../format/format");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _local = require("../create/local");

var _fromAnything = require("../create/from-anything");

var _utc = require("../create/utc");

var _isDate = _interopRequireDefault(require("../utils/is-date"));

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _isUndefined = _interopRequireDefault(require("../utils/is-undefined"));

var _compareArrays = _interopRequireDefault(require("../utils/compare-arrays"));

var _hooks = require("../utils/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
function offset(token, separator) {
  (0, _format.addFormatToken)(token, 0, 0, function () {
    var offset = this.utcOffset();
    var sign = '+';

    if (offset < 0) {
      offset = -offset;
      sign = '-';
    }

    return sign + (0, _zeroFill.default)(~~(offset / 60), 2) + separator + (0, _zeroFill.default)(~~offset % 60, 2);
  });
}

offset('Z', ':');
offset('ZZ', ''); // PARSING

(0, _regex.addRegexToken)('Z', _regex.matchShortOffset);
(0, _regex.addRegexToken)('ZZ', _regex.matchShortOffset);
(0, _token.addParseToken)(['Z', 'ZZ'], function (input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(_regex.matchShortOffset, input);
}); // HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']

var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
  var matches = (string || '').match(matcher);

  if (matches === null) {
    return null;
  }

  var chunk = matches[matches.length - 1] || [];
  var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
  var minutes = +(parts[1] * 60) + (0, _toInt.default)(parts[2]);
  return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
} // Return a moment from input, that is local/utc/zone equivalent to model.


function cloneWithOffset(input, model) {
  var res, diff;

  if (model._isUTC) {
    res = model.clone();
    diff = ((0, _constructor.isMoment)(input) || (0, _isDate.default)(input) ? input.valueOf() : (0, _local.createLocal)(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

    res._d.setTime(res._d.valueOf() + diff);

    _hooks.hooks.updateOffset(res, false);

    return res;
  } else {
    return (0, _local.createLocal)(input).local();
  }
}

function getDateOffset(m) {
  // On Firefox.24 Date#getTimezoneOffset returns a floating point.
  // https://github.com/moment/moment/pull/1871
  return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
} // HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.


_hooks.hooks.updateOffset = function () {}; // MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.


function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset = this._offset || 0,
      localAdjust;

  if (!this.isValid()) {
    return input != null ? this : NaN;
  }

  if (input != null) {
    if (typeof input === 'string') {
      input = offsetFromString(_regex.matchShortOffset, input);

      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }

    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }

    this._offset = input;
    this._isUTC = true;

    if (localAdjust != null) {
      this.add(localAdjust, 'm');
    }

    if (offset !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        (0, _addSubtract.addSubtract)(this, (0, _create.createDuration)(input - offset, 'm'), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;

        _hooks.hooks.updateOffset(this, true);

        this._changeInProgress = null;
      }
    }

    return this;
  } else {
    return this._isUTC ? offset : getDateOffset(this);
  }
}

function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== 'string') {
      input = -input;
    }

    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}

function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;

    if (keepLocalTime) {
      this.subtract(getDateOffset(this), 'm');
    }
  }

  return this;
}

function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === 'string') {
    var tZone = offsetFromString(_regex.matchOffset, this._i);

    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }

  return this;
}

function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }

  input = input ? (0, _local.createLocal)(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}

function isDaylightSavingTimeShifted() {
  if (!(0, _isUndefined.default)(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  var c = {};
  (0, _constructor.copyConfig)(c, this);
  c = (0, _fromAnything.prepareConfig)(c);

  if (c._a) {
    var other = c._isUTC ? (0, _utc.createUTC)(c._a) : (0, _local.createLocal)(c._a);
    this._isDSTShifted = this.isValid() && (0, _compareArrays.default)(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}

function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}

function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
},{"../utils/zero-fill":"node_modules/moment/src/lib/utils/zero-fill.js","../duration/create":"node_modules/moment/src/lib/duration/create.js","../moment/add-subtract":"node_modules/moment/src/lib/moment/add-subtract.js","../moment/constructor":"node_modules/moment/src/lib/moment/constructor.js","../format/format":"node_modules/moment/src/lib/format/format.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../create/local":"node_modules/moment/src/lib/create/local.js","../create/from-anything":"node_modules/moment/src/lib/create/from-anything.js","../create/utc":"node_modules/moment/src/lib/create/utc.js","../utils/is-date":"node_modules/moment/src/lib/utils/is-date.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/is-undefined":"node_modules/moment/src/lib/utils/is-undefined.js","../utils/compare-arrays":"node_modules/moment/src/lib/utils/compare-arrays.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js"}],"node_modules/moment/src/lib/duration/create.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDuration = createDuration;

var _constructor = require("./constructor");

var _isNumber = _interopRequireDefault(require("../utils/is-number"));

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _absRound = _interopRequireDefault(require("../utils/abs-round"));

var _hasOwnProp = _interopRequireDefault(require("../utils/has-own-prop"));

var _constants = require("../units/constants");

var _offset = require("../units/offset");

var _local = require("../create/local");

var _valid = require("./valid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day

var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
  var duration = input,
      // matching against regexp is expensive, do it on demand
  match = null,
      sign,
      ret,
      diffRes;

  if ((0, _constructor.isDuration)(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if ((0, _isNumber.default)(input)) {
    duration = {};

    if (key) {
      duration[key] = input;
    } else {
      duration.milliseconds = input;
    }
  } else if (!!(match = aspNetRegex.exec(input))) {
    sign = match[1] === '-' ? -1 : 1;
    duration = {
      y: 0,
      d: (0, _toInt.default)(match[_constants.DATE]) * sign,
      h: (0, _toInt.default)(match[_constants.HOUR]) * sign,
      m: (0, _toInt.default)(match[_constants.MINUTE]) * sign,
      s: (0, _toInt.default)(match[_constants.SECOND]) * sign,
      ms: (0, _toInt.default)((0, _absRound.default)(match[_constants.MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

    };
  } else if (!!(match = isoRegex.exec(input))) {
    sign = match[1] === '-' ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign),
      M: parseIso(match[3], sign),
      w: parseIso(match[4], sign),
      d: parseIso(match[5], sign),
      h: parseIso(match[6], sign),
      m: parseIso(match[7], sign),
      s: parseIso(match[8], sign)
    };
  } else if (duration == null) {
    // checks for null or undefined
    duration = {};
  } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
    diffRes = momentsDifference((0, _local.createLocal)(duration.from), (0, _local.createLocal)(duration.to));
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }

  ret = new _constructor.Duration(duration);

  if ((0, _constructor.isDuration)(input) && (0, _hasOwnProp.default)(input, '_locale')) {
    ret._locale = input._locale;
  }

  return ret;
}

createDuration.fn = _constructor.Duration.prototype;
createDuration.invalid = _valid.createInvalid;

function parseIso(inp, sign) {
  // We'd normally use ~~inp for this, but unfortunately it also
  // converts floats to ints.
  // inp may be undefined, so careful calling replace on it.
  var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

  return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

  if (base.clone().add(res.months, 'M').isAfter(other)) {
    --res.months;
  }

  res.milliseconds = +other - +base.clone().add(res.months, 'M');
  return res;
}

function momentsDifference(base, other) {
  var res;

  if (!(base.isValid() && other.isValid())) {
    return {
      milliseconds: 0,
      months: 0
    };
  }

  other = (0, _offset.cloneWithOffset)(other, base);

  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }

  return res;
}
},{"./constructor":"node_modules/moment/src/lib/duration/constructor.js","../utils/is-number":"node_modules/moment/src/lib/utils/is-number.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/abs-round":"node_modules/moment/src/lib/utils/abs-round.js","../utils/has-own-prop":"node_modules/moment/src/lib/utils/has-own-prop.js","../units/constants":"node_modules/moment/src/lib/units/constants.js","../units/offset":"node_modules/moment/src/lib/units/offset.js","../create/local":"node_modules/moment/src/lib/create/local.js","./valid":"node_modules/moment/src/lib/duration/valid.js"}],"node_modules/moment/src/lib/moment/add-subtract.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubtract = addSubtract;
exports.subtract = exports.add = void 0;

var _getSet = require("./get-set");

var _month = require("../units/month");

var _create = require("../duration/create");

var _deprecate = require("../utils/deprecate");

var _hooks = require("../utils/hooks");

var _absRound = _interopRequireDefault(require("../utils/abs-round"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
  return function (val, period) {
    var dur, tmp; //invert the arguments, but complain about it

    if (period !== null && !isNaN(+period)) {
      (0, _deprecate.deprecateSimple)(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
      tmp = val;
      val = period;
      period = tmp;
    }

    val = typeof val === 'string' ? +val : val;
    dur = (0, _create.createDuration)(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds = duration._milliseconds,
      days = (0, _absRound.default)(duration._days),
      months = (0, _absRound.default)(duration._months);

  if (!mom.isValid()) {
    // No op
    return;
  }

  updateOffset = updateOffset == null ? true : updateOffset;

  if (months) {
    (0, _month.setMonth)(mom, (0, _getSet.get)(mom, 'Month') + months * isAdding);
  }

  if (days) {
    (0, _getSet.set)(mom, 'Date', (0, _getSet.get)(mom, 'Date') + days * isAdding);
  }

  if (milliseconds) {
    mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
  }

  if (updateOffset) {
    _hooks.hooks.updateOffset(mom, days || months);
  }
}

var add = createAdder(1, 'add');
exports.add = add;
var subtract = createAdder(-1, 'subtract');
exports.subtract = subtract;
},{"./get-set":"node_modules/moment/src/lib/moment/get-set.js","../units/month":"node_modules/moment/src/lib/units/month.js","../duration/create":"node_modules/moment/src/lib/duration/create.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../utils/abs-round":"node_modules/moment/src/lib/utils/abs-round.js"}],"node_modules/moment/src/lib/moment/calendar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarFormat = getCalendarFormat;
exports.calendar = calendar;

var _local = require("../create/local");

var _offset = require("../units/offset");

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

var _hooks = require("../utils/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCalendarFormat(myMoment, now) {
  var diff = myMoment.diff(now, 'days', true);
  return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar(time, formats) {
  // We want to compare the start of today, vs this.
  // Getting start-of-today depends on whether we're local/utc/offset or not.
  var now = time || (0, _local.createLocal)(),
      sod = (0, _offset.cloneWithOffset)(now, this).startOf('day'),
      format = _hooks.hooks.calendarFormat(this, sod) || 'sameElse';
  var output = formats && ((0, _isFunction.default)(formats[format]) ? formats[format].call(this, now) : formats[format]);
  return this.format(output || this.localeData().calendar(format, this, (0, _local.createLocal)(now)));
}
},{"../create/local":"node_modules/moment/src/lib/create/local.js","../units/offset":"node_modules/moment/src/lib/units/offset.js","../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js"}],"node_modules/moment/src/lib/moment/clone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;

var _constructor = require("./constructor");

function clone() {
  return new _constructor.Moment(this);
}
},{"./constructor":"node_modules/moment/src/lib/moment/constructor.js"}],"node_modules/moment/src/lib/moment/compare.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isBetween = isBetween;
exports.isSame = isSame;
exports.isSameOrAfter = isSameOrAfter;
exports.isSameOrBefore = isSameOrBefore;

var _constructor = require("./constructor");

var _aliases = require("../units/aliases");

var _local = require("../create/local");

function isAfter(input, units) {
  var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input);

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = (0, _aliases.normalizeUnits)(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}

function isBefore(input, units) {
  var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input);

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = (0, _aliases.normalizeUnits)(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}

function isBetween(from, to, units, inclusivity) {
  var localFrom = (0, _constructor.isMoment)(from) ? from : (0, _local.createLocal)(from),
      localTo = (0, _constructor.isMoment)(to) ? to : (0, _local.createLocal)(to);

  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }

  inclusivity = inclusivity || '()';
  return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}

function isSame(input, units) {
  var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input),
      inputMs;

  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }

  units = (0, _aliases.normalizeUnits)(units) || 'millisecond';

  if (units === 'millisecond') {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}

function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
},{"./constructor":"node_modules/moment/src/lib/moment/constructor.js","../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../create/local":"node_modules/moment/src/lib/create/local.js"}],"node_modules/moment/src/lib/moment/diff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = diff;

var _absFloor = _interopRequireDefault(require("../utils/abs-floor"));

var _offset = require("../units/offset");

var _aliases = require("../units/aliases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function diff(input, units, asFloat) {
  var that, zoneDelta, delta, output;

  if (!this.isValid()) {
    return NaN;
  }

  that = (0, _offset.cloneWithOffset)(input, this);

  if (!that.isValid()) {
    return NaN;
  }

  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = (0, _aliases.normalizeUnits)(units);

  switch (units) {
    case 'year':
      output = monthDiff(this, that) / 12;
      break;

    case 'month':
      output = monthDiff(this, that);
      break;

    case 'quarter':
      output = monthDiff(this, that) / 3;
      break;

    case 'second':
      output = (this - that) / 1e3;
      break;
    // 1000

    case 'minute':
      output = (this - that) / 6e4;
      break;
    // 1000 * 60

    case 'hour':
      output = (this - that) / 36e5;
      break;
    // 1000 * 60 * 60

    case 'day':
      output = (this - that - zoneDelta) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst

    case 'week':
      output = (this - that - zoneDelta) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst

    default:
      output = this - that;
  }

  return asFloat ? output : (0, _absFloor.default)(output);
}

function monthDiff(a, b) {
  // difference in months
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
  anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2,
      adjust;

  if (b - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

    adjust = (b - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

    adjust = (b - anchor) / (anchor2 - anchor);
  } //check for negative zero, return zero if negative zero


  return -(wholeMonthDiff + adjust) || 0;
}
},{"../utils/abs-floor":"node_modules/moment/src/lib/utils/abs-floor.js","../units/offset":"node_modules/moment/src/lib/units/offset.js","../units/aliases":"node_modules/moment/src/lib/units/aliases.js"}],"node_modules/moment/src/lib/moment/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toString = toString;
exports.toISOString = toISOString;
exports.inspect = inspect;
exports.format = format;

var _format = require("../format/format");

var _hooks = require("../utils/hooks");

var _isFunction = _interopRequireDefault(require("../utils/is-function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_hooks.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_hooks.hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
  return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }

  var utc = keepOffset !== true;
  var m = utc ? this.clone().utc() : this;

  if (m.year() < 0 || m.year() > 9999) {
    return (0, _format.formatMoment)(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
  }

  if ((0, _isFunction.default)(Date.prototype.toISOString)) {
    // native implementation is ~50x faster, use it when we can
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', (0, _format.formatMoment)(m, 'Z'));
    }
  }

  return (0, _format.formatMoment)(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}
/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */


function inspect() {
  if (!this.isValid()) {
    return 'moment.invalid(/* ' + this._i + ' */)';
  }

  var func = 'moment';
  var zone = '';

  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
    zone = 'Z';
  }

  var prefix = '[' + func + '("]';
  var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
  var datetime = '-MM-DD[T]HH:mm:ss.SSS';
  var suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? _hooks.hooks.defaultFormatUtc : _hooks.hooks.defaultFormat;
  }

  var output = (0, _format.formatMoment)(this, inputString);
  return this.localeData().postformat(output);
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../utils/is-function":"node_modules/moment/src/lib/utils/is-function.js"}],"node_modules/moment/src/lib/moment/from.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = from;
exports.fromNow = fromNow;

var _create = require("../duration/create");

var _local = require("../create/local");

var _constructor = require("../moment/constructor");

function from(time, withoutSuffix) {
  if (this.isValid() && ((0, _constructor.isMoment)(time) && time.isValid() || (0, _local.createLocal)(time).isValid())) {
    return (0, _create.createDuration)({
      to: this,
      from: time
    }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}

function fromNow(withoutSuffix) {
  return this.from((0, _local.createLocal)(), withoutSuffix);
}
},{"../duration/create":"node_modules/moment/src/lib/duration/create.js","../create/local":"node_modules/moment/src/lib/create/local.js","../moment/constructor":"node_modules/moment/src/lib/moment/constructor.js"}],"node_modules/moment/src/lib/moment/to.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.to = to;
exports.toNow = toNow;

var _create = require("../duration/create");

var _local = require("../create/local");

var _constructor = require("../moment/constructor");

function to(time, withoutSuffix) {
  if (this.isValid() && ((0, _constructor.isMoment)(time) && time.isValid() || (0, _local.createLocal)(time).isValid())) {
    return (0, _create.createDuration)({
      from: this,
      to: time
    }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}

function toNow(withoutSuffix) {
  return this.to((0, _local.createLocal)(), withoutSuffix);
}
},{"../duration/create":"node_modules/moment/src/lib/duration/create.js","../create/local":"node_modules/moment/src/lib/create/local.js","../moment/constructor":"node_modules/moment/src/lib/moment/constructor.js"}],"node_modules/moment/src/lib/moment/locale.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locale = locale;
exports.localeData = localeData;
exports.lang = void 0;

var _locales = require("../locale/locales");

var _deprecate = require("../utils/deprecate");

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
  var newLocaleData;

  if (key === undefined) {
    return this._locale._abbr;
  } else {
    newLocaleData = (0, _locales.getLocale)(key);

    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }

    return this;
  }
}

var lang = (0, _deprecate.deprecate)('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
  if (key === undefined) {
    return this.localeData();
  } else {
    return this.locale(key);
  }
});
exports.lang = lang;

function localeData() {
  return this._locale;
}
},{"../locale/locales":"node_modules/moment/src/lib/locale/locales.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js"}],"node_modules/moment/src/lib/moment/start-end-of.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startOf = startOf;
exports.endOf = endOf;

var _aliases = require("../units/aliases");

var _hooks = require("../utils/hooks");

var MS_PER_SECOND = 1000;
var MS_PER_MINUTE = 60 * MS_PER_SECOND;
var MS_PER_HOUR = 60 * MS_PER_MINUTE;
var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

function mod(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
  // the date constructor remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    return new Date(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return new Date(y, m, d).valueOf();
  }
}

function utcStartOfDate(y, m, d) {
  // Date.UTC remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y, m, d);
  }
}

function startOf(units) {
  var time;
  units = (0, _aliases.normalizeUnits)(units);

  if (units === undefined || units === 'millisecond' || !this.isValid()) {
    return this;
  }

  var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

  switch (units) {
    case 'year':
      time = startOfDate(this.year(), 0, 1);
      break;

    case 'quarter':
      time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
      break;

    case 'month':
      time = startOfDate(this.year(), this.month(), 1);
      break;

    case 'week':
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
      break;

    case 'isoWeek':
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;

    case 'day':
    case 'date':
      time = startOfDate(this.year(), this.month(), this.date());
      break;

    case 'hour':
      time = this._d.valueOf();
      time -= mod(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
      break;

    case 'minute':
      time = this._d.valueOf();
      time -= mod(time, MS_PER_MINUTE);
      break;

    case 'second':
      time = this._d.valueOf();
      time -= mod(time, MS_PER_SECOND);
      break;
  }

  this._d.setTime(time);

  _hooks.hooks.updateOffset(this, true);

  return this;
}

function endOf(units) {
  var time;
  units = (0, _aliases.normalizeUnits)(units);

  if (units === undefined || units === 'millisecond' || !this.isValid()) {
    return this;
  }

  var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

  switch (units) {
    case 'year':
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;

    case 'quarter':
      time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;

    case 'month':
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;

    case 'week':
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;

    case 'isoWeek':
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;

    case 'day':
    case 'date':
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;

    case 'hour':
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
      break;

    case 'minute':
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
      break;

    case 'second':
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
      break;
  }

  this._d.setTime(time);

  _hooks.hooks.updateOffset(this, true);

  return this;
}
},{"../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js"}],"node_modules/moment/src/lib/moment/to-type.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueOf = valueOf;
exports.unix = unix;
exports.toDate = toDate;
exports.toArray = toArray;
exports.toObject = toObject;
exports.toJSON = toJSON;

function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
  return Math.floor(this.valueOf() / 1000);
}

function toDate() {
  return new Date(this.valueOf());
}

function toArray() {
  var m = this;
  return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject() {
  var m = this;
  return {
    years: m.year(),
    months: m.month(),
    date: m.date(),
    hours: m.hours(),
    minutes: m.minutes(),
    seconds: m.seconds(),
    milliseconds: m.milliseconds()
  };
}

function toJSON() {
  // new Date(NaN).toJSON() === null
  return this.isValid() ? this.toISOString() : null;
}
},{}],"node_modules/moment/src/lib/moment/valid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = isValid;
exports.parsingFlags = parsingFlags;
exports.invalidAt = invalidAt;

var _valid = require("../create/valid");

var _extend = _interopRequireDefault(require("../utils/extend"));

var _parsingFlags = _interopRequireDefault(require("../create/parsing-flags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValid() {
  return (0, _valid.isValid)(this);
}

function parsingFlags() {
  return (0, _extend.default)({}, (0, _parsingFlags.default)(this));
}

function invalidAt() {
  return (0, _parsingFlags.default)(this).overflow;
}
},{"../create/valid":"node_modules/moment/src/lib/create/valid.js","../utils/extend":"node_modules/moment/src/lib/utils/extend.js","../create/parsing-flags":"node_modules/moment/src/lib/create/parsing-flags.js"}],"node_modules/moment/src/lib/moment/creation-data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creationData = creationData;

function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
},{}],"node_modules/moment/src/lib/units/week-year.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetWeekYear = getSetWeekYear;
exports.getSetISOWeekYear = getSetISOWeekYear;
exports.getISOWeeksInYear = getISOWeeksInYear;
exports.getWeeksInYear = getWeeksInYear;

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _weekCalendarUtils = require("./week-calendar-utils");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

var _hooks = require("../utils/hooks");

var _local = require("../create/local");

var _dateFromArray = require("../create/date-from-array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)(0, ['gg', 2], 0, function () {
  return this.weekYear() % 100;
});
(0, _format.addFormatToken)(0, ['GG', 2], 0, function () {
  return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
  (0, _format.addFormatToken)(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

(0, _aliases.addUnitAlias)('weekYear', 'gg');
(0, _aliases.addUnitAlias)('isoWeekYear', 'GG'); // PRIORITY

(0, _priorities.addUnitPriority)('weekYear', 1);
(0, _priorities.addUnitPriority)('isoWeekYear', 1); // PARSING

(0, _regex.addRegexToken)('G', _regex.matchSigned);
(0, _regex.addRegexToken)('g', _regex.matchSigned);
(0, _regex.addRegexToken)('GG', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('gg', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('GGGG', _regex.match1to4, _regex.match4);
(0, _regex.addRegexToken)('gggg', _regex.match1to4, _regex.match4);
(0, _regex.addRegexToken)('GGGGG', _regex.match1to6, _regex.match6);
(0, _regex.addRegexToken)('ggggg', _regex.match1to6, _regex.match6);
(0, _token.addWeekParseToken)(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
  week[token.substr(0, 2)] = (0, _toInt.default)(input);
});
(0, _token.addWeekParseToken)(['gg', 'GG'], function (input, week, config, token) {
  week[token] = _hooks.hooks.parseTwoDigitYear(input);
}); // MOMENTS

function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}

function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear() {
  return (0, _weekCalendarUtils.weeksInYear)(this.year(), 1, 4);
}

function getWeeksInYear() {
  var weekInfo = this.localeData()._week;

  return (0, _weekCalendarUtils.weeksInYear)(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;

  if (input == null) {
    return (0, _weekCalendarUtils.weekOfYear)(this, dow, doy).year;
  } else {
    weeksTarget = (0, _weekCalendarUtils.weeksInYear)(input, dow, doy);

    if (week > weeksTarget) {
      week = weeksTarget;
    }

    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = (0, _weekCalendarUtils.dayOfYearFromWeeks)(weekYear, week, weekday, dow, doy),
      date = (0, _dateFromArray.createUTCDate)(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./week-calendar-utils":"node_modules/moment/src/lib/units/week-calendar-utils.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","../create/local":"node_modules/moment/src/lib/create/local.js","../create/date-from-array":"node_modules/moment/src/lib/create/date-from-array.js"}],"node_modules/moment/src/lib/units/quarter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetQuarter = getSetQuarter;

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('Q', 0, 'Qo', 'quarter'); // ALIASES

(0, _aliases.addUnitAlias)('quarter', 'Q'); // PRIORITY

(0, _priorities.addUnitPriority)('quarter', 7); // PARSING

(0, _regex.addRegexToken)('Q', _regex.match1);
(0, _token.addParseToken)('Q', function (input, array) {
  array[_constants.MONTH] = ((0, _toInt.default)(input) - 1) * 3;
}); // MOMENTS

function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/day-of-month.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetDayOfMonth = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('D', ['DD', 2], 'Do', 'date'); // ALIASES

(0, _aliases.addUnitAlias)('date', 'D'); // PRIORITY

(0, _priorities.addUnitPriority)('date', 9); // PARSING

(0, _regex.addRegexToken)('D', _regex.match1to2);
(0, _regex.addRegexToken)('DD', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('Do', function (isStrict, locale) {
  // TODO: Remove "ordinalParse" fallback in next major release.
  return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
});
(0, _token.addParseToken)(['D', 'DD'], _constants.DATE);
(0, _token.addParseToken)('Do', function (input, array) {
  array[_constants.DATE] = (0, _toInt.default)(input.match(_regex.match1to2)[0]);
}); // MOMENTS

var getSetDayOfMonth = (0, _getSet.makeGetSet)('Date', true);
exports.getSetDayOfMonth = getSetDayOfMonth;
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/day-of-year.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetDayOfYear = getSetDayOfYear;

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _year = require("./year");

var _dateFromArray = require("../create/date-from-array");

var _token = require("../parse/token");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

(0, _aliases.addUnitAlias)('dayOfYear', 'DDD'); // PRIORITY

(0, _priorities.addUnitPriority)('dayOfYear', 4); // PARSING

(0, _regex.addRegexToken)('DDD', _regex.match1to3);
(0, _regex.addRegexToken)('DDDD', _regex.match3);
(0, _token.addParseToken)(['DDD', 'DDDD'], function (input, array, config) {
  config._dayOfYear = (0, _toInt.default)(input);
}); // HELPERS
// MOMENTS

function getSetDayOfYear(input) {
  var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","./year":"node_modules/moment/src/lib/units/year.js","../create/date-from-array":"node_modules/moment/src/lib/create/date-from-array.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/minute.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetMinute = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

// FORMATTING
(0, _format.addFormatToken)('m', ['mm', 2], 0, 'minute'); // ALIASES

(0, _aliases.addUnitAlias)('minute', 'm'); // PRIORITY

(0, _priorities.addUnitPriority)('minute', 14); // PARSING

(0, _regex.addRegexToken)('m', _regex.match1to2);
(0, _regex.addRegexToken)('mm', _regex.match1to2, _regex.match2);
(0, _token.addParseToken)(['m', 'mm'], _constants.MINUTE); // MOMENTS

var getSetMinute = (0, _getSet.makeGetSet)('Minutes', false);
exports.getSetMinute = getSetMinute;
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js"}],"node_modules/moment/src/lib/units/second.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetSecond = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

// FORMATTING
(0, _format.addFormatToken)('s', ['ss', 2], 0, 'second'); // ALIASES

(0, _aliases.addUnitAlias)('second', 's'); // PRIORITY

(0, _priorities.addUnitPriority)('second', 15); // PARSING

(0, _regex.addRegexToken)('s', _regex.match1to2);
(0, _regex.addRegexToken)('ss', _regex.match1to2, _regex.match2);
(0, _token.addParseToken)(['s', 'ss'], _constants.SECOND); // MOMENTS

var getSetSecond = (0, _getSet.makeGetSet)('Seconds', false);
exports.getSetSecond = getSetSecond;
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js"}],"node_modules/moment/src/lib/units/millisecond.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetMillisecond = void 0;

var _getSet = require("../moment/get-set");

var _format = require("../format/format");

var _aliases = require("./aliases");

var _priorities = require("./priorities");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _constants = require("./constants");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('S', 0, 0, function () {
  return ~~(this.millisecond() / 100);
});
(0, _format.addFormatToken)(0, ['SS', 2], 0, function () {
  return ~~(this.millisecond() / 10);
});
(0, _format.addFormatToken)(0, ['SSS', 3], 0, 'millisecond');
(0, _format.addFormatToken)(0, ['SSSS', 4], 0, function () {
  return this.millisecond() * 10;
});
(0, _format.addFormatToken)(0, ['SSSSS', 5], 0, function () {
  return this.millisecond() * 100;
});
(0, _format.addFormatToken)(0, ['SSSSSS', 6], 0, function () {
  return this.millisecond() * 1000;
});
(0, _format.addFormatToken)(0, ['SSSSSSS', 7], 0, function () {
  return this.millisecond() * 10000;
});
(0, _format.addFormatToken)(0, ['SSSSSSSS', 8], 0, function () {
  return this.millisecond() * 100000;
});
(0, _format.addFormatToken)(0, ['SSSSSSSSS', 9], 0, function () {
  return this.millisecond() * 1000000;
}); // ALIASES

(0, _aliases.addUnitAlias)('millisecond', 'ms'); // PRIORITY

(0, _priorities.addUnitPriority)('millisecond', 16); // PARSING

(0, _regex.addRegexToken)('S', _regex.match1to3, _regex.match1);
(0, _regex.addRegexToken)('SS', _regex.match1to3, _regex.match2);
(0, _regex.addRegexToken)('SSS', _regex.match1to3, _regex.match3);
var token;

for (token = 'SSSS'; token.length <= 9; token += 'S') {
  (0, _regex.addRegexToken)(token, _regex.matchUnsigned);
}

function parseMs(input, array) {
  array[_constants.MILLISECOND] = (0, _toInt.default)(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
  (0, _token.addParseToken)(token, parseMs);
} // MOMENTS


var getSetMillisecond = (0, _getSet.makeGetSet)('Milliseconds', false);
exports.getSetMillisecond = getSetMillisecond;
},{"../moment/get-set":"node_modules/moment/src/lib/moment/get-set.js","../format/format":"node_modules/moment/src/lib/format/format.js","./aliases":"node_modules/moment/src/lib/units/aliases.js","./priorities":"node_modules/moment/src/lib/units/priorities.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","./constants":"node_modules/moment/src/lib/units/constants.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/timezone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getZoneAbbr = getZoneAbbr;
exports.getZoneName = getZoneName;

var _format = require("../format/format");

// FORMATTING
(0, _format.addFormatToken)('z', 0, 0, 'zoneAbbr');
(0, _format.addFormatToken)('zz', 0, 0, 'zoneName'); // MOMENTS

function getZoneAbbr() {
  return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
  return this._isUTC ? 'Coordinated Universal Time' : '';
}
},{"../format/format":"node_modules/moment/src/lib/format/format.js"}],"node_modules/moment/src/lib/moment/prototype.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constructor = require("./constructor");

var _addSubtract = require("./add-subtract");

var _calendar = require("./calendar");

var _clone = require("./clone");

var _compare = require("./compare");

var _diff = require("./diff");

var _format = require("./format");

var _from = require("./from");

var _to = require("./to");

var _getSet = require("./get-set");

var _locale = require("./locale");

var _minMax = require("./min-max");

var _startEndOf = require("./start-end-of");

var _toType = require("./to-type");

var _valid = require("./valid");

var _creationData = require("./creation-data");

var _year = require("../units/year");

var _weekYear = require("../units/week-year");

var _quarter = require("../units/quarter");

var _month = require("../units/month");

var _week = require("../units/week");

var _dayOfMonth = require("../units/day-of-month");

var _dayOfWeek = require("../units/day-of-week");

var _dayOfYear = require("../units/day-of-year");

var _hour = require("../units/hour");

var _minute = require("../units/minute");

var _second = require("../units/second");

var _millisecond = require("../units/millisecond");

var _offset = require("../units/offset");

var _timezone = require("../units/timezone");

var _deprecate = require("../utils/deprecate");

var proto = _constructor.Moment.prototype;
proto.add = _addSubtract.add;
proto.calendar = _calendar.calendar;
proto.clone = _clone.clone;
proto.diff = _diff.diff;
proto.endOf = _startEndOf.endOf;
proto.format = _format.format;
proto.from = _from.from;
proto.fromNow = _from.fromNow;
proto.to = _to.to;
proto.toNow = _to.toNow;
proto.get = _getSet.stringGet;
proto.invalidAt = _valid.invalidAt;
proto.isAfter = _compare.isAfter;
proto.isBefore = _compare.isBefore;
proto.isBetween = _compare.isBetween;
proto.isSame = _compare.isSame;
proto.isSameOrAfter = _compare.isSameOrAfter;
proto.isSameOrBefore = _compare.isSameOrBefore;
proto.isValid = _valid.isValid;
proto.lang = _locale.lang;
proto.locale = _locale.locale;
proto.localeData = _locale.localeData;
proto.max = _minMax.prototypeMax;
proto.min = _minMax.prototypeMin;
proto.parsingFlags = _valid.parsingFlags;
proto.set = _getSet.stringSet;
proto.startOf = _startEndOf.startOf;
proto.subtract = _addSubtract.subtract;
proto.toArray = _toType.toArray;
proto.toObject = _toType.toObject;
proto.toDate = _toType.toDate;
proto.toISOString = _format.toISOString;
proto.inspect = _format.inspect;
proto.toJSON = _toType.toJSON;
proto.toString = _format.toString;
proto.unix = _toType.unix;
proto.valueOf = _toType.valueOf;
proto.creationData = _creationData.creationData; // Year

proto.year = _year.getSetYear;
proto.isLeapYear = _year.getIsLeapYear; // Week Year

proto.weekYear = _weekYear.getSetWeekYear;
proto.isoWeekYear = _weekYear.getSetISOWeekYear; // Quarter

proto.quarter = proto.quarters = _quarter.getSetQuarter; // Month

proto.month = _month.getSetMonth;
proto.daysInMonth = _month.getDaysInMonth; // Week

proto.week = proto.weeks = _week.getSetWeek;
proto.isoWeek = proto.isoWeeks = _week.getSetISOWeek;
proto.weeksInYear = _weekYear.getWeeksInYear;
proto.isoWeeksInYear = _weekYear.getISOWeeksInYear; // Day

proto.date = _dayOfMonth.getSetDayOfMonth;
proto.day = proto.days = _dayOfWeek.getSetDayOfWeek;
proto.weekday = _dayOfWeek.getSetLocaleDayOfWeek;
proto.isoWeekday = _dayOfWeek.getSetISODayOfWeek;
proto.dayOfYear = _dayOfYear.getSetDayOfYear; // Hour

proto.hour = proto.hours = _hour.getSetHour; // Minute

proto.minute = proto.minutes = _minute.getSetMinute; // Second

proto.second = proto.seconds = _second.getSetSecond; // Millisecond

proto.millisecond = proto.milliseconds = _millisecond.getSetMillisecond; // Offset

proto.utcOffset = _offset.getSetOffset;
proto.utc = _offset.setOffsetToUTC;
proto.local = _offset.setOffsetToLocal;
proto.parseZone = _offset.setOffsetToParsedOffset;
proto.hasAlignedHourOffset = _offset.hasAlignedHourOffset;
proto.isDST = _offset.isDaylightSavingTime;
proto.isLocal = _offset.isLocal;
proto.isUtcOffset = _offset.isUtcOffset;
proto.isUtc = _offset.isUtc;
proto.isUTC = _offset.isUtc; // Timezone

proto.zoneAbbr = _timezone.getZoneAbbr;
proto.zoneName = _timezone.getZoneName; // Deprecations

proto.dates = (0, _deprecate.deprecate)('dates accessor is deprecated. Use date instead.', _dayOfMonth.getSetDayOfMonth);
proto.months = (0, _deprecate.deprecate)('months accessor is deprecated. Use month instead', _month.getSetMonth);
proto.years = (0, _deprecate.deprecate)('years accessor is deprecated. Use year instead', _year.getSetYear);
proto.zone = (0, _deprecate.deprecate)('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', _offset.getSetZone);
proto.isDSTShifted = (0, _deprecate.deprecate)('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', _offset.isDaylightSavingTimeShifted);
var _default = proto;
exports.default = _default;
},{"./constructor":"node_modules/moment/src/lib/moment/constructor.js","./add-subtract":"node_modules/moment/src/lib/moment/add-subtract.js","./calendar":"node_modules/moment/src/lib/moment/calendar.js","./clone":"node_modules/moment/src/lib/moment/clone.js","./compare":"node_modules/moment/src/lib/moment/compare.js","./diff":"node_modules/moment/src/lib/moment/diff.js","./format":"node_modules/moment/src/lib/moment/format.js","./from":"node_modules/moment/src/lib/moment/from.js","./to":"node_modules/moment/src/lib/moment/to.js","./get-set":"node_modules/moment/src/lib/moment/get-set.js","./locale":"node_modules/moment/src/lib/moment/locale.js","./min-max":"node_modules/moment/src/lib/moment/min-max.js","./start-end-of":"node_modules/moment/src/lib/moment/start-end-of.js","./to-type":"node_modules/moment/src/lib/moment/to-type.js","./valid":"node_modules/moment/src/lib/moment/valid.js","./creation-data":"node_modules/moment/src/lib/moment/creation-data.js","../units/year":"node_modules/moment/src/lib/units/year.js","../units/week-year":"node_modules/moment/src/lib/units/week-year.js","../units/quarter":"node_modules/moment/src/lib/units/quarter.js","../units/month":"node_modules/moment/src/lib/units/month.js","../units/week":"node_modules/moment/src/lib/units/week.js","../units/day-of-month":"node_modules/moment/src/lib/units/day-of-month.js","../units/day-of-week":"node_modules/moment/src/lib/units/day-of-week.js","../units/day-of-year":"node_modules/moment/src/lib/units/day-of-year.js","../units/hour":"node_modules/moment/src/lib/units/hour.js","../units/minute":"node_modules/moment/src/lib/units/minute.js","../units/second":"node_modules/moment/src/lib/units/second.js","../units/millisecond":"node_modules/moment/src/lib/units/millisecond.js","../units/offset":"node_modules/moment/src/lib/units/offset.js","../units/timezone":"node_modules/moment/src/lib/units/timezone.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js"}],"node_modules/moment/src/lib/moment/moment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnix = createUnix;
exports.createInZone = createInZone;
Object.defineProperty(exports, "createLocal", {
  enumerable: true,
  get: function () {
    return _local.createLocal;
  }
});
Object.defineProperty(exports, "createUTC", {
  enumerable: true,
  get: function () {
    return _utc.createUTC;
  }
});
Object.defineProperty(exports, "createInvalid", {
  enumerable: true,
  get: function () {
    return _valid.createInvalid;
  }
});
Object.defineProperty(exports, "isMoment", {
  enumerable: true,
  get: function () {
    return _constructor.isMoment;
  }
});
Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function () {
    return _minMax.min;
  }
});
Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function () {
    return _minMax.max;
  }
});
Object.defineProperty(exports, "now", {
  enumerable: true,
  get: function () {
    return _now.now;
  }
});
Object.defineProperty(exports, "momentPrototype", {
  enumerable: true,
  get: function () {
    return _prototype.default;
  }
});

var _local = require("../create/local");

var _utc = require("../create/utc");

var _valid = require("../create/valid");

var _constructor = require("./constructor");

var _minMax = require("./min-max");

var _now = require("./now");

var _prototype = _interopRequireDefault(require("./prototype"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUnix(input) {
  return (0, _local.createLocal)(input * 1000);
}

function createInZone() {
  return _local.createLocal.apply(null, arguments).parseZone();
}
},{"../create/local":"node_modules/moment/src/lib/create/local.js","../create/utc":"node_modules/moment/src/lib/create/utc.js","../create/valid":"node_modules/moment/src/lib/create/valid.js","./constructor":"node_modules/moment/src/lib/moment/constructor.js","./min-max":"node_modules/moment/src/lib/moment/min-max.js","./now":"node_modules/moment/src/lib/moment/now.js","./prototype":"node_modules/moment/src/lib/moment/prototype.js"}],"node_modules/moment/src/lib/locale/pre-post-format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preParsePostFormat = preParsePostFormat;

function preParsePostFormat(string) {
  return string;
}
},{}],"node_modules/moment/src/lib/locale/prototype.js":[function(require,module,exports) {
"use strict";

var _constructor = require("./constructor");

var _calendar = require("./calendar");

var _formats = require("./formats");

var _invalid = require("./invalid");

var _ordinal = require("./ordinal");

var _prePostFormat = require("./pre-post-format");

var _relative = require("./relative");

var _set = require("./set");

var _month = require("../units/month");

var _week = require("../units/week");

var _dayOfWeek = require("../units/day-of-week");

var _hour = require("../units/hour");

var proto = _constructor.Locale.prototype;
proto.calendar = _calendar.calendar;
proto.longDateFormat = _formats.longDateFormat;
proto.invalidDate = _invalid.invalidDate;
proto.ordinal = _ordinal.ordinal;
proto.preparse = _prePostFormat.preParsePostFormat;
proto.postformat = _prePostFormat.preParsePostFormat;
proto.relativeTime = _relative.relativeTime;
proto.pastFuture = _relative.pastFuture;
proto.set = _set.set; // Month

proto.months = _month.localeMonths;
proto.monthsShort = _month.localeMonthsShort;
proto.monthsParse = _month.localeMonthsParse;
proto.monthsRegex = _month.monthsRegex;
proto.monthsShortRegex = _month.monthsShortRegex; // Week

proto.week = _week.localeWeek;
proto.firstDayOfYear = _week.localeFirstDayOfYear;
proto.firstDayOfWeek = _week.localeFirstDayOfWeek; // Day of Week

proto.weekdays = _dayOfWeek.localeWeekdays;
proto.weekdaysMin = _dayOfWeek.localeWeekdaysMin;
proto.weekdaysShort = _dayOfWeek.localeWeekdaysShort;
proto.weekdaysParse = _dayOfWeek.localeWeekdaysParse;
proto.weekdaysRegex = _dayOfWeek.weekdaysRegex;
proto.weekdaysShortRegex = _dayOfWeek.weekdaysShortRegex;
proto.weekdaysMinRegex = _dayOfWeek.weekdaysMinRegex; // Hours

proto.isPM = _hour.localeIsPM;
proto.meridiem = _hour.localeMeridiem;
},{"./constructor":"node_modules/moment/src/lib/locale/constructor.js","./calendar":"node_modules/moment/src/lib/locale/calendar.js","./formats":"node_modules/moment/src/lib/locale/formats.js","./invalid":"node_modules/moment/src/lib/locale/invalid.js","./ordinal":"node_modules/moment/src/lib/locale/ordinal.js","./pre-post-format":"node_modules/moment/src/lib/locale/pre-post-format.js","./relative":"node_modules/moment/src/lib/locale/relative.js","./set":"node_modules/moment/src/lib/locale/set.js","../units/month":"node_modules/moment/src/lib/units/month.js","../units/week":"node_modules/moment/src/lib/units/week.js","../units/day-of-week":"node_modules/moment/src/lib/units/day-of-week.js","../units/hour":"node_modules/moment/src/lib/units/hour.js"}],"node_modules/moment/src/lib/locale/lists.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listMonths = listMonths;
exports.listMonthsShort = listMonthsShort;
exports.listWeekdays = listWeekdays;
exports.listWeekdaysShort = listWeekdaysShort;
exports.listWeekdaysMin = listWeekdaysMin;

var _isNumber = _interopRequireDefault(require("../utils/is-number"));

var _locales = require("./locales");

var _utc = require("../create/utc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(format, index, field, setter) {
  var locale = (0, _locales.getLocale)();
  var utc = (0, _utc.createUTC)().set(setter, index);
  return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
  if ((0, _isNumber.default)(format)) {
    index = format;
    format = undefined;
  }

  format = format || '';

  if (index != null) {
    return get(format, index, field, 'month');
  }

  var i;
  var out = [];

  for (i = 0; i < 12; i++) {
    out[i] = get(format, i, field, 'month');
  }

  return out;
} // ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)


function listWeekdaysImpl(localeSorted, format, index, field) {
  if (typeof localeSorted === 'boolean') {
    if ((0, _isNumber.default)(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';
  } else {
    format = localeSorted;
    index = format;
    localeSorted = false;

    if ((0, _isNumber.default)(format)) {
      index = format;
      format = undefined;
    }

    format = format || '';
  }

  var locale = (0, _locales.getLocale)(),
      shift = localeSorted ? locale._week.dow : 0;

  if (index != null) {
    return get(format, (index + shift) % 7, field, 'day');
  }

  var i;
  var out = [];

  for (i = 0; i < 7; i++) {
    out[i] = get(format, (i + shift) % 7, field, 'day');
  }

  return out;
}

function listMonths(format, index) {
  return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
  return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}
},{"../utils/is-number":"node_modules/moment/src/lib/utils/is-number.js","./locales":"node_modules/moment/src/lib/locale/locales.js","../create/utc":"node_modules/moment/src/lib/create/utc.js"}],"node_modules/moment/src/lib/locale/en.js":[function(require,module,exports) {
"use strict";

require("./prototype");

var _locales = require("./locales");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _locales.getSetGlobalLocale)('en', {
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function (number) {
    var b = number % 10,
        output = (0, _toInt.default)(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
    return number + output;
  }
});
},{"./prototype":"node_modules/moment/src/lib/locale/prototype.js","./locales":"node_modules/moment/src/lib/locale/locales.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/locale/locale.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getSetGlobalLocale", {
  enumerable: true,
  get: function () {
    return _locales.getSetGlobalLocale;
  }
});
Object.defineProperty(exports, "defineLocale", {
  enumerable: true,
  get: function () {
    return _locales.defineLocale;
  }
});
Object.defineProperty(exports, "updateLocale", {
  enumerable: true,
  get: function () {
    return _locales.updateLocale;
  }
});
Object.defineProperty(exports, "getLocale", {
  enumerable: true,
  get: function () {
    return _locales.getLocale;
  }
});
Object.defineProperty(exports, "listLocales", {
  enumerable: true,
  get: function () {
    return _locales.listLocales;
  }
});
Object.defineProperty(exports, "listMonths", {
  enumerable: true,
  get: function () {
    return _lists.listMonths;
  }
});
Object.defineProperty(exports, "listMonthsShort", {
  enumerable: true,
  get: function () {
    return _lists.listMonthsShort;
  }
});
Object.defineProperty(exports, "listWeekdays", {
  enumerable: true,
  get: function () {
    return _lists.listWeekdays;
  }
});
Object.defineProperty(exports, "listWeekdaysShort", {
  enumerable: true,
  get: function () {
    return _lists.listWeekdaysShort;
  }
});
Object.defineProperty(exports, "listWeekdaysMin", {
  enumerable: true,
  get: function () {
    return _lists.listWeekdaysMin;
  }
});

require("./prototype");

var _locales = require("./locales");

var _lists = require("./lists");

var _deprecate = require("../utils/deprecate");

var _hooks = require("../utils/hooks");

require("./en");

// Side effect imports
_hooks.hooks.lang = (0, _deprecate.deprecate)('moment.lang is deprecated. Use moment.locale instead.', _locales.getSetGlobalLocale);
_hooks.hooks.langData = (0, _deprecate.deprecate)('moment.langData is deprecated. Use moment.localeData instead.', _locales.getLocale);
},{"./prototype":"node_modules/moment/src/lib/locale/prototype.js","./locales":"node_modules/moment/src/lib/locale/locales.js","./lists":"node_modules/moment/src/lib/locale/lists.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js","../utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./en":"node_modules/moment/src/lib/locale/en.js"}],"node_modules/moment/src/lib/duration/abs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abs = abs;
var mathAbs = Math.abs;

function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
},{}],"node_modules/moment/src/lib/duration/add-subtract.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.subtract = subtract;

var _create = require("./create");

function addSubtract(duration, input, value, direction) {
  var other = (0, _create.createDuration)(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
} // supports only 2.0-style add(1, 's') or add(duration)


function add(input, value) {
  return addSubtract(this, input, value, 1);
} // supports only 2.0-style subtract(1, 's') or subtract(duration)


function subtract(input, value) {
  return addSubtract(this, input, value, -1);
}
},{"./create":"node_modules/moment/src/lib/duration/create.js"}],"node_modules/moment/src/lib/utils/abs-ceil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = absCeil;

function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
},{}],"node_modules/moment/src/lib/duration/bubble.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bubble = bubble;
exports.daysToMonths = daysToMonths;
exports.monthsToDays = monthsToDays;

var _absFloor = _interopRequireDefault(require("../utils/abs-floor"));

var _absCeil = _interopRequireDefault(require("../utils/abs-ceil"));

var _dateFromArray = require("../create/date-from-array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bubble() {
  var milliseconds = this._milliseconds;
  var days = this._days;
  var months = this._months;
  var data = this._data;
  var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
  // check: https://github.com/moment/moment/issues/2166

  if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
    milliseconds += (0, _absCeil.default)(monthsToDays(months) + days) * 864e5;
    days = 0;
    months = 0;
  } // The following code bubbles up values, see the tests for
  // examples of what that means.


  data.milliseconds = milliseconds % 1000;
  seconds = (0, _absFloor.default)(milliseconds / 1000);
  data.seconds = seconds % 60;
  minutes = (0, _absFloor.default)(seconds / 60);
  data.minutes = minutes % 60;
  hours = (0, _absFloor.default)(minutes / 60);
  data.hours = hours % 24;
  days += (0, _absFloor.default)(hours / 24); // convert days to months

  monthsFromDays = (0, _absFloor.default)(daysToMonths(days));
  months += monthsFromDays;
  days -= (0, _absCeil.default)(monthsToDays(monthsFromDays)); // 12 months -> 1 year

  years = (0, _absFloor.default)(months / 12);
  months %= 12;
  data.days = days;
  data.months = months;
  data.years = years;
  return this;
}

function daysToMonths(days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  return days * 4800 / 146097;
}

function monthsToDays(months) {
  // the reverse of daysToMonths
  return months * 146097 / 4800;
}
},{"../utils/abs-floor":"node_modules/moment/src/lib/utils/abs-floor.js","../utils/abs-ceil":"node_modules/moment/src/lib/utils/abs-ceil.js","../create/date-from-array":"node_modules/moment/src/lib/create/date-from-array.js"}],"node_modules/moment/src/lib/duration/as.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.as = as;
exports.valueOf = valueOf;
exports.asYears = exports.asQuarters = exports.asMonths = exports.asWeeks = exports.asDays = exports.asHours = exports.asMinutes = exports.asSeconds = exports.asMilliseconds = void 0;

var _bubble = require("./bubble");

var _aliases = require("../units/aliases");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function as(units) {
  if (!this.isValid()) {
    return NaN;
  }

  var days;
  var months;
  var milliseconds = this._milliseconds;
  units = (0, _aliases.normalizeUnits)(units);

  if (units === 'month' || units === 'quarter' || units === 'year') {
    days = this._days + milliseconds / 864e5;
    months = this._months + (0, _bubble.daysToMonths)(days);

    switch (units) {
      case 'month':
        return months;

      case 'quarter':
        return months / 3;

      case 'year':
        return months / 12;
    }
  } else {
    // handle milliseconds separately because of floating point math errors (issue #1867)
    days = this._days + Math.round((0, _bubble.monthsToDays)(this._months));

    switch (units) {
      case 'week':
        return days / 7 + milliseconds / 6048e5;

      case 'day':
        return days + milliseconds / 864e5;

      case 'hour':
        return days * 24 + milliseconds / 36e5;

      case 'minute':
        return days * 1440 + milliseconds / 6e4;

      case 'second':
        return days * 86400 + milliseconds / 1000;
      // Math.floor prevents floating point math errors here

      case 'millisecond':
        return Math.floor(days * 864e5) + milliseconds;

      default:
        throw new Error('Unknown unit ' + units);
    }
  }
} // TODO: Use this.as('ms')?


function valueOf() {
  if (!this.isValid()) {
    return NaN;
  }

  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + (0, _toInt.default)(this._months / 12) * 31536e6;
}

function makeAs(alias) {
  return function () {
    return this.as(alias);
  };
}

var asMilliseconds = makeAs('ms');
exports.asMilliseconds = asMilliseconds;
var asSeconds = makeAs('s');
exports.asSeconds = asSeconds;
var asMinutes = makeAs('m');
exports.asMinutes = asMinutes;
var asHours = makeAs('h');
exports.asHours = asHours;
var asDays = makeAs('d');
exports.asDays = asDays;
var asWeeks = makeAs('w');
exports.asWeeks = asWeeks;
var asMonths = makeAs('M');
exports.asMonths = asMonths;
var asQuarters = makeAs('Q');
exports.asQuarters = asQuarters;
var asYears = makeAs('y');
exports.asYears = asYears;
},{"./bubble":"node_modules/moment/src/lib/duration/bubble.js","../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/duration/clone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;

var _create = require("./create");

function clone() {
  return (0, _create.createDuration)(this);
}
},{"./create":"node_modules/moment/src/lib/duration/create.js"}],"node_modules/moment/src/lib/duration/get.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.weeks = weeks;
exports.years = exports.months = exports.days = exports.hours = exports.minutes = exports.seconds = exports.milliseconds = void 0;

var _aliases = require("../units/aliases");

var _absFloor = _interopRequireDefault(require("../utils/abs-floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(units) {
  units = (0, _aliases.normalizeUnits)(units);
  return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
  return function () {
    return this.isValid() ? this._data[name] : NaN;
  };
}

var milliseconds = makeGetter('milliseconds');
exports.milliseconds = milliseconds;
var seconds = makeGetter('seconds');
exports.seconds = seconds;
var minutes = makeGetter('minutes');
exports.minutes = minutes;
var hours = makeGetter('hours');
exports.hours = hours;
var days = makeGetter('days');
exports.days = days;
var months = makeGetter('months');
exports.months = months;
var years = makeGetter('years');
exports.years = years;

function weeks() {
  return (0, _absFloor.default)(this.days() / 7);
}
},{"../units/aliases":"node_modules/moment/src/lib/units/aliases.js","../utils/abs-floor":"node_modules/moment/src/lib/utils/abs-floor.js"}],"node_modules/moment/src/lib/duration/humanize.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetRelativeTimeRounding = getSetRelativeTimeRounding;
exports.getSetRelativeTimeThreshold = getSetRelativeTimeThreshold;
exports.humanize = humanize;

var _create = require("./create");

var round = Math.round;
var thresholds = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month
  M: 11 // months to year

}; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
  return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, locale) {
  var duration = (0, _create.createDuration)(posNegDuration).abs();
  var seconds = round(duration.as('s'));
  var minutes = round(duration.as('m'));
  var hours = round(duration.as('h'));
  var days = round(duration.as('d'));
  var months = round(duration.as('M'));
  var years = round(duration.as('y'));
  var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale;
  return substituteTimeAgo.apply(null, a);
} // This function allows you to set the rounding function for relative time strings


function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === undefined) {
    return round;
  }

  if (typeof roundingFunction === 'function') {
    round = roundingFunction;
    return true;
  }

  return false;
} // This function allows you to set a threshold for relative time strings


function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === undefined) {
    return false;
  }

  if (limit === undefined) {
    return thresholds[threshold];
  }

  thresholds[threshold] = limit;

  if (threshold === 's') {
    thresholds.ss = limit - 1;
  }

  return true;
}

function humanize(withSuffix) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }

  var locale = this.localeData();
  var output = relativeTime(this, !withSuffix, locale);

  if (withSuffix) {
    output = locale.pastFuture(+this, output);
  }

  return locale.postformat(output);
}
},{"./create":"node_modules/moment/src/lib/duration/create.js"}],"node_modules/moment/src/lib/duration/iso-string.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toISOString = toISOString;

var _absFloor = _interopRequireDefault(require("../utils/abs-floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abs = Math.abs;

function sign(x) {
  return (x > 0) - (x < 0) || +x;
}

function toISOString() {
  // for ISO strings we do not use the normal bubbling rules:
  //  * milliseconds bubble up until they become hours
  //  * days do not bubble at all
  //  * months bubble up until they become years
  // This is because there is no context-free conversion between hours and days
  // (think of clock changes)
  // and also not between days and months (28-31 days per month)
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }

  var seconds = abs(this._milliseconds) / 1000;
  var days = abs(this._days);
  var months = abs(this._months);
  var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

  minutes = (0, _absFloor.default)(seconds / 60);
  hours = (0, _absFloor.default)(minutes / 60);
  seconds %= 60;
  minutes %= 60; // 12 months -> 1 year

  years = (0, _absFloor.default)(months / 12);
  months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

  var Y = years;
  var M = months;
  var D = days;
  var h = hours;
  var m = minutes;
  var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
  var total = this.asSeconds();

  if (!total) {
    // this is the same as C#'s (Noda) and python (isodate)...
    // but not other JS (goog.date)
    return 'P0D';
  }

  var totalSign = total < 0 ? '-' : '';
  var ymSign = sign(this._months) !== sign(total) ? '-' : '';
  var daysSign = sign(this._days) !== sign(total) ? '-' : '';
  var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
  return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
}
},{"../utils/abs-floor":"node_modules/moment/src/lib/utils/abs-floor.js"}],"node_modules/moment/src/lib/duration/prototype.js":[function(require,module,exports) {
"use strict";

var _constructor = require("./constructor");

var _abs = require("./abs");

var _addSubtract = require("./add-subtract");

var _as = require("./as");

var _bubble = require("./bubble");

var _clone = require("./clone");

var _get = require("./get");

var _humanize = require("./humanize");

var _isoString = require("./iso-string");

var _locale = require("../moment/locale");

var _valid = require("./valid");

var _deprecate = require("../utils/deprecate");

var proto = _constructor.Duration.prototype;
proto.isValid = _valid.isValid;
proto.abs = _abs.abs;
proto.add = _addSubtract.add;
proto.subtract = _addSubtract.subtract;
proto.as = _as.as;
proto.asMilliseconds = _as.asMilliseconds;
proto.asSeconds = _as.asSeconds;
proto.asMinutes = _as.asMinutes;
proto.asHours = _as.asHours;
proto.asDays = _as.asDays;
proto.asWeeks = _as.asWeeks;
proto.asMonths = _as.asMonths;
proto.asQuarters = _as.asQuarters;
proto.asYears = _as.asYears;
proto.valueOf = _as.valueOf;
proto._bubble = _bubble.bubble;
proto.clone = _clone.clone;
proto.get = _get.get;
proto.milliseconds = _get.milliseconds;
proto.seconds = _get.seconds;
proto.minutes = _get.minutes;
proto.hours = _get.hours;
proto.days = _get.days;
proto.weeks = _get.weeks;
proto.months = _get.months;
proto.years = _get.years;
proto.humanize = _humanize.humanize;
proto.toISOString = _isoString.toISOString;
proto.toString = _isoString.toISOString;
proto.toJSON = _isoString.toISOString;
proto.locale = _locale.locale;
proto.localeData = _locale.localeData; // Deprecations

proto.toIsoString = (0, _deprecate.deprecate)('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', _isoString.toISOString);
proto.lang = _locale.lang;
},{"./constructor":"node_modules/moment/src/lib/duration/constructor.js","./abs":"node_modules/moment/src/lib/duration/abs.js","./add-subtract":"node_modules/moment/src/lib/duration/add-subtract.js","./as":"node_modules/moment/src/lib/duration/as.js","./bubble":"node_modules/moment/src/lib/duration/bubble.js","./clone":"node_modules/moment/src/lib/duration/clone.js","./get":"node_modules/moment/src/lib/duration/get.js","./humanize":"node_modules/moment/src/lib/duration/humanize.js","./iso-string":"node_modules/moment/src/lib/duration/iso-string.js","../moment/locale":"node_modules/moment/src/lib/moment/locale.js","./valid":"node_modules/moment/src/lib/duration/valid.js","../utils/deprecate":"node_modules/moment/src/lib/utils/deprecate.js"}],"node_modules/moment/src/lib/duration/duration.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createDuration", {
  enumerable: true,
  get: function () {
    return _create.createDuration;
  }
});
Object.defineProperty(exports, "isDuration", {
  enumerable: true,
  get: function () {
    return _constructor.isDuration;
  }
});
Object.defineProperty(exports, "getSetRelativeTimeRounding", {
  enumerable: true,
  get: function () {
    return _humanize.getSetRelativeTimeRounding;
  }
});
Object.defineProperty(exports, "getSetRelativeTimeThreshold", {
  enumerable: true,
  get: function () {
    return _humanize.getSetRelativeTimeThreshold;
  }
});

require("./prototype");

var _create = require("./create");

var _constructor = require("./constructor");

var _humanize = require("./humanize");
},{"./prototype":"node_modules/moment/src/lib/duration/prototype.js","./create":"node_modules/moment/src/lib/duration/create.js","./constructor":"node_modules/moment/src/lib/duration/constructor.js","./humanize":"node_modules/moment/src/lib/duration/humanize.js"}],"node_modules/moment/src/lib/units/timestamp.js":[function(require,module,exports) {
"use strict";

var _format = require("../format/format");

var _regex = require("../parse/regex");

var _token = require("../parse/token");

var _toInt = _interopRequireDefault(require("../utils/to-int"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING
(0, _format.addFormatToken)('X', 0, 0, 'unix');
(0, _format.addFormatToken)('x', 0, 0, 'valueOf'); // PARSING

(0, _regex.addRegexToken)('x', _regex.matchSigned);
(0, _regex.addRegexToken)('X', _regex.matchTimestamp);
(0, _token.addParseToken)('X', function (input, array, config) {
  config._d = new Date(parseFloat(input, 10) * 1000);
});
(0, _token.addParseToken)('x', function (input, array, config) {
  config._d = new Date((0, _toInt.default)(input));
});
},{"../format/format":"node_modules/moment/src/lib/format/format.js","../parse/regex":"node_modules/moment/src/lib/parse/regex.js","../parse/token":"node_modules/moment/src/lib/parse/token.js","../utils/to-int":"node_modules/moment/src/lib/utils/to-int.js"}],"node_modules/moment/src/lib/units/units.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "normalizeUnits", {
  enumerable: true,
  get: function () {
    return _aliases.normalizeUnits;
  }
});

require("./day-of-month");

require("./day-of-week");

require("./day-of-year");

require("./hour");

require("./millisecond");

require("./minute");

require("./month");

require("./offset");

require("./quarter");

require("./second");

require("./timestamp");

require("./timezone");

require("./week-year");

require("./week");

require("./year");

var _aliases = require("./aliases");
},{"./day-of-month":"node_modules/moment/src/lib/units/day-of-month.js","./day-of-week":"node_modules/moment/src/lib/units/day-of-week.js","./day-of-year":"node_modules/moment/src/lib/units/day-of-year.js","./hour":"node_modules/moment/src/lib/units/hour.js","./millisecond":"node_modules/moment/src/lib/units/millisecond.js","./minute":"node_modules/moment/src/lib/units/minute.js","./month":"node_modules/moment/src/lib/units/month.js","./offset":"node_modules/moment/src/lib/units/offset.js","./quarter":"node_modules/moment/src/lib/units/quarter.js","./second":"node_modules/moment/src/lib/units/second.js","./timestamp":"node_modules/moment/src/lib/units/timestamp.js","./timezone":"node_modules/moment/src/lib/units/timezone.js","./week-year":"node_modules/moment/src/lib/units/week-year.js","./week":"node_modules/moment/src/lib/units/week.js","./year":"node_modules/moment/src/lib/units/year.js","./aliases":"node_modules/moment/src/lib/units/aliases.js"}],"node_modules/moment/src/moment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _hooks = require("./lib/utils/hooks");

var _moment = require("./lib/moment/moment");

var _calendar = require("./lib/moment/calendar");

var _locale = require("./lib/locale/locale");

var _duration = require("./lib/duration/duration");

var _units = require("./lib/units/units");

var _isDate = _interopRequireDefault(require("./lib/utils/is-date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//! moment.js
//! version : 2.24.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
_hooks.hooks.version = '2.24.0';
(0, _hooks.setHookCallback)(_moment.createLocal);
_hooks.hooks.fn = _moment.momentPrototype;
_hooks.hooks.min = _moment.min;
_hooks.hooks.max = _moment.max;
_hooks.hooks.now = _moment.now;
_hooks.hooks.utc = _moment.createUTC;
_hooks.hooks.unix = _moment.createUnix;
_hooks.hooks.months = _locale.listMonths;
_hooks.hooks.isDate = _isDate.default;
_hooks.hooks.locale = _locale.getSetGlobalLocale;
_hooks.hooks.invalid = _moment.createInvalid;
_hooks.hooks.duration = _duration.createDuration;
_hooks.hooks.isMoment = _moment.isMoment;
_hooks.hooks.weekdays = _locale.listWeekdays;
_hooks.hooks.parseZone = _moment.createInZone;
_hooks.hooks.localeData = _locale.getLocale;
_hooks.hooks.isDuration = _duration.isDuration;
_hooks.hooks.monthsShort = _locale.listMonthsShort;
_hooks.hooks.weekdaysMin = _locale.listWeekdaysMin;
_hooks.hooks.defineLocale = _locale.defineLocale;
_hooks.hooks.updateLocale = _locale.updateLocale;
_hooks.hooks.locales = _locale.listLocales;
_hooks.hooks.weekdaysShort = _locale.listWeekdaysShort;
_hooks.hooks.normalizeUnits = _units.normalizeUnits;
_hooks.hooks.relativeTimeRounding = _duration.getSetRelativeTimeRounding;
_hooks.hooks.relativeTimeThreshold = _duration.getSetRelativeTimeThreshold;
_hooks.hooks.calendarFormat = _calendar.getCalendarFormat;
_hooks.hooks.prototype = _moment.momentPrototype; // currently HTML5 input type only supports 24-hour formats

_hooks.hooks.HTML5_FMT = {
  DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
  // <input type="datetime-local" step="0.001" />
  DATE: 'YYYY-MM-DD',
  // <input type="date" />
  TIME: 'HH:mm',
  // <input type="time" />
  TIME_SECONDS: 'HH:mm:ss',
  // <input type="time" step="1" />
  TIME_MS: 'HH:mm:ss.SSS',
  // <input type="time" step="0.001" />
  WEEK: 'GGGG-[W]WW',
  // <input type="week" />
  MONTH: 'YYYY-MM' // <input type="month" />

};
var _default = _hooks.hooks;
exports.default = _default;
},{"./lib/utils/hooks":"node_modules/moment/src/lib/utils/hooks.js","./lib/moment/moment":"node_modules/moment/src/lib/moment/moment.js","./lib/moment/calendar":"node_modules/moment/src/lib/moment/calendar.js","./lib/locale/locale":"node_modules/moment/src/lib/locale/locale.js","./lib/duration/duration":"node_modules/moment/src/lib/duration/duration.js","./lib/units/units":"node_modules/moment/src/lib/units/units.js","./lib/utils/is-date":"node_modules/moment/src/lib/utils/is-date.js"}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/@babel/runtime/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"node_modules/regenerator-runtime/runtime.js"}],"node_modules/@babel/runtime/helpers/asyncToGenerator.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
},{}],"src/covidApi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotalCases = getTotalCases;
exports.getAllCountries = getAllCountries;
exports.numberwithcommas = numberwithcommas;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTotalCases(_x) {
  return _getTotalCases.apply(this, arguments);
}

function _getTotalCases() {
  _getTotalCases = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(params) {
    var response, data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://corona.lmao.ninja/".concat(params));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTotalCases.apply(this, arguments);
}

function getAllCountries() {
  return _getAllCountries.apply(this, arguments);
}

function _getAllCountries() {
  _getAllCountries = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var response, data;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://corona.lmao.ninja/countries?sort=country");

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAllCountries.apply(this, arguments);
}

function numberwithcommas(num) {
  return num !== null ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : num;
}
},{"@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./styles.css");

var _moment = _interopRequireDefault(require("moment/src/moment"));

var _covidApi = require("./covidApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var dropdownSelector = document.getElementById("grid-state");
var iconsFontawesome = {
  cases: "fas fa-head-side-virus",
  deaths: "fas fa-skull-crossbones",
  recovered: "fas fa-head-side-mask",
  active: "fas fa-head-side-cough",
  affectedCountries: "fas fa-globe-europe",
  updated: "fas fa-clock",
  country: "fas fa-flag",
  todayCases: "fas fa-head-side-virus",
  todayDeaths: "fas fa-skull-crossbones",
  critical: "fas fa-hospital",
  casesPerOneMillion: "fas fa-ambulance",
  deathsPerOneMillion: "fas fa-skull-crossbones"
};
var iconColor = {
  cases: "red",
  deaths: "red",
  recovered: "green",
  active: "red",
  affectedCountries: "yellow",
  updated: "yellow",
  todayCases: "yellow"
}; //Initial fetch

var targetValue = "countries/world";
(0, _covidApi.getTotalCases)(targetValue).then(function (data) {
  displayCovidUI(data);
}); //Dropdown select

dropdownSelector.onchange = function (e) {
  var targetValue = e.target.value === "all" ? "countries/world" : "countries/".concat(e.target.value);
  (0, _covidApi.getTotalCases)(targetValue).then(function (data) {
    displayCovidUI(data);
  });
}; //Get Countries


(0, _covidApi.getAllCountries)().then(function (data) {
  displayCountryList(data);
}); //Display widget

var displayCovidUI = function displayCovidUI(data) {
  var element = document.getElementById("covid");
  var dataMap = Object.entries(data).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key === "countryInfo") {
      return "";
    }

    return "<div class=\"w-full md:w-1/2 xl:w-1/3 p-3\">\n              <!--Metric Card-->\n              <div class=\"light_grey border-b-4 border-gray-700 p-5\">\n                  <div class=\"flex flex-row items-center\">\n                      <div class=\"flex-shrink pr-4\">\n                          <div class=\"red-icon rounded-md p-5 \">\n                          <i class=\"".concat(iconsFontawesome[key], " fa-2x fa-inverse ").concat(iconColor[key], "\"></i>\n                          </div>\n                      </div>\n                      <div class=\"flex-1 text-right md:text-center\">\n                          <h5 class=\"font-bold uppercase yellow text-white\">").concat(key === "country" ? "" : key, "</h5>\n                          <h3 class=\"font-bold text-3xl text-white\">").concat(key === "updated" ? value = (0, _moment.default)(value).format("ll") : (0, _covidApi.numberwithcommas)(value), "</h3>\n                      </div>\n                  </div>\n              </div>\n              <!--/Metric Card-->\n          </div>");
  });
  element.innerHTML = dataMap.join("");
}; //Display country list


var displayCountryList = function displayCountryList(data) {
  // sort
  data.reverse();
  data.sort(function (a, b) {
    return b.critical - a.critical;
  });

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var val = _step.value;
      var option = document.createElement("option");
      option.value = val.country;
      option.text = val.country.charAt(0).toUpperCase() + val.country.slice(1);
      option.classList.add("bar");
      dropdownSelector.appendChild(option);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
},{"@babel/runtime/helpers/slicedToArray":"node_modules/@babel/runtime/helpers/slicedToArray.js","./styles.css":"src/styles.css","moment/src/moment":"node_modules/moment/src/moment.js","./covidApi":"src/covidApi.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53006" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map