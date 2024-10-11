import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
