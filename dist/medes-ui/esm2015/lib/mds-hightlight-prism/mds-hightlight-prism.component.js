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
                styles: ["pre{font-size:small;margin:0}"]
            },] }
];
MdsHightlightPrismComponent.ctorParameters = () => [];
MdsHightlightPrismComponent.propDecorators = {
    codeContent: [{ type: ViewChild, args: ['codeContent',] }],
    code: [{ type: Input }],
    language: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVkZXMtdWkvc3JjL2xpYi9tZHMtaGlnaHRsaWdodC1wcmlzbS9tZHMtaGlnaHRsaWdodC1wcmlzbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEtBQUssS0FBSyxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLFNBQVMsQ0FBQztBQUNqQixPQUFPLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8scUNBQXFDLENBQUM7QUFDN0MsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLHFDQUFxQyxDQUFDO0FBQzdDLE9BQU8sOEJBQThCLENBQUM7QUFDdEMsT0FBTywrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxnQ0FBZ0MsQ0FBQztBQUN4QyxPQUFPLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8saUNBQWlDLENBQUM7QUFPekMsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxnQkFBZ0IsQ0FBQztJQUNqQixlQUFlO1FBQ2IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFZOztRQUN0QixJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLEVBQUU7WUFDakIsVUFBSSxJQUFJLENBQUMsV0FBVywwQ0FBRSxhQUFhLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2RCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN4RDtTQUNGO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxvSkFBb0Q7O2FBRXJEOzs7OzBCQUVFLFNBQVMsU0FBQyxhQUFhO21CQUN2QixLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgUHJpc20gZnJvbSAncHJpc21qcyc7XG5pbXBvcnQgJ3ByaXNtanMnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcyc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zYXNzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcnVieSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zd2lmdCc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zcWwnO1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tcHl0aG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWhpZ2h0bGlnaHQtcHJpc20nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRzLWhpZ2h0bGlnaHQtcHJpc20uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZHMtaGlnaHRsaWdodC1wcmlzbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1kc0hpZ2h0bGlnaHRQcmlzbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2NvZGVDb250ZW50JykgY29kZUNvbnRlbnQhOiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBjb2RlPzogc3RyaW5nO1xuICBASW5wdXQoKSBsYW5ndWFnZT86IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IGFueSB7XG4gICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudCh0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzPy5jb2RlKSB7XG4gICAgICBpZiAodGhpcy5jb2RlQ29udGVudD8ubmF0aXZlRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvZGVDb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLmNvZGU7XG4gICAgICAgIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5jb2RlQ29udGVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==