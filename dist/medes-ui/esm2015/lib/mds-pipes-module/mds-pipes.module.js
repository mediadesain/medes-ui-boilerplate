import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SearchPipe } from './search.pipe';
export class MdsPipesModule {
}
MdsPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilterPipe,
                    SafeUrlPipe,
                    SearchPipe
                ],
                imports: [CommonModule],
                exports: [
                    FilterPipe,
                    SafeUrlPipe,
                    SearchPipe
                ]
            },] }
];
export * from './filter.pipe';
export * from './safe-url.pipe';
export * from './search.pipe';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLXBpcGVzLW1vZHVsZS9tZHMtcGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlM0MsTUFBTSxPQUFPLGNBQWM7OztZQWIxQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO2lCQUNYO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxVQUFVO2lCQUNYO2FBQ0Y7O0FBR0QsY0FBYyxlQUFlLENBQUM7QUFDOUIsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQyxjQUFjLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGaWx0ZXJQaXBlIH0gZnJvbSAnLi9maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBTYWZlVXJsUGlwZSB9IGZyb20gJy4vc2FmZS11cmwucGlwZSc7XG5pbXBvcnQgeyBTZWFyY2hQaXBlIH0gZnJvbSAnLi9zZWFyY2gucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEZpbHRlclBpcGUsXG4gICAgU2FmZVVybFBpcGUsXG4gICAgU2VhcmNoUGlwZVxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIEZpbHRlclBpcGUsXG4gICAgU2FmZVVybFBpcGUsXG4gICAgU2VhcmNoUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1kc1BpcGVzTW9kdWxlIHt9XG5cbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zYWZlLXVybC5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VhcmNoLnBpcGUnO1xuXG4iXX0=