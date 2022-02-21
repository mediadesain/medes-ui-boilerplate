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
        this.construcFilterSwatch();
    }
    ngOnChanges(changes) {
        this.construcFilterSwatch();
    }
    construcFilterSwatch() {
        // Construct Checkbox label & value
        let getAllValue = this.filterData.map((item) => item.color.includes(',') ? item.color.split(',') : item.color).flat();
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
                if (param.color) {
                    const isArray = param.color.includes(',');
                    const checkArrOrStr = isArray ? param.color.split(',') : [param.color];
                    const isInclude = checkArrOrStr.map((item) => item === obj.url).includes(true);
                    obj.checked = isInclude ? true : false;
                }
            });
            checkswatch.push(obj);
            this.filterswatchgroup = checkswatch;
            this.filterSelected.color = this.filterswatchgroup.filter(item => item.checked).map(item => item.url);
            this.filterSelectedUrl.color = this.filterswatchgroup.filter(item => item.checked).map(item => item.label);
            if (this.filterSelected.color.length === 0) {
                delete this.filterSelected.color;
            }
        }
    }
    clickCheckbox(select) {
        // ----- IF URL PARAMETER EMPTY ----- //
        if (!this.filterSelected.color || !this.filterSelectedUrl.color) {
            this.filterSelected.color = [];
            this.filterSelectedUrl.color = [];
        }
        this.router.navigate([], {
            queryParams: { color: select.url },
            queryParamsHandling: 'merge'
        });
        // ----- IF URL PARAMETER EXSIEST ----- //
        const idx = this.filterSelected.color.indexOf(select.label);
        if (idx > -1) {
            this.filterSelected.color.splice(idx, 1);
            this.filterSelectedUrl.color.splice(idx, 1);
            // Delete property if value/s empty
            if (this.filterSelected.color.length === 0 || this.filterSelectedUrl.color.length === 0) {
                delete this.filterSelected.color;
                delete this.filterSelectedUrl.color;
            }
            // Remove to url queryParam
            this.router.navigate([], {
                queryParams: { color: this.filterSelectedUrl.color ? this.filterSelectedUrl.color.join() : null },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this.filterSelected.color.push(select.label);
            this.filterSelectedUrl.color.push(select.url);
            this.router.navigate([], {
                queryParams: { color: this.filterSelectedUrl.color.join() },
                queryParamsHandling: 'merge'
            });
        }
    }
}
FilterSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'mds-filter-swatch',
                template: "<div>{{titlegroup ? titlegroup : 'Color'}}</div>\n<div class=\"swatch\">\n    <div *ngFor=\"let item of filterswatchgroup; let i=index\" class=\"round\">\n        <input type=\"checkbox\" [id]=\"'checkbox'+i\" [checked]=\"item.checked\" (change)=\"clickCheckbox(item); item.checked=!item.checked\"/>\n        <label [for]=\"'checkbox'+i\" [style.background-color]=\"item.color\"></label>\n        <div [ngStyle]=\"{'border': item.checked ? '1px solid #fff' : '1px solid #ddd'}\" style=\"border-radius: 50%; width: 28px; height: 28px; position: absolute; top: 0; left: 0;\"></div>\n    </div>\n</div>",
                styles: [".swatch{display:flex;flex-wrap:wrap;margin-bottom:1em}.round{position:relative;width:30px;height:30px;margin-right:5px;margin-bottom:5px}.round label{border:1px solid #ccc;border-radius:50%;cursor:pointer;height:28px;left:0;position:absolute;top:0;width:28px}.round input[type=checkbox]{visibility:hidden;width:30px;height:30px;margin:0;padding:0}.round label:after{border:2px solid #fff;border-top:none;border-right:none;content:\"\";height:6px;left:7px;opacity:0;position:absolute;z-index:2;top:8px;transform:rotate(-45deg);width:12px;transition:.2s ease-in-out}.round input[type=checkbox]:checked+label:after{opacity:1}"]
            },] }
];
FilterSwatchComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
FilterSwatchComponent.propDecorators = {
    filterData: [{ type: Input }],
    filterSelected: [{ type: Input }],
    titlegroup: [{ type: Input }],
    swatchMapping: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1maWx0ZXIvZmlsdGVyLXN3YXRjaC9maWx0ZXItc3dhdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBYzdDLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEMsWUFDVSxXQUEyQixFQUMzQixNQUFjO1FBRGQsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQeEIsc0JBQWlCLEdBQThCLEVBQUUsQ0FBQztRQUdsRCxzQkFBaUIsR0FBbUMsRUFBRSxDQUFDO0lBS25ELENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLG1DQUFtQztRQUNuQyxJQUFJLFdBQVcsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEksV0FBVyxHQUFH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aUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDO2dCQUN6RCxtQkFBbUIsRUFBRSxPQUFPO2FBQzdCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBMUZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtbUJBQTZDOzthQUU5Qzs7O1lBZFEsY0FBYztZQUFFLE1BQU07Ozt5QkFnQjVCLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZHNTdHJpbmdVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuaW50ZXJmYWNlIFN3YXRjaENoZWNrQm94TW9kZWxJbnRlcmZhY2Uge1xuICBjaGVja2VkOiBib29sZWFuO1xuICBjb2xvcjogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRzLWZpbHRlci1zd2F0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsdGVyLXN3YXRjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbHRlci1zd2F0Y2guY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlclN3YXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZmlsdGVyRGF0YTogYW55O1xuICBASW5wdXQoKSBmaWx0ZXJTZWxlY3RlZDoge2NvbG9yOiBhbnlbXX07XG4gIGZpbHRlclNlbGVjdGVkVXJsOiB7W2tleTogc3RyaW5nXTogc3RyaW5nW119ID0ge307XG4gIEBJbnB1dCgpIHRpdGxlZ3JvdXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgc3dhdGNoTWFwcGluZzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGZpbHRlcnN3YXRjaGdyb3VwOiBTd2F0Y2hDaGVja0JveE1vZGVsSW50ZXJmYWNlW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2ZXJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb25zdHJ1Y0ZpbHRlclN3YXRjaCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY29uc3RydWNGaWx0ZXJTd2F0Y2goKTtcbiAgfVxuXG4gIGNvbnN0cnVjRmlsdGVyU3dhdGNoKCk6IHZvaWR7XG4gICAgLy8gQ29uc3RydWN0IENoZWNrYm94IGxhYmVsICYgdmFsdWVcbiAgICBsZXQgZ2V0QWxsVmFsdWU6IHN0cmluZ1tdID0gdGhpcy5maWx0ZXJEYXRhLm1hcCggKGl0ZW06IGFueSkgPT4gaXRlbS5jb2xvci5pbmNsdWRlcygnLCcpID8gaXRlbS5jb2xvci5zcGxpdCgnLCcpIDogaXRlbS5jb2xvcikuZmxhdCgpO1xuICAgIGdldEFsbFZhbHVlID0gWy4uLm5ldyBTZXQoZ2V0QWxsVmFsdWUpXTtcbiAgICBjb25zdCBjaGVja3N3YXRjaCA9IFtdO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0QWxsVmFsdWUubGVuZ3RoOyBpKyspe1xuICAgIGZvciAoY29uc3QgdmFsIG9mIGdldEFsbFZhbHVlKXtcbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgbGFiZWw6IHZhbCxcbiAgICAgICAgdXJsOiBNZHNTdHJpbmdVdGlscy5jb252ZXJ0VG9TbHVnKHZhbCksXG4gICAgICAgIGNvbG9yOiB0aGlzLnN3YXRjaE1hcHBpbmdbTWRzU3RyaW5nVXRpbHMuY29udmVydFRvU2x1Zyh2YWwpXSxcbiAgICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICB0aGlzLmFjdGl2ZXJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZSggcGFyYW0gPT4ge1xuICAgICAgICBpZiAocGFyYW0uY29sb3Ipe1xuICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBwYXJhbS5jb2xvci5pbmNsdWRlcygnLCcpO1xuICAgICAgICAgIGNvbnN0IGNoZWNrQXJyT3JTdHIgPSBpc0FycmF5ID8gcGFyYW0uY29sb3Iuc3BsaXQoJywnKSA6IFtwYXJhbS5jb2xvcl07XG4gICAgICAgICAgY29uc3QgaXNJbmNsdWRlID0gY2hlY2tBcnJPclN0ci5tYXAoIChpdGVtOiBzdHJpbmcpID0+IGl0ZW0gPT09IG9iai51cmwpLmluY2x1ZGVzKHRydWUpO1xuICAgICAgICAgIG9iai5jaGVja2VkID0gaXNJbmNsdWRlID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNoZWNrc3dhdGNoLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuZmlsdGVyc3dhdGNoZ3JvdXAgPSBjaGVja3N3YXRjaDtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWQuY29sb3IgPSB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udXJsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmwuY29sb3IgPSB0aGlzLmZpbHRlcnN3YXRjaGdyb3VwLmZpbHRlciggaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyU2VsZWN0ZWQuY29sb3IubGVuZ3RoID09PSAwKSB7IGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkLmNvbG9yOyB9XG4gICAgfVxuXG4gIH1cblxuICBjbGlja0NoZWNrYm94KHNlbGVjdDogU3dhdGNoQ2hlY2tCb3hNb2RlbEludGVyZmFjZSk6IHZvaWR7XG4gICAgLy8gLS0tLS0gSUYgVVJMIFBBUkFNRVRFUiBFTVBUWSAtLS0tLSAvL1xuICAgIGlmICghdGhpcy5maWx0ZXJTZWxlY3RlZC5jb2xvciB8fCAhdGhpcy5maWx0ZXJTZWxlY3RlZFVybC5jb2xvcil7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkLmNvbG9yID0gW107XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkVXJsLmNvbG9yID0gW107XG4gICAgfVxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtczoge2NvbG9yOiBzZWxlY3QudXJsfSxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICB9KTtcblxuICAgIC8vIC0tLS0tIElGIFVSTCBQQVJBTUVURVIgRVhTSUVTVCAtLS0tLSAvL1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuZmlsdGVyU2VsZWN0ZWQuY29sb3IuaW5kZXhPZihzZWxlY3QubGFiZWwpO1xuICAgIGlmIChpZHggPiAtMSl7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkLmNvbG9yLnNwbGljZShpZHgsIDEpO1xuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RlZFVybC5jb2xvci5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIC8vIERlbGV0ZSBwcm9wZXJ0eSBpZiB2YWx1ZS9zIGVtcHR5XG4gICAgICBpZiAodGhpcy5maWx0ZXJTZWxlY3RlZC5jb2xvci5sZW5ndGggPT09IDAgfHwgdGhpcy5maWx0ZXJTZWxlY3RlZFVybC5jb2xvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsdGVyU2VsZWN0ZWQuY29sb3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmZpbHRlclNlbGVjdGVkVXJsLmNvbG9yO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIHRvIHVybCBxdWVyeVBhcmFtXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggW10sIHtcbiAgICAgICAgcXVlcnlQYXJhbXM6IHtjb2xvcjogdGhpcy5maWx0ZXJTZWxlY3RlZFVybC5jb2xvciA/IHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmwuY29sb3Iuam9pbigpIDogbnVsbH0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclNlbGVjdGVkLmNvbG9yLnB1c2goc2VsZWN0LmxhYmVsKTtcbiAgICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRVcmwuY29sb3IucHVzaChzZWxlY3QudXJsKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCBbXSwge1xuICAgICAgICBxdWVyeVBhcmFtczoge2NvbG9yOiB0aGlzLmZpbHRlclNlbGVjdGVkVXJsLmNvbG9yLmpvaW4oKX0sXG4gICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=