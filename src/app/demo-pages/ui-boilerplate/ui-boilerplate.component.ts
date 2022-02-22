import { Component, OnInit } from '@angular/core';

import { MdsDateUtils } from 'projects/medes-ui/src/lib/utils';
// import { MdsDateUtils } from 'medes-ui';

@Component({
  selector: 'medes-ui-boilerplate',
  templateUrl: './ui-boilerplate.component.html',
  styleUrls: ['./ui-boilerplate.component.scss']
})
export class MdsDocBoilerplateComponent implements OnInit {
samplehtml = `<div class="group">
  <span>Content</span>
</div>`;
samplescss = `.body{
  background: #f9f9f9;
  color: #ddd
}`;
samplejs = `function GetData(values){
  console.log(values);
}`;
samplets = `import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../shared/utils/highlight.service';

@Component({
  selector: 'medes-library',
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
    // console.log(
    //   MdsObjectUtils.removeKeysIfEmpty({'asd':'','zxc':null, 'zzzz': undefined,'key':'have value'}),
    //   MdsNumberUtils.shortNumber(1512220),
    //   MdsNumberUtils.toCurrency(1512220, 'id-ID', 'IDR' , 2),
    //   MdsStringUtils.getYoutubeID('https://www.youtube.com/watch?v=Ob-lW5HQoAI'),
    //   MdsStringUtils.getYoutubeEmbed('https://www.youtube.com/watch?v=Ob-lW5HQoAI'),
    //   MdsStringUtils.getYoutubeThumbnail('https://www.youtube.com/watch?v=Ob-lW5HQoAI')
    // )
    console.log('test util', MdsDateUtils.untilNow(1641230210000));
  }

}
