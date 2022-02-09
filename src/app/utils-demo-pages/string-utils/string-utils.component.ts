import { Component, OnInit } from '@angular/core';
import { MdsStringUtils } from 'medes-ui';

@Component({
  selector: 'medes-string-utils',
  templateUrl: './string-utils.component.html',
  styleUrls: ['./string-utils.component.scss']
})
export class StringUtilsComponent implements OnInit {
import: string = `import { MdsStringUtils } from 'medes-ui';`;

  constructor() { }

  ngOnInit(): void {
    MdsStringUtils.convertToSlug
  }

}
