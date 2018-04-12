import { Component, OnInit } from '@angular/core';
import {PerService} from '../per.service';
import { Detail } from '../Detail';
import { ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    public perService: PerService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {

  }
  model = new Detail();
  addDetail(){
    this.perService.addDetail(this.model)
      .subscribe(() => this.goBack());
  }
  goBack(){
    this.router.navigate(['/home']);
  }
}
