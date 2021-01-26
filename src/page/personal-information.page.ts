import { ElementFinder, element, by, browser, $ } from 'protractor';

export class PersonalInformationPage {

  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitle: ElementFinder;

  private sexCheckbox: ElementFinder;
  private expCheckbox: ElementFinder;
  private professionCheckbox: ElementFinder;
  private toolsCheckbox: ElementFinder;
  private continentCombobox: ElementFinder;
  private commandsListbox: ElementFinder;

  constructor () {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.sendButton = element(by.name('submit'));
    this.pageTitle = element(by.className('mui-col-md-6')).all(by.tagName('h1')).first();
  }

  public async getActualPageTitle(): Promise<string> {
    return this.pageTitle.getText();
  }

  private async fillForm(userData) {
    await this.firstNameField.sendKeys(userData.firstName);
    await this.lastNameField.sendKeys(userData.lastName);

    this.sexOption(userData.sex);
    this.experienceOption(userData.experience);

    for (const prof of userData.profession) {
      this.professionOption(prof);
    }

    for (const tool of userData.tools) {
      this.toolsOption(tool);
    }

    this.continentOption(userData.continent);

    for (const command of userData.commands) {
      this.commandOption(command);
    }
  }

  private async sexOption(sex: string) {
    this.sexCheckbox = $(`input[name="sex"][value="${sex}"]`);
    await this.sexCheckbox.click();
  }

  private async experienceOption(experience: number) {
    this.expCheckbox = $(`input[name="exp"][value="${experience}"]`);
    await this.expCheckbox.click();
  }

  private async professionOption(profession: string) {
    this.professionCheckbox = $(`input[name="profession"][value="${profession}"]`);
    await this.professionCheckbox.click();
  }

  private async toolsOption(tool: string) {
    this.toolsCheckbox = $(`input[name="tool"][value="${tool}"]`);
    await this.toolsCheckbox.click();
  }

  private async continentOption(continent: string) {
    this.continentCombobox = $('select[name="continents"]')
    .element(by.cssContainingText('option', continent));
    await this.continentCombobox.click();
  }

  private async commandOption(command: string) {
    this.commandsListbox = $('select[name="selenium_commands"]')
    .element(by.cssContainingText('option', command));
    await this.commandsListbox.click();
  }

  public async submit(userData) {
    await this.fillForm(userData);
    await (browser.sleep(500));
    await this.sendButton.click();
    await (await browser.switchTo().alert()).accept();
  }
}
