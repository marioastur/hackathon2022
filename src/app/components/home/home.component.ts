import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pets:any[] = [];
  constructor(private petsService: ApiService) {

  }

  ngOnInit(): void {
    this.getAllPets()
  }
  public getAllPets(): void {
    this.petsService.getAllPets().subscribe({
      next: (response: Object[]) => {
        this.pets = response;
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
