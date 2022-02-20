import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-reset-all',
  templateUrl: './reset-all.component.html',
  styleUrls: ['./reset-all.component.scss']
})
export class ResetAllComponent implements OnInit {
componentdemo = `<!-- Filter Reset All Component -->
<mds-filter-reset [content]="'Reset All'" [(filterSelected)]="selected"></mds-filter-reset>`;
  constructor() { }

  ngOnInit(): void {
  }

}
