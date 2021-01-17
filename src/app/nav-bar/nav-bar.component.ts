import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService) {

    //TODO 
    // auth.isAuthenticated ?
  }

  ngOnInit(): void {
  }
}
