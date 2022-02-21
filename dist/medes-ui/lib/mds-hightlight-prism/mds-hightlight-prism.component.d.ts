import { AfterViewInit, ElementRef, OnChanges } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-ruby';
export declare class MdsHightlightPrismComponent implements AfterViewInit, OnChanges {
    codeContent: ElementRef;
    code?: string;
    language?: string;
    constructor();
    ngAfterViewInit(): any;
    ngOnChanges(changes: any): void;
}
