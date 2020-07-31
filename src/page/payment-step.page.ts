import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private paymentOpt: ElementFinder;

  constructor () {
    this.paymentOpt = $('.bankwire');
  }

  public async proceedToPayment(): Promise<void> {
    await this.paymentOpt.click();
  }
}
