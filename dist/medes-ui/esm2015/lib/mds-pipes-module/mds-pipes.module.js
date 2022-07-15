import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SearchPipe } from './search.pipe';
import * as i0 from "@angular/core";
export class MdsPipesModule {
}
MdsPipesModule.ɵfac = function MdsPipesModule_Factory(t) { return new (t || MdsPipesModule)(); };
MdsPipesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: MdsPipesModule });
MdsPipesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdsPipesModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MdsPipesModule, { declarations: [FilterPipe,
        SafeUrlPipe,
        SearchPipe], imports: [CommonModule], exports: [FilterPipe,
        SafeUrlPipe,
        SearchPipe] }); })();
export * from './filter.pipe';
export * from './safe-url.pipe';
export * from './search.pipe';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLXBpcGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLXBpcGVzLW1vZHVsZS9tZHMtcGlwZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBZTNDLE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2dFQUFkLGNBQWM7b0VBUGhCLENBQUMsWUFBWSxDQUFDO3VGQU9aLGNBQWM7Y0FiMUIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixVQUFVO29CQUNWLFdBQVc7b0JBQ1gsVUFBVTtpQkFDWDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRTtvQkFDUCxVQUFVO29CQUNWLFdBQVc7b0JBQ1gsVUFBVTtpQkFDWDthQUNGOzt3RkFDWSxjQUFjLG1CQVh2QixVQUFVO1FBQ1YsV0FBVztRQUNYLFVBQVUsYUFFRixZQUFZLGFBRXBCLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtBQUtkLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMsaUJBQWlCLENBQUM7QUFDaEMsY0FBYyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmlsdGVyUGlwZSB9IGZyb20gJy4vZmlsdGVyLnBpcGUnO1xuaW1wb3J0IHsgU2FmZVVybFBpcGUgfSBmcm9tICcuL3NhZmUtdXJsLnBpcGUnO1xuaW1wb3J0IHsgU2VhcmNoUGlwZSB9IGZyb20gJy4vc2VhcmNoLnBpcGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGaWx0ZXJQaXBlLFxuICAgIFNhZmVVcmxQaXBlLFxuICAgIFNlYXJjaFBpcGVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWx0ZXJQaXBlLFxuICAgIFNhZmVVcmxQaXBlLFxuICAgIFNlYXJjaFBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZHNQaXBlc01vZHVsZSB7fVxuXG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlci5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vc2FmZS11cmwucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlYXJjaC5waXBlJztcblxuIl19