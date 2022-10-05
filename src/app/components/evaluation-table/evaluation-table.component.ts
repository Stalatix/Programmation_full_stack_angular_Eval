import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.css']
})
export class EvaluationTableComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }
  public navigateRestaurant() :void {
    this.router.navigate(["restaurants"])
  }
}
