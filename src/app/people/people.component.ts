import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPeople:any[]=[];
    constructor(private _TrendingService:TrendingService) { 
      _TrendingService.getTrending("person").subscribe((data)=>{
  this.trendingPeople=data.results
  
      })
    }
  ngOnInit(): void {
  }

}
