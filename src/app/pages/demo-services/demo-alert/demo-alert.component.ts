import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsAlertConfig, MdsAlertService, MdsAlertType }
//*-public-*/ from '@mediadesain/core';
/*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule }
//*-public-*/ from '@mediadesain/angular';
/*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-alert',
  templateUrl: './demo-alert.component.html',
  styleUrls: ['./demo-alert.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule]
})
export class DemoAlertComponent {
  data: string;
  alertType: string;
  timeToHide: number;
  isShowIcon: boolean;
  callClass: string;

  constructor(){
    this.data = 'Data has been saved sucessfully';
    this.alertType = 'success';
    this.timeToHide = 3000;
    this.isShowIcon = true;
    this.callClass = this.constructCode();
  }

  constructCode(): string {
return `
// Import Module
import { MdsAlertService, MdsAlertType } from 'medes-ui';

// Configuration
const config: MdsAlertConfig = {
  type: ${this.getInterfaceType(this.alertType)},
  timeout: ${this.timeToHide},
  isShowIcon: ${this.isShowIcon}
};

// Trigger Alert
MdsAlertService.show(\"${this.data}\", config);`;
  }

  getInterfaceType(value: string): string {
    if (value === 'success') return 'MdsAlertType.SUCCESS';
    else if (value === 'error') return 'MdsAlertType.ERROR';
    else if (value === 'alert') return 'MdsAlertType.ALERT';
    else if (value === 'info') return 'MdsAlertType.INFO';
    else return 'MdsAlertType.STANDARD';
  }
  
  trigger(): void {
    const config: MdsAlertConfig = {
      type: MdsAlertType.STANDARD, // required
      timeout: 3000, // optional, default value = 3000
      isShowIcon: true // optional, default value = true
    };
    MdsAlertService.show('Some information will notif here', config);
  }

  triggerSuccess(): void {
    const config: MdsAlertConfig = {
      type: MdsAlertType.SUCCESS
    };
    MdsAlertService.show('Saving has been sucessfully', config);
  }
  
  triggerError(): void {
    const config: MdsAlertConfig = {
      type: MdsAlertType.ERROR
    };
    MdsAlertService.show('Saving has been filed', config);
  }

  triggerWarning(): void {
    const config: MdsAlertConfig = {
      type: MdsAlertType.ALERT
    };
    MdsAlertService.show('Makesure fillout all available field', config);
  }

  triggerInfo(): void {
    const config: MdsAlertConfig = {
      type: MdsAlertType.INFO,
    };
    MdsAlertService.show('Kindly waiting for minutes, changes will replacted', config);
  }

  preview(): void{
    const config: MdsAlertConfig = {
      type: <MdsAlertType>this.alertType,
      timeout: this.timeToHide,
      isShowIcon: this.isShowIcon
    };
    MdsAlertService.show(this.data, config);
    this.callClass = this.constructCode();
  }

}

// type: string; // required (MdsAlertType.SUCCESS, MdsAlertType.ERROR, MdsAlertType.ALERT, MdsAlertType.INFO)
// timeout: number; // optional, default value = 3000
// isShowIcon: boolean; // optional, default value = true