export const htmlCode = `
<!-- Medes Input Component -->
<mds-input-number [customClass]="myClass" [(value)]="price" [model]="mdsFormModel"></mds-input-number>
<p>Value: {{price}}</p>`;


export const interfaceCode = `
export interface MdsFormModel {
  configs: {
    mdsInputNumber?: {
      totalDecimal?: number;
      isDisabled?: boolean;
    };
    mdsToggle?: {...};
  }
}`;