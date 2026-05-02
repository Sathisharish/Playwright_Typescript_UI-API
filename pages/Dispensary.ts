import { expect, Locator, Page } from '@playwright/test';
import BasePage from '../utils/BasePage';

export default class loginPage {
  private page: Page;
  private BasePage;
  private Dispensary: Locator;
  private MainDispensary: Locator;
  private MainDispensaryToolTip: Locator;
  private RegElement: Locator;
  constructor(page: Page) {
    this.page = page;
    this.Dispensary = this.page.getByRole('link', { name: 'Dispensary ' })//getByRole('textbox', { name: 'Username' });
    this.MainDispensary = this.page.locator('a').filter({ hasText: 'Main Dispensarydispensary' })
    this.MainDispensaryToolTip = this.page.locator('h6');
    this.RegElement = this.page.locator("//p[text()='Registered Patient ']");
    this.BasePage = new BasePage(this.page);
  }

  async verifyDispensaryToolTips(){
  
  await this.page.getByRole('link', { name: 'Dispensary ' }).click();
  await this.page.waitForEvent('domcontentloaded',{timeout:(60000)}); 
  await this.MainDispensary.waitFor();
  await this.page.locator('a').filter({ hasText: 'Main Dispensarydispensary' }).click();
  await this.MainDispensaryToolTip.waitFor();
//   await this.page.waitForEvent('domcontentloaded');
  await expect(this.page.locator('h6')).toContainText('You are currently in Main Dispensary dispensary. To change, you can always click here.');
  await this.page.locator('div').filter({ hasText: /^Night Counter click to Activate$/ }).nth(2).click();
  
  }
}