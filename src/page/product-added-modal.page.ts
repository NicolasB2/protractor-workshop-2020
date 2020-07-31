import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private modalBtn: ElementFinder;

  constructor() {
    this.modalBtn = $('[title="Proceed to checkout"]');
  }

  public async clickModalBtn(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.modalBtn), 3000);
    await this.modalBtn.click();
  }
}
