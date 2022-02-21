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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlc2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLFlBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIZCx5QkFBb0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBSXJELENBQUM7SUFFTCxRQUFRO0lBQ1IsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMktBQTRDOzthQUU3Qzs7O1lBTlEsTUFBTTs7O3NCQVFaLEtBQUs7NkJBQ0wsS0FBSzttQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1yZXNldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItcmVzZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItcmVzZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1kc0ZpbHRlclJlc2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29udGVudDogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJTZWxlY3RlZDogYW55O1xuICBAT3V0cHV0KCkgZmlsdGVyU2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICByZXNldCgpOiB2b2lke1xuICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRDaGFuZ2UuZW1pdCh7fSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10pO1xuICB9XG5cbn1cbiJdfQ==