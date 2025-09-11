import { Component } from '@angular/core';
import { LISTE_EVENTS } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  // il faut gérer la condition sur le bouton billet-complet-infos
  listEvents = LISTE_EVENTS;

}
