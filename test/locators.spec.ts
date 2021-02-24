import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('load page', () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });

  describe('Filling form', async() => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const userData = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands'],
    };

    beforeAll(async () => {
      await personalInformationPage.submit(userData);
    });

    it('then should be a title', async () => {
      await expect(personalInformationPage.getActualPageTitle()).toEqual('Selenium - Automation Practice Form');
    });
  });
});
