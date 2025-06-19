export const htmlCode = `
<!-- Demo Medes Page Counter Component -->
<small>Total Item </small>
<mds-page-counter [(model)]="pageNavConfig" [customStyle]="'border-radius: 7px;'"></mds-page-counter>`;


export const interfaceCode = `
interface PageNavigationManagerModel {
    configs: {
        itemToShow?: number;
        pageCounter?: {
            options?: number[];
            itemToShow?: number;
        };
        pageNavigation?: {...};
    },
    data: {...};
}`;

