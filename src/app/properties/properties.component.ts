import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Services/property.service';
import { Property } from '../Interfaces/property.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
  imports: [CommonModule]
})
export class PropertiesComponent implements OnInit {
  properties: Property[] = [];
  showModal = false;
  deleteIndex: number | null = null;

  constructor(private propertyService: PropertyService, private router: Router) {}

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

  openModal(index: number) {
    this.deleteIndex = index;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirmDelete() {
    if (this.deleteIndex !== null) {
      this.propertyService.deleteProperty(this.deleteIndex);
      this.properties = this.propertyService.getProperties();
      this.closeModal();
    }
  }

  editProperty(property: Property, index: number) {
    this.propertyService.setEditProperty(property, index);
    this.router.navigate(['dashboard/listing']);
  }
}
