const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const assert = require("assert");
const utils = require("../Utility/BaseClass");
const RegistrationPage = require("../Pages/RegistrationPage");

let browser;
let context;
let page;
let registrationpage;
When("The user has to click the create new account button", async function () {
  registrationpage=new RegistrationPage(this.page)
  await registrationpage.clickCreateAccount();
});
When(
  "The user has to fill the firstname,lastName and other details",
  async function () {
    await registrationpage.enterFirstName("ramesh");
    await registrationpage.enterLastName("Kumar");
  },
);
When("The user has to click the submit button", async function () {
  await registrationpage.clickSubmit();
});
Then("The user should be get successfully registered meassage",async function () {
  console.log("User Successfully Registered");
  
});
