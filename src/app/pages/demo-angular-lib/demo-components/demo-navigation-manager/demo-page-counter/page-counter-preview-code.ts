export const htmlCode = `
<!-- Medes Page Counter Component -->
<small>Total Item </small>
<mds-page-counter [model]="pageNavConfig" [customStyle]="'background: unset; color: #fff;'"></mds-page-counter>`;


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

