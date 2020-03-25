import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

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

  propertiesSubject = new Subject<any[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() { }
}
