import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Utils from '../mds-utils/mds-utils';
import { CheckBoxModelInterface, FilterModelInterface, FilterSelectedInterface } from './mds-filter-checkbox.inteface';

@Component({
  selector: 'mds-filter-checkbox',
  templateUrl: './mds-filter-checkbox.component.html',
  styleUrls: ['./mds-filter-checkbox.component.scss']
})
export class MdsFilterCheckboxComponent implements OnInit {

  @Input() classgroup: string | undefined;
  @Input() titlegroup: string | undefined;
  @Input() closegroup: string | undefined;
  @Input() reset: string | undefined;
  @Input() filterData: any;
  @Input() filterBy!: string[];
  @Input() filterSelected!: FilterSelectedInterface;
  filterList: FilterModelInterface = {}
  filterSelectedUrl: FilterSelectedInterface = {};
  
  constructor(
    public router: Router,
    public activeroute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.filterToCheckbox();
  }

  filterToCheckbox(){
    if (!this.filterBy)
      return;
    this.filterBy.forEach( (prop: string) => {
      // Create Filter Model
      if(!this.filterData)
        return
      const getAllValue = this.filterData.map( (item:any) => item[prop] );
      const listval = [...new Set(getAllValue.flat())];
      const convertcheckbox:any = [];
      listval.forEach( (val: any) => {
        const obj:any = {};
        obj['text'] = val;
        obj['value'] = Utils.konfersiURLslug(val);
        if(!obj['ischecked'])
          obj['ischecked'] = false;
        this.activeroute.queryParams.subscribe( param => {
          if(param[prop]){
            const isArray = param[prop].includes(',');
            const checkArrOrStr = isArray ? param[prop].split(',') : [param[prop]];
            const isInclude = checkArrOrStr.map( (a: string) => a === obj['value']).includes(true);
            obj['ischecked']= isInclude ? true : false;
          }
        });
        convertcheckbox.push(obj);
      })
      this.filterList[prop] = convertcheckbox;
      // Selected Filter Model
      setTimeout( () => {
        this.filterSelected[prop] = this.filterList[prop].filter((a)=>a.ischecked).map((a:any)=>a.text);
        this.filterSelectedUrl[prop] = this.filterList[prop].filter((a)=>a.ischecked).map((a)=>a.value);
        if(this.filterSelected[prop].length == 0)
          delete this.filterSelected[prop]
      }, 500);
    });
  }


  checkBoxFilter(filterSelected: FilterSelectedInterface, filterSelectedUrl: FilterSelectedInterface, prop: string, select: CheckBoxModelInterface) {
    // ----- IF URL PARAMETER EMPTY ----- //
    if (!filterSelected[prop] || !filterSelectedUrl[prop]) {
      filterSelected[prop] = []
      filterSelectedUrl[prop] = []
    }
    this.router.navigate([], { 
      queryParams: {[prop]: select.value},
      queryParamsHandling: 'merge'
    })

    // ----- IF URL PARAMETER EXSIEST ----- //
    const idx = filterSelected[prop].indexOf(select.text)
    if (idx > -1) {
      // Remove param value/s
      filterSelected[prop].splice(idx, 1);
      filterSelectedUrl[prop].splice(idx, 1);
      // Delete property if value/s empty
      if (filterSelected[prop].length == 0 || filterSelectedUrl[prop].length == 0) {
        delete filterSelected[prop]
        delete filterSelectedUrl[prop]
      }
      // Remove to url queryParam
      this.router.navigate([], { 
        queryParams: {[prop]: filterSelectedUrl[prop] ? filterSelectedUrl[prop].join() : null},
        queryParamsHandling: 'merge'
      })
    } else {
      // Add property value/s
      filterSelectedUrl[prop],filterSelected[prop].push(select.text);
      filterSelectedUrl[prop].push(select.value);
      // Add to url queryParam
      this.router.navigate([], { 
        queryParams: {[prop]: filterSelectedUrl[prop].join()},
        queryParamsHandling: 'merge'
      })
    }
  }

  resetFilter(filter: FilterModelInterface, filterSelected: FilterSelectedInterface, prop:string){
    filter[prop].forEach( (a:any) => a.ischecked = false );
    delete filterSelected[prop]
    this.router.navigate([], { 
      queryParams: {[prop]: null},
      queryParamsHandling: 'merge'
    })
  }

  resetAll(filter: FilterModelInterface, filterSelected: FilterSelectedInterface, props:string[]){
    props.forEach( (prop) => {
      filter[prop].forEach( (a:any) => a.ischecked = false);
      delete filterSelected[prop]
      this.router.navigate([], { queryParams: {} })
    });
  }

}
