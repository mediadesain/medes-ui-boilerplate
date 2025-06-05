import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*-public-mode-*/ //import { MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface } from 'medes-ui';
// //*-dev-mode-*/  import { MdsFormModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-testing',
  templateUrl: './demo-testing.component.html',
  styleUrls: ['./demo-testing.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule/*, MdsFormModule*/]
})

export class DemoTestingComponent implements AfterViewInit, AfterContentChecked, OnDestroy{
  @ViewChild('listenBox') listenBox: ElementRef<HTMLElement>;
  isActive = true;
  testValue = 23750000.64646;
    
  private resizeObserver: ResizeObserver;
  constructor(private cdr: ChangeDetectorRef){
  }

  ngAfterViewInit(): void { 
    // Testing Listening sroll resize
    this.listenBox.nativeElement.addEventListener('scroll', this.onscrollChange );
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
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
