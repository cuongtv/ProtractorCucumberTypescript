import { $, by, element, ElementFinder } from "protractor";

export class CustomerHeaderBar {
  public btnLogout: ElementFinder;

  constructor() {
    this.btnLogout = element(
      by.xpath("//app-header//button[.//mat-icon[@svgicon='logout-variant']]")
    );
  }
}
