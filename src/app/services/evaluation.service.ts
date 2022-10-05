import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../dto/restaurant.dto";
import {EvaluationsComponent} from "../pages/evaluations/evaluations.component";

class Evaluations {
}

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(private httpClient: HttpClient) {
  }

  public getEvaluations(): Observable<Evaluations[]> {
    return this.httpClient.get<Evaluations[]>(`http://localhost:8080/restaurants`);
  }
}
