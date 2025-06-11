export const htmlCode = `
<!-- Medes Page Navigation Component -->
<mds-page-navigation [data]="data" [(pageNavConfig)]="pageNavConfig"></mds-page-navigation>`;


export const interfaceCode = `
pageNavConfig: PageNavigationConfigInterface = {
  type: MdsPagerType | string; // Required, Pager style/type will use normal or pagination
  itemToShow?: number; // Optional (default value is 10). Total item to show
}
    
MdsPagerType {
  STANDARD = 'standard',
  NUMBERING = 'numbering',
}`;