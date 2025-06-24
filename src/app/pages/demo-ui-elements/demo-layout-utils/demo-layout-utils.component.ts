import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-layout-utils',
  templateUrl: './demo-layout-utils.component.html',
  styleUrls: ['./demo-layout-utils.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, MdsHightlightPrismModule]
})
export class DemoLayoutUtilsComponent {
  paddingOptions = [
    {value:'p-0', label:'No Padding', deprecated:'padding-0'},
    {value:'p-1', label:'Padding 1', deprecated:'padding-1'},
    {value:'p-2', label:'Padding 2', deprecated:'padding-2'},
    {value:'p-3', label:'Padding 3', deprecated:'padding-3'},
    {value:'p-y-t-0', label:'No Padding Top', deprecated:'padding-t-0'},
    {value:'p-y-t-1', label:'Padding Top 1', deprecated:'padding-t-1'},
    {value:'p-y-t-2', label:'Padding Top 2', deprecated:'padding-t-2'},
    {value:'p-y-t-3', label:'Padding Top 3', deprecated:'padding-t-3'},
    {value:'p-x-r-0', label:'No Padding Left', deprecated:'padding-l-0'},
    {value:'p-x-r-1', label:'Padding Left 1', deprecated:'padding-l-1'},
    {value:'p-x-r-2', label:'Padding Left 2', deprecated:'padding-l-2'},
    {value:'p-x-r-3', label:'Padding Left 3', deprecated:'padding-l-3'},
    {value:'p-y-b-0', label:'No Padding Bottom', deprecated:'padding-b-0'},
    {value:'p-y-b-1', label:'Padding Bottom 1', deprecated:'padding-b-1'},
    {value:'p-y-b-2', label:'Padding Bottom 2', deprecated:'padding-b-2'},
    {value:'p-y-b-3', label:'Padding Bottom 3', deprecated:'padding-b-3'},
    {value:'p-x-l-0', label:'No Padding Right', deprecated:'padding-r-0'},
    {value:'p-x-l-1', label:'Padding Right 1', deprecated:'padding-r-1'},
    {value:'p-x-l-2', label:'Padding Right 2', deprecated:'padding-r-2'},
    {value:'p-x-l-3', label:'Padding Right 3', deprecated:'padding-r-3'},
    {value:'p-y-0', label:'No Padding Vertical', deprecated:'padding-vertical-0'},
    {value:'p-y-1', label:'Padding Vertical 1', deprecated:'padding-vertical-1'},
    {value:'p-y-2', label:'Padding Vertical 2', deprecated:'padding-vertical-2'},
    {value:'p-y-3', label:'Padding Vertical 3', deprecated:'padding-vertical-3'},
    {value:'p-x-0', label:'No Padding Horizontal', deprecated:'padding-horizontal-0'},
    {value:'p-x-1', label:'Padding Horizontal 1', deprecated:'padding-horizontal-1'},
    {value:'p-x-2', label:'Padding Horizontal 2', deprecated:'padding-horizontal-2'},
    {value:'p-x-3', label:'Padding Horizontal 3', deprecated:'padding-horizontal-3'}
  ];
  marginOptions = [
    {value: 'm-0', label:'No Margin', deprecated:'margin-0'},
    {value: 'm-1', label:'Margin 1', deprecated:'margin-1'},
    {value: 'm-2', label:'Margin 2', deprecated:'margin-2'},
    {value: 'm-3', label:'Margin 3', deprecated:'margin-3'},
    {value: 'm-y-t-0', label:'No Margin Top', deprecated:'margin-t-0'},
    {value: 'm-y-t-1', label:'Margin Top 1', deprecated:'margin-t-1'},
    {value: 'm-y-t-2', label:'Margin Top 2', deprecated:'margin-t-2'},
    {value: 'm-y-t-3', label:'Margin Top 3', deprecated:'margin-t-3'},
    {value: 'm-x-r-0', label:'No Margin Left', deprecated:'margin-l-0'},
    {value: 'm-x-r-1', label:'Margin Left 1', deprecated:'margin-l-1'},
    {value: 'm-x-r-2', label:'Margin Left 2', deprecated:'margin-l-2'},
    {value: 'm-x-r-3', label:'Margin Left 3', deprecated:'margin-l-3'},
    {value: 'm-y-b-0', label:'No Margin Bottom', deprecated:'margin-b-0'},
    {value: 'm-y-b-1', label:'Margin Bottom 1', deprecated:'margin-b-1'},
    {value: 'm-y-b-2', label:'Margin Bottom 2', deprecated:'margin-b-2'},
    {value: 'm-y-b-3', label:'Margin Bottom 3', deprecated:'margin-b-3'},
    {value: 'm-x-l-0', label:'No Margin Right', deprecated:'margin-r-0'},
    {value: 'm-x-l-1', label:'Margin Right 1', deprecated:'margin-r-1'},
    {value: 'm-x-l-2', label:'Margin Right 2', deprecated:'margin-r-2'},
    {value: 'm-x-l-3', label:'Margin Right 3', deprecated:'margin-r-3'},
    {value: 'm-y-0', label:'No Margin Vertical', deprecated:'margin-vertical-0'},
    {value: 'm-y-1', label:'Margin Vertical 1', deprecated:'margin-vertical-1'},
    {value: 'm-y-2', label:'Margin Vertical 2', deprecated:'margin-vertical-2'},
    {value: 'm-y-3', label:'Margin Vertical 3', deprecated:'margin-vertical-3'},
    {value: 'm-x-0', label:'No Margin Horizontal', deprecated:'margin-horizontal-0'},
    {value: 'm-x-1', label:'Margin Horizontal 1', deprecated:'margin-horizontal-1'},
    {value: 'm-x-2', label:'Margin Horizontal 2', deprecated:'margin-horizontal-2'},
    {value: 'm-x-3', label:'Margin Horizontal 3', deprecated:'margin-horizontal-3'}
  ];
  flexDirection = [
    {value: 'flex-x', label: 'Horizontal', deprecated: 'flex-horizontal'},
    {value: 'flex-y', label: 'Vertical', deprecated: 'flex-vertical'}
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
