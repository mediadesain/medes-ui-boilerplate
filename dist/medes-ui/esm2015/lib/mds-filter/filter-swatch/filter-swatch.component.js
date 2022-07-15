/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';
import { MdsStringUtils } from '../../utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
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
    i0.ɵɵproperty("id", "checkbox" + i_r2)("ngStyle", i0.ɵɵpureFunction2(7, _c0, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"))("checked", item_r1.checked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", "checkbox" + i_r2)("ngStyle", i0.ɵɵpureFunction4(10, _c1, ctx_r0.swatchRadius + "px", item_r1.color, ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(15, _c2, item_r1.checked ? 1 : 0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(17, _c3, item_r1.checked ? "1px solid #ddd" : "1px solid #fff", ctx_r0.swatchSize + "px", ctx_r0.swatchSize + "px", ctx_r0.swatchRadius + "px"));
} }
export class FilterSwatchComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvZmlsdGVyLXN3YXRjaC9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItc3dhdGNoL2ZpbHRlci1zd2F0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7Ozs7O0lDRHpDLDhCQUFzRTtJQUNsRSxnQ0FBa007SUFBNUQsbVNBQTBEO0lBQWhNLGlCQUFrTTtJQUNsTSxnQ0FBa0s7SUFDOUosbUJBQTJHO0lBQTNHLDhCQUEyRztJQUN2RywwQkFBK0k7SUFDbkosaUJBQU07SUFDVixpQkFBUTtJQUNSLG9CQUF3TDtJQUF4TCx5QkFBOEw7SUFDbE0saUJBQU07Ozs7O0lBUHFCLGVBQW1CO0lBQW5CLHNDQUFtQiwyRkFBQSw0QkFBQTtJQUNuQyxlQUFvQjtJQUFwQix1Q0FBb0IsdUlBQUE7SUFDbEIsZUFBNkM7SUFBN0MsOEVBQTZDO0lBSWxDLGVBQW1LO0lBQW5LLDRMQUFtSzs7QURDL0wsTUFBTSxPQUFPLHFCQUFxQjtJQVdoQyxZQUNVLFdBQTJCLEVBQzNCLE1BQWM7UUFEZCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVR4QixzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO1FBS2hELHNCQUFpQixHQUFtQyxFQUFFLENBQUM7SUFLbkQsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsVUFB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QkFDbEUsbUJBQW1CLEVBQUUsT0FBTzthQUM3QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OzBGQTNGVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ1ZsQywyQkFBSztRQUFBLFlBQXFDO1FBQUEsaUJBQU07UUFDaEQsOEJBQTJCO1FBQ3ZCLHVFQVFNO1FBQ1YsaUJBQU07O1FBWEQsZUFBcUM7UUFBckMsK0RBQXFDO1FBRWhCLGVBQXNCO1FBQXRCLCtDQUFzQjs7dUZEUW5DLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7c0ZBRVUsVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBRUcsVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csWUFBWTtrQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1kc1N0cmluZ1V0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU3dhdGNoQ2hlY2tCb3hNb2RlbEludGVyZmFjZSwgU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9tZHMtZmlsdGVyLmludGVyZmFjZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZHMtZmlsdGVyLXN3YXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyU3dhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmaWx0ZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlclNlbGVjdGVkOiBTZWxlY3RlZEZpbHRlckludGVyZmFjZTtcbiAgZmlsdGVyU2VsZWN0ZWRVcmw6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlID0ge307XG4gIEBJbnB1dCgpIHRpdGxlZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc3dhdGNoTWFwcGluZzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIEBJbnB1dCgpIHN3YXRjaFNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgc3dhdGNoUmFkaXVzOiBudW1iZXI7XG4gIGZpbHRlcnN3YXRjaGdyb3VwOiBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zd2F0Y2hTaXplID0gdGhpcy5zd2F0Y2hTaXplIHx8IDMwO1xuICAgIHRoaXMuc3dhdGNoUmFkaXVzID0gdGhpcy5zd2F0Y2hSYWRpdXMgfHwgMDtcbiAgICB0aGlzLmNvbnN0cnVjRmlsdGVyU3dhdGNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlclN3YXRjaCgpO1xuICB9XG5cbiAgY29uc3RydWNGaWx0ZXJTd2F0Y2goKTogdm9pZHtcbiAgICAvLyBDb25zdHJ1Y3QgQ2hlY2tib3ggbGFiZWwgJiB2YWx1ZVxuICAgIGxldCBnZXRBbGxWYWx1ZSA9IHRoaXMuZmlsdGVyRGF0YS5tYXAoIChpdGVtOiBhbnkpID0+XG4gICAgICBBcnJheS5pc0FycmF5KGl0ZW1bdGhpcy5maWx0ZXJCeV0pID8gaXRlbVt0aGlzLmZpbHRlckJ5XSA6IGl0ZW1bdGhpcy5maWx0ZXJCeV0uc3BsaXQoJywnKVxuICAgICkuZmxhdCgpO1xuICAgIGdldEFsbFZhbHVlID0gWy4uLm5ldyBTZXQoZ2V0QWxsVmFsdWUpXTtcbiAgICBjb25zdCBjaGVja3N3YXRjaCA9IFtdO1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGdldEFsbFZhbHVlKXtcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHZhbCxcbiAgICAgICAgdXJsOiBNZHNTdHJpbmdVdGlscy5jb252ZXJ0VG9TbHVnKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGlzLnN3YXRjaE1hcHBpbmdbTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1Zyh2YWwpXSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLmFjdGl2ZXJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW0gPT4ge1xuICAgICAgICBpZiAocGFyYW1bdGhpcy5maWx0ZXJCeV0pe1xuICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBwYXJhbVt0aGlzLmZpbHRlckJ5XS5pbmNsdWRlcygnLCcpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrQXJyT3JTdHIgPSBpc0FycmF5ID8gcGFyYW1bdGhpcy5maWx0ZXJCeV0uc3BsaXQoJywnKSA6IFtwYXJhbVt0aGlzLmZpbHRlckJ5XV07XG4gICAgICAgICAgY29uc3QgaXNJbmNsdWRlID0gY2hlY2tBcnJPclN0ci5tYXAoIChpdGVtOiBzdHJpbmcpID0+IGl0ZW0gPT09IG9iai51cmwpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgICAgIG9iai5jaGVja2VkID0gaXNJbmNsdWRlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrc3dhdGNoLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuZmlsdGVyc3dhdGNoZ3JvdXAgPSBjaGVja3N3YXRjaDtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0gPSB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udXJsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0gPSB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0ubGVuZ3RoID09PSAwKSB7IGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldOyB9XG4gICAgfVxuXG4gIH1cblxuICBjbGlja0NoZWNrYm94KHNlbGVjdDogU3dhdGNoQ2hlY2tCb3hNb2RlbEludGVyZmFjZSk6IHZvaWR7XG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFTVBUWSAtLS0tLSAvL1xuICAgIGlmICghdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XSB8fCAhdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XSl7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldID0gW107XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldID0gW107XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczoge2NvbG9yOiBzZWxlY3QudXJsfSxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRVhTSUVTVCAtLS0tLSAvL1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0uaW5kZXhPZihzZWxlY3QubGFiZWwpO1xuICAgIGlmIChpZHggPiAtMSl7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIC8vIERlbGV0ZSBwcm9wZXJ0eSBpZiB2YWx1ZS9zIGVtcHR5XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5sZW5ndGggPT09IDAgfHwgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIHRvIHVybCBxdWVyeVBhcmFtXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XSA/IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0uam9pbigpIDogbnVsbH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLnB1c2goc2VsZWN0LmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0ucHVzaChzZWxlY3QudXJsKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge2NvbG9yOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLmpvaW4oKX0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCI8ZGl2Pnt7dGl0bGVncm91cCA/IHRpdGxlZ3JvdXAgOiAnQ29sb3InfX08L2Rpdj5cbjxkaXYgY2xhc3M9XCJmaWx0ZXItc3dhdGNoXCI+XG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJzd2F0Y2hncm91cDsgbGV0IGk9aW5kZXhcIiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCInY2hlY2tib3gnK2lcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogc3dhdGNoU2l6ZSsncHgnLCAnaGVpZ2h0Jzogc3dhdGNoU2l6ZSsncHgnfVwiIFtjaGVja2VkXT1cIml0ZW0uY2hlY2tlZFwiIChjaGFuZ2UpPVwiY2xpY2tDaGVja2JveChpdGVtKTsgaXRlbS5jaGVja2VkPSFpdGVtLmNoZWNrZWRcIi8+XG4gICAgICAgIDxsYWJlbCBbZm9yXT1cIidjaGVja2JveCcraVwiIFtuZ1N0eWxlXT1cInsnYm9yZGVyLXJhZGl1cyc6IHN3YXRjaFJhZGl1cysncHgnLCAnYmFja2dyb3VuZC1jb2xvcic6IGl0ZW0uY29sb3IsICd3aWR0aCc6IHN3YXRjaFNpemUrJ3B4JywgJ2hlaWdodCc6IHN3YXRjaFNpemUrJ3B4J31cIj5cbiAgICAgICAgICAgIDxzdmcgW25nU3R5bGVdPVwieydvcGFjaXR5JzogaXRlbS5jaGVja2VkID8gMSA6IDB9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNmZmZcIiBmaWx0ZXI9XCJkcm9wLXNoYWRvdygwcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIC4yKSlcIiBkPVwiTTIwLjI4NSAybC0xMS4yODUgMTEuNTY3LTUuMjg2LTUuMDExLTMuNzE0IDMuNzE2IDkgOC43MjggMTUtMTUuMjg1elwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlXCIgW25nU3R5bGVdPVwieydib3JkZXInOiBpdGVtLmNoZWNrZWQgPyAnMXB4IHNvbGlkICNkZGQnIDogJzFweCBzb2xpZCAjZmZmJywgJ3dpZHRoJzogc3dhdGNoU2l6ZSsncHgnLCAnaGVpZ2h0Jzogc3dhdGNoU2l6ZSsncHgnLCAnYm9yZGVyLXJhZGl1cyc6IHN3YXRjaFJhZGl1cysncHgnfVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==