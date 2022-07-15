import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule, ViewChild, Pipe } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1 from '@angular/router';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';
import * as i1$1 from '@angular/platform-browser';

/* eslint-disable @typescript-eslint/no-explicit-any */
class MdsFilterResetComponent {
    constructor(router) {
        this.router = router;
        this.filterSelectedChange = new EventEmitter();
    }
    ngOnInit() {
        console.log('ngOninit');
    }
    reset() {
        this.filterSelectedChange.emit({});
        this.router.navigate([]);
    }
}
MdsFilterResetComponent.ɵfac = function MdsFilterResetComponent_Factory(t) { return new (t || MdsFilterResetComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
MdsFilterResetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdsFilterResetComponent, selectors: [["mds-filter-reset"]], inputs: { content: "content", class: "class", filterSelected: "filterSelected" }, outputs: { filterSelectedChange: "filterSelectedChange" }, decls: 4, vars: 5, consts: [[1, "filter-group"], [2, "width", "100%", 3, "ngClass", "disabled", "click"]], template: function MdsFilterResetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function MdsFilterResetComponent_Template_button_click_1_listener() { return ctx.reset(); });
        i0.ɵɵpipe(2, "json");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.class && ctx.class)("disabled", i0.ɵɵpipeBind1(2, 3, ctx.filterSelected) === "{}");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.content);
    } }, directives: [i2.NgClass], pipes: [i2.JsonPipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsFilterResetComponent, [{
        type: Component,
        args: [{
                selector: 'mds-filter-reset',
                templateUrl: './filter-reset.component.html',
                styleUrls: ['./filter-reset.component.css']
            }]
    }], function () { return [{ type: i1.Router }]; }, { content: [{
            type: Input
        }], class: [{
            type: Input
        }], filterSelected: [{
            type: Input
        }], filterSelectedChange: [{
            type: Output
        }] }); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @dynamic
class MdsArrayUtils {
}
MdsArrayUtils.countUniqueValues = (data) => {
    const count = {};
    data.forEach((i) => {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
};
MdsArrayUtils.filterMultiple = (data, key, filterdata) => {
    // console.log('FilterMultiple', data, key, filterdata)
    filterdata = filterdata.join().toLocaleLowerCase().split(',');
    const newdata = [];
    data.filter((item) => {
        if (item[key]) {
            item[key] = item[key].includes(',') ? item[key].split(',') : item[key];
            const isArray = Array.isArray(item[key]);
            // If values of key is string
            if (!isArray) {
                if (filterdata.indexOf(item[key].toLocaleLowerCase()) !== -1) {
                    newdata.push(item);
                }
            }
            // If values of key is Array
            if (isArray) {
                item[key].forEach((val) => {
                    if (filterdata.indexOf(val.toLocaleLowerCase()) !== -1) {
                        newdata.push(item);
                    }
                });
            }
        }
    });
    return [...new Set(newdata)];
};
MdsArrayUtils.groupValues = (arr, key) => {
    const keyvalue = (a) => a[key];
    return arr.reduce((r, v, i, a, k = keyvalue(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
};
MdsArrayUtils.sumValues = (arr) => {
    return arr.reduce((total, num) => total + num);
};
MdsArrayUtils.arrayTolistObject = (arr, objectkey) => {
    const groupObj = {};
    for (const item of arr) {
        const newobj = {};
        newobj[item[objectkey]] = item;
        Object.assign(groupObj, newobj);
    }
    return groupObj;
};

// @dynamic
class MdsDateUtils {
    static untilNow(date, customdata, customprefix) {
        const intervals = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 },
        ];
        let prefix = 'ago';
        if (customprefix) {
            prefix = customprefix;
        }
        if (customdata) {
            customdata.forEach((item, i) => intervals[i].label = item);
        }
        const seconds = Math.floor((Date.now() - date) / 1000);
        const interval = intervals.find((i) => i.seconds < seconds);
        const count = Math.floor(seconds / interval.seconds);
        return `${count} ${interval.label}${count !== 1 && !customdata ? 's' : ''} ${prefix}`;
    }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// @dynamic
class MdsNumberUtils {
}
MdsNumberUtils.shortNumber = (value, custom) => {
    const defaultdata = ['k', 'm', 'b', 't'];
    const suffixes = custom ? ['', ...custom] : ['', ...defaultdata];
    const suffixNum = Math.floor(('' + value).length / 3);
    let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 !== 0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
};
MdsNumberUtils.toCurrency = (money, code, decimal) => {
    const formatlist = { IDR: 'id-ID', JYP: 'ja-JP', EUR: 'de-DE', USD: 'en-US' };
    const format = formatlist[code];
    decimal = decimal ? decimal : 0;
    return new Intl.NumberFormat(format, { style: 'currency', currency: code, minimumFractionDigits: decimal }).format(money);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @dynamic
class MdsObjectUtils {
}
MdsObjectUtils.removeKeysIfEmpty = (obj) => {
    for (const namaProperty in obj) {
        if (obj[namaProperty] === null || obj[namaProperty] === undefined || obj[namaProperty] === '') {
            delete obj[namaProperty];
        }
    }
    return obj;
};

// @dynamic
class MdsStringUtils {
}
MdsStringUtils.lowerCase = (str) => {
    return str.toLowerCase();
};
MdsStringUtils.upperCase = (str) => {
    return str.toUpperCase();
};
MdsStringUtils.titleCase = (str) => {
    return str.replace(/\b(\w)/g, (k) => k.toUpperCase());
};
MdsStringUtils.pascalCase = (str) => {
    return str.toLowerCase().replace(/[^\w\s]/gi, ' ').replace(/(?:_| |\b)(\w)/g, (p1) => {
        return p1.toUpperCase();
    }).replace(/\s/g, '');
};
MdsStringUtils.randomCharacter = (length, characters) => {
    // sample random character or custom characters
    const chars = characters ? characters : 'abcefghijklnopqrtuvwxyz0123456789';
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};
MdsStringUtils.convertToSlug = (text) => {
    if (!text) {
        return;
    }
    const result = text.toLowerCase().replace('.', ' ').replace('-', ' ').replace(/[^\w ]+/g, '').replace(/ +/g, '-');
    return result;
};
MdsStringUtils.getYoutubeID = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    }
    else {
        return '';
    }
};
MdsStringUtils.getYoutubeEmbed = (url) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    let id;
    if (match && match[2].length === 11) {
        id = match[2];
    }
    return 'https://www.youtube.com/embed/' + id;
};
/* Size option
// 0/1/2/3/default/sd1/sd2/sd3/sddefault/mq1/mq2/mq3/mqdefault/
// hq1/hq2/hq3/hqdefault/hq720/maxres1/maxres2/maxres3/maxresdefault
*/
MdsStringUtils.getYoutubeThumbnail = (url, size) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    let id;
    if (match && match[2].length === 11) {
        id = match[2];
    }
    size = size ? size : 'hqdefault';
    return 'https://i.ytimg.com/vi/' + id + '/' + size + '.jpg';
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// @dynamic
class MdsColorUtils {
}
MdsColorUtils.rgbToHex = (rgb) => '#' + rgb.map((x) => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}).join('');
MdsColorUtils.hexToRgba = (hex, opacity) => {
    opacity = opacity > 1 ? opacity = 1 : opacity;
    const rgba = 'rgba(' + (hex = hex.replace('#', ''))
        .match(new RegExp('(.{' + hex.length / 3 + '})', 'g'))
        .map((l) => parseInt(hex.length % 2 ? l + l : l, 16))
        .concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
    return rgba;
};
MdsColorUtils.addDarkLight = (color, amount) => {
    const coloradjust = '#' + color.replace(/^#/, '')
        .replace(/../g, clr => ('0' + Math.min(255, Math.max(0, parseInt(clr, 16) + amount))
        .toString(16))
        .substr(-2));
    return coloradjust;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
function FilterCheckboxComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.titlegroup + " ");
} }
function FilterCheckboxComponent_div_0_ng_container_1_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵlistener("click", function FilterCheckboxComponent_div_0_ng_container_1_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const prop_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.resetFilter(ctx_r6.filtergroup, prop_r1); });
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", ctx_r4.reset ? ctx_r4.reset : "\u2715", i0.ɵɵsanitizeHtml);
} }
function FilterCheckboxComponent_div_0_ng_container_1_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵelementStart(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itm_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", itm_r9.counter, ")");
} }
function FilterCheckboxComponent_div_0_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "input", 11);
    i0.ɵɵlistener("change", function FilterCheckboxComponent_div_0_ng_container_1_div_7_Template_input_change_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const itm_r9 = restoredCtx.$implicit; const prop_r1 = i0.ɵɵnextContext(2).$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.clickCheckbox(itm_r9, prop_r1); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 12);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, FilterCheckboxComponent_div_0_ng_container_1_div_7_div_6_Template, 3, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itm_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const prop_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", prop_r1 + i_r10)("checked", itm_r9.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", prop_r1 + i_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, itm_r9.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r5.hideCounter);
} }
function FilterCheckboxComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, FilterCheckboxComponent_div_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, FilterCheckboxComponent_div_0_ng_container_1_a_6_Template, 2, 1, "a", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, FilterCheckboxComponent_div_0_ng_container_1_div_7_Template, 7, 7, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const prop_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r2.titlegroup);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(5, 4, prop_r1), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.filterSelected[prop_r1]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.filtergroup[prop_r1]);
} }
function FilterCheckboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FilterCheckboxComponent_div_0_ng_container_1_Template, 8, 6, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prop_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.filtergroup[prop_r1].length > 1);
} }
class FilterCheckboxComponent {
    constructor(router, activeroute) {
        this.router = router;
        this.activeroute = activeroute;
        this.filterSelectedUrl = {};
        this.filtergroup = {};
    }
    ngOnInit() {
        this.construcFilterGroup();
    }
    ngOnChanges(changes) {
        this.construcFilterGroup();
    }
    construcFilterGroup() {
        this.filterBy.forEach((prop, key) => {
            // Remove temprary key
            if (prop[0] === '_') {
                this.filterBy.push(prop.replace('_', ''));
                this.filterBy.splice(key, 1);
            }
            this.filterData.forEach((item) => {
                if (prop[0] === '_') {
                    item[prop.replace('_', '')] = item[prop];
                    delete item[prop];
                }
            });
            prop = prop.replace('_', '');
            // Construct Checkbox label & value
            const getAllValue = this.filterData.map((item) => Array.isArray(item[prop]) ? item[prop] : item[prop].split(',')).flat();
            const value = MdsArrayUtils.countUniqueValues(getAllValue);
            const label = Object.keys(value);
            const counter = Object.values(value);
            const group = {};
            group[prop] = [];
            for (let i = 0; i < label.length; i++) {
                const obj = {
                    label: label[i],
                    counter: counter[i],
                    url: MdsStringUtils.convertToSlug(label[i]),
                    checked: false
                };
                // check checked element base on url parameter
                this.activeroute.queryParams.subscribe(param => {
                    if (param[prop]) {
                        const isArray = param[prop].includes(',');
                        const checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                        const isInclude = checkArrOrStr.map((item) => item === obj.url).includes(true);
                        obj.checked = isInclude ? true : false;
                    }
                });
                group[prop].push(obj);
            }
            Object.assign(this.filtergroup, group);
            this.filterSelected[prop] = this.filtergroup[prop].filter(item => item.checked).map(item => item.label);
            this.filterSelectedUrl[prop] = this.filtergroup[prop].filter(item => item.checked).map(item => item.url);
            if (this.filterSelected[prop].length === 0) {
                delete this.filterSelected[prop];
            }
        });
    }
    clickCheckbox(select, prop) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!this.filterSelected[prop] || !this.filterSelectedUrl[prop]) {
            this.filterSelected[prop] = [];
            this.filterSelectedUrl[prop] = [];
        }
        this.router.navigate([], {
            queryParams: { [prop]: select.url },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = this.filterSelected[prop].indexOf(select.label);
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
                queryParams: { [prop]: this.filterSelectedUrl[prop] ? this.filterSelectedUrl[prop].join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this.filterSelected[prop].push(select.label);
            this.filterSelectedUrl[prop].push(select.url);
            // Add to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: this.filterSelectedUrl[prop].join() },
                queryParamsHandling: 'merge'
            });
        }
    }
    resetFilter(select, prop) {
        select[prop].forEach((item) => item.checked = false);
        delete this.filterSelected[prop];
        this.router.navigate([], {
            queryParams: { [prop]: null },
            queryParamsHandling: 'merge'
        });
    }
}
FilterCheckboxComponent.ɵfac = function FilterCheckboxComponent_Factory(t) { return new (t || FilterCheckboxComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
FilterCheckboxComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterCheckboxComponent, selectors: [["mds-filter-checkbox"]], inputs: { filterData: "filterData", filterBy: "filterBy", filterSelected: "filterSelected", titlegroup: "titlegroup", reset: "reset", hideCounter: "hideCounter" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "filter-checkbox margin-b-1", 4, "ngFor", "ngForOf"], [1, "filter-checkbox", "margin-b-1"], [4, "ngIf"], [1, "group-title", "flex-horizontal", "horizontal-between"], [1, "title-label"], ["class", "title-close", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "group-checkbox flex-horizontal horizontal-between", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "title-close", 3, "click"], [3, "innerHTML"], [1, "group-checkbox", "flex-horizontal", "horizontal-between"], [1, "checkbox-label"], ["type", "checkbox", 3, "id", "checked", "change"], [3, "for"], ["class", "checkbox-counter", 4, "ngIf"], [1, "checkbox-counter"]], template: function FilterCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, FilterCheckboxComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.filterBy);
    } }, directives: [i2.NgForOf, i2.NgIf], pipes: [i2.TitleCasePipe], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'mds-filter-checkbox',
                templateUrl: './filter-checkbox.component.html',
                styleUrls: ['./filter-checkbox.component.css']
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, { filterData: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterSelected: [{
            type: Input
        }], titlegroup: [{
            type: Input
        }], reset: [{
            type: Input
        }], hideCounter: [{
            type: Input
        }] }); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
const _c0$1 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1, a2, a3) { return { "border-radius": a0, "background-color": a1, "width": a2, "height": a3 }; };
const _c2 = function (a0) { return { "opacity": a0 }; };
const _c3 = function (a0, a1, a2, a3) { return { "border": a0, "width": a1, "height": a2, "border-radius": a3 }; };
function FilterSwatchComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "input", 3);
    i0.ɵɵlistener("change", function FilterSwatchComponent_div_3_Template_input_change_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const item_r1 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.clickCheckbox(item_r1); return item_r1.checked = !item_r1.checked; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 5);
    i0.ɵɵelement(4, "path", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(5, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "checkbox" + i_r2)("ngStyle", i0.ɵɵpureFunction2(7, _c0$1, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"))("checked", item_r1.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", "checkbox" + i_r2)("ngStyle", i0.ɵɵpureFunction4(10, _c1, ctx_r0.swatchRadius + "px", item_r1.color, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c2, item_r1.checked ? 1 : 0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(17, _c3, item_r1.checked ? "1px solid #ddd" : "1px solid #fff", ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px", ctx_r0.swatchRadius + "px"));
} }
class FilterSwatchComponent {
    constructor(activeroute, router) {
        this.activeroute = activeroute;
        this.router = router;
        this.filterSelectedUrl = {};
        this.filterswatchgroup = [];
    }
    ngOnInit() {
        this.swatchSize = this.swatchSize || 30;
        this.swatchRadius = this.swatchRadius || 0;
        this.construcFilterSwatch();
    }
    ngOnChanges(changes) {
        this.construcFilterSwatch();
    }
    construcFilterSwatch() {
        // Construct Checkbox label & value
        let getAllValue = this.filterData.map((item) => Array.isArray(item[this.filterBy]) ? item[this.filterBy] : item[this.filterBy].split(',')).flat();
        getAllValue = [...new Set(getAllValue)];
        const checkswatch = [];
        for (const val of getAllValue) {
            const obj = {
                label: val,
                url: MdsStringUtils.convertToSlug(val),
                color: this.swatchMapping[MdsStringUtils.convertToSlug(val)],
                checked: false
            };
            this.activeroute.queryParams.subscribe(param => {
                if (param[this.filterBy]) {
                    const isArray = param[this.filterBy].includes(',');
                    const checkArrOrStr = isArray ? param[this.filterBy].split(',') : [param[this.filterBy]];
                    const isInclude = checkArrOrStr.map((item) => item === obj.url).includes(true);
                    obj.checked = isInclude ? true : false;
                }
            });
            checkswatch.push(obj);
            this.filterswatchgroup = checkswatch;
            this.filterSelected[this.filterBy] = this.filterswatchgroup.filter(item => item.checked).map(item => item.url);
            this.filterSelectedUrl[this.filterBy] = this.filterswatchgroup.filter(item => item.checked).map(item => item.label);
            if (this.filterSelected[this.filterBy].length === 0) {
                delete this.filterSelected[this.filterBy];
            }
        }
    }
    clickCheckbox(select) {
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
        const idx = this.filterSelected[this.filterBy].indexOf(select.label);
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
    }
}
FilterSwatchComponent.ɵfac = function FilterSwatchComponent_Factory(t) { return new (t || FilterSwatchComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); };
FilterSwatchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterSwatchComponent, selectors: [["mds-filter-swatch"]], inputs: { filterData: "filterData", filterBy: "filterBy", filterSelected: "filterSelected", titlegroup: "titlegroup", swatchMapping: "swatchMapping", swatchSize: "swatchSize", swatchRadius: "swatchRadius" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-swatch"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["type", "checkbox", 3, "id", "ngStyle", "checked", "change"], [3, "for", "ngStyle"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", 3, "ngStyle"], ["fill", "#fff", "filter", "drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))", "d", "M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"], [1, "active", 3, "ngStyle"]], template: function FilterSwatchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵtemplate(3, FilterSwatchComponent_div_3_Template, 6, 22, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.titlegroup ? ctx.titlegroup : "Color");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterswatchgroup);
    } }, directives: [i2.NgForOf, i2.NgStyle], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterSwatchComponent, [{
        type: Component,
        args: [{
                selector: 'mds-filter-swatch',
                templateUrl: './filter-swatch.component.html',
                styleUrls: ['./filter-swatch.component.css']
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, { filterData: [{
            type: Input
        }], filterBy: [{
            type: Input
        }], filterSelected: [{
            type: Input
        }], titlegroup: [{
            type: Input
        }], swatchMapping: [{
            type: Input
        }], swatchSize: [{
            type: Input
        }], swatchRadius: [{
            type: Input
        }] }); })();

class MdsFilterModule {
}
MdsFilterModule.ɵfac = function MdsFilterModule_Factory(t) { return new (t || MdsFilterModule)(); };
MdsFilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdsFilterModule });
MdsFilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsFilterModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MdsFilterResetComponent,
                    FilterCheckboxComponent,
                    FilterSwatchComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [
                    MdsFilterResetComponent,
                    FilterCheckboxComponent,
                    FilterSwatchComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdsFilterModule, { declarations: [MdsFilterResetComponent,
        FilterCheckboxComponent,
        FilterSwatchComponent], imports: [CommonModule], exports: [MdsFilterResetComponent,
        FilterCheckboxComponent,
        FilterSwatchComponent] }); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
const _c0 = ["codeContent"];
function MdsHightlightPrismComponent_pre_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "pre");
    i0.ɵɵelementStart(1, "code", null, 1);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\n");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("language-", ctx_r0.language, "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("language-", ctx_r0.language, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.code);
} }
class MdsHightlightPrismComponent {
    // // constructor() { }
    ngAfterViewInit() {
        Prism.highlightElement(this.codeContent.nativeElement);
    }
    ngOnChanges(changes) {
        var _a;
        if (changes === null || changes === void 0 ? void 0 : changes.code) {
            if ((_a = this.codeContent) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.codeContent.nativeElement.textContent = this.code;
                Prism.highlightElement(this.codeContent.nativeElement);
            }
        }
    }
}
MdsHightlightPrismComponent.ɵfac = function MdsHightlightPrismComponent_Factory(t) { return new (t || MdsHightlightPrismComponent)(); };
MdsHightlightPrismComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdsHightlightPrismComponent, selectors: [["mds-hightlight-prism"]], viewQuery: function MdsHightlightPrismComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.codeContent = _t.first);
    } }, inputs: { code: "code", language: "language" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], ["codeContent", ""]], template: function MdsHightlightPrismComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MdsHightlightPrismComponent_pre_0_Template, 5, 7, "pre", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.language);
    } }, directives: [i2.NgIf], styles: ["pre[_ngcontent-%COMP%]{font-size:small;margin:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsHightlightPrismComponent, [{
        type: Component,
        args: [{
                selector: 'mds-hightlight-prism',
                templateUrl: './mds-hightlight-prism.component.html',
                styleUrls: ['./mds-hightlight-prism.component.scss']
            }]
    }], null, { codeContent: [{
            type: ViewChild,
            args: ['codeContent']
        }], code: [{
            type: Input
        }], language: [{
            type: Input
        }] }); })();

class MdsHightlightPrismModule {
}
MdsHightlightPrismModule.ɵfac = function MdsHightlightPrismModule_Factory(t) { return new (t || MdsHightlightPrismModule)(); };
MdsHightlightPrismModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdsHightlightPrismModule });
MdsHightlightPrismModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsHightlightPrismModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MdsHightlightPrismComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [MdsHightlightPrismComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdsHightlightPrismModule, { declarations: [MdsHightlightPrismComponent], imports: [CommonModule], exports: [MdsHightlightPrismComponent] }); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
class FilterPipe {
    transform(items, filter) {
        if (!items) {
            return [];
        }
        const keys = Object.keys(filter);
        const values = Object.values(filter);
        for (const a in keys) {
            if (keys) {
                const key = keys[a];
                const val = values[a];
                if (!Array.isArray(val)) {
                    items = items.filter(item => item[key].includes(val));
                }
                else {
                    if (val.length > 0) {
                        items = MdsArrayUtils.filterMultiple(items, key, val);
                    }
                }
            }
        }
        return items;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(i0.ɵɵdirectiveInject(i1$1.DomSanitizer, 16)); };
SafeUrlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeurl", type: SafeUrlPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeUrlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeurl'
            }]
    }], function () { return [{ type: i1$1.DomSanitizer }]; }, null); })();

/* eslint-disable @typescript-eslint/no-explicit-any */
class SearchPipe {
    transform(items, search) {
        if (items && search.keyword !== undefined) {
            items = items.filter(item => item[search.objkey].toLowerCase().includes(search.keyword.toLowerCase()));
            return items;
        }
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'search',
                pure: false
            }]
    }], null, null); })();

class MdsPipesModule {
}
MdsPipesModule.ɵfac = function MdsPipesModule_Factory(t) { return new (t || MdsPipesModule)(); };
MdsPipesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdsPipesModule });
MdsPipesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsPipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FilterPipe,
                    SafeUrlPipe,
                    SearchPipe
                ],
                imports: [CommonModule],
                exports: [
                    FilterPipe,
                    SafeUrlPipe,
                    SearchPipe
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdsPipesModule, { declarations: [FilterPipe,
        SafeUrlPipe,
        SearchPipe], imports: [CommonModule], exports: [FilterPipe,
        SafeUrlPipe,
        SearchPipe] }); })();

/*
 * Export all of module medes-ui
 */
// Deprecated Soon
// export * from './lib/mds-filter-checkbox/mds-filter-checkbox.module'; // v.0.0.5

/**
 * Generated bundle index. Do not edit.
 */

export { FilterCheckboxComponent, FilterPipe, FilterSwatchComponent, MdsArrayUtils, MdsColorUtils, MdsDateUtils, MdsFilterModule, MdsFilterResetComponent, MdsHightlightPrismComponent, MdsHightlightPrismModule, MdsNumberUtils, MdsObjectUtils, MdsPipesModule, MdsStringUtils, SafeUrlPipe, SearchPipe };
//# sourceMappingURL=medes-ui.js.map
