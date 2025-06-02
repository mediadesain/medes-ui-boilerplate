import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*-- Import medes-ui --*/ import { MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface } from 'projects/medes-ui/src/public-api';


// import { MdsInputModule } from 'projects/medes-ui/src/lib/mds-input/mds-input.module';

@Component({
  selector: 'mds-demo-testing',
  templateUrl: './demo-testing.component.html',
  styleUrls: ['./demo-testing.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsPageManagerModule /*, MdsInputModule*/]
})

export class DemoTestingComponent implements AfterViewInit, AfterContentChecked, OnDestroy{
  @ViewChild('listenBox') listenBox: ElementRef<HTMLElement>;
  testValue = 5;

  data = ["Coral Brien", "Savion Thao", "Jaron Rose", "Jazmyne Tice", "Sage Mireles", "Kalyn Caswell", "Roy Wiley", "Theodore Talbot", "Marquise Elkins", "Reese Barnhill", "Bobbie Contreras", "Haleigh Klein", "Kaela Winkler", "Jackeline Patterson", "Jaleel Laney", "Enzo Sutherland", "Josefina Bates", "Nautica Power", "Kylah Crist", "Casey Shirley", "Kari Mahoney", "Kaycee Ayres", "Anjelica Devore", "Priscilla Beavers", "Jamison Mcalister", "Abby Keaton", "Lucia Mayhew", "Dayton Pedraza", "Marcanthony Casas", "Yasmeen German", "Dianna Casteel", "Yolanda Gerard", "Kelis Will", "Caiden Toro", "Angela Hong", "Darrell Rust", "Chelsea Waller", "Pedro Perez", "Bryce Keys", "Janie Cantu", "Jose Lemay", "Shekinah Block", "Braden Romero", "Mira Best", "Jacquelyn Ennis", "Kaeli Turley", "Halley Heil", "Hattie Tobias", "Gillian Arthur", "Matthew Saenz", "Lorenzo Biggs", "Liana Padilla", "Patience Rowell", "Quentin Dewey", "Shauna Barry", "Breanna Kang", "Livia Lively", "Ananda Newsom", "Paris Joiner", "Luis Austin", "Jon Pagan", "Nathaniel Parry", "Zachariah Knowles", "Ignacio Wolff", "Keven Stuckey", "Alexus Arnold", "Vivian Webster", "Astrid Ibrahim", "Makaylah Thomason", "Verania Beckman", "Maximiliano Gillette", "Julius Lockwood", "Nelly Eller", "Adilene Stanley", "Declan Wadsworth", "Chance Wellman", "Karolina Watters", "Lamar Cooke", "Trista Bills", "Korbin Begay", "Chaim Beckwith", "Ameer Whitten", "Jodi Dugan", "Angie Kirsch", "Korey Barnhart", "Keshaun Morrell", "Belen Elliott", "Kaci Varela", "Junior Longoria", "Johnathon Clark", "Jaelyn Cash", "Kaycee Heinz", "Ernesto Lozano", "Tina Windham", "Arron Boehm", "Tiera Yost", "Lydia Stine", "Augustus Purvis", "Nathanial Mayes", "Maia Zimmerman", "Judy Cabrera", "Ulysses Hofmann", "Averi Miner", "Dashawn Cates", "Pierce Rowe", "Brookelyn Hutson", "Malka Vu", "Audrey Hayward", "Terri Lott", "Mustafa Kasper", "Marlee Anaya", "Lance Earle", "Rigoberto Ponder", "Krysten Nobles", "Guillermo Heredia", "Annamarie Wing", "Jefferson Gage", "Gwendolyn Derosa", "Javion Adair", "Ashlyn Tarver"]

  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: 15,
    // selectedPage: 1,
    // selectedRange: {
      //   start: 0,
      //   end: 0
    // }
  }
    
    
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
