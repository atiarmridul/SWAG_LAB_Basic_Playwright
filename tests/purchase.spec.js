import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import { InventoryPage } from "../pages/inventory";

test.beforeEach(async ({ page }) => {
  //Should login with valid credentials
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("standard_user", "secret_sauce");
});


test.describe("SauceDemo Purchase Flow Test", () => {
  
  test("Checkout", async ({ page }) => {
    const Checkout = new InventoryPage(page);
    await Checkout.addtocart();
    await Checkout.checkout("Md.Atiar","Rahman","123");
  });



});
