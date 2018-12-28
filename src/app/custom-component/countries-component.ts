import { Component, OnInit } from "@angular/core";
import { CountriesService } from "../services/countries.http.service";
import { HoverDirective } from "../custom-directive/hover-directive";
import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { map } from "rxjs/operators";
import { InfiniteScrollerDirective } from "../custom-directive/infinite-scroller-directive";

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
        <tr
          [customHover]="'pink'"
          *ngFor="let country of (countries | slice: 0:10)"
        >
          <td>{{ country.name }}</td>
          <td>{{ country.capital }}</td>
          <td>{{ country.currencies[0].code }}</td>
          <td><img height="50" src="{{ country.flag }}" width="100" /></td>
        </tr>
      </tbody>
    </table>
  `,
  providers: [CountriesService]
})
export class CountriesComponent implements OnInit {
  public countries: any;

  scrollCallback;

  constructor(private countriesService: CountriesService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  ngOnInit() {
    this.countriesService
      .getCountries()
      .subscribe(response => (this.countries = response as any));
  }

  getStories() {
    return this.countriesService.getCountries().do(this.processData);
  }

  private processData = countries => {
    this.countries = this.countries.concat(countries.json());
  };

  @HostListener("window:scroll", ["$event"])
  onScroll($event: Event): void {
    console.log("On Scroll");
    //Logic To Check whether we are bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("On Scroll Down");
      //Write logic here for loading new content.

      this.getStories();
    }
  }
}
