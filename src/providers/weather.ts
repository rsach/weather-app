import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Weather provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {


  private apiKey:string;
  private conditionUrl:string;
  private searchUrl:string;

  constructor(public http: Http) {
    this.apiKey = '07f1cd203ddff77d';
    this.conditionUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q/';
    this.searchUrl = 'http://api.wunderground.com/search/aq?query=';

  }


  getWeather(zmw='CA/San_Francisco'){
    return this.http.get(this.conditionUrl+zmw+'.json')
      .map(res => res.json());
  }

  searchCities(searchStr){
      return this.http.get(this.searchUrl+searchStr)
        .map(res => res.json());


  }


}
