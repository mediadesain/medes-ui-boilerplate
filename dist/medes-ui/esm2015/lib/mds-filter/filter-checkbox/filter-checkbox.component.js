/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';
import { MdsArrayUtils, MdsStringUtils } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
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
export class FilterCheckboxComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxjQUFjLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0lDRzVDLDZCQUFpQztJQUFBLFlBQWtCO0lBQUEsMEJBQWU7OztJQUFqQyxlQUFrQjtJQUFsQiw2Q0FBa0I7Ozs7SUFFdkQsNEJBQXVIO0lBQXpDLG9SQUF3QztJQUNsSCwwQkFBK0M7SUFDbkQsaUJBQUk7OztJQURNLGVBQWlDO0lBQWpDLHFGQUFpQzs7O0lBUzNDLCtCQUFtRDtJQUMvQyw2QkFBTztJQUFBLFlBQWlCO0lBQUEsaUJBQVE7SUFDcEMsaUJBQU07OztJQURLLGVBQWlCO0lBQWpCLCtDQUFpQjs7OztJQU5oQyw4QkFBaUg7SUFDN0csK0JBQTRCO0lBQ3hCLGlDQUFrRztJQUFyQywrVUFBbUM7SUFBaEcsaUJBQWtHO0lBQ2xHLGlDQUFzQjtJQUFBLFlBQXVCOztJQUFBLGlCQUFRO0lBQ3pELGlCQUFNO0lBQ04sb0dBRU07SUFDVixpQkFBTTs7Ozs7O0lBTlMsZUFBYTtJQUFiLG9DQUFhLDJCQUFBO0lBQ2IsZUFBYztJQUFkLHFDQUFjO0lBQUMsZUFBdUI7SUFBdkIsd0RBQXVCO0lBRWxCLGVBQWtCO0lBQWxCLDBDQUFrQjs7O0lB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Y2l0LWFueSAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzQXJyYXlVdGlscywgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTZWxlY3RlZEZpbHRlckludGVyZmFjZSwgQ2hlY2tCb3hNb2RlbEludGVyZmFjZSB9IGZyb20gJy4uL21kcy1maWx0ZXIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmaWx0ZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlO1xuICBmaWx0ZXJTZWxlY3RlZFVybDogU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgdGl0bGVncm91cDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSByZXNldDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBoaWRlQ291bnRlcjogYm9vbGVhbjtcbiAgZmlsdGVyZ3JvdXA6IHtba2V5OiBzdHJpbmddOiBDaGVja0JveE1vZGVsSW50ZXJmYWNlW119ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJHcm91cCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJHcm91cCgpO1xuICB9XG5cbiAgY29uc3RydWNGaWx0ZXJHcm91cCgpOiB2b2lke1xuICAgIHRoaXMuZmlsdGVyQnkuZm9yRWFjaCggKHByb3A6IHN0cmluZywga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIFJlbW92ZSB0ZW1wcmFyeSBrZXlcbiAgICAgIGlmIChwcm9wWzBdID09PSAnXycpe1xuICAgICAgICB0aGlzLmZpbHRlckJ5LnB1c2gocHJvcC5yZXBsYWNlKCdfJywgJycpKTtcbiAgICAgICAgdGhpcy5maWx0ZXJCeS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyRGF0YS5mb3JFYWNoKCAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChwcm9wWzBdID09PSAnXycpe1xuICAgICAgICAgIGl0ZW1bcHJvcC5yZXBsYWNlKCdfJywgJycpXSA9IGl0ZW1bcHJvcF07XG4gICAgICAgICAgZGVsZXRlIGl0ZW1bcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgnXycsICcnKTtcbiAgICAgIC8vIENvbnN0cnVjdCBDaGVja2JveCBsYWJlbCAmIHZhbHVlXG5cbiAgICAgIGNvbnN0IGdldEFsbFZhbHVlID0gdGhpcy5maWx0ZXJEYXRhLm1hcCggKGl0ZW06IGFueSkgPT5cbiAgICAgICAgQXJyYXkuaXNBcnJheShpdGVtW3Byb3BdKSA/IGl0ZW1bcHJvcF0gOiBpdGVtW3Byb3BdLnNwbGl0KCcsJylcbiAgICAgICkuZmxhdCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBNZHNBcnJheVV0aWxzLmNvdW50VW5pcXVlVmFsdWVzKGdldEFsbFZhbHVlKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY291bnRlciA9IE9iamVjdC52YWx1ZXModmFsdWUpO1xuICAgICAgY29uc3QgZ3JvdXAgPSB7fTtcbiAgICAgIGdyb3VwW3Byb3BdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIGxhYmVsOiBsYWJlbFtpXSxcbiAgICAgICAgICBjb3VudGVyOiBjb3VudGVyW2ldLFxuICAgICAgICAgIHVybDogTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1ZyhsYWJlbFtpXSksXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2hlY2sgY2hlY2tlZCBlbGVtZW50IGJhc2Ugb24gdXJsIHBhcmFtZXRlclxuICAgICAgICB0aGlzLmFjdGl2ZXJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW0gPT4ge1xuICAgICAgICAgIGlmIChwYXJhbVtwcm9wXSl7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcGFyYW1bcHJvcF0uaW5jbHVkZXMoJywnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQXJyT3JTdHIgPSBpc0FycmF5ID8gcGFyYW1bcHJvcF0uc3BsaXQoJywnKSA6IFtwYXJhbVtwcm9wXV07XG4gICAgICAgICAgICBjb25zdCBpc0luY2x1ZGUgPSBjaGVja0Fyck9yU3RyLm1hcCggKGl0ZW06IHN0cmluZykgPT4gaXRlbSA9PT0gb2JqLnVybCkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgICBvYmouY2hlY2tlZCA9IGlzSW5jbHVkZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBncm91cFtwcm9wXS5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZmlsdGVyZ3JvdXAsIGdyb3VwKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0gPSB0aGlzLmZpbHRlcmdyb3VwW3Byb3BdLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcCggaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPSB0aGlzLmZpbHRlcmdyb3VwW3Byb3BdLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcCggaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5sZW5ndGggPT09IDApIHsgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF07IH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrQ2hlY2tib3goc2VsZWN0OiBDaGVja0JveE1vZGVsSW50ZXJmYWNlLCBwcm9wOiBzdHJpbmcpOiB2b2lke1xuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRU1QVFkgLS0tLS0gLy9cbiAgICBpZiAoIXRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0gfHwgIXRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0pe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtbcHJvcF06IHNlbGVjdC51cmx9LFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFWFNJRVNUIC0tLS0tIC8vXG4gICAgY29uc3QgaWR4ID0gdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5pbmRleE9mKHNlbGVjdC5sYWJlbCk7XG4gICAgaWYgKGlkeCA+IC0xKXtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLnNwbGljZShpZHgsIDEpO1xuICAgICAgLy8gRGVsZXRlIHByb3BlcnR5IGlmIHZhbHVlL3MgZW1wdHlcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF07XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgdG8gdXJsIHF1ZXJ5UGFyYW1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge1twcm9wXTogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA/IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0uam9pbigpIDogbnVsbH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLnB1c2goc2VsZWN0LmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0ucHVzaChzZWxlY3QudXJsKTtcbiAgICAgIC8vIEFkZCB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmpvaW4oKX0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyKHNlbGVjdDogQ2hlY2tCb3hNb2RlbEludGVyZmFjZSwgcHJvcDogc3RyaW5nKTogYW55e1xuICAgIHNlbGVjdFtwcm9wXS5mb3JFYWNoKCAoaXRlbTogQ2hlY2tCb3hNb2RlbEludGVyZmFjZSkgPT4gaXRlbS5jaGVja2VkID0gZmFsc2UgKTtcbiAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgW3Byb3BdOiBudWxsIH0sXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG4gIH1cblxufVxuIiwiPCEtLSBGaWx0ZXIgR3JvdXAgLS0+XG48ZGl2ICpuZ0Zvcj1cImxldCBwcm9wIG9mIGZpbHRlckJ5XCIgY2xhc3M9XCJmaWx0ZXItY2hlY2tib3ggbWFyZ2luLWItMVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWx0ZXJncm91cFtwcm9wXS5sZW5ndGggPiAxXCI+XG4gICAgICAgIDwhLS0gVGl0bGUgR3JvdXAgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC10aXRsZSBmbGV4LWhvcml6b250YWwgaG9yaXpvbnRhbC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGl0bGVncm91cFwiPnt7dGl0bGVncm91cCsnICd9fTwvbmctY29udGFpbmVyPnt7cHJvcHx0aXRsZWNhc2V9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlLWNsb3NlXCIgKm5nSWY9XCJmaWx0ZXJTZWxlY3RlZFtwcm9wXVwiIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwicmVzZXRGaWx0ZXIoZmlsdGVyZ3JvdXAsIHByb3ApXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJyZXNldCA/IHJlc2V0IDogJ+KclSdcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIENoZWNrYm94ICsgTGFiZWwgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1jaGVja2JveCBmbGV4LWhvcml6b250YWwgaG9yaXpvbnRhbC1iZXR3ZWVuXCIgKm5nRm9yPVwibGV0IGl0bSBvZiBmaWx0ZXJncm91cFtwcm9wXTtsZXQgaT1pbmRleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtpZF09XCJwcm9wK2lcIiB0eXBlPVwiY2hlY2tib3hcIiBbY2hlY2tlZF09XCJpdG0uY2hlY2tlZFwiIChjaGFuZ2UpPVwiY2xpY2tDaGVja2JveChpdG0sIHByb3ApXCIvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBbZm9yXT1cInByb3AraVwiPnt7aXRtLmxhYmVsfHRpdGxlY2FzZX19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LWNvdW50ZXJcIiAqbmdJZj1cIiFoaWRlQ291bnRlclwiPlxuICAgICAgICAgICAgICAgIDxzbWFsbD4oe3tpdG0uY291bnRlcn19KTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=