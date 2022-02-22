import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
interface SwatchCheckBoxModelInterface {
    checked: boolean;
    color: string;
    label: string;
    url: string;
}
export declare class FilterSwatchComponent implements OnInit, OnChanges {
    private activeroute;
    private router;
    filterData: any;
    filterBy: string;
    filterSelected: {
        color: any[];
    };
    filterSelectedUrl: {
        [key: string]: string[];
    };
    titlegroup: string | undefined;
    swatchMapping: {
        [key: string]: string;
    };
    filterswatchgroup: SwatchCheckBoxModelInterface[];
    constructor(activeroute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    construcFilterSwatch(): void;
    clickCheckbox(select: SwatchCheckBoxModelInterface): void;
}
export {};
