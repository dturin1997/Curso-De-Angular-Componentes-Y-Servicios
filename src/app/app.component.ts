import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // imgParent = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU57yGujJ6MSt9xUpfBcLDaM1_Zh7vSTujFBiviDquzFvMdi8Zx4vx-0KPonopKG2368&usqp=CAU';
  imgParent = '';

  showImg = true;

  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
  ];

  onLoaded(img: string) {
    console.log('log padre => ', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
