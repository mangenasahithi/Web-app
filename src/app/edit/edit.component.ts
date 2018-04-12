import { Component, OnInit } from '@angular/core';
import {PerService} from '../per.service';
import { Detail } from '../Detail';
import { ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    public perService: PerService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.getDetail();
  }
  model = new Detail();
  getDetail(){
    const id = this.route.snapshot.params['id'];
    this.perService.getDetail(id)
      .subscribe(detail => {
        this.model = detail;
      });
  }
  updateDetail(){
    const id = this.route.snapshot.params['id'];
    this.perService.updateDetail(id, this.model)
      .subscribe(() => this.goBack());
  }
  goBack(){
    this.router.navigate(['/home']);
  }
}
