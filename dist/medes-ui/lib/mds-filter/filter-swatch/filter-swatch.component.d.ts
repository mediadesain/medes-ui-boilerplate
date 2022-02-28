import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwatchCheckBoxModelInterface, SelectedFilterInterface } from '../mds-filter.interface';
export declare class FilterSwatchComponent implements OnInit, OnChanges {
    private activeroute;
    private router;
    filterData: any;
    filterBy: string;
    filterSelected: SelectedFilterInterface;
    filterSelectedUrl: SelectedFilterInterface;
    titlegroup: string | undefined;
    swatchMapping: {
        [key: string]: string;
    };
    swatchSize: number;
    swatchRadius: number;
    filterswatchgroup: SwatchCheckBoxModelInterface[];
    constructor(activeroute: ActivatedRoute, router: Router);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    construcFilterSwatch(): void;
    clickCheckbox(select: SwatchCheckBoxModelInterface): void;
}
