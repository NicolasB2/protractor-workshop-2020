import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInPage, AddresStep,
  ShippingStepPage, PaymentStepPage, BankPaymentPage,
  OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {

  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('select the t-shirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.selectProduct('Faded Short Sleeve T-shirts');
      await productAddedModalPage.clickModalBtn();
      await summaryStepPage.proceedToCheckout();
    });

    describe('then login in the application', () => {
      beforeAll(async () => {
        const signInPage: SignInPage = new SignInPage();
        await signInPage.login();
      });

      describe('select the default address', () => {
        beforeAll(async () => {
          const addresStep: AddresStep = new AddresStep();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addresStep.proceedToCheckout();
          await shippingStepPage.agreeToTheTerms();
        });

        describe('make the bank payment', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

            await paymentStepPage.proceedToPayment();
            await bankPaymentPage.goToConfirmOrder();
          });

          it('then should be bought a t-shirt', async () => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getTitle())
              .toBe('Your order on My Store is complete.');
          });

        });
      });
    });
  });
});
