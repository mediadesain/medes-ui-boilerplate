import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwatchCheckBoxModelInterface, SelectedFilterInterface } from '../mds-filter.interface';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterSwatchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterSwatchComponent, "mds-filter-swatch", never, { "filterData": "filterData"; "filterBy": "filterBy"; "filterSelected": "filterSelected"; "titlegroup": "titlegroup"; "swatchMapping": "swatchMapping"; "swatchSize": "swatchSize"; "swatchRadius": "swatchRadius"; }, {}, never, never>;
}
//# sourceMappingURL=filter-swatch.component.d.ts.map