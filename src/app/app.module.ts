import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RestaurantTableComponent } from './components/restaurant-table/restaurant-table.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { DirectiveMoyenneDirective } from './directives/directive-moyenne.directive';
import { EvaluationTableComponent } from './components/evaluation-table/evaluation-table.component';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    RestaurantComponent,
    DirectiveMoyenneDirective,
    EvaluationTableComponent,
    EvaluationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
