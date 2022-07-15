import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedFilterInterface } from '../mds-filter.interface';
import * as i0 from "@angular/core";
export declare class MdsFilterResetComponent implements OnInit {
    private router;
    content: any;
    class: string;
    filterSelected: SelectedFilterInterface;
    filterSelectedChange: EventEmitter<any>;
    constructor(router: Router);
    ngOnInit(): void;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdsFilterResetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdsFilterResetComponent, "mds-filter-reset", never, { "content": "content"; "class": "class"; "filterSelected": "filterSelected"; }, { "filterSelectedChange": "filterSelectedChange"; }, never, never>;
}
//# sourceMappingURL=filter-reset.component.d.ts.map