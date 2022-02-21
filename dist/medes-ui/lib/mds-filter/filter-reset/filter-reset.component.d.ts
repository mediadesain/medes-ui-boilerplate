import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class MdsFilterResetComponent implements OnInit {
    private router;
    content: any;
    filterSelected: any;
    filterSelectedChange: EventEmitter<any>;
    constructor(router: Router);
    ngOnInit(): void;
    reset(): void;
}
