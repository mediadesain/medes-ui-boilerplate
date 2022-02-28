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
        let getAllValue = this.filterData.map((item) => item[this.filterBy].split(',')).flat();
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
                template: "<div>{{titlegroup ? titlegroup : 'Color'}}</div>\n<div class=\"swatch\">\n    <div *ngFor=\"let item of filterswatchgroup; let i=index\" class=\"item\">\n        <input type=\"checkbox\" [id]=\"'checkbox'+i\" [ngStyle]=\"{'width': swatchSize+'px', 'height': swatchSize+'px'}\" [checked]=\"item.checked\" (change)=\"clickCheckbox(item); item.checked=!item.checked\"/>\n        <label [for]=\"'checkbox'+i\" [ngStyle]=\"{'border-radius': swatchRadius+'px', 'background-color': item.color, 'width': swatchSize+'px', 'height': swatchSize+'px'}\">\n            <svg [ngStyle]=\"{'opacity': item.checked ? 1 : 0}\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\">\n                <path fill=\"#fff\" filter=\"drop-shadow(0px 2px 1px rgba(0, 0, 0, .2))\" d=\"M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z\"/>\n            </svg>\n        </label>\n        <div class=\"active-outline\" [ngStyle]=\"{'border': item.checked ? '1px solid #ddd' : '1px solid #fff', 'width': swatchSize+'px', 'height': swatchSize+'px', 'border-radius': swatchRadius+'px'}\"></div>\n    </div>\n</div>\n\n",
                styles: [".swatch{display:flex;flex-wrap:wrap;margin-bottom:1em}.item{position:relative;margin-right:5px;margin-bottom:5px}.item label{border:1px solid #ccc;cursor:pointer;position:absolute;z-index:3;top:0;left:0}.item label svg{transition:.2s ease-in-out;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.item input[type=checkbox]{visibility:hidden;margin:0;padding:0}.item input[type=checkbox]:checked+label:after{opacity:1}.active-outline{position:absolute;top:0;left:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvZmlsdGVyLXN3YXRjaC9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTzdDLE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxXQUEyQixFQUMzQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUeEIsc0JBQWlCLEdBQTRCLEVBQUUsQ0FBQztRQUtoRCxzQkFBaUIsR0FBbUMsRUFBRSxDQUFDO0lBS25ELENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixtQ0FBbUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FB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QUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDO2dCQUNqSCxtQkFBbUIsRUFBRSxPQUFPO2FBQzdCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBRSxFQUFFLEVBQUU7Z0JBQ3hCLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDO2dCQUNsRSxtQkFBbUIsRUFBRSxPQUFPO2FBQzdCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBOUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixrbUNBQTZDOzthQUU5Qzs7O1lBUFEsY0FBYztZQUFFLE1BQU07Ozt5QkFTNUIsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBRUwsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1kc1N0cmluZ1V0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgU3dhdGNoQ2hlY2tCb3hNb2RlbEludGVyZmFjZSwgU2VsZWN0ZWRGaWx0ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9tZHMtZmlsdGVyLmludGVyZmFjZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZHMtZmlsdGVyLXN3YXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyU3dhdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBmaWx0ZXJEYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlckJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbHRlclNlbGVjdGVkOiBTZWxlY3RlZEZpbHRlckludGVyZmFjZTtcbiAgZmlsdGVyU2VsZWN0ZWRVcmw6IFNlbGVjdGVkRmlsdGVySW50ZXJmYWNlID0ge307XG4gIEBJbnB1dCgpIHRpdGxlZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc3dhdGNoTWFwcGluZzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIEBJbnB1dCgpIHN3YXRjaFNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgc3dhdGNoUmFkaXVzOiBudW1iZXI7XG4gIGZpbHRlcnN3YXRjaGdyb3VwOiBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zd2F0Y2hTaXplID0gdGhpcy5zd2F0Y2hTaXplIHx8IDMwO1xuICAgIHRoaXMuc3dhdGNoUmFkaXVzID0gdGhpcy5zd2F0Y2hSYWRpdXMgfHwgMDtcbiAgICB0aGlzLmNvbnN0cnVjRmlsdGVyU3dhdGNoKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlclN3YXRjaCgpO1xuICB9XG5cbiAgY29uc3RydWNGaWx0ZXJTd2F0Y2goKTogdm9pZHtcbiAgICAvLyBDb25zdHJ1Y3QgQ2hlY2tib3ggbGFiZWwgJiB2YWx1ZVxuICAgIGxldCBnZXRBbGxWYWx1ZSA9IHRoaXMuZmlsdGVyRGF0YS5tYXAoIChpdGVtOiBhbnkpID0+IGl0ZW1bdGhpcy5maWx0ZXJCeV0uc3BsaXQoJywnKSApLmZsYXQoKTtcbiAgICBnZXRBbGxWYWx1ZSA9IFsuLi5uZXcgU2V0KGdldEFsbFZhbHVlKV07XG4gICAgY29uc3QgY2hlY2tzd2F0Y2ggPSBbXTtcbiAgICBmb3IgKGNvbnN0IHZhbCBvZiBnZXRBbGxWYWx1ZSl7XG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGxhYmVsOiB2YWwsXG4gICAgICAgIHVybDogTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1Zyh2YWwpLFxuICAgICAgICBjb2xvcjogdGhpcy5zd2F0Y2hNYXBwaW5nW01kc1N0cmluZ1V0aWxzLmNvbnZlcnRUb1NsdWcodmFsKV0sXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICB9O1xuICAgICAgdGhpcy5hY3RpdmVyb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUoIHBhcmFtID0+IHtcbiAgICAgICAgaWYgKHBhcmFtW3RoaXMuZmlsdGVyQnldKXtcbiAgICAgICAgICBjb25zdCBpc0FycmF5ID0gcGFyYW1bdGhpcy5maWx0ZXJCeV0uaW5jbHVkZXMoJywnKTtcbiAgICAgICAgICBjb25zdCBjaGVja0Fyck9yU3RyID0gaXNBcnJheSA/IHBhcmFtW3RoaXMuZmlsdGVyQnldLnNwbGl0KCcsJykgOiBbcGFyYW1bdGhpcy5maWx0ZXJCeV1dO1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZSA9IGNoZWNrQXJyT3JTdHIubWFwKCAoaXRlbTogc3RyaW5nKSA9PiBpdGVtID09PSBvYmoudXJsKS5pbmNsdWRlcyh0cnVlKTtcbiAgICAgICAgICBvYmouY2hlY2tlZCA9IGlzSW5jbHVkZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjaGVja3N3YXRjaC5wdXNoKG9iaik7XG4gICAgICB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwID0gY2hlY2tzd2F0Y2g7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldID0gdGhpcy5maWx0ZXJzd2F0Y2hncm91cC5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLnVybCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldID0gdGhpcy5maWx0ZXJzd2F0Y2hncm91cC5maWx0ZXIoIGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLmxhYmVsKTtcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLmxlbmd0aCA9PT0gMCkgeyBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XTsgfVxuICAgIH1cblxuICB9XG5cbiAgY2xpY2tDaGVja2JveChzZWxlY3Q6IFN3YXRjaENoZWNrQm94TW9kZWxJbnRlcmZhY2UpOiB2b2lke1xuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRU1QVFkgLS0tLS0gLy9cbiAgICBpZiAoIXRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0gfHwgIXRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0pe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogc2VsZWN0LnVybH0sXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgfSk7XG5cbiAgICAvLyAtLS0tLSBJRiBVUkwgUEFSQU1FVEVSIEVYU0lFU1QgLS0tLS0gLy9cbiAgICBjb25zdCBpZHggPSB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLmluZGV4T2Yoc2VsZWN0LmxhYmVsKTtcbiAgICBpZiAoaWR4ID4gLTEpe1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICAvLyBEZWxldGUgcHJvcGVydHkgaWYgdmFsdWUvcyBlbXB0eVxuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0ubGVuZ3RoID09PSAwIHx8IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldO1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XTtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSB0byB1cmwgcXVlcnlQYXJhbVxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7Y29sb3I6IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0gPyB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLmpvaW4oKSA6IG51bGx9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5wdXNoKHNlbGVjdC5sYWJlbCk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLnB1c2goc2VsZWN0LnVybCk7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5qb2luKCl9LFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19