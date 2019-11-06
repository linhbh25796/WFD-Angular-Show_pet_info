import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'Chính 55 tuổi';
  petImage = 'https://cdn.shopify.com/s/files/1/2490/1560/products/Annabelle03_800x.jpg?v=1545622236';

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  constructor() { }

  ngOnInit() {
  }

}
