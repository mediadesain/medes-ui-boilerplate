import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mds-filter-drpopdown',
  templateUrl: './mds-filter-drpopdown.component.html',
  styleUrls: ['./mds-filter-drpopdown.component.scss']
})
export class MdsFilterDrpopdownComponent implements OnInit {
  

  @Input() filterBy: any;
  @Output() filterByChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.filterBy)
  }

  update(){
    console.log('zxc');
    this.filterByChange.emit({ "type": ["food"] });
  }

}
