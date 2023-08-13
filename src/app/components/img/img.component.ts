import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpeg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // se corre una vez
    // no correr cosas de forma async
    console.log('constructor ', 'imgValue => ', this.img);
  }

  ngOnInit(): void {
    // before render
    // si se puede correr async - fetch
    // corre una sola vez
    console.log('ngOnInit ', 'imgValue => ', this.img);
    /*
    this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
    */
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - while render
    // cambios en los inputs
    // corre muchas veces
    console.log('ngOnChanges ', 'imgValue => ', this.img);
    /*
    console.log(changes);
    if(changes.){

    }
    */
    console.log('changes', changes);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
