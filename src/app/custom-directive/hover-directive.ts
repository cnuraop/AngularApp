import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[customHover]"
})
export class HoverDirective {
  @Input() customHover: string;
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'orange';
  }

  private rollOutColor: string = "white";

  @HostListener("mouseenter") onmouseenter() {
    this.hiliteColor(this.customHover);
  }

  @HostListener("mouseleave") onmouseleave() {
    this.hiliteColor(this.rollOutColor);
  }

  public hiliteColor(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
