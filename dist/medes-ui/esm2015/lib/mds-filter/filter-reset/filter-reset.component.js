/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
export class MdsFilterResetComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUy9FLE1BQU0sT0FBTyx1QkFBdUI7SUFNbEMsWUFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhkLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFJckQsQ0FBQztJQUVMLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDOzs4RkFqQlUsdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUNWcEMsOEJBQTBCO1FBQ3RCLGlDQUFzSDtRQUE5RyxvR0FBUyxXQUFPLElBQUM7O1FBQTZGLFlBQVc7UUFBQSxpQkFBUztRQUM5SSxpQkFBTTs7UUFEd0IsZUFBMEI7UUFBMUIsZ0RBQTBCLCtEQUFBO1FBQWtFLGVBQVc7UUFBWCxpQ0FBVzs7dUZEU3hILHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7eURBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNJLG9CQUFvQjtrQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWxlY3RlZEZpbHRlckludGVyZmFjZSB9IGZyb20gJy4uL21kcy1maWx0ZXIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1yZXNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItcmVzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItcmVzZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1kc0ZpbHRlclJlc2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29udGVudDogYW55O1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXJTZWxlY3RlZDogU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2U7XG4gIEBPdXRwdXQoKSBmaWx0ZXJTZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnbmdPbmluaXQnKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWR7XG4gICAgdGhpcy5maWx0ZXJTZWxlY3RlZENoYW5nZS5lbWl0KHt9KTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImZpbHRlci1ncm91cFwiPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIiBbbmdDbGFzc109XCJjbGFzcyAmJiBjbGFzc1wiIFtkaXNhYmxlZF09XCIoZmlsdGVyU2VsZWN0ZWR8anNvbikgPT09ICd7fSdcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPnt7Y29udGVudH19PC9idXR0b24+XG48L2Rpdj4iXX0=