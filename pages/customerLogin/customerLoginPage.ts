import { $, by, element, ElementFinder } from "protractor";

export class CustomerLoginPage {
  public userid: ElementFinder;
  public password: ElementFinder;
  public btnLogin: ElementFinder;
  constructor() {
    this.userid = element(by.model("self.username"));
    this.password = element(by.model("self.password"));
    this.btnLogin = element(by.css('.login-form button[type="submit"]'));
  }
}
