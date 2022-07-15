/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Component, Input, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
export class MdsHightlightPrismComponent {
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
    } }, directives: [i1.NgIf], styles: ["pre[_ngcontent-%COMP%]{font-size:small;margin:0}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVkZXMtdWkvc3JjL2xpYi9tZHMtaGlnaHRsaWdodC1wcmlzbS9tZHMtaGlnaHRsaWdodC1wcmlzbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1oaWdodGxpZ2h0LXByaXNtL21kcy1oaWdodGxpZ2h0LXByaXNtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEtBQUssS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLFNBQVMsQ0FBQztBQUNqQixPQUFPLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8scUNBQXFDLENBQUM7QUFDN0MsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sOEJBQThCLENBQUM7QUFDdEMsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8saUNBQWlDLENBQUM7Ozs7O0lDZnpDLDJCQUFzRDtJQUN0RCxxQ0FBbUQ7SUFBQSxZQUFRO0lBQUEsaUJBQU87SUFDbEUsa0JBQUE7SUFBQSxpQkFBTTs7O0lBRmdCLDJEQUErQjtJQUNsQyxlQUErQjtJQUEvQiwyREFBK0I7SUFBQyxlQUFRO0lBQVIsaUNBQVE7O0FEcUIzRCxNQUFNLE9BQU8sMkJBQTJCO0lBSXRDLHVCQUF1QjtJQUN2QixlQUFlO1FBQ2IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFZOztRQUN0QixJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLEVBQUU7WUFDakIsSUFBSSxNQUFBLElBQUksQ0FBQyxXQUFXLDBDQUFFLGFBQWEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7SUFDSCxDQUFDOztzR0FmVSwyQkFBMkI7OEVBQTNCLDJCQUEyQjs7Ozs7O1FDdEJ4Qyw0RUFFTTs7UUFGQSxtQ0FBYzs7dUZEc0JQLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7Z0JBRTJCLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQUNmLElBQUk7a0JBQVosS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zYXNzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVieSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zd2lmdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zcWwnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcHl0aG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWhpZ2h0bGlnaHQtcHJpc20nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZHMtaGlnaHRsaWdodC1wcmlzbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1kc0hpZ2h0bGlnaHRQcmlzbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvZGVDb250ZW50JykgY29kZUNvbnRlbnQhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBjb2RlPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYW5ndWFnZT86IHN0cmluZztcbiAgLy8gLy8gY29uc3RydWN0b3IoKSB7IH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IGFueSB7XG4gICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudCh0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzPy5jb2RlKSB7XG4gICAgICBpZiAodGhpcy5jb2RlQ29udGVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvZGU7XG4gICAgICAgIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5jb2RlQ29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjxwcmUgKm5nSWY9XCJsYW5ndWFnZVwiIGNsYXNzPVwibGFuZ3VhZ2Ute3sgbGFuZ3VhZ2UgfX1cIj5cbjxjb2RlICNjb2RlQ29udGVudCBjbGFzcz1cImxhbmd1YWdlLXt7IGxhbmd1YWdlIH19XCI+e3tjb2RlfX08L2NvZGU+XG48L3ByZT4iXX0=