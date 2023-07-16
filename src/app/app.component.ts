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

  onLoaded(img: string) {
    console.log('log padre => ', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
