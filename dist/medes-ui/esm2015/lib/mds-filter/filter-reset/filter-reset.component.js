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
                template: "<div class=\"filter-group\">\n    <button (click)=\"reset()\" [ngClass]=\"class && class\" [disabled]=\"(filterSelected|json) === '{}'\" style=\"width: 100%;\">{{content}}</button>\n</div>",
                styles: [""]
            },] }
];
MdsFilterResetComponent.ctorParameters = () => [
    { type: Router }
];
MdsFilterResetComponent.propDecorators = {
    content: [{ type: Input }],
    class: [{ type: Input }],
    filterSelected: [{ type: Input }],
    filterSelectedChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QyxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIZCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSXJELENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsd01BQTRDOzthQUU3Qzs7O1lBUFEsTUFBTTs7O3NCQVNaLEtBQUs7b0JBQ0wsS0FBSzs2QkFDTCxLQUFLO21DQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9tZHMtZmlsdGVyLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kcy1maWx0ZXItcmVzZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNZHNGaWx0ZXJSZXNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IGFueTtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlO1xuICBAT3V0cHV0KCkgZmlsdGVyU2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICByZXNldCgpOiB2b2lke1xuICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRDaGFuZ2UuZW1pdCh7fSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10pO1xuICB9XG5cbn1cbiJdfQ==