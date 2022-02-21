import { Component, Input, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-ruby';
export class MdsHightlightPrismComponent {
    constructor() { }
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
MdsHightlightPrismComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-hightlight-prism',
                template: "<pre *ngIf=\"language\" class=\"language-{{ language }}\">\n<code #codeContent class=\"language-{{ language }}\">{{code}}</code>\n</pre>",
                styles: [""]
            },] }
];
MdsHightlightPrismComponent.ctorParameters = () => [];
MdsHightlightPrismComponent.propDecorators = {
    codeContent: [{ type: ViewChild, args: ['codeContent',] }],
    code: [{ type: Input }],
    language: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVkZXMtdWkvc3JjL2xpYi9tZHMtaGlnaHRsaWdodC1wcmlzbS9tZHMtaGlnaHRsaWdodC1wcmlzbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEtBQUssS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLFNBQVMsQ0FBQztBQUNqQixPQUFPLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8scUNBQXFDLENBQUM7QUFDN0MsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8scUNBQXFDLENBQUM7QUFDN0MsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sK0JBQStCLENBQUM7QUFPdkMsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxnQkFBZ0IsQ0FBQztJQUNqQixlQUFlO1FBQ2IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFZOztRQUN0QixJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLEVBQUU7WUFDakIsVUFBSSxJQUFJLENBQUMsV0FBVywwQ0FBRSxhQUFhLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2RCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN4RDtTQUNGO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxvSkFBb0Q7O2FBRXJEOzs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhO21CQUN2QixLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zYXNzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVieSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kcy1oaWdodGxpZ2h0LXByaXNtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kcy1oaWdodGxpZ2h0LXByaXNtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZHNIaWdodGxpZ2h0UHJpc21Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdjb2RlQ29udGVudCcpIGNvZGVDb250ZW50ITogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgY29kZT86IHN0cmluZztcbiAgQElucHV0KCkgbGFuZ3VhZ2U/OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiBhbnkge1xuICAgIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5jb2RlQ29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcz8uY29kZSkge1xuICAgICAgaWYgKHRoaXMuY29kZUNvbnRlbnQ/Lm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb2RlQ29udGVudC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb2RlO1xuICAgICAgICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KHRoaXMuY29kZUNvbnRlbnQubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=