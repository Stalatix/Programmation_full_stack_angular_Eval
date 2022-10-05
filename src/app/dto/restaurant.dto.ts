export interface Restaurant {

  id : number;
  nom : string;
  adresse : string;
  evaluations : Evaluation[];

}

export interface Evaluation {

  id : number;
  commentaire : string;
  evaluateur : string;
  note : number;
  restaurant_id : number;

}
