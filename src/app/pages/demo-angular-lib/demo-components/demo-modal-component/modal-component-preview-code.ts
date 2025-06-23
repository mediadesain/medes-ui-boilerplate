export const htmlCode = `
<!-- Button Modal -->
<button class="btn-swatch-a" (click)="openModal('demo-modal-1')">Overview Modal</button>

<!-- Medes Modal Component -->
<mds-modal id="demo-modal-1" [model]="mdsModalModelConfig">
    <!-- Header -->
    <div class="modal-header padding-1">
        <h4 class="txt-transculant">A Tall Custom Modal!</h4>
    </div>
    <!-- Body -->
    <div class="modal-body padding-1 padding-b-0">
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
        <div style="max-width: 700px; margin: 0 auto;">
            <img src="https://www.mediadesain.com/assets/images/elements/office.jpg"/>
        </div>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
    </div>
    <!-- Footer -->
    <div class="modal-footer x-100 flex-x justify-between">
        <button class="btn-swatch-reset" (click)="openModal('demo-modal-1');">Cancel</button>
        <button class="btn-swatch-a" (click)="openModal('demo-modal-1')">Save</button>
    </div>
</mds-modal>`;

export const htmlCode2 = `
<!-- Button Modal -->
<button class="btn-swatch-a" (click)="openModal('demo-modal-1')">Overview Modal</button>

<!-- Medes Modal Component -->
<mds-modal id="demo-modal-1" [model]="mdsModalModelConfig">
    <!-- Body -->
    <div class="modal-body padding-1 padding-b-0">
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
        <div style="max-width: 700px; margin: 0 auto;">
            <img src="https://www.mediadesain.com/assets/images/elements/office.jpg"/>
        </div>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
    </div>
</mds-modal>`;


export const interfaceCode = `
interface MdsModalModel {
  configs: {
    modalWidth?: 'small'|'medium'|'large'|'fullscreen' | number;
    scrollInTheModal?: boolean;
    marginVertical?: number;
    borderRadius?: number;
    hideCloseButton?: boolean;
    disableCloseBackdrop?: boolean;
  }
}`;

