import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class CountriesService {
  constructor(private _http: HttpClient) {}

  // public getCountryDetail(countryName: string) {
  //   let _url: string =
  //     "http://restcountries.eu/rest/v2/name/" + countryName + "?fullText=true";
  //   return this._http.get(_url);
  // }

  public getCountries() {
    let _url: string = "https://restcountries.eu/rest/v2/all";
    return this._http.get(_url);
    // pipe(
    //   map(data => console.log(data)),
    //   catchError((e: Response) => throwError(e))
    // );
  }
}
