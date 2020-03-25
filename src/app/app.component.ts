import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ImmoStyle';

  constructor() {
    const firebaseConfig = {
        apiKey: 'AIzaSyAiON4K9ea3ZD3tZs3yeYfhMJsOelPBiqg',
        authDomain: 'ng-immo-style.firebaseapp.com',
        databaseURL: 'https://ng-immo-style.firebaseio.com',
        projectId: 'ng-immo-style',
        storageBucket: 'ng-immo-style.appspot.com',
        messagingSenderId: '460276003663',
        appId: '1:460276003663:web:e899c233f4834e509e0b3a',
        measurementId: 'G-G4RZ5J2GGK'
      };
    firebase.initializeApp(firebaseConfig);
  }
}
