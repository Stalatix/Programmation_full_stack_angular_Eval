import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) {
  }

  public getLivres(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`http://localhost:8080/livres`);
  }

  public createLivre(titre: string): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(`http://localhost:8080/livres`, {titre: titre})
  }

}
