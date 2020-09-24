import { Given, Then, When } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import { CustomerLoginPage } from "../../pages/customerLogin/CustomerLoginPage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const loginPage: CustomerLoginPage = new CustomerLoginPage();

Given(/^I am on OneAP Customer Login page$/, async () => {
  browser.get(browser.baseurl + "#/login");
});

When(/^I enter username "(.*?)"$/, async (text) => {
  loginPage.userid.sendKeys(text);
});

When(/^I enter password "(.*?)"$/, async (text) => {
  loginPage.password.sendKeys(text);
});

When(/^I click on button login$/, async () => {
  loginPage.btnLogin.click();
  await browser.waitForAngular();
});

Then(/^I would loggin success$/, async function () {
  expect(browser.getCurrentUrl()).to.not.contain("#/login");
});
