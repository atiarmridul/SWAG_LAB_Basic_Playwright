import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByTestId('username');
    this.passwordField = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'LOGIN' })
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/v1/inventory.html"
    );
  

  
  }
}
