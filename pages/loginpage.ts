import { expect, Page } from "@playwright/test";

export class LoginPage {
  page: any;
  passwordField: any;
  usernameField: any;
  loginButton: any;
  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.getByTestId('username');
    this.passwordField = page.getByTestId('password');
    this.loginButton = page.getByRole('button', { name: 'LOGIN' })
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.saucedemo.com/v1/");
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/v1/inventory.html"
    );
  

  
  }
}
