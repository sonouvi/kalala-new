import { Component, signal } from '@angular/core';
import { LISTE_PROJETS } from './projet.model';



@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {

   projectList = LISTE_PROJETS;

}
