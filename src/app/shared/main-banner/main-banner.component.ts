import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent {

  @Input({ required: true }) src!: string;
  @Input({ required: true }) alt!: string;

}
