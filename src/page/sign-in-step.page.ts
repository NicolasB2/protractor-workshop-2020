import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private emailTf: ElementFinder;
  private passwdTf: ElementFinder;
  private submitBtn: ElementFinder;

  constructor () {
    this.emailTf = $('#email');
    this.passwdTf =  $('#passwd');
    this.submitBtn = $('#SubmitLogin');
  }

  public async login(): Promise<void> {
    await this.emailTf.sendKeys('aperdomobo@gmail.com');
    await this.passwdTf.sendKeys('WorkshopProtractor');
    await this.submitBtn.click();
  }
}
