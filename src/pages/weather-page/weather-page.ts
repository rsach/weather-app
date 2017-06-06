import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from "../../providers/weather";

/*
  Generated class for the WeatherPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-weather-page',
  templateUrl: 'weather-page.html'
})
export class WeatherPage implements OnInit{
  city:string;
  state:string;
  weather:any [];
  searchStr:string;
  cities:any [];
  zmw:string;

  constructor(public navCtrl: NavController , private weathrSrv:WeatherService ) {
    this.getDefault();

  }

  ionViewDidLoad() {
    console.log('Hello WeatherPage Page');
  }


  ngOnInit(){
    this.weathrSrv.getWeather()
      .subscribe(weather => {

        //noinspection TypeScriptUnresolvedVariable
        this.weather  = weather.current_observation;
        console.log(weather);
      });

  }


  getQuery(){

    this.weathrSrv.searchCities(this.searchStr)
      .subscribe(res => {
        //noinspection TypeScriptUnresolvedVariable
        this.cities = res.RESULTS;
        console.log(this.cities);
      });

  }


  selectCity(city){
    this.cities = [];
    this.zmw = city.zmw
    this.weathrSrv.getWeather(this.zmw)
      .subscribe(weather => {

        //noinspection TypeScriptUnresolvedVariable
        this.weather  = weather.current_observation;
        console.log(weather);
      });

  }

  getDefault(){

    this.zmw = '02101.1.99999';
  }



}
