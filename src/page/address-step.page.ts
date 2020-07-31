import { $, ElementFinder } from 'protractor';

export class AddresStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('[name="processAddress"]');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
