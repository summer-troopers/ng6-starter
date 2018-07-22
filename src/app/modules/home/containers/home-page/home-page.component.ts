import {Component, OnInit} from '@angular/core';
import {HomeService} from '@modules/home/home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  defaultAlerts: any[] = [
    {
      type: 'warning',
      msg: `You successfully read this important alert message.`
    }
  ];

  alerts = this.defaultAlerts;

  users: any;

  messageFromResolver: any;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.homeService.getUsers('alex').subscribe(users => this.users = users);

    this.messageFromResolver = this.route.snapshot.data.message;

    this.defaultAlerts.push({
      type: 'info',
      msg: this.messageFromResolver
    });

  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
