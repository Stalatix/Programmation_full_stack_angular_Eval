import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  public nomInput: string = "";
  public adresseInput: string = "";

  @Output()
  public restaurantsCreated: EventEmitter<RestaurantsFormContent> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public save(form: NgForm): void {

    if (form.valid) {
      this.restaurantsCreated.emit({
       nom: this.nomInput,
        adresse: this.adresseInput
      });
    }
  }

}

export interface RestaurantsFormContent {

  nom : string;
  adresse : string;

}


