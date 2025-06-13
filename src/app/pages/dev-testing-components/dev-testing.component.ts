import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

//*-public-mode-*/ import { MdsFormModel, MdsFormModule, MdsToggleType } from 'medes-ui';
/*-dev-mode-*/ import { MdsFormModel, MdsFormModule, MdsToggleType } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-dev-testing',
  templateUrl: './dev-testing.component.html',
  styleUrls: ['./dev-testing.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsFormModule]
})

export class DevTestingComponent implements AfterViewInit, AfterContentChecked, OnDestroy{
  @ViewChild('listenBox') listenBox: ElementRef<HTMLElement>;
  isActive = true;

  testValue = 23750000.64646;
  mdsFormModel: MdsFormModel = {
    configs: {
      mdsInputNumber: {
        totalDecimal: 2,
        isDisabled: false
      },
      mdsToggle: {
        type: MdsToggleType.CLASIC,
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
