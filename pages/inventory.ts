import { expect } from "@playwright/test";

export class InventoryPage {
  page: any;
  firstProduct: any;
  secondProduct: any;
  addToCurtButton: any;
  returnToHome: any;
  cartButton: any;
  cartFirstProduct: any;
  checkoutbutton: any;
  cartSecondProduct: any;
  firstName: any;
  lastName: any;
  postCode: any;
  continueButton: any;
  finishButton: any;
  constructor(page) {
    this.page = page;
    this.firstProduct = page.locator(".inventory_item_name").nth(0);
    this.secondProduct = page.locator(".inventory_item_name").nth(1);
    this.addToCurtButton = page.getByRole("button", { name: "ADD TO CART" });
    this.returnToHome = page.getByRole("button", { name: "<- Back" });
    this.cartButton = page.locator(
      '//a[@class="shopping_cart_link fa-layers fa-fw"]'
    );
    this.cartFirstProduct = page.locator(".inventory_item_name").nth(0);
    this.cartSecondProduct = page.locator(".inventory_item_name").nth(1);
    this.checkoutbutton = page.getByRole("link", { name: "CHECKOUT" });
    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.postCode = page.getByRole("textbox", { name: "Zip/Postal Code" });
    this.continueButton = page.getByRole("button", { name: "CONTINUE" });
    this.finishButton = page.getByRole("link", { name: "FINISH" });
  }

  async addtocart() {
    //add the products from the landing page to cart page.
    const firstItemName = await this.firstProduct.innerText();
    const secondItemName = await this.secondProduct.innerText();
    await this.firstProduct.click();
    await this.addToCurtButton.click();
    await this.returnToHome.click();
    await this.secondProduct.click();
    await this.addToCurtButton.click();
    await this.cartButton.click();

    //verify that right products are added in the card.
    expect(await this.cartFirstProduct.innerText()).toEqual(firstItemName);
    expect(await this.cartSecondProduct.innerText()).toEqual(secondItemName);
  }

  async checkout(firstname, lastname, postcode) {
    //checkout flow.
    await this.checkoutbutton.click();
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.postCode.fill(postcode);
    await this.continueButton.click();
    await this.finishButton.click();
    //verify that purchase flow is complete. 
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/v1/checkout-complete.html"
    );
    console.log("Purchase Complete");
  }
}
