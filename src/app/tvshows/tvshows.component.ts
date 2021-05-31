import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {
  trendingTvshows:any[]=[];
  constructor(private _TrendingService:TrendingService) { 
    _TrendingService.getTrending("all").subscribe((data)=>{
this.trendingTvshows=data.results.filter((type:any)=>{
  return type.media_type=="tv"
})

    })
  }

  ngOnInit(): void {
  }

}
