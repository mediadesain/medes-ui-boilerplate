import { AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';
import * as i0 from "@angular/core";
export declare class MdsHightlightPrismComponent implements AfterViewInit, OnChanges {
    codeContent: ElementRef;
    code?: string;
    language?: string;
    ngAfterViewInit(): any;
    ngOnChanges(changes: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MdsHightlightPrismComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MdsHightlightPrismComponent, "mds-hightlight-prism", never, { "code": "code"; "language": "language"; }, {}, never, never>;
}
//# sourceMappingURL=mds-hightlight-prism.component.d.ts.map