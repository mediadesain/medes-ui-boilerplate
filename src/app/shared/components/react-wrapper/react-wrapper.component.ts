import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { createRoot, Root } from 'react-dom/client';
import { CommonModule } from '@angular/common';
import * as React from 'react';
import {MyReactComponent, MdsModalComponent } from 'projects/medes-ui-react/src/public-api';
// import MyReactComponent from '../../../../../projects/medes-ui/src/lib/react/MyReactComponent'; // Adjust path as needed
// import { MyReactComponent } from 'medes-ui-react';



@Component({
  selector: 'mds-react-wrapper',
  template: '<div #reactContainer></div>{{props|json}}',
  standalone: true, // If using standalone components
  imports: [CommonModule]
})
export class ReactWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactContainer', { static: true }) reactContainer!: ElementRef;
  @Input() props;

  private root!: Root;

  ngAfterViewInit() {
    this.root = createRoot(this.reactContainer.nativeElement);
    this.renderReactComponent();
  }

  ngOnDestroy() {
    this.root.unmount(); // Clean up React component on Angular component destruction
  }

  private renderReactComponent() {
    this.root.render(React.createElement(MdsModalComponent, this.props));
  }
}