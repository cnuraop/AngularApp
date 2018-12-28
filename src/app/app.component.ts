import { Component } from "@angular/core";
import { CountriesService } from "./services/countries.http.service";
import "rxjs/add/operator/do";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-task";

  // news: Array<any> = [];

  // scrollCallback;

  // constructor(private hackerNewsSerivce: CountriesService) {
  //   this.scrollCallback = this.getStories.bind(this);
  // }

  // getStories() {
  //   return this.hackerNewsSerivce.getCountries().do(this.processData);
  // }

  // private processData = news => {
  //   this.news = this.news.concat(news.json());
  // };
}
