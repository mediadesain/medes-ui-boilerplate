export const htmlCode = `
<!-- Medes Page Counter Component -->
<small>Total Item </small>
<mds-page-counter [pageCountConfig]="toShowOptions" [(pageNavConfig)]="pageNavConfig" [customStyle]="'background: unset; color: #fff;'"></mds-page-counter>`;


export const interfaceCode = `
pageNavConfig: PageNavigationConfigInterface = {
  type: MdsPagerType | string; // Required, Pager style/type will use normal or pagination
  itemToShow?: number; // Optional (default value is 10). Total item to show
}
  
MdsPagerType {
  STANDARD = 'standard',
  NUMBERING = 'numbering',
}`;

