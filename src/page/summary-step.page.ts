import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private checkoutBtn: ElementFinder;

  constructor () {
    this.checkoutBtn = $('.cart_navigation span');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.checkoutBtn.click();
  }
}
