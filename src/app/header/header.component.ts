import { Component, OnInit } from '@angular/core';
import SwiperCore, { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// installer les modules nécessaires
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
    new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
