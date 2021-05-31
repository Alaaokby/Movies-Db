import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[]=[];
    constructor(private _TrendingService:TrendingService) { 
      _TrendingService.getTrending("all").subscribe((data)=>{
  this.trendingMovies=data.results.filter((type:any)=>{
    return type.media_type=="movie"
  })
  
      })
    }
  
  ngOnInit(): void {
  }

}
