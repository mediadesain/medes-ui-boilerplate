import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdsStringUtils } from '../utils';
export class MdsFilterCheckboxComponent {
    constructor(router, activeroute) {
        this.router = router;
        this.activeroute = activeroute;
        this.filterList = {};
        this.filterSelectedUrl = {};
    }
    ngOnInit() {
        this.filterToCheckbox();
    }
    filterToCheckbox() {
        if (!this.filterBy) {
            return;
        }
        this.filterBy.forEach((prop) => {
            // Create Filter Model
            if (!this.filterData) {
                return;
            }
            const getAllValue = this.filterData.map((item) => item[prop].includes(',') ? item[prop].split(',') : item[prop]);
            getAllValue.forEach((values, key) => {
                if (Array.isArray(values)) {
                    values.forEach(value => {
                        if (getAllValue.indexOf(value) === -1) {
                            getAllValue.push(value);
                        }
                    });
                    getAllValue.splice(key, 1);
                }
            });
            const listval = [...new Set(getAllValue.flat())];
            const convertcheckbox = [];
            listval.forEach((val) => {
                if (val) {
                    const obj = {};
                    obj.text = val;
                    obj.value = MdsStringUtils.convertToSlug(val);
                    if (!obj.ischecked) {
                        obj.ischecked = false;
                    }
                    this.activeroute.queryParams.subscribe(param => {
                        if (param[prop]) {
                            const isArray = param[prop].includes(',');
                            const checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
                            const isInclude = checkArrOrStr.map((item) => item === obj.value).includes(true);
                            obj.ischecked = isInclude ? true : false;
                        }
                    });
                    convertcheckbox.push(obj);
                }
            });
            this.filterList[prop] = convertcheckbox;
            // Selected Filter Model
            setTimeout(() => {
                this.filterSelected[prop] = this.filterList[prop].filter((a) => a.ischecked).map((a) => a.text);
                this.filterSelectedUrl[prop] = this.filterList[prop].filter((a) => a.ischecked).map((a) => a.value);
                if (this.filterSelected[prop].length === 0) {
                    delete this.filterSelected[prop];
                }
            }, 500);
        });
    }
    checkBoxFilter(filterSelected, filterSelectedUrl, prop, select) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!filterSelected[prop] || !filterSelectedUrl[prop]) {
            filterSelected[prop] = [];
            filterSelectedUrl[prop] = [];
        }
        this.router.navigate([], {
            queryParams: { [prop]: select.value },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = filterSelected[prop].indexOf(select.text);
        if (idx > -1) {
            // Remove param value/s
            filterSelected[prop].splice(idx, 1);
            filterSelectedUrl[prop].splice(idx, 1);
            // Delete property if value/s empty
            if (filterSelected[prop].length === 0 || filterSelectedUrl[prop].length === 0) {
                delete filterSelected[prop];
                delete filterSelectedUrl[prop];
            }
            // Remove to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: filterSelectedUrl[prop] ? filterSelectedUrl[prop].join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            // Add property value/s
            filterSelected[prop].push(select.text);
            filterSelectedUrl[prop].push(select.value);
            // Add to url queryParam
            this.router.navigate([], {
                queryParams: { [prop]: filterSelectedUrl[prop].join() },
                queryParamsHandling: 'merge'
            });
        }
    }
    resetFilter(filter, filterSelected, prop) {
        filter[prop].forEach((a) => a.ischecked = false);
        delete filterSelected[prop];
        this.router.navigate([], {
            queryParams: { [prop]: null },
            queryParamsHandling: 'merge'
        });
    }
    resetAll(filter, filterSelected, props) {
        props.forEach((prop) => {
            filter[prop].forEach((a) => a.ischecked = false);
            delete filterSelected[prop];
            this.router.navigate([], { queryParams: {} });
        });
    }
}
MdsFilterCheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-checkbox',
                template: "<div *ngIf=\"!filterBy\">No Filter Key</div>\n<div *ngIf=\"!filterData\">No Filter Data Found</div>\n\n<ng-container *ngIf=\"filterBy && filterData\">\n    <div *ngFor=\"let prop of filterBy\" [class]=\"classgroup\">\n        <div class=\"filter-header\" *ngIf=\"filterList[prop].length > 1\">\n            {{titlegroup ? titlegroup : 'Filter by'}} {{prop.replace('_','')|titlecase}}\n            <a *ngIf=\"filterSelected[prop]\" href=\"javascript:void(0)\" (click)=\"resetFilter(filterList,filterSelected,prop)\">\n                <span [innerHTML]=\"resetgroup ? resetgroup : '\u2715'\"></span>\n            </a>\n        </div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length === 0\">Key not found</div>\n        <div class=\"filter-content\" *ngIf=\"filterList[prop].length > 1\">\n            <div class=\"form-check\" *ngFor=\"let filter of filterList[prop]; let i = index\">\n                <input class=\"form-check-input\"\n                    [id]=\"prop+i\"\n                    type=\"checkbox\"\n                    [value]=\"filter.value\"\n                    [checked]=\"filter.ischecked\"\n                    (change)=\"checkBoxFilter(filterSelected, filterSelectedUrl, prop, filter);filter.ischecked = !filter.ischecked;\"\n                >\n                <label class=\"form-check-label\" [for]=\"prop+i\">{{filter.text|titlecase}}</label>\n            </div>\n        </div>\n    </div>\n    <div>\n        <button class=\"btn btn-primary\" *ngIf=\"(filterSelected|json) != '{}'\" (click)=\"resetAll(filterList,filterSelected, filterBy)\">{{reset ? reset : 'Reset All'}}</button>\n    </div>\n</ng-container>",
                styles: [""]
            },] }
];
MdsFilterCheckboxComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
MdsFilterCheckboxComponent.propDecorators = {
    classgroup: [{ type: Input }],
    titlegroup: [{ type: Input }],
    resetgroup: [{ type: Input }],
    reset: [{ type: Input }],
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRzLWZpbHRlci1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXItY2hlY2tib3gvbWRzLWZpbHRlci1jaGVja2JveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBUTFDLE1BQU0sT0FBTywwQkFBMEI7SUFXckMsWUFDVSxNQUFjLEVBQ2QsV0FBMkI7UUFEM0IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUpyQyxlQUFVLEdBQXlCLEVBQUUsQ0FBQztRQUN0QyxzQkFBaUIsR0FBNEIsRUFBRSxDQUFDO0lBS2hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDdEMsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixPQUFPO2FBQ1I7WUFDRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElB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QUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBRSxDQUFDO1FBQ3hELE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRTtZQUM3QixtQkFBbUIsRUFBRSxPQUFPO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBNEIsRUFBRSxjQUF1QyxFQUFFLEtBQWU7UUFDN0YsS0FBSyxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdkQsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEzSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHFvREFBbUQ7O2FBRXBEOzs7WUFSd0IsTUFBTTtZQUF0QixjQUFjOzs7eUJBV3BCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBDaGVja0JveE1vZGVsSW50ZXJmYWNlLCBGaWx0ZXJNb2RlbEludGVyZmFjZSwgRmlsdGVyU2VsZWN0ZWRJbnRlcmZhY2UgfSBmcm9tICcuL21kcy1maWx0ZXItY2hlY2tib3guaW50ZWZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZHMtZmlsdGVyLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kcy1maWx0ZXItY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tZHMtZmlsdGVyLWNoZWNrYm94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWRzRmlsdGVyQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGNsYXNzZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgdGl0bGVncm91cDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSByZXNldGdyb3VwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHJlc2V0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGZpbHRlckRhdGE6IGFueTtcbiAgQElucHV0KCkgZmlsdGVyQnkhOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQhOiBGaWx0ZXJTZWxlY3RlZEludGVyZmFjZTtcbiAgZmlsdGVyTGlzdDogRmlsdGVyTW9kZWxJbnRlcmZhY2UgPSB7fTtcbiAgZmlsdGVyU2VsZWN0ZWRVcmw6IEZpbHRlclNlbGVjdGVkSW50ZXJmYWNlID0ge307XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZpbHRlclRvQ2hlY2tib3goKTtcbiAgfVxuXG4gIGZpbHRlclRvQ2hlY2tib3goKTogYW55IHtcbiAgICBpZiAoIXRoaXMuZmlsdGVyQnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJCeS5mb3JFYWNoKCAocHJvcDogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBDcmVhdGUgRmlsdGVyIE1vZGVsXG4gICAgICBpZiAoIXRoaXMuZmlsdGVyRGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBnZXRBbGxWYWx1ZSA9IHRoaXMuZmlsdGVyRGF0YS5tYXAoIChpdGVtOiBhbnkpID0+IGl0ZW1bcHJvcF0uaW5jbHVkZXMoJywnKSA/IGl0ZW1bcHJvcF0uc3BsaXQoJywnKSA6IGl0ZW1bcHJvcF0gKTtcbiAgICAgIGdldEFsbFZhbHVlLmZvckVhY2goICh2YWx1ZXMsIGtleSkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKXtcbiAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCggdmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKGdldEFsbFZhbHVlLmluZGV4T2YodmFsdWUpID09PSAtMSl7XG4gICAgICAgICAgICAgIGdldEFsbFZhbHVlLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGdldEFsbFZhbHVlLnNwbGljZShrZXksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGxpc3R2YWwgPSBbLi4ubmV3IFNldChnZXRBbGxWYWx1ZS5mbGF0KCkpXTtcbiAgICAgIGNvbnN0IGNvbnZlcnRjaGVja2JveDogYW55ID0gW107XG4gICAgICBsaXN0dmFsLmZvckVhY2goICh2YWw6IGFueSkgPT4ge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICBvYmoudGV4dCA9IHZhbDtcbiAgICAgICAgICBvYmoudmFsdWUgPSBNZHNTdHJpbmdVdGlscy5jb252ZXJ0VG9TbHVnKHZhbCk7XG4gICAgICAgICAgaWYgKCFvYmouaXNjaGVja2VkKSB7XG4gICAgICAgICAgICBvYmouaXNjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYWN0aXZlcm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKCBwYXJhbSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW1bcHJvcF0pe1xuICAgICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcGFyYW1bcHJvcF0uaW5jbHVkZXMoJywnKTtcbiAgICAgICAgICAgICAgY29uc3QgY2hlY2tBcnJPclN0ciA9IGlzQXJyYXkgPyBwYXJhbVtwcm9wXS5zcGxpdCgnLCcpIDogW3BhcmFtW3Byb3BdXTtcbiAgICAgICAgICAgICAgY29uc3QgaXNJbmNsdWRlID0gY2hlY2tBcnJPclN0ci5tYXAoIChpdGVtOiBzdHJpbmcpID0+IGl0ZW0gPT09IG9iai52YWx1ZSkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgICAgIG9iai5pc2NoZWNrZWQgPSBpc0luY2x1ZGUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29udmVydGNoZWNrYm94LnB1c2gob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlsdGVyTGlzdFtwcm9wXSA9IGNvbnZlcnRjaGVja2JveDtcbiAgICAgIC8vIFNlbGVjdGVkIEZpbHRlciBNb2RlbFxuICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdID0gdGhpcy5maWx0ZXJMaXN0W3Byb3BdLmZpbHRlciggKGEpID0+IGEuaXNjaGVja2VkKS5tYXAoIChhOiBhbnkpID0+IGEudGV4dCk7XG4gICAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPSB0aGlzLmZpbHRlckxpc3RbcHJvcF0uZmlsdGVyKCAoYSkgPT4gYS5pc2NoZWNrZWQpLm1hcCggKGE6IGFueSkgPT4gYS52YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tCb3hGaWx0ZXIoXG4gICAgZmlsdGVyU2VsZWN0ZWQ6IEZpbHRlclNlbGVjdGVkSW50ZXJmYWNlLFxuICAgIGZpbHRlclNlbGVjdGVkVXJsOiBGaWx0ZXJTZWxlY3RlZEludGVyZmFjZSxcbiAgICBwcm9wOiBzdHJpbmcsXG4gICAgc2VsZWN0OiBDaGVja0JveE1vZGVsSW50ZXJmYWNlXG4gICk6IGFueSB7XG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFTVBUWSAtLS0tLSAvL1xuICAgIGlmICghZmlsdGVyU2VsZWN0ZWRbcHJvcF0gfHwgIWZpbHRlclNlbGVjdGVkVXJsW3Byb3BdKSB7XG4gICAgICBmaWx0ZXJTZWxlY3RlZFtwcm9wXSA9IFtdO1xuICAgICAgZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiBzZWxlY3QudmFsdWV9LFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFWFNJRVNUIC0tLS0tIC8vXG4gICAgY29uc3QgaWR4ID0gZmlsdGVyU2VsZWN0ZWRbcHJvcF0uaW5kZXhPZihzZWxlY3QudGV4dCk7XG4gICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAvLyBSZW1vdmUgcGFyYW0gdmFsdWUvc1xuICAgICAgZmlsdGVyU2VsZWN0ZWRbcHJvcF0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICBmaWx0ZXJTZWxlY3RlZFVybFtwcm9wXS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIC8vIERlbGV0ZSBwcm9wZXJ0eSBpZiB2YWx1ZS9zIGVtcHR5XG4gICAgICBpZiAoZmlsdGVyU2VsZWN0ZWRbcHJvcF0ubGVuZ3RoID09PSAwIHx8IGZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgZmlsdGVyU2VsZWN0ZWRbcHJvcF07XG4gICAgICAgIGRlbGV0ZSBmaWx0ZXJTZWxlY3RlZFVybFtwcm9wXTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7W3Byb3BdOiBmaWx0ZXJTZWxlY3RlZFVybFtwcm9wXSA/IGZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmpvaW4oKSA6IG51bGx9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIHByb3BlcnR5IHZhbHVlL3NcbiAgICAgIGZpbHRlclNlbGVjdGVkW3Byb3BdLnB1c2goc2VsZWN0LnRleHQpO1xuICAgICAgZmlsdGVyU2VsZWN0ZWRVcmxbcHJvcF0ucHVzaChzZWxlY3QudmFsdWUpO1xuICAgICAgLy8gQWRkIHRvIHVybCBxdWVyeVBhcmFtXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtbcHJvcF06IGZpbHRlclNlbGVjdGVkVXJsW3Byb3BdLmpvaW4oKX0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0RmlsdGVyKGZpbHRlcjogRmlsdGVyTW9kZWxJbnRlcmZhY2UsIGZpbHRlclNlbGVjdGVkOiBGaWx0ZXJTZWxlY3RlZEludGVyZmFjZSwgcHJvcDogc3RyaW5nKTogYW55e1xuICAgIGZpbHRlcltwcm9wXS5mb3JFYWNoKCAoYTogYW55KSA9PiBhLmlzY2hlY2tlZCA9IGZhbHNlICk7XG4gICAgZGVsZXRlIGZpbHRlclNlbGVjdGVkW3Byb3BdO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczogeyBbcHJvcF06IG51bGwgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0QWxsKGZpbHRlcjogRmlsdGVyTW9kZWxJbnRlcmZhY2UsIGZpbHRlclNlbGVjdGVkOiBGaWx0ZXJTZWxlY3RlZEludGVyZmFjZSwgcHJvcHM6IHN0cmluZ1tdKTogYW55e1xuICAgIHByb3BzLmZvckVhY2goIChwcm9wKSA9PiB7XG4gICAgICBmaWx0ZXJbcHJvcF0uZm9yRWFjaCggKGE6IGFueSkgPT4gYS5pc2NoZWNrZWQgPSBmYWxzZSk7XG4gICAgICBkZWxldGUgZmlsdGVyU2VsZWN0ZWRbcHJvcF07XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwgeyBxdWVyeVBhcmFtczoge30gfSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19