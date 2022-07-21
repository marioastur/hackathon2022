import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:string | undefined;
  pet:any;

  constructor(private route: ActivatedRoute, private petsService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.getOnePet();
  }

  public getOnePet():void{
    if (!this.id) {
      return;
    }
    this.petsService.getOnePetById(this.id).subscribe({
    next:(response: Object) => {
      this.pet = response;
      console.log(response);
    },
    error: (error: HttpErrorResponse) => {
    alert(error.message);
    }
  }
    )


  }


}
