const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const assert = require("assert");
const utils = require("../Utility/BaseClass");
const LoginPage = require("../Pages/LoginPage");

let browser;
let context;
let page;
let loginpage;
Given("The user should be in facebook page", async function () {
  console.log("User Navaiagted to faceBook login Page with help of Hooks");
});

When(
  "The user has to fill the username {string} and password {string}",
  async function (user, pass) {
    loginpage = new LoginPage(this.page);
    await loginpage.enterUsername(user);
    await loginpage.enterPassword(pass);
  },
);
When("The user has to click the login button", async function () {
 await loginpage.clickLogin();
});
Then("The user should be navigate to invalid login page", async function () {
  const title = await utils.getPageTitle(this.page);
  assert.ok(title.includes("Facebook"));
  console.log("User In Invalid Page");
 
});

