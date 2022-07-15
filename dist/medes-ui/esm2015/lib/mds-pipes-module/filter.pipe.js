/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Pipe } from '@angular/core';
import { MdsArrayUtils } from '../utils';
import * as i0 from "@angular/core";
export class FilterPipe {
    transform(items, filter) {
        if (!items) {
            return [];
        }
        const keys = Object.keys(filter);
        const values = Object.values(filter);
        for (const a in keys) {
            if (keys) {
                const key = keys[a];
                const val = values[a];
                if (!Array.isArray(val)) {
                    items = items.filter(item => item[key].includes(val));
                }
                else {
                    if (val.length > 0) {
                        items = MdsArrayUtils.filterMultiple(items, key, val);
                    }
                }
            }
        }
        return items;
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "filter", type: FilterPipe, pure: false });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterPipe, [{
        type: Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1waXBlcy1tb2R1bGUvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELHNFQUFzRTtBQUN0RSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQU96QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsS0FBWSxFQUFFLE1BQVc7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hEO3FCQUFNO29CQUNMLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLEtBQUssR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3ZEO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7b0VBbkJVLFVBQVU7eUVBQVYsVUFBVTt1RkFBVixVQUFVO2NBTHRCLElBQUk7ZUFBQztnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlcyAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRzQXJyYXlVdGlscyB9IGZyb20gJy4uL3V0aWxzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJyxcbiAgcHVyZTogZmFsc2Vcbn0pXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpdGVtczogYW55W10sIGZpbHRlcjogYW55KTogYW55W10ge1xuICAgIGlmICghaXRlbXMpIHsgcmV0dXJuIFtdOyB9XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGZpbHRlcik7XG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhmaWx0ZXIpO1xuICAgIGZvciAoY29uc3QgYSBpbiBrZXlzKSB7XG4gICAgICBpZiAoa2V5cykge1xuICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGtleXNbYV07XG4gICAgICAgIGNvbnN0IHZhbDogYW55ID0gdmFsdWVzW2FdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKCBpdGVtID0+IGl0ZW1ba2V5XS5pbmNsdWRlcyh2YWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGl0ZW1zID0gTWRzQXJyYXlVdGlscy5maWx0ZXJNdWx0aXBsZShpdGVtcywga2V5LCB2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuLyogRG9jdW1lbnQgRmlsdGVyIFBpcGUgU3VtbWFyaXplZCBieSBNZWRpYURlc2FpblxuICBJdGVtcyBpcyBsb29wIG9mIGFycmF5IGl0ZW0gYW5kIGZpbHRlciBpcyBpdGVtIHdpbGwgc2hvdy4gTWFrZXN1cmUgZm9ybWF0IGZpbHRlciBsaWtlIHRoaXMgZXhhbXBsZVxuICBjb25zdCBpdGVtcyA9IFtcbiAgICB7Y2F0ZWdvcnk6J0EnLCB0eXBlOidmb29kJ30sXG4gICAge2NhdGVnb3J5OidCJywgdHlwZTonZHJpbmsnfSxcbiAgICB7Y2F0ZWdvcnk6J0MnLCB0eXBlOidzbmFjayd9LFxuICAgIHtjYXRlZ29yeTonQScsIHR5cGU6J2RyaW5rJ30sXG4gICAge2NhdGVnb3J5OidCJywgdHlwZTonc25hY2snfVxuICBdXG4gIGNvbnN0IGZpbHRlcml0ZW1zID0ge1xuICAgIGNhdGVnb3J5OlsnQScsJ0InXSxcbiAgICB0eXBlOlsnZm9vZCcsICdkcmluayddXG4gIH1cbiAgPHVsPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaXRlbSBvZiAoaXRlbXN8ZmlsdGVyOmZpbHRlcml0ZW1zKVwiPiAuLi4gPC9saT5cbiAgPC91bD5cblxuICBPdXRwdXQgW1xuICAgIHtjYXRlZ29yeTonQScsIHR5cGU6J2Zvb2QnfSxcbiAgICB7Y2F0ZWdvcnk6J0InLCB0eXBlOidkcmluayd9LFxuICAgIHtjYXRlZ29yeTonQScsIHR5cGU6J2RyaW5rJ31cbiAgXVxuKi9cbiJdfQ==