import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.http.service";
import { HoverDirective } from "../custom-directive/hover-directive";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "countries-component",
  template: `
    <table align="center" border="1" cellpadding="5" cellspacing="0">
      <thead style="background-color:yellow">
        <tr>
          <th>Country</th>
          <th>Capital</th>
          <th>Currency</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr [customHover]="'pink'" *ngFor="let country of countries">
          <td>{{ country.name }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.currencies[0].code }}</td>
          <td><img height="50" src="{{ country.flag }}" width="100" /></td>
        </tr>
      </tbody>
    </table>

    <div
      class="search-results"
      infiniteScroll
      [infiniteScrollDistance]="2"
      [infiniteScrollThrottle]="50"
      (scrolled)="onScroll()"
    ></div>
  `,
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
  public countries: any = [];
  public originalposts: any = [];
  public endoffile: string = "Reached end of file";

  // scrollCallback;

  constructor(private countriesService: CountriesService) {
    // this.scrollCallback = this.getStories.bind(this);
  }

  ngOnInit() {
    this.countriesService.getCountries().subscribe(response => {
      this.originalposts = response;
      this.countries = this.originalposts.slice(0, 20);
      // this.countries = this.countries.slice(0, 20);
    });

    // this.countriesService
    //   .getCountries()
    //   .subscribe(response => (this.originalposts = response as any));
  }

  // getStories() {
  //   return this.countriesService.getCountries().do(this.processData);
  // }

  // private processData = countries => {
  //   this.countries = this.countries.concat(countries.json());
  // };

  // @HostListener("window:scroll", ["$event"])
  // onScroll($event: Event): void {
  //   console.log("On Scroll");
  //   //Logic To Check whether we are bottom of the page
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     console.log("On Scroll Down");
  //     //Write logic here for loading new content.

  //     this.getStories();
  //   }
  // }

  onScroll() {
    console.log("scrolled down!!");

    if (this.countries.length < this.originalposts.length) {
      let len = this.countries.length;
      console.log(len);
      for (let i = len; i <= len + 20; i++) {
        this.countries.push(this.originalposts[i]);
      }
    }
  }

  onScrollUp() {
    console.log("scrolled up!!");
  }
}
