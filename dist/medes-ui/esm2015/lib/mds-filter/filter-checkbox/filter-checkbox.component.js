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
            const getAllValue = this.filterData.map((item) => item[prop].includes(',') ? item[prop].split(',') : item[prop]).flat();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lZGVzLXVpL3NyYy9saWIvbWRzLWZpbHRlci9maWx0ZXItY2hlY2tib3gvZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWE1RCxNQUFNLE9BQU8sdUJBQXVCO0lBVWxDLFlBQ1UsTUFBYyxFQUNkLFdBQTJCO1FBRDNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFSckMsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUlsRCxnQkFBVyxHQUE4QyxFQUFFLENBQUM7SUFLeEQsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDbkQsc0JBQXNCO1lBQ3RCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBQztnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxN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QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUU7Z0JBQ3hCLFdBQVcsRUFBRSxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDO2dCQUMxRCxtQkFBbUIsRUFBRSxPQUFPO2FBQzdCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUE4QixFQUFFLElBQVk7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQTRCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFFLENBQUM7UUFDL0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRTtZQUM3QixtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMnZDQUErQzs7YUFFaEQ7OztZQWJ3QixNQUFNO1lBQXRCLGNBQWM7Ozt5QkFlcEIsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBRUwsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZHNBcnJheVV0aWxzLCBNZHNTdHJpbmdVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuaW50ZXJmYWNlIENoZWNrQm94TW9kZWxJbnRlcmZhY2Uge1xuICBjaGVja2VkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xuICBjb3VudGVyOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItY2hlY2tib3guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlckNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmaWx0ZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IHtba2V5OiBzdHJpbmddOiBzdHJpbmdbXX07XG4gIGZpbHRlclNlbGVjdGVkVXJsOiB7W2tleTogc3RyaW5nXTogc3RyaW5nW119ID0ge307XG4gIEBJbnB1dCgpIHRpdGxlZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgcmVzZXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgaGlkZUNvdW50ZXI6IGJvb2xlYW47XG4gIGZpbHRlcmdyb3VwOiB7W2tleTogc3RyaW5nXTogQ2hlY2tCb3hNb2RlbEludGVyZmFjZVtdfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnN0cnVjRmlsdGVyR3JvdXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnN0cnVjRmlsdGVyR3JvdXAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjRmlsdGVyR3JvdXAoKTogdm9pZHtcbiAgICB0aGlzLmZpbHRlckJ5LmZvckVhY2goIChwcm9wOiBzdHJpbmcsIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAvLyBSZW1vdmUgdGVtcHJhcnkga2V5XG4gICAgICBpZiAocHJvcFswXSA9PT0gJ18nKXtcbiAgICAgICAgdGhpcy5maWx0ZXJCeS5wdXNoKHByb3AucmVwbGFjZSgnXycsICcnKSk7XG4gICAgICAgIHRoaXMuZmlsdGVyQnkuc3BsaWNlKGtleSwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbHRlckRhdGEuZm9yRWFjaCggKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICBpZiAocHJvcFswXSA9PT0gJ18nKXtcbiAgICAgICAgICBpdGVtW3Byb3AucmVwbGFjZSgnXycsICcnKV0gPSBpdGVtW3Byb3BdO1xuICAgICAgICAgIGRlbGV0ZSBpdGVtW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHByb3AgPSBwcm9wLnJlcGxhY2UoJ18nLCAnJyk7XG4gICAgICAvLyBDb25zdHJ1Y3QgQ2hlY2tib3ggbGFiZWwgJiB2YWx1ZVxuICAgICAgY29uc3QgZ2V0QWxsVmFsdWUgPSB0aGlzLmZpbHRlckRhdGEubWFwKCAoaXRlbTogYW55KSA9PiBpdGVtW3Byb3BdLmluY2x1ZGVzKCcsJykgPyBpdGVtW3Byb3BdLnNwbGl0KCcsJykgOiBpdGVtW3Byb3BdKS5mbGF0KCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IE1kc0FycmF5VXRpbHMuY291bnRVbmlxdWVWYWx1ZXMoZ2V0QWxsVmFsdWUpO1xuICAgICAgY29uc3QgbGFiZWwgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICBjb25zdCBjb3VudGVyID0gT2JqZWN0LnZhbHVlcyh2YWx1ZSk7XG4gICAgICBjb25zdCBncm91cCA9IHt9O1xuICAgICAgZ3JvdXBbcHJvcF0gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgbGFiZWw6IGxhYmVsW2ldLFxuICAgICAgICAgIGNvdW50ZXI6IGNvdW50ZXJbaV0sXG4gICAgICAgICAgdXJsOiBNZHNTdHJpbmdVdGlscy5jb252ZXJ0VG9TbHVnKGxhYmVsW2ldKSxcbiAgICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICAvLyBjaGVjayBjaGVja2VkIGVsZW1lbnQgYmFzZSBvbiB1cmwgcGFyYW1ldGVyXG4gICAgICAgIHRoaXMuYWN0aXZlcm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKCBwYXJhbSA9PiB7XG4gICAgICAgICAgaWYgKHBhcmFtW3Byb3BdKXtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBwYXJhbVtwcm9wXS5pbmNsdWRlcygnLCcpO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tBcnJPclN0ciA9IGlzQXJyYXkgPyBwYXJhbVtwcm9wXS5zcGxpdCgnLCcpIDogW3BhcmFtW3Byb3BdXTtcbiAgICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZSA9IGNoZWNrQXJyT3JTdHIubWFwKCAoaXRlbTogc3RyaW5nKSA9PiBpdGVtID09PSBvYmoudXJsKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICAgIG9iai5jaGVja2VkID0gaXNJbmNsdWRlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGdyb3VwW3Byb3BdLnB1c2gob2JqKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5maWx0ZXJncm91cCwgZ3JvdXApO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXSA9IHRoaXMuZmlsdGVyZ3JvdXBbcHJvcF0uZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKCBpdGVtID0+IGl0ZW0ubGFiZWwpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA9IHRoaXMuZmlsdGVyZ3JvdXBbcHJvcF0uZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKCBpdGVtID0+IGl0ZW0udXJsKTtcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLmxlbmd0aCA9PT0gMCkgeyBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXTsgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tDaGVja2JveChzZWxlY3Q6IENoZWNrQm94TW9kZWxJbnRlcmZhY2UsIHByb3A6IHN0cmluZyk6IHZvaWR7XG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFTVBUWSAtLS0tLSAvL1xuICAgIGlmICghdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXSB8fCAhdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXSl7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdID0gW107XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdID0gW107XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczoge1twcm9wXTogc2VsZWN0LnVybH0sXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLSBJRiBVUkwgUEFSQU1FVEVSIEVYU0lFU1QgLS0tLS0gLy9cbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLmluZGV4T2Yoc2VsZWN0LmxhYmVsKTtcbiAgICBpZiAoaWR4ID4gLTEpe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFtwcm9wXS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICAvLyBEZWxldGUgcHJvcGVydHkgaWYgdmFsdWUvcyBlbXB0eVxuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0ubGVuZ3RoID09PSAwIHx8IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdO1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3Byb3BdID8gdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5qb2luKCkgOiBudWxsfSxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbcHJvcF0ucHVzaChzZWxlY3QubGFiZWwpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5wdXNoKHNlbGVjdC51cmwpO1xuICAgICAgLy8gQWRkIHRvIHVybCBxdWVyeVBhcmFtXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtbcHJvcF06IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0uam9pbigpfSxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRGaWx0ZXIoc2VsZWN0OiBDaGVja0JveE1vZGVsSW50ZXJmYWNlLCBwcm9wOiBzdHJpbmcpOiBhbnl7XG4gICAgc2VsZWN0W3Byb3BdLmZvckVhY2goIChpdGVtOiBDaGVja0JveE1vZGVsSW50ZXJmYWNlKSA9PiBpdGVtLmNoZWNrZWQgPSBmYWxzZSApO1xuICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczogeyBbcHJvcF06IG51bGwgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=