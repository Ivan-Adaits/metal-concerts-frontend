import { Component } from '@angular/core';
import { SliderComponent } from "../../bands/slider/slider.component";
import { FeaturedBandsComponent } from "../../bands/featured-bands/featured-bands.component";
import { ConcertsListComponent } from "../../concerts/concerts-list/concerts-list.component";
import { ConcertsService } from '../../../services/concerts.service';
import { BandsListComponent } from "../../bands/bands-list/bands-list.component";

@Component({
  selector: 'app-home-page',
  imports: [SliderComponent, FeaturedBandsComponent, ConcertsListComponent, BandsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(public concertsService: ConcertsService) { };


}
