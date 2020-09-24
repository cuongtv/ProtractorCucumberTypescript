import { Given, Then, When } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import { CustomerHeaderBar } from "../../pages/customerHeader/customerHeaderPO";

const headerBar: CustomerHeaderBar = new CustomerHeaderBar();

Then(/^I click on button Logout$/, async () => {
  await headerBar.btnLogout.click();
});
