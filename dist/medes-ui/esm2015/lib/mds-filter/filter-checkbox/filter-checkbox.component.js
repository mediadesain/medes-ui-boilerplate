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
                template: "<!-- Filter Group -->\n<div *ngFor=\"let prop of filterBy\" class=\"filter-group\" style=\"margin-bottom: 1em;\">\n    <ng-container *ngIf=\"filtergroup[prop].length > 1\">\n        <!-- Title Group -->\n        <div class=\"flex-horizontal horizontal-between\">\n            <div>\n                <ng-container *ngIf=\"titlegroup\">{{titlegroup+' '}}</ng-container>{{prop|titlecase}}\n            </div>\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filtergroup, prop)\">\n                <span [innerHTML]=\"reset ? reset : '\u2715'\"></span>\n            </a>\n        </div>\n        <!-- Checkbox + Label -->\n        <div *ngFor=\"let itm of filtergroup[prop];let i=index\" class=\"checkbox-group\" style=\"display: flex;\">\n            <div style=\"white-space: nowrap; width: 100%; padding-right: 1em; overflow: hidden; text-overflow: ellipsis;\">\n                <input [id]=\"prop+i\" type=\"checkbox\" [checked]=\"itm.checked\" (change)=\"clickCheckbox(itm, prop)\"/>\n                <label [for]=\"prop+i\"> {{itm.label|titlecase}}</label>\n            </div>\n            <div *ngIf=\"!hideCounter\">\n                <small>({{itm.counter}})</small>\n            </div>\n        </div>\n    </ng-container>\n</div>",
                styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVE1RCxNQUFNLE9BQU8sdUJBQXVCO0lBVWxDLFlBQ1UsTUFBYyxFQUNkLFdBQTJCO1FBRDNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFSckMsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQztRQUloRCxnQkFBVyxHQUE4QyxFQUFFLENBQUM7SUFLeEQsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDbkQsc0JBQXNCO1lBQ3RCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQztnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxN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QU0sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFO2dCQUN4QixXQUFXLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDMUQsbUJBQW1CLEVBQUUsT0FBTzthQUM3QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsTUFBOEIsRUFBRSxJQUFZO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUE0QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBRSxDQUFDO1FBQy9FLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsV0FBVyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUU7WUFDN0IsbUJBQW1CLEVBQUUsT0FBTztTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLCt3Q0FBK0M7O2FBRWhEOzs7WUFSd0IsTUFBTTtZQUF0QixjQUFjOzs7eUJBVXBCLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUVMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzQXJyYXlVdGlscywgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTZWxlY3RlZEZpbHRlckludGVyZmFjZSwgQ2hlY2tCb3hNb2RlbEludGVyZmFjZSB9IGZyb20gJy4uL21kcy1maWx0ZXIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmaWx0ZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlO1xuICBmaWx0ZXJTZWxlY3RlZFVybDogU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgdGl0bGVncm91cDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSByZXNldDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBoaWRlQ291bnRlcjogYm9vbGVhbjtcbiAgZmlsdGVyZ3JvdXA6IHtba2V5OiBzdHJpbmddOiBDaGVja0JveE1vZGVsSW50ZXJmYWNlW119ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJHcm91cCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJHcm91cCgpO1xuICB9XG5cbiAgY29uc3RydWNGaWx0ZXJHcm91cCgpOiB2b2lke1xuICAgIHRoaXMuZmlsdGVyQnkuZm9yRWFjaCggKHByb3A6IHN0cmluZywga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIC8vIFJlbW92ZSB0ZW1wcmFyeSBrZXlcbiAgICAgIGlmIChwcm9wWzBdID09PSAnXycpe1xuICAgICAgICB0aGlzLmZpbHRlckJ5LnB1c2gocHJvcC5yZXBsYWNlKCdfJywgJycpKTtcbiAgICAgICAgdGhpcy5maWx0ZXJCeS5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsdGVyRGF0YS5mb3JFYWNoKCAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGlmIChwcm9wWzBdID09PSAnXycpe1xuICAgICAgICAgIGl0ZW1bcHJvcC5yZXBsYWNlKCdfJywgJycpXSA9IGl0ZW1bcHJvcF07XG4gICAgICAgICAgZGVsZXRlIGl0ZW1bcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcHJvcCA9IHByb3AucmVwbGFjZSgnXycsICcnKTtcbiAgICAgIC8vIENvbnN0cnVjdCBDaGVja2JveCBsYWJlbCAmIHZhbHVlXG4gICAgICBjb25zdCBnZXRBbGxWYWx1ZSA9IHRoaXMuZmlsdGVyRGF0YS5tYXAoIChpdGVtOiBhbnkpID0+IGl0ZW1bcHJvcF0uc3BsaXQoJywnKSApLmZsYXQoKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWRzQXJyYXlVdGlscy5jb3VudFVuaXF1ZVZhbHVlcyhnZXRBbGxWYWx1ZSk7XG4gICAgICBjb25zdCBsYWJlbCA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGNvdW50ZXIgPSBPYmplY3QudmFsdWVzKHZhbHVlKTtcbiAgICAgIGNvbnN0IGdyb3VwID0ge307XG4gICAgICBncm91cFtwcm9wXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICBsYWJlbDogbGFiZWxbaV0sXG4gICAgICAgICAgY291bnRlcjogY291bnRlcltpXSxcbiAgICAgICAgICB1cmw6IE1kc1N0cmluZ1V0aWxzLmNvbnZlcnRUb1NsdWcobGFiZWxbaV0pLFxuICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNoZWNrIGNoZWNrZWQgZWxlbWVudCBiYXNlIG9uIHVybCBwYXJhbWV0ZXJcbiAgICAgICAgdGhpcy5hY3RpdmVyb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtID0+IHtcbiAgICAgICAgICBpZiAocGFyYW1bcHJvcF0pe1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IHBhcmFtW3Byb3BdLmluY2x1ZGVzKCcsJyk7XG4gICAgICAgICAgICBjb25zdCBjaGVja0Fyck9yU3RyID0gaXNBcnJheSA/IHBhcmFtW3Byb3BdLnNwbGl0KCcsJykgOiBbcGFyYW1bcHJvcF1dO1xuICAgICAgICAgICAgY29uc3QgaXNJbmNsdWRlID0gY2hlY2tBcnJPclN0ci5tYXAoIChpdGVtOiBzdHJpbmcpID0+IGl0ZW0gPT09IG9iai51cmwpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgICAgICAgb2JqLmNoZWNrZWQgPSBpc0luY2x1ZGUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXBbcHJvcF0ucHVzaChvYmopO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmZpbHRlcmdyb3VwLCBncm91cCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdID0gdGhpcy5maWx0ZXJncm91cFtwcm9wXS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoIGl0ZW0gPT4gaXRlbS5sYWJlbCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdID0gdGhpcy5maWx0ZXJncm91cFtwcm9wXS5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoIGl0ZW0gPT4gaXRlbS51cmwpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0ubGVuZ3RoID09PSAwKSB7IGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdOyB9XG4gICAgfSk7XG4gIH1cblxuICBjbGlja0NoZWNrYm94KHNlbGVjdDogQ2hlY2tCb3hNb2RlbEludGVyZmFjZSwgcHJvcDogc3RyaW5nKTogdm9pZHtcbiAgICAvLyAtLS0tLSBJRiBVUkwgUEFSQU1FVEVSIEVNUFRZIC0tLS0tIC8vXG4gICAgaWYgKCF0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdIHx8ICF0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdKXtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0gPSBbXTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiBzZWxlY3QudXJsfSxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRVhTSUVTVCAtLS0tLSAvL1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0uaW5kZXhPZihzZWxlY3QubGFiZWwpO1xuICAgIGlmIChpZHggPiAtMSl7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIC8vIERlbGV0ZSBwcm9wZXJ0eSBpZiB2YWx1ZS9zIGVtcHR5XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5sZW5ndGggPT09IDAgfHwgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIHRvIHVybCBxdWVyeVBhcmFtXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtbcHJvcF06IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPyB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmpvaW4oKSA6IG51bGx9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5wdXNoKHNlbGVjdC5sYWJlbCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLnB1c2goc2VsZWN0LnVybCk7XG4gICAgICAvLyBBZGQgdG8gdXJsIHF1ZXJ5UGFyYW1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge1twcm9wXTogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5qb2luKCl9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldEZpbHRlcihzZWxlY3Q6IENoZWNrQm94TW9kZWxJbnRlcmZhY2UsIHByb3A6IHN0cmluZyk6IGFueXtcbiAgICBzZWxlY3RbcHJvcF0uZm9yRWFjaCggKGl0ZW06IENoZWNrQm94TW9kZWxJbnRlcmZhY2UpID0+IGl0ZW0uY2hlY2tlZCA9IGZhbHNlICk7XG4gICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF07XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7IFtwcm9wXTogbnVsbCB9LFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==