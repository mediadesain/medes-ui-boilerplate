import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-basic-elements',
  templateUrl: './demo-basic-elements.component.html',
  styleUrls: ['./demo-basic-elements.component.scss'],
  standalone: true,
  imports: [RouterModule, MdsHightlightPrismModule, CommonModule]
})
export class DemoBasicElementsComponent {
samplehtml = `
<div class="group">
  <span>Content</span>
</div>`;
samplescss = `
.body{
  background: #f9f9f9;
  color: #ddd
}`;
samplejs = `
function GetData(values){
  console.log(values);
}`;
samplets = `
import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../shared/utils/highlight.service';

@Component({
  selector: 'mds-library',
  templateUrl: './mds-library.component.html',
  styleUrls: ['./mds-library.component.scss']
})
export class MdsLibraryComponent implements OnInit {

  constructor(
    ...
    private highlightService: HighlightService) {
  }
  ngOnInit() {
    ...
  }
}`;
  // constructor() { }


}
