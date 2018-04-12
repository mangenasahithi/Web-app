import { Component, OnInit } from '@angular/core';
import {PerService} from '../per.service';
import { Detail } from '../Detail';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    public perService: PerService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getDetail();
  }
  detail: Detail;
  getDetail(){
    const id = this.route.snapshot.params['id'];
    this.perService.getDetail(id)
      .subscribe(detail => {
        this.detail = detail;
      });
  }
  goBack(){
    this.router.navigate(['/home']);
  }
}
