import { expect, Locator, Page } from '@playwright/test';
import BasePage from '../utils/BasePage';

export default class loginPage {
  private page: Page;
  private BasePage;
  private Username: Locator;
  private Password: Locator;
  private signIn: Locator;
  private RegElement: Locator;
  constructor(page: Page) {
    this.page = page;
    this.Username = this.page.locator('#username_id') //getByRole('textbox', { name: 'Username' });
    this.Password = this.page.getByRole('textbox', { name: 'Password' });
    this.signIn = this.page.getByRole('button', { name: 'Sign in' });
    this.RegElement = this.page.locator("//p[text()='Registered Patient ']");
    this.BasePage = new BasePage(this.page);
  }
  async login(user: string, pass: string) {
    console.log(user, pass);
    await this.BasePage.fill(this.Username, user);
    await this.BasePage.fill(this.Password, pass);
    await this.BasePage.click(this.signIn);
  }

  async verification(textExpect: string) {
    await this.page.waitForLoadState('domcontentloaded');
    await this.RegElement.waitFor();
    await expect(this.RegElement).toBeVisible();
    await expect(this.RegElement).toHaveText(textExpect);
  }

  
}


