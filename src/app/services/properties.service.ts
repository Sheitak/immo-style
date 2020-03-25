import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Property } from '../interfaces/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  properties: Property[];

  //   {
  //     title: 'Rose des sables',
  //     category: 'Villa',
  //     sold: true
  //   },
  //   {
  //     title: 'Plume de nature',
  //     category: 'Maison',
  //     sold: false
  //   },
  //   {
  //     title: 'Coeur de village',
  //     category: 'Appartement',
  //     sold: true
  //   }
  // ];

  propertiesSubject = new Subject<Property[]>();

  constructor() { }

  emitProperties() {
    this.propertiesSubject.next(this.properties);
  }

  getProperties() { }

  createProperties(property: Property) {
    this.properties.push(property);
  }

  deleteProperty(index) {
    this.properties.splice(index, 1);
    this.emitProperties();
  }

  updateProperty(property: Property, index) {
    this.properties[index] = property;
    this.emitProperties();
  }
}
