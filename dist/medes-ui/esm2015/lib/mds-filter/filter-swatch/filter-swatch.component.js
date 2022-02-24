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
        // for (let i = 0; i < getAllValue.length; i++){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvZmlsdGVyLXN3YXRjaC9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBYzdDLE1BQU0sT0FBTyxxQkFBcUI7SUFXaEMsWUFDVSxXQUEyQixFQUMzQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFUeEIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUtsRCxzQkFBaUIsR0FBbUMsRUFBRSxDQUFDO0lBS25ELENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixtQ0FBbUM7UUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FB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Q0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQztnQkFDakgsbUJBQW1CLEVBQUUsT0FBTzthQUM3QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsRUFBRSxFQUFFO2dCQUN4QixXQUFXLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQztnQkFDbEUsbUJBQW1CLEVBQUUsT0FBTzthQUM3QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQS9GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isa21DQUE2Qzs7YUFFOUM7OztZQWRRLGNBQWM7WUFBRSxNQUFNOzs7eUJBZ0I1QixLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWRzU3RyaW5nVXRpbHMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmludGVyZmFjZSBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlIHtcbiAgY2hlY2tlZDogYm9vbGVhbjtcbiAgY29sb3I6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kcy1maWx0ZXItc3dhdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1zd2F0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJTd2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGZpbHRlckRhdGE6IGFueTtcbiAgQElucHV0KCkgZmlsdGVyQnk6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyU2VsZWN0ZWQ6IHtjb2xvcjogYW55W119O1xuICBmaWx0ZXJTZWxlY3RlZFVybDoge1trZXk6IHN0cmluZ106IHN0cmluZ1tdfSA9IHt9O1xuICBASW5wdXQoKSB0aXRsZWdyb3VwOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHN3YXRjaE1hcHBpbmc6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBASW5wdXQoKSBzd2F0Y2hTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN3YXRjaFJhZGl1czogbnVtYmVyO1xuICBmaWx0ZXJzd2F0Y2hncm91cDogU3dhdGNoQ2hlY2tCb3hNb2RlbEludGVyZmFjZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmVyb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3dhdGNoU2l6ZSA9IHRoaXMuc3dhdGNoU2l6ZSB8fCAzMDtcbiAgICB0aGlzLnN3YXRjaFJhZGl1cyA9IHRoaXMuc3dhdGNoUmFkaXVzIHx8IDA7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlclN3YXRjaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJTd2F0Y2goKTtcbiAgfVxuXG4gIGNvbnN0cnVjRmlsdGVyU3dhdGNoKCk6IHZvaWR7XG4gICAgLy8gQ29uc3RydWN0IENoZWNrYm94IGxhYmVsICYgdmFsdWVcbiAgICBsZXQgZ2V0QWxsVmFsdWUgPSB0aGlzLmZpbHRlckRhdGEubWFwKCAoaXRlbTogYW55KSA9PiBpdGVtW3RoaXMuZmlsdGVyQnldLnNwbGl0KCcsJykgKS5mbGF0KCk7XG4gICAgZ2V0QWxsVmFsdWUgPSBbLi4ubmV3IFNldChnZXRBbGxWYWx1ZSldO1xuICAgIGNvbnN0IGNoZWNrc3dhdGNoID0gW107XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRBbGxWYWx1ZS5sZW5ndGg7IGkrKyl7XG4gICAgZm9yIChjb25zdCB2YWwgb2YgZ2V0QWxsVmFsdWUpe1xuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBsYWJlbDogdmFsLFxuICAgICAgICB1cmw6IE1kc1N0cmluZ1V0aWxzLmNvbnZlcnRUb1NsdWcodmFsKSxcbiAgICAgICAgY29sb3I6IHRoaXMuc3dhdGNoTWFwcGluZ1tNZHNTdHJpbmdVdGlscy5jb252ZXJ0VG9TbHVnKHZhbCldLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMuYWN0aXZlcm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKCBwYXJhbSA9PiB7XG4gICAgICAgIGlmIChwYXJhbVt0aGlzLmZpbHRlckJ5XSl7XG4gICAgICAgICAgY29uc3QgaXNBcnJheSA9IHBhcmFtW3RoaXMuZmlsdGVyQnldLmluY2x1ZGVzKCcsJyk7XG4gICAgICAgICAgY29uc3QgY2hlY2tBcnJPclN0ciA9IGlzQXJyYXkgPyBwYXJhbVt0aGlzLmZpbHRlckJ5XS5zcGxpdCgnLCcpIDogW3BhcmFtW3RoaXMuZmlsdGVyQnldXTtcbiAgICAgICAgICBjb25zdCBpc0luY2x1ZGUgPSBjaGVja0Fyck9yU3RyLm1hcCggKGl0ZW06IHN0cmluZykgPT4gaXRlbSA9PT0gb2JqLnVybCkuaW5jbHVkZXModHJ1ZSk7XG4gICAgICAgICAgb2JqLmNoZWNrZWQgPSBpc0luY2x1ZGUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2hlY2tzd2F0Y2gucHVzaChvYmopO1xuICAgICAgdGhpcy5maWx0ZXJzd2F0Y2hncm91cCA9IGNoZWNrc3dhdGNoO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XSA9IHRoaXMuZmlsdGVyc3dhdGNoZ3JvdXAuZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKGl0ZW0gPT4gaXRlbS51cmwpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XSA9IHRoaXMuZmlsdGVyc3dhdGNoZ3JvdXAuZmlsdGVyKCBpdGVtID0+IGl0ZW0uY2hlY2tlZCkubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5sZW5ndGggPT09IDApIHsgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV07IH1cbiAgICB9XG5cbiAgfVxuXG4gIGNsaWNrQ2hlY2tib3goc2VsZWN0OiBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlKTogdm9pZHtcbiAgICAvLyAtLS0tLSBJRiBVUkwgUEFSQU1FVEVSIEVNUFRZIC0tLS0tIC8vXG4gICAgaWYgKCF0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldIHx8ICF0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldKXtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0gPSBbXTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7Y29sb3I6IHNlbGVjdC51cmx9LFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgIH0pO1xuXG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFWFNJRVNUIC0tLS0tIC8vXG4gICAgY29uc3QgaWR4ID0gdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XS5pbmRleE9mKHNlbGVjdC5sYWJlbCk7XG4gICAgaWYgKGlkeCA+IC0xKXtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0uc3BsaWNlKGlkeCwgMSk7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLnNwbGljZShpZHgsIDEpO1xuICAgICAgLy8gRGVsZXRlIHByb3BlcnR5IGlmIHZhbHVlL3MgZW1wdHlcbiAgICAgIGlmICh0aGlzLmZpbHRlclNlbGVjdGVkW3RoaXMuZmlsdGVyQnldLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5maWx0ZXJTZWxlY3RlZFt0aGlzLmZpbHRlckJ5XTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV07XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgdG8gdXJsIHF1ZXJ5UGFyYW1cbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge2NvbG9yOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsW3RoaXMuZmlsdGVyQnldID8gdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5qb2luKCkgOiBudWxsfSxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRbdGhpcy5maWx0ZXJCeV0ucHVzaChzZWxlY3QubGFiZWwpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybFt0aGlzLmZpbHRlckJ5XS5wdXNoKHNlbGVjdC51cmwpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoIFtdLCB7XG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7Y29sb3I6IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmxbdGhpcy5maWx0ZXJCeV0uam9pbigpfSxcbiAgICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==