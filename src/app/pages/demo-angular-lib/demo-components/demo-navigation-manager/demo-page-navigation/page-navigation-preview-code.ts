export const htmlCode = `
<!-- Medes Page Navigation Component -->
<mds-page-navigation [data]="data" [model]="pageNavConfig"></mds-page-navigation>`;


export const interfaceCode = `
interface PageNavigationManagerModel {
    configs: {
        itemToShow?: number;
        pageCounter?: {...};
        pageNavigation?: {
            type?: 'standard' | 'numbering';
            color?: string;
        }
    },
    data: {...};
}`;