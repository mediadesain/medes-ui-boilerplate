import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
export class MdsFilterResetComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLFlBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIZCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSXJELENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMktBQTRDOzthQUU3Qzs7O1lBUFEsTUFBTTs7O3NCQVNaLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlIH0gZnJvbSAnLi4vbWRzLWZpbHRlci5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZHMtZmlsdGVyLXJlc2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1yZXNldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci1yZXNldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWRzRmlsdGVyUmVzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb250ZW50OiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlclNlbGVjdGVkOiBTZWxlY3RlZEZpbHRlckludGVyZmFjZTtcbiAgQE91dHB1dCgpIGZpbHRlclNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZHtcbiAgICB0aGlzLmZpbHRlclNlbGVjdGVkQ2hhbmdlLmVtaXQoe30pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdKTtcbiAgfVxuXG59XG4iXX0=