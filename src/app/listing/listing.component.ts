import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from '../Services/property.service';
import { Property } from '../Interfaces/property.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class ListingComponent {
  propertyForm: FormGroup;
  submitted = false;
  imagePreview: string = 'assets/home13.jpeg'; 

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private propertyService: PropertyService
  ) {
    this.propertyForm = this.fb.group({
      title: ['', Validators.required],
      propertyType: ['', Validators.required],
      rooms: ['', Validators.required],
      kitchen: ['', Validators.required],
      toilet: ['', Validators.required],
      bathroom: ['', Validators.required],
      state: ['', Validators.required],
      lga: ['', Validators.required],
      country: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      description: ['', Validators.required],
      imageUrl: ['']
    });
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.propertyForm.patchValue({ imageUrl: this.imagePreview });
      };

      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
  const editData = this.propertyService.getEditProperty();
  if (editData) {
    this.propertyForm.patchValue(editData.property);
  }
}

onCreate() {
  this.submitted = true;

  if (this.propertyForm.valid) {
    const formValue = this.propertyForm.value;
    const editData = this.propertyService.getEditProperty();

    if (editData) {
      this.propertyService.updateProperty(formValue, editData.index);
    } else {
      this.propertyService.addProperty(formValue);
    }

    this.router.navigate(['dashboard/properties']);
  } else {
    this.propertyForm.markAllAsTouched();
  }
}


}
