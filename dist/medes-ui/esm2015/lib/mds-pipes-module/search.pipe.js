/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class SearchPipe {
    transform(items, search) {
        if (items && search.keyword !== undefined) {
            items = items.filter(item => item[search.objkey].toLowerCase().includes(search.keyword.toLowerCase()));
            return items;
        }
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "search", type: SearchPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPipe, [{
        type: Pipe,
        args: [{
                name: 'search',
                pure: false
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1waXBlcy1tb2R1bGUvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQU1wRCxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsS0FBWSxFQUFFLE1BQTJDO1FBQ2pFLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3pDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFFLENBQUM7WUFDekcsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O29FQU5VLFVBQVU7eUVBQVYsVUFBVTt1RkFBVixVQUFVO2NBTHRCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuQFBpcGUoe1xuICBuYW1lOiAnc2VhcmNoJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIHNlYXJjaDogeyBvYmprZXk6IHN0cmluZywga2V5d29yZDogc3RyaW5nIH0pOiBhbnlbXSB7XG4gICAgaWYgKGl0ZW1zICYmIHNlYXJjaC5rZXl3b3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKCBpdGVtID0+IGl0ZW1bc2VhcmNoLm9iamtleV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gua2V5d29yZC50b0xvd2VyQ2FzZSgpKSApO1xuICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgfVxufVxuIl19