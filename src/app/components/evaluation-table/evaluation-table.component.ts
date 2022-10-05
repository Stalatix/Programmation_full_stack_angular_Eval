import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Evaluation, Restaurant} from "../../dto/restaurant.dto";

@Component({
  selector: 'app-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.css']
})
export class EvaluationTableComponent implements OnInit {


  constructor(private router: Router) {
  }
  @Input()
  public evaluations: Evaluation[] = [];
  ngOnInit(): void {

  }
  public navigateRestaurant() :void {
    this.router.navigate(["restaurants"])
  }
}
