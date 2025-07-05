import { Injectable } from '@angular/core';
import { Property } from '../Interfaces/property.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private storageKey = 'properties';
  private editKey = 'editProperty';

  
  addProperty(property: Property) {
    const properties = this.getProperties();
    properties.push(property);
    localStorage.setItem(this.storageKey, JSON.stringify(properties));
  }


  getProperties(): Property[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }


  setEditProperty(property: Property, index: number) {
    localStorage.setItem(this.editKey, JSON.stringify({ property, index }));
  }


  getEditProperty(): { property: Property; index: number } | null {
    const saved = localStorage.getItem(this.editKey);
    return saved ? JSON.parse(saved) : null;
  }


  updateProperty(updatedProperty: Property, index: number) {
    const properties = this.getProperties();
    properties[index] = updatedProperty;
    localStorage.setItem(this.storageKey, JSON.stringify(properties));
    localStorage.removeItem(this.editKey);
  }


  deleteProperty(index: number) {
    const properties = this.getProperties();
    properties.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(properties));
  }
}
