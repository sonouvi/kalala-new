import { Component } from '@angular/core';
import { LISTE_MEMBRES } from './team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  teamMembers = LISTE_MEMBRES;

}
