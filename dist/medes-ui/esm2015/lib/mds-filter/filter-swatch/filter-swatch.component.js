import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdsStringUtils } from '../../utils';
export class FilterSwatchComponent {
    constructor(activeroute, router) {
        this.activeroute = activeroute;
        this.router = router;
        this.filterSelectedUrl = {};
        this.filterswatchgroup = [];
    }
    ngOnInit() {
        this.swatchSize = this.swatchSize || 30;
        this.swatchRadius = this.swatchRadius || 0;
        this.construcFilterSwatch();
    }
    ngOnChanges(changes) {
        this.construcFilterSwatch();
    }
    construcFilterSwatch() {
        // Construct Checkbox label & value
        let getAllValue = this.filterData.map((item) => Array.isArray(item[this.filterBy]) ? item[this.filterBy] : item[this.filterBy].split(',')).flat();
        getAllValue = [...new Set(getAllValue)];
        const checkswatch = [];
        for (const val of getAllValue) {
            const obj = {
                label: val,
                url: MdsStringUtils.convertToSlug(val),
                color: this.swatchMapping[MdsStringUtils.convertToSlug(val)],
                checked: false
            };
            this.activeroute.queryParams.subscribe(param => {
                if (param[this.filterBy]) {
                    const isArray = param[this.filterBy].includes(',');
                    const checkArrOrStr = isArray ? param[this.filterBy].split(',') : [param[this.filterBy]];
                    const isInclude = checkArrOrStr.map((item) => item === obj.url).includes(true);
                    obj.checked = isInclude ? true : false;
                }
            });
            checkswatch.push(obj);
            this.filterswatchgroup = checkswatch;
            this.filterSelected[this.filterBy] = this.filterswatchgroup.filter(item => item.checked).map(item => item.url);
            this.filterSelectedUrl[this.filterBy] = this.filterswatchgroup.filter(item => item.checked).map(item => item.label);
            if (this.filterSelected[this.filterBy].length === 0) {
                delete this.filterSelected[this.filterBy];
            }
        }
    }
    clickCheckbox(select) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!this.filterSelected[this.filterBy] || !this.filterSelectedUrl[this.filterBy]) {
            this.filterSelected[this.filterBy] = [];
            this.filterSelectedUrl[this.filterBy] = [];
        }
        this.router.navigate([], {
            queryParams: { color: select.url },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = this.filterSelected[this.filterBy].indexOf(select.label);
        if (idx > -1) {
            this.filterSelected[this.filterBy].splice(idx, 1);
            this.filterSelectedUrl[this.filterBy].splice(idx, 1);
            // Delete property if value/s empty
            if (this.filterSelected[this.filterBy].length === 0 || this.filterSelectedUrl[this.filterBy].length === 0) {
                delete this.filterSelected[this.filterBy];
                delete this.filterSelectedUrl[this.filterBy];
            }
            // Remove to url queryParam
            this.router.navigate([], {
                queryParams: { color: this.filterSelectedUrl[this.filterBy] ? this.filterSelectedUrl[this.filterBy].join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this.filterSelected[this.filterBy].push(select.label);
            this.filterSelectedUrl[this.filterBy].push(select.url);
            this.router.navigate([], {
                queryParams: { color: this.filterSelectedUrl[this.filterBy].join() },
                queryParamsHandling: 'merge'
            });
        }
    }
}
FilterSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-swatch',
                template: "<div>{{titlegroup ? titlegroup : 'Color'}}</div>\n<div class=\"filter-swatch\">\n    <div *ngFor=\"let item of filterswatchgroup; let i=index\" class=\"item\">\n        <input type=\"checkbox\" [id]=\"'checkbox'+i\" [ngStyle]=\"{'width': swatchSize+'px', 'height': swatchSize+'px'}\" [checked]=\"item.checked\" (change)=\"clickCheckbox(item); item.checked=!item.checked\"/>\n        <label [for]=\"'checkbox'+i\" [ngStyle]=\"{'border-radius': swatchRadius+'px', 'background-color': item.color, 'width': swatchSize+'px', 'height': swatchSize+'px'}\">\n            <svg [ngStyle]=\"{'opacity': item.checked ? 1 : 0}\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\">\n                <path fill=\"#fff\" filter=\"drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))\" d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n            </svg>\n        </label>\n        <div class=\"active\" [ngStyle]=\"{'border': item.checked ? '1px solid #ddd' : '1px solid #fff', 'width': swatchSize+'px', 'height': swatchSize+'px', 'border-radius': swatchRadius+'px'}\"></div>\n    </div>\n</div>\n\n",
                styles: [""]
            },] }
];
FilterSwatchComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
FilterSwatchComponent.propDecorators = {
    filterData: [{ type: Input }],
    filterBy: [{ type: Input }],
    filterSelected: [{ type: Input }],
    titlegroup: [{ type: Input }],
    swatchMapping: [{ type: Input }],
    swatchSize: [{ type: Input }],
    swatchRadius: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvZmlsdGVyLXN3YXRjaC9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTzdDLE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxXQUEyQixFQUMzQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUeEIsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQztRQUtoRCxzQkFBaUIsR0FBbUMsRUFBRSxDQUFDO0lBS25ELENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixtQ0FBbUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENB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QUFFLEVBQUU7Z0JBQ3hCLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUM7Z0JBQ2pILG1CQUFtQixFQUFFLE9BQU87YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFFLEVBQUUsRUFBRTtnQkFDeEIsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUM7Z0JBQ2xFLG1CQUFtQixFQUFFLE9BQU87YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGltQ0FBNkM7O2FBRTlDOzs7WUFQUSxjQUFjO1lBQUUsTUFBTTs7O3lCQVM1QixLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlLCBTZWxlY3RlZEZpbHRlckludGVyZmFjZSB9IGZyb20gJy4uL21kcy1maWx0ZXIuaW50ZXJmYWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kcy1maWx0ZXItc3dhdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1zd2F0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTd2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGZpbHRlckRhdGE6IGFueTtcbiAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlO1xuICBmaWx0ZXJTZWxlY3RlZFVybDogU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgPSB7fTtcbiAgQElucHV0KCkgdGl0bGVncm91cDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKSBzd2F0Y2hNYXBwaW5nOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgQElucHV0KCkgc3dhdGNoU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzd2F0Y2hSYWRpdXM6IG51bWJlcjtcbiAgZmlsdGVyc3dhdGNoZ3JvdXA6IFN3YXRjaENoZWNrQm94TW9kZWxJbnRlcmZhY2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZlcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN3YXRjaFNpemUgPSB0aGlzLnN3YXRjaFNpemUgfHwgMzA7XG4gICAgdGhpcy5zd2F0Y2hSYWRpdXMgPSB0aGlzLnN3YXRjaFJhZGl1cyB8fCAwO1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJTd2F0Y2goKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnN0cnVjRmlsdGVyU3dhdGNoKCk7XG4gIH1cblxuICBjb25zdHJ1Y0ZpbHRlclN3YXRjaCgpOiB2b2lke1xuICAgIC8vIENvbnN0cnVjdCBDaGVja2JveCBsYWJlbCAmIHZhbHVlXG4gICAgbGV0IGdldEFsbFZhbHVlID0gdGhpcy5maWx0ZXJEYXRhLm1hcCggKGl0ZW06IGFueSkgPT4gXG4gICAgICBBcnJheS5pc0FycmF5KGl0ZW1bdGhpcy5maWx0ZXJCeV0pID8gaXRlbVt0aGlzLmZpbHRlckJ5XSA6IGl0ZW1bdGhpcy5maWx0ZXJCeV0uc3BsaXQoJywnKSBcbiAgICApLmZsYXQoKTtcbiAgICBnZXRBbGxWYWx1ZSA9IFsuLi5uZXcgU2V0KGdldEFsbFZhbHVlKV07XG4gICAgY29uc3QgY2hlY2tzd2F0Y2ggPSBbXTtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBnZXRBbGxWYWx1ZSl7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB2YWwsXG4gICAgICAgIHVybDogTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1Zyh2YWwpLFxuICAgICAgICBjb2xvcjogdGhpcy5zd2F0Y2hNYXBwaW5nW01kc1N0cmluZ1V0aWxzLmNvbnZlcnRUb1NsdWcodmFsKV0sXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy5hY3RpdmVyb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHBhcmFtW3RoaXMuZmlsdGVyQnldKXtcbiAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcGFyYW1bdGhpcy5maWx0ZXJCeV0uaW5jbHVkZXMoJywnKTtcbiAgICAgICAgICBjb25zdCBjaGVja0Fyck9yU3RyID0gaXNBcnJheSA/IHBhcmFtW3RoaXMuZmlsdGVyQnldLnNwbGl0KCcsJykgOiBbcGFyYW1bdGhpcy5maWx0ZXJCeV1dO1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZSA9IGNoZWNrQXJyT3JTdHIubWFwKCAoaXRlbTogc3RyaW5nKSA9PiBpdGVtID09PSBvYmoudXJsKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICBvYmouY2hlY2tlZCA9IGlzSW5jbHVkZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja3N3YXRjaC5wdXNoKG9iaik7XG4gICAgICB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwID0gY2hlY2tzd2F0Y2g7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldID0gdGhpcy5maWx0ZXJzd2F0Y2hncm91cC5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldID0gdGhpcy5maWx0ZXJzd2F0Y2hncm91cC5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLmxlbmd0aCA9PT0gMCkgeyBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XTsgfVxuICAgIH1cblxuICB9XG5cbiAgY2xpY2tDaGVja2JveChzZWxlY3Q6IFN3YXRjaENoZWNrQm94TW9kZWxJbnRlcmZhY2UpOiB2b2lke1xuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRU1QVFkgLS0tLS0gLy9cbiAgICBpZiAoIXRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0gfHwgIXRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0pe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogc2VsZWN0LnVybH0sXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLSBJRiBVUkwgUEFSQU1FVEVSIEVYU0lFU1QgLS0tLS0gLy9cbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLmluZGV4T2Yoc2VsZWN0LmxhYmVsKTtcbiAgICBpZiAoaWR4ID4gLTEpe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICAvLyBEZWxldGUgcHJvcGVydHkgaWYgdmFsdWUvcyBlbXB0eVxuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0ubGVuZ3RoID09PSAwIHx8IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldO1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7Y29sb3I6IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0gPyB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLmpvaW4oKSA6IG51bGx9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5wdXNoKHNlbGVjdC5sYWJlbCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLnB1c2goc2VsZWN0LnVybCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5qb2luKCl9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19