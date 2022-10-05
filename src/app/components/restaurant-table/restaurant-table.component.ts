import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../dto/restaurant.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  constructor(private router: Router) {
  }
  @Input()
  public restaurants: Restaurant[] = [];


  public ngOnInit(): void {
  }

  public navigateEval() :void {
    this.router.navigate(["evaluations"])
  }
}
