const { Given, When, Then } = require("@cucumber/cucumber");
const { homePage } = require("../page-objects/home.page");
const { chromium } = require("playwright");
const HomePage = new homePage();
Given("I redirect to the homepage", async () => {
  const logoValue = await page.innerText(HomePage.logoHomePage);
  console.log("tên logo", logoValue);
  expect(logoValue, "Swag Labs");
});
