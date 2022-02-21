import { Pipe } from '@angular/core';
export class SearchPipe {
    transform(items, search) {
        if (items && search.keyword !== undefined) {
            items = items.filter(item => item[search.objkey].toLowerCase().includes(search.keyword.toLowerCase()));
            return items;
        }
    }
}
SearchPipe.decorators = [
    { type: Pipe, args: [{
                name: 'search',
                pure: false
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZWRlcy11aS9zcmMvbGliL21kcy1waXBlcy1tb2R1bGUvc2VhcmNoLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQsTUFBTSxPQUFPLFVBQVU7SUFDckIsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUEyQztRQUNqRSxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN6QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBRSxDQUFDO1lBQ3pHLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUFYRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsSUFBSSxFQUFFLEtBQUs7YUFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbkBQaXBlKHtcbiAgbmFtZTogJ3NlYXJjaCcsXG4gIHB1cmU6IGZhbHNlXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBzZWFyY2g6IHsgb2Jqa2V5OiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZyB9KTogYW55W10ge1xuICAgIGlmIChpdGVtcyAmJiBzZWFyY2gua2V5d29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlciggaXRlbSA9PiBpdGVtW3NlYXJjaC5vYmprZXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLmtleXdvcmQudG9Mb3dlckNhc2UoKSkgKTtcbiAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gIH1cbn1cbiJdfQ==