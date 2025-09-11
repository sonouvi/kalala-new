import { Component } from '@angular/core';
import { LISTE_RESEAUX } from './social-network.model';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.css']
})
export class SocialNetworkComponent {
  SocialNetworkList = LISTE_RESEAUX;
}
