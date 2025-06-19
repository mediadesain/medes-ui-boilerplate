export class FilterModelCode {

    static geModel(model: 'checkBox' | 'swatchBox' | 'rangeSlider' | 'all'): string {
        let modelContent: string;
        let outputModelContent: string = '';
        if (model === 'checkBox') {
            modelContent = `checkBox?: {
            property: string;
            label?: string;
            resetElement?: string;
            hideCounter?: boolean;
        },
        swatchBox?: {...};
        rangeSlider?: {...};`
        } else if (model === 'swatchBox') {
            modelContent = `checkBox?: {...},
        swatchBox?: {
            property: string;
            colorMap: Record<string, string>;
            label?: string;
            resetElement?: string;
            swatchSize?: number;
            swatchRadius?: number;
        };
        rangeSlider?: {...};`
        } else if (model === 'rangeSlider') {
            modelContent = `checkBox?: {...},
        swatchBox?: {...};
        rangeSlider?: {
            min: number;
            max: number;
            label?: string;
            resetElement?: string;
        };`
        } else {
            modelContent = `checkBox?: {
            property: string;
            label?: string;
            resetElement?: string;
            hideCounter?: boolean;
        },
        swatchBox?: {
            property: string;
            colorMap: Record<string, string>;
            label?: string;
            resetElement?: string;
            swatchSize?: number;
            swatchRadius?: number;
        };
        rangeSlider?: {
            min: number;
            max: number;
            label?: string;
            resetElement?: string;
        };`
        }
        if (model === 'all') {
            outputModelContent = `
// Output data
interface MdsFilterDataModel {
  data?: {
      filterSelected?: Record<string, string[]>;
      filterRange?: {
          start: number;
          end: number;
          defaultStart?: number;
          defaulEnd?: number;
      }
    }
}`
        }
        return`
interface MdsFilterModel ${model === 'all' ? 'implements MdsFilterDataModel ' : ''}{
    configs: {
        ${modelContent}
    }
}${outputModelContent}`
    }
    
}