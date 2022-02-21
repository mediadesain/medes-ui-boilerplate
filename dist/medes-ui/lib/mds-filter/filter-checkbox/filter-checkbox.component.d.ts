import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface CheckBoxModelInterface {
    checked: boolean;
    label: string;
    counter: number;
    url: string;
}
export declare class FilterCheckboxComponent implements OnInit, OnChanges {
    private router;
    private activeroute;
    filterData: any;
    filterBy: string[];
    filterSelected: {
        [key: string]: string[];
    };
    filterSelectedUrl: {
        [key: string]: string[];
    };
    titlegroup: string | undefined;
    reset: string | undefined;
    hideCounter: boolean;
    filtergroup: {
        [key: string]: CheckBoxModelInterface[];
    };
    constructor(router: Router, activeroute: ActivatedRoute);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    construcFilterGroup(): void;
    clickCheckbox(select: CheckBoxModelInterface, prop: string): void;
    resetFilter(select: CheckBoxModelInterface, prop: string): any;
}
export {};
