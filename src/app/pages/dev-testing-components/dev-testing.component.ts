import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactWrapperComponent } from 'src/app/shared/components/react-wrapper/react-wrapper.component';

import { MdsFormModel }
//*-public-*/ from '@mediadesain/core';
/*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsFormModule }
//*-public-*/ from '@mediadesain/angular';
/*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-dev-testing',
  templateUrl: './dev-testing.component.html',
  styleUrls: ['./dev-testing.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsFormModule, ReactWrapperComponent]
})

export class DevTestingComponent implements AfterViewInit, AfterContentChecked, OnDestroy{
  @ViewChild('listenBox') listenBox: ElementRef<HTMLElement>;
  isActive = true;
  // sampleProp = { value: 'Angular', message: 'Try mix angular x react' }
  sampleProp = {
    id: 'test-modal-1',
    model: {
      configs: {
        modalWidth: 'medium',
        scrollInTheModal: false,
        marginVertical: 50,
        borderRadius: 3,
        hideCloseButton: false,
        disableCloseBackdrop: false
      }
    },
  }

  testValue = 23750000.64646;
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsInputNumber: {
        totalDecimal: 2,
        isDisabled: false
      },
      mdsToggle: {
        type: 'clasic',
        color: 'swatch-c',
        isDisabled: true
      }
    }
  }


  onUpdate(val: any): void {
    console.log(val)
  }
    
  private resizeObserver: ResizeObserver;
  constructor(private cdr: ChangeDetectorRef){
  }

  ngAfterViewInit(): void { 
    // Testing Listening sroll resize
    this.listenBox.nativeElement.addEventListener('scroll', this.onscrollChange );
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        console.log('Resize changes:', entry);
        // console.log('Resize changes:', entry.target.clientWidth < entry.target.scrollWidth);
      }
    });
    this.resizeObserver.observe(this.listenBox.nativeElement);
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.listenBox.nativeElement.removeEventListener('scroll', this.onscrollChange);
    if (this.resizeObserver) this.resizeObserver.disconnect();
  }

  onscrollChange(event: Event): void{
    console.log('Scroll changes:', event)
  }
  
}
