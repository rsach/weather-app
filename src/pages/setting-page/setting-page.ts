import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from "../../providers/weather";

/*
  Generated class for the SettingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting-page',
  templateUrl: 'setting-page.html'
})
export class SettingPage implements OnInit{

  defaultCity:string;
  searchStr:string;
  cities:any[];

  constructor(public navCtrl: NavController , private  weatherSrv:WeatherService) {}

  ionViewDidLoad() {
    console.log('Hello SettingPage Page');
  }

  ngOnInit(){
    this.getDefault();
  }

  getDefault(){

    //noinspection TypeScriptUnresolvedVariable
    if(localStorage.city !== "undefinded"){
      //noinspection TypeScriptUnresolvedVariable
      this.defaultCity = JSON.parse(localStorage.city);
    }
    this.defaultCity = '';
  }

  saveChanges(){


  }

  selectCity(city){
    this.cities = [];
    if( typeof(Storage) !== "undefined"){
      //noinspection TypeScriptUnresolvedVariable
      localStorage.city = JSON.stringify(city);
      this.searchStr = city.name
      this.getDefault();
  }else {
      console.log('Local Storage not supported');
    }
}

  getQuery(){
    this.weatherSrv.searchCities(this.searchStr)
      .subscribe(res => {
        //noinspection TypeScriptUnresolvedVariable
        this.cities = res.RESULTS;
      })
  }

}
