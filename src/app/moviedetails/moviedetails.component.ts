import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  type:any;
  id:any;
  itemDetails:any;

  constructor(private _TrendingService:TrendingService,private _ActivatedRoute:ActivatedRoute) { 
    this.type=_ActivatedRoute.snapshot.paramMap.get("type");
    this.id=_ActivatedRoute.snapshot.paramMap.get("id");
    _TrendingService.getTrendingDetails(this.type,this.id).subscribe((data)=>{
         this.itemDetails=data;
    })
  }

  ngOnInit(): void {
  }

}
