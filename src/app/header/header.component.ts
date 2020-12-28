/*
 *   Copyright (c) 2020
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import firebase from 'firebase/app'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Agence ImmoStyle';

  isLoggedIn = false;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (userSession) => {
        if (userSession) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOutUser();
  }
}
