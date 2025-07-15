import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
/*-public-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-layout-utils',
    templateUrl: './demo-layout-utils.component.html',
    styleUrls: ['./demo-layout-utils.component.scss'],
    imports: [FormsModule, CommonModule, MdsHightlightPrismModule]
})
export class DemoLayoutUtilsComponent {
  paddingOptions = [
    {value:'p-0', label:'No Padding'},
    {value:'p-1', label:'Padding 1'},
    {value:'p-2', label:'Padding 2'},
    {value:'p-3', label:'Padding 3'},
    {value:'p-y-t-0', label:'No Padding Top'},
    {value:'p-y-t-1', label:'Padding Top 1'},
    {value:'p-y-t-2', label:'Padding Top 2'},
    {value:'p-y-t-3', label:'Padding Top 3'},
    {value:'p-x-r-0', label:'No Padding Left'},
    {value:'p-x-r-1', label:'Padding Left 1', },
    {value:'p-x-r-2', label:'Padding Left 2', },
    {value:'p-x-r-3', label:'Padding Left 3', },
    {value:'p-y-b-0', label:'No Padding Bottom'},
    {value:'p-y-b-1', label:'Padding Bottom 1', },
    {value:'p-y-b-2', label:'Padding Bottom 2', },
    {value:'p-y-b-3', label:'Padding Bottom 3', },
    {value:'p-x-l-0', label:'No Padding Right'},
    {value:'p-x-l-1', label:'Padding Right 1'},
    {value:'p-x-l-2', label:'Padding Right 2'},
    {value:'p-x-l-3', label:'Padding Right 3'},
    {value:'p-y-0', label:'No Padding Vertical'},
    {value:'p-y-1', label:'Padding Vertical 1'},
    {value:'p-y-2', label:'Padding Vertical 2'},
    {value:'p-y-3', label:'Padding Vertical 3'},
    {value:'p-x-0', label:'No Padding Horizontal'},
    {value:'p-x-1', label:'Padding Horizontal 1'},
    {value:'p-x-2', label:'Padding Horizontal 2'},
    {value:'p-x-3', label:'Padding Horizontal 3'}
  ];
  marginOptions = [
    {value: 'm-0', label:'No Margin'},
    {value: 'm-1', label:'Margin 1'},
    {value: 'm-2', label:'Margin 2'},
    {value: 'm-3', label:'Margin 3'},
    {value: 'm-y-t-0', label:'No Margin Top'},
    {value: 'm-y-t-1', label:'Margin Top 1'},
    {value: 'm-y-t-2', label:'Margin Top 2'},
    {value: 'm-y-t-3', label:'Margin Top 3'},
    {value: 'm-x-r-0', label:'No Margin Left'},
    {value: 'm-x-r-1', label:'Margin Left 1'},
    {value: 'm-x-r-2', label:'Margin Left 2'},
    {value: 'm-x-r-3', label:'Margin Left 3'},
    {value: 'm-y-b-0', label:'No Margin Bottom'},
    {value: 'm-y-b-1', label:'Margin Bottom 1'},
    {value: 'm-y-b-2', label:'Margin Bottom 2'},
    {value: 'm-y-b-3', label:'Margin Bottom 3'},
    {value: 'm-x-l-0', label:'No Margin Right'},
    {value: 'm-x-l-1', label:'Margin Right 1'},
    {value: 'm-x-l-2', label:'Margin Right 2'},
    {value: 'm-x-l-3', label:'Margin Right 3'},
    {value: 'm-y-0', label:'No Margin Vertical'},
    {value: 'm-y-1', label:'Margin Vertical 1'},
    {value: 'm-y-2', label:'Margin Vertical 2'},
    {value: 'm-y-3', label:'Margin Vertical 3'},
    {value: 'm-x-0', label:'No Margin Horizontal'},
    {value: 'm-x-1', label:'Margin Horizontal 1'},
    {value: 'm-x-2', label:'Margin Horizontal 2'},
    {value: 'm-x-3', label:'Margin Horizontal 3'}
  ];
  flexDirection = [
    {value: 'flex-x', label: 'Horizontal'},
    {value: 'flex-y', label: 'Vertical'}
  ];
  justifyItems = [
    {label: 'Justify Start', value: 'justify-start'},
    {label: 'Justify Center', value: 'justify-center'},
    {label: 'Justify End', value: 'justify-right'},
    {label: 'Justify Arround', value: 'justify-around'},
    {label: 'Justify Between', value: 'justify-between'}
  ];
  alignItems = [
    {label: 'Align Start', value: 'align-start'},
    {label: 'Align Middle', value: 'align-middle'},
    {label: 'Align End', value: 'align-end'},
    {label: 'Align Arround', value: 'align-around'},
    {label: 'Align Between', value: 'align-between'}
  ];

}
