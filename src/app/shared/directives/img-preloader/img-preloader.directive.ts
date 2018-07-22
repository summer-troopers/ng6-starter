import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appImgPreloader]'
})
export class ImgPreloaderDirective implements OnInit {

  @Input('appImgPreloader') source: string;
  @HostBinding('attr.src') srcImage: any;

  private placeholder = 'https://uploads-ssl.webflow.com/57e5747bd0ac813956df4e96/5aebae14c6d254621d81f826_placeholder.png';
  private imageToDownload: any;

  constructor() {
  }

  ngOnInit() {

    this.setImage(this.placeholder);

    this.imageToDownload = new Image();
    this.imageToDownload.onload = () => {
      this.setImage(this.source);
    };

    if (this.source) {
      this.imageToDownload.src = this.source;
    }

  }

  setImage(image: string) {
    if (!image) {
      return;
    }

    this.srcImage = image;
  }
}
