exports.loginPage = class loginPage {
  constructor() {
    this.username = '//input[@id="user-name"]';
    this.password = '//input[@id="password"]';
    this.submitLoginBtn = '//input[@id="login-button"]';
    this.errorMessage = '//h3[@data-test="error"]';
    this.linkHome = "https://www.saucedemo.com/inventory.html";
  }
};
