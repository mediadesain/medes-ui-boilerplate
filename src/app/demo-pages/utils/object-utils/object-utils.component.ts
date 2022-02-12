import { Component, OnInit } from '@angular/core';
// import { MdsObjectUtils } from 'medes-ui';
import { MdsObjectUtils } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'medes-object-utils',
  templateUrl: './object-utils.component.html',
  styleUrls: ['./object-utils.component.scss']
})
export class ObjectUtilsComponent implements OnInit {
import = `import { MdsObjectUtils } from 'medes-ui';`;
demo = `const object = {
  "firstname": "Jhon",
  "lastname": "",
  "gender": null,
  "city": undefined
};
MdsObjectUtils.removeKeysIfEmpty(object); // output {"firstname":"Jhon"}`;
  constructor() { }

  ngOnInit(): void {
    console.log(MdsObjectUtils.removeKeysIfEmpty({"firstname":"Jhon","lastname":"","gender":null,"city": undefined}))
  }

}
