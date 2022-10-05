import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../dto/restaurant.dto";
import {addError} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
  }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`http://localhost:8080/restaurants`);
  }

  public getRestaurantsbyID(id:number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`http://localhost:8080/restaurants`+id);
  }
  public createRestaurant(nom: string, adresse : string): Observable<Restaurant> {
  return this.httpClient.post<Restaurant>(`http://localhost:8080/restaurants`, {nom: nom, adresse : adresse})
  }

}
