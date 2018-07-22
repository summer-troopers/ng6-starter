import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '@modules/home/home.service';

@Component({
  selector: 'app-profile-detail-page',
  templateUrl: './profile-detail-page.component.html',
  styleUrls: ['./profile-detail-page.component.css']
})
export class ProfileDetailPageComponent implements OnInit, OnDestroy {

  id: number;
  user: any;
  private subscription: any;

  constructor(private route: ActivatedRoute, private homeService: HomeService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.getUser(this.id);

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getUser(id: number) {
    this.homeService.getUser(id).subscribe(user => this.user = user);
  }

}
