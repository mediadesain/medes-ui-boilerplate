import { Pipe } from '@angular/core';
import { MdsArrayUtils } from '../utils';
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
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'filter',
                pure: false
            },] }
];
/* Document Filter Pipe Summarized by MediaDesain
  Items is loop of array item and filter is item will show. Makesure format filter like this example
  const items = [
    {category:'A', type:'food'},
    {category:'B', type:'drink'},
    {category:'C', type:'snack'},
    {category:'A', type:'drink'},
    {category:'B', type:'snack'}
  ]
  const filteritems = {
    category:['A','B'],
    type:['food', 'drink']
  }
  <ul>
    <li *ngFor="let item of (items|filter:filteritems)"> ... </li>
  </ul>

  Output [
    {category:'A', type:'food'},
    {category:'B', type:'drink'},
    {category:'A', type:'drink'}
  ]
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1waXBlcy1tb2R1bGUvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU96QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixTQUFTLENBQUMsS0FBWSxFQUFFLE1BQVc7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU8sRUFBRSxDQUFDO1NBQUU7UUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksSUFBSSxFQUFFO2dCQUNSLE1BQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxHQUFHLEdBQVEsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3hEO3FCQUFNO29CQUNMLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLEtBQUssR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7cUJBQ3ZEO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBeEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsS0FBSzthQUNaOztBQXdCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kc0FycmF5VXRpbHMgfSBmcm9tICcuLi91dGlscyc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2ZpbHRlcicsXG4gIHB1cmU6IGZhbHNlXG59KVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBmaWx0ZXI6IGFueSk6IGFueVtdIHtcbiAgICBpZiAoIWl0ZW1zKSB7IHJldHVybiBbXTsgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhmaWx0ZXIpO1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZmlsdGVyKTtcbiAgICBmb3IgKGNvbnN0IGEgaW4ga2V5cykge1xuICAgICAgaWYgKGtleXMpIHtcbiAgICAgICAgY29uc3Qga2V5OiBzdHJpbmcgPSBrZXlzW2FdO1xuICAgICAgICBjb25zdCB2YWw6IGFueSA9IHZhbHVlc1thXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlciggaXRlbSA9PiBpdGVtW2tleV0uaW5jbHVkZXModmFsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpdGVtcyA9IE1kc0FycmF5VXRpbHMuZmlsdGVyTXVsdGlwbGUoaXRlbXMsIGtleSwgdmFsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG59XG5cbi8qIERvY3VtZW50IEZpbHRlciBQaXBlIFN1bW1hcml6ZWQgYnkgTWVkaWFEZXNhaW5cbiAgSXRlbXMgaXMgbG9vcCBvZiBhcnJheSBpdGVtIGFuZCBmaWx0ZXIgaXMgaXRlbSB3aWxsIHNob3cuIE1ha2VzdXJlIGZvcm1hdCBmaWx0ZXIgbGlrZSB0aGlzIGV4YW1wbGVcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge2NhdGVnb3J5OidBJywgdHlwZTonZm9vZCd9LFxuICAgIHtjYXRlZ29yeTonQicsIHR5cGU6J2RyaW5rJ30sXG4gICAge2NhdGVnb3J5OidDJywgdHlwZTonc25hY2snfSxcbiAgICB7Y2F0ZWdvcnk6J0EnLCB0eXBlOidkcmluayd9LFxuICAgIHtjYXRlZ29yeTonQicsIHR5cGU6J3NuYWNrJ31cbiAgXVxuICBjb25zdCBmaWx0ZXJpdGVtcyA9IHtcbiAgICBjYXRlZ29yeTpbJ0EnLCdCJ10sXG4gICAgdHlwZTpbJ2Zvb2QnLCAnZHJpbmsnXVxuICB9XG4gIDx1bD5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgKGl0ZW1zfGZpbHRlcjpmaWx0ZXJpdGVtcylcIj4gLi4uIDwvbGk+XG4gIDwvdWw+XG5cbiAgT3V0cHV0IFtcbiAgICB7Y2F0ZWdvcnk6J0EnLCB0eXBlOidmb29kJ30sXG4gICAge2NhdGVnb3J5OidCJywgdHlwZTonZHJpbmsnfSxcbiAgICB7Y2F0ZWdvcnk6J0EnLCB0eXBlOidkcmluayd9XG4gIF1cbiovXG4iXX0=