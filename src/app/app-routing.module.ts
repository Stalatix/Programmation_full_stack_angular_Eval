import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantComponent} from "./pages/restaurant/restaurant.component";
import {EvaluationTableComponent} from "./components/evaluation-table/evaluation-table.component";

const routes: Routes = [

  {
    path: '', redirectTo: 'restaurants', pathMatch: "full"
  },
  {
    path: 'restaurants', component: RestaurantComponent
  },

  { path: 'evaluations', component: EvaluationTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
