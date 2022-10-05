export interface Restaurant {

  id : number;
  nom : string;
  adresse : string;
  evaluations : Evaluation[];
  moyenne : number;
}

export interface Evaluation {

  id : number;
  commentaire : string;
  evaluateur : string;
  note : number;
  restaurant_id : number;

}
