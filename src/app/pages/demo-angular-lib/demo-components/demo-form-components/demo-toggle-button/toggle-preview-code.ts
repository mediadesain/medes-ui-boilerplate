export const htmlCode = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive" [model]="mdsFormModel"></mds-toggle-button>
<p>Value: {{isActive}}</p>`;


export const interfaceCode = `
export interface MdsFormModel {
  configs: {
    mdsInputNumber?: {...};
    mdsToggle?:  {
      type?: 'modern' | 'clasic';
      color?: string;
      isDisabled?: boolean;
    }
  }
};`;