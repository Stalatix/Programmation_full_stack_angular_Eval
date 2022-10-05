import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {RestaurantsFormContent} from "../../components/restaurant-form/restaurant-form.component";

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

  public createRestaurant(restaurant: RestaurantsFormContent): void {
    this.RestaurantService.createRestaurant(restaurant.nom,restaurant.adresse).subscribe({
        next: value => this.restaurants.push(value)
  })
 }
}
