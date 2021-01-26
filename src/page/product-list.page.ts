import { browser, ExpectedConditions, ElementArrayFinder, $$ } from 'protractor';

export class ProductListPage {

  private products: ElementArrayFinder;

  constructor () {
    this.products = $$('.product-container');
  }

  private findByProduct(productName: String) {
    return this.products.filter(product =>
      product.$('.product-name').getText().then((currentProduct) => {
        return currentProduct === productName;
      })
    ).first();
  }

  public async selectProduct(productName: String) {
    const productSearched = this.findByProduct(productName);
    await browser.wait(ExpectedConditions.elementToBeClickable(productSearched), 3000);
    await productSearched.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
