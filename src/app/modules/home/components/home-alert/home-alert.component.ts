import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-alert',
  templateUrl: './home-alert.component.html',
  styleUrls: ['./home-alert.component.css']
})
export class HomeAlertComponent implements OnInit {

  @Input() alert: any = null;
  @Output() onClose = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  closeAlert() {
    this.onClose.emit({
      closed: true
    });
  }

}
