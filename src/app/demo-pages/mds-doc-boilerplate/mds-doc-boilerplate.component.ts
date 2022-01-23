import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mds-doc-boilerplate',
  templateUrl: './mds-doc-boilerplate.component.html',
  styleUrls: ['./mds-doc-boilerplate.component.scss']
})
export class MdsDocBoilerplateComponent implements OnInit {

  samplehtml: string = `<div class="group">
  <span>Content</span>
</div>`
samplescss: string = `.body{
  background: #f9f9f9;
  color: #ddd
}`;
samplejs: string = `function GetData(values){
  console.log(values);
}`;
samplets: string = `import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
