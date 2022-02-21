import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckBoxModelInterface, FilterModelInterface, FilterSelectedInterface } from './mds-filter-checkbox.inteface';
export declare class MdsFilterCheckboxComponent implements OnInit {
    private router;
    private activeroute;
    classgroup: string | undefined;
    titlegroup: string | undefined;
    resetgroup: string | undefined;
    reset: string | undefined;
    filterData: any;
    filterBy: string[];
    filterSelected: FilterSelectedInterface;
    filterList: FilterModelInterface;
    filterSelectedUrl: FilterSelectedInterface;
    constructor(router: Router, activeroute: ActivatedRoute);
    ngOnInit(): void;
    filterToCheckbox(): any;
    checkBoxFilter(filterSelected: FilterSelectedInterface, filterSelectedUrl: FilterSelectedInterface, prop: string, select: CheckBoxModelInterface): any;
    resetFilter(filter: FilterModelInterface, filterSelected: FilterSelectedInterface, prop: string): any;
    resetAll(filter: FilterModelInterface, filterSelected: FilterSelectedInterface, props: string[]): any;
}
