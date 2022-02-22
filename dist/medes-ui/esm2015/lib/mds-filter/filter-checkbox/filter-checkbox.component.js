import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdsArrayUtils, MdsStringUtils } from '../../utils';
export class FilterCheckboxComponent {
    constructor(router, activeroute) {
        this.router = router;
        this.activeroute = activeroute;
        this.filterSelectedUrl = {};
        this.filtergroup = {};
    }
    ngOnInit() {
        this.construcFilterGroup();
    }
    ngOnChanges(changes) {
        this.construcFilterGroup();
    }
    construcFilterGroup() {
        this.filterBy.forEach((prop, key) => {
            // Remove temprary key
            if (prop[0] === '_') {
                this.filterBy.push(prop.replace('_', ''));
                this.filterBy.splice(key, 1);
            }
            this.filterData.forEach((item) => {
                if (prop[0] === '_') {
                    item[prop.replace('_', '')] = item[prop];
                    delete item[prop];
                }
            });
            prop = prop.replace('_', '');
            // Construct Checkbox label & value
            const getAllValue = this.filterData.map((item) => item[prop].split(',')).flat();
            const value = MdsArrayUtils.countUniqueValues(getAllValue);
            const label = Object.keys(value);
            const counter = Object.values(value);
            const group = {};
            group[prop] = [];
            for (let i = 0; i < label.length; i++) {
                const obj = {
                    label: label[i],
                    counter: counter[i],
                    url: MdsStringUtils.convertToSlug(label[i]),
                    checked: false
                };
                // check checked element base on url parameter
                this.activeroute.queryParams.subscribe(param => {
                    if (param[prop]) {
                        const isArray = param[prop].includes(',');
                        const checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                        const isInclude = checkArrOrStr.map((item) => item === obj.url).includes(true);
                        obj.checked = isInclude ? true : false;
                    }
                });
                group[prop].push(obj);
            }
            Object.assign(this.filtergroup, group);
            this.filterSelected[prop] = this.filtergroup[prop].filter(item => item.checked).map(item => item.label);
            this.filterSelectedUrl[prop] = this.filtergroup[prop].filter(item => item.checked).map(item => item.url);
            if (this.filterSelected[prop].length === 0) {
                delete this.filterSelected[prop];
            }
        });
    }
    clickCheckbox(select, prop) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!this.filterSelected[prop] || !this.filterSelectedUrl[prop]) {
            this.filterSelected[prop] = [];
            this.filterSelectedUrl[prop] = [];
        }
        this.router.navigate([], {
            queryParams: { [prop]: select.url },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = this.filterSelected[prop].indexOf(select.label);
        if (idx > -1) {
            this.filterSelected[prop].splice(idx, 1);
            this.filterSelectedUrl[prop].splice(idx, 1);
            // Delete property if value/s empty
            if (this.filterSelected[prop].length === 0 || this.filterSelectedUrl[prop].length === 0) {
                delete this.filterSelected[prop];
                delete this.filterSelectedUrl[prop];
            }
            // Remove to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: this.filterSelectedUrl[prop] ? this.filterSelectedUrl[prop].join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this.filterSelected[prop].push(select.label);
            this.filterSelectedUrl[prop].push(select.url);
            // Add to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: this.filterSelectedUrl[prop].join() },
                queryParamsHandling: 'merge'
            });
        }
    }
    resetFilter(select, prop) {
        select[prop].forEach((item) => item.checked = false);
        delete this.filterSelected[prop];
        this.router.navigate([], {
            queryParams: { [prop]: null },
            queryParamsHandling: 'merge'
        });
    }
}
FilterCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-checkbox',
                template: "<!-- Filter Group -->\n<div *ngFor=\"let prop of filterBy\" class=\"filter-group\" style=\"margin-bottom: 1em;\">\n    <ng-container *ngIf=\"filtergroup[prop].length > 1\">\n        <!-- Title Group -->\n        <div class=\"checkbox-title\">\n            <div>\n                <ng-container *ngIf=\"titlegroup\">{{titlegroup+' '}}</ng-container>{{prop|titlecase}}\n            </div>\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filtergroup, prop)\">\n                <span [innerHTML]=\"reset ? reset : '\u2715'\"></span>\n            </a>\n        </div>\n        <!-- Checkbox + Label -->\n        <div *ngFor=\"let itm of filtergroup[prop];let i=index\" class=\"checkbox-group\" style=\"display: flex;\">\n            <div style=\"white-space: nowrap; width: 100%; padding-right: 1em; overflow: hidden; text-overflow: ellipsis;\">\n                <input [id]=\"prop+i\" type=\"checkbox\" [checked]=\"itm.checked\" (change)=\"clickCheckbox(itm, prop)\"/>\n                <label [for]=\"prop+i\"> {{itm.label|titlecase}}</label>\n            </div>\n            <div *ngIf=\"!hideCounter\">\n                <small>({{itm.counter}})</small>\n            </div>\n        </div>\n    </ng-container>\n</div>",
                styles: [".checkbox-title{display:flex;width:100%;justify-content:space-between}"]
            },] }
];
FilterCheckboxComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
FilterCheckboxComponent.propDecorators = {
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }],
    titlegroup: [{ type: Input }],
    reset: [{ type: Input }],
    hideCounter: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWE1RCxNQUFNLE9BQU8sdUJBQXVCO0lBVWxDLFlBQ1UsTUFBYyxFQUNkLFdBQTJCO1FBRDNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFSckMsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUlsRCxnQkFBVyxHQUE4QyxFQUFFLENBQUM7SUFLeEQsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDbkQsc0JBQXNCO1lBQ3RCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQztnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxN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QU0sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFO2dCQUN4QixXQUFXLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDMUQsbUJBQW1CLEVBQUUsT0FBTzthQUM3QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsTUFBOEIsRUFBRSxJQUFZO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBRSxDQUFDO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDN0IsbUJBQW1CLEVBQUUsT0FBTztTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDJ2Q0FBK0M7O2FBRWhEOzs7WUFid0IsTUFBTTtZQUF0QixjQUFjOzs7eUJBZXBCLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUVMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzQXJyYXlVdGlscywgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmludGVyZmFjZSBDaGVja0JveE1vZGVsSW50ZXJmYWNlIHtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgY291bnRlcjogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kcy1maWx0ZXItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZmlsdGVyRGF0YTogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJCeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGZpbHRlclNlbGVjdGVkOiB7W2tleTogc3RyaW5nXTogc3RyaW5nW119O1xuICBmaWx0ZXJTZWxlY3RlZFVybDoge1trZXk6IHN0cmluZ106IHN0cmluZ1tdfSA9IHt9O1xuICBASW5wdXQoKSB0aXRsZWdyb3VwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHJlc2V0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGhpZGVDb3VudGVyOiBib29sZWFuO1xuICBmaWx0ZXJncm91cDoge1trZXk6IHN0cmluZ106IENoZWNrQm94TW9kZWxJbnRlcmZhY2VbXX0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgYWN0aXZlcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlckdyb3VwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlckdyb3VwKCk7XG4gIH1cblxuICBjb25zdHJ1Y0ZpbHRlckdyb3VwKCk6IHZvaWR7XG4gICAgdGhpcy5maWx0ZXJCeS5mb3JFYWNoKCAocHJvcDogc3RyaW5nLCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgLy8gUmVtb3ZlIHRlbXByYXJ5IGtleVxuICAgICAgaWYgKHByb3BbMF0gPT09ICdfJyl7XG4gICAgICAgIHRoaXMuZmlsdGVyQnkucHVzaChwcm9wLnJlcGxhY2UoJ18nLCAnJykpO1xuICAgICAgICB0aGlzLmZpbHRlckJ5LnNwbGljZShrZXksIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5maWx0ZXJEYXRhLmZvckVhY2goIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHByb3BbMF0gPT09ICdfJyl7XG4gICAgICAgICAgaXRlbVtwcm9wLnJlcGxhY2UoJ18nLCAnJyldID0gaXRlbVtwcm9wXTtcbiAgICAgICAgICBkZWxldGUgaXRlbVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBwcm9wID0gcHJvcC5yZXBsYWNlKCdfJywgJycpO1xuICAgICAgLy8gQ29uc3RydWN0IENoZWNrYm94IGxhYmVsICYgdmFsdWVcbiAgICAgIGNvbnN0IGdldEFsbFZhbHVlID0gdGhpcy5maWx0ZXJEYXRhLm1hcCggKGl0ZW06IGFueSkgPT4gaXRlbVtwcm9wXS5zcGxpdCgnLCcpICkuZmxhdCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSBNZHNBcnJheVV0aWxzLmNvdW50VW5pcXVlVmFsdWVzKGdldEFsbFZhbHVlKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY291bnRlciA9IE9iamVjdC52YWx1ZXModmFsdWUpO1xuICAgICAgY29uc3QgZ3JvdXAgPSB7fTtcbiAgICAgIGdyb3VwW3Byb3BdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgIGxhYmVsOiBsYWJlbFtpXSxcbiAgICAgICAgICBjb3VudGVyOiBjb3VudGVyW2ldLFxuICAgICAgICAgIHVybDogTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1ZyhsYWJlbFtpXSksXG4gICAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY2hlY2sgY2hlY2tlZCBlbGVtZW50IGJhc2Ugb24gdXJsIHBhcmFtZXRlclxuICAgICAgICB0aGlzLmFjdGl2ZXJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW0gPT4ge1xuICAgICAgICAgIGlmIChwYXJhbVtwcm9wXSl7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcGFyYW1bcHJvcF0uaW5jbHVkZXMoJywnKTtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrQXJyT3JTdHIgPSBpc0FycmF5ID8gcGFyYW1bcHJvcF0uc3BsaXQoJywnKSA6IFtwYXJhbVtwcm9wXV07XG4gICAgICAgICAgICBjb25zdCBpc0luY2x1ZGUgPSBjaGVja0Fyck9yU3RyLm1hcCggKGl0ZW06IHN0cmluZykgPT4gaXRlbSA9PT0gb2JqLnVybCkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgICBvYmouY2hlY2tlZCA9IGlzSW5jbHVkZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBncm91cFtwcm9wXS5wdXNoKG9iaik7XG4gICAgICB9XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuZmlsdGVyZ3JvdXAsIGdyb3VwKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0gPSB0aGlzLmZpbHRlcmdyb3VwW3Byb3BdLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcCggaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPSB0aGlzLmZpbHRlcmdyb3VwW3Byb3BdLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcCggaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5sZW5ndGggPT09IDApIHsgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF07IH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrQ2hlY2tib3goc2VsZWN0OiBDaGVja0JveE1vZGVsSW50ZXJmYWNlLCBwcm9wOiBzdHJpbmcpOiB2b2lke1xuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRU1QVFkgLS0tLS0gLy9cbiAgICBpZiAoIXRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0gfHwgIXRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0pe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtbcHJvcF06IHNlbGVjdC51cmx9LFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFWFNJRVNUIC0tLS0tIC8vXG4gICAgY29uc3QgaWR4ID0gdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5pbmRleE9mKHNlbGVjdC5sYWJlbCk7XG4gICAgaWYgKGlkeCA+IC0xKXtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLnNwbGljZShpZHgsIDEpO1xuICAgICAgLy8gRGVsZXRlIHByb3BlcnR5IGlmIHZhbHVlL3MgZW1wdHlcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF07XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgdG8gdXJsIHF1ZXJ5UGFyYW1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge1twcm9wXTogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA/IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0uam9pbigpIDogbnVsbH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLnB1c2goc2VsZWN0LmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0ucHVzaChzZWxlY3QudXJsKTtcbiAgICAgIC8vIEFkZCB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmpvaW4oKX0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyKHNlbGVjdDogQ2hlY2tCb3hNb2RlbEludGVyZmFjZSwgcHJvcDogc3RyaW5nKTogYW55e1xuICAgIHNlbGVjdFtwcm9wXS5mb3JFYWNoKCAoaXRlbTogQ2hlY2tCb3hNb2RlbEludGVyZmFjZSkgPT4gaXRlbS5jaGVja2VkID0gZmFsc2UgKTtcbiAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHsgW3Byb3BdOiBudWxsIH0sXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG4gIH1cblxufVxuIl19