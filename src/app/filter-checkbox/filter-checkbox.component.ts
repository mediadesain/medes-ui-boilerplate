import { Component, OnInit } from '@angular/core';
import { HighlightPrismService } from '../services/highlight-prism.service';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {
samplehtml: string = `<pre><code class="language-html">&lt;div class=&quot;group&quot;&gt;
  &lt;span&gt;Content&lt;span&gt;
&lt;/div&gt;</code></pre>`
samplescss: string = `<pre><code class="language-css">.body{
  background: #f9f9f9;
  color: #ddd
}</code></pre>`;
samplejs: string = `<pre><code class="language-javascript">function GetData(values){
  console.log(values);
}</pre>`;
samplets: string = `<pre><code class="language-typescript">import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from '../shared/utils/highlight.service';

@Component({
  selector: 'mds-library',
  templateUrl: './mds-library.component.html',
  styleUrls: ['./mds-library.component.scss']
})
export class MdsLibraryComponent implements OnInit, AfterViewChecked {

  constructor(
    ...
    private highlightService: HighlightService) {
  }
  ngOnInit() {
    ...
  }
}</code></pre>`;
  
  private isLoaded: boolean = false;

  constructor(private highlightService: HighlightPrismService) {}

  ngAfterViewChecked() {
    if (!this.isLoaded) {
      this.highlightService.highlightAll();
      this.isLoaded = true;
    }
  }

  ngOnInit(): void {
  }

  sampledata = [
    {category: 'eastern food', type:'food'},
    {category: 'western food', type:'drink'},
    {category: 'middle east food', type:'snack'},
    {category: 'eastern food', type:'drink'},
    {category: 'western food', type:'snack'}
  ];
  
  filteritems = {
    category:[ 'eastern food', 'western food'],
    type:['food', 'drink']
  }

}
