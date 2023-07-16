import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.jpeg';

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
  }

  ngOnChanges() {
    // before - while render
    // cambios en los inputs
    // corre muchas veces
    console.log('ngOnChanges ', 'imgValue => ', this.img);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
