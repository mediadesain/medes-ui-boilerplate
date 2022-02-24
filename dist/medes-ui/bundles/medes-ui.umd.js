(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router'), require('prismjs'), require('prismjs/components/prism-markup'), require('prismjs/components/prism-javascript'), require('prismjs/components/prism-java'), require('prismjs/components/prism-typescript'), require('prismjs/components/prism-css'), require('prismjs/components/prism-sass'), require('prismjs/components/prism-scss'), require('prismjs/components/prism-ruby'), require('prismjs/components/prism-swift'), require('prismjs/components/prism-sql'), require('prismjs/components/prism-python'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('medes-ui', ['exports', '@angular/core', '@angular/common', '@angular/router', 'prismjs', 'prismjs/components/prism-markup', 'prismjs/components/prism-javascript', 'prismjs/components/prism-java', 'prismjs/components/prism-typescript', 'prismjs/components/prism-css', 'prismjs/components/prism-sass', 'prismjs/components/prism-scss', 'prismjs/components/prism-ruby', 'prismjs/components/prism-swift', 'prismjs/components/prism-sql', 'prismjs/components/prism-python', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['medes-ui'] = {}, global.ng.core, global.ng.common, global.ng.router, global.Prism, null, null, null, null, null, null, null, null, null, null, null, global.ng.platformBrowser));
}(this, (function (exports, core, common, router, Prism, prismMarkup, prismJavascript, prismJava, prismTypescript, prismCss, prismSass, prismScss, prismRuby, prismSwift, prismSql, prismPython, platformBrowser) { 'use strict';

    var MdsFilterResetComponent = /** @class */ (function () {
        function MdsFilterResetComponent(router) {
            this.router = router;
            this.filterSelectedChange = new core.EventEmitter();
        }
        MdsFilterResetComponent.prototype.ngOnInit = function () {
        };
        MdsFilterResetComponent.prototype.reset = function () {
            this.filterSelectedChange.emit({});
            this.router.navigate([]);
        };
        return MdsFilterResetComponent;
    }());
    MdsFilterResetComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mds-filter-reset',
                    template: "<div class=\"filter-group\">\n    <button (click)=\"reset()\" [disabled]=\"(filterSelected|json) === '{}'\" style=\"width: 100%;\">{{content}}</button>\n</div>",
                    styles: [""]
                },] }
    ];
    MdsFilterResetComponent.ctorParameters = function () { return [
        { type: router.Router }
    ]; };
    MdsFilterResetComponent.propDecorators = {
        content: [{ type: core.Input }],
        filterSelected: [{ type: core.Input }],
        filterSelectedChange: [{ type: core.Output }]
    };

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
        return __spread(new Set(newdata));
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

    // @dynamic
    var MdsNumberUtils = /** @class */ (function () {
        function MdsNumberUtils() {
        }
        return MdsNumberUtils;
    }());
    MdsNumberUtils.shortNumber = function (value, custom) {
        var defaultdata = ['k', 'm', 'b', 't'];
        var suffixes = custom ? __spread([''], custom) : __spread([''], defaultdata);
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
                var getAllValue = _this.filterData.map(function (item) { return item[prop].split(','); }).flat();
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
    FilterCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mds-filter-checkbox',
                    template: "<!-- Filter Group -->\n<div *ngFor=\"let prop of filterBy\" class=\"filter-group\" style=\"margin-bottom: 1em;\">\n    <ng-container *ngIf=\"filtergroup[prop].length > 1\">\n        <!-- Title Group -->\n        <div class=\"checkbox-title\">\n            <div>\n                <ng-container *ngIf=\"titlegroup\">{{titlegroup+' '}}</ng-container>{{prop|titlecase}}\n            </div>\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filtergroup, prop)\">\n                <span [innerHTML]=\"reset ? reset : '\u2715'\"></span>\n            </a>\n        </div>\n        <!-- Checkbox + Label -->\n        <div *ngFor=\"let itm of filtergroup[prop];let i=index\" class=\"checkbox-group\" style=\"display: flex;\">\n            <div style=\"white-space: nowrap; width: 100%; padding-right: 1em; overflow: hidden; text-overflow: ellipsis;\">\n                <input [id]=\"prop+i\" type=\"checkbox\" [checked]=\"itm.checked\" (change)=\"clickCheckbox(itm, prop)\"/>\n                <label [for]=\"prop+i\"> {{itm.label|titlecase}}</label>\n            </div>\n            <div *ngIf=\"!hideCounter\">\n                <small>({{itm.counter}})</small>\n            </div>\n        </div>\n    </ng-container>\n</div>",
                    styles: [".checkbox-title{display:flex;width:100%;justify-content:space-between}"]
                },] }
    ];
    FilterCheckboxComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: router.ActivatedRoute }
    ]; };
    FilterCheckboxComponent.propDecorators = {
        filterData: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterSelected: [{ type: core.Input }],
        titlegroup: [{ type: core.Input }],
        reset: [{ type: core.Input }],
        hideCounter: [{ type: core.Input }]
    };

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
            var getAllValue = this.filterData.map(function (item) { return item[_this.filterBy].split(','); }).flat();
            getAllValue = __spread(new Set(getAllValue));
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
                // for (let i = 0; i < getAllValue.length; i++){
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
    FilterSwatchComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mds-filter-swatch',
                    template: "<div>{{titlegroup ? titlegroup : 'Color'}}</div>\n<div class=\"swatch\">\n    <div *ngFor=\"let item of filterswatchgroup; let i=index\" class=\"item\">\n        <input type=\"checkbox\" [id]=\"'checkbox'+i\" [ngStyle]=\"{'width': swatchSize+'px', 'height': swatchSize+'px'}\" [checked]=\"item.checked\" (change)=\"clickCheckbox(item); item.checked=!item.checked\"/>\n        <label [for]=\"'checkbox'+i\" [ngStyle]=\"{'border-radius': swatchRadius+'px', 'background-color': item.color, 'width': swatchSize+'px', 'height': swatchSize+'px'}\">\n            <svg [ngStyle]=\"{'opacity': item.checked ? 1 : 0}\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\">\n                <path fill=\"#fff\" filter=\"drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))\" d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n            </svg>\n        </label>\n        <div class=\"active-outline\" [ngStyle]=\"{'border': item.checked ? '1px solid #ddd' : '1px solid #fff', 'width': swatchSize+'px', 'height': swatchSize+'px', 'border-radius': swatchRadius+'px'}\"></div>\n    </div>\n</div>\n\n",
                    styles: [".swatch{display:flex;flex-wrap:wrap;margin-bottom:1em}.item{position:relative;margin-right:5px;margin-bottom:5px}.item label{border:1px solid #ccc;cursor:pointer;position:absolute;z-index:3;top:0;left:0}.item label svg{transition:.2s ease-in-out;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.item input[type=checkbox]{visibility:hidden;margin:0;padding:0}.item input[type=checkbox]:checked+label:after{opacity:1}.active-outline{position:absolute;top:0;left:0}"]
                },] }
    ];
    FilterSwatchComponent.ctorParameters = function () { return [
        { type: router.ActivatedRoute },
        { type: router.Router }
    ]; };
    FilterSwatchComponent.propDecorators = {
        filterData: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterSelected: [{ type: core.Input }],
        titlegroup: [{ type: core.Input }],
        swatchMapping: [{ type: core.Input }],
        swatchSize: [{ type: core.Input }],
        swatchRadius: [{ type: core.Input }]
    };

    var MdsFilterModule = /** @class */ (function () {
        function MdsFilterModule() {
        }
        return MdsFilterModule;
    }());
    MdsFilterModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        MdsFilterResetComponent,
                        FilterCheckboxComponent,
                        FilterSwatchComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        MdsFilterResetComponent,
                        FilterCheckboxComponent,
                        FilterSwatchComponent
                    ]
                },] }
    ];

    var MdsHightlightPrismComponent = /** @class */ (function () {
        function MdsHightlightPrismComponent() {
        }
        MdsHightlightPrismComponent.prototype.ngAfterViewInit = function () {
            Prism.highlightElement(this.codeContent.nativeElement);
        };
        MdsHightlightPrismComponent.prototype.ngOnChanges = function (changes) {
            var _a;
            if (changes === null || changes === void 0 ? void 0 : changes.code) {
                if ((_a = this.codeContent) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                    this.codeContent.nativeElement.textContent = this.code;
                    Prism.highlightElement(this.codeContent.nativeElement);
                }
            }
        };
        return MdsHightlightPrismComponent;
    }());
    MdsHightlightPrismComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mds-hightlight-prism',
                    template: "<pre *ngIf=\"language\" class=\"language-{{ language }}\">\n<code #codeContent class=\"language-{{ language }}\">{{code}}</code>\n</pre>",
                    styles: ["pre{font-size:small}"]
                },] }
    ];
    MdsHightlightPrismComponent.ctorParameters = function () { return []; };
    MdsHightlightPrismComponent.propDecorators = {
        codeContent: [{ type: core.ViewChild, args: ['codeContent',] }],
        code: [{ type: core.Input }],
        language: [{ type: core.Input }]
    };

    var MdsHightlightPrismModule = /** @class */ (function () {
        function MdsHightlightPrismModule() {
        }
        return MdsHightlightPrismModule;
    }());
    MdsHightlightPrismModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        MdsHightlightPrismComponent
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [MdsHightlightPrismComponent]
                },] }
    ];

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
    FilterPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'filter',
                    pure: false
                },] }
    ];
    /* Document Filter Pipe Summarized by MediaDesain
      Items is loop of array item and filter is item will show. Makesure format filter like this example
      const items = [
        {category:'A', type:'food'},
        {category:'B', type:'drink'},
        {category:'C', type:'snack'},
        {category:'A', type:'drink'},
        {category:'B', type:'snack'}
      ]
      const filteritems = {
        category:['A','B'],
        type:['food', 'drink']
      }
      <ul>
        <li *ngFor="let item of (items|filter:filteritems)"> ... </li>
      </ul>

      Output [
        {category:'A', type:'food'},
        {category:'B', type:'drink'},
        {category:'A', type:'drink'}
      ]
    */

    var SafeUrlPipe = /** @class */ (function () {
        function SafeUrlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeUrlPipe.prototype.transform = function (url) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        };
        return SafeUrlPipe;
    }());
    SafeUrlPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'safeurl'
                },] }
    ];
    SafeUrlPipe.ctorParameters = function () { return [
        { type: platformBrowser.DomSanitizer }
    ]; };

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
    SearchPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'search',
                    pure: false
                },] }
    ];

    var MdsPipesModule = /** @class */ (function () {
        function MdsPipesModule() {
        }
        return MdsPipesModule;
    }());
    MdsPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        FilterPipe,
                        SafeUrlPipe,
                        SearchPipe
                    ],
                    imports: [common.CommonModule],
                    exports: [
                        FilterPipe,
                        SafeUrlPipe,
                        SearchPipe
                    ]
                },] }
    ];

    var MdsFilterCheckboxComponent = /** @class */ (function () {
        function MdsFilterCheckboxComponent(router, activeroute) {
            this.router = router;
            this.activeroute = activeroute;
            this.filterList = {};
            this.filterSelectedUrl = {};
        }
        MdsFilterCheckboxComponent.prototype.ngOnInit = function () {
            this.filterToCheckbox();
        };
        MdsFilterCheckboxComponent.prototype.filterToCheckbox = function () {
            var _this = this;
            if (!this.filterBy) {
                return;
            }
            this.filterBy.forEach(function (prop) {
                // Create Filter Model
                if (!_this.filterData) {
                    return;
                }
                var getAllValue = _this.filterData.map(function (item) { return item[prop].includes(',') ? item[prop].split(',') : item[prop]; });
                getAllValue.forEach(function (values, key) {
                    if (Array.isArray(values)) {
                        values.forEach(function (value) {
                            if (getAllValue.indexOf(value) === -1) {
                                getAllValue.push(value);
                            }
                        });
                        getAllValue.splice(key, 1);
                    }
                });
                var listval = __spread(new Set(getAllValue.flat()));
                var convertcheckbox = [];
                listval.forEach(function (val) {
                    if (val) {
                        var obj_1 = {};
                        obj_1.text = val;
                        obj_1.value = MdsStringUtils.convertToSlug(val);
                        if (!obj_1.ischecked) {
                            obj_1.ischecked = false;
                        }
                        _this.activeroute.queryParams.subscribe(function (param) {
                            if (param[prop]) {
                                var isArray = param[prop].includes(',');
                                var checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                                var isInclude = checkArrOrStr.map(function (item) { return item === obj_1.value; }).includes(true);
                                obj_1.ischecked = isInclude ? true : false;
                            }
                        });
                        convertcheckbox.push(obj_1);
                    }
                });
                _this.filterList[prop] = convertcheckbox;
                // Selected Filter Model
                setTimeout(function () {
                    _this.filterSelected[prop] = _this.filterList[prop].filter(function (a) { return a.ischecked; }).map(function (a) { return a.text; });
                    _this.filterSelectedUrl[prop] = _this.filterList[prop].filter(function (a) { return a.ischecked; }).map(function (a) { return a.value; });
                    if (_this.filterSelected[prop].length === 0) {
                        delete _this.filterSelected[prop];
                    }
                }, 500);
            });
        };
        MdsFilterCheckboxComponent.prototype.checkBoxFilter = function (filterSelected, filterSelectedUrl, prop, select) {
            var _a, _b, _c;
            // ----- IF URL PARAMETER EMPTY ----- //
            if (!filterSelected[prop] || !filterSelectedUrl[prop]) {
                filterSelected[prop] = [];
                filterSelectedUrl[prop] = [];
            }
            this.router.navigate([], {
                queryParams: (_a = {}, _a[prop] = select.value, _a),
                queryParamsHandling: 'merge'
            });
            // ----- IF URL PARAMETER EXSIEST ----- //
            var idx = filterSelected[prop].indexOf(select.text);
            if (idx > -1) {
                // Remove param value/s
                filterSelected[prop].splice(idx, 1);
                filterSelectedUrl[prop].splice(idx, 1);
                // Delete property if value/s empty
                if (filterSelected[prop].length === 0 || filterSelectedUrl[prop].length === 0) {
                    delete filterSelected[prop];
                    delete filterSelectedUrl[prop];
                }
                // Remove to url queryParam
                this.router.navigate([], {
                    queryParams: (_b = {}, _b[prop] = filterSelectedUrl[prop] ? filterSelectedUrl[prop].join() : null, _b),
                    queryParamsHandling: 'merge'
                });
            }
            else {
                // Add property value/s
                filterSelected[prop].push(select.text);
                filterSelectedUrl[prop].push(select.value);
                // Add to url queryParam
                this.router.navigate([], {
                    queryParams: (_c = {}, _c[prop] = filterSelectedUrl[prop].join(), _c),
                    queryParamsHandling: 'merge'
                });
            }
        };
        MdsFilterCheckboxComponent.prototype.resetFilter = function (filter, filterSelected, prop) {
            var _a;
            filter[prop].forEach(function (a) { return a.ischecked = false; });
            delete filterSelected[prop];
            this.router.navigate([], {
                queryParams: (_a = {}, _a[prop] = null, _a),
                queryParamsHandling: 'merge'
            });
        };
        MdsFilterCheckboxComponent.prototype.resetAll = function (filter, filterSelected, props) {
            var _this = this;
            props.forEach(function (prop) {
                filter[prop].forEach(function (a) { return a.ischecked = false; });
                delete filterSelected[prop];
                _this.router.navigate([], { queryParams: {} });
            });
        };
        return MdsFilterCheckboxComponent;
    }());
    MdsFilterCheckboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'mds-filter-checkbox',
                    template: "<div *ngIf=\"!filterBy\">No Filter Key</div>\n<div *ngIf=\"!filterData\">No Filter Data Found</div>\n\n<ng-container *ngIf=\"filterBy && filterData\">\n    <div *ngFor=\"let prop of filterBy\" [class]=\"classgroup\">\n        <div class=\"filter-header\" *ngIf=\"filterList[prop].length > 1\">\n            {{titlegroup ? titlegroup : 'Filter by'}} {{prop.replace('_','')|titlecase}}\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filterList,filterSelected,prop)\">\n                <span [innerHTML]=\"resetgroup ? resetgroup : '\u2715'\"></span>\n            </a>\n        </div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length === 0\">Key not found</div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length > 1\">\n            <div class=\"form-check\" *ngFor=\"let filter of filterList[prop]; let i = index\">\n                <input class=\"form-check-input\"\n                    [id]=\"prop+i\"\n                    type=\"checkbox\"\n                    [value]=\"filter.value\"\n                    [checked]=\"filter.ischecked\"\n                    (change)=\"checkBoxFilter(filterSelected, filterSelectedUrl, prop, filter);filter.ischecked = !filter.ischecked;\"\n                >\n                <label class=\"form-check-label\" [for]=\"prop+i\">{{filter.text|titlecase}}</label>\n            </div>\n        </div>\n    </div>\n    <div>\n        <button class=\"btn btn-primary\" *ngIf=\"(filterSelected|json) != '{}'\" (click)=\"resetAll(filterList,filterSelected, filterBy)\">{{reset ? reset : 'Reset All'}}</button>\n    </div>\n</ng-container>",
                    styles: [""]
                },] }
    ];
    MdsFilterCheckboxComponent.ctorParameters = function () { return [
        { type: router.Router },
        { type: router.ActivatedRoute }
    ]; };
    MdsFilterCheckboxComponent.propDecorators = {
        classgroup: [{ type: core.Input }],
        titlegroup: [{ type: core.Input }],
        resetgroup: [{ type: core.Input }],
        reset: [{ type: core.Input }],
        filterData: [{ type: core.Input }],
        filterBy: [{ type: core.Input }],
        filterSelected: [{ type: core.Input }]
    };

    var MdsFilterCheckboxModule = /** @class */ (function () {
        function MdsFilterCheckboxModule() {
        }
        return MdsFilterCheckboxModule;
    }());
    MdsFilterCheckboxModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MdsFilterCheckboxComponent],
                    imports: [common.CommonModule],
                    providers: [],
                    exports: [MdsFilterCheckboxComponent]
                },] }
    ];

    /*
     * Export all of module medes-ui
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FilterCheckboxComponent = FilterCheckboxComponent;
    exports.FilterPipe = FilterPipe;
    exports.FilterSwatchComponent = FilterSwatchComponent;
    exports.MdsArrayUtils = MdsArrayUtils;
    exports.MdsDateUtils = MdsDateUtils;
    exports.MdsFilterCheckboxComponent = MdsFilterCheckboxComponent;
    exports.MdsFilterCheckboxModule = MdsFilterCheckboxModule;
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

})));
//# sourceMappingURL=medes-ui.umd.js.map
