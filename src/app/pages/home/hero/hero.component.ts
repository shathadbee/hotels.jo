import { Component } from '@angular/core';
import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  sliderNavData = [
    {
      id: 1,
      img: 'https://i.ibb.co/svVv3Qt/oryx-hotel-aqaba.jpg',
      title: '',
      subtitle: 'Oryx',
      bgColor: 'orange-bg',
    },
    {
      id: 2,
      img: 'https://i.ibb.co/tmhHxZZ/Screenshot-2023-02-18-at-8-32-37-PM.png',
      title: '',
      subtitle: 'Mövenpick',
      bgColor: 'blue-bg',
    },
    {
      id: 3,
      img: 'https://storage.kempinski.com/cdn-cgi/image/w=480,h=550,f=auto,g=auto,fit=cover/ki-cms-prod/images/0/5/9/1/311950-1-eng-GB/10ed85706c3f-74342834_4K.jpg',
      title: '',
      subtitle: 'KEMPINSKI',
      bgColor: 'pink-bg',
    },
    {
      id: 4,
      img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/68/45/8a/exterior.jpg?w=1100&h=-1&s=1',
      title: '',
      subtitle: 'Hilton',
      bgColor: 'green-bg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
