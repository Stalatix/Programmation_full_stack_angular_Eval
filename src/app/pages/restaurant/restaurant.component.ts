import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private RestaurantService: RestaurantService) {
  }

  public ngOnInit(): void {
    this.RestaurantService.getRestaurants().subscribe({
      next: restaurants => this.restaurants = restaurants
    })
  }

  public createRestaurant(livre: LivreFormContent): void {
    this.livreService.createLivre(livre.titre).subscribe({
      next: value => this.livres.push(value)
    })
  }
}
