const { Given, When, Then } = require("@cucumber/cucumber");
const { loginPage } = require("../page-objects/login.page");
const { chromium } = require("playwright");

const LoginPage = new loginPage();
Given("I am on the login page", async () => {
  await page.goto("https://www.saucedemo.com/");
});
Given(
  "I enter valid credentials with {string} and {string}",
  async (userName, passWord) => {
    await page.type(LoginPage.username, userName);
    await page.type(LoginPage.password, passWord);
  }
);
Given(
  "I enter invalid credentials with {string} and {string}",
  async (userName, passWord) => {
    await page.type(LoginPage.username, userName);
    await page.type(LoginPage.password, passWord);
  }
);
Given(
  "I should be shown the error message {string}",
  async (errorMessageExpectation) => {
    const errorActual = await page.innerText(LoginPage.errorMessage);
    expect(errorActual).to.equal(errorMessageExpectation);
  }
);

Given("I click on login button", async () => {
  await page.click(LoginPage.submitLoginBtn);
});
