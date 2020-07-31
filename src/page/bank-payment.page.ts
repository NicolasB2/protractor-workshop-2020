import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrder: ElementFinder;

  constructor () {
    this.confirmOrder = (element(by.partialButtonText('I confirm my order')));
  }

  public async goToConfirmOrder(): Promise<void> {
    await this.confirmOrder.click();
  }
}
