import { Component, OnInit } from '@angular/core';
import {PerService} from '../per.service';
import { Detail } from '../Detail';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public perService: PerService
) { }

  ngOnInit() {
    this.getdetails();
  }
  details: Detail;
  getdetails(){
    this.perService.getDetails()
      .subscribe(details => {
        this.details = details;
      });
  }
  deleteDetail(id){
    this.perService.deleteDetail(id)
      .subscribe(() => {
        this.getdetails();
      });
  }
}


