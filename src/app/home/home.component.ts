import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trendingMovies:object[]=[];
trendingTvshows:object[]=[];
term:string="";
  constructor(private _TrendingService:TrendingService) { 
    _TrendingService.getTrending("all").subscribe((data)=>{
this.trendingMovies=data.results.filter((type:any)=>{
  return type.media_type=="movie"
})

this.trendingTvshows=data.results.filter((type:any)=>{
  return type.media_type=="tv"
})

    })
  }




  ngOnInit(): void {
  }
  
}
