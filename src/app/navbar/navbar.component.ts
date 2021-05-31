import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean=false;
logout(){
  localStorage.removeItem("token");
  this._Router.navigateByUrl("/login");
  this._AuthGuardService.showMenuItems.next(null)
}

  constructor(private _Router:Router,private _AuthGuardService:AuthGuardService) { 
    _AuthGuardService.showMenuItems.subscribe(()=>{
      if(_AuthGuardService.showMenuItems.getValue()==null){
        this.isLogin=false;

      }
      else{
        this.isLogin=true;
      }


    })
   
  }

  ngOnInit(): void {
  }

}
