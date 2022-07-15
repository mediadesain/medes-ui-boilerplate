(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('prismjs'), require('prismjs/components/prism-markup'), require('prismjs/components/prism-javascript'), require('prismjs/components/prism-java'), require('prismjs/components/prism-typescript'), require('prismjs/components/prism-css'), require('prismjs/components/prism-sass'), require('prismjs/components/prism-scss'), require('prismjs/components/prism-ruby'), require('prismjs/components/prism-swift'), require('prismjs/components/prism-sql'), require('prismjs/components/prism-python'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('medes-ui', ['exports', '@angular/core', '@angular/common', '@angular/router', 'prismjs', 'prismjs/components/prism-markup', 'prismjs/components/prism-javascript', 'prismjs/components/prism-java', 'prismjs/components/prism-typescript', 'prismjs/components/prism-css', 'prismjs/components/prism-sass', 'prismjs/components/prism-scss', 'prismjs/components/prism-ruby', 'prismjs/components/prism-swift', 'prismjs/components/prism-sql', 'prismjs/components/prism-python', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["medes-ui"] = {}, global.ng.core, global.ng.common, global.ng.router, global.Prism, null, null, null, null, null, null, null, null, null, null, null, global.ng.platformBrowser));
})(this, (function (exports, i0, i2, i1, Prism, prismMarkup, prismJavascript, prismJava, prismTypescript, prismCss, prismSass, prismScss, prismRuby, prismSwift, prismSql, prismPython, i1$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var Prism__namespace = /*#__PURE__*/_interopNamespace(Prism);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var MdsFilterResetComponent = /** @class */ (function () {
        function MdsFilterResetComponent(router) {
            this.router = router;
            this.filterSelectedChange = new i0.EventEmitter();
        }
        MdsFilterResetComponent.prototype.ngOnInit = function () {
            console.log('ngOninit');
        };
        MdsFilterResetComponent.prototype.reset = function () {
            this.filterSelectedChange.emit({});
            this.router.navigate([]);
        };
        return MdsFilterResetComponent;
    }());
    MdsFilterResetComponent.ɵfac = function MdsFilterResetComponent_Factory(t) { return new (t || MdsFilterResetComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.Router)); };
    MdsFilterResetComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MdsFilterResetComponent, selectors: [["mds-filter-reset"]], inputs: { content: "content", class: "class", filterSelected: "filterSelected" }, outputs: { filterSelectedChange: "filterSelectedChange" }, decls: 4, vars: 5, consts: [[1, "filter-group"], [2, "width", "100%", 3, "ngClass", "disabled", "click"]], template: function MdsFilterResetComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function MdsFilterResetComponent_Template_button_click_1_listener() { return ctx.reset(); });
                i0__namespace.ɵɵpipe(2, "json");
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", ctx.class && ctx.class)("disabled", i0__namespace.ɵɵpipeBind1(2, 3, ctx.filterSelected) === "{}");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.content);
            }
        }, directives: [i2__namespace.NgClass], pipes: [i2__namespace.JsonPipe], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdsFilterResetComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mds-filter-reset',
                        templateUrl: './filter-reset.component.html',
                        styleUrls: ['./filter-reset.component.css']
                    }]
            }], function () { return [{ type: i1__namespace.Router }]; }, { content: [{
                    type: i0.Input
                }], class: [{
                    type: i0.Input
                }], filterSelected: [{
                    type: i0.Input
                }], filterSelectedChange: [{
                    type: i0.Output
                }] });
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    // @dynamic
    var MdsArrayUtils = /** @class */ (function () {
        function MdsArrayUtils() {
        }
        return MdsArrayUtils;
    }());
    MdsArrayUtils.countUniqueValues = function (data) {
        var count = {};
        data.forEach(function (i) {
            count[i] = (count[i] || 0) + 1;
        });
        return count;
    };
    MdsArrayUtils.filterMultiple = function (data, key, filterdata) {
        // console.log('FilterMultiple', data, key, filterdata)
        filterdata = filterdata.join().toLocaleLowerCase().split(',');
        var newdata = [];
        data.filter(function (item) {
            if (item[key]) {
                item[key] = item[key].includes(',') ? item[key].split(',') : item[key];
                var isArray = Array.isArray(item[key]);
                // If values of key is string
                if (!isArray) {
                    if (filterdata.indexOf(item[key].toLocaleLowerCase()) !== -1) {
                        newdata.push(item);
                    }
                }
                // If values of key is Array
                if (isArray) {
                    item[key].forEach(function (val) {
                        if (filterdata.indexOf(val.toLocaleLowerCase()) !== -1) {
                            newdata.push(item);
                        }
                    });
                }
            }
        });
        return __spreadArray([], __read(new Set(newdata)));
    };
    MdsArrayUtils.groupValues = function (arr, key) {
        var keyvalue = function (a) { return a[key]; };
        return arr.reduce(function (r, v, i, a, k) {
            if (k === void 0) { k = keyvalue(v); }
            return ((r[k] || (r[k] = [])).push(v), r);
        }, {});
    };
    MdsArrayUtils.sumValues = function (arr) {
        return arr.reduce(function (total, num) { return total + num; });
    };
    MdsArrayUtils.arrayTolistObject = function (arr, objectkey) {
        var e_1, _a;
        var groupObj = {};
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                var newobj = {};
                newobj[item[objectkey]] = item;
                Object.assign(groupObj, newobj);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return groupObj;
    };

    // @dynamic
    var MdsDateUtils = /** @class */ (function () {
        function MdsDateUtils() {
        }
        MdsDateUtils.untilNow = function (date, customdata, customprefix) {
            var intervals = [
                { label: 'year', seconds: 31536000 },
                { label: 'month', seconds: 2592000 },
                { label: 'day', seconds: 86400 },
                { label: 'hour', seconds: 3600 },
                { label: 'minute', seconds: 60 },
                { label: 'second', seconds: 1 },
            ];
            var prefix = 'ago';
            if (customprefix) {
                prefix = customprefix;
            }
            if (customdata) {
                customdata.forEach(function (item, i) { return intervals[i].label = item; });
            }
            var seconds = Math.floor((Date.now() - date) / 1000);
            var interval = intervals.find(function (i) { return i.seconds < seconds; });
            var count = Math.floor(seconds / interval.seconds);
            return count + " " + interval.label + (count !== 1 && !customdata ? 's' : '') + " " + prefix;
        };
        return MdsDateUtils;
    }());

    /* eslint-disable @typescript-eslint/no-explicit-any */
    // @dynamic
    var MdsNumberUtils = /** @class */ (function () {
        function MdsNumberUtils() {
        }
        return MdsNumberUtils;
    }());
    MdsNumberUtils.shortNumber = function (value, custom) {
        var defaultdata = ['k', 'm', 'b', 't'];
        var suffixes = custom ? __spreadArray([''], __read(custom)) : __spreadArray([''], __read(defaultdata));
        var suffixNum = Math.floor(('' + value).length / 3);
        var shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 !== 0) {
            shortValue = shortValue.toFixed(1);
        }
        return shortValue + suffixes[suffixNum];
    };
    MdsNumberUtils.toCurrency = function (money, code, decimal) {
        var formatlist = { IDR: 'id-ID', JYP: 'ja-JP', EUR: 'de-DE', USD: 'en-US' };
        var format = formatlist[code];
        decimal = decimal ? decimal : 0;
        return new Intl.NumberFormat(format, { style: 'currency', currency: code, minimumFractionDigits: decimal }).format(money);
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    // @dynamic
    var MdsObjectUtils = /** @class */ (function () {
        function MdsObjectUtils() {
        }
        return MdsObjectUtils;
    }());
    MdsObjectUtils.removeKeysIfEmpty = function (obj) {
        for (var namaProperty in obj) {
            if (obj[namaProperty] === null || obj[namaProperty] === undefined || obj[namaProperty] === '') {
                delete obj[namaProperty];
            }
        }
        return obj;
    };

    // @dynamic
    var MdsStringUtils = /** @class */ (function () {
        function MdsStringUtils() {
        }
        return MdsStringUtils;
    }());
    MdsStringUtils.lowerCase = function (str) {
        return str.toLowerCase();
    };
    MdsStringUtils.upperCase = function (str) {
        return str.toUpperCase();
    };
    MdsStringUtils.titleCase = function (str) {
        return str.replace(/\b(\w)/g, function (k) { return k.toUpperCase(); });
    };
    MdsStringUtils.pascalCase = function (str) {
        return str.toLowerCase().replace(/[^\w\s]/gi, ' ').replace(/(?:_| |\b)(\w)/g, function (p1) {
            return p1.toUpperCase();
        }).replace(/\s/g, '');
    };
    MdsStringUtils.randomCharacter = function (length, characters) {
        // sample random character or custom characters
        var chars = characters ? characters : 'abcefghijklnopqrtuvwxyz0123456789';
        var result = '';
        for (var i = length; i > 0; --i) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
    };
    MdsStringUtils.convertToSlug = function (text) {
        if (!text) {
            return;
        }
        var result = text.toLowerCase().replace('.', ' ').replace('-', ' ').replace(/[^\w ]+/g, '').replace(/ +/g, '-');
        return result;
    };
    MdsStringUtils.getYoutubeID = function (url) {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length === 11) {
            return match[2];
        }
        else {
            return '';
        }
    };
    MdsStringUtils.getYoutubeEmbed = function (url) {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        var match = url.match(regExp);
        var id;
        if (match && match[2].length === 11) {
            id = match[2];
        }
        return 'https://www.youtube.com/embed/' + id;
    };
    /* Size option
    // 0/1/2/3/default/sd1/sd2/sd3/sddefault/mq1/mq2/mq3/mqdefault/
    // hq1/hq2/hq3/hqdefault/hq720/maxres1/maxres2/maxres3/maxresdefault
    */
    MdsStringUtils.getYoutubeThumbnail = function (url, size) {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        var match = url.match(regExp);
        var id;
        if (match && match[2].length === 11) {
            id = match[2];
        }
        size = size ? size : 'hqdefault';
        return 'https://i.ytimg.com/vi/' + id + '/' + size + '.jpg';
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    // @dynamic
    var MdsColorUtils = /** @class */ (function () {
        function MdsColorUtils() {
        }
        return MdsColorUtils;
    }());
    MdsColorUtils.rgbToHex = function (rgb) { return '#' + rgb.map(function (x) {
        var hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join(''); };
    MdsColorUtils.hexToRgba = function (hex, opacity) {
        opacity = opacity > 1 ? opacity = 1 : opacity;
        var rgba = 'rgba(' + (hex = hex.replace('#', ''))
            .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
            .map(function (l) { return parseInt(hex.length % 2 ? l + l : l, 16); })
            .concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
        return rgba;
    };
    MdsColorUtils.addDarkLight = function (color, amount) {
        var coloradjust = '#' + color.replace(/^#/, '')
            .replace(/../g, function (clr) { return ('0' + Math.min(255, Math.max(0, parseInt(clr, 16) + amount))
            .toString(16))
            .substr(-2); });
        return coloradjust;
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    function FilterCheckboxComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(ctx_r3.titlegroup + " ");
        }
    }
    function FilterCheckboxComponent_div_0_ng_container_1_a_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "a", 7);
            i0__namespace.ɵɵlistener("click", function FilterCheckboxComponent_div_0_ng_container_1_a_6_Template_a_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var prop_r1 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.resetFilter(ctx_r6.filtergroup, prop_r1); });
            i0__namespace.ɵɵelement(1, "span", 8);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("innerHTML", ctx_r4.reset ? ctx_r4.reset : "\u2715", i0__namespace.ɵɵsanitizeHtml);
        }
    }
    function FilterCheckboxComponent_div_0_ng_container_1_div_7_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 14);
            i0__namespace.ɵɵelementStart(1, "small");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var itm_r9 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1("(", itm_r9.counter, ")");
        }
    }
    function FilterCheckboxComponent_div_0_ng_container_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 9);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵelementStart(2, "input", 11);
            i0__namespace.ɵɵlistener("change", function FilterCheckboxComponent_div_0_ng_container_1_div_7_Template_input_change_2_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r14_1); var itm_r9 = restoredCtx.$implicit; var prop_r1 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r13 = i0__namespace.ɵɵnextContext(); return ctx_r13.clickCheckbox(itm_r9, prop_r1); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "label", 12);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "titlecase");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(6, FilterCheckboxComponent_div_0_ng_container_1_div_7_div_6_Template, 3, 1, "div", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var itm_r9 = ctx.$implicit;
            var i_r10 = ctx.index;
            var prop_r1 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r5 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("id", prop_r1 + i_r10)("checked", itm_r9.checked);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("for", prop_r1 + i_r10);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(i0__namespace.ɵɵpipeBind1(5, 5, itm_r9.label));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r5.hideCounter);
        }
    }
    function FilterCheckboxComponent_div_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "div", 3);
            i0__namespace.ɵɵelementStart(2, "div", 4);
            i0__namespace.ɵɵtemplate(3, FilterCheckboxComponent_div_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 2);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵpipe(5, "titlecase");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(6, FilterCheckboxComponent_div_0_ng_container_1_a_6_Template, 2, 1, "a", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(7, FilterCheckboxComponent_div_0_ng_container_1_div_7_Template, 7, 7, "div", 6);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var prop_r1 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.titlegroup);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1("", i0__namespace.ɵɵpipeBind1(5, 4, prop_r1), " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.filterSelected[prop_r1]);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r2.filtergroup[prop_r1]);
        }
    }
    function FilterCheckboxComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵtemplate(1, FilterCheckboxComponent_div_0_ng_container_1_Template, 8, 6, "ng-container", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var prop_r1 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.filtergroup[prop_r1].length > 1);
        }
    }
    var FilterCheckboxComponent = /** @class */ (function () {
        function FilterCheckboxComponent(router, activeroute) {
            this.router = router;
            this.activeroute = activeroute;
            this.filterSelectedUrl = {};
            this.filtergroup = {};
        }
        FilterCheckboxComponent.prototype.ngOnInit = function () {
            this.construcFilterGroup();
        };
        FilterCheckboxComponent.prototype.ngOnChanges = function (changes) {
            this.construcFilterGroup();
        };
        FilterCheckboxComponent.prototype.construcFilterGroup = function () {
            var _this = this;
            this.filterBy.forEach(function (prop, key) {
                // Remove temprary key
                if (prop[0] === '_') {
                    _this.filterBy.push(prop.replace('_', ''));
                    _this.filterBy.splice(key, 1);
                }
                _this.filterData.forEach(function (item) {
                    if (prop[0] === '_') {
                        item[prop.replace('_', '')] = item[prop];
                        delete item[prop];
                    }
                });
                prop = prop.replace('_', '');
                // Construct Checkbox label & value
                var getAllValue = _this.filterData.map(function (item) { return Array.isArray(item[prop]) ? item[prop] : item[prop].split(','); }).flat();
                var value = MdsArrayUtils.countUniqueValues(getAllValue);
                var label = Object.keys(value);
                var counter = Object.values(value);
                var group = {};
                group[prop] = [];
                var _loop_1 = function (i) {
                    var obj = {
                        label: label[i],
                        counter: counter[i],
                        url: MdsStringUtils.convertToSlug(label[i]),
                        checked: false
                    };
                    // check checked element base on url parameter
                    _this.activeroute.queryParams.subscribe(function (param) {
                        if (param[prop]) {
                            var isArray = param[prop].includes(',');
                            var checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                            var isInclude = checkArrOrStr.map(function (item) { return item === obj.url; }).includes(true);
                            obj.checked = isInclude ? true : false;
                        }
                    });
                    group[prop].push(obj);
                };
                for (var i = 0; i < label.length; i++) {
                    _loop_1(i);
                }
                Object.assign(_this.filtergroup, group);
                _this.filterSelected[prop] = _this.filtergroup[prop].filter(function (item) { return item.checked; }).map(function (item) { return item.label; });
                _this.filterSelectedUrl[prop] = _this.filtergroup[prop].filter(function (item) { return item.checked; }).map(function (item) { return item.url; });
                if (_this.filterSelected[prop].length === 0) {
                    delete _this.filterSelected[prop];
                }
            });
        };
        FilterCheckboxComponent.prototype.clickCheckbox = function (select, prop) {
            var _a, _b, _c;
            // ----- IF URL PARAMETER EMPTY ----- //
            if (!this.filterSelected[prop] || !this.filterSelectedUrl[prop]) {
                this.filterSelected[prop] = [];
                this.filterSelectedUrl[prop] = [];
            }
            this.router.navigate([], {
                queryParams: (_a = {}, _a[prop] = select.url, _a),
                queryParamsHandling: 'merge'
            });
            // ----- IF URL PARAMETER EXSIEST ----- //
            var idx = this.filterSelected[prop].indexOf(select.label);
            if (idx > -1) {
                this.filterSelected[prop].splice(idx, 1);
                this.filterSelectedUrl[prop].splice(idx, 1);
                // Delete property if value/s empty
                if (this.filterSelected[prop].length === 0 || this.filterSelectedUrl[prop].length === 0) {
                    delete this.filterSelected[prop];
                    delete this.filterSelectedUrl[prop];
                }
                // Remove to url queryParam
                this.router.navigate([], {
                    queryParams: (_b = {}, _b[prop] = this.filterSelectedUrl[prop] ? this.filterSelectedUrl[prop].join() : null, _b),
                    queryParamsHandling: 'merge'
                });
            }
            else {
                this.filterSelected[prop].push(select.label);
                this.filterSelectedUrl[prop].push(select.url);
                // Add to url queryParam
                this.router.navigate([], {
                    queryParams: (_c = {}, _c[prop] = this.filterSelectedUrl[prop].join(), _c),
                    queryParamsHandling: 'merge'
                });
            }
        };
        FilterCheckboxComponent.prototype.resetFilter = function (select, prop) {
            var _a;
            select[prop].forEach(function (item) { return item.checked = false; });
            delete this.filterSelected[prop];
            this.router.navigate([], {
                queryParams: (_a = {}, _a[prop] = null, _a),
                queryParamsHandling: 'merge'
            });
        };
        return FilterCheckboxComponent;
    }());
    FilterCheckboxComponent.ɵfac = function FilterCheckboxComponent_Factory(t) { return new (t || FilterCheckboxComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.Router), i0__namespace.ɵɵdirectiveInject(i1__namespace.ActivatedRoute)); };
    FilterCheckboxComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FilterCheckboxComponent, selectors: [["mds-filter-checkbox"]], inputs: { filterData: "filterData", filterBy: "filterBy", filterSelected: "filterSelected", titlegroup: "titlegroup", reset: "reset", hideCounter: "hideCounter" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "filter-checkbox margin-b-1", 4, "ngFor", "ngForOf"], [1, "filter-checkbox", "margin-b-1"], [4, "ngIf"], [1, "group-title", "flex-horizontal", "horizontal-between"], [1, "title-label"], ["class", "title-close", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "group-checkbox flex-horizontal horizontal-between", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "title-close", 3, "click"], [3, "innerHTML"], [1, "group-checkbox", "flex-horizontal", "horizontal-between"], [1, "checkbox-label"], ["type", "checkbox", 3, "id", "checked", "change"], [3, "for"], ["class", "checkbox-counter", 4, "ngIf"], [1, "checkbox-counter"]], template: function FilterCheckboxComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, FilterCheckboxComponent_div_0_Template, 2, 1, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngForOf", ctx.filterBy);
            }
        }, directives: [i2__namespace.NgForOf, i2__namespace.NgIf], pipes: [i2__namespace.TitleCasePipe], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FilterCheckboxComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mds-filter-checkbox',
                        templateUrl: './filter-checkbox.component.html',
                        styleUrls: ['./filter-checkbox.component.css']
                    }]
            }], function () { return [{ type: i1__namespace.Router }, { type: i1__namespace.ActivatedRoute }]; }, { filterData: [{
                    type: i0.Input
                }], filterBy: [{
                    type: i0.Input
                }], filterSelected: [{
                    type: i0.Input
                }], titlegroup: [{
                    type: i0.Input
                }], reset: [{
                    type: i0.Input
                }], hideCounter: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = function (a0, a1) { return { "width": a0, "height": a1 }; };
    var _c1 = function (a0, a1, a2, a3) { return { "border-radius": a0, "background-color": a1, "width": a2, "height": a3 }; };
    var _c2 = function (a0) { return { "opacity": a0 }; };
    var _c3 = function (a0, a1, a2, a3) { return { "border": a0, "width": a1, "height": a2, "border-radius": a3 }; };
    function FilterSwatchComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "input", 3);
            i0__namespace.ɵɵlistener("change", function FilterSwatchComponent_div_3_Template_input_change_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r4_1); var item_r1 = restoredCtx.$implicit; var ctx_r3 = i0__namespace.ɵɵnextContext(); ctx_r3.clickCheckbox(item_r1); return item_r1.checked = !item_r1.checked; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(2, "label", 4);
            i0__namespace.ɵɵnamespaceSVG();
            i0__namespace.ɵɵelementStart(3, "svg", 5);
            i0__namespace.ɵɵelement(4, "path", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵnamespaceHTML();
            i0__namespace.ɵɵelement(5, "div", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            var i_r2 = ctx.index;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", "checkbox" + i_r2)("ngStyle", i0__namespace.ɵɵpureFunction2(7, _c0$1, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"))("checked", item_r1.checked);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("for", "checkbox" + i_r2)("ngStyle", i0__namespace.ɵɵpureFunction4(10, _c1, ctx_r0.swatchRadius + "px", item_r1.color, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction1(15, _c2, item_r1.checked ? 1 : 0));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction4(17, _c3, item_r1.checked ? "1px solid #ddd" : "1px solid #fff", ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px", ctx_r0.swatchRadius + "px"));
        }
    }
    var FilterSwatchComponent = /** @class */ (function () {
        function FilterSwatchComponent(activeroute, router) {
            this.activeroute = activeroute;
            this.router = router;
            this.filterSelectedUrl = {};
            this.filterswatchgroup = [];
        }
        FilterSwatchComponent.prototype.ngOnInit = function () {
            this.swatchSize = this.swatchSize || 30;
            this.swatchRadius = this.swatchRadius || 0;
            this.construcFilterSwatch();
        };
        FilterSwatchComponent.prototype.ngOnChanges = function (changes) {
            this.construcFilterSwatch();
        };
        FilterSwatchComponent.prototype.construcFilterSwatch = function () {
            var e_1, _a;
            var _this = this;
            // Construct Checkbox label & value
            var getAllValue = this.filterData.map(function (item) { return Array.isArray(item[_this.filterBy]) ? item[_this.filterBy] : item[_this.filterBy].split(','); }).flat();
            getAllValue = __spreadArray([], __read(new Set(getAllValue)));
            var checkswatch = [];
            var _loop_1 = function (val) {
                var obj = {
                    label: val,
                    url: MdsStringUtils.convertToSlug(val),
                    color: this_1.swatchMapping[MdsStringUtils.convertToSlug(val)],
                    checked: false
                };
                this_1.activeroute.queryParams.subscribe(function (param) {
                    if (param[_this.filterBy]) {
                        var isArray = param[_this.filterBy].includes(',');
                        var checkArrOrStr = isArray ? param[_this.filterBy].split(',') : [param[_this.filterBy]];
                        var isInclude = checkArrOrStr.map(function (item) { return item === obj.url; }).includes(true);
                        obj.checked = isInclude ? true : false;
                    }
                });
                checkswatch.push(obj);
                this_1.filterswatchgroup = checkswatch;
                this_1.filterSelected[this_1.filterBy] = this_1.filterswatchgroup.filter(function (item) { return item.checked; }).map(function (item) { return item.url; });
                this_1.filterSelectedUrl[this_1.filterBy] = this_1.filterswatchgroup.filter(function (item) { return item.checked; }).map(function (item) { return item.label; });
                if (this_1.filterSelected[this_1.filterBy].length === 0) {
                    delete this_1.filterSelected[this_1.filterBy];
                }
            };
            var this_1 = this;
            try {
                for (var getAllValue_1 = __values(getAllValue), getAllValue_1_1 = getAllValue_1.next(); !getAllValue_1_1.done; getAllValue_1_1 = getAllValue_1.next()) {
                    var val = getAllValue_1_1.value;
                    _loop_1(val);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (getAllValue_1_1 && !getAllValue_1_1.done && (_a = getAllValue_1.return)) _a.call(getAllValue_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        FilterSwatchComponent.prototype.clickCheckbox = function (select) {
            // ----- IF URL PARAMETER EMPTY ----- //
            if (!this.filterSelected[this.filterBy] || !this.filterSelectedUrl[this.filterBy]) {
                this.filterSelected[this.filterBy] = [];
                this.filterSelectedUrl[this.filterBy] = [];
            }
            this.router.navigate([], {
                queryParams: { color: select.url },
                queryParamsHandling: 'merge'
            });
            // ----- IF URL PARAMETER EXSIEST ----- //
            var idx = this.filterSelected[this.filterBy].indexOf(select.label);
            if (idx > -1) {
                this.filterSelected[this.filterBy].splice(idx, 1);
                this.filterSelectedUrl[this.filterBy].splice(idx, 1);
                // Delete property if value/s empty
                if (this.filterSelected[this.filterBy].length === 0 || this.filterSelectedUrl[this.filterBy].length === 0) {
                    delete this.filterSelected[this.filterBy];
                    delete this.filterSelectedUrl[this.filterBy];
                }
                // Remove to url queryParam
                this.router.navigate([], {
                    queryParams: { color: this.filterSelectedUrl[this.filterBy] ? this.filterSelectedUrl[this.filterBy].join() : null },
                    queryParamsHandling: 'merge'
                });
            }
            else {
                this.filterSelected[this.filterBy].push(select.label);
                this.filterSelectedUrl[this.filterBy].push(select.url);
                this.router.navigate([], {
                    queryParams: { color: this.filterSelectedUrl[this.filterBy].join() },
                    queryParamsHandling: 'merge'
                });
            }
        };
        return FilterSwatchComponent;
    }());
    FilterSwatchComponent.ɵfac = function FilterSwatchComponent_Factory(t) { return new (t || FilterSwatchComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.ActivatedRoute), i0__namespace.ɵɵdirectiveInject(i1__namespace.Router)); };
    FilterSwatchComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FilterSwatchComponent, selectors: [["mds-filter-swatch"]], inputs: { filterData: "filterData", filterBy: "filterBy", filterSelected: "filterSelected", titlegroup: "titlegroup", swatchMapping: "swatchMapping", swatchSize: "swatchSize", swatchRadius: "swatchRadius" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-swatch"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["type", "checkbox", 3, "id", "ngStyle", "checked", "change"], [3, "for", "ngStyle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 3, "ngStyle"], ["fill", "#fff", "filter", "drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))", "d", "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"], [1, "active", 3, "ngStyle"]], template: function FilterSwatchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div");
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 0);
                i0__namespace.ɵɵtemplate(3, FilterSwatchComponent_div_3_Template, 6, 22, "div", 1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.titlegroup ? ctx.titlegroup : "Color");
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.filterswatchgroup);
            }
        }, directives: [i2__namespace.NgForOf, i2__namespace.NgStyle], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FilterSwatchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mds-filter-swatch',
                        templateUrl: './filter-swatch.component.html',
                        styleUrls: ['./filter-swatch.component.css']
                    }]
            }], function () { return [{ type: i1__namespace.ActivatedRoute }, { type: i1__namespace.Router }]; }, { filterData: [{
                    type: i0.Input
                }], filterBy: [{
                    type: i0.Input
                }], filterSelected: [{
                    type: i0.Input
                }], titlegroup: [{
                    type: i0.Input
                }], swatchMapping: [{
                    type: i0.Input
                }], swatchSize: [{
                    type: i0.Input
                }], swatchRadius: [{
                    type: i0.Input
                }] });
    })();

    var MdsFilterModule = /** @class */ (function () {
        function MdsFilterModule() {
        }
        return MdsFilterModule;
    }());
    MdsFilterModule.ɵfac = function MdsFilterModule_Factory(t) { return new (t || MdsFilterModule)(); };
    MdsFilterModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MdsFilterModule });
    MdsFilterModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdsFilterModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MdsFilterResetComponent,
                            FilterCheckboxComponent,
                            FilterSwatchComponent
                        ],
                        imports: [
                            i2.CommonModule
                        ],
                        exports: [
                            MdsFilterResetComponent,
                            FilterCheckboxComponent,
                            FilterSwatchComponent
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MdsFilterModule, { declarations: [MdsFilterResetComponent,
                FilterCheckboxComponent,
                FilterSwatchComponent], imports: [i2.CommonModule], exports: [MdsFilterResetComponent,
                FilterCheckboxComponent,
                FilterSwatchComponent] });
    })();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var _c0 = ["codeContent"];
    function MdsHightlightPrismComponent_pre_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "pre");
            i0__namespace.ɵɵelementStart(1, "code", null, 1);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(4, "\n");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassMapInterpolate1("language-", ctx_r0.language, "");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵclassMapInterpolate1("language-", ctx_r0.language, "");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.code);
        }
    }
    var MdsHightlightPrismComponent = /** @class */ (function () {
        function MdsHightlightPrismComponent() {
        }
        // // constructor() { }
        MdsHightlightPrismComponent.prototype.ngAfterViewInit = function () {
            Prism__namespace.highlightElement(this.codeContent.nativeElement);
        };
        MdsHightlightPrismComponent.prototype.ngOnChanges = function (changes) {
            var _a;
            if (changes === null || changes === void 0 ? void 0 : changes.code) {
                if ((_a = this.codeContent) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    this.codeContent.nativeElement.textContent = this.code;
                    Prism__namespace.highlightElement(this.codeContent.nativeElement);
                }
            }
        };
        return MdsHightlightPrismComponent;
    }());
    MdsHightlightPrismComponent.ɵfac = function MdsHightlightPrismComponent_Factory(t) { return new (t || MdsHightlightPrismComponent)(); };
    MdsHightlightPrismComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: MdsHightlightPrismComponent, selectors: [["mds-hightlight-prism"]], viewQuery: function MdsHightlightPrismComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.codeContent = _t.first);
            }
        }, inputs: { code: "code", language: "language" }, features: [i0__namespace.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], ["codeContent", ""]], template: function MdsHightlightPrismComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, MdsHightlightPrismComponent_pre_0_Template, 5, 7, "pre", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.language);
            }
        }, directives: [i2__namespace.NgIf], styles: ["pre[_ngcontent-%COMP%]{font-size:small;margin:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdsHightlightPrismComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mds-hightlight-prism',
                        templateUrl: './mds-hightlight-prism.component.html',
                        styleUrls: ['./mds-hightlight-prism.component.scss']
                    }]
            }], null, { codeContent: [{
                    type: i0.ViewChild,
                    args: ['codeContent']
                }], code: [{
                    type: i0.Input
                }], language: [{
                    type: i0.Input
                }] });
    })();

    var MdsHightlightPrismModule = /** @class */ (function () {
        function MdsHightlightPrismModule() {
        }
        return MdsHightlightPrismModule;
    }());
    MdsHightlightPrismModule.ɵfac = function MdsHightlightPrismModule_Factory(t) { return new (t || MdsHightlightPrismModule)(); };
    MdsHightlightPrismModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MdsHightlightPrismModule });
    MdsHightlightPrismModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.CommonModule
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdsHightlightPrismModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MdsHightlightPrismComponent
                        ],
                        imports: [
                            i2.CommonModule
                        ],
                        exports: [MdsHightlightPrismComponent]
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MdsHightlightPrismModule, { declarations: [MdsHightlightPrismComponent], imports: [i2.CommonModule], exports: [MdsHightlightPrismComponent] }); })();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        FilterPipe.prototype.transform = function (items, filter) {
            if (!items) {
                return [];
            }
            var keys = Object.keys(filter);
            var values = Object.values(filter);
            var _loop_1 = function (a) {
                if (keys) {
                    var key_1 = keys[a];
                    var val_1 = values[a];
                    if (!Array.isArray(val_1)) {
                        items = items.filter(function (item) { return item[key_1].includes(val_1); });
                    }
                    else {
                        if (val_1.length > 0) {
                            items = MdsArrayUtils.filterMultiple(items, key_1, val_1);
                        }
                    }
                }
            };
            for (var a in keys) {
                _loop_1(a);
            }
            return items;
        };
        return FilterPipe;
    }());
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: false });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FilterPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'filter',
                        pure: false
                    }]
            }], null, null);
    })();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeUrlPipe;
    }());
    SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.DomSanitizer, 16)); };
    SafeUrlPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "safeurl", type: SafeUrlPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SafeUrlPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'safeurl'
                    }]
            }], function () { return [{ type: i1__namespace$1.DomSanitizer }]; }, null);
    })();

    /* eslint-disable @typescript-eslint/no-explicit-any */
    var SearchPipe = /** @class */ (function () {
        function SearchPipe() {
        }
        SearchPipe.prototype.transform = function (items, search) {
            if (items && search.keyword !== undefined) {
                items = items.filter(function (item) { return item[search.objkey].toLowerCase().includes(search.keyword.toLowerCase()); });
                return items;
            }
        };
        return SearchPipe;
    }());
    SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
    SearchPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: false });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SearchPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'search',
                        pure: false
                    }]
            }], null, null);
    })();

    var MdsPipesModule = /** @class */ (function () {
        function MdsPipesModule() {
        }
        return MdsPipesModule;
    }());
    MdsPipesModule.ɵfac = function MdsPipesModule_Factory(t) { return new (t || MdsPipesModule)(); };
    MdsPipesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: MdsPipesModule });
    MdsPipesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i2.CommonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MdsPipesModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FilterPipe,
                            SafeUrlPipe,
                            SearchPipe
                        ],
                        imports: [i2.CommonModule],
                        exports: [
                            FilterPipe,
                            SafeUrlPipe,
                            SearchPipe
                        ]
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(MdsPipesModule, { declarations: [FilterPipe,
                SafeUrlPipe,
                SearchPipe], imports: [i2.CommonModule], exports: [FilterPipe,
                SafeUrlPipe,
                SearchPipe] });
    })();

    /*
     * Export all of module medes-ui
     */
    // Deprecated Soon
    // export * from './lib/mds-filter-checkbox/mds-filter-checkbox.module'; // v.0.0.5

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilterCheckboxComponent = FilterCheckboxComponent;
    exports.FilterPipe = FilterPipe;
    exports.FilterSwatchComponent = FilterSwatchComponent;
    exports.MdsArrayUtils = MdsArrayUtils;
    exports.MdsColorUtils = MdsColorUtils;
    exports.MdsDateUtils = MdsDateUtils;
    exports.MdsFilterModule = MdsFilterModule;
    exports.MdsFilterResetComponent = MdsFilterResetComponent;
    exports.MdsHightlightPrismComponent = MdsHightlightPrismComponent;
    exports.MdsHightlightPrismModule = MdsHightlightPrismModule;
    exports.MdsNumberUtils = MdsNumberUtils;
    exports.MdsObjectUtils = MdsObjectUtils;
    exports.MdsPipesModule = MdsPipesModule;
    exports.MdsStringUtils = MdsStringUtils;
    exports.SafeUrlPipe = SafeUrlPipe;
    exports.SearchPipe = SearchPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=medes-ui.umd.js.map
