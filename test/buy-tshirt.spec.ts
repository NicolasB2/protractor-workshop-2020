import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage,
  SummaryStepPage, SignInPage, AddresStep,
  ShippingStepPage, PaymentStepPage, BankPaymentPage,
  OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInPage = new SignInPage();
  const addresStep: AddresStep = new AddresStep();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart();
    await productAddedModalPage.clickModalBtn();
    await summaryStepPage.proceedToCheckout();
    await signInPage.login();
    await addresStep.proceedToCheckout();
    await shippingStepPage.agreeToTheTerms();
    await paymentStepPage.proceedToPayment();
    await bankPaymentPage.goToConfirmOrder();

    await expect(orderSummaryPage.getTitle())
      .toBe('Your order on My Store is complete.');
  });
});
