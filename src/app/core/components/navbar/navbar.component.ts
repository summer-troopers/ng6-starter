import {Component, OnInit} from '@angular/core';
import NavbarLink from '@shared/models/navbar-link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links: Array<NavbarLink> = [
    {
      name: 'Home',
      navigateTo: '/'
    },
    {
      name: 'About',
      navigateTo: '/about'
    },
    {
      name: 'Contact',
      navigateTo: '/contact'
    },
    {
      name: 'Login',
      navigateTo: '/auth'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
