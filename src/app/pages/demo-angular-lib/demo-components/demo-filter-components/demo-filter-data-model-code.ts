export class MdsFilterModelCode {

    static geModel(model: 'checkBox' | 'swatchBox' | 'rangeSlider' | 'resetFilter' | 'all'): string {
        let modelContent = '';
        let outputModelContent = '';
        if (model === 'checkBox') {
            modelContent = `checkBox?: {
            property: string;
            label?: string;
            resetElement?: string;
            hideCounter?: boolean;
        };`
        } else if (model === 'swatchBox') {
            modelContent = `swatchBox?: {
            property: string;
            colorMap: Record<string, string>;
            label?: string;
            resetElement?: string;
            swatchSize?: number;
            swatchRadius?: number;
        };`
        } else if (model === 'rangeSlider') {
            modelContent = `rangeSlider?: {
            min: number;
            max: number;
            label?: string;
            resetElement?: string;
        };`
        } else if (model === 'resetFilter') {
            modelContent = ``
        } else {
            modelContent = `checkBox?: {
            property: string;
            label?: string;
            resetElement?: string;
            hideCounter?: boolean;
        };
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
        };
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