export class MdsFormModelCode {

    static geModel(model: 'mdsInputNumber' | 'mdsToggle' | 'all'): string {
        let modelContent: string;
        if (model === 'mdsInputNumber') {
            modelContent = `mdsInputNumber?: {
            totalDecimal?: number;
            isDisabled?: boolean;
        }`;
        } else if (model === 'mdsToggle') {
            modelContent = `mdsToggle?: {
            type?: 'modern' | 'clasic';
            color?: string;
            isDisabled?: boolean;
        }`
        } else {
            modelContent = `mdsInputNumber?: {
            totalDecimal?: number;
            isDisabled?: boolean;
        };
        mdsToggle?: {
            type?: 'modern' | 'clasic';
            color?: string;
            isDisabled?: boolean;
        };`;
        }
        return`
interface MdsFilterModel {
    configs: {
        ${modelContent}
    };
}`
    }
    
}