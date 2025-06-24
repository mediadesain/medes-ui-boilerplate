<!-- > # This is beta version
> - medes-ui package not published yet
> - This branch is still on development only mediadesain team able to run
> - Choose release branch to run. example: 1.17.1 -->

# Mediadesain UI Library
This UI library was created & used by Mediadesain Team and open for public. Demo and preview medes-ui. For more detail about documentation visit official site [here](https://doc.mediadesain.com/).

## How to Install & Use
### MedesUI Lib Install
- Install Mediadesain UI - Library `npm i medes-ui`.
- Install with spesific version `npm i medes-ui@0.0.1`.
- Import Stying.
- Import JavaScript/Typescript Utils on Library.
- Import Angular lib modules, component or utils to use.
- To run demo page `npm run start`.

## Version
More detail about the changes writen on [changelog](https://github.com/mediadesain/medes-ui-boilerplate/blob/main/CHANGELOG.md).
### 1.18.X (Release - 250624)
- Refactor - Angular Components input. Minimalize using multiple Input and use single object oriented and parse to child component
- Refactor - Input model for Modal Component
- Refactor - Input model for Filter Components
- Refactor - Input model for Page Navigation Manager Components
- Refactor - reduce usage of *ngIf and use @if
- Refactor - reduce usage of *ngFor and use @for
- Refactor - reduce usage of ng-container
- Refactor Stling - Refactor layot util styling, Current existing still exist will removed on next minor version update
- Enhancement - Modal Component Styling now having scrollable insde or full height 
- Enhancement - Filter Color Swatch Components now resetable
- Enhancement - Page Navigation component color now aplicable with available color on color scheme
- Change PageNavigationConfigInterface to PageNavigationModel
- Update documentation