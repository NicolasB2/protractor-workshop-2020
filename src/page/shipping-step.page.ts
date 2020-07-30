import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private check: ElementFinder;
  private checkoutBtn: ElementFinder;

  constructor () {
    this.check = $('#cgv');
    this.checkoutBtn = $('#form > p > button > span');
  }

  public async agreeToTheTerms(): Promise<void> {
    await this.check.click();
    await this.checkoutBtn.click();
  }
}
