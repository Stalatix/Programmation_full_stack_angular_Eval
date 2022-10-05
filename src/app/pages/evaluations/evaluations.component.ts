import { Component, OnInit } from '@angular/core';
import {Evaluation, Restaurant} from "../../dto/restaurant.dto";
import {RestaurantService} from "../../services/restaurant.service";
import {EvaluationService} from "../../services/evaluation.service";

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  public evaluations: Evaluation[] = [];
  constructor(private evaluationService: EvaluationService) { }

  ngOnInit(): void {
    //this.evaluationService.getRestaurantsbyID(1).subscribe({
     //next: evaluations => this.evaluations = evaluations
    //})
  }

}
