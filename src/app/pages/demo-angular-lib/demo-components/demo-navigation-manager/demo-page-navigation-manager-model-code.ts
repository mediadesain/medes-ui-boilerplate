export class PageNavigationManagerModelCode {

    static geModel(model: 'pageNavigation' | 'pageCounter' | 'all'): string {
        let modelContent = '';
        let outputModelContent = '';
        if (model === 'pageNavigation') {
            modelContent = `itemToShow?: number;
        pageNavigation?: {
            type?: 'standard' | 'numbering';
            color?: string;
        };`
        } else if (model === 'pageCounter') {
            modelContent = `itemToShow?: number;
            pageCounter?: {
            options?: number[];
        };`
        } else {
            modelContent = `itemToShow?: number;
        pageNavigation?: {
            type?: 'standard' | 'numbering';
            color?: string;
        };
        pageCounter?: {
            options?: number[];
        };`
        }
        if (model === 'all') {
            outputModelContent = `
// Output data
interface PageNavigationManagerDataModel {
    data?: {
        selectedRange?: {
            start: number;
            end: number;
        }
    }
}`
        }
        return`
interface MdsFilterModel ${model === 'all' ? 'implements PageNavigationManagerDataModel ' : ''}{
    configs: {
        ${modelContent}
    }
}${outputModelContent}`
    }
    
}