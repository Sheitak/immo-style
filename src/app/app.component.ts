import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImmoStyle';

  properties = [
    {
      title: 'Rose des sables',
      category: 'Villa',
      sold: true
    },
    {
      title: 'Plume de nature',
      category: 'Maison',
      sold: false
    },
    {
      title: 'Coeur de village',
      category: 'Appartement',
      sold: true
    }
  ];

  getSoldValue(index) {
    if (this.properties[index].sold) {
      return 'red';
    } else {
      return 'green';
    }
  }
}
