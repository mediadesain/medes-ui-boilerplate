import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdsFilterResetComponent } from './filter-reset/filter-reset.component';
import { FilterCheckboxComponent } from './filter-checkbox/filter-checkbox.component';
import { FilterSwatchComponent } from './filter-swatch/filter-swatch.component';
export class MdsFilterModule {
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
export * from './filter-checkbox/filter-checkbox.component';
export * from './filter-swatch/filter-swatch.component';
export * from './filter-reset/filter-reset.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWZpbHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvbWRzLWZpbHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFnQmhGLE1BQU0sT0FBTyxlQUFlOzs7WUFmM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtvQkFDdkIscUJBQXFCO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtpQkFDdEI7YUFDRjs7QUFHRCxjQUFjLDZDQUE2QyxDQUFDO0FBQzVELGNBQWMseUNBQXlDLENBQUM7QUFDeEQsY0FBYyx1Q0FBdUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWRzRmlsdGVyUmVzZXRDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1yZXNldC9maWx0ZXItcmVzZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlckNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJTd2F0Y2hDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1zd2F0Y2gvZmlsdGVyLXN3YXRjaC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWRzRmlsdGVyUmVzZXRDb21wb25lbnQsXG4gICAgRmlsdGVyQ2hlY2tib3hDb21wb25lbnQsXG4gICAgRmlsdGVyU3dhdGNoQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1kc0ZpbHRlclJlc2V0Q29tcG9uZW50LFxuICAgIEZpbHRlckNoZWNrYm94Q29tcG9uZW50LFxuICAgIEZpbHRlclN3YXRjaENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1kc0ZpbHRlck1vZHVsZSB7IH1cblxuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlci1zd2F0Y2gvZmlsdGVyLXN3YXRjaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXItcmVzZXQvZmlsdGVyLXJlc2V0LmNvbXBvbmVudCc7XG4iXX0=