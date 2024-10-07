import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'matias';
  public nameUpper: string = 'MATIAS';
  public fullName: string = 'mAtIas hErReRa';

  public customDate: Date = new Date();

}
