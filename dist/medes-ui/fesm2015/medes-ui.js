import { EventEmitter, Component, Input, Output, NgModule, ViewChild, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { highlightElement } from 'prismjs';
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
import { DomSanitizer } from '@angular/platform-browser';

class MdsFilterResetComponent {
    constructor(router) {
        this.router = router;
        this.filterSelectedChange = new EventEmitter();
    }
    ngOnInit() {
    }
    reset() {
        this.filterSelectedChange.emit({});
        this.router.navigate([]);
    }
}
MdsFilterResetComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-reset',
                template: "<div class=\"filter-group\">\n    <button (click)=\"reset()\" [disabled]=\"(filterSelected|json) === '{}'\" style=\"width: 100%;\">{{content}}</button>\n</div>",
                styles: [""]
            },] }
];
MdsFilterResetComponent.ctorParameters = () => [
    { type: Router }
];
MdsFilterResetComponent.propDecorators = {
    content: [{ type: Input }],
    filterSelected: [{ type: Input }],
    filterSelectedChange: [{ type: Output }]
};

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
            const getAllValue = this.filterData.map((item) => item[prop].split(',')).flat();
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
FilterCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-checkbox',
                template: "<!-- Filter Group -->\n<div *ngFor=\"let prop of filterBy\" class=\"filter-group\" style=\"margin-bottom: 1em;\">\n    <ng-container *ngIf=\"filtergroup[prop].length > 1\">\n        <!-- Title Group -->\n        <div class=\"checkbox-title\">\n            <div>\n                <ng-container *ngIf=\"titlegroup\">{{titlegroup+' '}}</ng-container>{{prop|titlecase}}\n            </div>\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filtergroup, prop)\">\n                <span [innerHTML]=\"reset ? reset : '\u2715'\"></span>\n            </a>\n        </div>\n        <!-- Checkbox + Label -->\n        <div *ngFor=\"let itm of filtergroup[prop];let i=index\" class=\"checkbox-group\" style=\"display: flex;\">\n            <div style=\"white-space: nowrap; width: 100%; padding-right: 1em; overflow: hidden; text-overflow: ellipsis;\">\n                <input [id]=\"prop+i\" type=\"checkbox\" [checked]=\"itm.checked\" (change)=\"clickCheckbox(itm, prop)\"/>\n                <label [for]=\"prop+i\"> {{itm.label|titlecase}}</label>\n            </div>\n            <div *ngIf=\"!hideCounter\">\n                <small>({{itm.counter}})</small>\n            </div>\n        </div>\n    </ng-container>\n</div>",
                styles: [".checkbox-title{display:flex;width:100%;justify-content:space-between}"]
            },] }
];
FilterCheckboxComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
FilterCheckboxComponent.propDecorators = {
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }],
    titlegroup: [{ type: Input }],
    reset: [{ type: Input }],
    hideCounter: [{ type: Input }]
};

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
        let getAllValue = this.filterData.map((item) => item[this.filterBy].split(',')).flat();
        getAllValue = [...new Set(getAllValue)];
        const checkswatch = [];
        // for (let i = 0; i < getAllValue.length; i++){
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
FilterSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-swatch',
                template: "<div>{{titlegroup ? titlegroup : 'Color'}}</div>\n<div class=\"swatch\">\n    <div *ngFor=\"let item of filterswatchgroup; let i=index\" class=\"item\">\n        <input type=\"checkbox\" [id]=\"'checkbox'+i\" [ngStyle]=\"{'width': swatchSize+'px', 'height': swatchSize+'px'}\" [checked]=\"item.checked\" (change)=\"clickCheckbox(item); item.checked=!item.checked\"/>\n        <label [for]=\"'checkbox'+i\" [ngStyle]=\"{'border-radius': swatchRadius+'px', 'background-color': item.color, 'width': swatchSize+'px', 'height': swatchSize+'px'}\">\n            <svg [ngStyle]=\"{'opacity': item.checked ? 1 : 0}\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\">\n                <path fill=\"#fff\" filter=\"drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))\" d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n            </svg>\n        </label>\n        <div class=\"active-outline\" [ngStyle]=\"{'border': item.checked ? '1px solid #ddd' : '1px solid #fff', 'width': swatchSize+'px', 'height': swatchSize+'px', 'border-radius': swatchRadius+'px'}\"></div>\n    </div>\n</div>\n\n",
                styles: [".swatch{display:flex;flex-wrap:wrap;margin-bottom:1em}.item{position:relative;margin-right:5px;margin-bottom:5px}.item label{border:1px solid #ccc;cursor:pointer;position:absolute;z-index:3;top:0;left:0}.item label svg{transition:.2s ease-in-out;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.item input[type=checkbox]{visibility:hidden;margin:0;padding:0}.item input[type=checkbox]:checked+label:after{opacity:1}.active-outline{position:absolute;top:0;left:0}"]
            },] }
];
FilterSwatchComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
FilterSwatchComponent.propDecorators = {
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }],
    titlegroup: [{ type: Input }],
    swatchMapping: [{ type: Input }],
    swatchSize: [{ type: Input }],
    swatchRadius: [{ type: Input }]
};

class MdsFilterModule {
}
MdsFilterModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class MdsHightlightPrismComponent {
    constructor() { }
    ngAfterViewInit() {
        highlightElement(this.codeContent.nativeElement);
    }
    ngOnChanges(changes) {
        var _a;
        if (changes === null || changes === void 0 ? void 0 : changes.code) {
            if ((_a = this.codeContent) === null || _a === void 0 ? void 0 : _a.nativeElement) {
                this.codeContent.nativeElement.textContent = this.code;
                highlightElement(this.codeContent.nativeElement);
            }
        }
    }
}
MdsHightlightPrismComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-hightlight-prism',
                template: "<pre *ngIf=\"language\" class=\"language-{{ language }}\">\n<code #codeContent class=\"language-{{ language }}\">{{code}}</code>\n</pre>",
                styles: ["pre{font-size:small}"]
            },] }
];
MdsHightlightPrismComponent.ctorParameters = () => [];
MdsHightlightPrismComponent.propDecorators = {
    codeContent: [{ type: ViewChild, args: ['codeContent',] }],
    code: [{ type: Input }],
    language: [{ type: Input }]
};

class MdsHightlightPrismModule {
}
MdsHightlightPrismModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MdsHightlightPrismComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [MdsHightlightPrismComponent]
            },] }
];

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
FilterPipe.decorators = [
    { type: Pipe, args: [{
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

class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'safeurl'
            },] }
];
SafeUrlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

class SearchPipe {
    transform(items, search) {
        if (items && search.keyword !== undefined) {
            items = items.filter(item => item[search.objkey].toLowerCase().includes(search.keyword.toLowerCase()));
            return items;
        }
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'search',
                pure: false
            },] }
];

class MdsPipesModule {
}
MdsPipesModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class MdsFilterCheckboxComponent {
    constructor(router, activeroute) {
        this.router = router;
        this.activeroute = activeroute;
        this.filterList = {};
        this.filterSelectedUrl = {};
    }
    ngOnInit() {
        this.filterToCheckbox();
    }
    filterToCheckbox() {
        if (!this.filterBy) {
            return;
        }
        this.filterBy.forEach((prop) => {
            // Create Filter Model
            if (!this.filterData) {
                return;
            }
            const getAllValue = this.filterData.map((item) => item[prop].includes(',') ? item[prop].split(',') : item[prop]);
            getAllValue.forEach((values, key) => {
                if (Array.isArray(values)) {
                    values.forEach(value => {
                        if (getAllValue.indexOf(value) === -1) {
                            getAllValue.push(value);
                        }
                    });
                    getAllValue.splice(key, 1);
                }
            });
            const listval = [...new Set(getAllValue.flat())];
            const convertcheckbox = [];
            listval.forEach((val) => {
                if (val) {
                    const obj = {};
                    obj.text = val;
                    obj.value = MdsStringUtils.convertToSlug(val);
                    if (!obj.ischecked) {
                        obj.ischecked = false;
                    }
                    this.activeroute.queryParams.subscribe(param => {
                        if (param[prop]) {
                            const isArray = param[prop].includes(',');
                            const checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                            const isInclude = checkArrOrStr.map((item) => item === obj.value).includes(true);
                            obj.ischecked = isInclude ? true : false;
                        }
                    });
                    convertcheckbox.push(obj);
                }
            });
            this.filterList[prop] = convertcheckbox;
            // Selected Filter Model
            setTimeout(() => {
                this.filterSelected[prop] = this.filterList[prop].filter((a) => a.ischecked).map((a) => a.text);
                this.filterSelectedUrl[prop] = this.filterList[prop].filter((a) => a.ischecked).map((a) => a.value);
                if (this.filterSelected[prop].length === 0) {
                    delete this.filterSelected[prop];
                }
            }, 500);
        });
    }
    checkBoxFilter(filterSelected, filterSelectedUrl, prop, select) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!filterSelected[prop] || !filterSelectedUrl[prop]) {
            filterSelected[prop] = [];
            filterSelectedUrl[prop] = [];
        }
        this.router.navigate([], {
            queryParams: { [prop]: select.value },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = filterSelected[prop].indexOf(select.text);
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
                queryParams: { [prop]: filterSelectedUrl[prop] ? filterSelectedUrl[prop].join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            // Add property value/s
            filterSelected[prop].push(select.text);
            filterSelectedUrl[prop].push(select.value);
            // Add to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: filterSelectedUrl[prop].join() },
                queryParamsHandling: 'merge'
            });
        }
    }
    resetFilter(filter, filterSelected, prop) {
        filter[prop].forEach((a) => a.ischecked = false);
        delete filterSelected[prop];
        this.router.navigate([], {
            queryParams: { [prop]: null },
            queryParamsHandling: 'merge'
        });
    }
    resetAll(filter, filterSelected, props) {
        props.forEach((prop) => {
            filter[prop].forEach((a) => a.ischecked = false);
            delete filterSelected[prop];
            this.router.navigate([], { queryParams: {} });
        });
    }
}
MdsFilterCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-checkbox',
                template: "<div *ngIf=\"!filterBy\">No Filter Key</div>\n<div *ngIf=\"!filterData\">No Filter Data Found</div>\n\n<ng-container *ngIf=\"filterBy && filterData\">\n    <div *ngFor=\"let prop of filterBy\" [class]=\"classgroup\">\n        <div class=\"filter-header\" *ngIf=\"filterList[prop].length > 1\">\n            {{titlegroup ? titlegroup : 'Filter by'}} {{prop.replace('_','')|titlecase}}\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filterList,filterSelected,prop)\">\n                <span [innerHTML]=\"resetgroup ? resetgroup : '\u2715'\"></span>\n            </a>\n        </div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length === 0\">Key not found</div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length > 1\">\n            <div class=\"form-check\" *ngFor=\"let filter of filterList[prop]; let i = index\">\n                <input class=\"form-check-input\"\n                    [id]=\"prop+i\"\n                    type=\"checkbox\"\n                    [value]=\"filter.value\"\n                    [checked]=\"filter.ischecked\"\n                    (change)=\"checkBoxFilter(filterSelected, filterSelectedUrl, prop, filter);filter.ischecked = !filter.ischecked;\"\n                >\n                <label class=\"form-check-label\" [for]=\"prop+i\">{{filter.text|titlecase}}</label>\n            </div>\n        </div>\n    </div>\n    <div>\n        <button class=\"btn btn-primary\" *ngIf=\"(filterSelected|json) != '{}'\" (click)=\"resetAll(filterList,filterSelected, filterBy)\">{{reset ? reset : 'Reset All'}}</button>\n    </div>\n</ng-container>",
                styles: [""]
            },] }
];
MdsFilterCheckboxComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
MdsFilterCheckboxComponent.propDecorators = {
    classgroup: [{ type: Input }],
    titlegroup: [{ type: Input }],
    resetgroup: [{ type: Input }],
    reset: [{ type: Input }],
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }]
};

class MdsFilterCheckboxModule {
}
MdsFilterCheckboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MdsFilterCheckboxComponent],
                imports: [CommonModule],
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

export { FilterCheckboxComponent, FilterPipe, FilterSwatchComponent, MdsArrayUtils, MdsDateUtils, MdsFilterCheckboxComponent, MdsFilterCheckboxModule, MdsFilterModule, MdsFilterResetComponent, MdsHightlightPrismComponent, MdsHightlightPrismModule, MdsNumberUtils, MdsObjectUtils, MdsPipesModule, MdsStringUtils, SafeUrlPipe, SearchPipe };
//# sourceMappingURL=medes-ui.js.map
