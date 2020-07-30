import { $, ElementFinder } from 'protractor';

export class AddresStep {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('#center_column > form > p > button > span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
