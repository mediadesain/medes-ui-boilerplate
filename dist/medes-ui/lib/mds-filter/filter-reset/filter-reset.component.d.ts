import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedFilterInterface } from '../mds-filter.interface';
export declare class MdsFilterResetComponent implements OnInit {
    private router;
    content: any;
    class: string;
    filterSelected: SelectedFilterInterface;
    filterSelectedChange: EventEmitter<any>;
    constructor(router: Router);
    ngOnInit(): void;
    reset(): void;
}
