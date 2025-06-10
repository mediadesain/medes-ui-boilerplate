export const htmlCode = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive" [model]="mdsFormModel"></mds-toggle-button>
<p>Value: {{isActive}}</p>`;


export const interfaceCode = `
export interface MdsFormModel {
  configs: {
    ...
    // Toggle Configuration (MdsToggleConfigModel)
    mdsToggle?: {
      type?: MdsToggleType | string; // Toggle style to use, by default is modern
      color?: string; // Color swatch to use
      isDisabled?: boolean; // disable on enable toggle
    }
    ...
  }
}

export const enum MdsToggleType {
  MODERN = 'modern',
  CLASIC = 'clasic',
}`;