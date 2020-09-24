import { Given, Then, When } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import { CustomerLoginPage } from "../../pages/customerLogin/customerLoginPO";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const EC = ExpectedConditions;

const loginPage: CustomerLoginPage = new CustomerLoginPage();

Given(/^I am on OneAP Customer Login page$/, async () => {
  await browser.driver.get(
    "https://oneapstg.americanexpress.com/achautostg#/login"
  );
  browser.waitForAngular();
});

When(/^I enter username "(.*?)"$/, async (text) => {
  loginPage.userid.clear().then(() => {
    loginPage.userid.sendKeys(text);
  });
});

When(/^I enter password "(.*?)"$/, async (text) => {
  loginPage.password.clear().then(() => {
    loginPage.password.sendKeys(text);
  });
});

When(/^I click on button Login$/, async () => {
  await loginPage.btnLogin.click();
  browser.waitForAngular();
});

Then(/^I would loggin success$/, async () => {
  browser.wait(EC.not(EC.urlContains("/login")), 5000);
});
