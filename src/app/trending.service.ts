import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private _HttpClient:HttpClient) { }

    getTrending(mediaType:any):Observable<any>
    {
      return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2Y11tTtUTfdgKdPWixdjqiqU4D3gZOA7FNGkxXhLfXxS7fODCOY5AAYjU`)
    }
    getTrendingDetails(mediaType:any,id:any):Observable<any>
    {
      return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2Y11tTtUTfdgKdPWixdjqiqU4D3gZOA7FNGkxXhLfXxS7fODCOY5AAYjU`)
    }  }
